import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Users,
  Wallet,
  Clock,
  CloudSun,
  Snowflake,
  Sun,
  Umbrella,
  Star,
  Play
} from 'lucide-react';

// --- NEW IMPORTS FOR SLIDER (SWIPER) ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// NOTE: Ensure these components exist in your project path
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// Agar aapke paas yeh component nahi hai, toh ise remove karke simple <div> use karein
import ScrollReveal from '@/components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

// --- DATA: Hero Slider Images & Text ---
const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1920&auto=format&fit=crop',
    title: 'Discover the Mystical Manali',
    subtitle: 'Snow-capped peaks and lush valleys await you.',
    location: 'Manali, Himachal',
    highlight: 'Adventure Hub'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1504732099162-d8c9d5ba3eb0?q=80&w=1920&auto=format&fit=crop',
    title: 'Experience the Raw Spiti',
    subtitle: 'A road trip to the middle land between India and Tibet.',
    location: 'Spiti Valley, Himachal',
    highlight: 'High Altitude'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1562649846-ab413ca01712?q=80&w=1920&auto=format&fit=crop',
    title: 'Colonial Charm of Shimla',
    subtitle: 'Walk through the heritage of the Queen of Hills.',
    location: 'Shimla, Himachal',
    highlight: 'Capital City'
  }
];

// --- DATA: Best Time to Visit ---
const seasons = [
  {
    season: 'Summer (March – June)',
    weather: '15°C – 30°C',
    icon: <Sun className="w-6 h-6 text-orange-500 mb-2" />,
    highlights: ['Pleasant weather.', 'Best for sightseeing & trekking.', 'Rohtang Pass opens (May/June).'],
    perfectFor: 'Families, Honeymooners, First-timers',
    image: 'https://i.pinimg.com/1200x/6e/57/b6/6e57b61cb63766789a6776481b73cc22.jpg'
  },
  {
    season: 'Monsoon (July – Sep)',
    weather: '10°C – 25°C',
    icon: <Umbrella className="w-6 h-6 text-blue-500 mb-2" />,
    highlights: ['Lush green valleys.', 'Apple picking season begins.', 'Budget-friendly deals.'],
    perfectFor: 'Nature lovers, Budget travelers, Photographers',
    image: 'https://i.pinimg.com/736x/59/b0/75/59b075e3c8d76f22b2998a85ec282ae4.jpg'
  },
  {
    season: 'Autumn (Oct – Nov)',
    weather: '10°C – 20°C',
    icon: <CloudSun className="w-6 h-6 text-yellow-500 mb-2" />,
    highlights: ['Clear blue skies.', 'Best views of Himalayan peaks.', 'Festivals like Dussehra (Kullu).'],
    perfectFor: 'Trekkers, Culture seekers, Peace lovers',
    image: 'https://i.pinimg.com/1200x/6b/5b/b4/6b5bb48150f3bb534c98d2e5d966ecde.jpg'
  },
  {
    season: 'Winter (Dec – Feb)',
    weather: '-5°C – 10°C',
    icon: <Snowflake className="w-6 h-6 text-cyan-500 mb-2" />,
    highlights: ['Snowfall in Shimla/Manali.', 'Skiing & Snowboarding.', 'Cozy bonfires & hot springs.'],
    perfectFor: 'Snow lovers, Adventure seekers, Couples',
    image: 'https://i.pinimg.com/1200x/53/53/67/5353678f59c243d170b80d73596ab131.jpg'
  }
];

