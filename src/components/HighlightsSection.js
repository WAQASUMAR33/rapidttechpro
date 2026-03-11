'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const highlightTabs = [
    { id: 'recommendations', title: 'Recommendations' },
    { id: 'meetup', title: 'Meet Up' },
    { id: 'life', title: 'Life at RapidTechPro' },
];

const highlightsData = {
    recommendations: {
        featured: {
            title: "John Boccuzzi spoke about the entrepreneurial...",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg", // Placeholder
        },
        videos: [
            { id: 1, title: "RapidTechPro Reviews & Testimonials Greg...", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" },
            { id: 2, title: "RapidTechPro Reviews & Testimonials - Karen...", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" },
        ]
    },
    meetup: {
        featured: {
            title: "Internal Tech Meetup 2024",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        },
        videos: [
            { id: 3, title: "Design Sprint Highlights", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" },
        ]
    },
    life: {
        featured: {
            title: "Life at RapidTechPro - Annual Retreat",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        },
        videos: [
            { id: 4, title: "Office Tour 2024", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" },
        ]
    }
};

export default function HighlightsSection() {
    const [activeTab, setActiveTab] = useState('recommendations');
    const data = highlightsData[activeTab];

    return (
        <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-[70px] font-bold mb-6">
                        Our <span className="text-bluish">highlights</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/4 flex flex-col gap-3">
                        {highlightTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`text-left px-8 py-4 rounded-full text-xl md:text-2xl transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-bluish/20 via-bluish/5 to-black text-white font-bold'
                                    : 'text-gray-400 font-medium hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col md:flex-row gap-8"
                            >
                                {/* Featured Video */}
                                <div className="flex-1 group">
                                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-4 border border-gray-800">
                                        <img src={data.featured.thumbnail} alt={data.featured.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                                <FaPlay className="text-white ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-semibold leading-tight text-gray-200">
                                        {data.featured.title}
                                    </h4>
                                </div>

                                {/* List of Videos */}
                                <div className="md:w-1/2 flex flex-col gap-6">
                                    {data.videos.map((vid) => (
                                        <div key={vid.id} className="flex gap-4 group cursor-pointer">
                                            <div className="relative w-32 md:w-40 aspect-video rounded-2xl overflow-hidden border border-gray-800 shrink-0">
                                                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                        <FaPlay className="text-white text-xs ml-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h5 className="text-base md:text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                                                    {vid.title}
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
