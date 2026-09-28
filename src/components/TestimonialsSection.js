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
        companyLogo: "/business/clutch.png"
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
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const fetchTestimonials = async () => {
            try {
                const res = await fetch('/api/testimonials', {
                    cache: 'no-store',
                    signal: controller.signal,
                });
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
                clearTimeout(timeoutId);
                setLoading(false);
            }
        };
        fetchTestimonials();
        return () => {
            controller.abort();
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section className="bg-[#000000] text-white">
            <div className="site-full-grid py-14 md:py-24 lg:py-[152px]">
                <div className="site-full-grid-inner">
                    {/* Eyebrow */}
                    <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/55 sm:mb-5">
                        Client Reviews
                    </p>
                    <div className="h-px w-full bg-white/25" />

                    {/* Header */}
                    <div className="mt-10 flex flex-col items-start gap-6 sm:mt-12 md:flex-row md:items-end md:justify-between md:gap-10">
                        <h2 className="max-w-[560px] text-[28px] font-bold leading-[1.25] tracking-tight text-white sm:text-4xl lg:max-w-[640px] lg:text-[48px] lg:leading-[1.2]">
                            <span className="text-grey">Our clients simply </span>love what we do
                        </h2>

                        {/* Rating Badges */}
                        <div className="flex flex-wrap items-center gap-6 md:gap-10">
                            <div className="flex items-center gap-3">
                                <img src="/business/clutch.png" alt="Clutch" className="h-5 w-auto object-contain brightness-0 invert" loading="lazy" />
                                <div className="text-left">
                                    <div className="flex text-[#0FB5B7] text-xs gap-0.5">★★★★★</div>
                                    <div className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">52 Reviews</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/business/google.png" alt="Google" className="h-5 w-auto object-contain" loading="lazy" />
                                <div className="text-left">
                                    <div className="flex text-[#0FB5B7] text-xs gap-0.5">★★★★★</div>
                                    <div className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">4.9 Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials List */}
                    <div className="mt-12 md:mt-16 space-y-4">
                        {loading ? (
                            [...Array(3)].map((_, i) => (
                                <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-[20px] p-8 md:p-10 animate-pulse">
                                    <div className="h-4 bg-white/10 rounded w-full mb-3" />
                                    <div className="h-4 bg-white/10 rounded w-4/5 mb-3" />
                                    <div className="h-4 bg-white/10 rounded w-3/5 mb-8" />
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
                                    className="bg-white/[0.03] border border-white/[0.06] rounded-[20px] p-8 md:p-12 lg:p-14 flex flex-col gap-8 hover:border-[#0FB5B7]/30 transition-all duration-300 group relative overflow-hidden"
                                >
                                    {/* Quote */}
                                    <p className="text-[18px] md:text-[24px] lg:text-[28px] text-white/90 leading-[1.45] font-normal tracking-tight">
                                        &ldquo;{item.review}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="w-full border-t border-white/[0.06] pt-6 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                {item.image ? (
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-white/10"
                                                        onError={e => { e.target.style.display = 'none'; }}
                                                    />
                                                ) : (
                                                    <div className="bg-white/[0.08] w-12 h-12 rounded-full flex items-center justify-center text-white/60 font-semibold text-base border border-white/10 group-hover:bg-[#0FB5B7] group-hover:text-black transition-colors">
                                                        {getInitials(item.name)}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-white text-[15px] leading-tight group-hover:text-[#0FB5B7] transition-colors">
                                                    {item.name}
                                                </span>
                                                <span className="text-white/40 font-medium text-[13px] mt-0.5">
                                                    {item.role}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Company Logo on Right */}
                                        <div className="opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all">
                                            <img
                                                src={item.companyLogo || "/business/clutch.png"}
                                                alt="Project Logo"
                                                className="h-5 md:h-6 w-auto object-contain"
                                                onError={e => { e.target.style.display = 'none'; }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
