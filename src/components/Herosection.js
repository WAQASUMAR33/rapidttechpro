'use client';
import React from "react";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
import Link from "next/link";

// Primary client firms uploaded by user
const clientFirmsRow1 = [
    {
        name: "Punjab University of Technology Rasul",
        src: "/companieslogo/put_white.png",
    },
    {
        name: "Spares on Wheels",
        src: "/companieslogo/autsparepart_white.png",
    },
    {
        name: "Apple Legal Solutions",
        src: "/companieslogo/applelegal_white.png",
    },
];

const clientFirmsRow2 = [
    {
        name: "Maker4U",
        src: "/companieslogo/maker4u_white.png",
    },
    {
        name: "CouponRi",
        src: "/companieslogo/couponri_white.png",
    },
];

const allClientFirms = [...clientFirmsRow1, ...clientFirmsRow2];

export default function HeroSection() {
    const dispatch = useDispatch();

    return (
        <section className="relative min-h-screen flex flex-col justify-end w-full overflow-hidden" aria-label="Hero">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/video/temwork.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/video/poster.jpg"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/90" />

            <div className="relative flex flex-col justify-end h-full w-full site-full-grid">
                <div className="site-full-grid-inner pb-14 md:pb-20 lg:pb-24 pt-36 md:pt-44 lg:pt-52">
                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#0FB5B7] mb-4 sm:mb-5"
                    >
                        Enterprise Software • Mobile Apps • Cloud Systems
                    </motion.p>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/20 mb-8 sm:mb-12" />

                    {/* Main Hero Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
                        {/* Left Column: Headline, Paragraph, CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="lg:col-span-6 xl:col-span-6 flex flex-col gap-6"
                        >
                            <h1 className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[62px] xl:text-[68px] font-bold leading-[1.08] tracking-tight text-white">
                                <span className="text-white/70">Software, Apps &amp;</span>{" "}
                                Systems — Built to Scale
                            </h1>

                            <p className="text-[15px] sm:text-[17px] font-normal leading-relaxed text-white/75 max-w-[560px]">
                                RapidTechPro designs and engineers custom software, mobile apps, and enterprise cloud solutions for high-growth businesses. We turn ideas into technology that performs under real complexity.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                {/* Primary CTA */}
                                <button
                                    onClick={() => dispatch(openPopup())}
                                    className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[48px] pr-6 text-[13px] sm:text-[14px] border border-white/25 bg-transparent hover:bg-white/5"
                                >
                                    <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[40px] bg-[#0FB5B7]" />
                                    <span className="relative z-10 flex items-center gap-3">
                                        <span className="flex shrink-0 items-center justify-center h-[40px] w-[40px]">
                                            <FaArrowRight className="text-white text-xs -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                                        </span>
                                        <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-white/90 group-hover:text-white whitespace-nowrap">
                                            Let&apos;s Discuss Your Idea
                                        </span>
                                    </span>
                                </button>

                                {/* Secondary CTA */}
                                <Link
                                    href="/work"
                                    className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[48px] pr-6 text-[13px] sm:text-[14px] border border-white/25 bg-transparent hover:bg-white/5"
                                >
                                    <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[40px] bg-white" />
                                    <span className="relative z-10 flex items-center gap-3">
                                        <span className="flex shrink-0 items-center justify-center h-[40px] w-[40px]">
                                            <FaPlay className="text-black text-[10px] ml-0.5" />
                                        </span>
                                        <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-white/90 group-hover:text-black whitespace-nowrap">
                                            See Our Work
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column: Trusted by Global Brands / Client Firms */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="lg:col-span-6 xl:col-span-6 flex flex-col lg:items-end justify-end pt-6 lg:pt-0"
                        >
                            <p className="mb-4 sm:mb-6 text-left lg:text-right text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
                                TRUSTED BY GLOBAL BRANDS, ACROSS EVERY INDUSTRY
                            </p>

                            {/* Desktop / Tablet: 2 Rows */}
                            <div className="hidden sm:flex flex-col gap-4 md:gap-5 w-full max-w-[620px] lg:ml-auto">
                                {/* Row 1: 3 Firms */}
                                <div className="grid grid-cols-3 gap-x-4 md:gap-x-6 items-center">
                                    {clientFirmsRow1.map((firm, idx) => (
                                        <div
                                            key={idx}
                                            className="flex h-11 md:h-13 lg:h-14 items-center justify-center cursor-pointer p-1.5 transition-all duration-300 hover:scale-105"
                                            title={firm.name}
                                        >
                                            <Image
                                                src={firm.src}
                                                alt={firm.name}
                                                width={160}
                                                height={50}
                                                className="pointer-events-none max-h-full w-auto max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Row 2: 2 Firms Centered / Aligned */}
                                <div className="grid grid-cols-2 gap-x-6 md:gap-x-8 items-center max-w-[400px] lg:mr-4 lg:ml-auto">
                                    {clientFirmsRow2.map((firm, idx) => (
                                        <div
                                            key={idx}
                                            className="flex h-11 md:h-13 lg:h-14 items-center justify-center cursor-pointer p-1.5 transition-all duration-300 hover:scale-105"
                                            title={firm.name}
                                        >
                                            <Image
                                                src={firm.src}
                                                alt={firm.name}
                                                width={160}
                                                height={50}
                                                className="pointer-events-none max-h-full w-auto max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Grid: 2 columns */}
                            <div className="grid grid-cols-2 gap-4 sm:hidden w-full items-center">
                                {allClientFirms.map((firm, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex h-10 items-center justify-center p-1 ${idx === 4 ? 'col-span-2 max-w-[160px] mx-auto' : ''}`}
                                        title={firm.name}
                                    >
                                        <Image
                                            src={firm.src}
                                            alt={firm.name}
                                            width={140}
                                            height={44}
                                            className="pointer-events-none max-h-full w-auto max-w-[130px] object-contain opacity-80"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
