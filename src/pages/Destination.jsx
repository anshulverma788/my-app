import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { 
  Search, 
  MapPin, 
  ArrowUpRight, 
  Mountain,
  Building2,
  Tent,
  Landmark,
  Clock,
  Globe2
} from 'lucide-react';

// CSS Imports
import 'swiper/css';
import 'swiper/css/pagination';

// Components
import Navbar from '@/components/layout/Navbar'; 
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/animations/ScrollReveal';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const allDestinations = [
  { id: 1, name: 'Shimla', location: 'Himachal Pradesh', category: 'Mountain', image: 'https://i.pinimg.com/1200x/0c/8b/a7/0c8ba7a386f38b9d32d29e74ecb0ee13.jpg', price: '₹5,999', rating: 4.8, size: 'large', path: '/package/shimla' },
  { id: 2, name: 'Manali', location: 'Himachal Pradesh', category: 'Adventure', image: 'https://i.pinimg.com/736x/e9/d9/0b/e9d90b12038ceebd836333f367932732.jpg', price: '₹12,500', rating: 4.9, size: 'small', path: '/package/manali' },
  { id: 3, name: 'Jaipur', location: 'Rajasthan', category: 'Heritage', image: 'https://i.pinimg.com/1200x/83/51/62/835162704a4ce3b1fd84a74c07e68c89.jpg', price: '₹6,500', rating: 4.7, size: 'small', path: '/package/jaipur' },
  { id: 4, name: 'Kedarnath', location: 'Uttarakhand', category: 'Religious', image: 'https://i.pinimg.com/1200x/df/35/de/df35de7d2e47efb1a8aac75d5635e557.jpg', price: '₹9,999', rating: 4.9, size: 'wide', path: '/package/kedarnath' },
  { id: 5, name: 'Munnar', location: 'Kerala', category: 'Nature', image: 'https://i.pinimg.com/1200x/c4/6a/02/c46a02c2ab37e595e61fc893fe9e2889.jpg', price: '₹4,999', rating: 4.6, size: 'small', path: '/package/munnar' },
  { id: 6, name: 'Rishikesh', location: 'Uttarakhand', category: 'Adventure', image: 'https://i.pinimg.com/736x/ca/44/6b/ca446bacdfe7fb7494b21c5a2fbd2fd2.jpg', price: '₹3,500', rating: 4.8, size: 'large', path: '/package/rishikesh' },
  { id: 7, name: 'Goa', location: 'Goa', category: 'Beach', image: 'https://i.pinimg.com/736x/a6/af/a3/a6afa3154ade185431ed4043fe02e4cc.jpg', price: '₹7,000', rating: 4.7, size: 'small', path: '/package/goa' },
  { id: 8, name: 'Gangtok', location: 'Sikkim', category: 'Culture', image: 'https://i.pinimg.com/736x/f0/81/92/f081920c4be5d55d141652fc70d88ece.jpg', price: '₹6,000', rating: 4.6, size: 'wide', path: '/package/gangtok' },
];

