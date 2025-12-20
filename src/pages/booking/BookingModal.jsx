import { useState } from 'react';
import { X, Calendar, Users, Phone, Mail, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose, packageName = "Tour Package" }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan API call ya WhatsApp redirect logic aayega
    console.log("Form Submitted:", formData);
    
    // Example: Direct WhatsApp Redirect
    const message = `Hi, I am interested in ${packageName}. Name: ${formData.name}, Date: ${formData.date}, Pax: ${formData.travelers}`;
    const whatsappUrl = `https://wa.me/+918580614576?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    onClose(); // Close modal after submit
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
                <p className="text-blue-100 text-xs mt-1">Fill details to get best quote for {packageName}</p>
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
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your name" 
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+91 98765 43210" 
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
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
                      type="date" 
                      name="date"
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-600"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-1 flex-1">
                  <label className="text-sm font-medium text-slate-700">Total Pax</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input 
                      type="number" 
                      name="travelers"
                      required
                      placeholder="2" 
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 mt-2"
              >
                Send Enquiry Now
              </button>

              <p className="text-center text-[10px] text-slate-400 mt-2">
                Our travel expert will call you shortly.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;