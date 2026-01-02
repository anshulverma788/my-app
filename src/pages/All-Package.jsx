import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Star, Search, 
  Utensils, Car, BedDouble, 
  Phone, MessageCircle, CheckCircle2,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Package() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  
  // --- SLIDER STATE & DATA ---
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2016/10/15/16/26/trekking-1742821_1280.jpg", 
      title: "Discover the Magic of Himachal",
      subtitle: "From snowy peaks to lush green valleys, find your perfect escape."
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2023/07/13/05/36/mountains-8123933_1280.jpg", 
      title: "Spiritual Journeys in Uttarakhand",
      subtitle: "Experience peace and adventure in the land of gods."
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2021/07/08/03/55/mount-everest-6395759_1280.jpg", 
      title: "Explore Unseen Destinations",
      subtitle: "Curated tour packages for memories that last a lifetime."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };
  // ---------------------------

  const Package = [
    {
      name: 'Himalayan Delight: Shimla Manali Group Tour',
      region: 'Himachal',
      image: 'https://i.pinimg.com/736x/74/99/e8/7499e864c2014e3fedd3e8173373ed69.jpg',
      description: 'Experience the best of Himachal with group activities.',
      price: '6,500',
      originalPrice: '7,800',
      saveAmount: '1,300',
      route: 'Delhi-Shimla-Kullu-Manali-Delhi',
      duration: '5 Nights & 6 Days',
      rating: 4.9,
      reviews: 345,
      highlights: ['Mall Road', 'Solang Valley', 'Rohtang Pass'],
      path: '/Package/Shimla-manali',
    },
    {
      name: 'Manali Magic: A Himalayan Getaway for Group',
      region: 'Himachal',
      image: 'https://i.pinimg.com/1200x/0c/8b/a7/0c8ba7a386f38b9d32d29e74ecb0ee13.jpg',
      description: 'Perfect family tour package for relaxation.',
      price: '6,500',
      originalPrice: '7,800',
      saveAmount: '1,300',
      route: 'Delhi-Kullu-Manali-Manikaran-Delhi',
      duration: '4 Nights & 5 Days',
      rating: 4.8,
      reviews: 524,
      highlights: ['Kufri Snow Point', 'Jakhoo Temple'],
      path: '/Package/shimla',
    },
    {
      name: 'Love in the Queen of Hills for Couple',
      region: 'Himachal',
      image: 'https://i.pinimg.com/1200x/1a/3b/e3/1a3be39688edd39ad5471716399a213f.jpg',
      description: 'Romantic honeymoon special package.',
      price: '7,000',
      originalPrice: '8,400',
      saveAmount: '1,400',
      route: 'Delhi-Shimla-Kufri-Delhi',
      duration: '2 Nights & 3 Days',
      rating: 4.8,
      reviews: 563,
      highlights: ['Dalai Lama Temple', 'Triund Trek'],
      path: '/Package/dharamshala',
    },
    {
      name: 'Love Amidst the Pine- Tour for Couples',
      region: 'Himachal',
      image: 'https://i.pinimg.com/1200x/14/d6/23/14d623be7936330b260da9f593b472fb.jpg',
      description: 'Serene getaway for couples in nature.',
      price: '10,000',
      originalPrice: '12,000',
      saveAmount: '2,000',
      route: 'Delhi-Shimla-Kufri-Chail-Naldhara',
      duration: '4 Nights & 5 Days',
      rating: 4.7,
      reviews: 431,
      highlights: ['Parvati River', 'Kheerganga Trek'],
      path: '/Package/KasolManikaran',
    },
    {
      name: 'Spiti Valley',
      region: 'Himachal',
      image: 'https://i.pinimg.com/736x/b4/ce/9f/b4ce9fda9dbd95305fc6d11e90fa1810.jpg',
      description: 'Spiti Valley Package',
      price: '38,999',
      originalPrice: '45,000',
      saveAmount: '6,001',
      route: 'Shimla-Kaza-Chandratal-Manali',
      duration: '8 Days',
      rating: 4.9,
      reviews: 312,
      highlights: ['Kaza', 'Komic Village', 'Chandratal Lake', 'Key Monastery'],
      path: '/Package/Spiti8day',
    },
    {
      name: 'Nainital',
      region: 'Uttarakhand',
      image: 'https://i.pinimg.com/1200x/3a/6c/08/3a6c08fddfbe1f4c4d17726ca450f0ce.jpg',
      description: 'Nainital Package',
      price: '12,999',
      originalPrice: '15,000',
      saveAmount: '2,001',
      route: 'Delhi-Nainital-Delhi',
      duration: '4 Days',
      rating: 4.8,
      reviews: 712,
      highlights: ['Naini Lake', 'Snow View Point', 'Mall Road', 'Naina Devi Temple'],
      path: '/Package/Nainital4Days',
    },
    {
      name: 'Mussoorie',
      region: 'Uttarakhand',
      image: 'https://i.pinimg.com/1200x/7a/93/36/7a9336d12fa3322703e470d7c451b3ac.jpg',
      description: 'Mussoorie Package',
      price: '1,999',
      originalPrice: '2,500',
      saveAmount: '501',
      route: 'Dehradun-Mussoorie-Dehradun',
      duration: '7 Days',
      rating: 4.8,
      reviews: 534,
      highlights: ['Kempty Falls', 'Gun Hill', 'Mall Road'],
      path: '/Package/Mussoorie',
    },
    {
      name: 'Rishikesh - Haridwar',
      region: 'Uttarakhand',
      image: 'https://i.pinimg.com/736x/02/7d/3d/027d3d001002e939489ee15fa1666bbb.jpg',
      description: 'Rishikesh - Haridwar Package',
      price: '2,799',
      originalPrice: '3,500',
      saveAmount: '701',
      route: 'Haridwar-Rishikesh-Haridwar',
      duration: '6 Days',
      rating: 4.8,
      reviews: 623,
      highlights: ['Ganga Aarti', 'Rafting', 'Ram Jhula'],
      path: '/Package/RishikeshHaridwar',
    },
    {
      name: 'Auli Joshimath',
      region: 'Uttarakhand',
      image: 'https://i.pinimg.com/736x/bb/a0/ec/bba0ecc1f4318baef86bb8e23319df7e.jpg',
      description: 'Auli Joshimath Package',
      price: '2,599',
      originalPrice: '3,200',
      saveAmount: '601',
      route: 'Rishikesh-Joshimath-Auli',
      duration: '5 Days',
      rating: 4.7,
      reviews: 789,
      highlights: ['Skiing', 'Cable Car', 'Nanda Devi View'],
      path: '/Package/AuliJoshimath',
    },
    {
      name: 'Kedarnath - Badrinath',
      region: 'Uttarakhand',
      image: 'https://i.pinimg.com/1200x/b4/77/98/b4779865b940ae6fb92d8ca8ed2a0811.jpg',
      description: 'Kedarnath - Badrinath Package',
      price: '2,199',
      originalPrice: '2,800',
      saveAmount: '601',
      route: 'Haridwar-Kedarnath-Badrinath',
      duration: '8 Days',
      rating: 4.8,
      reviews: 678,
      highlights: ['Kedarnath Temple', 'Badrinath Temple', 'Mana Village'],
      path: '/Package/KedarnathBadrinath',
    },
    {
     name: 'Goa: Sun, Sand & Sea Beach Tour',
      region: 'Goa', // Dhyan rahe: 'regions' array mein 'Goa' add karna na bhulein
      image: 'https://i.pinimg.com/736x/dd/c6/c7/ddc6c7a5db8817e7605dded58314b0ce.jpg',
      description: 'Experience the ultimate beach vacation with nightlife.',
      price: '5,999',
      originalPrice: '8,500',
      saveAmount: '2,501',
      route: 'Airport-North Goa-South Goa-Airport',
      duration: '3 Nights & 4 Days',
      rating: 4.8,
      reviews: 850,
      highlights: ['Baga Beach', 'Fort Aguada', 'Dudhsagar Falls', 'Cruise'],
      path: '/Package/Goa',
    },
    {
      name: 'Kerala: God\'s Own Country Tour',
      region: 'Kerala',
      image: 'https://i.pinimg.com/736x/23/bc/01/23bc0131b8ae332e29be3b06570c1d8d.jpg', // Kerala Houseboat Image
      description: 'Relax in the backwaters and explore lush green tea gardens.',
      price: '9,499',
      originalPrice: '13,500',
      saveAmount: '4,001',
      route: 'Kochi-Munnar-Thekkady-Alleppey',
      duration: '5 Nights & 6 Days',
      rating: 4.9,
      reviews: 920,
      highlights: ['Alleppey Houseboat', 'Munnar Tea Gardens', 'Periyar Wildlife'],
      path: '/Package/Kerala',
    },
  ];

  const regions = ['all', 'Himachal', 'Uttarakhand', 'Goa', 'Kerala'];

  const filteredPackage = Package.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* HERO SLIDER SECTION */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image - STATIC, NO ZOOM */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white z-10 pt-20">
              <ScrollReveal direction="up" key={index}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  {/* HERO BUTTON - ORANGE */}
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 text-lg shadow-xl hover:scale-105 transition-transform">
                    Explore Packages
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* SEARCH BAR & GRID FILTERS */}
      <section className="relative z-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 flex flex-col md:flex-row gap-4 items-center">
            
            {/* Search Input */}
            <div className="flex-1 relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all w-full focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Grid of 3 Buttons (Filters) - ORANGE THEME */}
            <div className="grid grid-cols-3 md:flex md:flex-wrap gap-2 w-full md:w-auto shrink-0">
              {regions.map((region) => (
                <Button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  variant={selectedRegion === region ? 'default' : 'outline'}
                  className={`rounded-xl whitespace-nowrap px-2 md:px-6 text-xs md:text-sm h-10 md:h-12 w-full md:w-auto transition-colors ${
                    selectedRegion === region
                      ? 'bg-orange-500 hover:bg-orange-600 text-white border-transparent'
                      : 'border-gray-200 text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200'
                  }`}
                >
                  {region === 'all' ? 'All' : region}
                </Button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPackage.map((dest, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <Link to={dest.path}>
                  <Card className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative">
                    
                   {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute top-2 left-2 z-20">
                        {/* RIBBON - STRAIGHT (SIDHA) */}
                        <div className="bg-orange-600 text-white text-xs font-bold py-1.5 px-3 rounded-md shadow-md">
                          20% OFF
                        </div>
                      </div>

                     <img
                        src={dest.image}
                        alt={dest.name}
                        // Changes: 'object-cover' ko 'object-fill' kiya, aur 'scale-110' hata diya
                        className="w-full h-full object-fill transition-transform duration-700"
                      />
                      
                      {/* Floating Amenities Bar (BOTTOM LEFT) */}
                      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg py-1.5 px-3 flex gap-3 z-20 items-center text-black w-auto">
                        <Utensils className="w-3.5 h-3.5" strokeWidth={2.5} />
                        <Car className="w-3.5 h-3.5" strokeWidth={2.5} />
                        <Car className="w-3.5 h-3.5" strokeWidth={2.5} />
                        <BedDouble className="w-3.5 h-3.5" strokeWidth={2.5} />
                        <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 pt-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-center mb-2 text-xs text-gray-500 font-medium">
                        <span>{dest.duration || '5 Nights & 6 Days'}</span>
                        <div className="flex items-center text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span>{dest.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[2.5rem]  transition-colors">
                        {dest.name}
                      </h3>

                      <div className="mb-4">
                        {/* ROUTE PILL - GREEN */}
                        <span className="inline-block bg-green-50 text-green-700 text-[10px] font-semibold px-2 py-1 rounded-md w-full truncate border border-green-100">
                          {dest.route || 'Delhi-Shimla-Manali-Delhi'}
                        </span>
                      </div>

                      {/* --- NEW PRICE SECTION STARTS HERE --- */}
                      <div className="mt-auto mb-4">
                        <div className="flex justify-between items-end">
                          
                          {/* LEFT SIDE: Starting From + Current Price */}
                          <div className="flex flex-col">
                            <span className="text-[11px] font-semibold text-gray-400 mb-0.5">
                              Starting from
                            </span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-2xl font-bold text-teal-700">
                                ₹{dest.price}
                              </span>
                              <span className="text-xs text-gray-400 font-medium">
                                /person
                              </span>
                            </div>
                          </div>

                          {/* RIGHT SIDE: Old Price + Discount % */}
                          <div className="flex flex-col items-end pb-1">
                            <span className="text-xs text-gray-400 line-through decoration-gray-400">
                              ₹{dest.originalPrice || '8,000'}
                            </span>
                            <span className="text-sm font-bold text-orange-600">
                              30% OFF
                            </span>
                          </div>

                        </div>
                        {/* Dotted Line Separator */}
                        <div className="border-b-2 border-dotted border-gray-100 mt-3 mb-1"></div>
                      </div>
                      {/* --- NEW PRICE SECTION ENDS HERE --- */}

                     <div className="grid grid-cols-[auto_auto_1fr] gap-2 pt-3 border-t border-gray-100">
                        {/* WhatsApp Button - GREEN */}
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="w-10 h-10 rounded-lg border-green-500 text-green-600 hover:bg-green-50 flex items-center justify-center"
                        >
                          {/* WhatsApp SVG Icon */}
                          <svg 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-5 h-5"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </Button>

                        {/* Phone Button - ORANGE */}
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="w-10 h-10 rounded-lg border-orange-500 text-orange-600 hover:bg-orange-50"
                        >
                          <Phone className="w-5 h-5" />
                        </Button>

                        {/* Call Back Button - GREEN (For Action) */}
                        <Button className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg h-10 shadow-md transition-colors">
                          Get A Call Back
                        </Button>
                      </div>

                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filteredPackage.length === 0 && (
            <div className="text-center py-20">
              <MapPin className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Packages found</h3>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}