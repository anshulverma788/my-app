import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; // Assuming you have shadcn UI or use standard input
import {
  Calendar, Users, MapPin, CheckCircle2, ShieldCheck,
  ArrowRight, CreditCard, Info
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Agar pichle page se data aaya hai to wo use karein, nahi to Default Kedarnath data
  const packageData = location.state || {
    title: "Kedarnath & Badrinath Yatra",
    price: 19999,
    image: "https://images.unsplash.com/photo-1610716676239-2996e38b3079?q=80&w=1600&auto=format&fit=crop",
    duration: "6 Days / 5 Nights",
    date: ""
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: packageData.date || '',
    adults: 2,
    children: 0,
    specialRequest: ''
  });

  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate Price dynamically
  useEffect(() => {
    const adultPrice = formData.adults * packageData.price;
    const childPrice = formData.children * (packageData.price * 0.6); // 60% cost for kids
    setTotalPrice(adultPrice + childPrice);
  }, [formData.adults, formData.children, packageData.price]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan API Call ya Payment Gateway logic aayega

    // Demo: Redirect to WhatsApp
    const message = `*New Booking Request*%0A%0A*Package:* ${packageData.title}%0A*Name:* ${formData.fullName}%0A*Date:* ${formData.date}%0A*Pax:* ${formData.adults} Adults, ${formData.children} Kids%0A*Total:* ₹${totalPrice.toLocaleString()}`;
    window.open(`https://wa.me/+918580614576?text=${message}`, '_blank');

    // Navigate to a Thank You page (Optional)
    // navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Navbar />

      <div className="pt-28 container mx-auto px-4 sm:px-6">

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Confirm Your Booking</h1>
          <p className="text-slate-500">Secure your spot for the divine journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* --- LEFT SIDE: CUSTOMER DETAILS FORM --- */}
          <div className="lg:col-span-8 space-y-6">

            {/* Step 1: Traveler Details */}
            <Card className="p-6 border-0 shadow-md bg-white rounded-2xl">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800">Traveler Details</h3>
              </div>

              <form id="booking-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="rahul@example.com"
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Travel Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-600"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Adults (12+ yrs)</label>
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Children (5-11 yrs)</label>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-slate-700">Special Request (Optional)</label>
                  <textarea
                    name="specialRequest"
                    rows="3"
                    placeholder="e.g. Ground floor room, Jain food, etc."
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </Card>

            {/* Step 2: Payment Info (Static for now) */}
            <Card className="p-6 border-0 shadow-md bg-white rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800">Payment Method</h3>
              </div>
              <div className="flex gap-4 p-4 border border-blue-100 bg-blue-50/50 rounded-xl items-start">
                <div className="p-2 bg-white rounded-full shadow-sm">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Book Now, Pay Later</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Submit your enquiry now. Our agent will contact you for confirmation and take a 20% token amount.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* --- RIGHT SIDE: ORDER SUMMARY --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">

              {/* Package Card */}
              <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="h-40 w-full relative">
                  <img src={packageData.image} alt={packageData.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="font-bold text-lg leading-tight">{packageData.title}</h3>
                    <div className="flex items-center text-xs opacity-90 mt-1">
                      <MapPin className="w-3 h-3 mr-1" /> {packageData.location || "India"}
                    </div>
                  </div>
                </div>

                {/* Calculation */}
                <div className="p-6 bg-slate-50/50">
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-slate-600">Duration</span>
                    <span className="font-medium text-slate-900">{packageData.duration}</span>
                  </div>

                  <div className="border-t border-slate-200 my-4" />

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Adults ({formData.adults} x ₹{packageData.price})</span>
                      <span className="font-medium">₹{(formData.adults * packageData.price).toLocaleString()}</span>
                    </div>
                    {formData.children > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Children ({formData.children} x ₹{packageData.price * 0.6})</span>
                        <span className="font-medium">₹{(formData.children * packageData.price * 0.6).toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>- ₹0</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 my-4" />

                  <div className="flex justify-between items-end">
                    <span className="font-bold text-slate-800 text-lg">Total</span>
                    <span className="font-bold text-2xl text-blue-600">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 text-right mt-1">+ 5% GST Applicable</p>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-white border-t border-slate-100">
                  <Button
                    onClick={handleSubmit} // Triggers the form submit
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg shadow-lg shadow-blue-200"
                  >
                    Confirm Booking <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-500">
                    <ShieldCheck className="w-3 h-3 text-green-500" /> Secure Booking
                  </div>
                </div>
              </Card>

              {/* Support */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-blue-900">Need Help?</h4>
                  <p className="text-xs text-blue-700 mt-1">
                    Call our expert for customized plans: <br />
                    <span className="font-bold text-sm">+91 98765 43210</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}