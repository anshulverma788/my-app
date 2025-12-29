import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// CSS Imports
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Change 1: Added 'Flag' icon to imports for the new row
import {
  ArrowRight, MapPin, Star, Calendar, Phone, ShieldCheck,
  Headset, ThumbsUp, Globe, Users, Award, Clock, Utensils, Car, Building2, Heart, Flag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Index() {

  // ================= HERO SECTION STATE =================
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperInstanceRef = useRef(null);

  const heroSlides = [
    {
      id: 1,
      place: "Himachal",
      title: "The Land of Gods",
      desc: "Experience the mystical mountains, lush valleys, and spiritual serenity of Himachal Pradesh.",
      image: "https://cdn.pixabay.com/photo/2018/02/14/13/42/sky-3153004_1280.jpg",
      price: "From ₹5,999",
    },
    {
      id: 2,
      place: "Kashmir",
      title: "Paradise on Earth",
      desc: "Discover the breathtaking beauty of snow-capped peaks and the famous Dal Lake.",
      image: "https://cdn.pixabay.com/photo/2022/07/30/07/02/river-7353171_1280.jpg",
      price: "From ₹8,999",
    },
    {
      id: 3,
      place: "Kerala",
      title: "God's Own Country",
      desc: "Sail through the backwaters and relax in the lush greenery of southern India.",
      image: "https://cdn.pixabay.com/photo/2017/02/17/21/18/south-india-2075399_1280.jpg",
      price: "From ₹12,499",
    },
    {
      id: 4,
      place: "Ladakh",
      title: "Land of High Passes",
      desc: "An adventure of a lifetime amidst the rugged terrains and monasteries.",
      image: "https://cdn.pixabay.com/photo/2022/10/13/13/25/pangong-tso-7519104_1280.jpg",
      price: "From ₹15,999",
    },
    {
      id: 5,
      place: "Dubai",
      title: "City of Gold",
      desc: "Experience luxury shopping, ultramodern architecture and lively nightlife.",
      image: "https://i.pinimg.com/1200x/7f/eb/3f/7feb3f0e8954789938f872f0585016fd.jpg",
      price: "From ₹25,999",
    },
  ];

  // Function to change slide
  const handleThumbnailClick = (index) => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideToLoop(index);
    }
  };

  // Get Next 3 Thumbnails relative to active index
  const getHeroThumbnails = () => {
    let thumbs = [];
    for (let i = 1; i <= 3; i++) {
      const targetIndex = (activeIndex + i) % heroSlides.length;
      thumbs.push({
        ...heroSlides[targetIndex],
        realIndex: targetIndex
      });
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
    { name: "Aarav Sharma", location: "Kerala, India", image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg", rating: 5, text: "The Kerala backwaters experience was absolutely magical! Everything was arranged perfectly.", trip: "Kerala 3D / 2N" },
    { name: "Riya Verma", location: "Manali, India", image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg", rating: 4, text: "Beautiful mountains, cozy stay, smooth travel experience — totally worth it!", trip: "Manali Adventure Trip" },
    { name: "Karan Patel", location: "Goa, India", image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg", rating: 5, text: "Stunning beaches and perfect arrangements — best trip ever!", trip: "Goa Beach Holiday" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white">

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
      `}</style>

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] lg:h-screen min-h-[400px] bg-emerald-950 text-white overflow-hidden group">
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
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <img src={slide.image} alt={slide.place} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent opacity-90 lg:hidden"></div>
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/40 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Content */}
        <div className="lg:hidden absolute inset-0 z-10 flex flex-col justify-end p-5 pb-10 pointer-events-none">
          <div className="flex flex-col items-start gap-2 pointer-events-auto">
            <div key={activeIndex} className="w-full">
              <div className="flex items-center gap-2 mb-1 anim-text delay-100">
                <span className="text-orange-400 font-bold uppercase tracking-widest text-[10px]">
                  {heroSlides[activeIndex].price}
                </span>
              </div>
              <h1 className="text-4xl font-serif font-bold leading-none text-white mb-2 shadow-sm anim-text delay-200">
                {heroSlides[activeIndex].place}
              </h1>
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
                <h1 className="text-8xl font-serif font-bold leading-tight anim-text delay-200 drop-shadow-2xl">
                  {heroSlides[activeIndex].place}
                </h1>
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
        <div className="hidden lg:flex absolute bottom-8 right-12 z-20 flex-col gap-4 items-end pointer-events-auto">
          <div className="text-5xl font-bold text-white/10 select-none mb-4 font-mono">
            0{activeIndex + 1}
          </div>
          <div className="flex flex-col gap-4">
            {getHeroThumbnails().map((thumb, idx) => (
              <div key={idx} onClick={() => handleThumbnailClick(thumb.realIndex)} className="group relative w-64 h-28 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-orange-500 transition-all duration-300 bg-emerald-950/60 backdrop-blur-md shadow-2xl flex items-center">
                <div className="w-24 h-full relative overflow-hidden">
                  <img src={thumb.image} alt={thumb.place} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-1">Next</span>
                  <h4 className="text-lg font-bold leading-none text-white font-serif">{thumb.place}</h4>
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

      {/* ================= POPULAR PACKAGES (MODERN CARD DESIGN) ================= */}
      <section className="py-16 md:py-5 relative overflow-hidden bg-orange-50/30">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 md:mb-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-black">
                Popular Packages
              </h2>
              <div className="w-20 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
            </div>
          </ScrollReveal>
          <div className="dark-pagination">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-5 px-2">
              {packages.map((pkg, index) => (
                <SwiperSlide key={index} className="h-full pb-10">
                  <ScrollReveal direction="up" delay={index * 0.1}>
                    {/* h-full rakha hai taaki saare cards same row mein barabar height ke dikhein */}
                    <div className="group bg-white rounded-2xl p-2 overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 h-full flex flex-col relative">

                      {/* --- Image Section --- */}
                      <div className="relative h-64 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-500 group-hover:rounded-[20px] group-hover:shadow-sm">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                        {/* 20% OFF Ribbon */}
                        <div className="absolute top-[14px] left-[-34px] bg-[#6d1526] text-white text-[10px] font-bold w-[120px] py-1 -rotate-45 text-center shadow-lg z-20 uppercase tracking-wider border-y border-[#57111f]">
                          20% OFF
                        </div>

                        <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors z-10">
                          <Heart className="w-4 h-4 fill-current" />
                        </button>

                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                          <div className="flex items-center gap-1 text-white text-xs font-medium">
                            <MapPin className="w-3.5 h-3.5 text-orange-400" />
                            {pkg.location}
                          </div>
                        </div>
                      </div>

                      {/* --- CHANGE 1: ADDED INFO ROW AS PER PHOTO (Duration, Start, End) --- */}
                      <div className="bg-emerald-50/50 border-b border-emerald-100 px-4 py-3 flex items-center justify-between gap-2 text-[10px] md:text-[11px] font-medium text-emerald-800">
                          {/* Duration */}
                          <div className="flex flex-col items-center leading-tight">
                             <div className="flex items-center gap-1 mb-0.5 text-orange-600">
                                <Clock className="w-3.5 h-3.5" />
                                <span>Duration</span>
                             </div>
                             <span className="font-bold text-gray-700">{pkg.duration}</span>
                          </div>
                          {/* Divider */}
                          <div className="w-px h-6 bg-emerald-200"></div>
                          {/* Start From (Used Location as dynamic data) */}
                          <div className="flex flex-col items-center leading-tight">
                             <div className="flex items-center gap-1 mb-0.5 text-orange-600">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>Start</span>
                             </div>
                             <span className="font-bold text-gray-700">{pkg.location}</span>
                          </div>
                          {/* Divider */}
                          <div className="w-px h-6 bg-emerald-200"></div>
                          {/* Finish At */}
                          <div className="flex flex-col items-center leading-tight">
                             <div className="flex items-center gap-1 mb-0.5 text-orange-600">
                                <Flag className="w-3.5 h-3.5" />
                                <span>End</span>
                             </div>
                             <span className="font-bold text-gray-700">{pkg.location}</span>
                          </div>
                      </div>

                      {/* --- Content Body --- */}
                      <div className="p-4 flex-1 flex flex-col">

                        {/* Title - Limit removed (Wrap text allowed) */}
                        <div className="mb-3">
                          <h3 className="text-lg font-serif font-bold text-gray-800 leading-tight transition-colors">
                            {pkg.title}
                          </h3>
                        </div>

                        {/* Amenities Icons */}
                        <div className="flex gap-3 mb-5 border-y border-gray-100 py-3 justify-between px-1">
                          <div className="flex flex-col items-center gap-1 text-gray-500">
                            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-[9px] font-medium uppercase">Hotel</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-gray-500">
                            <Utensils className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-[9px] font-medium uppercase">Meals</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-gray-500">
                            <Car className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-[9px] font-medium uppercase">Cab</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-gray-500">
                            <Clock className="w-3.5 h-3.5 text-orange-500" />
                            <span className="text-[9px] font-medium uppercase">{pkg.duration}</span>
                          </div>
                        </div>

                        {/* Price & Action Section */}
                        <div className="mt-auto">
                          <div className="flex justify-between items-end mb-3">
                            <div>
                              <p className="text-[10px] text-gray-400 font-medium mb-0 leading-none">Starting from</p>
                              <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold text-emerald-700">{pkg.price}</span>
                                <span className="text-[10px] text-gray-400 font-normal">/person</span>
                              </div>
                            </div>
                            <div className="text-right mb-0.5">
                              <p className="text-[10px] text-gray-400 line-through mb-0 leading-none decoration-red-500 decoration-1">
                                ₹{parseInt(pkg.price.replace(/[^\d]/g, '')) + 1500}
                              </p>
                              <p className="text-[10px] font-bold text-orange-600">
                                30% OFF
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full pt-3 border-t border-dashed border-gray-100">
                            <Link to="/booking" className="flex-1">
                              <button className="w-full h-9 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md font-bold text-[10px] md:text-[11px] shadow-sm transition-all active:scale-95 flex items-center justify-center">
                                Book Now
                              </button>
                            </Link>
                            <button className="flex-1 h-9 border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-md font-bold text-[10px] md:text-[11px] transition-all active:scale-95 flex items-center justify-center">
                              Enquiry
                            </button>
                            <Link to={pkg.path} className="flex-1">
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

          {/* --- CHANGE 2: ADDED VIEW ALL PACKAGES BUTTON --- */}
          <div className="text-center mt-8">
             <Link to="/package">
                <Button className="bg-emerald-900 text-white hover:bg-emerald-800 rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105">
                   View All Packages <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
             </Link>
          </div>

        </div>
      </section>

      {/* ================= TOP DESTINATIONS ================= */}
      <section className="py-10 md:py-4 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-black">Explore Destinations </h2>
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
                  <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
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
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight">
                        {dest.title}
                      </h3>
                      <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-in-out overflow-hidden">
                        <Button className="bg-orange-500 text-white hover:bg-white hover:text-orange-600 border-none rounded-full px-8 py-2 text-sm font-bold shadow-lg transition-colors">
                          Explore Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.6}>
            <div className="text-center mt-12">
              <Link to="/destination">
                <Button size="lg" className="bg-emerald-100 text-emerald-800 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg rounded-full shadow-none hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-bold">
                  View All Destinations <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= LAST MINUTE DEALS (UPDATED TO MATCH CARD DESIGN - RED THEME) ================= */}
      <section className="py-16 md:py-4 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-black">Last Minute Deals</h2>
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
                    <div className="group bg-white rounded-2xl overflow-hidden border border-red-50 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 h-full flex flex-col relative">

                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img src={deal.image} alt={deal.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider animate-pulse z-10">
                          50% OFF
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                          <div className="flex items-center gap-1 text-white text-xs font-medium">
                            <Clock className="w-3.5 h-3.5 text-red-500" />
                            Hurry, Ends soon!
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-serif font-bold text-gray-800 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                            {deal.title}
                          </h3>
                        </div>

                        <div className="flex gap-4 mb-5 border-y border-gray-100 py-3">
                          <div className="flex flex-col items-center gap-1 text-gray-500">
                            <Building2 className="w-4 h-4 text-red-500" />
                            <span className="text-[10px] font-medium">Hotel</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-gray-500">
                            <Car className="w-4 h-4 text-red-500" />
                            <span className="text-[10px] font-medium">Cab</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-gray-500">
                            <MapPin className="w-4 h-4 text-red-500" />
                            <span className="text-[10px] font-medium">{deal.location}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-gray-500">
                            <Clock className="w-4 h-4 text-red-500" />
                            <span className="text-[10px] font-medium">{deal.duration}</span>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <div className="flex justify-between items-end mb-4">
                            <div>
                              <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 line-through">
                                {deal.originalPrice || '₹50,000'}
                              </p>
                              <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-red-600">{deal.price}</span>
                                <span className="text-xs text-gray-400 font-normal">/person</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-2">
                            <Link to={deal.path} className="col-span-3">
                              <button className="w-full h-11 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
                                Book Now
                              </button>
                            </Link>
                            <button className="col-span-1 h-11 border border-red-200 text-red-600 hover:bg-red-50 rounded-lg flex items-center justify-center transition-colors" title="Quick Enquiry">
                              <Phone className="w-5 h-5" />
                            </button>
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
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">Why Choose Himachal Destination?</h2>
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

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 px-6 py-2 rounded-full shadow-sm mb-4">Client Love</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-emerald-950">What Our Travelers Say</h2>
          </div>
          <div className="dark-pagination">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <Card className="p-8 h-full rounded-3xl shadow-xl border border-emerald-50 bg-white transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl relative">
                    <div className="absolute top-6 right-8 text-6xl text-orange-100 font-serif leading-none">"</div>
                    <div className="flex items-center mb-6">
                      <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-orange-100 shadow-lg mr-4 object-cover" />
                      <div>
                        <h4 className="text-lg font-bold text-emerald-950">{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-2 italic leading-relaxed text-sm">{t.text}</p>
                    <p className="text-xs font-bold text-emerald-600 mt-4 uppercase tracking-wide">Trip: {t.trip}</p>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">Ready to Start Your Adventure?</h2>
              <p className="text-xl md:text-2xl text-emerald-100/90 mb-10 font-light">Let our travel experts create a personalized itinerary just for you.</p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/booking/customize">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto font-bold border border-orange-400">
                    <Calendar className="w-5 h-5 mr-2" /> Plan My Trip
                  </Button>
                </Link>
                <a href="tel:+1234567890">
                  <Button size="lg" variant="outline" className="border-2 border-white text-emerald-900 hover:bg-emerald-800 hover:text-white hover:border-emerald-800 px-10 py-7 text-lg rounded-full backdrop-blur-sm bg-white transition-all duration-300 w-full sm:w-auto font-bold">
                    <Phone className="w-5 h-5 mr-2" /> Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}