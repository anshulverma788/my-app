import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/pages/booking/BookingModal";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-gray-200 py-3 shadow-md"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            
            <Link to="/" className="flex items-center gap-2 group z-50">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`text-2xl font-bold tracking-tight transition-colors ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Himachal<span className="text-blue-500">Destination</span>
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-medium ${
                    isScrolled ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  Explore the Unseen
                </span>
              </div>
            </Link>

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
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-blue-500"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-500"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {(link.hasMegaMenu || link.hasDropdown) && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                      location.pathname === link.path ? "scale-x-100" : ""
                    }`}
                  />

                  {link.hasMegaMenu && activeDropdown === link.name && (
                    <div className="absolute top-full -left-20 mt-4 w-[600px] p-6 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
                      <div className="absolute -top-2 left-24 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                      
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-blue-600 font-bold mb-3 text-xs uppercase tracking-wider">Domestic</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-blue-600 cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Shimla & Manali</li>
                            <li className="hover:text-blue-600 cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Dharamshala</li>
                            <li className="hover:text-blue-600 cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Spiti Valley</li>
                            <li className="hover:text-blue-600 cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Dalhousie</li>
                          </ul>
                        </div>
                         {/* Column 2 */}
                        <div>
                          <h4 className="text-blue-600 font-bold mb-3 text-xs uppercase tracking-wider">International</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-blue-600 cursor-pointer">Dubai Special</li>
                            <li className="hover:text-blue-600 cursor-pointer">Thailand Trip</li>
                            <li className="hover:text-blue-600 cursor-pointer">Maldives Honeymoon</li>
                            <li className="hover:text-blue-600 cursor-pointer">Europe Tour</li>
                          </ul>
                        </div>
                        {/* Column 3 - Image Card */}
                        <div className="relative rounded-xl overflow-hidden group/card cursor-pointer h-full min-h-[150px]">
                          <img 
                            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop" 
                            alt="Featured" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                            <span className="text-white text-xs font-bold bg-blue-600 px-2 py-1 rounded w-fit mb-1">Trending</span>
                            <span className="text-white font-bold text-sm">Manali Winter Special</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- SIMPLE DROPDOWN (EXPERIENCES) --- */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                       <Link to="/exp/trekking" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600">Trekking</Link>
                       <Link to="/exp/camping" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600">Camping</Link>
                       <Link to="/exp/rafting" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600">River Rafting</Link>
                       <Link to="/exp/skiing" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600">Skiing</Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* --- RIGHT SIDE ACTIONS (Desktop) --- */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className={`flex items-center gap-2 font-semibold transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-blue-100/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 98765-43210</span>
              </a>
              {/* 3. Attach onClick to Desktop Button */}
              <Button 
                onClick={handleOpenBooking}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full px-6 shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
              >
                Book Now
              </Button>
            </div>

            {/* --- MOBILE TOGGLE --- */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY (Side Drawer) --- */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`} 
            onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-gray-800">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
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
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100">
               {/* 4. Attach onClick to Mobile Button */}
               <Button 
                 onClick={handleOpenBooking}
                 className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 mb-4"
               >
                 Book A Trip
               </Button>
               <div className="text-center text-xs text-gray-400">
                 © 2024 Himachal Destination
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Render BookingModal Component */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        packageName="General Enquiry (From Navbar)"
      />
    </>
  );
}