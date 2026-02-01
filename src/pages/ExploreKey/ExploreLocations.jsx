import React, { useState, useEffect, useRef } from "react";
import { locationsData } from "../../data/LocationsData";
import TourModal from "../../components/ui/TourModal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Calendar } from "lucide-react"; // Icon import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const ExploreLocations = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isMounted = useRef(true);
    useEffect(() => {
        return () => { isMounted.current = false; };
    }, []);
    const handleOpenModal = (location) => {
        setSelectedLocation(location);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            if (isMounted.current) setSelectedLocation(null);
        }, 300);
    };
    return (
        <div className=" bg-gray-50 relative">
            <div className="container mx-auto max-w-7xl  ">
                <div className="overflow-hidden">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
                        Explore Key Locations
                    </h3>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.2} // Mobile view partial slide
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 24 }, // Adjusted to 3 for desktop for better fit, or keep 2 if preferred
                        }}
                        className="pb-10"
                    >
                        {locationsData.map((loc, idx) => (
                            <SwiperSlide key={idx} className="h-auto py-2">
                                {/* Card Component Replaced with Styled Div */}
                                <div
                                    onClick={() => handleOpenModal(loc)}
                                    className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md h-full flex flex-col group cursor-pointer transition-all duration-300 hover:shadow-xl"
                                >
                                    {/* Image Section */}
                                    <div className="h-40 sm:h-48 overflow-hidden relative">
                                        <img
                                            src={loc.image}
                                            alt={loc.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        {/* Optional Overlay on Hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                    </div>
                                    {/* Content Section */}
                                    <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-semibold text-sm sm:text-lg mb-1 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                                                {loc.title}
                                            </h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1 mt-2">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                                            {loc.duration} {/* Assuming 'duration' is the key in your data */}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* MODAL COMPONENT */}
                <TourModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    data={selectedLocation}
                />
            </div>
        </div>
    );
};
export default ExploreLocations;