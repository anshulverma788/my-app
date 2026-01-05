'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ChevronDown, ChevronUp, Search, MessageCircle, HelpCircle } from 'lucide-react';

// Dummy FAQ Data
const faqData = [
  {
    id: 1,
    question: "How do I book a travel package?",
    answer: "You can book a package directly through our website by selecting your destination and dates. Alternatively, you can contact our 24/7 support team to customize a package for you."
  },
  {
    id: 2,
    question: "What is your cancellation policy?",
    answer: "We offer a flexible cancellation policy. Cancellations made 48 hours before the trip are fully refundable. For last-minute cancellations, a small processing fee may apply."
  },
  {
    id: 3,
    question: "Do you provide travel insurance?",
    answer: "Yes, all our premium packages include basic travel insurance. You can also opt for comprehensive coverage for medical emergencies and luggage protection during checkout."
  },
  {
    id: 4,
    question: "Are flights included in the packages?",
    answer: "It depends on the package tier. Our 'All-Inclusive' and 'Luxury' tiers include flights, while standard packages cover accommodation and tours only."
  },
  {
    id: 5,
    question: "Can I customize my itinerary?",
    answer: "Absolutely! We specialize in bespoke travel experiences. After booking, you will be assigned a travel concierge who will help tailor the itinerary to your preferences."
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and direct bank transfers. We also offer EMI options for packages above $2000."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle Accordion Logic
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Search Filter Logic
  const filteredFAQs = faqData.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 mb-10">
            Have questions? We're here to help. Search for answers below or browse our most common queries about booking, flights, and more.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for answers (e.g., refund, booking)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-700"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div 
                  key={faq.id} 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                    ${openIndex === index ? 'border-blue-200 shadow-lg ring-1 ring-blue-100' : 'border-slate-100 shadow-sm hover:border-blue-100'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-semibold text-lg transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                      {faq.question}
                    </span>
                    <span className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>
                  
                  {/* Smooth Collapse Animation with max-height */}
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-slate-500">
                <p>No matching questions found.</p>
              </div>
            )}
          </div>

          {/* Contact Support Box */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors shadow-lg inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Get in Touch
              </button>
            </div>
            
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}