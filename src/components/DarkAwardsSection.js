'use client';
import React from 'react';
import { motion } from 'framer-motion';

const awards = [
    {
        id: 1,
        company: 'AppFirmsReview',
        rating: '4.8',
        logo: '/business/clutch.png',
        description: 'Ranked among the top software development companies of 2026'
    },
    {
        id: 2,
        company: 'AppFirmsReview',
        rating: '4.0',
        logo: '/business/clutch.png',
        description: 'Ranked among the top gaming app development companies of 2026'
    },
    {
        id: 3,
        company: 'RightFirms',
        rating: '4.9',
        logo: '/business/clutch.png',
        description: 'Ranked among the leading game development companies for 2026'
    },
    {
        id: 4,
        company: 'GoodFirms',
        rating: '5.0',
        logo: '/business/goodfirms.png',
        description: 'Acknowledged among the top software consulting experts 2026'
    },
    {
        id: 5,
        company: 'DESIGNRUSH',
        rating: '4.9',
        logo: '/business/clutch.png',
        description: 'Recognized among top mobile app development companies 2026'
    },
    {
        id: 6,
        company: 'Clutch',
        rating: '4.9',
        logo: '/business/clutch.png',
        description: 'Acclaimed as a top software developer 2026'
    }
];

// Duplicate the awards to create a seamless loop
const duplicatedAwards = [...awards, ...awards];

export default function DarkAwardsSection() {
    return (
        <section className="bg-black text-white py-16 md:py-24 overflow-hidden border-t border-gray-900">
            <div className="px-6 md:px-12 lg:px-24 mb-12 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Our awards and <br />
                    <span className="text-[#25CBA1]">recognitions</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                    Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!
                </p>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative flex overflow-hidden group">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{
                        x: ['0%', '-50%']
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        }
                    }}
                >
                    {duplicatedAwards.map((award, index) => (
                        <div
                            key={index}
                            className="w-[320px] md:w-[380px] bg-[#111111] border border-gray-800 rounded-[32px] p-8 flex flex-col justify-between h-56 shrink-0 hover:border-[#25CBA1]/50 transition-colors"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center overflow-hidden border border-gray-800">
                                        <img
                                            src={award.logo}
                                            alt={award.company}
                                            className="w-7 h-7 object-contain brightness-0 invert"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    </div>
                                    <span className="font-bold text-xl tracking-tight text-white uppercase">{award.company}</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-gray-800">
                                    <span className="text-[#25CBA1] text-sm">★</span>
                                    <span className="font-bold text-sm">{award.rating}</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <p className="text-gray-500 text-base leading-relaxed whitespace-normal line-clamp-2">
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
