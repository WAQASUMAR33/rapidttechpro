'use client'
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
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
        <div className="relative flex-1 w-full overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover "
                src="/video/temwork.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative flex flex-col justify-center items-center h-full w-full pt-32 bg-black bg-opacity-50">
                <div className="w-full max-w-2xl lg:max-w-4xl px-4 sm:px-12 text-left flex flex-col items-start pb-20 md:pb-32">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
                        Your Trusted <span className="text-bluish">Custom Software</span>
                        <br />
                        Development Partner.
                    </h1>
                    <p className="max-w-2xl text-base md:text-lg lg:text-xl text-white/90 mt-6 leading-relaxed">
                        Struggling with manual processes? We specialize in custom software solutions that automate your workflows — freeing you to focus on what truly matters.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10 mb-16 md:mb-20">
                        <button
                            onClick={() => dispatch(openPopup())}
                            className="group bg-bluish text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base font-bold hover:bg-[#0da0a2] transition-all shadow-lg shadow-bluish/20"
                        >
                            Book Free Consultancy <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            className="group border border-white/30 bg-white/5 backdrop-blur-md text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full flex items-center gap-3 text-sm md:text-base font-bold hover:bg-white/10 transition-all"
                        >
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center -ml-1">
                                <FaPlay className="text-[10px] ml-0.5" />
                            </div>
                            See Our Work
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className="absolute bottom-4 left-4 md:left-12 gap-2 flex justify-center items-center text-sm md:text-xl text-white">
                <div className="h-2 w-2 md:h-4 md:w-4 rounded-full bg-bluish"></div>
                Clients We've Served
            </div> */}
            {/* <div className="hidden md:flex absolute -bottom-5 opacity-90 right-8 h-[350px] w-[350px] z-30 rounded-full items-center justify-center">
                <img src="/images/think.PNG"></img>

            </div> */}

            <div
                ref={attractAreaRef}
                className="hidden md:flex  absolute -bottom-32 -right-10 h-[500px] w-[500px] z-30 rounded-full items-center justify-center"
            >
                <button onClick={() => { dispatch(openPopup()); }} className="pointer-events-auto">

                    <motion.div
                        className="h-32 w-32 md:h-[150px] md:w-[200px] bg-[url('/images/cloud.PNG')] bg-contain p-6 flex flex-col justify-center items-center md:text-base text-center text-white"
                        style={{ x: x, y: y, scale: scale }}
                        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
                        initial={{
                            backgroundImage: "url('/images/cloud.PNG')" // Initial background
                        }}
                        whileHover={{
                            backgroundImage: "url('/images/cloud2.png')", // Change to cloud2.png on hover
                            scale: 1.1, // Optional: Slightly scale the element on hover
                            color: "black", // Optional: Change text color
                            transition: { duration: 0.5 } // Smooth transition
                        }}
                    >
                        <FaArrowRight className="transform -rotate-45 mb-2" />
                        Let's Talk About Your Project

                    </motion.div>

                </button>
            </div>
        </div>
    );
}
