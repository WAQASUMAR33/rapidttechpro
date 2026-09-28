'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

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

const duplicatedAwards = [...awards, ...awards];

export default function DarkAwardsSection() {
    return (
        <section className="bg-[#000000] text-white overflow-hidden">
            <div className="site-full-grid py-14 md:py-24 lg:py-[120px]">
                <div className="site-full-grid-inner">
                    {/* Eyebrow */}
                    <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/55 sm:mb-5">
                        Awards & Recognition
                    </p>
                    <div className="h-px w-full bg-white/25" />

                    {/* Header */}
                    <div className="mt-10 flex flex-col items-start gap-6 sm:mt-12 md:flex-row md:items-end md:justify-between md:gap-10 mb-12 md:mb-16">
                        <h2 className="max-w-[560px] text-[28px] font-bold leading-[1.25] tracking-tight text-white sm:text-4xl lg:max-w-[640px] lg:text-[48px] lg:leading-[1.2]">
                            <span className="text-grey">Our awards and </span>recognitions
                        </h2>
                    </div>
                </div>
            </div>

            {/* Infinite Marquee Container - full width */}
            <div className="relative flex overflow-hidden group pb-14 md:pb-24">
                <motion.div
                    className="flex gap-4 whitespace-nowrap"
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
                            className="w-[300px] md:w-[380px] bg-white/[0.03] border border-white/[0.06] rounded-[20px] p-7 flex flex-col justify-between h-52 shrink-0 hover:border-[#0FB5B7]/30 transition-colors group/card"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center overflow-hidden border border-white/[0.08]">
                                        <img
                                            src={award.logo}
                                            alt={award.company}
                                            className="w-6 h-6 object-contain brightness-0 invert"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    </div>
                                    <span className="font-bold text-[16px] tracking-tight text-white uppercase">{award.company}</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-white/[0.05] px-3 py-1 rounded-full border border-white/[0.08]">
                                    <span className="text-[#0FB5B7] text-sm">★</span>
                                    <span className="font-bold text-sm">{award.rating}</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-white/40 text-[15px] leading-relaxed whitespace-normal line-clamp-2 font-medium">
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