// --- DATA: Popular Tourist Places ---
const destinations = [
  { id: 1, name: 'Manali', image: 'https://i.pinimg.com/1200x/6f/53/60/6f536053dfc57b6925ad49b5c9c3daf7.jpg', location: 'Kullu Valley', rating: 4.9, type: 'Adventure', path: '/destinations/manali' },
  { id: 2, name: 'Shimla', image: 'https://i.pinimg.com/1200x/0c/8b/a7/0c8ba7a386f38b9d32d29e74ecb0ee13.jpg', location: 'Capital City', rating: 4.8, type: 'Heritage', path: '/destinations/shimla' },
  { id: 3, name: 'Spiti Valley', image: 'https://i.pinimg.com/1200x/63/9c/49/639c4938fa4b53bd3b78b47d2b945f26.jpg', location: 'High Altitude', rating: 4.9, type: 'Roadtrip', path: '/destinations/spiti' },
  { id: 4, name: 'Kasol', image: 'https://i.pinimg.com/736x/d8/17/c5/d817c59905606bc2e4c8a751133b7ad2.jpg', location: 'Parvati Valley', rating: 4.7, type: 'Nature', path: '/destinations/kasol' },
  { id: 5, name: 'Dharamshala', image: 'https://i.pinimg.com/736x/e4/96/38/e496382883ce6d2ef1bd39ab53253049.jpg', location: 'Kangra', rating: 4.8, type: 'Spiritual', path: '/destinations/dharamshala' },
  { id: 6, name: 'Dalhousie', image: 'https://i.pinimg.com/1200x/e2/3c/cf/e23ccfdb9d359d0b89bae773aff6706b.jpg', location: 'Chamba', rating: 4.6, type: 'Relaxation', path: '/destinations/dalhousie' },
];

// --- DATA: Tours (Fixed keys for rendering) ---
const tours = [
  { 
    id: 1, 
    title: 'Magical Manali & Solang', 
    location: 'Manali', 
    duration: '05 Days / 04 Nights', // Renamed/Added to match JSX
    price: '₹7,999', 
    image: 'https://i.pinimg.com/1200x/0b/c8/84/0bc884c54dd71fb82c9604cfe000979b.jpg', 
    tag: 'Best Seller',
    path: '/package/shimla-manali' // Added path
  },
  { 
    id: 2, 
    title: 'Spiti Valley Expedition', 
    location: 'Kaza/Tabo', 
    duration: '08 Days / 07 Nights', 
    price: '₹18,500', 
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000', 
    tag: 'Adventure',
    path: '/package/spiti8day'
  },
  { 
    id: 3, 
    title: 'Shimla Weekend Retreat', 
    location: 'Shimla', 
    duration: '03 Days / 02 Nights', 
    price: '₹5,499', 
    image: 'https://i.pinimg.com/736x/2c/3f/54/2c3f545d9c913f5f64071b0383a5ecfe.jpg', 
    tag: 'Hot Sale!',
    path: '/package/shimla'
  },
];

// --- DATA: FAQ ---
const faqs = [
  { question: 'Do I need a permit to visit Rohtang Pass?', answer: 'Yes, a permit is required to visit Rohtang Pass. We handle all permit arrangements for our clients as part of the package.' },
  { question: 'Is it safe to travel to Himachal during Monsoon?', answer: 'While beautiful, monsoon can cause landslides. We recommend checking weather forecasts. We plan safe routes and backup itineraries during this season.' },
  { question: 'Can you customize a honeymoon package?', answer: 'Absolutely! We offer special honeymoon inclusions like candlelight dinners, flower decoration, and private transfers.' },
  { question: 'Do you provide pick-up from Chandigarh/Delhi?', answer: 'Yes, we provide private cab services from Delhi, Chandigarh, and Ambala railway stations/airports.' },
];

