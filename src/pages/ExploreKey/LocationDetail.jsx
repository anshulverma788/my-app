import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { locationsData } from "../../data/LocationsData"; // Data import path check kar lein
import { MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/layout/Navbar"; // Navbar import
import Footer from "../../components/layout/Footer"; // Footer import
const LocationDetail = () => {
  const { id } = useParams(); 
  const place = locationsData.find((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!place) {
    return <div className="text-center py-20 text-2xl">Location not found!</div>;
  }
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-16">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-orange-600 font-semibold mb-6 hover:underline">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side: Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <img 
              src={place.image} 
              alt={place.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Right Side: Information */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{place.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium border border-orange-100">
                <Clock className="w-4 h-4 mr-2" /> {place.duration}
              </span>
              <span className="flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                <MapPin className="w-4 h-4 mr-2" /> {place.location}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Overview</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {place.description}
            </p>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {place.highlights.map((point, index) => (
                <li key={index} className="flex items-start text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full sm:w-auto bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200">
              Book a Trip Here
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocationDetail;