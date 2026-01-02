import { useState } from 'react';
import { X, Calendar, Users, Phone, Mail, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose, packageName = "Tour Package" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    travelers: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Button disable karega

    // 1. Backend ke liye Data prepare karna
    const bookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      destination: packageName, // Jo package select kiya wo
      travelDate: formData.date,
      personCount: Number(formData.travelers)
    };

    try {
      // 2. API Call to Backend
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Thank You! Your enquiry has been sent successfully.");
        
        // 3. Optional: WhatsApp Redirect bhi rakhein (Backup ke liye)
        const message = `Hi, I made a booking enquiry for ${packageName}. Name: ${formData.name}`;
        const whatsappUrl = `https://wa.me/+918580614576?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        onClose(); // Modal band karein
        setFormData({ name: '', phone: '', email: '', date: '', travelers: '' }); // Form clear
      } else {
        alert("❌ Error: " + data.message);
      }

    } catch (error) {
      console.error("Booking Error:", error);
      alert("❌ Server Error. Please try again later.");
    } finally {
      setIsSubmitting(false); // Loading hatayein
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative"
          >
            {/* Header */}
            <div className="bg-blue-600 p-5 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Plan Your Trip</h3>
                <p className="text-blue-100 text-xs mt-1">Get quote for <span className="font-bold text-yellow-300">{packageName}</span></p>
              </div>
              <button onClick={onClose} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" name="name" required placeholder="Enter your name" 
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange} value={formData.name}
                  />
                </div>
              </div>

              {/* Email (Backend me required hai isliye add kiya) */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" name="email" required placeholder="you@example.com" 
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange} value={formData.email}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input 
                    type="tel" name="phone" required placeholder="+91 98765 43210" 
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange} value={formData.phone}
                  />
                </div>
              </div>

              {/* Date & Travelers Row */}
              <div className="flex gap-4">
                <div className="space-y-1 flex-1">
                  <label className="text-sm font-medium text-slate-700">Travel Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input 
                      type="date" name="date" required
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-600"
                      onChange={handleChange} value={formData.date}
                    />
                  </div>
                </div>
                <div className="space-y-1 flex-1">
                  <label className="text-sm font-medium text-slate-700">Total Pax</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input 
                      type="number" name="travelers" required placeholder="2" min="1"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                      onChange={handleChange} value={formData.travelers}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <> <Loader2 className="w-5 h-5 animate-spin" /> Sending... </>
                ) : (
                  "Send Enquiry Now"
                )}
              </button>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;