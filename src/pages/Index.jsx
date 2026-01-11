import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // SEO Import

// CSS Imports
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  ArrowRight, ArrowUpRight, User, MapPin, Star, Calendar, Phone, ShieldCheck, Quote, CheckCircle2, ChevronLeft, ChevronRight,
  Headset, ThumbsUp, Globe, Users, Award, Clock, Utensils, Car, Building2, Heart, Flag, Search, ChevronDown, Check, Sun, CarFront, Camera, BedDouble, UtensilsCrossed, Play
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';

// --- Defined FadeInUp Component ---
const FadeInUp = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Index() {

  // ================= SEARCH BAR STATE =================
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedDest, setSelectedDest] = useState("");
  const [selectedDur, setSelectedDur] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchContainerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchDestinations = [
    "Andaman", "Amarnath Yatra", "Bhutan", "Chardham Yatra", "Dubai", "Europe",
    "Himachal", "Kashmir", "Kerala", "Ladakh", "Manali", "Rajasthan", "Shimla",
    "Sikkim", "Thailand", "Vietnam"
  ];

  const searchDurations = [
    "1 - 3 days", "4 - 6 days", "7 - 9 days", "10 - 12 days", "13+ days"
  ];

  const searchMonths = [
    "January 2025", "February 2025", "March 2025", "April 2025",
    "May 2025", "June 2025", "July 2025", "August 2025", "September 2025",
    "October 2025", "November 2025", "December 2025"
  ];

  const filteredDestinations = searchDestinations.filter(dest =>
    dest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMonths = searchMonths.filter(m =>
    m.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
    setSearchTerm("");
  };

  const handleSelection = (type, value) => {
    if (type === 'destination') setSelectedDest(value);
    if (type === 'duration') setSelectedDur(value);
    if (type === 'month') setSelectedMonth(value);
    setActiveDropdown(null);
  };

  // ================= HERO SLIDER STATE =================
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperInstanceRef = useRef(null);

  const heroSlides = [
    { id: 1, place: "Himachal", title: "The Land of Gods", desc: "Experience the mystical mountains...", image: "https://cdn.pixabay.com/photo/2018/02/14/13/42/sky-3153004_1280.jpg", price: "From ₹5,999" },
    { id: 2, place: "Kashmir", title: "Paradise on Earth", desc: "Discover the breathtaking beauty...", image: "https://cdn.pixabay.com/photo/2022/07/30/07/02/river-7353171_1280.jpg", price: "From ₹8,999" },
    { id: 3, place: "Kerala", title: "God's Own Country", desc: "Sail through the backwaters...", image: "https://cdn.pixabay.com/photo/2017/02/17/21/18/south-india-2075399_1280.jpg", price: "From ₹12,499" },
    { id: 4, place: "Ladakh", title: "Land of High Passes", desc: "An adventure of a lifetime...", image: "https://cdn.pixabay.com/photo/2022/10/13/13/25/pangong-tso-7519104_1280.jpg", price: "From ₹15,999" },
    { id: 5, place: "Dubai", title: "City of Gold", desc: "Experience luxury shopping...", image: "https://i.pinimg.com/1200x/7f/eb/3f/7feb3f0e8954789938f872f0585016fd.jpg", price: "From ₹25,999" },
  ];

  const handleThumbnailClick = (index) => {
    if (swiperInstanceRef.current) swiperInstanceRef.current.slideToLoop(index);
  };

  const getHeroThumbnails = () => {
    let thumbs = [];
    for (let i = 1; i <= 3; i++) {
      const targetIndex = (activeIndex + i) % heroSlides.length;
      thumbs.push({ ...heroSlides[targetIndex], realIndex: targetIndex });
    }
    return thumbs;
  };

  // ================= PAGE DATA =================
  const packages = [
    { name: 'Shimla', image: 'https://i.pinimg.com/1200x/0f/a9/48/0fa948b0e663115f7a42c2c0ae1896a1.jpg', path: '/package/shimla', title: 'Himalayan Delight: Shimla Manali Group Tour ', location: 'Himachal', duration: '3 Days/2 night', price: '₹5,999' },
    { name: 'Manali', image: 'https://i.pinimg.com/736x/49/7e/49/497e495ee05c0ea5d5de82e7c4e3f653.jpg', path: '/package/shimla-manali', title: 'Manali Magic: A Himalayan Getaway for Group - family tour', location: 'Himachal', duration: '4 Days', price: '₹7,999' },
    { name: 'Dharamshala', image: 'https://i.pinimg.com/736x/f6/7a/3e/f67a3e0a96ba728d80001bf6bd06ca03.jpg', path: '/package/dharamshala', title: 'Tri-City Escape: Dharamshala, Dalhousie & Amritsar for Group', location: 'Dharamshala', duration: '2 Days', price: '₹3,499' },
    { name: 'Yulla Kanda', image: 'https://i.pinimg.com/1200x/b2/ea/99/b2ea99c22fe47b745fa1554e9454f7b7.jpg', path: '/package/kinnaur', title: 'Yulla Kanda Trek: Sacred High Altitude Lake Adventure in Himachal Himalayas', location: 'Kinnaur', duration: '5 Days', price: '₹12,499' },
    { name: 'Spiti', image: 'https://i.pinimg.com/1200x/43/b0/49/43b049fe3071e512697a9160ff648da3.jpg', path: '/package/spiti-8day', title: 'Spiti Expedition', location: 'Spiti Valley', duration: '7 Days', price: '₹18,999' },
  ];

  const destinations = [
    { id: 'Himachal Pradesh', title: 'Himachal Pradesh', image: 'https://i.pinimg.com/736x/8f/07/42/8f07429dd03950cc8728bc0d44bfa089.jpg', location: 'Himachal, India', duration: '03 Days / 02 Nights', price: '$199', path: '/destinations/kerala', type: 'Relax' },
    { id: 'Utrakhand', title: 'Utrakhand', image: 'https://i.pinimg.com/736x/8c/14/3e/8c143e84594eafe45e5db7ce2ce503a3.jpg', location: 'Utrakhand, India', duration: '04 Days / 03 Nights', price: '$249', path: '/destinations/manali', type: 'Snow' },
    { id: 'Kerala', title: 'Kerala', image: 'https://i.pinimg.com/1200x/7c/36/7f/7c367f3b73b2b93604219530631e271b.jpg', location: 'Kerala, India', duration: '05 Days / 04 Nights', price: '$299', path: '/destinations/goa', type: 'Beach' },
    { id: 'rajasthan', title: 'Rajasthan', image: 'https://i.pinimg.com/1200x/9e/35/e9/9e35e983fe70f4c3a1e5dbe22172a4da.jpg', location: 'Jaipur, India', duration: '03 Days / 02 Nights', price: '$180', path: '/destinations/rajasthan', type: 'Heritage' },
  ];

  const lastMinuteDeals = [
    { name: 'Shimla', image: 'https://i.pinimg.com/736x/a9/9f/c3/a99fc3dc112ca7e956e20244fc578f2e.jpg', path: '/package/dubai', title: 'Shimla Kufri', location: 'Himachal', duration: '4 Days', price: '₹29,999', originalPrice: '₹45,000' },
    { name: 'Manali', image: 'https://i.pinimg.com/736x/a0/e4/ca/a0e4ca6e763a733634c156f3cced71d7.jpg', path: '/package/vietnam', title: 'Manali Solang', location: 'Himachal', duration: '6 Days', price: '₹35,999', originalPrice: '₹55,000' },
    { name: 'CharDham', image: 'https://i.pinimg.com/1200x/7f/eb/3f/7feb3f0e8954789938f872f0585016fd.jpg', path: '/package/thailand', title: 'CharDham ', location: 'Utrakhand', duration: '5 Days', price: '₹24,999', originalPrice: '₹32,000' },
    { name: 'Rishikesh', image: 'https://i.pinimg.com/736x/cb/71/49/cb714920561dc0c6f83f7ed703ff2eae.jpg', path: '/package/bali', title: 'Rishikesh', location: 'Utrakhand', duration: '5 Days', price: '₹39,999', originalPrice: '₹48,000' },
  ];

  const testimonials = [
    { name: "Aarav Sharma", role: "Kerala, India", img: "https://i.pravatar.cc/150?img=11", rating: 5, desc: "The Kerala backwaters experience was absolutely magical! Everything was arranged perfectly.", title: "Kerala 3D / 2N" },
    { name: "Riya Verma", role: "Manali, India", img: "https://i.pravatar.cc/150?img=5", rating: 4, desc: "Beautiful mountains, cozy stay, smooth travel experience — totally worth it!", title: "Manali Adventure" },
    { name: "Karan Patel", role: "Goa, India", img: "https://i.pravatar.cc/150?img=3", rating: 5, desc: "Stunning beaches and perfect arrangements — best trip ever!", title: "Goa Beach Holiday" },
    { name: "Sneha Gupta", role: "Jaipur, India", img: "https://i.pravatar.cc/150?img=9", rating: 5, desc: "The cultural heritage tour was mind-blowing. The guide was very knowledgeable.", title: "Royal Rajasthan" },
  ];
  // ================= BLOG DATA =================
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop",
      date: "Dec 25, 2024",
      author: "Rahul Verma",
      category: "Travel Tips",
      title: "10 Hidden Gems in Himachal You Must Visit",
      excerpt: "Discover the untouched beauty of Himachal Pradesh beyond Shimla and Manali. Explore these secret valleys..."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2000&auto=format&fit=crop",
      date: "Jan 05, 2025",
      author: "Aditi Singh",
      category: "Adventure",
      title: "The Ultimate Guide to Spiti Valley Bike Trip",
      excerpt: "Planning a road trip to Spiti? Here is everything you need to know about routes, permits, and best time to visit."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=2000&auto=format&fit=crop",
      date: "Jan 12, 2025",
      author: "Team HD",
      category: "Culture",
      title: "Experience the Rich Culture of Kinnaur",
      excerpt: "From apple orchards to ancient monasteries, dive deep into the traditional lifestyle of Kinnaur district."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white">

      {/* --- SEO META TAGS --- */}
      <Helmet>
        <title>Himachal Destination | Best Tour Packages for Shimla, Manali & Spiti Valley</title>
        <meta name="description" content="Book affordable Himachal tour packages. Explore Shimla, Manali, Spiti, and Kashmir with Himachal Destination. Best deals on family and group tours." />
        <meta name="keywords" content="Himachal tourism, Manali tour package, Shimla hotels, Spiti valley trek, travel agency himachal, best tour operator india" />
        <link rel="canonical" href="https://yourwebsite.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Himachal Destination - The Land of Gods" />
        <meta property="og:description" content="Plan your perfect trip to Himachal. Get up to 30% OFF on group bookings." />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2018/02/14/13/42/sky-3153004_1280.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Himachal Destination | Best Tour Packages" />
        <meta property="twitter:description" content="Plan your perfect trip to Himachal. Get up to 30% OFF on group bookings." />
        <meta property="twitter:image" content="https://cdn.pixabay.com/photo/2018/02/14/13/42/sky-3153004_1280.jpg" />
      </Helmet>

      {/* --- SEO: Semantic Main Heading (Hidden but read by bots) --- */}
      <h1 className="sr-only">Himachal Destination - Best Travel Agency for Shimla, Manali, and Spiti Valley Tours</h1>

      {/* CSS Animations & Custom Styles */}
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-text { animation: slideUpFade 0.8s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.5s; }
        .delay-400 { animation-delay: 0.7s; }

        .swiper-pagination-bullet {
          width: 24px;
          height: 4px;
          border-radius: 0;
          background-color: rgba(255, 255, 255, 0.4);
          transition: all 0.4s ease;
          opacity: 1;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          width: 48px;
          background-color: #f97316;
        }
        .dark-pagination .swiper-pagination-bullet {
          background-color: rgba(0, 0, 0, 0.2);
        }
        .dark-pagination .swiper-pagination-bullet-active {
          background-color: #f97316;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ccc; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #009f48; 
        }
        /* Utility for screen reader only text */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
      `}</style>

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] lg:h-screen min-h-[400px] bg-emerald-950 text-white overflow-visible group" aria-label="Hero Slider">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect={'fade'}
          speed={1500}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperInstanceRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="absolute inset-0 w-full h-full z-0"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                {/* LCP Optimization: Load first image eagerly, others lazy */}
                <img
                  src={slide.image}
                  alt={`${slide.place} Tour Package - Himachal Destination`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent opacity-90 lg:hidden"></div>
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/40 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Content */}
        <div className="lg:hidden absolute inset-0 z-10 flex flex-col justify-end p-5 pb-20 pointer-events-none">
          <div className="flex flex-col items-start gap-2 pointer-events-auto">
            <div key={activeIndex} className="w-full">
              <div className="flex items-center gap-2 mb-1 anim-text delay-100">
                <span className="text-orange-400 font-bold uppercase tracking-widest text-[10px]">
                  {heroSlides[activeIndex].price}
                </span>
              </div>
              {/* Changed h1 to h2 for semantic SEO (Main H1 is hidden above) */}
              <h2 className="text-4xl font-Lobster font-bold leading-none text-white mb-2 shadow-sm anim-text delay-200">
                {heroSlides[activeIndex].place}
              </h2>
              <p className="text-emerald-100/80 text-xs leading-relaxed line-clamp-2 mb-4 max-w-[90%] anim-text delay-300">
                {heroSlides[activeIndex].desc}
              </p>
              <div className="flex gap-2 w-full anim-text delay-400">
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold h-10 text-sm rounded-lg shadow-lg shadow-orange-500/20 border border-orange-400/50">
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Content */}
        <div className="hidden lg:flex absolute inset-0 z-10 container mx-auto px-12 items-center pointer-events-none">
          <div className="max-w-2xl pt-20 pointer-events-auto">
            <div key={activeIndex}>
              <div className="overflow-hidden mb-2">
                <p className="text-orange-400 font-bold tracking-[0.3em] uppercase anim-text delay-100 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-orange-500"></span> Explore The World
                </p>
              </div>
              <div className="overflow-hidden mb-4">
                {/* Changed h1 to h2 for SEO */}
                <h2 className="text-8xl font-Lobster font-bold leading-tight anim-text delay-200 drop-shadow-2xl text-white">
                  {heroSlides[activeIndex].place}
                </h2>
              </div>
              <div className="overflow-hidden mb-8">
                <p className="text-xl text-emerald-50 max-w-lg leading-relaxed anim-text delay-300 font-light">
                  {heroSlides[activeIndex].desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 anim-text delay-400">
                <Button className="h-14 px-8 rounded-none bg-orange-600 text-white hover:bg-emerald-800 transition-all duration-300 text-lg font-bold tracking-wide border-0 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Desktop) */}
        <div className="hidden lg:flex absolute bottom-36 right-12 z-20 flex-col gap-4 items-end pointer-events-auto">
          <div className="text-5xl font-bold text-white/10 select-none mb-4 font-mono">
            0{activeIndex + 1}
          </div>
          <div className="flex flex-col gap-4">
            {getHeroThumbnails().map((thumb, idx) => (
              <div key={idx} onClick={() => handleThumbnailClick(thumb.realIndex)} className="group relative w-64 h-28 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-orange-500 transition-all duration-300 bg-emerald-950/60 backdrop-blur-md shadow-2xl flex items-center">
                <div className="w-24 h-full relative overflow-hidden">
                  <img src={thumb.image} alt={thumb.place} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-1">Next</span>
                  <h4 className="text-lg font-bold leading-none text-white font-Lobster">{thumb.place}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-400">{thumb.price}</span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors text-white">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ================= SEARCH TOUR BAR ================= */}
      <div className="relative z-40 w-full px-4 lg:absolute lg:left-0 lg:right-0 lg:-bottom-[40px] pointer-events-auto py-4 lg:py-0 bg-white lg:bg-transparent">

        {/* Container */}
        <div ref={searchContainerRef} className="container mx-auto max-w-6xl">
          <div className={`
            flex flex-col lg:flex-row 
            ${/* Desktop: White card shadow container */ 'lg:bg-white lg:rounded-md lg:shadow-2xl lg:border lg:border-gray-200'}
          `}>

            {/* ================= 1. DESTINATION ================= */}
            <div className="relative w-full lg:flex-1 lg:border-r border-gray-200">
              <div
                onClick={() => toggleDropdown('destination')}
                className={`
                  flex items-center gap-3 cursor-pointer group transition-colors p-4
                  ${/* Mobile Style: Grey Block */ 'bg-gray-100 rounded-md mb-2 lg:mb-0 lg:bg-transparent lg:rounded-none lg:hover:bg-emerald-50/50'}
                `}
              >
                <MapPin className="text-gray-500 w-5 h-5 lg:group-hover:text-[#009f48]" />
                <div className="flex-1">
                  <span className={`block text-sm ${selectedDest ? 'text-black font-semibold' : 'text-gray-500'}`}>
                    {selectedDest || "Select Destination"}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'destination' ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown */}
              {activeDropdown === 'destination' && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg z-50 mt-1 rounded-sm animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-2 border-b border-gray-100">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-[#009f48]"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto custom-scrollbar">
                    <div className="bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-600">Popular Destinations</div>
                    {filteredDestinations.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSelection('destination', item)}
                        className={`px-3 py-2 text-sm cursor-pointer hover:bg-emerald-50 hover:text-[#009f48] flex justify-between items-center ${selectedDest === item ? 'bg-emerald-50 text-[#009f48] font-medium' : 'text-gray-700'}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ================= MOBILE SPLIT ROW (Duration & Month) ================= */}
            <div className="flex w-full lg:flex-[2] gap-2 lg:gap-0 mb-2 lg:mb-0">

              {/* ================= 2. DURATION ================= */}
              <div className="relative w-1/2 lg:w-full lg:flex-1 lg:border-r border-gray-200">
                <div
                  onClick={() => toggleDropdown('duration')}
                  className={`
                    flex items-center gap-2 lg:gap-3 cursor-pointer group transition-colors p-4 h-full
                    ${/* Mobile Style: Grey Block */ 'bg-gray-100 rounded-md lg:bg-transparent lg:rounded-none lg:hover:bg-emerald-50/50'}
                  `}
                >
                  <Sun className="text-gray-500 w-5 h-5 shrink-0 lg:group-hover:text-[#009f48]" />
                  <div className="flex-1 overflow-hidden">
                    <span className={`block text-sm truncate ${selectedDur ? 'text-black font-semibold' : 'text-gray-500'}`}>
                      {selectedDur || "Duration"}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${activeDropdown === 'duration' ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown */}
                {activeDropdown === 'duration' && (
                  <div className="absolute top-full left-0 min-w-[200px] w-full bg-white border border-gray-200 shadow-lg z-50 mt-1 rounded-sm animate-in fade-in zoom-in-95 duration-200">
                    <div
                      onClick={() => handleSelection('duration', 'Not decided')}
                      className="bg-[#009f48] text-white px-3 py-2.5 text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-[#008f45]"
                    >
                      <div className="w-4 h-4 border border-white rounded bg-white flex items-center justify-center">
                        {selectedDur === 'Not decided' && <Check className="w-3 h-3 text-[#009f48]" />}
                      </div>
                      Not decided
                    </div>
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                      {searchDurations.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelection('duration', item)}
                          className="px-3 py-2 text-sm cursor-pointer hover:bg-emerald-50 flex items-center gap-2 border-b border-gray-100 last:border-0"
                        >
                          <div className={`w-4 h-4 border border-gray-300 rounded flex items-center justify-center ${selectedDur === item ? 'bg-[#009f48] border-[#009f48]' : 'bg-white'}`}>
                            {selectedDur === item && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ================= 3. MONTH ================= */}
              <div className="relative w-1/2 lg:w-full lg:flex-1">
                <div
                  onClick={() => toggleDropdown('month')}
                  className={`
                    flex items-center gap-2 lg:gap-3 cursor-pointer group transition-colors p-4 h-full
                    ${/* Mobile Style: Grey Block */ 'bg-gray-100 rounded-md lg:bg-transparent lg:rounded-none lg:hover:bg-emerald-50/50'}
                  `}
                >
                  <Calendar className="text-gray-500 w-5 h-5 shrink-0 lg:group-hover:text-[#009f48]" />
                  <div className="flex-1 overflow-hidden">
                    <span className={`block text-sm truncate ${selectedMonth ? 'text-black font-semibold' : 'text-gray-500'}`}>
                      {selectedMonth || "Month"}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${activeDropdown === 'month' ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown */}
                {activeDropdown === 'month' && (
                  <div className="absolute top-full right-0 lg:left-0 min-w-[200px] w-full bg-white border border-gray-200 shadow-lg z-50 mt-1 rounded-sm animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-[#009f48] text-white px-3 py-2 text-sm font-medium">Select Month</div>
                    <div className="p-2 border-b border-gray-100">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-[#009f48]"
                        placeholder="Filter..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                      <div
                        onClick={() => handleSelection('month', 'Not Sure')}
                        className={`px-3 py-2 text-sm cursor-pointer hover:bg-emerald-50 hover:text-[#009f48] border-b border-gray-100 ${selectedMonth === 'Not Sure' ? 'text-[#009f48] font-medium' : 'text-gray-700'}`}
                      >
                        Not Sure
                      </div>
                      {filteredMonths.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelection('month', item)}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-emerald-50 hover:text-[#009f48] border-b border-gray-100 last:border-0 ${selectedMonth === item ? 'text-[#009f48] font-medium' : 'text-gray-700'}`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
            {/* End of Mobile Split Row */}

            {/* ================= 4. SEARCH BUTTON ================= */}
            <div className="w-full lg:w-auto">
              <Button className="w-full lg:w-48 h-full min-h-[56px] bg-gradient-to-r from-orange-500 to-orange-300 text-white font-bold text-sm uppercase rounded-md lg:rounded-none lg:rounded-r-md flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:brightness-110">
                <Search className="w-5 h-5" /> SEARCH TOURS
              </Button>
            </div>

          </div>
        </div>
      </div>
      {/* ================= ABOUT SECTION (Premium Design) ================= */}
      <section className="pt-10 lg:pt-14 pb-0 bg-white relative overflow-hidden" id="about">
        {/* Background Decorative Blob */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-[-100px] w-[300px] h-[300px] bg-emerald-50/50 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* --- LEFT SIDE: CONTENT --- */}
            <div className="order-2 lg:order-1">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-10 h-[2px] bg-orange-500"></span>
                  <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">About Us</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-Lobster font-bold text-slate-900 leading-tight mb-6">
                  We Create Journeys, <br />
                  <span className="text-blue-600">Not Just Trips.</span>
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
                  At <strong>Himachal Destination</strong>, we believe travel is about the stories you bring back.
                  With over 15 years of expertise in Himalayan explorations, we curate premium, personalized itineraries
                  that take you beyond the tourist trails. From the snow-capped peaks of Manali to the
                  untouched valleys of Spiti, experience the mountains like never before.
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {[
                    "Personalized Itineraries",
                    "Handpicked Premium Hotels",
                    "24/7 On-Trip Support",
                    "Experienced Local Guides"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/about">
                    <Button className="h-12 px-8 rounded-full bg-orange-500 text-white hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-emerald-900/20 text-md font-bold">
                      Read More About Us
                    </Button>
                  </Link>
                  <div className="flex items-center gap-3 px-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 animate-pulse">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold uppercase">Call Us Now</span>
                      <span className="text-sm font-bold text-slate-900">+91 8219366010</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* --- RIGHT SIDE: PREMIUM IMAGE COMPOSITION --- */}
            <div className="order-1 lg:order-2 relative">
              <ScrollReveal direction="left">
                <div className="relative z-10">
                  {/* Main Image */}
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
                    <img
                      src="https://i.pinimg.com/736x/b2/8e/de/b28edea546e4c7bf4a29d30d6273d860.jpg"
                      alt="Himachal Beauty"
                      className="w-full h-[400px] lg:h-[550px] object-cover hover:scale-110 transition-transform duration-[1.5s]"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce duration-[3000ms]">
                    <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      15+
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-slate-900 leading-none">Years</span>
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Of Excellence</span>
                    </div>
                  </div>

                  {/* Top Right Decorative Image */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg hidden md:block">
                    <img
                      src="https://i.pinimg.com/1200x/c5/fb/a5/c5fba563cc8aac630b79897d2a757405.jpg"
                      alt="Decoration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Background Pattern Dots */}
                <div className="absolute top-10 right-10 -z-10 opacity-30">
                  <div className="grid grid-cols-5 gap-2">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PREMIUM PACKAGES SECTION ================= */}
      <section className="py-2 bg-slate-50 relative" id="packages">
        <div className="container mx-auto ">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-Lobster font-bold text-slate-900 mb-6">
                Himachal Tour Packages
              </h2>
            </div>
          </ScrollReveal>
          <div className="px-2 md:px-12 lg:px-20 overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="pb-20 px-0"
            >
              {packages.map((pkg, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className="group h-full bg-white rounded-[0.7rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 flex flex-col overflow-hidden relative top-0 hover:-top-2">

                    <div className="relative h-72 rounded-md overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-sky-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {pkg.location}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <button className="bg-white/20 hover:bg-white backdrop-blur-md p-2 rounded-full text-white hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Bottom Image Content */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="flex items-center gap-1 text-white/90 text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                          <Clock className="w-3.5 h-3.5 text-orange-400" />
                          {pkg.duration}
                        </div>
                      </div>
                    </div>

                    {/* --- Card Content --- */}
                    <div className="p-6 flex-1 flex flex-col relative">
                      {/* Decorative Shape */}
                      <div className="absolute -top-6 right-8 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 group-hover:bg-sky-500 transition-colors">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors font-Lobster tracking-wide">
                        {pkg.title}
                      </h3>

                      <div className="my-4 border-t border-dashed border-slate-200"></div>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs text-slate-400 font-medium line-through">₹{parseInt(pkg.price.replace(/[^\d]/g, '')) + 3000}</span>
                          <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold text-slate-900">{pkg.price}</span>
                            <span className="text-[10px] text-slate-500 font-medium">/ person</span>
                          </div>
                        </div>

                        <Link to={pkg.path}>
                          <Button className="bg-slate-900 text-white rounded-xl px-6 h-10 hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/30 font-bold text-xs">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-4 mt-8">
              <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all cursor-pointer">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all cursor-pointer">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TOP DESTINATIONS ================= */}
      <section className="pt-6 pb-0 bg-white" id="destinations">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-Lobster font-bold mb-4 md:mb-6 text-black">Explore <span className='text-blue-500'>Destinations </span></h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500
                  ${index === 0 ? 'lg:row-span-2 lg:col-span-1' : ''} 
                  ${index === 3 ? 'lg:col-span-2' : ''}
                `}
              >
                <Link to={dest.path} className="block w-full h-full relative">
                  <img
                    src={dest.image}
                    alt={`Trip to ${dest.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-3 py-1 uppercase tracking-wide text-[10px] hover:bg-orange-500 hover:border-orange-500 transition-colors">
                      {dest.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center pb-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center w-full">
                      <div className="flex items-center gap-3 text-emerald-100 mb-2 text-sm justify-center">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-orange-400" /> {dest.location}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-Lobster font-bold text-white mb-2 leading-tight">
                        {dest.title}
                      </h3>
                      <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-in-out overflow-hidden">
                        <Button className="bg-orange-500 text-white hover:bg-blue-500 hover:text-white border-none rounded-full px-8 py-2 text-sm font-bold shadow-lg transition-colors">
                          Explore Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/destination">
              <Button className="bg-orange-500 text-white hover:bg-blue-500 rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LAST MINUTE DEALS (Blue Theme) ================= */}
      <section className="pt-6 pb-0 relative overflow-hidden bg-blue-50/30">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-Lobster font-bold mb-4 md:mb-6 text-black">Last Minute Deals</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Unbeatable prices for spontaneous travelers. Grab them before they are gone!</p>
            </div>
          </ScrollReveal>

          <div className="dark-pagination">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 3500 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16 px-2"
            >
              {lastMinuteDeals.map((deal, index) => (
                <SwiperSlide key={index} className="h-full pb-10">
                  <ScrollReveal direction="up" delay={index * 0.1}>
                    <div className="group bg-white rounded-2xl p-2 overflow-hidden border border-blue-100 shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 h-full flex flex-col relative">

                      {/* --- Image Section --- */}
                      <div className="relative h-64 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-500 group-hover:rounded-[20px] group-hover:shadow-sm">
                        <img
                          src={deal.image}
                          alt={`${deal.title} Deal`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* 50% OFF Ribbon (Blue) */}
                        <div className="absolute top-[14px] left-[-34px] bg-[#2563eb] text-white text-[10px] font-bold w-[120px] py-1 -rotate-45 text-center shadow-lg z-20 uppercase tracking-wider border-y border-[#1d4ed8] animate-pulse">
                          50% OFF
                        </div>

                        <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors z-10" aria-label="Save Deal">
                          <Heart className="w-4 h-4 fill-current" />
                        </button>

                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                          <div className="flex items-center gap-1 text-white text-xs font-medium">
                            <Clock className="w-3.5 h-3.5 text-blue-400" />
                            Hurry, Ends soon!
                          </div>
                        </div>
                      </div>

                      {/* --- Content Body --- */}
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="mb-3">
                          <h3 className="text-lg font-Lobster font-bold text-gray-800 leading-tight transition-colors group-hover:text-blue-700">
                            {deal.title}
                          </h3>
                        </div>

                        {/* Price */}
                        <div className="mt-auto">
                          <div className="flex justify-between items-end mb-3">
                            <div>
                              <p className="text-[10px] text-gray-400 font-medium mb-0 leading-none">Best Deal Price</p>
                              <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold text-blue-700">{deal.price}</span>
                                <span className="text-[10px] text-gray-400 font-normal">/person</span>
                              </div>
                            </div>
                            <div className="text-right mb-0.5">
                              <p className="text-[10px] text-gray-400 line-through mb-0 leading-none decoration-blue-500 decoration-1">
                                {deal.originalPrice || '₹50,000'}
                              </p>
                              <p className="text-[10px] font-bold text-blue-600 animate-pulse">FLASH SALE</p>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full pt-3 border-t border-dashed border-gray-100">
                            <Link to={deal.path} className="flex-1">
                              <button className="w-full h-9 border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 rounded-md font-bold text-[10px] md:text-[11px] shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center">
                                Book Now
                              </button>
                            </Link>
                            <button className="flex-1 h-9 border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-md font-bold text-[10px] md:text-[11px] transition-all active:scale-95 flex items-center justify-center">
                              Enquiry
                            </button>
                            <Link to={deal.path} className="flex-1">
                              <button className="w-full h-9 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-bold text-[10px] md:text-[11px] transition-all active:scale-95 flex items-center justify-center">
                                Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="pt-10 pb-0 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-Lobster mb-6">Why Choose Himachal Destination?</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
            {[
              { icon: ThumbsUp, num: "500+", text: "Excellent Reviews" },
              { icon: Award, num: "15+", text: "Years Experience" },
              { icon: Globe, num: "50+", text: "Destinations" },
              { icon: Headset, num: "24x7", text: "Support" },
              { icon: Users, num: "51k+", text: "Happy Clients" },
              { icon: ShieldCheck, num: "100%", text: "Secure" },
            ].map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-4 text-emerald-300 group-hover:text-orange-500 transition-colors duration-300 bg-white/10 p-4 rounded-full border border-white/5 group-hover:bg-white/20">
                    <item.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-1">{item.num}</h3>
                  <p className="text-emerald-200/70 text-xs md:text-sm font-medium">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST BLOGS / STORIES ================= */}
      <section className="pt-10 pb-0 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">

          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="text-left">
                <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">
                  Travel Inspiration
                </span>
                <h2 className="text-3xl md:text-5xl font-Lobster font-bold text-black">
                  Latest <span className='text-blue-500'>Travel</span> Stories
                </h2>
              </div>

              {/* DESKTOP VIEW ALL */}
              <Link to="/blogs">
                <Button
                  variant="outline"
                  className="hidden md:flex border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white rounded-full px-6 gap-2 transition-all"
                >
                  View All Blogs <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} direction="up" delay={index * 0.1}>
                <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">

                  {/* IMAGE */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={post.image}
                      alt={`Blog: ${post.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                    {/* DATE */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800 shadow-lg flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      {post.date}
                    </div>

                    {/* CATEGORY */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
                      <User className="w-3.5 h-3.5 text-emerald-600" />
                      By {post.author}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2 font-Lobster tracking-wide">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-orange-600 transition-colors group/link"
                      >
                        Read More
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* MOBILE VIEW ALL */}
          <div className="mt-8 text-center md:hidden">
            <Link to="/blogs">
              <Button className="bg-emerald-900 text-white hover:bg-emerald-800 rounded-full px-8 py-3 w-full">
                View All Blogs
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="pt-10 pb-0 bg-[#F8F9FE] relative">
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Hear It from Travelers</h2>
              <p className="text-slate-600">
                We go beyond just booking trips—we create unforgettable travel experiences.
              </p>
            </div>
          </FadeInUp>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-2"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto pb-10">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full relative">

                  {/* User Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={item.img}
                        alt={`Testimonial by ${item.name}`}
                        loading="lazy"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm cursor-pointer" aria-label="Watch video review">
                        <div className="bg-blue-500 rounded-full p-1 text-white">
                          <Play size={10} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">{item.name}</h4>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 text-[#00BFA6] relative">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < Math.floor(item.rating) ? "currentColor" : "none"}
                        strokeWidth={1}
                        className={i < Math.floor(item.rating) ? "text-[#00BFA6]" : "text-gray-300"}
                      />
                    ))}
                  </div>

                  {/* Spacer */}
                  <div className="h-2"></div>

                  <h5 className="font-bold text-lg mb-2">{item.title}</h5>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
}