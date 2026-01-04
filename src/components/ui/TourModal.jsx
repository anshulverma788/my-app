import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Map, Bed, Bus, ChevronRight, Star, CheckCircle2, MapPin, Info, Lightbulb } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const TourModal = ({ isOpen, onClose, data }) => {
    const [activeTab, setActiveTab] = useState('activities');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && data && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
                    >

                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-white sticky top-0 z-20">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{data.title}</h2>
                                <div className="flex gap-2 mt-2 items-center">
                                    <span className="text-xs sm:text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">Himachal Pradesh</span>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-xs sm:text-sm text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded border border-orange-100">{data.duration}</span>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors bg-gray-50">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 overflow-y-auto custom-scrollbar bg-gray-50/50 flex-1">

                            {/* Tabs */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <button
                                    onClick={() => setActiveTab('activities')}
                                    className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'activities' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 ring-2 ring-blue-600 ring-offset-2' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
                                >
                                    <Map size={16} /> Activities
                                </button>
                                <button
                                    onClick={() => setActiveTab('accommodation')}
                                    className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'accommodation' ? 'bg-blue-600 text-white ring-2 ring-blue-600 ring-offset-2' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
                                >
                                    <Bed size={16} /> Accommodation
                                </button>
                                <button
                                    onClick={() => setActiveTab('transport')}
                                    className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'transport' ? 'bg-blue-600 text-white ring-2 ring-blue-600 ring-offset-2' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
                                >
                                    <Bus size={16} /> Transport
                                </button>
                            </div>

                            {/* 1. Activities Tab (UPDATED WITH EXTRA CONTENT) */}
                            {activeTab === 'activities' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    
                                    {/* Tag */}
                                    <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-md shadow-blue-200">
                                        {data.tag || "Tour Activity"}
                                    </div>

                                    {/* Activities Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                        {data.activities && data.activities.map((activity, index) => (
                                            <div key={index} className="group cursor-pointer bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                                <div className="h-40 rounded-xl overflow-hidden mb-4 relative">
                                                    <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400" }} />
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                                </div>
                                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{activity.title}</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-3">{activity.desc}</p>
                                                <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ChevronRight size={14} /></span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* ---> NEW CONTENT STARTS HERE <--- */}
                                    
                                    {/* Day Overview Box */}
                                    {data.daySummary && (
                                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-8">
                                            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                                <Info size={18} className="text-blue-600" /> Day Overview
                                            </h4>
                                            <p className="text-sm text-blue-800/80 leading-relaxed">
                                                {data.daySummary}
                                            </p>
                                        </div>
                                    )}

                                    {/* Traveler Tips Section */}
                                    {data.tips && (
                                        <div className="pb-4">
                                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <Lightbulb size={18} className="text-yellow-500 fill-yellow-500" /> 
                                                Pro Tips for Today
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {data.tips.map((tip, idx) => (
                                                    <div key={idx} className="flex items-start p-3 bg-gray-50 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-3 shrink-0"></div>
                                                        <p className="text-xs text-gray-600 font-medium leading-5">{tip}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {/* ---> NEW CONTENT ENDS HERE <--- */}

                                </div>
                            )}

                            {/* 2. Accommodation Tab (HOTEL DESIGN) */}
                            {activeTab === 'accommodation' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {data.accommodation ? (
                                        <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                                            {/* Left: Image */}
                                            <div className="w-full md:w-1/2 h-64 md:h-auto rounded-xl overflow-hidden relative shrink-0">
                                                <img 
                                                    src={data.accommodation.image} 
                                                    alt={data.accommodation.title} 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            
                                            {/* Right: Content */}
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.accommodation.title}</h3>
                                                
                                                {/* Ratings */}
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} size={16} fill={i < Math.floor(data.accommodation.rating) ? "currentColor" : "none"} className={i < Math.floor(data.accommodation.rating) ? "" : "text-gray-300"} />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm text-gray-500">{data.accommodation.reviews}</span>
                                                    <span className="text-gray-300">|</span>
                                                    <div className="flex items-center text-sm text-blue-600">
                                                        <MapPin size={14} className="mr-1" /> {data.accommodation.location}
                                                    </div>
                                                </div>

                                                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                                    {data.accommodation.desc}
                                                </p>

                                                <div className="space-y-2">
                                                    {data.accommodation.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                            <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-10 text-gray-500">No accommodation details available for this day.</div>
                                    )}
                                </div>
                            )}

                            {/* 3. Transport Tab (CAB DESIGN) */}
                            {activeTab === 'transport' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {data.transport ? (
                                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                                                    <Bus size={24} />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{data.transport.type}</span>
                                                    <h3 className="text-xl font-bold text-gray-900">{data.transport.name}</h3>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-100 my-4 pt-4">
                                                <h4 className="font-semibold text-gray-800 mb-3">Facilities for Traveler:</h4>
                                                <div className="space-y-3">
                                                    {data.transport.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-10 text-gray-500">No transport details available.</div>
                                    )}
                                </div>
                            )}

                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body 
    );
};

export default TourModal;