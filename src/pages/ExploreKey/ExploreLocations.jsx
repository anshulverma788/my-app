import React, { useState } from "react";
import { locationsData } from "../../data/LocationsData";
import TourModal from "../../components/ui/TourModal";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
        <div className="py-12 bg-white relative">
            <div className="container mx-auto  max-w-7xl">
                
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-10 text-gray-900 text-left pl-2">
                    Explore <span className="text-blue-600">Key</span> Locations
                </h2>

                <div className="w-full relative px-2">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={true} // Arrows enabled
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 }, // Exact 3 cards look
                        }}
                        className="pb-12 custom-swiper-buttons"
                    >
                        {locationsData.map((location) => (
                            <SwiperSlide key={location.id} className="h-auto">
                                <div
                                    onClick={() => handleOpenModal(location)}
                                    className="cursor-pointer group flex flex-col items-center"
                                >
                                    {/* Image Section */}
                                    <div className="w-full aspect-[4/2.4] overflow-hidden rounded-[1rem]">
                                        <img
                                            src={location.image}
                                            alt={location.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Text Section (Exactly as per image) */}
                                    <div className="mt-5 text-center">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {location.title}
                                        </h3>
                                        <p className="text-gray-500 font-medium text-base">
                                            ({location.duration})
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom CSS to style Navigation Arrows exactly white and round */}
                <style>{`
                    .swiper-button-next, .swiper-button-prev {
                        background-color: white;
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                        color: #1f2937; /* Dark gray arrow color */
                    }
                    .swiper-button-next::after, .swiper-button-prev::after {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .swiper-button-disabled {
                        opacity: 0.5;
                    }
                `}</style>

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