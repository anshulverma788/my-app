import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  MapPin,
  Star,
  Users,
  Award,
  Globe2,
  TrendingUp,
  Phone,
  CheckCircle2,
  Play,
  Minus,
  Plus,
  ArrowRight,
  ShieldCheck,
  Wallet,
  Plane
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// CSS Imports for Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// --- Animation Wrapper ---
const FadeInUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  // --- Data for Journey Slider (3rd Photo) ---
  const journeyData = [
    { year: "1986", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500", title: "The Beginning", desc: "Started with railway excursions for small groups." },
    { year: "1996", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500", title: "Going Global", desc: "Expanded services to international destinations." },
    { year: "2006", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500", title: "Digital Era", desc: "Launched first online booking platform." },
    { year: "2016", img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=500", title: "Tech Integration", desc: "Introduced mobile app for seamless travel." },
    { year: "2022", img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500", title: "Post-Pandemic", desc: "Revamped safety protocols & private tours." },
    { year: "2025", img: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500", title: "Future Ready", desc: "AI-driven personalized itineraries." },
  ];

  // --- Data for Testimonials Slider (5th Photo) ---
  const testimonials = [
    {
      name: "James Bonde",
      role: "Himachal Destination Traveler",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
      rating: 5,
      title: "Average Experience",
      desc: "The tour was well-organized, and we enjoyed every bit of it. However, I wish we had more free time to explore on our own. Overall, a great experience!"
    },
    {
      name: "Michael D Linda",
      role: "Himachal Destination Traveler",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200",
      rating: 4.5,
      title: "Great Visitors Venue!",
      desc: "Thank you so much for your work on our honeymoon. We really did have such a great time and it was everything we were hoping!"
    },
    {
      name: "Amber Lashley",
      role: "Himachal Destination Traveler",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
      rating: 5,
      title: "Fantastic Service!",
      desc: "We have returned from Greece and want to let you know how terrific the trip was! Everything was great. We highly recommend them. Thank you so much!"
    },
    {
      name: "Sophia Williams",
      role: "Himachal Destination Traveler",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      rating: 5,
      title: "Unforgettable!",
      desc: "From booking to the actual trip, everything was seamless. The local guide was very knowledgeable. Will definitely book again!"
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden">
      <Navbar />
      <div className="relative w-full h-[350px] lg:h-[500px] overflow-hidden mb-10">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"

          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/30"></div>
        </motion.div>

        {/* Banner Text Content */}
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center z-10 pt-16">
          <FadeInUp delay={0.3}>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-xl">
              Our Journey & Vision
            </h1>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full mb-4"></div>
            <p className="text-slate-200 text-lg lg:text-xl max-w-xl font-medium drop-shadow-md">
              Discover the story, the people, and the passion behind unforgettable travel experiences.
            </p>
          </FadeInUp>
        </div>
      </div>
      {/* 1. HERO / INTRO SECTION (Photo 1) */}
      <section className="py-20 lg:py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <FadeInUp>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Why We’re <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Best Agency</span>
            </h2>
            <h4 className="text-xl font-bold text-slate-700 mb-4">
              Welcome to Himachal Destination Travel Agency – Your Gateway to Unforgettable Journeys!
            </h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Himachal Destination Travel Agency is a trusted name in the travel industry, offering seamless travel planning, personalized itineraries, and unforgettable adventures. With years of experience and a network of global partners, we ensure a hassle-free and memorable journey for every traveler.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We believe that travel is more than just moving from one place to another—it’s about discovering new cultures, creating unforgettable experiences, and making lifelong memories.
            </p>

            {/* Signature Area */}
            <div className="flex items-center gap-4 mt-8">
              <div className="font-handwriting text-4xl text-slate-400">Kamlesh</div>
              <div className="border-l-2 border-slate-200 pl-4">
                <h6 className="font-bold text-slate-900">Kamlesh Verma </h6>
                <span className="text-sm text-blue-500">Founder at Himachal Destination</span>
              </div>
            </div>
          </FadeInUp>

          {/* Right Image Collage */}
          <FadeInUp delay={0.2}>
            <div className="relative h-[600px] w-full hidden lg:block">
              {/* Image 1: Snow */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600"
                className="absolute top-10 left-0 w-64 h-80 object-cover rounded-3xl shadow-2xl z-10 border-4 border-white"
                alt="Snow"
              />
              {/* Image 2: Travel Girl */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600"
                className="absolute top-0 right-10 w-72 h-64 object-cover rounded-3xl shadow-2xl z-20 border-4 border-white"
                alt="Travel"
              />
              {/* Image 3: Kayak/Beach */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
                className="absolute bottom-10 right-0 w-80 h-72 object-cover rounded-3xl shadow-2xl z-30 border-4 border-white"
                alt="Beach"
              />
              {/* Decorative Dot */}
              <div className="absolute top-[50%] left-[45%] w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 2. SERVICES STRIP (Photo 2) */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">We’re Providing Best Service Ever!</h2>
              <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <FadeInUp delay={0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center border border-slate-100 h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6 text-yellow-600 text-3xl group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Guidance</h3>
                <p className="text-slate-500">Travel agencies have experienced professionals guidance.</p>
              </div>
            </FadeInUp>

            {/* Card 2 */}
            <FadeInUp delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center border border-slate-100 h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 text-blue-600 text-3xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="font-bold">%</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Deals & Discounts</h3>
                <p className="text-slate-500">Agencies have special discounts on flights, hotels, & packages.</p>
              </div>
            </FadeInUp>

            {/* Card 3 */}
            <FadeInUp delay={0.3}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center border border-slate-100 h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 text-orange-600 text-3xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Wallet size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Saves Money</h3>
                <p className="text-slate-500">Avoids hidden fees & tourist traps, Multi-destination & budget-friendly options.</p>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.4}>
            <div className="mt-12 flex justify-center">
              <div className="bg-blue-600 text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 shadow-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="font-medium">Flat 30% Discounts All Packages</span>
                <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                  Check Offer <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 3. JOURNEY / TIMELINE SLIDER (Photo 3) */}
      <section className="py-24 bg-white overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Behind The Journey</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">With years of experience in the travel industry, we specialize in crafting personalized journeys.</p>
            </div>
          </FadeInUp>

          {/* --- SLIDER --- */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-16 pt-10"
          >
            {/* The Blue Line behind slides */}
            <div className="absolute top-[170px] left-0 w-full h-[2px] bg-blue-100 z-0 hidden lg:block"></div>

            {journeyData.map((item, index) => (
              <SwiperSlide key={index} className="relative z-10">
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  {/* Round Image */}
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 relative group-hover:scale-110 transition-transform duration-500">
                    <img src={item.img} alt={item.year} className="w-full h-full object-cover" />
                  </div>

                  {/* Year */}
                  <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>

                  {/* Dot on Line */}
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mb-4"></div>

                  {/* Content */}
                  <h4 className="font-bold text-lg text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Summary Box (Optional based on design) */}
          <FadeInUp delay={0.2}>
            <div className="max-w-4xl mx-auto text-center mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-xl font-bold mb-2">1986 – The Birth of Travel Agencies</h4>
              <p className="text-slate-600 text-sm">The first-ever travel agency was founded by <span className="font-bold text-slate-900">Thomas Cook</span> in England. He organized group trips, starting with a railway excursion for 500 people.</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Photo 4) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Travel with Us?</h2>
              <p className="text-slate-600">We specialize in crafting personalized journeys that suit every traveler’s dream.</p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Green */}
            <FadeInUp delay={0.1}>
              <div className="bg-[#E9F8C6] p-8 rounded-3xl h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div className="text-slate-900 mb-6"><Plane size={40} /></div>
                <h4 className="text-xl font-bold text-slate-900">Expertly Curated Tours.</h4>
              </div>
            </FadeInUp>

            {/* Card 2: Gray */}
            <FadeInUp delay={0.2}>
              <div className="bg-[#F2F2F2] p-8 rounded-3xl h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div className="text-slate-900 mb-6"><TrendingUp size={40} /></div>
                <h4 className="text-xl font-bold text-slate-900">Affordable & Flexible Packages.</h4>
              </div>
            </FadeInUp>

            {/* Card 3: Purple */}
            <FadeInUp delay={0.3}>
              <div className="bg-[#EBEBFF] p-8 rounded-3xl h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div className="text-slate-900 mb-6"><Phone size={40} /></div>
                <h4 className="text-xl font-bold text-slate-900">24/7 Customer Support.</h4>
              </div>
            </FadeInUp>

            {/* Card 4: Teal */}
            <FadeInUp delay={0.4}>
              <div className="bg-[#C6F0D3] p-8 rounded-3xl h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="text-slate-900 mb-6"><ShieldCheck size={40} /></div>
                <h4 className="text-xl font-bold text-slate-900 z-10 relative">Certified & Experienced Guides.</h4>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SLIDER (Photo 5) */}
      <section className="py-24 bg-[#F8F9FE] relative">
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Hear It from Travelers</h2>
              <p className="text-slate-600">We go beyond just booking trips—we create unforgettable travel experiences.</p>
            </div>
          </FadeInUp>

          {/* --- TESTIMONIAL SWIPER --- */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full relative">

                  {/* User Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm cursor-pointer">
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

                  {/* Rating Stars (Green/Teal as per photo) */}
                  <div className="flex gap-1 mb-4 text-[#00BFA6]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} strokeWidth={0} className={i < Math.floor(item.rating) ? "text-[#00BFA6]" : "text-gray-300"} />
                    ))}
                    {/* Add SVG stars or use Lucide with fill color logic strictly matching visual */}
                    <div className="flex absolute top-[100px] left-8 gap-1">
                      <svg width="90" height="18" viewBox="0 0 90 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#10B981" />
                        <path d="M27 0L29.0206 6.21885H35.5595L30.2694 10.0623L32.2901 16.2812L27 12.4377L21.7099 16.2812L23.7306 10.0623L18.4405 6.21885H24.9794L27 0Z" fill="#10B981" />
                        <path d="M45 0L47.0206 6.21885H53.5595L48.2694 10.0623L50.2901 16.2812L45 12.4377L39.7099 16.2812L41.7306 10.0623L36.4405 6.21885H42.9794L45 0Z" fill="#10B981" />
                        <path d="M63 0L65.0206 6.21885H71.5595L66.2694 10.0623L68.2901 16.2812L63 12.4377L57.7099 16.2812L59.7306 10.0623L54.4405 6.21885H60.9794L63 0Z" fill="#10B981" />
                        <path d="M81 0L83.0206 6.21885H89.5595L84.2694 10.0623L86.2901 16.2812L81 12.4377L75.7099 16.2812L77.7306 10.0623L72.4405 6.21885H78.9794L81 0Z" fill="#10B981" fillOpacity={item.rating < 5 ? 0.5 : 1} />
                      </svg>
                    </div>
                  </div>

                  {/* Spacer for custom stars above */}
                  <div className="h-6"></div>

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

      {/* 6. FAQ (Photo 6) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Questions & Answer</h2>
              <p className="text-slate-600">We’re committed to offering more than just products—we provide exceptional experiences.</p>
            </div>
          </FadeInUp>

          <div className="space-y-4">
            <FaqItem
              question="What Services Does Your Travel Agency Provide?"
              answer="A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience. As like - Hotel booking, Flight Booking, Visa & Customized Travel Package etc."
              isOpenDefault={true}
            />
            <FaqItem
              question="Do You Offer Customized Travel Packages?"
              answer="Yes, we specialize in tailor-made packages suited to your budget and interests."
            />
            <FaqItem
              question="Can I Book Flights, Hotels, and Tours Separately?"
              answer="Absolutely. You can book individual services or a complete package."
            />
            <FaqItem
              question="Do You Provide Visa Assistance?"
              answer="Yes, we have a dedicated team to help you with visa processing for most countries."
            />
            <FaqItem
              question="What Payment Methods Do You Accept?"
              answer="We accept Credit Cards, PayPal, Bank Transfers, and Google Pay."
            />
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

// --- HELPER COMPONENT FOR FAQ ---
const FaqItem = ({ question, answer, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-blue-500 bg-slate-50' : 'border-slate-200 bg-gray-50'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left"
      >
        <span className={`font-bold text-lg ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>{question}</span>
        {isOpen ? <span className="text-blue-600 text-xs">▲</span> : <span className="text-slate-400 text-xs">▼</span>}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-200/50 pt-4 mt-0">
          {answer}
        </div>
      </motion.div>
    </div>
  );

};