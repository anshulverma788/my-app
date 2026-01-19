import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Layout & UI
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/animations/ScrollReveal';

// Custom Components
import ExploreLocations from '../ExploreKey/ExploreLocations';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import {
  Users,
  Hotel,
  CheckCircle2,
  XCircle,
  ChevronDown,
  MapPinned,
  Car,
  Languages,
  PawPrint,
  CalendarClock,
  Snowflake,
  Utensils,
  Mountain,
  ArrowRight,
  IndianRupee,
  MapPin
} from 'lucide-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Leaflet Map Imports
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- HELPER: CALCULATE BEARING FOR CAR ROTATION ---
const getBearing = (lat1, lon1, lat2, lon2) => {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const toDeg = (rad) => (rad * 180) / Math.PI;

  const dLon = toRad(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(toRad(lat2));
  const x =
    Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  const brng = toDeg(Math.atan2(y, x));
  return (brng + 360) % 360;
};

// --- COMPONENT: MOVING REAL CAR MARKER (FIXED ROTATION) ---
const MovingCarMarker = ({ route }) => {
  const markerRef = useRef(null);
  const animationRef = useRef(null);

  // Custom Car Icon - Blue Car (Main Color) with Orange Accents
  const carIcon = L.divIcon({
    className: 'custom-car-icon',
    html: `<div style="
      width: 42px; 
      height: 42px; 
      display: flex; 
      align-items: center; 
      justify-content: center;
      transform-origin: center;
      filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3));
    ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="42" height="42">
        <path d="M120.3 430.7c-13-13.1-23.7-33-28.9-63.5L72.2 268.4c-3.1-17.7-2.9-35.8 1.1-53.1l17.9-78c9.4-40.9 36.3-75.1 73.9-93.1 27.4-13.1 57.1-20.1 87.5-20.5h6.9c30.4.4 60.1 7.4 87.5 20.5 37.6 18 64.5 52.2 73.9 93.1l17.9 78c4 17.3 4.2 35.4 1.1 53.1l-19.1 98.8c-5.2 30.5-15.9 50.4-28.9 63.5-13.6 13.7-32.3 21.6-51.5 21.6H171.8c-19.2 0-37.9-7.9-51.5-21.6z" fill="#2563eb"/> 
        <path d="M149.3 147.2c5.6-18.7 22.8-31.6 42.4-31.6h128.6c19.6 0 36.8 12.9 42.4 31.6l16 53.3H133.3l16-53.3z" fill="#1e293b"/>
        <rect x="140" y="210" width="232" height="130" rx="20" fill="#3b82f6"/>
        <path d="M153.3 360h205.4l-12.8 40H166.1l-12.8-40z" fill="#1e293b"/>
        <ellipse cx="120" cy="90" rx="10" ry="20" fill="#f97316" transform="rotate(-15 120 90)"/> 
        <ellipse cx="392" cy="90" rx="10" ry="20" fill="#f97316" transform="rotate(15 392 90)"/>
      </svg>
    </div>`,
    iconSize: [42, 42],
    iconAnchor: [21, 21], 
  });

  useEffect(() => {
    if (!markerRef.current || !route || route.length < 2) return;

    let startTime = null;
    const duration = 16000; // 16 seconds loop

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % duration;
      const pct = progress / duration;

      const totalSegments = route.length - 1;
      const segmentProgress = pct * totalSegments;
      const currentSegmentIndex = Math.floor(segmentProgress);
      const nextSegmentIndex = (currentSegmentIndex + 1) % route.length;
      
      if (route[currentSegmentIndex] && route[nextSegmentIndex]) {
        const segmentPercent = segmentProgress - currentSegmentIndex;
        const [lat1, lng1] = route[currentSegmentIndex];
        const [lat2, lng2] = route[nextSegmentIndex];

        // Move Car
        const lat = lat1 + (lat2 - lat1) * segmentPercent;
        const lng = lng1 + (lng2 - lng1) * segmentPercent;
        markerRef.current.setLatLng([lat, lng]);

        // Rotate Car
        const angle = getBearing(lat1, lng1, lat2, lng2);
        const iconElement = markerRef.current.getElement();
        if (iconElement) {
           const innerDiv = iconElement.firstChild;
           if(innerDiv) {
             innerDiv.style.transition = 'none'; 
             innerDiv.style.transform = `rotate(${angle}deg)`;
           }
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [route]);

  return <Marker ref={markerRef} position={route[0]} icon={carIcon} zIndexOffset={1000} />;
};

// ---------- ANIMATION VARIANTS ----------
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

// ---------- DATA SECTION ----------

const tourDetailsData = [
  { icon: Hotel, label: "Stay", value: "3★ Hotels" },
  { icon: Utensils, label: "Meals", value: "BF & Dinner" },
  { icon: Car, label: "Travel", value: "Private Cab" },
  { icon: Users, label: "Group", value: "Family" },
  { icon: Languages, label: "Lang", value: "Hin, Eng" },
  { icon: Snowflake, label: "Season", value: "All Year" },
  { icon: CalendarClock, label: "Time", value: "7D / 6N" },
  { icon: Mountain, label: "Type", value: "Hill Stn" },
  { icon: PawPrint, label: "Pets", value: "Allowed" },
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const gridItemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

const TourDetailsGrid = () => {
  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 mt-6"
    >
      {tourDetailsData.map((item, idx) => (
        <motion.div
          key={idx}
          variants={gridItemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-2 sm:p-5 bg-white rounded-xl sm:rounded-2xl border border-blue-100 shadow-sm transition-all duration-300"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <item.icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">
              {item.label}
            </p>
            <p className="text-[11px] sm:text-base font-bold text-slate-800 leading-tight">
              {item.value}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// 2. Hero Slides
const heroSlides = [
  {
    image: 'https://cdn.pixabay.com/photo/2013/12/22/22/01/india-232725_1280.jpg',
    title: 'Shimla Manali Family Tour',
    subtitle: 'Mountains • Snow • Adventure',
    days: '7 Days | 6 Nights',
  },
  {
    image: 'https://images.unsplash.com/photo-1655470062377-ef3f5161960a?q=80&w=1170&auto=format&fit=crop',
    title: 'Snowy Peaks of Himachal',
    subtitle: 'Experience the Magic of Manali',
    days: 'Customizable',
  },
  {
    image: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868?q=80&w=1982&auto=format&fit=crop',
    title: 'Scenic Valleys',
    subtitle: 'Nature at its Best',
    days: 'Best Seller',
  },
];

// 3. Highlights
const tourHighlights = [
  'Delhi/Chandigarh to Shimla & Manali scenic road journey with mountain views.',
  'Shimla local – Ridge, Mall Road, Christ Church & famous viewpoints.',
  'Exciting day trip to Kufri with snow (seasonal) & fun activities for kids & family.',
  'Transfer to Manali via Kullu, Pandoh Dam & Beas river sightseeing.',
  'Manali local – Hadimba Temple, Club House, Vashisht Temple & Hot Springs.',
  'Solang Valley visit with optional snow activities & adventure sports (seasonal).',
  'Optional Atal Tunnel / Sissu excursion on extra cost.',
  'Comfortable family stays with breakfast & dinner throughout the trip.',
  'Ample time for shopping, café hopping & leisure with your family.',
];

// 4. Itinerary
const itinerary = [
  {
    day: 'Day 01',
    title: 'Delhi / Chandigarh → Shimla',
    description: 'Pickup and smooth drive to Shimla via beautiful valleys.',
    details: 'Morning pickup from Delhi/Chandigarh. Start your journey towards Shimla. Enroute enjoy views of the Shivalik hills, lush green valleys & small towns. On arrival in Shimla, check in to your hotel. Evening free to relax. Overnight stay at Shimla.',
  },
  {
    day: 'Day 02',
    title: 'Shimla Local Sightseeing',
    description: 'Explore Ridge, Mall Road, Christ Church & nearby points.',
    details: 'After breakfast, head for local sightseeing of Shimla. Visit The Ridge, Christ Church, Lakkar Bazaar, Kali Bari Temple and stroll around the famous Mall Road. Enjoy street food, shopping & cafés. Evening at leisure. Overnight stay at Shimla with dinner.',
  },
  {
    day: 'Day 03',
    title: 'Kufri Excursion & Mashobra',
    description: 'Full day trip to Kufri snow point with option to visit Mashobra.',
    details: 'Post breakfast, proceed for a day excursion to Kufri – a popular snow destination (seasonal). Enjoy horse riding, yak rides, viewpoints and family photo spots. Later you can visit Mashobra / Naldehra. Return to Shimla in the evening. Overnight stay at Shimla.',
  },
  {
    day: 'Day 04',
    title: 'Shimla → Manali via Kullu',
    description: 'Scenic transfer with enroute sightseeing at Kullu region.',
    details: 'After breakfast, check out from the Shimla hotel and drive towards Manali. Enroute enjoy views of rivers, valleys & mountains. Stop near Kullu for local sightseeing, shawl factory visit & optional river rafting. By evening reach Manali, check in at hotel and relax. Overnight stay at Manali.',
  },
  {
    day: 'Day 05',
    title: 'Manali Local Sightseeing',
    description: 'Discover Manali town – Hadimba, Vashisht & Mall Road.',
    details: 'Post breakfast, start Manali local sightseeing – visit Hadimba Devi Temple surrounded by deodar trees, Vashisht Temple & Hot Springs, Club House and Tibetan Monastery. Later in the evening, spend free time at Mall Road for shopping. Overnight stay at Manali.',
  },
  {
    day: 'Day 06',
    title: 'Solang Valley • Optional Atal Tunnel',
    description: 'Day trip to Solang Valley for snow & adventure activities.',
    details: 'After breakfast, proceed towards Solang Valley – famous for its snow views and adventure activities like skiing, tube rides, paragliding, ATV rides. If roads & permits allow, you can also opt for an additional excursion to Atal Tunnel. Return to Manali by evening. Overnight stay at Manali.',
  },
  {
    day: 'Day 07',
    title: 'Manali → Delhi / Chandigarh',
    description: 'Return journey with beautiful memories.',
    details: 'After breakfast, check out from hotel. Drive back towards Delhi / Chandigarh with amazing memories of your Shimla – Manali family trip. Drop at your desired point & tour ends with happy faces.',
  },
];

// 5. Inclusions/Exclusions
const includeFeatures = [
  'Accommodation in 3★ family-friendly hotels in Shimla (2N) & Manali (4N).',
  'Daily breakfast & dinner at the hotel (as per meal plan).',
  'Pickup & drop from Delhi / Chandigarh by AC vehicle.',
  'All transfers & sightseeing by private cab / AC Tempo Traveller.',
  'Driver night charges, toll taxes, parking & fuel charges included.',
  'Dedicated tour coordinator support on call during the trip.',
];

const excludeFeatures = [
  'Train / Flight tickets to and from Delhi / Chandigarh.',
  'Any personal expenses like laundry, tips, telephone etc.',
  'Lunches and any meals not mentioned in the inclusions.',
  'Adventure activities, monument entry fees & ropeways.',
  'Atal Tunnel / Rohtang excursion charges & permits.',
  'Anything not specifically mentioned in the inclusions list.',
];

const relevantPackages = [
  {
    image: 'https://i.pinimg.com/1200x/94/f7/d2/94f7d2e8bfb747c215417e7186a89f55.jpg',
    title: 'Shimla Manali Premium Family Package',
    country: 'Himachal Pradesh',
    days: '7 Days / 6 Nights',
    price: '₹22,999',
  },
  {
    image: 'https://i.pinimg.com/1200x/f9/18/5d/f9185df520a8230154ee1299a06c77e3.jpg',
    title: 'Manali • Solang • Atal Tunnel',
    country: 'Manali, Himachal',
    days: '5 Days / 4 Nights',
    price: '₹18,999',
  },
  {
    image: 'https://i.pinimg.com/1200x/62/e6/f5/62e6f50443dfd6627a478e5f83fa0f9e.jpg',
    title: 'Short Escape – Shimla & Kufri',
    country: 'Shimla, Himachal',
    days: '4 Days / 3 Nights',
    price: '₹12,999',
  },
];

// ---------- MAIN COMPONENT ----------

export default function ShimlaManali() {
  const [openDayIndex, setOpenDayIndex] = useState(null);
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/book/shimla-manali', {
      state: {
        title: 'Shimla Manali Family Tour',
        price: 22999,
        image: heroSlides[0].image,
        duration: '7 Days / 6 Nights',
        location: 'Himachal Pradesh'
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white font-sans">
      <Navbar />

      {/* HERO SLIDER */}
      <section className="relative h-[35vh] sm:h-[80vh] md:h-[90vh] overflow-hidden group">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full [&_.swiper-button-prev]:hidden sm:[&_.swiper-button-prev]:flex [&_.swiper-button-next]:hidden sm:[&_.swiper-button-next]:flex"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                <div className="relative z-10 flex items-end sm:items-center h-full pb-16 sm:pb-0">
                  <div className="container mx-auto px-4 sm:px-6">
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-2 sm:py-2 md:py-5">
         <div className="relative mb-1 sm:mb-8 pt-4 border-b border-slate-100 flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.15] max-w-4xl mx-auto">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                Shimla Manali <span className='text-blue-600'>Family Tour</span>
              </span>
            </h1>
          </div>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">

            {/* ABOUT SECTION */}
            <ScrollReveal>
              <div id="overview">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  About Shimla Manali Family Tour
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                  Plan a perfect hill station escape with our carefully designed{' '}
                  <span className="font-semibold text-blue-600">
                    Shimla – Kufri – Manali – Solang Valley
                  </span>{' '}
                  family package. Ideal for parents, kids and elders looking for
                  a comfortable, scenic and memorable holiday in Himachal Pradesh.
                </p>

                {/* PREMIUM GRID */}
                <div className="bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100/60 mb-8">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Trip Highlights</h3>
                  <TourDetailsGrid />
                </div>
              </div>
            </ScrollReveal>

            {/* EXPLORE LOCATIONS */}
            <ScrollReveal>
              <ExploreLocations />
            </ScrollReveal>

            {/* HIGHLIGHTS */}
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Highlights of the Tour</h3>
                <Card className="border-0 shadow-lg p-5 sm:p-6 bg-white">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                    {tourHighlights.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700 text-sm sm:text-base items-start">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-blue-500 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </ScrollReveal>

            {/* ITINERARY */}
            <div className="space-y-8 relative">
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-2 sm:mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Trip Itinerary (7 Days)
                  </h3>
                </div>
                {/* Desktop Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setOpenDayIndex(openDayIndex === 'ALL' ? null : 'ALL')}
                  className="hidden sm:block text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-white border border-blue-100 shadow-sm px-5 py-2.5 rounded-full transition-colors"
                >
                  {openDayIndex === 'ALL' ? 'Collapse All Days' : 'Expand All Days'}
                </motion.button>
              </div>

              {/* Vertical Line */}
              <div className="absolute left-[19px] sm:left-[27px] top-16 bottom-10 w-[2px] bg-slate-200/60 hidden sm:block" />

              {/* Itinerary List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6 sm:space-y-8"
              >
                {itinerary.map((item, idx) => {
                  const isOpen = openDayIndex === 'ALL' || openDayIndex === idx;

                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="relative sm:pl-20 group"
                    >
                      {/* Desktop Number Circle */}
                      <motion.div
                        animate={{
                          scale: isOpen ? 1.1 : 1,
                          backgroundColor: isOpen ? '#2563eb' : '#f1f5f9', // Blue active
                          color: isOpen ? '#ffffff' : '#94a3b8',
                          borderColor: isOpen ? '#ffffff' : '#ffffff'
                        }}
                        className="hidden sm:flex absolute left-2 top-0 w-12 h-12 rounded-full border-4 items-center justify-center z-10 shadow-sm"
                      >
                        <span className="text-sm font-bold">{idx + 1}</span>
                      </motion.div>

                      {/* --- MOBILE: DAY BADGE & EXPAND BUTTON ROW (FIXED) --- */}
                      <div className="sm:hidden mb-4 flex items-center justify-between gap-3 w-full">
                        {/* Left Side: Badge and Line */}
                        <div className="flex items-center gap-3 flex-1 overflow-hidden">
                          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md shadow-blue-200 shrink-0">
                            Day {idx + 1}
                          </span>
                          <span className="h-[1px] bg-slate-200 w-full"></span>
                        </div>

                        {/* Right Side: Expand Button (ONLY FOR DAY 1) */}
                        {idx === 0 && (
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setOpenDayIndex(openDayIndex === 'ALL' ? null : 'ALL')}
                            className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm shrink-0"
                          >
                            <span>{openDayIndex === 'ALL' ? 'Collapse' : 'Expand All'}</span>
                            <ChevronDown
                              className={`w-3 h-3 transition-transform duration-300 ${openDayIndex === 'ALL' ? 'rotate-180' : ''}`}
                            />
                          </motion.button>
                        )}
                      </div>
                      {/* ----------------------------------------------------- */}

                      {/* Itinerary Card Content */}
                      <motion.div
                        layout
                        transition={{ layout: { duration: 0.3, type: "spring" } }}
                        className={`relative bg-white border rounded-2xl overflow-hidden ${isOpen
                          ? 'border-blue-200 shadow-xl shadow-blue-100/50'
                          : 'border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100'
                          }`}
                      >
                        <motion.button
                          layout="position"
                          onClick={() => setOpenDayIndex(openDayIndex === idx ? null : idx)}
                          className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 z-20 relative bg-white"
                        >
                          <div className="space-y-1">
                            <motion.h4 layout="position" className={`text-lg sm:text-xl font-bold transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
                              {item.title}
                            </motion.h4>
                            <motion.p layout="position" className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                              {item.description}
                            </motion.p>
                            {!isOpen && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex gap-2 pt-2"
                              >
                                <span className="inline-flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">
                                  <Hotel className="w-3 h-3" /> Stay Included
                                </span>
                              </motion.div>
                            )}
                          </div>

                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-5 sm:px-6 pb-6 pt-0">
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className="border-t border-slate-100 pt-4"
                                >
                                  <div className="flex gap-4">
                                    <div className="w-1 bg-gradient-to-b from-blue-400 to-blue-50 rounded-full shrink-0 h-auto" />
                                    <div className="space-y-4 w-full">
                                      <p className="text-sm sm:text-base text-slate-600 leading-7">
                                        {item.details}
                                      </p>
                                      <div className="bg-slate-50/50 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            {/* SECONDARY COLOR: ORANGE FOR FOOD */}
                                          <div className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-sm border border-orange-100">
                                            <Utensils className="w-4 h-4" />
                                          </div>
                                          <div>
                                            <p className="text-[10px] uppercase text-orange-800/60 font-bold tracking-wider">Food</p>
                                            <p className="text-xs font-semibold text-slate-700">Breakfast & Dinner</p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {/* MAIN COLOR: BLUE FOR STAY */}
                                          <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center shadow-sm border border-blue-100">
                                            <Hotel className="w-4 h-4" />
                                          </div>
                                          <div>
                                            <p className="text-[10px] uppercase text-blue-800/60 font-bold tracking-wider">Stay</p>
                                            <p className="text-xs font-semibold text-slate-700">Comfortable Family Hotel</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* MAP SECTION - WITH MOVING TOP-DOWN CAR */}
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                  <MapPinned className="w-6 h-6 text-blue-600" />
                  Shimla → Manali → Solang Route Map 
                </h3>
                <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl relative">
                  {(() => {
                    const [mapType, setMapType] = useState("normal");
                    // Route coordinates for Chandigarh -> Shimla -> Manali
                    const curvedPath = [
                      [30.7333, 76.7794], // Chandigarh
                      [30.90, 77.05],
                      [31.1048, 77.1734], // Shimla
                      [31.45, 77.20],
                      [31.75, 77.0],      // Mandi
                      [32.02, 77.15],     // Kullu
                      [32.2432, 77.1892], // Manali
                      [32.3167, 77.1587], // Solang
                    ];

                    return (
                      <div className="relative">
                        <div className="absolute right-4 top-4 z-[999] bg-white shadow-lg rounded-full flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-slate-100">
                          <span className="text-xs font-semibold text-slate-700">
                            {mapType === "normal" ? "Satellite View" : "Normal View"}
                          </span>
                          <Button
                            size="sm"
                            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-3"
                            onClick={() => setMapType(prev => prev === "normal" ? "satellite" : "normal")}
                          >
                            Switch
                          </Button>
                        </div>
                        <MapContainer
                          center={[31.5, 77.1]}
                          zoom={7}
                          scrollWheelZoom={false}
                          className="h-[320px] sm:h-[400px] w-full rounded-2xl z-0"
                        >
                          {mapType === "normal" ? (
                            <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                          ) : (
                            <TileLayer
                              attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
                              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            />
                          )}
                          <Polyline
                            positions={curvedPath}
                            pathOptions={{
                              color: "#2563eb", // Changed to Blue
                              weight: 6,
                              opacity: 0.9,
                              className: "animated-route"
                            }}
                          />
                          <Marker position={curvedPath[0]} />
                          <Marker position={curvedPath[curvedPath.length - 1]} />
                          
                          {/* THE MOVING TOP-DOWN CAR COMPONENT */}
                          <MovingCarMarker route={curvedPath} />
                        </MapContainer>

                        <style>{`
                          .animated-route {
                            stroke-dasharray: 12;
                            animation: flowing 1.6s linear infinite;
                            filter: drop-shadow(0 0 6px rgba(37, 99, 235, 0.7)); /* Blue Glow */
                          }
                          @keyframes flowing {
                            0% { stroke-dashoffset: 0; }
                            100% { stroke-dashoffset: 60; }
                          }
                          .custom-car-icon {
                            background: transparent !important;
                            border: none !important;
                          }
                        `}</style>
                      </div>
                    );
                  })()}
                </Card>
              </div>
            </ScrollReveal>

            {/* INCLUSIONS & EXCLUSIONS */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-lg mb-4 text-blue-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" /> Inclusions
                  </h4>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    {includeFeatures.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                  <h4 className="font-bold text-lg mb-4 text-rose-900 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-rose-600" /> Exclusions
                  </h4>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    {excludeFeatures.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <XCircle className="w-4 h-4 mt-0.5 text-rose-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* CUSTOMIZE SECTION */}
            <ScrollReveal>
              <div className="mb-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-blue-800 uppercase bg-blue-200/50 rounded-full">
                      Flexible Package
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Want to customize this trip?
                    </h3>
                    <p className="text-slate-600 mb-6 text-sm sm:text-base">
                      Design your own Shimla trip. Upgrade hotels, add extra nights, or include hidden gems.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" className="w-10 h-10 rounded-full border-2 border-white" />
                        ))}
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-blue-800 font-bold">Talk to experts</p>
                        <p className="text-sm font-bold text-slate-900">+91 98765 43210</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-auto shrink-0">
                    <Button className="w-full md:w-auto px-8 py-6 text-lg font-bold text-white shadow-xl bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-blue-200 transition-all hover:scale-105 flex items-center justify-center">
                      Request Callback <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* RELEVANT PACKAGES */}
            <ScrollReveal>
              <div className="space-y-4 pb-8">
                <h3 className="text-xl sm:text-2xl font-bold">Similar Himachal Packages</h3>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={16}
                  slidesPerView={1.2}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                  }}
                  className="pb-10 [&_.swiper-pagination-bullet-active]:bg-blue-500"
                >
                  {relevantPackages.map((pkg, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                      <Card className=" shadow-md overflow-hidden p-2 h-full flex flex-col group">
                        <div className="h-36 sm:h-44 overflow-hidden relative">
                          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-sm backdrop-blur-sm">
                            {pkg.days}
                          </div>
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1">
                          <h4 className="font-bold text-sm sm:text-base line-clamp-2">{pkg.title}</h4>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {pkg.country}
                          </p>
                          <div className="mt-auto pt-3 flex items-center justify-between">
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase">Per Person</p>
                              <p className="font-bold text-base sm:text-lg text-blue-600">{pkg.price}</p>
                            </div>
                            <Button size="sm" className="rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 border-0">View</Button>
                          </div>
                        </div>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT COLUMN (Sticky Sidebar) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <ScrollReveal direction="up">
                <Card className="border-0 shadow-2xl bg-white rounded-2xl overflow-hidden ring-1 ring-slate-100">
                  <div className="p-5 sm:p-6 pb-4 border-b border-slate-50 relative bg-slate-50/50">
                    {/* SECONDARY COLOR ACCENT */}
                    <span className="absolute right-4 top-4 text-[10px] font-bold bg-orange-500 text-white px-2 py-1 rounded shadow-md uppercase tracking-wider">
                      13% Off
                    </span>
                    <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">Total Deal Price</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="line-through text-sm text-slate-400">
                        <IndianRupee className="inline-block w-3 h-3" />
                        26,499
                      </span>
                    </div>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 flex items-center">
                        <IndianRupee className="inline-block w-7 h-7 sm:w-8 sm:h-8 mr-1" />
                        22,999
                      </span>
                      <span className="text-xs text-slate-500 mb-1.5 font-medium">
                        / per person
                      </span>
                    </div>
                    <p className="text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded w-max font-medium">
                      + 5% GST Applicable
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3 bg-white">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
                        <span><strong>Money Safe:</strong> Easy cancellation & flexible rescheduling options*.</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
                        <span><strong>Support:</strong> 24x7 on-trip assistance for your family.</span>
                      </div>
                    </div>

                    <Button onClick={handleBooking} className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-base py-6 shadow-lg shadow-blue-200 transition-all hover:scale-[1.02]">
                      Send Enquiry
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-slate-200 text-slate-700 hover:bg-slate-50 text-sm py-5"
                    >
                      Download PDF Itinerary
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>

              <Card className="p-4 bg-blue-900 text-white rounded-xl shadow-lg hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">Need Help?</p>
                    <p className="font-bold text-lg">98765-43210</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 px-4 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-50 flex items-center justify-between safe-area-bottom">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-wide">Starting From</span>
          <span className="text-lg font-bold text-slate-900 flex items-center">
            <IndianRupee className="w-4 h-4" /> 22,999
          </span>
        </div>
        <Button onClick={handleBooking} className="rounded-full bg-blue-600 px-6 shadow-lg shadow-blue-200">
          Book Now
        </Button>
      </div>

      <Footer />
    </div>
  );
}