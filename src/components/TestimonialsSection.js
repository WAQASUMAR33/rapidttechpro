'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';

const REVIEWS_DATA = [
    {
        id: 1,
        name: "Clark Kimberly A. Dallas",
        role: "Founder & Product Owner",
        company: "Vivid Health Systems",
        location: "United States",
        countryCode: "US",
        flag: "🇺🇸",
        category: "Healthcare & Mobile",
        rating: 5,
        review: "RapidTechPro exceeded our expectations in building our cross-platform healthcare app. The project manager maintained daily transparency via Slack and Zoom, navigating strict App Store and Google Play compliance effortlessly. Their architectural knowledge and dedication made all the difference.",
        projectTitle: "Cross-Platform Telehealth & Remote Monitoring System",
        techStack: ["React Native", "Node.js", "AWS HIPAA Cloud", "WebRTC"],
        metrics: { label: "Beta Signups", value: "25,000+" },
        source: "Clutch Verified",
        sourceLogo: "/business/clutch.png",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    },
    {
        id: 2,
        name: "Jackie Dallas",
        role: "Director of Digital Engineering",
        company: "NextGen Logistics",
        location: "United Kingdom",
        countryCode: "GB",
        flag: "🇬🇧",
        category: "Enterprise & ERP",
        rating: 5,
        review: "RapidTechPro provided end-to-end development in a remarkably timely manner. They refactored our legacy inventory tracking into a high-throughput ERP that reduced system latency by over 60%. The team provided exceptional workflow agility and continuous communication throughout every sprint.",
        projectTitle: "High-Throughput Fleet & Multi-Branch ERP Platform",
        techStack: ["Next.js", "PostgreSQL", "Docker", "Microservices"],
        metrics: { label: "Operational Speed", value: "+60% Faster" },
        source: "GoodFirms Top Developer",
        sourceLogo: "/business/goodfirms.png",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Hamed Al Zadjal",
        role: "Digital Transformation Manager",
        company: "Gulf Retail Holdings",
        location: "United Arab Emirates",
        countryCode: "AE",
        flag: "🇦🇪",
        category: "Commerce & POS",
        rating: 5,
        review: "The engagement exceeded our internal benchmarks. RapidTechPro tackled our multi-store POS and cloud synchronization challenge with sheer competence. They worked within a demanding scope and went above and beyond to ensure 99.98% offline uptime across our branch network.",
        projectTitle: "Cloud & Offline Unified POS Retail Architecture",
        techStack: ["React", "Express", "SQLite Offline", "Stripe API"],
        metrics: { label: "Uptime Guaranteed", value: "99.98%" },
        source: "Clutch Verified",
        sourceLogo: "/business/clutch.png",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    },
    {
        id: 4,
        name: "Geoffrey Anderson",
        role: "Co-Founder & Chief Technology Officer",
        company: "CloudScale Analytics",
        location: "Canada",
        countryCode: "CA",
        flag: "🇨🇦",
        category: "AI & Custom Software",
        rating: 5,
        review: "RapidTechPro produced clean, highly maintainable code. When unexpected third-party API bottlenecks arose, their senior engineers diagnosed the root cause and implemented optimized caching within 24 hours. A truly reliable development partner for any venture building to scale.",
        projectTitle: "Real-Time Big Data Analytics & Forecasting Dashboard",
        techStack: ["Python", "FastAPI", "Next.js 14", "Redis Cache"],
        metrics: { label: "Query Acceleration", value: "4.8x Speed" },
        source: "GoodFirms Top Developer",
        sourceLogo: "/business/goodfirms.png",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    },
];

