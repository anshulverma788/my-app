'use client'; // Next.js client component ke liye zaroori hai

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { X, MapPin, ZoomIn } from 'lucide-react'; // Make sure you have lucide-react installed

// Dummy Data for Gallery
const categories = ["All", "Nature", "Urban", "Luxury", "Adventure"];

const galleryItems = [
  {
    id: 1,
    category: "Nature",
    title: "Swiss Alps",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Urban",
    title: "Tokyo Nights",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1988&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Luxury",
    title: "Santorini Resort",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Adventure",
    title: "Desert Safari",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Nature",
    title: "Northern Lights",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Luxury",
    title: "Maldives Villa",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter Logic
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <Navbar />
      
      {/* Hero / Header Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-3 mb-6 font-serif">
            Travel Gallery
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore the world through our lens. From the serene mountains to bustling cities, 
            witness the beauty of our premium destinations.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border 
                  ${activeCategory === cat 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="pb-20 pt-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 h-full w-full"
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient (Always slightly visible, darker on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-1">{item.title}</h3>
                  <div className="flex items-center text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <MapPin className="w-4 h-4 mr-1 text-blue-400" />
                    {item.location}
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20">
                    <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              No images found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal (Full Screen View) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
          >
             <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h2 className="text-3xl font-bold">{selectedImage.title}</h2>
                <p className="flex items-center text-gray-300 mt-2">
                    <MapPin className="w-4 h-4 mr-2" /> {selectedImage.location}
                </p>
              </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}