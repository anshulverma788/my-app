'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, Briefcase, Music, ShieldCheck, MapPin, Coffee, CheckCircle } from 'lucide-react';

// Data specifically for "Touring Experience"
const tourFleet = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    category: "SUV",
    tagline: "Perfect for Family & Hill Stations",
    image: "https://i.pinimg.com/736x/b0/84/97/b084974389f0c4f253a3befa9a08c1eb.jpg",
    capacity: "6 Passengers + 1 Driver",
    luggage: "4 Large Suitcases + Roof Carrier",
    description: "Experience the most comfortable ride for long journeys. Our Crystas are fitted with captain seats to ensure you don't feel tired even after 8 hours of travel.",
    features: ["Captain Seats", "Hill-Expert Driver", "Dual AC", "Music System"],
    suitableFor: ["Chardham Yatra", "Himachal Tours", "Family Vacations"]
  },
  {
    id: 2,
    name: "Luxury Tempo Traveller",
    category: "Group",
    tagline: "Best for Large Groups & Fun Trips",
    image: "https://i.pinimg.com/736x/94/b6/75/94b67533a815e7a4a9224782618bbf50.jpg",
    capacity: "12 / 17 / 26 Seater Options",
    luggage: "Separate Luggage Compartment",
    description: "Don't split your group! Travel together in our modified luxury travellers. Featuring pushback seats, sofa row at the back, and ample walking height.",
    features: ["Pushback Seats", "Charging Points", "LED TV & Mic", "Curtains for Privacy"],
    suitableFor: ["School/College Trips", "Corporate Outings", "Pilgrimage Groups"]
  },
  {
    id: 3,
    name: "Swift Dzire / Etios",
    category: "Sedan",
    tagline: "Budget Friendly Comfort",
    image: "https://i.pinimg.com/736x/56/db/08/56db08aeb7a8343250b7bcadef61a15c.jpg",
    capacity: "4 Passengers + 1 Driver",
    luggage: "2 Large Bags + 2 Small Bags",
    description: "Ideal for couples or small families looking for a budget-friendly yet comfortable private tour. Compact size makes it great for narrow hill roads.",
    features: ["Clean Interiors", "AC Climate Control", "Smooth Suspension", "Experienced Driver"],
    suitableFor: ["Honeymoon Trips", "Weekend Getaways", "Airport Transfers"]
  },
  {
    id: 4,
    name: "Urbania Premium Van",
    category: "Luxury",
    tagline: "VIP Travel Experience",
    image: "https://i.pinimg.com/736x/ec/0e/ef/ec0eefcadbec3a50f0f39652046e3715.jpg", // Placeholder for Urbania-style van
    capacity: "10-14 Premium Seats",
    luggage: "Ample Boot Space",
    description: "Travel like a VIP. The Force Urbania offers business-class comfort with individual reading lights, reclining seats, and superior suspension.",
    features: ["Recliner Seats", "Individual AC Vents", "Ambient Lighting", "Air Suspension"],
    suitableFor: ["Business Tours", "Luxury Weddings", "Foreign Tourists"]
  }
];

export default function OurFleet() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "SUV", "Sedan", "Group", "Luxury"];

  const filteredData = activeTab === "All" 
    ? tourFleet 
    : tourFleet.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Comfort on Wheels</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
            Vehicles We Use for Your Tours
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just provide cars; we provide a comfortable journey. 
            All our vehicles are chauffeur-driven, sanitized, and specially maintained for long-distance tourism.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 px-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${activeTab === cat 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vehicles List */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          {filteredData.map((vehicle, index) => (
            <div 
              key={vehicle.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col lg:flex-row"
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative min-h-[300px]">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-bold text-slate-800 shadow-sm">
                  {vehicle.category}
                </div>
              </div>

              {/* Details Side */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{vehicle.name}</h2>
                  <p className="text-blue-600 font-medium mb-4">{vehicle.tagline}</p>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Key Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Seating</p>
                        <p className="text-sm font-semibold text-slate-700">{vehicle.capacity}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Luggage</p>
                        <p className="text-sm font-semibold text-slate-700">{vehicle.luggage}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="bg-slate-50 p-4 rounded-xl mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-3">On-Board Amenities</p>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suitable For Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-slate-900 mr-2">Best For:</span>
                    {vehicle.suitableFor.map((tag, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                    <button className="w-full bg-slate-900 text-white hover:bg-blue-700 transition-colors py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                        Plan a Trip with {vehicle.name.split(" ")[0]}
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Driver Assurance Section */}
      <section className="bg-blue-600 py-16 px-4 text-white">
        <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Not Just a Car, But a Complete Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
                    <ShieldCheck className="w-10 h-10 mx-auto mb-4 opacity-90" />
                    <h3 className="font-bold text-xl mb-2">Safe & Verified</h3>
                    <p className="text-blue-100 text-sm">Our vehicles are commercially licensed (Yellow Plate) and fully insured for tourism.</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
                    <MapPin className="w-10 h-10 mx-auto mb-4 opacity-90" />
                    <h3 className="font-bold text-xl mb-2">Expert Chauffeurs</h3>
                    <p className="text-blue-100 text-sm">Drivers who know the routes, best food spots, and hidden gems of the destination.</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
                    <Coffee className="w-10 h-10 mx-auto mb-4 opacity-90" />
                    <h3 className="font-bold text-xl mb-2">Clean & Hygienic</h3>
                    <p className="text-blue-100 text-sm">Fresh seat covers, sanitized interiors, and water bottles provided for every trip.</p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}