const activities = [
  { id: 1, title: 'Paragliding', location: 'Bir Billing', duration: '30 Mins', price: '₹2,500', image: 'https://i.pinimg.com/736x/94/67/0a/94670af87fe6deab73cbbfc1f03b93ef.jpg', tag: 'Adventure' },
  { id: 2, title: 'River Rafting', location: 'Rishikesh', duration: '2 Hours', price: '₹1,500', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000', tag: 'Water Sports' },
  { id: 3, title: 'Camel Safari', location: 'Jaisalmer', duration: '3 Hours', price: '₹1,200', image: 'https://i.pinimg.com/1200x/f9/7f/90/f97f908357919adbfbd7e50b60f3b4eb.jpg', tag: 'Desert' },
  { id: 4, title: 'Scuba Diving', location: 'Andaman', duration: '1 Hour', price: '₹3,500', image: 'https://i.pinimg.com/1200x/2f/c4/fa/2fc4fa0797c0bbe70b7cfb74b005c7cd.jpg', tag: 'Water Sports' },
];

const categories = [
  { id: 'All', label: 'All Places', icon: null },
  { id: 'Mountain', label: 'Mountains', icon: Mountain },
  { id: 'Adventure', label: 'Adventure', icon: Tent },
  { id: 'Religious', label: 'Religious', icon: Landmark },
  { id: 'Culture', label: 'Culture', icon: Building2 },
];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Refs
  const mainRef = useRef(null); // Scope for GSAP
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  // --- LOGIC: Optimized Filtering with useMemo ---
  const filteredData = useMemo(() => {
    let result = allDestinations;
    
    // Category Filter
    if (activeTab !== 'All') {
      result = result.filter(item => item.category === activeTab);
    }
    
    // Search Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.location.toLowerCase().includes(query)
      );
    }
    return result;
  }, [activeTab, searchQuery]);

  // --- ANIMATION: Grid Items Entrance ---
  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length > 0) {
      const ctx = gsap.context(() => {
        gsap.fromTo(containerRef.current.children, 
          { y: 30, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.1, 
            ease: 'power3.out',
            overwrite: 'auto' // Prevents conflict with previous animations
          }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [filteredData]);

  // --- ANIMATION: Hero Parallax & Cleanup ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          scrollTrigger: { 
            trigger: heroRef.current, 
            start: 'top top', 
            end: 'bottom top', 
            scrub: 0.5 
          },
          y: 100, 
          scale: 1.1,
          ease: "none"
        });
      }
    }, mainRef);

    return () => ctx.revert(); // Essential for cleanup
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#FDFBF7] text-slate-900 selection:bg-rose-200 overflow-x-hidden">
      
      <Navbar />

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative h-[85vh] w-full overflow-hidden rounded-b-[3rem] shadow-2xl z-10">
        
        {/* Background Image */}
        <div ref={heroRef} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1651317720959-2ee65b345736?q=80&w=1170&auto=format&fit=crop"
            alt="Cinematic Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <ScrollReveal direction="up">
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6">
               <Globe2 className="w-4 h-4 text-rose-300" />
               <span className="text-white text-sm font-medium tracking-wide uppercase">Explore the Unseen</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-[1.1]">
              Wanderlust <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-orange-100">Awakened</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Discover handpicked destinations that turn moments into memories. Your next great story starts here.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl bg-white/15 backdrop-blur-xl border border-white/30 p-2 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center gap-2 transition-transform hover:scale-[1.02]">
               <div className="pl-4">
                  <Search className="w-6 h-6 text-white/70" />
               </div>
               <input 
                  type="text" 
                  placeholder="Search destinations (e.g. Manali, Bali...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/60 text-lg h-12"
               />
               <Button className="rounded-full bg-rose-600 hover:bg-rose-700 text-white px-8 h-12 font-medium shadow-lg">
                  Search
               </Button>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- 2. CATEGORY TABS ---------------- */}
      <section className="relative z-20 px-4 -mt-8 mb-12">
         <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.2}>
               <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-wrap gap-3 justify-center border border-stone-100">
                 {categories.map((cat) => (
                   <button
                     key={cat.id}
                     onClick={() => setActiveTab(cat.id)}
                     className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border
                       ${activeTab === cat.id 
                         ? 'bg-slate-900 text-white shadow-md border-slate-900' 
                         : 'bg-stone-50 text-slate-600 border-transparent hover:bg-stone-100'
                       }`}
                   >
                     {cat.icon && <cat.icon className="w-4 h-4" />}
                     {cat.label}
                   </button>
                 ))}
                 
                 {(searchQuery || activeTab !== 'All') && (
                   <button 
                     onClick={() => {setActiveTab('All'); setSearchQuery('');}}
                     className="px-4 py-2 text-sm text-rose-500 hover:text-rose-700 underline underline-offset-4 font-medium"
                   >
                     Clear
                   </button>
                 )}
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* ---------------- 3. MASONRY GRID ---------------- */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 pl-2 border-l-4 border-rose-500">
             <h2 className="text-3xl font-serif font-bold text-slate-900 ml-4">Trending Now</h2>
          </div>

          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {filteredData.map((dest) => (
              <div 
                key={dest.id} 
                className={`relative group rounded-3xl overflow-hidden cursor-pointer bg-stone-200 
                  ${dest.size === 'large' ? 'sm:row-span-2' : ''} 
                  ${dest.size === 'wide' ? 'sm:col-span-2' : ''}
                `}
              >
                <Link to={dest.path} className="block h-full w-full">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-none font-normal">
                      {dest.category}
                    </Badge>
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="flex items-center gap-1 text-white/80 text-sm mb-1">
                          <MapPin className="w-3 h-3" /> {dest.location}
                        </div>
                        <h3 className="text-2xl font-serif font-medium">{dest.name}</h3>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400 font-bold bg-black/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                          ★ {dest.rating}
                      </div>
                    </div>
                    
                    {/* Hover Reveal Details */}
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                      <div className="pt-4 mt-4 border-t border-white/20 flex justify-between items-center">
                        <div>
                          <p className="text-xs text-white/70">Starting from</p>
                          <p className="text-lg font-bold">{dest.price}</p>
                        </div>
                        <div className="bg-white text-black p-2 rounded-full hover:bg-rose-500 hover:text-white transition-colors">
                           <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredData.length === 0 && (
             <div className="text-center py-20 bg-stone-50 rounded-3xl mt-4">
                <Search className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900">No destinations found</h3>
                <p className="text-slate-500">We couldn't find any match for "{searchQuery}".</p>
             </div>
          )}
        </div>
      </section>

      {/* ---------------- 4. ACTIVITIES SLIDER ---------------- */}
      <section className="py-20 bg-white relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-50 rounded-full blur-3xl -z-10 opacity-60"></div>

         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <ScrollReveal direction="up">
               <div className="text-center mb-12">
                  <p className="text-rose-500 font-medium uppercase tracking-wide text-sm mb-2">Thrilling Experiences</p>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Popular Activities</h2>
                  <p className="text-slate-500 mt-2 max-w-xl mx-auto">Beyond sightseeing, immerse yourself in unique experiences.</p>
               </div>
            </ScrollReveal>

            <Swiper
               modules={[Autoplay, Pagination]}
               spaceBetween={24}
               slidesPerView={1}
               pagination={{ clickable: true, dynamicBullets: true }}
               autoplay={{ delay: 3000, disableOnInteraction: false }}
               breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
               }}
               className="pb-16 !overflow-visible"
            >
               {activities.map((item) => (
                  <SwiperSlide key={item.id} className="h-full py-4">
                     <div className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group h-full">
                        <div className="relative h-56 overflow-hidden m-2 rounded-[1.5rem]">
                           <img 
                              src={item.image} 
                              alt={item.title} 
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                           />
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                           <Badge className="absolute top-4 left-4 bg-white/95 text-slate-800 backdrop-blur-sm border-none shadow-sm font-bold px-3">
                             {item.tag}
                           </Badge>
                        </div>
                        
                        <div className="p-5">
                           <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                           <div className="flex items-center text-slate-500 text-sm mb-5 gap-4">
                              <div className="flex items-center gap-1.5">
                                 <MapPin className="w-4 h-4 text-rose-400" /> 
                                 <span className="truncate">{item.location}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                 <Clock className="w-4 h-4 text-rose-400" /> 
                                 {item.duration}
                              </div>
                           </div>
                           <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                              <div>
                                 <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Starting From</p>
                                 <p className="text-2xl font-extrabold text-slate-900">{item.price}</p>
                              </div>
                              <Button size="icon" className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-rose-500 shadow-md transition-transform group-hover:rotate-45">
                                 <ArrowUpRight className="w-6 h-6" />
                              </Button>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>

      {/* ---------------- 5. CTA SECTION ---------------- */}
      <section className="py-24 px-4 bg-[#FDFBF7] border-t border-stone-200 relative">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-slate-900 leading-tight">
               Your Dream Journey <br/> Awaits.
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
               Not sure where to begin? Our travel specialists curate personalized itineraries just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
               <Link to="/booking/customize">
                  <Button size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all font-semibold">
                     Plan My Trip Now
                  </Button>
               </Link>
               <Link to="/contact">
                  <Button size="lg" variant="outline" className="rounded-full border-2 border-slate-200 bg-white hover:bg-stone-50 hover:border-slate-900 px-10 py-7 text-lg font-semibold transition-all">
                     Talk to an Expert
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}