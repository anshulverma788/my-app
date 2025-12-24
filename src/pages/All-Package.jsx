import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search } from 'lucide-react';
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

  const Package = [
    {
      name: 'Shimla - Manali',
      region: 'Himachal',
      image: 'https://i.pinimg.com/736x/74/99/e8/7499e864c2014e3fedd3e8173373ed69.jpg',
      description: 'Shimla - Manali Package',
      price: '₹22,999',
      duration: '12 Days',
      rating: 4.9,
      reviews: 345,
      highlights: ['Mall Road Shimla', 'Hidimba Devi Temple', 'Solang Valley Adventure', 'Rohtang Pass'],
      path: '/Package/Shimla-manali',
    },
    {
      name: 'Shimla',
      region: 'Himachal',
      image: 'https://i.pinimg.com/1200x/0c/8b/a7/0c8ba7a386f38b9d32d29e74ecb0ee13.jpg',
      description: 'Shimla Package',
      price: '₹8,999',
      duration: '4 Days',
      rating: 4.8,
      reviews: 524,
      highlights: [
        'Mall Road & The Ridge',
        'Kufri Snow Point',
        'Jakhoo Temple',
        'Scandal Point & Christ Church'
      ],
      path: '/Package/shimla',
    },

    {
      name: 'Dharamshala - McLeodganj',
      region: 'Himachal',
      image: 'https://i.pinimg.com/1200x/1a/3b/e3/1a3be39688edd39ad5471716399a213f.jpg',
      description: 'Dharamshala - McLeodganj Package',
      price: '₹19,499',
      duration: '5 Days',
      rating: 4.8,
      reviews: 563,
      highlights: [
        'Dalai Lama Temple',
        'Naddi Sunset Point',
        'Bhagsu Waterfall',
        'Triund Trek'
      ],
      path: '/Package/dharamshala',
    },
    {
      name: 'Kasol - Manikaran',
      region: 'Himachal',
      image: 'https://i.pinimg.com/1200x/14/d6/23/14d623be7936330b260da9f593b472fb.jpg',
      description: 'Kasol - Manikaran Package',
      price: '₹14,999',
      duration: '4 Days',
      rating: 4.7,
      reviews: 431,
      highlights: [
        'Parvati River',
        'Manikaran Gurudwara',
        'Kheerganga Trek',
        'Chalal Trek'
      ],
      path: '/Package/KasolManikaran',
      // path: '/Package/switzerland',
    },
    {
      name: 'Spiti Valley',
      region: 'Himachal',
      image: 'https://i.pinimg.com/736x/b4/ce/9f/b4ce9fda9dbd95305fc6d11e90fa1810.jpg',
      description: 'Spiti Valley Package',
      price: '₹38,999',
      duration: '8 Days',
      rating: 4.9,
      reviews: 312,
      highlights: [
        'Kaza',
        'Komic Village',
        'Chandratal Lake',
        'Key Monastery'
      ],
      path: '/Package/Spiti8day',
      // path: '/destinations/Dubai',
    },
    {
      name: 'Nainital',
      region: 'Uttarakhand',
      image: '/assets/destination-nainital.jpg',
      description: 'Nainital Package',
      price: '₹12,999',
      duration: '4 Days',
      rating: 4.8,
      reviews: 712,
      highlights: [
        'Naini Lake',
        'Snow View Point',
        'Mall Road',
        'Naina Devi Temple'
      ],
      path: '/Package/Nainital4Days',
    },
    {
      name: 'Mussoorie',
      region: 'Uttarakhand',
      image: '/assets/destination-bali-terraces.jpg',
      description: 'Mussoorie Package',
      price: '$1,999',
      duration: '7 Days',
      rating: 4.8,
      reviews: 534,
      highlights: ['Ubud Rice Terraces', 'Beach Clubs', 'Temples', 'Yoga Retreats'],
      path: '/Package/Mussoorie',
    },
    {
      name: 'Rishikesh - Haridwar',
      region: 'Uttarakhand',
      image: '/assets/destination-paris-eiffel.jpg',
      description: 'Rishikesh - Haridwar Package',
      price: '$2,799',
      duration: '6 Days',
      rating: 4.8,
      reviews: 623,
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruises', 'Montmartre'],
      path: '/Package/RishikeshHaridwar',
    },
    {
      name: 'Auli Joshimath',
      region: 'Uttarakhand',
      image: '/assets/destination-newyork-manhattan.jpg',
      description: 'Auli Joshimath Package',
      price: '$2,599',
      duration: '5 Days',
      rating: 4.7,
      reviews: 789,
      highlights: ['Statue of Liberty', 'Central Park', 'Broadway', 'Times Square'],
      path: '/Package/AuliJoshimath',
    },

    {
      name: 'Kedarnath - Badrinath',
      region: 'Uttarakhand',
      image: '/assets/destination-thailand-beach.jpg',
      description: 'Kedarnath - Badrinath Package',
      price: '$2,199',
      duration: '8 Days',
      rating: 4.8,
      reviews: 678,
      highlights: ['Phi Phi Islands', 'Bangkok Temples', 'Night Markets', 'Thai Cuisine'],
      path: '/Package/KedarnathBadrinath',
    },
  ];

  const regions = ['all', 'Himachal', 'Uttarakhand', 'Middle East', 'North America', 'Oceania'];

  const filteredPackage = Package.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-6 px-4 py-2">
                Explore the World
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Discover Amazing
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Destinations
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                From tropical paradises to cultural wonders, find your perfect escape
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="py-12 bg-white shadow-lg -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search Package..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 rounded-full border-2 border-gray-200 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {regions.map((region) => (
                <Button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  variant={selectedRegion === region ? 'default' : 'outline'}
                  className={`rounded-full whitespace-nowrap ${selectedRegion === region
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : ''
                    }`}
                >
                  {region === 'all' ? 'All Regions' : region}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackage.map((dest, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <Link to={dest.path}>
                  <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">

                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-900 border-0">
                          {dest.region}
                        </Badge>
                      </div>

                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-900 border-0">
                          {dest.duration}
                        </Badge>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                          <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-semibold">{dest.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-white to-blue-50">
                      <p className="text-gray-800 font-bold mb-4 line-clamp-2">{dest.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {dest.highlights.slice(0, 3).map((highlight, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600">Starting from</p>
                          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {dest.price}
                          </p>
                        </div>

                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                          View Details
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
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Package found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our travel experts create a custom itinerary for you
          </p>

          <Link to="/contact">
            <Button className="bg-white text-gray-900 px-8 py-6 rounded-full shadow-xl">
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
