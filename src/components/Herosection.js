'use client';
import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
import Link from "next/link";

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
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />

            <div className="relative flex flex-col justify-end h-full w-full site-full-grid">
                <div className="site-full-grid-inner pb-16 md:pb-24 lg:pb-32 pt-40 md:pt-48 lg:pt-56">
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
                    <div className="h-px w-full bg-white/25 mb-10 sm:mb-12" />

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        {/* Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="max-w-[700px]"
                        >
                            <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-bold leading-[1.08] tracking-tight text-white">
                                <span className="text-grey">Engineering Next-Gen</span>{" "}
                                Custom Software & Mobile Applications.
                            </h1>
                        </motion.div>

                        {/* Right side CTA + Subtext */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="flex flex-col gap-6 max-w-[460px] lg:pb-2"
                        >
                            <p className="text-[16px] sm:text-[18px] font-medium leading-snug text-white/70">
                                <span className="text-white">Empowering ambitious businesses globally.</span>{" "}
                                We design and build enterprise web platforms, native iOS & Android apps, ERPs, and automated workflows engineered to outperform your competition.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {/* Primary CTA */}
                                <button
                                    onClick={() => dispatch(openPopup())}
                                    className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[46px] pr-5 text-[13px] border border-white/25 bg-transparent hover:bg-white/5"
                                >
                                    <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[38px] bg-[#0FB5B7]" />
                                    <span className="relative z-10 flex items-center gap-2.5">
                                        <span className="flex shrink-0 items-center justify-center h-[38px] w-[38px]">
                                            <FaArrowRight className="text-white text-xs -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                                        </span>
                                        <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-white/80 group-hover:text-white whitespace-nowrap">
                                            Book Free Consultancy
                                        </span>
                                    </span>
                                </button>

                                {/* Secondary CTA */}
                                <Link
                                    href="/work"
                                    className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[46px] pr-5 text-[13px] border border-white/25 bg-transparent hover:bg-white/5"
                                >
                                    <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[38px] bg-white" />
                                    <span className="relative z-10 flex items-center gap-2.5">
                                        <span className="flex shrink-0 items-center justify-center h-[38px] w-[38px]">
                                            <FaPlay className="text-black text-[10px] ml-0.5" />
                                        </span>
                                        <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-white/80 group-hover:text-black whitespace-nowrap">
                                            See Our Work
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats bar at bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.7 }}
                        className="mt-16 md:mt-20 flex flex-wrap items-center gap-8 md:gap-16 border-t border-white/10 pt-8"
                    >
                        <div>
                            <span className="text-[32px] md:text-[48px] font-bold text-white tracking-tight leading-none">149+</span>
                            <p className="text-[13px] font-medium text-white/50 mt-1 uppercase tracking-wider">Completed Projects</p>
                        </div>
                        <div>
                            <span className="text-[32px] md:text-[48px] font-bold text-white tracking-tight leading-none">12+</span>
                            <p className="text-[13px] font-medium text-white/50 mt-1 uppercase tracking-wider">Talented Professionals</p>
                        </div>
                        <div>
                            <span className="text-[32px] md:text-[48px] font-bold text-white tracking-tight leading-none">100+</span>
                            <p className="text-[13px] font-medium text-white/50 mt-1 uppercase tracking-wider">Satisfied Clients</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
