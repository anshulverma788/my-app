// src/pages/destinations/ShimlaManali.jsx

import { useState } from 'react';
// Note: Ensure these paths exist in your project
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/animations/ScrollReveal';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

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
  // New Icons for Grid
  Car,
  Languages,
  PawPrint,
  CalendarClock,
  Snowflake,
  Tent
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// ---------- ANIMATION VARIANTS (General) ----------
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

// ---------- NEW: TOUR DETAILS GRID SECTION ----------

// Shimla-Manali Specific Data for the Grid
const tourDetailsData = [
  { icon: Hotel, label: "Accommodation", value: "3★ Family Hotels" },
  { icon: Utensils, label: "Meals", value: "Breakfast & Dinner" },
  { icon: Car, label: "Transportation", value: "Private Cab / Tempo" },
  { icon: Users, label: "Group Size", value: "Family / Private" },
  { icon: Languages, label: "Language", value: "Hindi, English" },
  { icon: Snowflake, label: "Best Season", value: "Oct to June" },
  { icon: CalendarClock, label: "Duration", value: "7 Days / 6 Nights" },
  { icon: Tent, label: "Category", value: "Nature & Hill Station" },
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

// ---------- EXISTING DATA (Shimla Manali) ----------

const heroSlides = [
  {
    image: 'https://cdn.pixabay.com/photo/2013/12/22/22/01/india-232725_1280.jpg',
    title: 'Shimla • Manali Family Trip',
    subtitle: 'Hill Stations, Snow & Scenic Drives',
    days: '7 Days | 6 Nights',
  },
  {
    image: 'https://images.unsplash.com/photo-1655470062377-ef3f5161960a?q=80&w=1170&auto=format&fit=crop',
    title: 'Kufri • Manali • Solang Valley',
    subtitle: 'Perfect Family Holiday in Himachal',
    days: '7 Days | Customizable',
  },
  {
    image: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868?q=80&w=1982&auto=format&fit=crop',
    title: 'Snow • Adventure • Relax',
    subtitle: 'Comfortable Stays for Your Family',
    days: '7 Days | 6 Nights',
  },
];

const exploreLocations = [
  {
    image: 'https://i.pinimg.com/1200x/62/e6/f5/62e6f50443dfd6627a478e5f83fa0f9e.jpg',
    title: 'Shimla Ridge & Mall Road',
    days: '01 Day',
  },
  {
    image: 'https://i.pinimg.com/1200x/cf/34/5f/cf345fac131de65a385958f5e703db7f.jpg',
    title: 'Kufri Snow Point',
    days: '01 Day',
  },
  {
    image: 'https://i.pinimg.com/1200x/94/f7/d2/94f7d2e8bfb747c215417e7186a89f55.jpg',
    title: 'Manali Town & Mall Road',
    days: '01 Day',
  },
  {
    image: 'https://i.pinimg.com/1200x/f9/18/5d/f9185df520a8230154ee1299a06c77e3.jpg',
    title: 'Solang Valley Adventure',
    days: '01 Day',
  },
];

const tourHighlights = [
  'Delhi/Chandigarh to Shimla & Manali scenic road journey with mountain views.',
  'Shimla local – Ridge, Mall Road, Christ Church & famous viewpoints.',
  'Exciting day trip to Kufri with snow (seasonal) & fun activities for kids & family.',
  'Transfer to Manali via Kullu, Pandoh Dam & Beas river sightseeing.',
  'Manali local – Hadimba Temple, Club House, Vashisht Temple & Hot Springs.',
  'Solang Valley visit with optional snow activities & adventure sports (seasonal).',
  'Optional Atal Tunnel / Sissu excursion on extra cost (subject to weather & permits).',
  'Comfortable family stays with breakfast & dinner throughout the trip.',
  'Ample time for shopping, café hopping & leisure with your family.',
];

const itinerary = [
  {
    day: 'Day 01',
    title: 'Delhi / Chandigarh → Shimla (Arrival in Hills)',
    description:
      'Pickup from Delhi/Chandigarh and smooth drive to Shimla via beautiful valleys and mountain views.',
    details:
      'Morning pickup from Delhi/Chandigarh. Start your journey towards Shimla. Enroute enjoy views of the Shivalik hills, lush green valleys & small towns. On arrival in Shimla, check in to your hotel. Evening free to relax or explore nearby market area on your own. Overnight stay at Shimla.',
  },
  {
    day: 'Day 02',
    title: 'Shimla Local Sightseeing',
    description:
      'Explore the best of Shimla – Ridge, Mall Road, Christ Church & nearby points.',
    details:
      'After breakfast, head for local sightseeing of Shimla. Visit The Ridge, Christ Church, Lakkar Bazaar, Kali Bari Temple and stroll around the famous Mall Road. Enjoy street food, shopping & cafés. Evening at leisure. Overnight stay at Shimla with dinner.',
  },
  {
    day: 'Day 03',
    title: 'Kufri Excursion & Mashobra / Naldehra',
    description:
      'Full day trip to Kufri snow point with option to visit Mashobra / Naldehra.',
    details:
      'Post breakfast, proceed for a day excursion to Kufri – a popular snow destination (seasonal). Enjoy horse riding, yak rides, viewpoints and family photo spots. Later you can visit Mashobra / Naldehra (subject to time & traffic) known for scenic beauty and pine forests. Return to Shimla in the evening. Overnight stay at Shimla.',
  },
  {
    day: 'Day 04',
    title: 'Shimla → Manali via Kullu',
    description:
      'Scenic transfer from Shimla to Manali with enroute sightseeing at Kullu region.',
    details:
      'After breakfast, check out from the Shimla hotel and drive towards Manali. Enroute enjoy views of rivers, valleys & mountains. Stop near Kullu for local sightseeing, shawl factory visit & optional river rafting (on extra cost, subject to season). By evening reach Manali, check in at hotel and relax. Overnight stay at Manali.',
  },
  {
    day: 'Day 05',
    title: 'Manali Local Sightseeing',
    description:
      'Discover Manali town – Hadimba Temple, Vashisht, Club House & Mall Road.',
    details:
      'Post breakfast, start Manali local sightseeing – visit Hadimba Devi Temple surrounded by deodar trees, Vashisht Temple & Hot Springs, Club House and Tibetan Monastery. Later in the evening, spend free time at Mall Road for shopping and café hopping. Overnight stay at Manali with dinner.',
  },
  {
    day: 'Day 06',
    title: 'Solang Valley • Optional Atal Tunnel (Extra Cost)',
    description:
      'Day trip to Solang Valley for snow & adventure activities. Optional Atal Tunnel trip.',
    details:
      'After breakfast, proceed towards Solang Valley – famous for its snow views and adventure activities like skiing, tube rides, paragliding, ATV rides (activities on direct payment & subject to weather). If roads & permits allow, you can also opt for an additional excursion to Atal Tunnel / Sissu on extra cost. Return to Manali by evening. Overnight stay at Manali.',
  },
  {
    day: 'Day 07',
    title: 'Manali → Delhi / Chandigarh (Return Journey)',
    description:
      'Check out from hotel and start your return journey with beautiful memories.',
    details:
      'After breakfast, check out from hotel. Drive back towards Delhi / Chandigarh with amazing memories of your Shimla – Manali family trip. Drop at your desired point & tour ends with happy faces.',
  },
];

const includeFeatures = [
  'Accommodation in 3★ family-friendly hotels in Shimla (2N) & Manali (4N).',
  'Daily breakfast & dinner at the hotel (as per meal plan).',
  'Pickup & drop from Delhi / Chandigarh by AC vehicle (as per package).',
  'All transfers & sightseeing by private cab / AC Tempo Traveller (as opted).',
  'Driver night charges, toll taxes, parking & fuel charges included.',
  'Dedicated tour coordinator support on call during the trip.',
];

const excludeFeatures = [
  'Train / Flight tickets to and from Delhi / Chandigarh.',
  'Any personal expenses like laundry, tips, telephone, room service etc.',
  'Lunches and any meals not mentioned in the inclusions.',
  'Adventure activities, monument entry fees & ropeways etc. (direct payment).',
  'Atal Tunnel / Rohtang excursion charges & permits (if opted).',
  'Anything not specifically mentioned in the inclusions list.',
];

const faqs = [
  {
    question: 'Best time to visit Shimla Manali with family?',
    answer:
      'For pleasant weather – March to June. For snow experience – December to February (subject to snowfall). October & November are also good with clear views.',
  },
  {
    question: 'Is this package comfortable for kids and elders?',
    answer:
      'Yes, yeh package specially family-friendly design kiya gaya hai. Smooth transfers, comfortable 3★ hotels & easy sightseeing cover kiya jata hai, jisse kids & elders dono enjoy kar sakte hain.',
  },
  {
    question: 'Can we customize hotels, cab type & number of days?',
    answer:
      'Bilkul! Aap hotel category (3★ / 4★), private cab / tempo traveller, nights in Shimla & Manali sab customize kar sakte ho as per your budget & requirement.',
  },
];

const reviewBreakup = [
  { label: 'Overall', value: 95 },
  { label: 'Transport', value: 93 },
  { label: 'Food', value: 90 },
  { label: 'Accommodation', value: 94 },
  { label: 'Tour Guide', value: 91 },
];

const relevantPackages = [
  {
    image: 'https://i.pinimg.com/1200x/94/f7/d2/94f7d2e8bfb747c215417e7186a89f55.jpg',
    title: 'Shimla Manali Premium Family Package',
    country: 'Himachal Pradesh, India',
    days: '7 Days / 6 Nights',
    price: '₹22,999',
  },
  {
    image: 'https://i.pinimg.com/1200x/f9/18/5d/f9185df520a8230154ee1299a06c77e3.jpg',
    title: 'Manali • Solang • Atal Tunnel Adventure',
    country: 'Manali, Himachal Pradesh',
    days: '5 Days / 4 Nights',
    price: '₹18,999',
  },
  {
    image: 'https://i.pinimg.com/1200x/62/e6/f5/62e6f50443dfd6627a478e5f83fa0f9e.jpg',
    title: 'Short Escape – Shimla & Kufri Getaway',
    country: 'Shimla, Himachal Pradesh',
    days: '4 Days / 3 Nights',
    price: '₹12,999',
  },
];

// ---------- MAIN COMPONENT ----------

export default function ShimlaManali() {
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
                          22,999
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
                          View All Himachal Packages
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

      {/* Benefits Bar */}
      <div className="bg-white shadow-md border-b border-slate-100 relative z-20 -mt-2 sm:mt-0 rounded-t-2xl sm:rounded-none">
        <div className="container mx-auto px-4 py-4 md:py-5 flex flex-wrap gap-x-6 gap-y-3 items-center justify-center lg:justify-between text-xs sm:text-sm md:text-base font-medium text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>No Booking Fee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0" />
            <span>
              4.8 / 5 based on <strong>456 reviews</strong>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Trusted by 15k+ Travellers</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* LEFT COLUMN (Content) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">

            {/* About Tour Package - MODIFIED WITH ANIMATED GRID */}
            <ScrollReveal>
              <div id="overview">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  About Shimla Manali Family Tour
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                  Plan a perfect hill station escape with our carefully designed{' '}
                  <span className="font-semibold text-blue-700">
                    Shimla – Kufri – Manali – Solang Valley
                  </span>{' '}
                  family package. Ideal for parents, kids and elders looking for
                  a comfortable, scenic and memorable holiday in Himachal Pradesh.
                </p>

                {/* --- NEW ANIMATED GRID SECTION --- */}
                <div className="bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100/60">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Trip Highlights</h3>
                    <TourDetailsGrid />
                </div>
                {/* ---------------------------------- */}
              </div>
            </ScrollReveal>

            {/* Explore Locations + Customize card */}
            <ScrollReveal>
              <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-8">
                {/* Slider */}
                <div className="overflow-hidden">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">Explore Key Locations</h3>
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
                        Build your own Shimla Manali Tour
                      </span>
                    </h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                        Change hotel category & meal plan.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                        Add extra night in Shimla or Manali.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                        Choose private cab or group vehicle.
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            src={`https://i.pravatar.cc/150?img=${i + 10}`}
                            className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 object-cover"
                            alt="expert"
                          />
                        ))}
                      </div>
                      <p className="text-xs text-emerald-800 font-medium pl-2">
                        Talk to our Himachal experts
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

            {/* Highlights */}
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Highlights of the Tour</h3>
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

            {/* --- NEW ANIMATED ITINERARY SECTION (Framer Motion) --- */}
            <div className="space-y-8 relative">
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Trip Itinerary (7 Days / 6 Nights)
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    A family-friendly day-by-day breakdown of your Shimla Manali journey
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setOpenDayIndex(openDayIndex === 'ALL' ? null : 'ALL')}
                  className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-white border border-blue-100 shadow-sm px-5 py-2.5 rounded-full transition-colors"
                >
                  {openDayIndex === 'ALL' ? 'Collapse All Days' : 'Expand All Days'}
                </motion.button>
              </div>

              {/* Vertical Line (Background) */}
              <div className="absolute left-[19px] sm:left-[27px] top-24 bottom-10 w-[2px] bg-slate-200/60 hidden sm:block" />

              {/* Animated List Container */}
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

                      {/* Timeline Connector Dot (Desktop) with Pulse Animation */}
                      <motion.div
                        animate={{
                          scale: isOpen ? 1.1 : 1,
                          backgroundColor: isOpen ? '#2563eb' : '#f1f5f9',
                          color: isOpen ? '#ffffff' : '#94a3b8',
                          borderColor: isOpen ? '#ffffff' : '#ffffff'
                        }}
                        className="hidden sm:flex absolute left-2 top-0 w-12 h-12 rounded-full border-4 items-center justify-center z-10 shadow-sm"
                      >
                        <span className="text-sm font-bold">{idx + 1}</span>
                      </motion.div>

                      {/* Mobile Day Badge */}
                      <div className="sm:hidden mb-3 inline-flex items-center gap-3">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md shadow-blue-200">Day {idx + 1}</span>
                        <span className="h-[1px] flex-1 bg-slate-200 w-20"></span>
                      </div>

                      {/* Content Card with Smooth Layout Transition */}
                      <motion.div
                        layout
                        transition={{ layout: { duration: 0.3, type: "spring" } }}
                        className={`relative bg-white border rounded-2xl overflow-hidden ${isOpen
                          ? 'border-blue-200 shadow-xl shadow-blue-100/50'
                          : 'border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100'
                          }`}
                      >
                        {/* Clickable Header */}
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

                            {/* Quick Tags (Visible only when closed) */}
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
                                  <Utensils className="w-3 h-3" /> Breakfast & Dinner
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

                        {/* Expandable Content with AnimatePresence */}
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

                                      {/* Highlights Grid with Hover Effect */}
                                      <div className="bg-slate-50/80 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border border-slate-100">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-sm border border-slate-100">
                                            <Utensils className="w-4 h-4" />
                                          </div>
                                          <div>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Food</p>
                                            <p className="text-xs font-semibold text-slate-700">Breakfast & Dinner</p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-full bg-white text-indigo-500 flex items-center justify-center shadow-sm border border-slate-100">
                                            <Hotel className="w-4 h-4" />
                                          </div>
                                          <div>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Stay</p>
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
            {/* --- END ANIMATED ITINERARY --- */}


            {/* Modern Animated Curved Map */}
            <ScrollReveal>
              <div className="space-y-4">

                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                  <MapPinned className="w-6 h-6 text-blue-600" />
                  Shimla → Manali → Solang Route Map
                </h3>

                <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl relative">

                  {(() => {
                    const [mapType, setMapType] = useState("normal");

                    // Curved path (Bezier) instead of sharp angles
                    const curvedPath = [
                      [31.1048, 77.1734],  // Shimla
                      [31.75, 77.0],       // Curve 1
                      [32.02, 77.15],      // Curve 2
                      [32.2432, 77.1892],  // Manali
                      [32.3167, 77.1587],  // Solang
                    ];

                    return (
                      <div className="relative">

                        {/* Map Type Toggle */}
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

                        {/* MAP */}
                        <MapContainer
                          center={[31.7, 77.1]}
                          zoom={8}
                          scrollWheelZoom={false}
                          className="h-[280px] sm:h-[360px] w-full rounded-2xl"
                        >
                          {/* Normal / Satellite */}
                          {mapType === "normal" ? (
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          ) : (
                            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                          )}

                          {/* CURVED ANIMATED ROUTE */}
                          <Polyline
                            positions={curvedPath}
                            pathOptions={{
                              color: "#2563eb",
                              weight: 6,
                              opacity: 0.9,
                              className: "animated-route"
                            }}
                          />

                          {/* GLOWING MARKERS */}
                          {curvedPath.map((pos, idx) => (
                            <Marker key={idx} position={pos}></Marker>
                          ))}
                        </MapContainer>

                        {/* CSS FOR ANIMATION */}
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
                    );
                  })()}
                </Card>
              </div>
            </ScrollReveal>

            {/* Inclusions/Exclusions */}
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

            {/* Reviews (Simplified for mobile) */}
            <ScrollReveal>
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">User Reviews</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Summary Card */}
                  <Card className="p-6 flex-1 bg-blue-600 text-white shadow-xl shadow-blue-200">
                    <div className="text-center">
                      <h4 className="text-5xl font-bold mb-2">4.8</h4>
                      <div className="flex justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="text-blue-100 text-sm">Based on 456 Reviews</p>
                    </div>
                  </Card>
                  {/* Progress Bars */}
                  <Card className="p-6 flex-[2] shadow-lg">
                    <div className="space-y-3">
                      {reviewBreakup.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm">
                          <span className="w-24 font-medium text-slate-600">{item.label}</span>
                          <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full rounded-full bg-blue-500" style={{ width: `${item.value}%` }} />
                          </div>
                          <span className="w-8 text-right font-bold text-slate-800">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* Relevant Packages */}
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
                  className="pb-10"
                >
                  {relevantPackages.map((pkg, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                      <Card className="border-0 shadow-md overflow-hidden h-full flex flex-col group">
                        <div className="h-36 sm:h-44 overflow-hidden relative">
                          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                              <p className="font-bold text-base sm:text-lg text-blue-700">{pkg.price}</p>
                            </div>
                            <Button size="sm" className="rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 border-0">View</Button>
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
                    <span className="absolute right-4 top-4 text-[10px] font-bold bg-rose-500 text-white px-2 py-1 rounded shadow-md uppercase tracking-wider">
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
                    <p className="text-[11px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded w-max font-medium">
                      + 5% GST Applicable
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3 bg-white">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                        <span><strong>Money Safe:</strong> Easy cancellation & flexible rescheduling options*.</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                        <span><strong>Support:</strong> 24x7 on-trip assistance for your family.</span>
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
        <Button className="rounded-full bg-blue-600 px-6 shadow-lg shadow-blue-200">
          Book Now
        </Button>
      </div>

      <Footer />
    </div>
  );
}