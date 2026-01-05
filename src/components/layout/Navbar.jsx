import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ChevronDown, Phone, MapPin, ArrowRight, LayoutDashboard,
  Mountain, HeartHandshake, Users, User, Compass, Landmark,
} from "lucide-react";
import { Button } from '@/components/ui/button';
import BookingModal from "@/pages/booking/BookingModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDestIndex, setCurrentDestIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen || isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isSidebarOpen]);

  useEffect(() => {
    if (!isSidebarOpen) return;
    const timer = setInterval(() => {
      setCurrentDestIndex((prevIndex) => 
        prevIndex === sidebarDestinations.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);
    return () => clearInterval(timer);
  }, [isSidebarOpen]);

  // --- DATA DEFINITIONS (Moved up to be used in navLinks) ---
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

  // --- NAV LINKS (Updated: Tour Package now has subItems for Mobile) ---
  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "Tour Package", 
      path: "/package", 
      hasMegaMenu: true,
      // Mobile ke liye Domestic aur International ko merge kar diya
      subItems: [...domesticPackages, ...internationalPackages] 
    },
    { 
      name: "Destinations", 
      path: "/destination", 
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
    { 
      name: "Discover", 
      path: "#", 
      hasDropdown: true, 
      subItems: [
        { name: "About Us", path: "/about" },
        { name: "Travel Blogs", path: "/blog" },
        { name: "Our Gallery", path: "/gallery" },
        { name: "Contact Us", path: "/contact" },
        { name: "Cars", path: "/texi" },
        { name: "FAQ", path: "/faq" },
      ]
    },
  ];

  const tourTypes = [
    { name: "Hills Station", path: "/tours/hills", icon: Mountain },
    { name: "Couple Tour", path: "/tours/honeymoon", icon: HeartHandshake },
    { name: "Group Tour", path: "/tours/group", icon: Users },
    { name: "Single Tour", path: "/tours/solo", icon: User },
    { name: "Adventure", path: "/tours/adventure", icon: Compass },
    { name: "Religious", path: "/tours/religious", icon: Landmark },
  ];

  const sidebarDestinations = [
    { name: "Manali Trip", image: "https://i.pinimg.com/736x/c4/1b/24/c41b245b832fffa9e3ea316f8bcec015.jpg", tours: 5 },
    { name: "Spiti Valley", image: "https://i.pinimg.com/736x/e6/34/52/e63452ba01dee1ab2c3b4a014db1b7ac.jpg", tours: 8 },
    { name: "Shimla Hills", image: "https://i.pinimg.com/736x/31/8d/09/318d09141b80d06dc2363254e59d8c3f.jpg", tours: 3 },
    { name: "Kasol Vibes", image: "https://i.pinimg.com/1200x/78/f6/54/78f654d115efff550debe535a4f9d83b.jpg", tours: 6 },
  ];

  const handleOpenBooking = () => {
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);
    setIsModalOpen(true);
  };

  const handleMobileDropdownToggle = (name) => {
    setActiveMobileDropdown(prev => prev === name ? null : name);
  };

  const isTransparent = !isScrolled;
  const navbarClasses = isTransparent
    ? "bg-gradient-to-b from-black/60 to-transparent border-transparent py-5 lg:py-6" 
    : "bg-white/95 backdrop-blur-md border-b border-emerald-100/50 shadow-sm py-3 lg:py-4"; 
  const textColorClass = isTransparent ? "text-white hover:text-orange-400" : "text-emerald-950 hover:text-orange-600";
  const logoTextMain = isTransparent ? "text-white" : "text-emerald-800";
  const logoSubText = isTransparent ? "text-white/80" : "text-orange-600/80";
  const actionButtonClass = isTransparent ? "text-white hover:bg-white/20" : "text-emerald-950 hover:bg-orange-50";
  const hamburgerClass = isTransparent ? "text-white hover:bg-white/20" : "text-emerald-950 hover:bg-emerald-50";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 group z-50">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200/50 group-hover:rotate-6 transition-transform border border-white/20">
                <MapPin className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 flex gap-1 ${logoTextMain}`}>
                  <span>Himachal</span><span className={isTransparent ? "text-orange-400" : "text-orange-500"}>Destination</span>
                </span>
                <span className={`text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${logoSubText}`}>
                  Explore the Unseen
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU LINKS */}
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
                      location.pathname === link.path || (location.pathname.toLowerCase() === link.path.toLowerCase())
                        ? "text-orange-500" : textColorClass
                    }`}
                  >
                    {link.name}
                    {(link.hasMegaMenu || link.hasDropdown || link.subItems) && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:rotate-180 ${location.pathname === link.path ? "text-orange-500" : ""}`} />
                    )}
                  </Link>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${location.pathname === link.path ? "scale-x-100" : ""}`} />

                  {/* MEGA MENU (Tour Package - Desktop Only) */}
                  {link.hasMegaMenu && activeDropdown === link.name && (
                    <div className="absolute top-full -left-20 pt-6 w-[650px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="relative p-6 bg-white rounded-2xl shadow-xl shadow-emerald-900/10 border border-emerald-50 text-slate-900 cursor-default">
                        <div className="absolute -top-2 left-24 w-4 h-4 bg-white rotate-45 border-l border-t border-emerald-50"></div>
                        <div className="grid grid-cols-3 gap-8">
                          <div>
                            <h4 className="text-emerald-800 font-extrabold mb-4 text-xs uppercase tracking-wider border-b border-orange-100 pb-2">Top Domestic</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                              {domesticPackages.map((item) => (
                                <li key={item.name}>
                                  <Link to={item.path} className="group/item flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 group-hover/item:bg-orange-500 transition-colors"></span> 
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-emerald-800 font-extrabold mb-4 text-xs uppercase tracking-wider border-b border-orange-100 pb-2">International</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                              {internationalPackages.map((item) => (
                                <li key={item.name}>
                                  <Link to={item.path} className="group/item flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 group-hover/item:bg-orange-500 transition-colors"></span> 
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="relative rounded-xl overflow-hidden group/card cursor-pointer h-full min-h-[160px] shadow-md">
                            <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop" alt="Featured" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent flex flex-col justify-end p-4">
                              <span className="text-white text-[10px] font-bold bg-orange-500 px-2 py-0.5 rounded-full w-fit mb-2 shadow-sm">TRENDING</span>
                              <span className="text-white font-bold text-sm leading-tight">Manali Winter Special 2026</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* DROPDOWN (Destinations & Discover) */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 pt-6 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="relative p-2 bg-white rounded-xl shadow-xl shadow-emerald-900/10 border border-emerald-50 text-slate-900">
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-l border-t border-emerald-50"></div>
                        <div className="flex flex-col gap-1">
                          {link.subItems.map((subItem) => (
                            <Link key={subItem.name} to={subItem.path} className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 text-sm font-medium text-gray-600 transition-all group/sub">
                               {subItem.name} <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-orange-400"/>
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
            <div className="flex items-center gap-3 lg:gap-5">
              <button onClick={() => setIsSidebarOpen(true)} className={`p-2 lg:p-2.5 rounded-full transition-all duration-300 ${actionButtonClass}`}>
                <LayoutDashboard className="w-6 h-6" />
              </button>
              <div className="hidden lg:flex items-center gap-5">
                <Button onClick={handleOpenBooking} className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-orange-500 hover:to-orange-600 text-white rounded-full px-7 h-11 shadow-lg shadow-emerald-200 hover:shadow-orange-200 transition-all duration-300 hover:scale-105 border-none font-bold tracking-wide">
                  Book Now
                </Button>
              </div>
              <button onClick={() => setIsMobileMenuOpen(true)} className={`lg:hidden p-2 rounded-full transition-colors ${hamburgerClass}`}>
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- SIDEBAR (UNCHANGED) --- */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isSidebarOpen ? "visible" : "invisible"}`}>
         <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsSidebarOpen(false)} />
         <div className={`absolute top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl transition-transform duration-500 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
             <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
                <div className="p-6 lg:p-8 pb-4 flex justify-between items-center border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white"><MapPin className="w-5 h-5" /></div>
                        <span className="text-xl font-bold text-emerald-950">Himachal<span className="text-orange-500">Destination</span></span>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"><X className="w-5 h-5" /></button>
                </div>
                <div className="p-6 lg:p-8 space-y-10">
                    <div>
                        <h3 className="text-xl font-bold text-emerald-950 mb-6">Tour Type</h3>
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            {tourTypes.map((type) => (
                                <Link key={type.name} to={type.path} onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-emerald-50/50 hover:bg-orange-50 cursor-pointer transition-colors group">
                                    <div className="mb-2 transition-transform group-hover:scale-110 duration-300 bg-white p-2.5 rounded-full shadow-sm"><type.icon className="w-6 h-6 text-emerald-600 group-hover:text-orange-500 transition-colors" /></div>
                                    <span className="text-[11px] font-bold text-center text-emerald-900 leading-tight">{type.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between items-end mb-6">
                            <h3 className="text-xl font-bold text-emerald-950">Featured Destinations</h3>
                            <Link to="/Destination" onClick={() => setIsSidebarOpen(false)} className="text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1 group/view bg-orange-50 px-3 py-1.5 rounded-full transition-colors">View All <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/view:translate-x-1" /></Link>
                        </div>
                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                            {sidebarDestinations.map((dest, index) => (
                                <div key={dest.name} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentDestIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-[2000ms] scale-105 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded shadow-md">{dest.tours} Tours</div>
                                    <div className="absolute bottom-4 left-4 text-white"><h4 className="text-2xl font-bold">{dest.name}</h4></div>
                                </div>
                            ))}
                            <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                                {sidebarDestinations.map((_, index) => (
                                    <span key={index} className={`h-1.5 rounded-full transition-all duration-500 ${index === currentDestIndex ? 'w-6 bg-orange-500' : 'w-1.5 bg-white/50'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">We provide the best travel experiences in Himachal Pradesh with personalized tour packages.</p>
                        <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-orange-500" /><span className="text-lg font-bold text-emerald-950">+91 82193-66010</span></div>
                    </div>
                </div>
             </div>
         </div>
      </div>

      {/* --- UPDATED MOBILE MENU --- */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-emerald-950/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileMenuOpen(false)}/>
        <div className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full bg-gradient-to-b from-white to-orange-50/30">
            
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
              <span className="text-xl font-bold text-emerald-950">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-orange-50 text-gray-500 hover:text-orange-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col overflow-y-auto flex-1 py-2">
              {navLinks.map((link) => {
                const isOpen = activeMobileDropdown === link.name;
                // MAIN FIX: Check for subItems array existence
                const hasSub = link.subItems && link.subItems.length > 0;

                return (
                  <div key={link.name} className="border-b border-gray-50 last:border-none">
                    <div 
                      onClick={() => hasSub ? handleMobileDropdownToggle(link.name) : setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-colors ${isOpen ? "bg-orange-50 text-orange-600" : "text-emerald-900 hover:text-orange-600 hover:bg-gray-50"}`}
                    >
                      {hasSub ? (
                        <span className="font-bold text-[15px] flex-1">{link.name}</span>
                      ) : (
                        <Link to={link.path} className="font-bold text-[15px] flex-1 block">
                           {link.name}
                        </Link>
                      )}

                      {hasSub ? (
                        <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : ""}`} />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-gray-300" />
                      )}
                    </div>

                    {/* Accordion Body */}
                    {hasSub && (
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="bg-gray-50/50 inner-shadow-sm flex flex-col pb-2">
                           {link.subItems.map((sub) => (
                             <Link 
                               key={sub.name} 
                               to={sub.path} 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="pl-10 pr-6 py-2.5 text-sm font-medium text-gray-500 hover:text-orange-600 hover:bg-orange-50 flex items-center justify-between"
                             >
                               {sub.name}
                               <span className="w-1.5 h-1.5 rounded-full bg-emerald-200"></span>
                             </Link>
                           ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-6 mt-auto border-t border-gray-100">
               <Button onClick={handleOpenBooking} className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl py-6 mb-4 font-bold shadow-lg shadow-emerald-100">Book A Trip</Button>
               <div className="text-center text-xs text-emerald-800/60 font-medium">© 2026 Himachal Destination</div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} packageName="General Enquiry (From Navbar)"/>
    </>
  );
}