function getInitials(name = '') {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

export default function TestimonialsSection() {
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isAutoplay, setIsAutoplay] = useState(true);
    const autoplayTimerRef = useRef(null);

    const categories = ['All', 'Healthcare & Mobile', 'Enterprise & ERP', 'Commerce & POS', 'AI & Custom Software'];

    const filteredReviews = selectedCategory === 'All' 
        ? REVIEWS_DATA 
        : REVIEWS_DATA.filter(r => r.category === selectedCategory);

    // Keep currentIndex within bounds if category filter changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedCategory]);

    // Autoplay logic
    useEffect(() => {
        if (!isAutoplay) return;
        autoplayTimerRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % filteredReviews.length);
        }, 7000);
        return () => clearInterval(autoplayTimerRef.current);
    }, [isAutoplay, filteredReviews.length]);

    const activeReview = filteredReviews[currentIndex] || filteredReviews[0];

    const handlePrev = () => {
        setIsAutoplay(false);
        setCurrentIndex(prev => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIsAutoplay(false);
        setCurrentIndex(prev => (prev + 1) % filteredReviews.length);
    };

    return (
        <section 
            className="bg-[#0b0c0d] text-white relative overflow-hidden" 
            id="reviews"
            aria-label="Client Reviews"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
        >
            {/* Subtle architectural ambient lights */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0FB5B7]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0FB5B7]/8 rounded-full blur-[160px] pointer-events-none" />

            <div className="site-full-grid py-14 md:py-24 lg:py-[130px] relative z-10">
                <div className="site-full-grid-inner">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/50">
                            Client Reviews
                        </p>
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-white/80 border border-white/10">
                            <FaCheckCircle className="text-[#0FB5B7] text-[10px]" />
                            100% Verified Outcomes
                        </span>
                    </div>

                    <div className="h-px w-full bg-white/15" />

                    {/* Header: Title + Ratings Summary Badges */}
                    <div className="mt-10 sm:mt-12 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                        <div>
                            <h2 className="max-w-[620px] text-[30px] font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[48px]">
                                <span className="text-white/45">What Clients Say </span>
                                When Systems Go Live
                            </h2>
                            <p className="mt-3 text-[15px] sm:text-[16px] text-white/60 max-w-xl font-medium leading-relaxed">
                                Real founders, CTOs, and digital leaders sharing their journey of building and scaling mission-critical platforms with RapidTechPro.
                            </p>
                        </div>

                        {/* Cubix-style Trust Ratings Badges */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-[#141517] p-3 sm:p-4 rounded-2xl border border-white/10 shadow-lg">
                            {/* Clutch Badge */}
                            <div className="flex items-center gap-3 pr-4 border-r border-white/10">
                                <img src="/business/clutch.png" alt="Clutch Reviews" className="h-5 w-auto object-contain brightness-0 invert" loading="lazy" />
                                <div>
                                    <div className="flex items-center text-[#0FB5B7] text-xs gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-[11px]" />
                                        ))}
                                    </div>
                                    <div className="text-[11px] text-white/70 font-semibold tracking-wider uppercase mt-0.5">
                                        5.0 Clutch (50+)
                                    </div>
                                </div>
                            </div>

                            {/* Google Rating */}
                            <div className="flex items-center gap-3">
                                <img src="/business/google.png" alt="Google Reviews" className="h-5 w-auto object-contain" loading="lazy" />
                                <div>
                                    <div className="flex items-center text-[#0FB5B7] text-xs gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-[11px]" />
                                        ))}
                                    </div>
                                    <div className="text-[11px] text-white/70 font-semibold tracking-wider uppercase mt-0.5">
                                        4.9 / 5.0 Rating
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filter Category Pills */}
                    <div className="mt-10 flex items-center justify-between gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex items-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                                        selectedCategory === cat
                                            ? 'bg-white text-black shadow-md'
                                            : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] hover:text-white border border-white/10'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Next/Prev Navigation Buttons */}
                        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
                            <button
                                type="button"
                                onClick={handlePrev}
                                aria-label="Previous review"
                                className="h-10 w-10 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                            >
                                <FaChevronLeft className="text-xs" />
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                aria-label="Next review"
                                className="h-10 w-10 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                            >
                                <FaChevronRight className="text-xs" />
                            </button>
                        </div>
                    </div>

                    {/* Modern Cubix-Style Testimonial Showcase Card */}
                    <div className="mt-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeReview.id}
                                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -25, scale: 0.98 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden rounded-3xl border border-[#2a2a2a] bg-[#141416] shadow-2xl group transition-all duration-300 hover:border-[#0FB5B7]/40"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
                                    {/* Left Content Area */}
                                    <div className="p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between">
                                        <div>
                                            {/* Top Client Bio Header */}
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative">
                                                        <img
                                                            src={activeReview.image}
                                                            alt={activeReview.name}
                                                            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 ring-2 ring-white/15"
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-base sm:text-lg font-bold text-white leading-snug">
                                                                {activeReview.name}
                                                            </span>
                                                            <a
                                                                href="https://linkedin.com"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={`LinkedIn profile for ${activeReview.name}`}
                                                                className="h-5 w-5 rounded-full bg-[#0077b5]/20 hover:bg-[#0077b5] text-[#0077b5] hover:text-white flex items-center justify-center transition-all"
                                                            >
                                                                <FaLinkedinIn className="text-[10px]" />
                                                            </a>
                                                        </div>
                                                        <p className="text-xs sm:text-sm font-medium text-gray-400 mt-0.5">
                                                            {activeReview.role} • <span className="text-white/80">{activeReview.company}</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Country / Region Tag */}
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-white/80">
                                                    <span>{activeReview.flag}</span>
                                                    <span>{activeReview.location}</span>
                                                </div>
                                            </div>

                                            {/* Project Scope Eyebrow */}
                                            <div className="mb-4">
                                                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#0FB5B7] bg-[#0FB5B7]/10 px-3 py-1 rounded-md border border-[#0FB5B7]/20">
                                                    Delivered Project
                                                </span>
                                                <h3 className="mt-2.5 text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                                                    {activeReview.projectTitle}
                                                </h3>
                                            </div>

                                            {/* Testimonial Quote */}
                                            <div className="relative mt-6">
                                                <FaQuoteLeft className="text-white/10 text-4xl absolute -top-5 -left-2 pointer-events-none" />
                                                <p className="relative text-[16px] sm:text-[18px] md:text-[20px] text-white/90 font-normal leading-[1.6] tracking-tight">
                                                    &ldquo;{activeReview.review}&rdquo;
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Tech Stack Tags */}
                                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-xs text-white/50 font-semibold mr-1">Stack:</span>
                                                {activeReview.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 rounded-md bg-white/[0.06] text-white/80 text-[12px] font-medium border border-white/[0.08]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-2 text-xs font-bold text-[#0FB5B7]">
                                                <span>★★★★★</span>
                                                <span className="text-white/60">{activeReview.source}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Visual / Metric Architecture Panel */}
                                    <div className="bg-[#18191c] border-t lg:border-t-0 lg:border-l border-[#2a2a2a] p-8 sm:p-10 md:p-12 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-8">
                                                <span className="text-xs uppercase tracking-widest font-bold text-white/40">
                                                    Project Impact
                                                </span>
                                                <img
                                                    src={activeReview.sourceLogo}
                                                    alt={activeReview.source}
                                                    className="h-5 w-auto object-contain brightness-0 invert opacity-60"
                                                    loading="lazy"
                                                />
                                            </div>

                                            {/* Big Impact Metric */}
                                            <div className="bg-[#0b0c0d] p-6 rounded-2xl border border-white/10 mb-6">
                                                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                                                    {activeReview.metrics.label}
                                                </p>
                                                <p className="text-3xl sm:text-4xl font-extrabold text-[#0FB5B7] mt-1 tracking-tight">
                                                    {activeReview.metrics.value}
                                                </p>
                                                <p className="text-xs text-white/40 mt-2">
                                                    Delivered on-time, fully audited, production-ready release.
                                                </p>
                                            </div>

                                            {/* Key Deliverables Checklist */}
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2.5 text-xs text-white/80">
                                                    <FaCheckCircle className="text-[#0FB5B7] text-sm shrink-0" />
                                                    <span>100% Strict NDA &amp; Complete Source Code Ownership</span>
                                                </div>
                                                <div className="flex items-center gap-2.5 text-xs text-white/80">
                                                    <FaCheckCircle className="text-[#0FB5B7] text-sm shrink-0" />
                                                    <span>Scalable Microservices / Cloud-Native Architecture</span>
                                                </div>
                                                <div className="flex items-center gap-2.5 text-xs text-white/80">
                                                    <FaCheckCircle className="text-[#0FB5B7] text-sm shrink-0" />
                                                    <span>Enterprise Security &amp; Continuous SLA Support</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Action Button */}
                                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                            <button
                                                type="button"
                                                onClick={() => dispatch(openPopup())}
                                                className="text-xs sm:text-sm font-bold text-white hover:text-[#0FB5B7] underline decoration-2 underline-offset-8 transition-colors flex items-center gap-2 cursor-pointer"
                                            >
                                                Request Similar Solution &rarr;
                                            </button>
                                            <span className="text-[12px] font-mono text-white/40">
                                                0{currentIndex + 1} / 0{filteredReviews.length}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Client Avatars Quick Switcher Bar */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                        {filteredReviews.map((rev, idx) => (
                            <button
                                key={rev.id}
                                type="button"
                                onClick={() => {
                                    setIsAutoplay(false);
                                    setCurrentIndex(idx);
                                }}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-300 cursor-pointer ${
                                    currentIndex === idx
                                        ? 'bg-[#18191c] border-2 border-[#0FB5B7] shadow-lg shadow-[#0FB5B7]/10'
                                        : 'bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] opacity-70 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={rev.image}
                                    alt={rev.name}
                                    className="h-8 w-8 rounded-full object-cover"
                                    loading="lazy"
                                />
                                <div className="text-left hidden sm:block">
                                    <p className={`text-xs font-bold leading-tight ${currentIndex === idx ? 'text-[#0FB5B7]' : 'text-white'}`}>
                                        {rev.name}
                                    </p>
                                    <p className="text-[10px] text-white/40 font-medium">
                                        {rev.company}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
