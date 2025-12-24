import { Link } from "react-router-dom";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get exclusive travel deals, destination guides, and insider tips delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 h-14 rounded-full px-6"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 h-14 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Himachal Destination</span>
                <p className="text-sm text-gray-400">Travel Agency</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Your gateway to extraordinary travel experiences. We craft unforgettable journeys to the world's most captivating destinations.
            </p>

            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Destinations",
                "Packages",
                "Services",
                "Gallery",
                "Blog",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Popular Destinations</h4>
            <ul className="space-y-3">
              {[
                "Japan",
                "Maldives",
                "Switzerland",
                "Dubai",
                "Iceland",
                "Bali",
                "Paris",
                "Thailand",
              ].map((dest) => (
                <li key={dest}>
                  <Link
                    to={`/destinations/${dest.toLowerCase()}`}
                    className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Travel Street, Suite 456<br />Los Angeles, CA 90001
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@Himachaldestination.com" className="text-gray-300 hover:text-white transition-colors">
                  info@Himachaldestination.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Business Hours:</p>
              <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Sat - Sun: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Himachal destination Travel Agency. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
