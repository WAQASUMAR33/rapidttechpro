'use client'
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const heroSectionRef = useRef(null); // Reference for the HeroSection div

    // Track mouse movement and control dialog visibility
    useEffect(() => {
        const handleMouseMove = (event) => {
            if (heroSectionRef.current && heroSectionRef.current.contains(event.target)) {
                // If not hovering over "Chat with Whatsapp" button, show the dialog
                if (!event.target.closest(".chat-button")) {
                    setMousePosition({ x: event.clientX, y: event.clientY });
                    setIsDialogVisible(true);
                } else {
                    setIsDialogVisible(false);
                }
            }
        };

        const handleMouseLeave = () => {
            // Hide dialog when mouse leaves HeroSection
            setIsDialogVisible(false);
        };

        const handleMouseOut = (event) => {
            // Hide dialog if the mouse pointer goes outside of the window
            if (event.clientX < 0 || event.clientY < 0 || event.clientX > window.innerWidth || event.clientY > window.innerHeight) {
                setIsDialogVisible(false);
            }
        };

        // Add event listeners for mouse movement, mouse leave, and mouse out
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseout", handleMouseOut);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <div
            ref={heroSectionRef}
            className="h-screen bg-[url('/images/herosection.png')] bg-contain w-full overflow-hidden"
        >
            {/* Chat with Whatsapp Button */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-44 w-10 bg-bluish flex rounded-r-lg items-center justify-center chat-button cursor-pointer">
                <span className="text-white transform -rotate-90 whitespace-nowrap">
                    Chat with Whatsapp
                </span>
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-center items-center h-full mx-auto w-full">
                <h1 className="max-w-2xl mx-auto text-7xl font-bold text-white">
                    We are a <span className="text-bluish">Software Development</span>
                    <br />
                    company.
                </h1>
                <h2 className="max-w-2xl mx-auto text-2xl tracking-wide text-white mt-4">
                    We are your trusted development partner with just one goal in focus: to build products that generate a lasting, profitable impact.
                </h2>
            </div>

            {/* Clients We've Served */}
            <div className="absolute bottom-4 left-12 gap-2 flex justify-center items-center text-xl text-white">
                <div className="h-4 w-4 rounded-full bg-bluish"></div>
                Clients We've Served
            </div>

            {/* Popup Dialog */}
            {isDialogVisible && (
                <a href="/" className="pointer">
                    <div
                        className="absolute h-44 w-44 bg-bluish p-6 flex flex-col justify-center items-center text-xl text-white rounded-full transition-opacity duration-300"
                        style={{
                            top: mousePosition.y + 20,
                            left: mousePosition.x + 20,
                            pointerEvents: 'none', // Prevents interaction blocking
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <FaArrowRight className="transform -rotate-45 mb-2" />
                        Let's Discuss Your Idea
                    </div>
                </a>
            )}
        </div>
    );
}
