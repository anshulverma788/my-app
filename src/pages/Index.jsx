import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  ArrowRight,
  MapPin,
  Star,
  Users,
  Award,
  Calendar,
  Plane,
  Globe2,
  Heart,
  TrendingUp,
  Phone,
  Trophy, // New Icon added for card
  Plus,   // New Icon added for card
  Info    // New Icon added for card
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  // --- HERO SLIDER STATE & DATA ---
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1692719058797-2954b100c8fe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Your Gateway To The World.",
      subtitle: "Ideal for explorers seeking seamless booking and expert travel support every step of the way."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1628699543232-dc241b48a4b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Into The Wild",
      subtitle: "Experience nature like never before with our premium safari and wildlife packages."
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discover Hidden Gems",
      subtitle: "From the peaks of Himachal to the valleys of Kashmir, we craft journeys that tell your story."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581747365444-7d31a94c0237?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Serenity & Peace",
      subtitle: "Relax and rejuvenate in the most beautiful and calm destinations across the globe."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);


  // ----------------- ANIMATIONS -----------------
  useEffect(() => {
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 50,
        opacity: 0.9,
      });
    }
  }, []);

  // ----------------- DATA -----------------
  const destinations = [
    { name: 'Shimla', image: 'https://i.pinimg.com/1200x/0f/a9/48/0fa948b0e663115f7a42c2c0ae1896a1.jpg', path: '/destinations/shimla' },
    { name: 'Manali', image: 'https://i.pinimg.com/736x/49/7e/49/497e495ee05c0ea5d5de82e7c4e3f653.jpg', path: '/destinations/manali' },
    { name: 'Triund', image: 'https://i.pinimg.com/736x/f6/7a/3e/f67a3e0a96ba728d80001bf6bd06ca03.jpg', path: '/destinations/triund' },
    { name: 'Yulla Kanda', image: 'https://i.pinimg.com/1200x/b2/ea/99/b2ea99c22fe47b745fa1554e9454f7b7.jpg', path: '/destinations/kinnaur' },
    { name: 'Spiti', image: 'https://i.pinimg.com/1200x/43/b0/49/43b049fe3071e512697a9160ff648da3.jpg', path: '/destinations/spiti' },
    { name: 'Leh Ladakh', image: 'https://i.pinimg.com/736x/36/ca/44/36ca44f20840b68c6ee038a57cd41920.jpg', path: '/destinations/leh' },
  ];
  const experiences = [
    { title: 'Adventure Travel', description: 'Thrilling expeditions for the bold explorer.', image: 'https://i.pinimg.com/736x/b9/17/fd/b917fdc63744ad30426969f6d5402ce8.jpg', icon: TrendingUp, path: '/experiences/adventure' },
    { title: 'Luxury Escapes', description: 'Indulge in world-class comfort and elegance.', image: 'https://i.pinimg.com/736x/14/1d/f7/141df716ab8e751b9d7b9015cf72211c.jpg', icon: Award, path: '/experiences/luxury' },
    { title: 'Cultural Tours', description: 'Immerse yourself in authentic traditions.', image: 'https://i.pinimg.com/736x/74/52/3f/74523f7398f02a94705532f680c989a5.jpg', icon: Globe2, path: '/experiences/cultural' },
    { title: 'Wellness Retreats', description: 'Rejuvenate your mind, body, and soul.', image: 'https://i.pinimg.com/736x/6e/11/6c/6e116c68748c2a1d1adcdaec43381301.jpg', icon: Heart, path: '/experiences/wellness' },
  ];
  const packages = [
    { title: 'Kerala', image: 'https://i.pinimg.com/736x/8f/07/42/8f07429dd03950cc8728bc0d44bfa089.jpg', location: 'Kerala, India', duration: '03 Days / 02 Nights', price: '$199' },
    { title: 'Manali', image: 'https://i.pinimg.com/736x/8c/14/3e/8c143e84594eafe45e5db7ce2ce503a3.jpg', location: 'Himachal, India', duration: '04 Days / 03 Nights', price: '$249' },
    { title: 'Goa Beaches', image: 'https://i.pinimg.com/1200x/7c/36/7f/7c367f3b73b2b93604219530631e271b.jpg', location: 'Goa, India', duration: '05 Days / 04 Nights', price: '$299' },
    { title: 'Rajasthan', image: 'https://i.pinimg.com/1200x/9e/35/e9/9e35e983fe70f4c3a1e5dbe22172a4da.jpg', location: 'Jaipur, India', duration: '03 Days / 02 Nights', price: '$180' },
    { title: 'Gangtok', image: 'https://i.pinimg.com/736x/7c/ec/b4/7cecb4b6d5885929dc127a4700595a21.jpg', location: 'Sikkim, India', duration: '03 Days / 02 Nights', price: '$180' },
    { title: 'Varanasi', image: 'https://i.pinimg.com/736x/4a/44/4f/4a444fa9323972cfee1e9681f82dc95f.jpg', location: 'Uttar Pradesh, India', duration: '03 Days / 02 Nights', price: '$180' },
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
      <Navbar />

      {/* HERO SECTION - FIXED */}
      <section className="relative w-full h-[50vh] md:h-screen min-h-[400px] flex flex-col bg-slate-900 overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out
                ${index === currentHeroIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4 md:px-0">
          <div key={currentHeroIndex} className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl mb-3 md:mb-6 leading-tight">
              {heroSlides[currentHeroIndex].title}
            </h1>
            <p className="text-sm md:text-2xl text-white/90 font-medium max-w-xl mx-auto mb-6 md:mb-10 drop-shadow-md leading-relaxed px-2">
              {heroSlides[currentHeroIndex].subtitle}
            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-center items-center">
              <Link to="/destinations">
                <button className="px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-1">
                  <Plane className="w-4 h-4 md:w-5 md:h-5" /> Explore
                </button>
              </Link>
              <Link to="/booking/customize">
                <button className="px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold bg-white text-slate-900 hover:bg-gray-100 shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-1">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" /> Plan Trip
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-1.5 md:gap-2">
            {heroSlides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentHeroIndex(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 
                ${index === currentHeroIndex ? 'bg-white w-6 md:w-8' : 'bg-white/40 w-1.5 md:w-2 hover:bg-white/60'}`}
            />
            ))}
        </div>
      </section>

      {/* POPULAR PACKAGES - NEW "FRAME STYLE" CARD */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#EEF5FF]">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 md:mb-16">
              <Badge className="bg-blue-50 text-blue-700 border-0 mb-4 px-4 py-2">Curated Packages</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900">Handpicked Travel Packages</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose from our best-selling itineraries crafted by travel experts.</p>
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
                  {/* --- NEW CARD DESIGN START --- */}
                  <div className="bg-white rounded-[30px] p-3 shadow-lg border border-slate-100 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                    
                    {/* Image Container with Rounding (Inside the frame) */}
                    <div className="relative h-60 w-full rounded-[20px] overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Hot Sale Badge */}
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        Hot Sale!
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-5 px-2 pb-2 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3">{pkg.title}</h3>
                      
                      <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-6">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{pkg.location}</span>
                        <span className="text-gray-300">|</span>
                        <span>{pkg.duration}</span>
                      </div>

                      <div className="flex items-end justify-between mt-auto mb-5">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-blue-200 shadow-lg flex items-center gap-1 transition-all active:scale-95">
                          Book Now <span className="text-lg leading-none -mt-1 ml-1">↗</span>
                        </button>
                        <div className="text-right leading-none">
                          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Per Person</p>
                          <p className="text-2xl font-extrabold text-slate-900">{pkg.price}</p>
                        </div>
                      </div>

                      <div className="w-full h-px bg-gray-100 mb-3"></div>

                      {/* <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-bold uppercase tracking-wide cursor-pointer hover:text-blue-600">
                          <Trophy className="w-3.5 h-3.5" /> Experience <Info className="w-3 h-3 text-gray-300" />
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-bold uppercase tracking-wide cursor-pointer hover:text-blue-600">
                          <Plus className="w-3.5 h-3.5" /> Inclusion <Info className="w-3 h-3 text-gray-300" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* --- NEW CARD DESIGN END --- */}
                </ScrollReveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TOP DESTINATIONS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 md:mb-16">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4 px-4 py-2">Popular Destinations</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Explore Dream Destinations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">From tropical paradises to cultural wonders, discover places that will take your breath away.</p>
            </div>
          </ScrollReveal>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-16"
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={dest.name}>
                <ScrollReveal direction="up" delay={index * 0.1}>
                  <Link to={dest.path}>
                    <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-[350px] w-full overflow-hidden">
                        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 w-full px-6 pb-8 text-center">
                          <h3 className="text-3xl font-bold text-white">{dest.name}</h3>
                          <div className="flex justify-center mt-4">
                            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm shadow-xl hover:bg-gray-200 transition">View Details →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              </SwiperSlide>
            ))}
          </Swiper>
          <ScrollReveal direction="up" delay={0.6}>
            <div className="text-center mt-8">
              <Link to="/destination">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  View All Destinations <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 mb-4 px-4 py-2">Why Choose Himachal Destination</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Travel With Confidence</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">We combine expertise, technology, and passion to deliver unforgettable journeys.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Award, title: 'Expertly Curated', text: 'Each itinerary is designed by experienced travel experts.' },
              { Icon: Users, title: '15,000+ Travelers', text: 'Thousands of happy clients from across the globe.' },
              { Icon: Globe2, title: 'Global Network', text: 'Premium partners for hotels, transport, and activities.' },
              { Icon: Phone, title: '24/7 Support', text: 'We&apos;re available round the clock during your trip.' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} direction="up" delay={index * 0.1}>
                <GlassCard className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                      <item.Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.text}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

       {/* EXPERIENCES SECTION */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-4 px-4 py-2">Travel Experiences</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Choose Your Adventure</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">Whether you seek thrills, luxury, culture, or wellness, we have the perfect experience for you.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.title} direction="up" delay={index * 0.1}>
                <Link to={exp.path}>
                  <GlassCard className="p-0 overflow-hidden group h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-white/70 mb-4 text-sm">{exp.description}</p>
                      <Button variant="ghost" className="text-white hover:bg-white/10 p-0 h-auto group/btn">
                        Explore <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-md">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What Our Travelers Say</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Hear from our happy travelers who trusted us with their dream vacations.</p>
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
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-1 shadow">{t.trip}</Badge>
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
          <img src="/assets/destination-thailand-beach.jpg" alt="Background" className="w-full h-full object-cover" />
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