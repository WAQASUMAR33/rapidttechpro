'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FALLBACK = [
    {
        id: 1,
        review: "We are very happy with the application. The app allows relative by Appstore and Playstore approval. The project manager communicated primarily on Zoom and Slack, frequently providing updates. Above all, their genuine interest in the project and in-depth knowledge in this field were notable.",
        name: "Clark Kimberly A. Dallas",
        role: "Founder",
        ratings: 5,
        image: null,
        companyLogo: "/business/clutch.png" // Placeholder or dynamic
    },
    {
        id: 2,
        review: "RapidTechPro managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.",
        name: "Jackie Dallas",
        role: "Director",
        ratings: 5,
        image: null,
        companyLogo: "/business/goodfirms.png"
    },
    {
        id: 3,
        review: "The engagement met the expectations of the internal team. RapidTechPro successfully worked within the robust scope, often going above and beyond to ensure client satisfaction. The team provides clients with a high level of support while still working quickly and creatively.",
        name: "Hamed Al Zadjal",
        role: "Digital Manager",
        ratings: 5,
        image: null,
        companyLogo: "/business/clutch.png"
    },
    {
        id: 4,
        review: "RapidTechPro produced clean code and the app got positive reviews. While there were staffing and language issues, the overall experience was positive. The assigned resources were attentive and fixed problems within a day.",
        name: "Geoffrey Anderson",
        role: "Co-Founder and CEO",
        ratings: 5,
        image: null,
        companyLogo: "/business/goodfirms.png"
    },
];

function getInitials(name = '') {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

export default function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState(FALLBACK);
    const [loading, setLoading] = useState(true);

    const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
    const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch('/api/testimonials', { cache: 'no-store' });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                let items = [];
                if (Array.isArray(data)) items = data;
                else if (data?.data && Array.isArray(data.data)) items = data.data;
                else if (data?.testimonials && Array.isArray(data.testimonials)) items = data.testimonials;
                if (items.length > 0) setTestimonials(items);
            } catch (err) {
                // Silently fall back to static data
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    return (
        <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-[-10%] w-[40%] h-full bg-[#0FB5B7]/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
            <div className="absolute bottom-0 right-[-10%] w-[40%] h-full bg-[#0FB5B7]/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
                        Our clients simply love <span className="text-[#0FB5B7]">what we do</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                        Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
                    </p>
                    {/* Rating Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        <div className="flex items-center gap-4">
                            <span className="text-white font-bold text-2xl">C</span>
                            <div className="text-left">
                                <div className="flex text-red-600 text-sm">★★★★★</div>
                                <div className="text-[10px] text-white font-bold uppercase tracking-widest">52 Reviews</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-white font-bold text-2xl font-serif">f</span>
                            <div className="text-left">
                                <div className="flex text-blue-600 text-sm">★★★★★</div>
                                <div className="text-[10px] text-white font-bold uppercase tracking-widest">32 Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials List */}
                <div className="space-y-12 max-w-6xl mx-auto">
                    {loading ? (
                        // Skeleton loading
                        [...Array(3)].map((_, i) => (
                            <div key={i} className="bg-[#0c0c0c] border border-gray-800 rounded-[24px] p-8 md:p-10 animate-pulse">
                                <div className="h-4 bg-gray-700 rounded w-full mb-3" />
                                <div className="h-4 bg-gray-700 rounded w-4/5 mb-3" />
                                <div className="h-4 bg-gray-700 rounded w-3/5 mb-8" />
                            </div>
                        ))
                    ) : (
                        testimonials.map((item, index) => (
                            <motion.div
                                key={item.id ?? index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[#050505] border border-gray-800/50 rounded-[64px] p-10 md:p-16 flex flex-col gap-10 hover:border-[#0FB5B7]/30 transition-all duration-300 group shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0FB5B7]/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#0FB5B7]/10 transition-colors"></div>

                                <p className="text-xl md:text-3xl text-gray-200 leading-relaxed font-normal tracking-tight">
                                    &ldquo;{item.review}&rdquo;
                                </p>

                                <div className="w-full border-t border-gray-800/50 pt-6 mt-2 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-gray-800"
                                                    onError={e => { e.target.style.display = 'none'; }}
                                                />
                                            ) : (
                                                <div className="bg-[#2a2a2a] w-14 h-14 rounded-full flex items-center justify-center text-gray-400 font-medium text-lg border border-gray-800 group-hover:bg-[#0FB5B7] group-hover:text-black transition-colors">
                                                    {getInitials(item.name)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white text-base leading-tight group-hover:text-[#0FB5B7] transition-colors">
                                                {item.name}, <span className="text-gray-400 font-medium text-[13px]">{item.role}</span>
                                            </span>
                                            <div className="flex text-yellow-500 text-xs mt-1.5 gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i}>★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company Logo on Right */}
                                    <div className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                        <img
                                            src={item.companyLogo || "/business/clutch.png"}
                                            alt="Project Logo"
                                            className="h-6 md:h-8 w-auto object-contain"
                                            onError={e => { e.target.style.display = 'none'; }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
