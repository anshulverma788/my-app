import { useEffect, useRef, useState } from 'react'; // useState add kiya
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Yeh import zaroor add karein
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

  // --- HERO SLIDER STATE ---
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    "https://cdn.pixabay.com/photo/2017/03/16/18/03/landscape-2149844_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg"
  ];

  // Hero Slider Interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ----------------- ANIMATIONS -----------------
  useEffect(() => {
    // Hero parallax (Modified to be subtle)
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 100, // Reduced movement for slider compatibility
        opacity: 0.8,
      });
    }

    // Stats counter
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll('.stat-number');
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0', 10);

        gsap.to(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
          },
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          onUpdate: function () {
            const value = Math.ceil(this.targets()[0].innerText);
            stat.textContent = value.toLocaleString();
          },
        });
      });
    }
  }, []);

  // ----------------- DATA -----------------
  const destinations = [
    {
      name: 'Shimla',
      image: 'https://i.pinimg.com/1200x/0f/a9/48/0fa948b0e663115f7a42c2c0ae1896a1.jpg',
      path: '/destinations/shimla',
    },
    {
      name: 'Manali',
      image: 'https://i.pinimg.com/736x/49/7e/49/497e495ee05c0ea5d5de82e7c4e3f653.jpg',
      path: '/destinations/manali',
    },
    {
      name: 'Triund',
      image: 'https://i.pinimg.com/736x/f6/7a/3e/f67a3e0a96ba728d80001bf6bd06ca03.jpg',
      path: '/destinations/triund',
    },
    {
      name: 'Yulla Kanda',
      image: 'https://i.pinimg.com/1200x/b2/ea/99/b2ea99c22fe47b745fa1554e9454f7b7.jpg',
      path: '/destinations/kinnaur',
    },
    {
      name: 'Spiti',
      image: 'https://i.pinimg.com/1200x/43/b0/49/43b049fe3071e512697a9160ff648da3.jpg',
      path: '/destinations/spiti',
    },
    {
      name: 'Leh Ladakh',
      image: 'https://i.pinimg.com/736x/36/ca/44/36ca44f20840b68c6ee038a57cd41920.jpg',
      path: '/destinations/leh',
    },
  ];

  const experiences = [
    {
      title: 'Adventure Travel',
      description: 'Thrilling expeditions for the bold explorer.',
      image: 'https://i.pinimg.com/736x/b9/17/fd/b917fdc63744ad30426969f6d5402ce8.jpg',
      icon: TrendingUp,
      path: '/experiences/adventure',
    },
    {
      title: 'Luxury Escapes',
      description: 'Indulge in world-class comfort and elegance.',
      image: 'https://i.pinimg.com/736x/14/1d/f7/141df716ab8e751b9d7b9015cf72211c.jpg',
      icon: Award,
      path: '/experiences/luxury',
    },
    {
      title: 'Cultural Tours',
      description: 'Immerse yourself in authentic traditions.',
      image: 'https://i.pinimg.com/736x/74/52/3f/74523f7398f02a94705532f680c989a5.jpg',
      icon: Globe2,
      path: '/experiences/cultural',
    },
    {
      title: 'Wellness Retreats',
      description: 'Rejuvenate your mind, body, and soul.',
      image: 'https://i.pinimg.com/736x/6e/11/6c/6e116c68748c2a1d1adcdaec43381301.jpg',
      icon: Heart,
      path: '/experiences/wellness',
    },
  ];

  const packages = [
    {
      title: 'Kerala Backwaters',
      image: 'https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg',
      location: 'Kerala, India',
      duration: '03 Days / 02 Nights',
      price: '$199'
    },
    {
      title: 'Manali Mountains',
      image: 'https://i.pinimg.com/736x/49/7e/49/497e495ee05c0ea5d5de82e7c4e3f653.jpg',
      location: 'Himachal, India',
      duration: '04 Days / 03 Nights',
      price: '$249'
    },
    {
      title: 'Goa Beaches',
      image: 'https://i.pinimg.com/736x/b6/a1/f2/b6a1f214ed11f46384380e4a0e121464.jpg',
      location: 'Goa, India',
      duration: '05 Days / 04 Nights',
      price: '$299'
    },
    {
      title: 'Rajasthan Royal',
      image: 'https://i.pinimg.com/1200x/0f/a9/48/0fa948b0e663115f7a42c2c0ae1896a1.jpg',
      location: 'Jaipur, India',
      duration: '03 Days / 02 Nights',
      price: '$180'
    },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      location: "Kerala, India",
      image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg",
      rating: 5,
      text: "The Kerala backwaters experience was absolutely magical! Everything was arranged perfectly.",
      trip: "Kerala 3D / 2N"
    },
    {
      name: "Riya Verma",
      location: "Manali, India",
      image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg",
      rating: 4,
      text: "Beautiful mountains, cozy stay, smooth travel experience — totally worth it!",
      trip: "Manali Adventure Trip"
    },
    {
      name: "Karan Patel",
      location: "Goa, India",
      image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg",
      rating: 5,
      text: "Stunning beaches and perfect arrangements — best trip ever!",
      trip: "Goa Beach Holiday"
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Honeymoon Destinations for 2025',
      image: 'https://i.pinimg.com/736x/b6/a1/f2/b6a1f214ed11f46384380e4a0e121464.jpg',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
    },
    {
      id: 2,
      title: 'How to Plan a Perfect Family Vacation',
      image: 'https://i.pinimg.com/736x/eb/b3/e5/ebb3e5ac08891bc926f318307777a279.jpg',
      date: 'Dec 22, 2024',
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'Ultimate Guide to Luxury Travel on a Budget',
      image: 'https://i.pinimg.com/1200x/87/a9/c8/87a9c8cc76e59d5e615704c1f47be02a.jpg',
      date: 'Nov 5, 2024',
      readTime: '7 min read',
    },
  ];

  // ----------------- JSX -----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* HERO SECTION – UPDATED WITH SLIDER & RESPONSIVE HEIGHT */}

      {/* HERO SECTION – REDUCED HEIGHT (NOT FULL SCREEN) */}
      {/* Change: 'h-screen' hata kar 'h-[85vh] md:h-[75vh]' kar diya */}
      {/* min-h-[600px] ensure karega ki content kate nahi agar screen bahut choti ho */}
      <section className="relative w-full h-[85vh] md:h-[75vh] min-h-[600px] overflow-hidden bg-slate-900">

        {/* 1. BACKGROUND SLIDER */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((imgUrl, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform
                ${index === currentHeroIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
            >
              <img
                src={imgUrl}
                alt="Travel Background"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 md:opacity-80"></div>
              {/* Left Gradient for Desktop Text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent hidden md:block"></div>
            </div>
          ))}
        </div>

        {/* 2. MAIN CONTENT */}
        {/* 'pb-16' mobile par thoda space dega bottom se */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-16 md:justify-center md:pb-0">

          <div className="max-w-4xl">
            {/* Tagline */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[2px] w-12 bg-yellow-400"></div>
                <span className="text-yellow-400 uppercase tracking-widest text-sm font-bold">
                  Premium Travel Agency
                </span>
              </div>
            </ScrollReveal>

            {/* Big Heading */}
            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6">
                DISCOVER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  THE UNSEEN
                </span>
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-gray-300 text-lg md:text-2xl max-w-xl mb-8 leading-relaxed">
                From the peaks of Himachal to the beaches of Kerala.
                We craft journeys that tell your story.
              </p>
            </ScrollReveal>

            {/* Buttons */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/destinations">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center gap-2">
                    Start Exploring
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link to="/booking/customize">
                  <button className="w-full sm:w-auto px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Plan My Trip
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 3. FLOATING STATS CARD (Only Desktop) */}
        {/* Position adjusted for smaller height */}
        <div className="hidden md:block absolute bottom-8 right-8 z-20">
          <ScrollReveal direction="left" delay={1}>
            <GlassCard className="p-5 min-w-[240px] border-l-4 border-l-yellow-400 bg-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-500"></div>
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-400"></div>
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-300"></div>
                </div>
                <div className="text-white font-bold leading-tight">15k+ <br /><span className="text-[10px] font-normal text-gray-300 uppercase">Travelers</span></div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

      </section>

      {/* POPULAR PACKAGES - NOW WITH SLIDER */}
      <section className="py-24 relative overflow-hidden bg-[#EEF5FF]">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="bg-blue-50 text-blue-700 border-0 mb-4 px-4 py-2">
                Curated Packages
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Handpicked Travel Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose from our best-selling itineraries crafted by travel experts.
              </p>
            </div>
          </ScrollReveal>

          {/* SWIPER FOR PACKAGES ADDED HERE */}
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
            className="pb-16"
          >
            {packages.map((pkg, index) => (
              <SwiperSlide key={index}>
                <ScrollReveal direction="up" delay={index * 0.1}>
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden w-full h-full flex flex-col">

                    {/* Top Image */}
                    <div className="h-56 w-full overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 pb-3 flex-1 flex flex-col">

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {pkg.title}
                      </h3>

                      {/* Location + Duration Row */}
                      <div className="flex items-center text-gray-600 text-sm gap-2 mb-5">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>{pkg.location}</span>
                        <span className="mx-2">↔</span>
                        <span>{pkg.duration}</span>
                      </div>

                      {/* Book Now + Price Row */}
                      <div className="flex items-center justify-between mb-4 mt-auto">
                        {/* Button */}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all">
                          Book Now ↗
                        </button>
                        {/* Price */}
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Per Person</p>
                          <p className="text-3xl font-bold text-gray-900">{pkg.price}</p>
                        </div>
                      </div>

                      {/* Divider */}
                      <hr className="border-gray-200 mb-4" />

                      {/* Experience + Inclusion */}
                      <div className="flex items-center justify-between text-gray-700 text-sm pb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 flex items-center justify-center text-lg">🎒</span>
                          Experience
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 flex items-center justify-center text-lg">➕</span>
                          Inclusion
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4 px-4 py-2">
                Popular Destinations
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Explore Dream Destinations
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From tropical paradises to cultural wonders, discover places that will take your
                breath away.
              </p>
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
                      {/* Image Box */}
                      <div className="relative h-[350px] w-full overflow-hidden">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Top Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        {/* Bottom Info */}
                        <div className="absolute bottom-0 w-full px-6 pb-8 text-center">
                          <h3 className="text-3xl font-bold text-white">{dest.name}</h3>
                          <p className="text-white/70 text-sm mb-4">{ } </p>

                          {/* Center Button */}
                          <div className="flex justify-center">
                            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm shadow-xl hover:bg-gray-200 transition">
                              View Details →
                            </button>
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
            <div className="text-center ">
              <Link to="/destination">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View All Destinations
                  <ArrowRight className="w-5 h-5 ml-2" />
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
              <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 mb-4 px-4 py-2">
                Why Choose Himachal Destination
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Travel With Confidence
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                We combine expertise, technology, and passion to deliver unforgettable journeys.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: Award,
                title: 'Expertly Curated',
                text: 'Each itinerary is designed by experienced travel experts.',
              },
              {
                Icon: Users,
                title: '15,000+ Travelers',
                text: 'Thousands of happy clients from across the globe.',
              },
              {
                Icon: Globe2,
                title: 'Global Network',
                text: 'Premium partners for hotels, transport, and activities.',
              },
              {
                Icon: Phone,
                title: '24/7 Support',
                text: 'We&apos;re available round the clock during your trip.',
              },
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
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-4 px-4 py-2">
                Travel Experiences
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Choose Your Adventure
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Whether you seek thrills, luxury, culture, or wellness, we have the perfect
                experience for you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.title} direction="up" delay={index * 0.1}>
                <Link to={exp.path}>
                  <GlassCard className="p-0 overflow-hidden group h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
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
                      <Button
                        variant="ghost"
                        className="text-white hover:bg-white/10 p-0 h-auto group/btn"
                      >
                        Explore
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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

          {/* Heading */}
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-md">
              Client Testimonials
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Travelers Say
            </h2>

            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Hear from our happy travelers who trusted us with their dream vacations.
            </p>
          </div>

          {/* SLIDER */}
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
                <Card className="
                  p-8 h-full rounded-3xl shadow-xl border border-white/50 
                  bg-white/40 backdrop-blur-xl 
                  transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl relative
                ">

                  {/* Glow Effects */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-purple-500/20 rounded-full blur-3xl"></div>

                  {/* Profile */}
                  <div className="flex items-center mb-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg mr-4"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{t.text}"
                  </p>

                  {/* Trip Badge */}
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-1 shadow">
                    {t.trip}
                  </Badge>
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
              <Badge className="bg-purple-50 text-purple-700 border-0 mb-4 px-4 py-2">
                Travel Stories & Tips
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                From the Himachal Destination Travel Blog
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get inspiration, tips, and insider secrets to plan your next journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} direction="up" delay={index * 0.1}>
                <Link to={`/blog/${post.id}`}>
                  <Card className="overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-xs text-gray-500 mb-2">
                        {post.date} • {post.readTime}
                      </p>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        {post.title}
                      </h3>
                      <Button
                        variant="ghost"
                        className="mt-auto px-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
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
          <img
            src="/assets/destination-thailand-beach.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Start Your Adventure?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Let our travel experts create a personalized itinerary just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking/customize">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Consultation
                  </Button>
                </Link>
                <a href="tel:+1234567890">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
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