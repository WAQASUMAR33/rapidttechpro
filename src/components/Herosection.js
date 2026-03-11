'use client'
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
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
            <div className="relative flex flex-col justify-center items-center h-full mx-auto w-full px-4 md:px-0 pt-32 bg-black bg-opacity-50 text-center">
                <h1 className="max-w-2xl lg:max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white">
                    Your Trusted Custom <span className="text-bluish">Software Development</span>
                    <br />
                    Company.
                </h1>
                <p className="max-w-2xl lg:max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wide text-white mt-4">
                    Are you struggling with manual processes?
                    {/* <br></br> */}
                    At RapidTag Pro, we specialize in creating custom software solutions that automate your workflows, allowing you to break free from tedious, time-consuming tasks and focus on what truly matters.

                </p>
                <div className="md:hidden flex justify-center mt-8 w-full">
                    <button className="bg-bluish text-white px-6 py-3 rounded-full text-sm font-medium" onClick={() => dispatch(openPopup())}>
                        Let's Talk About Your Project
                    </button>
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
