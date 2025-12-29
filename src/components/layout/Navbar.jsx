import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/pages/booking/BookingModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const location = useLocation();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // --- DATA FOR MENUS ---
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tour Package", path: "/Package", hasMegaMenu: true },
    { 
      name: "Destinations", 
      path: "/Destination", 
      hasDropdown: true, 
      subItems: [
        { name: "Shimla", path: "/destination/shimla" },
        { name: "Manali", path: "/destination/manali" },
        { name: "Spiti Valley", path: "/destination/spiti" },
        { name: "Dharamshala", path: "/destination/dharamshala" },
        { name: "Dalhousie", path: "/destination/dalhousie" },
        { name: "Kasol", path: "/destination/kasol" },
      ]
    },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // --- DATA FOR PACKAGE MEGA MENU ---
  const domesticPackages = [
    { name: "Shimla & Manali", path: "/package/shimla-manali" },
    { name: "Dharamshala", path: "/package/dharamshala" },
    { name: "Spiti Valley", path: "/package/spiti-valley" },
    { name: "Dalhousie", path: "/package/dalhousie" }
  ];

  const internationalPackages = [
    { name: "Dubai Special", path: "/package/dubai" },
    { name: "Thailand Trip", path: "/package/thailand" },
    { name: "Maldives Honeymoon", path: "/package/maldives" },
    { name: "Europe Tour", path: "/package/europe" }
  ];

  const handleOpenBooking = () => {
    setIsMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  // --- STYLES ---
  const navbarClasses = "bg-white/95 backdrop-blur-md border-b border-emerald-100/50 shadow-sm py-4";
  const textColorClass = "text-emerald-950 hover:text-orange-600";
  const logoTextMain = "text-emerald-800";
  const mobileMenuIconClass = "text-emerald-900 hover:bg-emerald-50";

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 group z-50">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200/50 group-hover:rotate-6 transition-transform border border-white/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 flex gap-1 ${logoTextMain}`}>
                  <span>Himachal</span><span className="text-orange-500">Destination</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 text-orange-600/80">
                  Explore the Unseen
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group h-full py-2 flex items-center"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-bold transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-orange-500"
                        : textColorClass
                    }`}
                  >
                    {link.name}
                    {(link.hasMegaMenu || link.hasDropdown) && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:rotate-180 ${location.pathname === link.path ? "text-orange-500" : ""}`} />
                    )}
                  </Link>

                  {/* Active Line Animation */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                      location.pathname === link.path ? "scale-x-100" : ""
                    }`}
                  />

                  {/* --- MEGA MENU (Tour Package) --- */}
                  {link.hasMegaMenu && activeDropdown === link.name && (
                    <div className="absolute top-full -left-20 pt-6 w-[650px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      
                      <div className="relative p-6 bg-white rounded-2xl shadow-xl shadow-emerald-900/10 border border-emerald-50 text-slate-900 cursor-default">
                        {/* Triangle Pointer */}
                        <div className="absolute -top-2 left-24 w-4 h-4 bg-white rotate-45 border-l border-t border-emerald-50"></div>
                        
                        <div className="grid grid-cols-3 gap-8">
                          {/* Column 1: Domestic Packages */}
                          <div>
                            <h4 className="text-emerald-800 font-extrabold mb-4 text-xs uppercase tracking-wider border-b border-orange-100 pb-2">Top Domestic</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                              {domesticPackages.map((item) => (
                                <li key={item.name}>
                                  <Link 
                                    to={item.path} 
                                    className="group/item flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 group-hover/item:bg-orange-500 transition-colors"></span> 
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 2: International Packages */}
                          <div>
                            <h4 className="text-emerald-800 font-extrabold mb-4 text-xs uppercase tracking-wider border-b border-orange-100 pb-2">International</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                               {internationalPackages.map((item) => (
                                <li key={item.name}>
                                  <Link 
                                    to={item.path} 
                                    className="group/item flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 group-hover/item:bg-orange-500 transition-colors"></span> 
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 3: Featured Image */}
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
                    </div>
                  )}

                  {/* --- DROPDOWN (Destinations) --- */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 pt-6 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      
                      <div className="relative p-2 bg-white rounded-xl shadow-xl shadow-emerald-900/10 border border-emerald-50 text-slate-900">
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-l border-t border-emerald-50"></div>
                        
                        <div className="flex flex-col gap-1">
                          {link.subItems.map((subItem) => (
                            <Link 
                              key={subItem.name}
                              to={subItem.path}
                              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 text-sm font-medium text-gray-600 transition-all group/sub"
                            >
                               {subItem.name}
                               <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-orange-400"/>
                            </Link>
                          ))}
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
                className="flex items-center gap-2 font-semibold transition-colors group text-emerald-950 hover:text-orange-600"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 bg-orange-50 border-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white">
                    <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] opacity-70 font-medium uppercase tracking-wide">Call Us</span>
                  <span className="text-sm font-bold">+91 98765-43210</span>
                </div>
              </a>

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
                <div key={link.name}>
                  <Link
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
                  
                  {link.hasDropdown && (
                     <div className="pl-6 flex flex-col gap-2 mt-1 border-l-2 border-orange-100 ml-4">
                        {link.subItems.map((sub) => (
                          <Link 
                            key={sub.name} 
                            to={sub.path} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-gray-500 py-1 hover:text-orange-500"
                          >
                            {sub.name}
                          </Link>
                        ))}
                     </div>
                  )}
                </div>
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