// --- COMPONENT: FAQ Item ---
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 text-lg">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      <div 
        className={`bg-gray-50 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}
      >
        <p className="leading-relaxed mt-4">{answer}</p>
      </div>
    </div>
  );
};

export default function Destination() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  
  // --- STATE: Hero Slider ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- EFFECT: Auto Slide ---
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 Seconds Interval

    return () => clearInterval(slideInterval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden text-white">
        
        {/* Background Images with Fade Transition */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center pt-20">
          
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Highlight Badge */}
            <div className="flex justify-center overflow-hidden">
               <span 
                key={`badge-${currentSlide}`}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wide uppercase text-white shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
               >
                 <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 
                 {heroSlides[currentSlide].highlight}
               </span>
            </div>

            {/* Title */}
            <h1 
                key={`title-${currentSlide}`}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tight drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-forwards"
            >
              {heroSlides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p 
                key={`sub-${currentSlide}`}
                className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-forwards"
            >
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-forwards opacity-0" style={{ animationFillMode: 'forwards' }}>
              <Link to="#tours">
                <Button className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105 border-none">
                  Explore Packages
                </Button>
              </Link>
              <Link to="#video">
                <Button variant="outline" className="h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/50 text-white text-lg font-semibold transition-all hover:scale-105">
                  <Play className="w-5 h-5 mr-2 fill-white" /> Watch Video
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 shadow-md ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Location Indicator (Desktop Only) */}
        <div className="absolute bottom-10 right-8 z-30 hidden md:flex items-center gap-2 text-white/90 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
          <MapPin className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium tracking-wider">{heroSlides[currentSlide].location}</span>
        </div>
      </section>

      {/* ================= 2. POPULAR TOURIST PLACES ================= */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gray-900">Popular Tourist Places</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
            {destinations.map((dest, index) => (
              <div 
                key={dest.id}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500
                  ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} 
                  ${index === 1 ? 'lg:row-span-2' : ''}
                `}
              >
                <Link to={dest.path} className="block w-full h-full relative">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 backdrop-blur-md text-white border-none">{dest.type}</Badge>
                  </div>

                  <div className="absolute bottom-0 p-6 w-full text-white">
                    <h3 className={`font-bold mb-1 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>{dest.name}</h3>
                    <p className="text-sm text-white/80 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {dest.location}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. BEST TIME TO VISIT ================= */}
      <section id="best-time" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
             <h2 className="text-4xl font-serif font-bold text-gray-900">Best Time to Visit</h2>
             <p className="text-gray-500 mt-2">Himachal is a year-round destination, but each season offers a unique charm.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasons.map((season, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col sm:flex-row gap-6 group">
                  <div className="w-full sm:w-1/3 h-48 sm:h-auto rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={season.image} alt={season.season} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex items-center gap-2 mb-2">
                       {season.icon}
                       <h3 className="text-xl font-bold text-gray-900">{season.season}</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 font-medium bg-gray-100 inline-block px-3 py-1 rounded-lg">
                       Avg Temp: {season.weather}
                    </p>
                    
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {season.highlights.map((point, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-medium inline-block w-full">
                      <strong>Perfect For:</strong> {season.perfectFor}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. WHY CHOOSE US ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Why Choose Us for Himachal?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">Mountain roads require expert drivers and local knowledge. We ensure your safety and comfort.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Mountain Drivers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our drivers are locals who know every curve of the Himalayan roads, ensuring a safe and smooth journey for you.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Wallet className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">No Hidden Costs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All tolls, parking fees, and driver allowances are included. The price you see is the price you pay.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">24/7 On-Trip Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stuck somewhere? Our local team is just a call away to assist you with any emergency or requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. TOURS AVAILABLE ================= */}
      <section className="py-16 md:py-14 relative overflow-hidden bg-[#EEF5FF]" id="tours">
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
            {/* FIXED: Changed packages.map to tours.map */}
            {tours.map((pkg, index) => (
              <SwiperSlide key={index}>
                <ScrollReveal direction="up" delay={index * 0.1}>
                  <div className="bg-white rounded-[30px] p-3 shadow-lg border border-slate-100 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">

                    <div className="relative h-60 w-full rounded-[20px] overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Hot Sale Badge */}
                      {pkg.tag && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-serif font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                            {pkg.tag}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-5 px-2 pb-2 flex-1 flex flex-col">
                      <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight mb-3">{pkg.title}</h3>

                      <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-6">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{pkg.location}</span>
                        <span className="text-gray-300">|</span>
                        <span>{pkg.duration}</span>
                      </div>

                      <div className="flex items-end justify-between mt-auto mb-5">
                        {/* Ensure link path exists */}
                        <Link to={pkg.path || '#'}>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-serif font-bold text-sm shadow-blue-200 shadow-lg flex items-center gap-1 transition-all active:scale-95">
                            Book Now <span className="text-lg leading-none -mt-1 ml-1">↗</span>
                            </button>
                        </Link>
                        <div className="text-right leading-none">
                          <p className="text-[10px] uppercase tracking-wider font-serif text-gray-400 font-bold mb-1">Per Person</p>
                          <p className="text-2xl font-extrabold text-slate-900">{pkg.price}</p>
                        </div>
                      </div>

                      <div className="w-full h-px bg-gray-100 mb-3"></div>
                    </div>
                  </div>
                </ScrollReveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= 6. FAQ SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Have questions about traveling to Himachal? We have answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openFaqIndex === index} 
                onClick={() => toggleFaq(index)} 
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}