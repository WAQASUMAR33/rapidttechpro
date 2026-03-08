'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
                    <img src="/company/logo.png" className="md:h-[60px] md:w-[60px] h-[40px] w-[40px]" />
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
                                            <h1 className="text-xl md:text-3xl flex justify-between  w-full">Solutions <FaArrowRight /></h1>
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
                    <Link href="/" className="flex items-center gap-1 text-base lg:text-base">
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
                    <Link href="/" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Services
                    </Link>
                    <Link href="/" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Solutions
                    </Link>
                    <Link href="/" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Inspire Me
                    </Link>
                    <Link href="/" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Company
                    </Link>
                    <Link href="/ContactUs" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Contact
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
                <div className="fixed inset-0 z-[60] flex justify-end">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => dispatch(closePopup())}
                    ></div>

                    {/* Form Container */}
                    <div className="bg-[#0a0b14] text-white w-full md:w-[500px] h-full overflow-y-auto relative shadow-2xl border-l border-white/10 no-scrollbar">
                        <div className="p-6 md:p-10 min-h-full flex flex-col">
                            <button
                                onClick={() => dispatch(closePopup())}
                                className="absolute top-5 right-5 text-black text-xl bg-white w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#25CBA1] hover:text-white transition-all duration-300 z-10"
                            >
                                &times;
                            </button>

                            <h2 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">
                                Got a <span className="text-[#25CBA1]">Project?</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed max-w-sm">
                                Share the details of your project – like scope, timeframes, or business challenges. Our team will thoroughly review the materials and respond to you promptly.
                            </p>

                            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-6 mb-3">I'm interested in</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['Custom Software', 'Mobile App', 'UX/UI', 'Web Development'].map((interest) => (
                                    <button
                                        key={interest}
                                        onClick={() => handleInterestClick(interest)}
                                        className={`px-4 py-1.5 rounded-full border transition-all duration-300 text-xs font-medium ${interests.includes(interest) ? 'bg-[#25CBA1] border-[#25CBA1] text-black font-bold' : 'bg-transparent border-gray-700 text-gray-400 hover:border-[#25CBA1] hover:text-[#25CBA1]'
                                            }`}
                                    >
                                        {interest}
                                    </button>
                                ))}
                            </div>

                            <form className="space-y-3 flex-grow">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-[#25CBA1]/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-[#25CBA1]/50 transition-colors"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Whatsapp Number"
                                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-[#25CBA1]/50 transition-colors"
                                    />
                                </div>
                                <textarea
                                    placeholder="Message"
                                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-100 placeholder-gray-600 h-24 focus:outline-none focus:border-[#25CBA1]/50 transition-colors resize-none"
                                ></textarea>

                                <div className="flex items-center justify-between mt-4 text-[9px] uppercase tracking-widest font-bold text-gray-600">
                                    <span>Free Consultancy</span>
                                    <span>Road Map Execution</span>
                                    <span>Collaboration</span>
                                    <span>Execution Guidance</span>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-6 p-3.5 bg-[#25CBA1] hover:bg-[#25CBA1]/90 rounded-lg text-black font-black text-base transition-all duration-300 shadow-lg shadow-[#25CBA1]/20 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    Send Message
                                </button>
                            </form>

                            <p className="text-[9px] text-gray-600 mt-6 mb-2 text-center leading-relaxed">
                                We'll keep your information in our CRM to respond to your request. <br /> For more details, consult our{' '}
                                <a href="#" className="text-[#25CBA1] hover:underline font-bold">privacy policy</a>.
                            </p>
                        </div>
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
