import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// CSS Imports
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  ArrowRight, MapPin, Star, Calendar, Phone, ShieldCheck,
  Clock, Headset, ThumbsUp, Globe, Users, Award, Play, Facebook, Instagram, Twitter
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
  const swiperInstanceRef = useRef(null); // Ref to store Swiper instance

  const heroSlides = [
    {
      id: 1,
      place: "Himachal",
      title: "The Land of Gods",
      desc: "Experience the mystical mountains, lush valleys, and spiritual serenity of Himachal Pradesh.",
      image: "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://cdn.pixabay.com/photo/2019/05/18/15/58/road-4212028_1280.jpg",
      price: "From ₹15,999",
    },
    {
      id: 5,
      place: "Chardham",
      title: "Mahadev Ki Nagri",
      desc: "Experience luxury shopping, ultramodern architecture and lively nightlife.",
      image: "https://i.pinimg.com/736x/8c/6e/86/8c6e86f414db2e702b5ae2a48dc9ad11.jpg",
      price: "From ₹25,999",
    },
  ];

  // Function to change slide when clicking sidebar thumbnail
  const handleThumbnailClick = (index) => {
    if (swiperInstanceRef.current) {
      // slideToLoop is used because we have loop={true}
      swiperInstanceRef.current.slideToLoop(index);
    }
  };

  // Get Next 3 Thumbnails relative to active index for the Sidebar
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

  // ================= PAGE DATA (Packages, Destinations, etc.) =================
  const packages = [
    { name: 'Shimla', image: 'https://i.pinimg.com/1200x/0f/a9/48/0fa948b0e663115f7a42c2c0ae1896a1.jpg', path: '/package/shimla', title: 'Shimla Getaway', location: 'Himachal', duration: '3 Days', price: '₹5,999' },
    { name: 'Manali', image: 'https://i.pinimg.com/736x/49/7e/49/497e495ee05c0ea5d5de82e7c4e3f653.jpg', path: '/package/shimla-manali', title: 'Magical Manali', location: 'Himachal', duration: '4 Days', price: '₹7,999' },
    { name: 'Triund', image: 'https://i.pinimg.com/736x/f6/7a/3e/f67a3e0a96ba728d80001bf6bd06ca03.jpg', path: '/package/dharamshala', title: 'Triund Trek', location: 'Dharamshala', duration: '2 Days', price: '₹3,499' },
    { name: 'Yulla Kanda', image: 'https://i.pinimg.com/1200x/b2/ea/99/b2ea99c22fe47b745fa1554e9454f7b7.jpg', path: '/package/kinnaur', title: 'Kinnaur Valley', location: 'Kinnaur', duration: '5 Days', price: '₹12,499' },
    { name: 'Spiti', image: 'https://i.pinimg.com/1200x/43/b0/49/43b049fe3071e512697a9160ff648da3.jpg', path: '/package/spiti-8day', title: 'Spiti Expedition', location: 'Spiti Valley', duration: '7 Days', price: '₹18,999' },
  ];

  const destinations = [
    { id: 'Himachal Pradesh', title: 'Himachal Pradesh', image: 'https://i.pinimg.com/736x/8f/07/42/8f07429dd03950cc8728bc0d44bfa089.jpg', location: 'Himachal, India', duration: '03 Days / 02 Nights', price: '$199', path: '/destinations/kerala', type: 'Relax' },
    { id: 'Utrakhand', title: 'Utrakhand', image: 'https://i.pinimg.com/736x/8c/14/3e/8c143e84594eafe45e5db7ce2ce503a3.jpg', location: 'Utrakhand, India', duration: '04 Days / 03 Nights', price: '$249', path: '/destinations/manali', type: 'Snow' },
    { id: 'Kerala', title: 'Kerala', image: 'https://i.pinimg.com/1200x/7c/36/7f/7c367f3b73b2b93604219530631e271b.jpg', location: 'Kerala, India', duration: '05 Days / 04 Nights', price: '$299', path: '/destinations/goa', type: 'Beach' },
    { id: 'rajasthan', title: 'Rajasthan', image: 'https://i.pinimg.com/1200x/9e/35/e9/9e35e983fe70f4c3a1e5dbe22172a4da.jpg', location: 'Jaipur, India', duration: '03 Days / 02 Nights', price: '$180', path: '/destinations/rajasthan', type: 'Heritage' },
  ];

  const lastMinuteDeals = [
    { name: 'Shimla', image: 'https://i.pinimg.com/736x/a9/9f/c3/a99fc3dc112ca7e956e20244fc578f2e.jpg', path: '/package/dubai', title: 'Shimla Kufri', location: 'Himachal', duration: '4 Days', price: '₹29,999' },
    { name: 'Manali', image: 'https://i.pinimg.com/736x/a0/e4/ca/a0e4ca6e763a733634c156f3cced71d7.jpg', path: '/package/vietnam', title: 'Manali Solang', location: 'Himachal', duration: '6 Days', price: '₹35,999' },
    { name: 'CharDham', image: 'https://i.pinimg.com/1200x/7f/eb/3f/7feb3f0e8954789938f872f0585016fd.jpg', path: '/package/thailand', title: 'CharDham ', location: 'Utrakhand', duration: '5 Days', price: '₹24,999' },
    { name: 'Rishikesh', image: 'https://i.pinimg.com/736x/cb/71/49/cb714920561dc0c6f83f7ed703ff2eae.jpg', path: '/package/bali', title: 'Rishikesh', location: 'Utrakhand', duration: '5 Days', price: '₹39,999' },
  ];

  const testimonials = [
    { name: "Aarav Sharma", location: "Kerala, India", image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg", rating: 5, text: "The Kerala backwaters experience was absolutely magical! Everything was arranged perfectly.", trip: "Kerala 3D / 2N" },
    { name: "Riya Verma", location: "Manali, India", image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg", rating: 4, text: "Beautiful mountains, cozy stay, smooth travel experience — totally worth it!", trip: "Manali Adventure Trip" },
    { name: "Karan Patel", location: "Goa, India", image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg", rating: 5, text: "Stunning beaches and perfect arrangements — best trip ever!", trip: "Goa Beach Holiday" },
  ];

  const blogPosts = [
    { id: 1, title: 'Top 10 Honeymoon Destinations for 2025', image: 'https://i.pinimg.com/736x/b6/a1/f2/b6a1f214ed11f46384380e4a0e121464.jpg', date: 'Jan 10, 2025', readTime: '6 min read' },
    { id: 2, title: 'How to Plan a Perfect Family Vacation', image: 'https://i.pinimg.com/736x/eb/b3/e5/ebb3e5ac08891bc926f318307777a279.jpg', date: 'Dec 22, 2024', readTime: '5 min read' },
    { id: 3, title: 'Ultimate Guide to Luxury Travel on a Budget', image: 'https://i.pinimg.com/1200x/87/a9/c8/87a9c8cc76e59d5e615704c1f47be02a.jpg', date: 'Nov 5, 2024', readTime: '7 min read' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* CSS Animations for Text Entrances */}
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
      `}</style>

      <Navbar />

      {/* ================= FIXED MODERN HERO (SWIPER JS ENGINE) ================= */}
      <section className="relative w-full h-screen min-h-[600px] bg-slate-900 text-white overflow-hidden">
        
        {/* 1. BACKGROUND SWIPER (The Engine) */}
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect={'fade'}
          speed={1500}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          // IMPORTANT: Capture the Swiper instance here
          onSwiper={(swiper) => (swiperInstanceRef.current = swiper)}
          // IMPORTANT: Sync React state with Swiper's real index
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="absolute inset-0 w-full h-full z-0"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <img 
                  src={slide.image} 
                  alt={slide.place} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 2. TEXT CONTENT (Synced with State) */}
        <div className="absolute inset-0 z-10 container mx-auto px-6 md:px-12 flex items-center pointer-events-none">
          <div className="max-w-2xl pt-20 pointer-events-auto">
            
            {/* Using key={activeIndex} forces React to re-mount div, triggering CSS Animation again */}
            <div key={activeIndex}>
              <div className="overflow-hidden mb-2">
                <p className="text-blue-400 font-bold tracking-[0.3em] uppercase anim-text delay-100">
                  — Explore The World
                </p>
              </div>

              <div className="overflow-hidden mb-4">
                 <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight anim-text delay-200">
                   {heroSlides[activeIndex].place}
                 </h1>
              </div>

              <div className="overflow-hidden mb-8">
                <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed anim-text delay-300">
                  {heroSlides[activeIndex].desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 anim-text delay-400">
                 <Button className="h-14 px-8 rounded-none bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition-all text-lg font-bold tracking-wide">
                   View Details
                 </Button>
                 <button className="h-14 w-14 flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <Play className="w-5 h-5 fill-white" />
                 </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3. SIDEBAR THUMBNAILS (Controls Swiper) */}
        <div className="absolute bottom-8 right-4 md:right-12 z-20 flex flex-col gap-4 items-end pointer-events-auto">
          
          <div className="text-5xl font-bold text-white/10 select-none mb-4 font-mono">
              0{activeIndex + 1}
          </div>

          <div className="flex flex-col gap-4">
            {getHeroThumbnails().map((thumb, idx) => (
              <div
                key={idx}
                onClick={() => handleThumbnailClick(thumb.realIndex)}
                className="group relative w-64 h-24 md:h-28 rounded-xl overflow-hidden cursor-pointer border border-white/20 hover:border-blue-500 transition-all duration-300 bg-black/40 backdrop-blur-md shadow-2xl flex items-center"
              >
                <div className="w-24 h-full relative overflow-hidden">
                  <img 
                    src={thumb.image} 
                    alt={thumb.place} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-center">
                   <span className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Next Destination</span>
                   <h4 className="text-lg font-bold leading-none text-white">{thumb.place}</h4>
                   <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-400">{thumb.price}</span>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                         <ArrowRight className="w-3 h-3" />
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SOCIAL & PROGRESS */}
        <div className="absolute bottom-10 left-6 md:left-12 z-20 flex items-center gap-8 pointer-events-auto">
           <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"><Twitter className="w-4 h-4" /></a>
           </div>
           
           <div className="hidden md:flex items-center gap-3">
               <span className="text-xs font-bold">01</span>
               <div className="w-32 h-[2px] bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-500"
                    style={{ width: `${((activeIndex + 1) / heroSlides.length) * 100}%` }}
                  />
               </div>
               <span className="text-xs font-bold">0{heroSlides.length}</span>
           </div>
        </div>

      </section>

      {/* ================= REST OF THE SECTIONS ================= */}
      {/* POPULAR PACKAGES */}
      <section className="py-16 md:py-14 relative overflow-hidden bg-[#EEF5FF]">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-slate-900">Popular Packages</h2>
              <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">Choose from our best-selling itineraries crafted by travel experts.</p>
            </div>
          </ScrollReveal>

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
            className="pb-16 px-2"
          >
            {packages.map((pkg, index) => (
              <SwiperSlide key={index}>
                <ScrollReveal direction="up" delay={index * 0.1}>
                  <div className="bg-white rounded-[20px] p-3 shadow-lg border border-slate-100 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                    <div className="relative h-56 w-full rounded-[15px] overflow-hidden">
                      <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="pt-4 px-1 pb-2 flex-1 flex flex-col">
                      <div className="mb-4">
                          <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight mb-2">{pkg.title}</h3>
                          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                            <MapPin className="w-3.5 h-3.5 text-blue-500" /> <span>{pkg.location}</span>
                            <span className="text-gray-300">|</span> <span>{pkg.duration}</span>
                          </div>
                      </div>
                      <div className="mt-auto">
                        <div className="text-right mb-3">
                          <p className="text-[10px] uppercase tracking-wider font-serif text-gray-400 font-bold mb-0.5">Per Person</p>
                          <p className="text-2xl font-extrabold text-blue-600">{pkg.price}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                           <Link to={pkg.path} className="w-full">
                              <button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-[11px] md:text-xs shadow-md transition-all active:scale-95 flex items-center justify-center">
                              Book Online
                              </button>
                           </Link>
                           <button className="w-full h-10 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-bold text-[11px] md:text-xs transition-all active:scale-95 flex items-center justify-center">
                              Enquiry
                           </button>
                           <Link to={pkg.path} className="w-full">
                              <button className="w-full h-10 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg font-bold text-[11px] md:text-xs transition-all active:scale-95 flex items-center justify-center">
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
      </section>

      {/* TOP DESTINATIONS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-slate-900">Explore Destination</h2>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">Top rated destinations loved by our travelers.</p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-none font-normal px-3 py-1 uppercase tracking-wide text-xs">
                      {dest.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center pb-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center w-full">
                      <div className="flex items-center gap-3 text-white/80 mb-2 text-sm justify-center">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {dest.location}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight">
                        {dest.title}
                      </h3>
                      <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-in-out overflow-hidden">
                        <Button className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white border-none rounded-full px-6 py-2 text-sm font-bold shadow-lg transition-colors">
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
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  View All Destinations <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LAST MINUTE DEALS */}
      <section className="py-16 md:py-14 relative overflow-hidden bg-[#F0F9FF]">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 md:mb-16">
              <Badge className="bg-blue-500 text-white px-4 py-1 mb-4 uppercase tracking-wider">Limited Time Only</Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-slate-900">Last Minute Deals</h2>
              <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">Unbeatable prices for spontaneous travelers. Grab them before they are gone!</p>
            </div>
          </ScrollReveal>
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
              <SwiperSlide key={index}>
                <ScrollReveal direction="up" delay={index * 0.1}>
                  <div className="bg-white rounded-[20px] p-3 shadow-lg border border-red-100 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                    <div className="relative h-56 w-full rounded-[15px] overflow-hidden">
                      <img src={deal.image} alt={deal.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 right-4 bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider animate-pulse">
                        50% OFF
                      </div>
                    </div>
                    <div className="pt-4 px-1 pb-2 flex-1 flex flex-col">
                      <div className="mb-4">
                          <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight mb-2">{deal.title}</h3>
                          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                            <MapPin className="w-3.5 h-3.5 text-red-500" /> <span>{deal.location}</span>
                            <span className="text-gray-300">|</span> <span>{deal.duration}</span>
                          </div>
                      </div>
                      <div className="mt-auto">
                        <div className="text-right mb-3">
                          <p className="text-[10px] uppercase tracking-wider font-serif text-gray-400 font-bold mb-0.5">Was ₹50,000</p>
                          <p className="text-2xl font-extrabold text-blue-600">{deal.price}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                           <Link to={deal.path} className="w-full">
                              <button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-[11px] md:text-xs shadow-md transition-all active:scale-95 flex items-center justify-center">
                              Book Online
                              </button>
                           </Link>
                           <button className="w-full h-10 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-bold text-[11px] md:text-xs transition-all active:scale-95 flex items-center justify-center">
                              Enquiry
                           </button>
                           <Link to={deal.path} className="w-full">
                              <button className="w-full h-10 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg font-bold text-[11px] md:text-xs transition-all active:scale-95 flex items-center justify-center">
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
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Why to Choose Himachal Holiday Packages</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="flex flex-col items-center text-center group">
                   <div className="mb-4 text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                      <ThumbsUp className="w-12 h-12 md:w-14 md:h-14 animate-[bounce_2s_infinite]" />
                   </div>
                   <h3 className="text-xl font-extrabold text-slate-900 mb-1">500+</h3>
                   <p className="text-slate-500 text-xs md:text-sm font-medium">Excellent reviews on TripAdvisor</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <div className="flex flex-col items-center text-center group">
                   <div className="mb-4 text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                      <Award className="w-12 h-12 md:w-14 md:h-14 animate-[pulse_3s_infinite]" />
                   </div>
                   <h3 className="text-xl font-extrabold text-slate-900 mb-1">15+</h3>
                   <p className="text-slate-500 text-xs md:text-sm font-medium">Years of Excellence</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col items-center text-center group">
                   <div className="mb-4 text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                      <Globe className="w-12 h-12 md:w-14 md:h-14 animate-[spin_8s_linear_infinite]" />
                   </div>
                   <h3 className="text-xl font-extrabold text-slate-900 mb-1">50+</h3>
                   <p className="text-slate-500 text-xs md:text-sm font-medium">Destinations</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-col items-center text-center group">
                   <div className="mb-4 text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                      <Headset className="w-12 h-12 md:w-14 md:h-14 animate-[bounce_3s_infinite]" />
                   </div>
                   <h3 className="text-xl font-extrabold text-slate-900 mb-1">24x7</h3>
                   <p className="text-slate-500 text-xs md:text-sm font-medium">Customer Support</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.5}>
                <div className="flex flex-col items-center text-center group">
                   <div className="mb-4 text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                      <Users className="w-12 h-12 md:w-14 md:h-14 animate-[pulse_2s_infinite]" />
                   </div>
                   <h3 className="text-xl font-extrabold text-slate-900 mb-1">51000+</h3>
                   <p className="text-slate-500 text-xs md:text-sm font-medium">Happy Customers</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.6}>
                <div className="flex flex-col items-center text-center group">
                   <div className="mb-4 text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                      <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 animate-[bounce_4s_infinite]" />
                   </div>
                   <h3 className="text-xl font-extrabold text-slate-900 mb-1">100%</h3>
                   <p className="text-slate-500 text-xs md:text-sm font-medium">Money Safe</p>
                </div>
              </ScrollReveal>
            </div>
            <div className="text-center mt-16">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-1">
                    Get Free Quote
                </button>
            </div>
         </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-md">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What Our Travelers Say</h2>
          </div>
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
            className="pb-10"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <Card className="p-8 h-full rounded-3xl shadow-xl border border-white/50 bg-white/40 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl relative">
                  <div className="flex items-center mb-6">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow-lg mr-4" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{t.text}"</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="bg-purple-50 text-purple-700 border-0 mb-4 px-4 py-2">Travel Stories & Tips</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">From the Himachal Destination Travel Blog</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get inspiration, tips, and insider secrets to plan your next journey.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} direction="up" delay={index * 0.1}>
                <Link to={`/blog/${post.id}`}>
                  <Card className="overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-xs text-gray-500 mb-2">{post.date} • {post.readTime}</p>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">{post.title}</h3>
                      <Button variant="ghost" className="mt-auto px-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Start Your Adventure?</h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8">Let our travel experts create a personalized itinerary just for you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking/customize">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" /> Book a Consultation
                  </Button>
                </Link>
                <a href="tel:+1234567890">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 w-full sm:w-auto">
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