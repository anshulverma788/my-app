// src/pages/destinations/Mussoorie4Days.jsx

import { useState } from 'react';

// Layout & UI
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/animations/ScrollReveal';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import {
  Calendar,
  Users,
  Star,
  MapPin,
  IndianRupee,
  Plane,
  Utensils,
  Hotel,
  Bus,
  CheckCircle2,
  XCircle,
  ChevronDown,
  MapPinned,
  ArrowRight,
  // --- NEW ICONS FOR GRID ---
  Car,
  Languages,
  PawPrint,
  CalendarClock,
  Snowflake,
  Tent,
  Mountain
} from 'lucide-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Leaflet
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// ---------- ANIMATION VARIANTS ----------

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
};

// ---------- NEW: TOUR DETAILS GRID SECTION ----------

// Data specific to Mussoorie 4D/3N Trip
const tourDetailsData = [
  { icon: Hotel, label: "Accommodation", value: "3★ Hill View Hotels" },
  { icon: Utensils, label: "Meals", value: "Breakfast & Dinner" },
  { icon: Car, label: "Transportation", value: "Private Sedan / SUV" },
  { icon: Users, label: "Group Size", value: "Couples / Family" },
  { icon: Languages, label: "Language", value: "Hindi, English" },
  { icon: Snowflake, label: "Best Season", value: "All Year Round" },
  { icon: CalendarClock, label: "Duration", value: "4 Days / 3 Nights" },
  { icon: Mountain, label: "Category", value: "Hill Station Leisure" },
  { icon: PawPrint, label: "Pet Policy", value: "On Request" },
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
    >
      {tourDetailsData.map((item, idx) => (
        <motion.div
          key={idx}
          variants={gridItemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300"
        >
          {/* Icon Box */}
          <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <item.icon className="w-6 h-6 stroke-[1.5]" />
          </div>
          
          {/* Text Content */}
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">
              {item.label}
            </p>
            <p className="text-sm sm:text-base font-bold text-slate-800 leading-tight">
              {item.value}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ---------- EXISTING DATA (MUSSOORIE 4D/3N) ----------

// HERO SLIDES
const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop',
    title: 'Mussoorie Queen of Hills',
    subtitle: 'Mall Road • Kempty Falls • Gun Hill',
    days: '4 Days | 3 Nights',
  },
  {
    image:
      'https://images.unsplash.com/photo-1579612953435-f0dd6df29cc3?q=80&w=1600&auto=format&fit=crop',
    title: 'Dhanaulti & Eco Park Escape',
    subtitle: 'Peaceful Mountains & Pine Forests',
    days: '4 Days | Customizable',
  },
  {
    image:
      'https://images.unsplash.com/photo-1623164223297-b677063462b0?q=80&w=1600&auto=format&fit=crop',
    title: 'George Everest & Cloud End',
    subtitle: 'Scenic Sunset Points & Nature Walks',
    days: '4 Days | 3 Nights',
  },
];

// EXPLORE LOCATIONS (SLIDER)
const exploreLocations = [
  {
    image:
      'https://i.pinimg.com/1200x/6d/04/e7/6d04e7602e34279093043232049d9c22.jpg',
    title: 'Mall Road & Library Chowk',
    days: 'Day 1 Evening',
  },
  {
    image:
      'https://i.pinimg.com/1200x/2c/3a/2e/2c3a2e379092404e3396603d4c063994.jpg',
    title: 'Kempty Falls & Company Garden',
    days: 'Day 2',
  },
  {
    image:
      'https://i.pinimg.com/1200x/49/c0/23/49c0231904724c979d380907d8940422.jpg',
    title: 'George Everest & Cloud End',
    days: 'Day 2',
  },
  {
    image:
      'https://i.pinimg.com/736x/87/11/4a/87114a844974f7d23f79e39f74340d99.jpg',
    title: 'Dhanaulti & Eco Park',
    days: 'Day 3',
  },
];

// TOUR HIGHLIGHTS
const tourHighlights = [
  'Pickup from Dehradun (Station/Airport) & scenic drive to Mussoorie.',
  'Evening stroll at the famous Mall Road & Library Chowk.',
  'Visit Kempty Falls (enjoy water activities) & Company Garden.',
  'Sunset views from George Everest House & Cloud’s End.',
  'Day excursion to Dhanaulti (Eco Park) & Surkanda Devi Temple (snow views in winter).',
  'Gun Hill Ropeway ride for panoramic Himalayan views.',
  'Comfortable 3-star hotel stay with breakfast & dinner included.',
];

// ITINERARY – 4 DAYS / 3 NIGHTS
const itinerary = [
  {
    day: 'Day 01',
    title: 'Arrival in Dehradun – Drive to Mussoorie',
    description:
      'Pickup, scenic uphill drive, hotel check-in & evening at Mall Road.',
    details:
      'Pickup from Dehradun Railway Station / Airport. Drive to Mussoorie (approx 1.5 hours) enjoying views of the Doon Valley. Check-in to your hotel. In the evening, visit the famous Mall Road, Library Bazaar, and enjoy a Ropeway ride to Gun Hill for a 360-degree view of the Himalayas. Dinner & overnight stay in Mussoorie.',
  },
  {
    day: 'Day 02',
    title: 'Mussoorie Local Sightseeing',
    description:
      'Kempty Falls, Company Garden, George Everest & Cloud’s End.',
    details:
      'After breakfast, proceed for local sightseeing. Visit the famous Kempty Falls (you can take a dip or enjoy the ropeway). Then visit Company Garden (wax museum inside). In the afternoon, head towards George Everest House and Cloud’s End for a peaceful nature walk and stunning sunset views. Return to hotel for dinner & overnight stay.',
  },
  {
    day: 'Day 03',
    title: 'Excursion to Dhanaulti & Surkanda Devi',
    description:
      'Day trip to the quiet hill station of Dhanaulti & ancient temple visit.',
    details:
      'Post breakfast, drive to Dhanaulti (approx 25km). Visit Eco Park (Amber & Dhara) filled with Deodar trees. If interested, proceed to Surkanda Devi Temple (requires a 1.5km uphill trek or pony ride) for breathtaking snow views (seasonal). Return to Mussoorie by evening. Explore Landour / Chaar Dukan if time permits. Dinner & overnight stay.',
  },
  {
    day: 'Day 04',
    title: 'Robber’s Cave (Dehradun) • Departure',
    description:
      'Checkout, visit Robber’s Cave / Sahastradhara & drop at Dehradun.',
    details:
      'After breakfast, check out from the hotel. Drive back towards Dehradun. Enroute, you can visit Robber’s Cave (Guchhupani) or Sahastradhara Sulphur Springs depending on your train/flight time. Drop at Dehradun Railway Station / Airport. Tour ends with sweet memories of the hills.',
  },
];

// INCLUSIONS
const includeFeatures = [
  '3 Nights accommodation in 3★ hotel in Mussoorie.',
  'Daily breakfast & dinner (as per meal plan).',
  'Pickup & drop from Dehradun by private AC Cab.',
  'All sightseeing (Mussoorie, Dhanaulti, Kempty) by private cab.',
  'Driver night charges, toll taxes, parking & fuel included.',
  '24x7 on-call trip assistance.',
];

// EXCLUSIONS
const excludeFeatures = [
  'Train / Flight tickets to and from Dehradun.',
  'Entry tickets (Kempty Falls, Gun Hill Ropeway, Eco Park, etc.).',
  'Lunch and meals not mentioned in inclusions.',
  'Room heater charges (if applicable at hotel).',
  'Any personal expenses like laundry, shopping, tips.',
  'Anything not specifically mentioned in the inclusions list.',
];

// FAQS
const faqs = [
  {
    question: 'Best time to visit Mussoorie?',
    answer:
      'Mussoorie is a year-round destination. March to June is pleasant for summers. December to February is great for winter chills and occasional snowfall. July-August sees heavy rainfall.',
  },
  {
    question: 'Is this trip suitable for seniors?',
    answer:
      'Yes, the itinerary is relaxed. However, Surkanda Devi involves a steep trek (ponies available) and Kempty Falls has steps. Rest of the points are easily accessible by car.',
  },
  {
    question: 'Can we customize the pickup from Delhi?',
    answer:
      'Yes, we can arrange a pickup directly from Delhi NCR (extra charges applicable for Delhi-Dehradun transfer). The drive from Delhi to Mussoorie takes about 6-7 hours.',
  },
  {
    question: 'Is Dhanaulti included in this package?',
    answer:
      'Yes, a day excursion to Dhanaulti and Eco Park is included on Day 3 of this itinerary.',
  },
];

// REVIEW BREAKUP
const reviewBreakup = [
  { label: 'Overall', value: 95 },
  { label: 'Transport', value: 93 },
  { label: 'Food', value: 90 },
  { label: 'Accommodation', value: 92 },
  { label: 'Tour Guide', value: 91 },
];

// SIMILAR PACKAGES
const relevantPackages = [
  {
    image:
      'https://i.pinimg.com/1200x/b2/89/38/b2893897745772643a60a72049633979.jpg',
    title: 'Mussoorie • Rishikesh Adventure',
    country: 'Uttarakhand, India',
    days: '5 Days / 4 Nights',
    price: '₹15,999',
  },
  {
    image:
      'https://i.pinimg.com/1200x/c7/23/e5/c723e590403300403332439999037c77.jpg',
    title: 'Haridwar • Rishikesh • Mussoorie',
    country: 'Golden Triangle of Uttarakhand',
    days: '6 Days / 5 Nights',
    price: '₹18,999',
  },
  {
    image:
      'https://i.pinimg.com/736x/53/16/5f/53165f9d77f8074b48bfe290e9fc0e6d.jpg',
    title: 'Nainital Lake Tour',
    country: 'Kumaon, Uttarakhand',
    days: '4 Days / 3 Nights',
    price: '₹10,499',
  },
];

// ROUTE COORDS (approx) – Dehradun → Mussoorie → Kempty → Dhanaulti
const routeCoords = [
  [30.3165, 78.0322], // Dehradun
  [30.4598, 78.0644], // Mussoorie
  [30.4850, 78.0190], // Kempty Falls
  [30.4055, 78.2307], // Dhanaulti
];

// ---------- SEPARATE ROUTE MAP COMPONENT ----------

function MussoorieRouteMap() {
  const [mapType, setMapType] = useState('normal');

  const curvedPath = routeCoords;

  return (
    <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl relative">
      <div className="relative">
        {/* Map Type Toggle */}
        <div className="absolute right-4 top-4 z-[999] bg-white shadow-lg rounded-full flex items-center gap-2 px-3 py-2">
          <span className="text-xs font-semibold text-slate-700">
            {mapType === 'normal' ? 'Satellite View' : 'Normal View'}
          </span>
          <Button
            size="sm"
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-3"
            onClick={() =>
              setMapType((prev) => (prev === 'normal' ? 'satellite' : 'normal'))
            }
          >
            Switch
          </Button>
        </div>

        <MapContainer
          center={[30.40, 78.10]}
          zoom={11}
          scrollWheelZoom={false}
          className="h-[280px] sm:h-[360px] w-full rounded-2xl"
        >
          {mapType === 'normal' ? (
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          ) : (
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          )}

          <Polyline
            positions={curvedPath}
            pathOptions={{
              color: '#2563eb',
              weight: 6,
              opacity: 0.9,
              className: 'animated-route',
            }}
          />

          {curvedPath.map((pos, idx) => (
            <Marker key={idx} position={pos} />
          ))}
        </MapContainer>

        {/* Route Animation CSS */}
        <style>{`
          .animated-route {
            stroke-dasharray: 12;
            animation: flowing 1.6s linear infinite;
            filter: drop-shadow(0 0 6px rgba(37,99,235,0.7));
          }
          @keyframes flowing {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 60; }
          }
        `}</style>
      </div>
    </Card>
  );
}

// ---------- MAIN COMPONENT ----------

export default function Mussoorie4Days() {
  const [openDayIndex, setOpenDayIndex] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 font-sans">
      <Navbar />

      {/* HERO SLIDER */}
      <section className="relative h-[65vh] sm:h-[80vh] md:h-[90vh] overflow-hidden group">
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
                    <div className="max-w-xl sm:max-w-3xl">
                      <Badge className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-md text-xs sm:text-sm px-3 py-1">
                        Starting From{' '}
                        <span className="font-semibold ml-1 inline-flex items-center">
                          <IndianRupee className="inline-block w-3 h-3 mr-1" />
                          11,499
                        </span>{' '}
                        per person
                      </Badge>

                      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3 leading-tight drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-white/90 mb-4 sm:mb-6">
                        {slide.subtitle}
                      </p>

                      <div className="inline-flex items-center bg-white/20 backdrop-blur-lg text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-6 shadow-lg border border-white/20">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                        {slide.days}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base px-6 sm:px-8 py-6 sm:py-4 shadow-lg shadow-blue-900/30">
                          <Plane className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Book This Package
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto rounded-full border-2 border-white/80 text-white bg-white/10 hover:bg-white hover:text-slate-900 text-sm sm:text-base py-6 sm:py-4 backdrop-blur-sm"
                        >
                          View All Uttarakhand Packages
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* BENEFITS BAR */}
      <div className="bg-white shadow-md border-b border-slate-100 relative z-20 -mt-2 sm:mt-0 rounded-t-2xl sm:rounded-none">
        <div className="container mx-auto px-4 py-4 md:py-5 flex flex-wrap gap-x-6 gap-y-3 items-center justify-center lg:justify-between text-xs sm:text-sm md:text-base font-medium text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>No Booking Fee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Experienced Hill Drivers</span>
          </div>
          <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0" />
            <span>
              4.8 / 5 based on <strong>350+ reviews</strong>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Trusted for Mussoorie Tours</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            
            {/* ABOUT TOUR - UPDATED WITH GRID */}
            <ScrollReveal>
              <div id="overview">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  About Mussoorie Tour (4 Days / 3 Nights)
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                  Plan a refreshing break to the{' '}
                  <span className="font-semibold text-blue-700">
                    Queen of Hills - Mussoorie
                  </span>.
                  Yeh 4 din ka package specially design kiya gaya hai taaki aap 
                  <strong> Mall Road, Kempty Falls, Dhanaulti</strong> aur 
                  baaki famous spots comfortable way mein enjoy kar sakein. 
                  Perfect for families, couples, and nature lovers.
                </p>

                {/* --- NEW ANIMATED GRID SECTION --- */}
                <div className="bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100/60 mb-8">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Trip Highlights</h3>
                    <TourDetailsGrid />
                </div>
                {/* ---------------------------------- */}

              </div>
            </ScrollReveal>

            {/* EXPLORE + CUSTOMIZE */}
            <ScrollReveal>
              <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-8">
                {/* Slider */}
                <div className="overflow-hidden">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Explore Key Locations
                  </h3>
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    breakpoints={{
                      640: { slidesPerView: 2, spaceBetween: 20 },
                      1024: { slidesPerView: 2, spaceBetween: 24 },
                    }}
                    className="pb-10"
                  >
                    {exploreLocations.map((loc, idx) => (
                      <SwiperSlide key={idx} className="h-auto">
                        <Card className="overflow-hidden border-0 shadow-md h-full flex flex-col group cursor-pointer">
                          <div className="h-40 sm:h-48 overflow-hidden">
                            <img
                              src={loc.image}
                              alt={loc.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-4 bg-white flex-1">
                            <h4 className="font-semibold text-sm sm:text-lg mb-1 group-hover:text-blue-600 transition-colors">
                              {loc.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              {loc.days}
                            </p>
                          </div>
                        </Card>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Customize Card */}
                <Card className="bg-emerald-50 border border-emerald-100 shadow-md flex flex-col justify-between h-full">
                  <div className="p-5 sm:p-6 space-y-4">
                    <Badge className="bg-emerald-100 hover:bg-emerald-100 text-emerald-700 border-0 text-[10px] sm:text-xs px-2 py-1">
                      Flexible Package
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 leading-tight">
                      Want to customize?
                      <span className="block text-emerald-700 text-lg sm:text-xl mt-1">
                        Build your own Mussoorie Trip
                      </span>
                    </h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                        Upgrade to 4★ hotel with valley view rooms.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                        Add extra night in Dhanaulti or Kanatal.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                        Pickup from Delhi NCR instead of Dehradun.
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            src={`https://i.pravatar.cc/150?img=${i + 20}`}
                            className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 object-cover"
                            alt="expert"
                          />
                        ))}
                      </div>
                      <p className="text-xs text-emerald-800 font-medium pl-2">
                        Talk to our Uttarakhand experts
                      </p>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 pt-0 mt-auto">
                    <Button className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-sm shadow-emerald-200 shadow-lg">
                      Request Callback
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            {/* TOUR HIGHLIGHTS */}
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Highlights of the Tour
                </h3>
                <Card className="border-0 shadow-lg p-5 sm:p-6 bg-white">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                    {tourHighlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-slate-700 text-sm sm:text-base items-start"
                      >
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </ScrollReveal>

            {/* ANIMATED ITINERARY */}
            <div className="space-y-8 relative">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Trip Itinerary (4 Days / 3 Nights)
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Complete Mussoorie & Dhanaulti sightseeing plan
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() =>
                    setOpenDayIndex(openDayIndex === 'ALL' ? null : 'ALL')
                  }
                  className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-white border border-blue-100 shadow-sm px-5 py-2.5 rounded-full transition-colors"
                >
                  {openDayIndex === 'ALL'
                    ? 'Collapse All Days'
                    : 'Expand All Days'}
                </motion.button>
              </div>

              {/* Vertical line */}
              <div className="absolute left-[19px] sm:left-[27px] top-24 bottom-10 w-[2px] bg-slate-200/60 hidden sm:block" />

              {/* Animated List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
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
                      {/* Timeline dot (desktop) */}
                      <motion.div
                        animate={{
                          scale: isOpen ? 1.1 : 1,
                          backgroundColor: isOpen ? '#2563eb' : '#f1f5f9',
                          color: isOpen ? '#ffffff' : '#94a3b8',
                          borderColor: '#ffffff',
                        }}
                        className="hidden sm:flex absolute left-2 top-0 w-12 h-12 rounded-full border-4 items-center justify-center z-10 shadow-sm"
                      >
                        <span className="text-sm font-bold">{idx + 1}</span>
                      </motion.div>

                      {/* Mobile badge */}
                      <div className="sm:hidden mb-3 inline-flex items-center gap-3">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md shadow-blue-200">
                          Day {idx + 1}
                        </span>
                        <span className="h-[1px] flex-1 bg-slate-200 w-20"></span>
                      </div>

                      {/* Card */}
                      <motion.div
                        layout
                        transition={{ layout: { duration: 0.3, type: 'spring' } }}
                        className={`relative bg-white border rounded-2xl overflow-hidden ${
                          isOpen
                            ? 'border-blue-200 shadow-xl shadow-blue-100/50'
                            : 'border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100'
                        }`}
                      >
                        {/* Header */}
                        <motion.button
                          layout="position"
                          onClick={() =>
                            setOpenDayIndex(
                              openDayIndex === idx ? null : idx
                            )
                          }
                          className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 z-20 relative bg-white"
                        >
                          <div className="space-y-1">
                            <motion.h4
                              layout="position"
                              className={`text-lg sm:text-xl font-bold transition-colors ${
                                isOpen ? 'text-blue-700' : 'text-slate-800'
                              }`}
                            >
                              {item.title}
                            </motion.h4>
                            <motion.p
                              layout="position"
                              className="text-sm text-slate-500 leading-relaxed max-w-2xl"
                            >
                              {item.description}
                            </motion.p>

                            {!isOpen && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex gap-2 pt-2"
                              >
                                <span className="inline-flex items-center gap-1 text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100">
                                  <Hotel className="w-3 h-3" /> Stay Included
                                </span>
                                <span className="inline-flex items-center gap-1 text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100">
                                  <Utensils className="w-3 h-3" /> Breakfast &
                                  Dinner
                                </span>
                              </motion.div>
                            )}
                          </div>

                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                              isOpen
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-slate-50 text-slate-400'
                            }`}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </motion.button>

                        {/* Body */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
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

                                      <div className="bg-slate-50/80 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border border-slate-100">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-sm border border-slate-100">
                                            <Utensils className="w-4 h-4" />
                                          </div>
                                          <div>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                                              Food
                                            </p>
                                            <p className="text-xs font-semibold text-slate-700">
                                              Breakfast & Dinner
                                            </p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-full bg-white text-indigo-500 flex items-center justify-center shadow-sm border border-slate-100">
                                            <Hotel className="w-4 h-4" />
                                          </div>
                                          <div>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                                              Stay
                                            </p>
                                            <p className="text-xs font-semibold text-slate-700">
                                              3★ Hotel (Mussoorie)
                                            </p>
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

            {/* MAP SECTION */}
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                  <MapPinned className="w-6 h-6 text-blue-600" />
                  Dehradun → Mussoorie → Kempty → Dhanaulti Route Map
                </h3>
                <MussoorieRouteMap />
              </div>
            </ScrollReveal>

            {/* INCLUSIONS / EXCLUSIONS */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                  <h4 className="font-bold text-lg mb-4 text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Inclusions
                  </h4>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    {includeFeatures.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
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

            {/* REVIEWS */}
            <ScrollReveal>
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">User Reviews</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <Card className="p-6 flex-1 bg-blue-600 text-white shadow-xl shadow-blue-200">
                    <div className="text-center">
                      <h4 className="text-5xl font-bold mb-2">4.8</h4>
                      <div className="flex justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-blue-100 text-sm">
                        Based on 350+ Reviews
                      </p>
                    </div>
                  </Card>
                  <Card className="p-6 flex-[2] shadow-lg">
                    <div className="space-y-3">
                      {reviewBreakup.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-xs sm:text-sm"
                        >
                          <span className="w-24 font-medium text-slate-600">
                            {item.label}
                          </span>
                          <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-blue-500"
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                          <span className="w-8 text-right font-bold text-slate-800">
                            {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* FAQS */}
            <ScrollReveal>
              <div className="space-y-4 pb-8">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <Card
                        key={idx}
                        className="border border-slate-100 shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpenFaqIndex(isOpen ? null : idx)
                          }
                          className="w-full flex items-center justify-between gap-3 text-left px-4 sm:px-5 py-3 sm:py-4"
                        >
                          <span className="font-semibold text-sm sm:text-base text-slate-800">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-4 sm:px-5 pb-4 text-sm text-slate-600"
                            >
                              {faq.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* SIMILAR PACKAGES */}
            <ScrollReveal>
              <div className="space-y-4 pb-8">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Similar Uttarakhand Packages
                </h3>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={16}
                  slidesPerView={1.2}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                  }}
                  className="pb-10"
                >
                  {relevantPackages.map((pkg, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                      <Card className="border-0 shadow-md overflow-hidden h-full flex flex-col group">
                        <div className="h-36 sm:h-44 overflow-hidden relative">
                          <img
                            src={pkg.image}
                            alt={pkg.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-sm backdrop-blur-sm">
                            {pkg.days}
                          </div>
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1">
                          <h4 className="font-bold text-sm sm:text-base line-clamp-2">
                            {pkg.title}
                          </h4>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {pkg.country}
                          </p>
                          <div className="mt-auto pt-3 flex items-center justify-between">
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase">
                                Per Person
                              </p>
                              <p className="font-bold text-base sm:text-lg text-blue-700">
                                {pkg.price}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              className="rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 border-0"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <ScrollReveal direction="up">
                <Card className="border-0 shadow-2xl bg-white rounded-2xl overflow-hidden ring-1 ring-slate-100">
                  <div className="p-5 sm:p-6 pb-4 border-b border-slate-50 relative bg-slate-50/50">
                    <span className="absolute right-4 top-4 text-[10px] font-bold bg-rose-500 text-white px-2 py-1 rounded shadow-md uppercase tracking-wider">
                      20% Off
                    </span>
                    <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">
                      Total Deal Price
                    </p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="line-through text-sm text-slate-400">
                        <IndianRupee className="inline-block w-3 h-3" />
                        14,499
                      </span>
                    </div>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 flex items-center">
                        <IndianRupee className="inline-block w-7 h-7 sm:w-8 sm:h-8 mr-1" />
                        11,499
                      </span>
                      <span className="text-xs text-slate-500 mb-1.5 font-medium">
                        / per person
                      </span>
                    </div>
                    <p className="text-[11px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded w-max font-medium">
                      + 5% GST Applicable
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3 bg-white">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                        <span>
                          <strong>Money Safe:</strong> Flexible date change & simple cancellation options*.
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                        <span>
                          <strong>Support:</strong> On-trip assistance during your Mussoorie stay.
                        </span>
                      </div>
                    </div>

                    <Button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-base py-6 shadow-lg shadow-blue-200 transition-all hover:scale-[1.02]">
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

              {/* Help Card */}
              <Card className="p-4 bg-indigo-900 text-white rounded-xl shadow-lg hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-200">Need Help?</p>
                    <p className="font-bold text-lg">+91-98765-43210</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 px-4 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-50 flex items-center justify-between safe-area-bottom">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-wide">
            Starting From
          </span>
          <span className="text-lg font-bold text-slate-900 flex items-center">
            <IndianRupee className="w-4 h-4" /> 11,499
          </span>
        </div>
        <Button className="rounded-full bg-blue-600 px-6 shadow-lg shadow-blue-200">
          Book Now
        </Button>
      </div>

      <Footer />
    </div>
  );
}