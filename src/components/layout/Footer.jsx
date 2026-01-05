import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube,
  ArrowUp, Send, CheckCircle2, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // --- STATE FOR NEWSLETTER FUNCTIONALITY ---
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // Yahan aap backend API call laga sakte hain
    console.log("Subscribing email:", email);

    // Simulate success
    setIsSubscribed(true);
    setEmail("");

    // Reset message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  // --- SCROLL TO TOP FUNCTION ---
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-emerald-950 text-white relative pt-20 overflow-hidden mt-20">

      {/* Decorative Top Border */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 border-b border-emerald-900 pb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold leading-none">Himachal</h3>
                <p className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase">Destination</p>
              </div>
            </Link>
            <p className="text-emerald-100/60 leading-relaxed">
              We create memories that last a lifetime. From the valleys of Manali to the peaks of Spiti, experience the magic of nature with our expert guides.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* COL 2: QUICK LINKS (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white border-l-4 border-orange-500 pl-3">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Careers', 'Testimonials', 'Blog'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-emerald-100/60 hover:text-orange-400 hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: PACKAGES (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white border-l-4 border-orange-500 pl-3">Top Packages</h4>
            <ul className="space-y-4">
              {[
                { name: 'Shimla - Manali Tour', price: '₹5,999' },
                { name: 'Spiti Valley Trek', price: '₹12,499' },
                { name: 'Kasol Camping', price: '₹3,499' },
                { name: 'Dalhousie Retreat', price: '₹6,999' },
              ].map((pkg, i) => (
                <li key={i}>
                  <Link to="/" className="group flex justify-between items-center text-emerald-100/60 hover:text-white transition-colors border-b border-emerald-900/50 pb-2">
                    <span className="group-hover:text-orange-400 transition-colors">{pkg.name}</span>
                    <span className="text-xs font-bold bg-emerald-900 px-2 py-1 rounded text-emerald-300">{pkg.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: GALLERY / CONTACT (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white border-l-4 border-orange-500 pl-3">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400 font-bold uppercase mb-1">Head Office</p>
                  <p className="text-emerald-100/80 text-sm">Mall Road, Shimla,<br />Himachal Pradesh, 171001</p>
                </div>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400 font-bold uppercase mb-1">Phone</p>
                  <p className="text-emerald-100/80 text-sm hover:text-white cursor-pointer">+91 82193-66010</p>
                </div>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400 font-bold uppercase mb-1">Email</p>
                  <p className="text-emerald-100/80 text-sm hover:text-white cursor-pointer">info@himachaldestination.com</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* === SECTION 3: BOTTOM BAR === */}
        <div className="pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-100/40 text-sm text-center md:text-left">
            © {currentYear} Himachal Destination. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm font-medium">
            <Link to="/privacy" className="text-emerald-100/60 hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-emerald-100/60 hover:text-orange-400 transition-colors">Terms of Service</Link>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}