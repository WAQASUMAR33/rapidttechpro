'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FALLBACK = [
    {
        id: 1,
        review: "RapidTechPro managed to provide successful support and development in a timely manner. The team provided excellent workflow and communication throughout the project.",
        name: "Jackie Dallas",
        role: "Director",
        ratings: 5,
        image: null,
    },
    {
        id: 2,
        review: "The engagement met the expectations of the internal team. Cubix successfully worked within the robust scope, often going above and beyond to ensure client satisfaction.",
        name: "Hamed Al Zadjal",
        role: "Digital Manager",
        ratings: 5,
        image: null,
    },
    {
        id: 3,
        review: "RapidTechPro produced clean code and the app got positive reviews. The assigned resources were attentive and fixed problems within a day.",
        name: "Geoffrey Anderson",
        role: "Co-Founder and CSO",
        ratings: 5,
        image: null,
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
                const res = await fetch(`${apiBaseUrl}/api/testimonials`, {
                    headers: { 'x-api-key': apiKey },
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                let items = [];
                if (Array.isArray(data)) items = data;
                else if (data?.data && Array.isArray(data.data)) items = data.data;
                else if (data?.testimonials && Array.isArray(data.testimonials)) items = data.testimonials;
                if (items.length > 0) setTestimonials(items);
            } catch (err) {
                console.error('Testimonials fetch error:', err);
                // keep fallback silently
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, [apiBaseUrl, apiKey]);

    return (
        <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our clients simply love <span className="text-[#0FB5B7]">what we do</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                        Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
                    </p>
                    {/* Rating Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        <div className="flex items-center gap-3">
                            <img src="/business/clutch.png" alt="Clutch" className="h-8 md:h-10 brightness-0 invert" />
                            <div className="text-left">
                                <div className="flex text-red-500 text-sm">★★★★★</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">52 Reviews</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/business/goodfirms.png" alt="GoodFirms" className="h-8 md:h-10 brightness-0 invert" />
                            <div className="text-left">
                                <div className="flex text-blue-500 text-sm">★★★★★</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">32 Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials List */}
                <div className="space-y-6 max-w-5xl mx-auto">
                    {loading ? (
                        // Skeleton loading
                        [...Array(3)].map((_, i) => (
                            <div key={i} className="bg-gray-900 border border-gray-800 rounded-[24px] p-8 md:p-10 animate-pulse">
                                <div className="h-4 bg-gray-700 rounded w-full mb-3" />
                                <div className="h-4 bg-gray-700 rounded w-4/5 mb-3" />
                                <div className="h-4 bg-gray-700 rounded w-3/5 mb-8" />
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-700 rounded-full" />
                                    <div className="space-y-2">
                                        <div className="h-3 bg-gray-700 rounded w-32" />
                                        <div className="h-3 bg-gray-700 rounded w-20" />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        testimonials.map((item, index) => (
                            <motion.div
                                key={item.id ?? index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-black border border-gray-800 rounded-[24px] p-8 md:p-10 flex flex-col gap-8 hover:border-[#0FB5B7]/40 transition-colors duration-300"
                            >
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal italic">
                                    &ldquo;{item.review}&rdquo;
                                </p>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-gray-800">
                                    <div className="flex items-center gap-4">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#0FB5B7]/30"
                                                onError={e => { e.target.style.display = 'none'; }}
                                            />
                                        ) : (
                                            <div className="bg-[#0FB5B7] w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg">
                                                {getInitials(item.name)}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white text-base">
                                                {item.name}{item.role ? `, ${item.role}` : ''}
                                            </span>
                                            <div className="flex text-yellow-400 text-sm mt-1">
                                                {[...Array(Math.min(Number(item.ratings) || 5, 5))].map((_, i) => (
                                                    <span key={i}>★</span>
                                                ))}
                                            </div>
                                        </div>
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
