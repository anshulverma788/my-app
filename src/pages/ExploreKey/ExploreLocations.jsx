// src/pages/ExploreKey/ExploreLocations.jsx

import React, { useState } from "react";
import { locationsData } from "../../data/LocationsData";
import { Calendar, CheckCircle, ArrowRight } from "lucide-react";
import TourModal from "../../components/ui/TourModal";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ExploreLocations = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (location) => {
        setSelectedLocation(location);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedLocation(null), 300);
    };

    return (
        <div className="py-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Explore Key Locations</h2>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Left Side: Auto Slider (Swiper) - [SAME AS BEFORE] */}
                <div className="lg:w-2/3 min-w-0">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 2.2, spaceBetween: 24 },
                        }}
                        className="pb-10 px-2"
                    >
                        {locationsData.map((location) => (
                            <SwiperSlide key={location.id} className="h-auto pb-6">
                                <div
                                    onClick={() => handleOpenModal(location)}
                                    className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full group"
                                >
                                    <div className="h-48 w-full overflow-hidden relative">
                                        <img
                                            src={location.image}
                                            alt={location.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-orange-600 transition-colors">
                                                {location.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex items-center text-orange-500 text-sm font-medium bg-orange-50 px-2 py-1 rounded-md">
                                                <Calendar size={14} className="mr-1.5" />
                                                <span>{location.duration}</span>
                                            </div>
                                            <span className="text-xs font-bold text-blue-600 group-hover:underline">View Details</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right Side: PREMIUM GOLD CUSTOMIZE CARD (UPDATED) */}
                {/* Right Side: Customize Card (Same as photo) */}
                <div className="lg:w-1/3 min-w-[300px]">
                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 h-full flex flex-col justify-center relative overflow-hidden">

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-emerald-100 rounded-full opacity-50 blur-xl"></div>

                        {/* Badge */}
                        <span className="bg-emerald-200 text-emerald-800 text-xs font-bold px-2 py-1 rounded w-fit mb-3">
                            Flexible Package
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-1">Want to customize?</h3>
                        <p className="text-emerald-800 font-bold text-lg mb-4">Design your own Shimla Trip</p>

                        {/* List */}
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start text-sm text-gray-600">
                                <CheckCircle size={16} className="text-emerald-600 mr-2 mt-0.5 shrink-0" />
                                Upgrade to 4★ / 5★ hotel.
                            </li>
                            <li className="flex items-start text-sm text-gray-600">
                                <CheckCircle size={16} className="text-emerald-600 mr-2 mt-0.5 shrink-0" />
                                Add extra night in Shimla.
                            </li>
                            <li className="flex items-start text-sm text-gray-600">
                                <CheckCircle size={16} className="text-emerald-600 mr-2 mt-0.5 shrink-0" />
                                Include Narkanda / Chail visit.
                            </li>
                        </ul>

                        {/* Experts Section */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <img
                                        key={i}
                                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                        alt="expert"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-emerald-800 font-bold">
                                Talk to our Himachal experts
                            </p>
                        </div>

                        {/* Button */}
                        <button className="bg-emerald-600 text-white w-full py-3 rounded-lg font-bold flex items-center justify-center hover:bg-emerald-700 transition-colors">
                            Request Callback <ArrowRight size={18} className="ml-2" />
                        </button>
                    </div>
                </div>

            </div>

            {/* MODAL COMPONENT */}
            <TourModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                data={selectedLocation}
            />

        </div>
    );
};

export default ExploreLocations;