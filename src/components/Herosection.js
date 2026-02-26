'use client'
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
import Image from "next/image";

export default function HeroSection() {
    const dispatch = useDispatch();
    const [isMouseInside, setIsMouseInside] = useState(false);
    const attractAreaRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useTransform(x, [-250, 0, 250], [1, 1.1, 1]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (window.innerWidth >= 768 && attractAreaRef.current) {
                const areaRect = attractAreaRef.current.getBoundingClientRect();
                const areaCenter = {
                    x: areaRect.left + areaRect.width / 2,
                    y: areaRect.top + areaRect.height / 2,
                };
                const distanceX = event.clientX - areaCenter.x;
                const distanceY = event.clientY - areaCenter.y;
                const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
                const maxDistance = areaRect.width;
                const isWithinArea = distance <= maxDistance;
                if (isWithinArea) {
                    setIsMouseInside(true);
                    const attractionFactor = 1 - Math.pow(Math.min(distance / maxDistance, 1), 2);
                    x.set(distanceX * attractionFactor * 0.6);
                    y.set(distanceY * attractionFactor * 0.6);
                } else {
                    setIsMouseInside(false);
                    x.set(0);
                    y.set(0);
                }
            } else {
                x.set(0);
                y.set(0);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
            {/* Background Image (LCP & Fallback) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/herosection.png"
                    alt="Hero Background"
                    fill
                    priority
                    quality={85}
                    className="object-cover scale-105"
                    sizes="100vw"
                />
            </div>

            {/* Background Video (Desktop only) */}
            <div className="hidden md:block absolute inset-0 z-10 w-full h-full">
                <video
                    className="w-full h-full object-cover scale-105"
                    src="/video/temwork.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Multi-layer overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#0FB5B7]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Decorative glow orbs */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0FB5B7]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative flex flex-col justify-center items-start h-full mx-auto w-full px-6 md:px-16 lg:px-24 max-w-7xl">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm px-4 py-2 rounded-full mb-6"
                >
                    <span className="w-2 h-2 bg-[#0FB5B7] rounded-full animate-pulse" />
                    Trusted by 200+ Businesses Worldwide
                </motion.div>

                {/* Headline */}
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl"
                >
                    Your Trusted{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FB5B7] to-cyan-300">
                        Custom Software
                    </span>
                    <br />
                    Development Partner.
                </h1>

                {/* Subtext */}
                <p
                    className="mt-6 text-base md:text-lg text-white/75 max-w-2xl leading-relaxed"
                >
                    Struggling with manual processes? We specialize in custom software solutions
                    that automate your workflows — freeing you to focus on what truly matters.
                </p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 mt-10"
                >
                    <button
                        onClick={() => dispatch(openPopup())}
                        className="group flex items-center gap-2 bg-[#0FB5B7] hover:bg-[#0ca3a5] text-white px-7 py-3.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#0FB5B7]/30 hover:shadow-[#0FB5B7]/50 hover:scale-105"
                    >
                        Book Free Consultancy
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <button
                        onClick={() => dispatch(openPopup())}
                        className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                    >
                        <FaPlay className="text-xs" />
                        See Our Work
                    </button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-wrap gap-6 md:gap-12 mt-12 pt-8 border-t border-white/10"
                >
                    {[
                        { value: "599+", label: "Projects Completed" },
                        { value: "200+", label: "Happy Clients" },
                        { value: "20+", label: "Expert Team" },
                    ].map((stat, i) => (
                        <div key={i} className="text-white">
                            <div className="text-2xl md:text-3xl font-bold text-[#0FB5B7]">{stat.value}</div>
                            <div className="text-[10px] md:text-sm text-white/60 mt-0.5 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Magnetic CTA button - desktop */}
            <div
                ref={attractAreaRef}
                className="hidden md:flex absolute -bottom-32 -right-10 h-[500px] w-[500px] z-30 rounded-full items-center justify-center"
            >
                <button onClick={() => { dispatch(openPopup()); }} className="pointer-events-auto relative">
                    <motion.div
                        className="h-32 w-32 md:h-[150px] md:w-[200px] p-6 flex flex-col justify-center items-center md:text-base text-center text-white relative z-10"
                        style={{ x: x, y: y, scale: scale }}
                        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
                    >
                        <Image
                            src="/images/cloud.PNG"
                            alt="Cloud background"
                            fill
                            className="object-contain -z-10"
                        />
                        <FaArrowRight className="transform -rotate-45 mb-2" />
                        Let's Talk About Your Project
                    </motion.div>
                </button>
            </div>
        </div>
    );
}
