import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin ,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar"; // Apna path check kar lein
import Footer from "@/components/layout/Footer"; // Apna path check kar lein

// --- Animation Wrapper (Consistency ke liye) ---
const FadeInUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => setFormStatus("success"), 2000);
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden">
      
      <Navbar />

      {/* 1. HERO BANNER */}
      <div className="relative w-full h-[40vh] lg:h-[50vh] overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2000')" 
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <FadeInUp>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
              Get in Touch
            </h1>
            <p className="text-lg text-blue-100 max-w-xl mx-auto">
              Ready to plan your Himachal adventure? We are here to help you 24/7.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                Have questions or need assistance? Reach out to our travel experts instantly.
              </p>
            </FadeInUp>

            {/* Info Cards */}
            <div className="space-y-6">
              {[
                { 
                  icon: MapPin, 
                  title: "Our Headquarters", 
                  text: "The Mall Road, Shimla, Himachal Pradesh - 171001",
                  color: "bg-blue-100 text-blue-600"
                },
                { 
                  icon: Phone, 
                  title: "Call Us 24/7", 
                  text: "+91 98765 43210",
                  color: "bg-green-100 text-green-600"
                },
                { 
                  icon: Mail, 
                  title: "Email Support", 
                  text: "info@himachaldestination.com",
                  color: "bg-orange-100 text-orange-600"
                },
                { 
                  icon: Clock, 
                  title: "Working Hours", 
                  text: "Mon - Sat: 09:00 AM - 08:00 PM",
                  color: "bg-purple-100 text-purple-600"
                }
              ].map((item, index) => (
                <FadeInUp key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-800">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.text}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Social Links */}
            <FadeInUp delay={0.5}>
              <div className="pt-6">
                <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column: Contact Form */}
          <FadeInUp delay={0.2}>
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-10 -mt-10"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input type="tel" placeholder="+91 987..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message / Inquiry</label>
                  <textarea rows="4" placeholder="Tell us about your travel plans..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting" || formStatus === "success"}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {formStatus === "idle" && (
                    <>Send Message <Send size={20} /></>
                  )}
                  {formStatus === "submitting" && "Sending..."}
                  {formStatus === "success" && "Message Sent! ✅"}
                </button>
              </form>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 3. FULL WIDTH GOOGLE MAP (SHIMLA MARKED) */}
      <section className="relative w-full h-[500px] bg-slate-200">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          {/* Google Map Embed for Shimla, Himachal Pradesh 
             Using 'filter: grayscale(0)' for full color, or 'grayscale(1)' for modern look 
          */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54747.07000287532!2d77.13577324546556!3d31.10416954203656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "contrast(1.1) opacity(0.9)" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Himachal Destination Location"
          ></iframe>

          {/* Map Overlay Card (Optional - Floating Contact) */}
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-sm hidden md:block border border-slate-100">
             <h5 className="font-bold text-lg text-slate-900 mb-2">Visit our Office</h5>
             <p className="text-sm text-slate-600 mb-4">Come have a coffee with us and lets plan your dream trip to the mountains.</p>
             <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
               Get Directions <ArrowRight size={14} />
             </a>
          </div>
        </motion.div>
      </section>

      <Footer />
      
    </div>
  );
}

// Ensure ArrowRight is imported if used in the floating card
const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);