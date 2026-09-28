'use client';
import React from "react";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
import Link from "next/link";

// User-specified client firms with clean, transparent backgrounds and high-contrast white typography
const clientFirms = [
    {
        name: "Punjab University of Technology Rasul",
        src: "/companieslogo/put_dark_to_white.png",
    },
    {
        name: "Spares on Wheels",
        src: "/companieslogo/autsparepart_dark_to_white.png",
    },
    {
        name: "Apple Legal Solutions",
        src: "/companieslogo/applelegal_dark_to_white.png",
    },
    {
        name: "Maker4U",
        src: "/companieslogo/maker4u_dark_to_white.png",
    },
    {
        name: "CouponRi",
        src: "/companieslogo/couponri_dark_to_white.png",
    },
];

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
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />

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
                            <p className="mb-4 sm:mb-5 text-left lg:text-right text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
                                TRUSTED BY GLOBAL BRANDS, ACROSS EVERY INDUSTRY
                            </p>

                            {/* Desktop & Tablet: Clean Frosted Glass Cards */}
                            <div className="hidden sm:flex flex-wrap lg:justify-end gap-3 max-w-[620px] lg:ml-auto">
                                {clientFirms.map((firm, idx) => (
                                    <div
                                        key={idx}
                                        className="flex h-[52px] md:h-[56px] items-center justify-center rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 hover:border-[#0FB5B7]/50 px-4 py-2 transition-all duration-300 hover:scale-105 shadow-md shadow-black/20 group backdrop-blur-sm"
                                        title={firm.name}
                                    >
                                        <Image
                                            src={firm.src}
                                            alt={firm.name}
                                            width={150}
                                            height={40}
                                            className="max-h-[32px] md:max-h-[36px] w-auto max-w-[130px] md:max-w-[145px] object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Grid */}
                            <div className="grid grid-cols-2 gap-2.5 sm:hidden w-full">
                                {clientFirms.map((firm, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex h-[48px] items-center justify-center rounded-lg bg-white/[0.08] border border-white/15 px-3 py-1.5 shadow-sm backdrop-blur-sm ${
                                            idx === 4 ? 'col-span-2 max-w-[200px] mx-auto w-full' : ''
                                        }`}
                                        title={firm.name}
                                    >
                                        <Image
                                            src={firm.src}
                                            alt={firm.name}
                                            width={130}
                                            height={34}
                                            className="max-h-[28px] w-auto max-w-[120px] object-contain"
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
