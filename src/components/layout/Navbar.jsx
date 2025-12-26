import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/pages/booking/BookingModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const isHome = location.pathname === "/"; 

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tour Package", path: "/Package", hasMegaMenu: true },
    { name: "Destinations", path: "/Destination",},
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const handleOpenBooking = () => {
    setIsMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  // --- COLOR LOGIC FOR PREMIUM THEME ---
  
  const isTransparent = isHome && !isScrolled;

  // Background: White with mild transparency and blur for premium glass effect when scrolled
  const navbarClasses = isTransparent
    ? "bg-transparent border-transparent py-5"
    : "bg-white/95 backdrop-blur-md border-emerald-100/50 shadow-sm py-3";

  // Text Colors
  const textColorClass = isTransparent 
    ? "text-white hover:text-orange-300" 
    : "text-emerald-950 hover:text-orange-600"; // Emerald-950 is darker/richer than gray
    
  const logoTextMain = isTransparent ? "text-white" : "text-emerald-800";
  const mobileMenuIconClass = isTransparent ? "text-white hover:bg-white/10" : "text-emerald-900 hover:bg-emerald-50";

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 group z-50">
              {/* Premium Gradient Logo Box */}
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200/50 group-hover:rotate-6 transition-transform border border-white/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 flex gap-1 ${logoTextMain}`}>
                  <span>Himachal</span><span className="text-orange-500">Destination</span>
                </span>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${isTransparent ? 'text-orange-200' : 'text-orange-600/80'}`}>
                  Explore the Unseen
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group h-full py-2"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-bold transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-orange-500" // Active Link Color
                        : textColorClass
                    }`}
                  >
                    {link.name}
                    {(link.hasMegaMenu || link.hasDropdown) && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:rotate-180 ${location.pathname === link.path ? "text-orange-500" : ""}`} />
                    )}
                  </Link>

                  {/* Active Line Animation - Orange */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                      location.pathname === link.path ? "scale-x-100" : ""
                    }`}
                  />

                  {/* MEGA MENU */}
                  {link.hasMegaMenu && activeDropdown === link.name && (
                    <div className="absolute top-full -left-20 mt-4 w-[650px] p-6 bg-white rounded-2xl shadow-xl shadow-emerald-900/10 border border-emerald-50 animate-in fade-in slide-in-from-top-4 duration-200 z-50 text-slate-900">
                      
                      {/* Triangle Pointer */}
                      <div className="absolute -top-2 left-24 w-4 h-4 bg-white rotate-45 border-l border-t border-emerald-50"></div>
                      
                      <div className="grid grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div>
                          <h4 className="text-emerald-800 font-extrabold mb-4 text-xs uppercase tracking-wider border-b border-orange-100 pb-2">Top Domestic</h4>
                          <ul className="space-y-3 text-sm text-gray-600">
                            {[
                              "Shimla & Manali", 
                              "Dharamshala", 
                              "Spiti Valley", 
                              "Dalhousie"
                            ].map((item) => (
                              <li key={item} className="group/item flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 group-hover/item:bg-orange-500 transition-colors"></span> 
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                          <h4 className="text-emerald-800 font-extrabold mb-4 text-xs uppercase tracking-wider border-b border-orange-100 pb-2">International</h4>
                          <ul className="space-y-3 text-sm text-gray-600">
                             {[
                              "Dubai Special", 
                              "Thailand Trip", 
                              "Maldives Honeymoon", 
                              "Europe Tour"
                            ].map((item) => (
                              <li key={item} className="group/item flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 group-hover/item:bg-orange-500 transition-colors"></span> 
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3 - Featured Image */}
                        <div className="relative rounded-xl overflow-hidden group/card cursor-pointer h-full min-h-[160px] shadow-md">
                          <img 
                            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop" 
                            alt="Featured" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent flex flex-col justify-end p-4">
                            <span className="text-white text-[10px] font-bold bg-orange-500 px-2 py-0.5 rounded-full w-fit mb-2 shadow-sm">TRENDING</span>
                            <span className="text-white font-bold text-sm leading-tight">Manali Winter Special 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT SIDE ACTIONS */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+919876543210"
                className={`flex items-center gap-2 font-semibold transition-colors group ${isTransparent ? 'text-white hover:text-orange-200' : 'text-emerald-950 hover:text-orange-600'}`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${isTransparent ? 'bg-white/10 border-white/20 text-white group-hover:bg-orange-500 group-hover:border-orange-500' : 'bg-orange-50 border-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white'}`}>
                    <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] opacity-70 font-medium uppercase tracking-wide">Call Us</span>
                  <span className="text-sm font-bold">+91 98765-43210</span>
                </div>
              </a>

              {/* Gradient Button - Premium Feel */}
              <Button 
                onClick={handleOpenBooking}
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-orange-500 hover:to-orange-600 text-white rounded-full px-7 h-11 shadow-lg shadow-emerald-200 hover:shadow-orange-200 transition-all duration-300 hover:scale-105 border-none font-bold tracking-wide"
              >
                Book Now
              </Button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-full transition-colors ${mobileMenuIconClass}`}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div 
            className={`absolute inset-0 bg-emerald-950/60 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`} 
            onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col h-full bg-gradient-to-b from-white to-orange-50/30">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <span className="text-xl font-bold text-emerald-950">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-orange-50 text-gray-500 hover:text-orange-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${
                    location.pathname === link.path
                      ? "bg-orange-50 text-orange-600 font-bold border border-orange-100"
                      : "text-emerald-900 font-medium hover:bg-gray-50 hover:text-orange-600"
                  }`}
                >
                  {link.name}
                  <ArrowRight className={`w-4 h-4 ${location.pathname === link.path ? "opacity-100" : "opacity-30"}`} />
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100">
               <Button 
                 onClick={handleOpenBooking}
                 className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl py-6 mb-4 font-bold shadow-lg shadow-emerald-100"
               >
                 Book A Trip
               </Button>
               <div className="text-center text-xs text-emerald-800/60 font-medium">
                 © 2024 Himachal Destination
               </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        packageName="General Enquiry (From Navbar)"
      />
    </>
  );
}