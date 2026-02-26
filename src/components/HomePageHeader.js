'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { openPopup, closePopup } from "@/store/popupSlice";

export default function Header() {
    const dispatch = useDispatch();
    const isOpenGetinTouch = useSelector((state) => state.popup.isOpen);

    const togglePopup = () => {
        if (isOpenGetinTouch) {
            dispatch(closePopup());
        } else {
            dispatch(openPopup());
        }
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // const [isOpenGetinTouch, setisOpenGetinTouch] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [interests, setInterests] = useState([]);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const handleInterestClick = (interest) => {
        setInterests((prevInterests) => {
            // If the interest is already selected, remove it
            if (prevInterests.includes(interest)) {
                return prevInterests.filter((item) => item !== interest);
            } else {
                // Otherwise, add the interest
                return [...prevInterests, interest];
            }
        });
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
        setLastScrollY(currentScrollY);
        setIsScrolled(currentScrollY > 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const closeMegaMenu = () => setIsSolutionsOpen(false);

    return (
        <>
            <header
                className={`fixed z-50 w-full h-16 flex items-center justify-between px-4 sm:px-12 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-16"
                    } ${isScrolled ? "bg-white shadow-md text-black border-b" : "bg-transparent text-white"}`}
            >
                {/* Logo */}
                <Link href="/" className="text-xl md:text-[30px] font-bold italic flex justify-center items-center">
                    <Image src="/company/logo.png" alt="RapidTechPro Logo" width={60} height={60} className="md:h-[60px] md:w-[60px] h-[40px] w-[40px]" priority />
                    Rapid<span className={"text-bluish"}>TechPro</span>
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex space-x-6 lg:space-x-12 text-base lg:text-base relative">
                    <Link href="/">Home</Link>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <Link href="/Services" className="py-2">Services</Link>
                        {/* Full-Screen Mega Menu */}
                        {isSolutionsOpen && (
                            <div
                                className="fixed top-[100px]  inset-0 bg-white hidden md:flex justify-center items-center z-40"
                                onClick={closeMegaMenu}
                            >
                                <div
                                    className="w-full p-16 grid grid-cols-2 lg:grid-cols-5 gap-6 text-black bg-white mt-32"
                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
                                >
                                    <div className=" flex ">
                                        <div className="px-4 w-full">
                                            <div className="text-xl md:text-3xl flex justify-between font-bold w-full text-black">Solutions <FaArrowRight /></div>
                                        </div>
                                        <div className="h-24 border-r-2 "></div>

                                    </div>
                                    <div className=" flex justify-between">
                                        <div className="flex flex-col gap-4">
                                            <Link href='/Services/Ecommerce-Solutions' className="text-gray-800 hover:text-bluish">Ecommerce Solutions</Link>
                                            <Link href='/Services/HR-Solution' className="text-gray-800 hover:text-bluish">HR Solutions</Link>
                                        </div>
                                        <div className="h-24 border-r-2 "></div>
                                    </div>

                                    <div className=" flex justify-between">
                                        <div className="flex flex-col gap-4">
                                            <Link href='/Services/Mobile-Apps' className="text-gray-800 hover:text-bluish">Mobile App Solutions</Link>
                                            <Link href='/Services/UIUX-Figma' className="text-gray-800 hover:text-bluish">UI/UX - Figma Solutions</Link>
                                        </div>
                                        <div className="h-24 border-r-2 "></div>
                                    </div>

                                    <div className=" flex justify-between">
                                        <div className="flex flex-col gap-4">
                                            <Link href='/Services/Web-Development' className="text-gray-800 hover:text-bluish">Website Development Solutions</Link>
                                        </div>
                                        <div className="h-24 border-r-2 "></div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <Link href='/Services/Point-Of-Sale' className="text-gray-800 hover:text-bluish">Point Of Sale Solutions</Link>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                    <Link href="/Work">Inspire Me</Link>
                    <Link href="/Company">Company</Link>
                    {/* <Link href="/ContactUs">Contact</Link> */}
                    <Link href="/Help">Help</Link>
                    <Link href="/AboutUs">Our Team</Link>
                </nav>

                {/* Contact & Button - Desktop Only */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="tel:+923403051059" className="flex items-center gap-1 text-base lg:text-base">
                        <BsTelephone />
                        +92 340 3051059
                    </Link>
                    <button
                        className="w-24 md:w-28 h-8 rounded-full font-medium border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black"
                        onClick={() => dispatch(openPopup())}
                    >
                        Get in touch
                    </button>
                </div>

                {/* Toggle Button - Mobile Only */}
                <button className="md:hidden text-2xl" onClick={toggleSidebar}>
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Sidebar - Mobile Only */}
            <aside
                className={`fixed top-0 right-0 w-64 h-full bg-black/90 text-white transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex flex-col items-start p-6 space-y-6">
                    {/* Logo in Sidebar */}
                    <Link href="/" className="text-2xl sm:text-3xl font-bold mb-6">
                        Rapid <span className="text-bluish">TechPro.</span>
                    </Link>

                    {/* Navigation Links */}
                    <Link href="/Services" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Services
                    </Link>
                    <Link href="/Work" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Inspire Me
                    </Link>
                    <Link href="/Company" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Company
                    </Link>
                    <Link href="/Help" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Help
                    </Link>
                    <Link href="/AboutUs" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Our Team
                    </Link>

                    {/* Contact Info & Button */}
                    <div className="flex flex-col items-start space-y-3 mt-6">
                        <Link href="/" className="flex items-center gap-2 text-base sm:text-lg">
                            <BsTelephone />
                            +92 340 3051059
                        </Link>
                        <button onClick={() => dispatch(openPopup())} className="w-full h-10 rounded-full bg-white text-black font-medium">
                            Get in touch
                        </button>
                    </div>
                </div>
            </aside>

            {/* Get in Touch Form */}
            {isOpenGetinTouch && (
                <div className="fixed  md:right-0 z-50  flex items-center justify-center">
                    <div className="bg-gray-900 text-white p-6 max-w-2xl h-full w-full relative">
                        <button onClick={() => dispatch(closePopup())} className="absolute top-4 right-4 text-black text-3xl md:text-5xl bg-white w-10 h-10 md:w-16 md:h-16 rounded-full flex justify-center items-center">&times;</button>
                        <h2 className="text-2xl sm:text-3xl font-bold mt-6">
                            Got a <span className="text-blue-400">Project?</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-2">
                            Share the details of your project – like scope, timeframes, or business challenges. Our team will thoroughly review the materials and respond to you promptly.
                        </p>

                        <p className="text-sm sm:text-base mt-4 mb-2">I'm interested in</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Custom Software', 'Mobile App', 'UX/UI', 'Web Development'].map((interest) => (
                                <button
                                    key={interest}
                                    onClick={() => handleInterestClick(interest)}
                                    className={`px-4 py-2 rounded-full border ${interests.includes(interest) ? 'bg-bluish text-white' : 'bg-transparent text-white'
                                        }`}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>

                        <form className="space-y-4">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 bg-gray-700 rounded-lg text-gray-300 placeholder-gray-400"
                                />
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 bg-gray-700 rounded-lg text-gray-300 placeholder-gray-400"
                                />
                                <input
                                    type="tel"
                                    placeholder="Whatsapp Number"
                                    className="w-full p-3 bg-gray-700 rounded-lg text-gray-300 placeholder-gray-400"
                                />
                            </div>
                            <textarea
                                placeholder="Message"
                                className="w-full p-3 bg-gray-700 rounded-lg text-gray-300 placeholder-gray-400 h-24"
                            ></textarea>

                            <div className="flex items-center justify-between mt-4 text-xs sm:text-sm md:text-base text-gray-400">
                                <span>Free Consultancy</span>
                                <span>Road Map Execution</span>
                                <span>Collaboration</span>
                                <span>Execution Guidance</span>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold"
                            >
                                Send Message
                            </button>
                        </form>

                        <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-4">
                            We'll keep your information in our CRM to respond to your request. For more details, consult our{' '}
                            <a href="#" className="text-blue-400">privacy policy</a>.
                        </p>
                    </div>
                </div>
            )}

            {/* Overlay - Close Sidebar when clicking outside */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}
