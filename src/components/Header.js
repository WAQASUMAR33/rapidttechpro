'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import { openPopup, closePopup } from "@/store/popupSlice";

export default function Header() {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const isOpenGetinTouch = useSelector((state) => state.popup.isOpen);

    // Light-themed pages where header should be black even when not scrolled
    const isLightPage = pathname?.startsWith('/Services') || pathname?.startsWith('/ContactUs') || pathname?.startsWith('/Work');

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
    const [navServices, setNavServices] = useState([
        { title: 'Ecommerce Solutions', slug: 'Ecommerce-Solutions' },
        { title: 'HR Solutions', slug: 'HR-Solution' },
        { title: 'Mobile App Solutions', slug: 'Mobile-Apps' },
        { title: 'UI/UX - Figma Solutions', slug: 'UIUX-Figma' },
        { title: 'Website Development Solutions', slug: 'Web-Development' },
        { title: 'Point Of Sale Solutions', slug: 'Point-Of-Sale' },
    ]);

    const [logoError, setLogoError] = useState(false);

    const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
    const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';
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

    useEffect(() => {
        const fetchNavServices = async () => {
            try {
                const targetUrl = apiBaseUrl.includes('localhost') ? '/api/proxy/api/services' : `${apiBaseUrl}/api/services`;
                const response = await fetch(targetUrl, {
                    headers: { 'x-api-key': apiKey }
                });
                if (!response.ok) return;
                const data = await response.json();

                // Handle new API response format { success: true, data: [...] }
                let servicesData = [];
                if (data && data.data && Array.isArray(data.data)) {
                    servicesData = data.data;
                } else if (Array.isArray(data)) {
                    servicesData = data;
                } else if (data && data.services && Array.isArray(data.services)) {
                    servicesData = data.services;
                }

                if (servicesData.length > 0) {
                    setNavServices(servicesData.map((svc) => ({
                        title: svc.title || svc.name,
                        slug: svc.slug || (svc.title || svc.name)?.replace(/\s+/g, '-'),
                    })));
                }
            } catch (err) {
                // Keep fallback services silently
            }
        };
        fetchNavServices();
    }, [apiBaseUrl, apiKey]);

    const closeMegaMenu = () => setIsSolutionsOpen(false);

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full h-20 flex items-center transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-20"
                    } ${isScrolled ? "bg-white text-black shadow-md border-b border-gray-100" : (isLightPage ? "bg-transparent text-black" : "bg-transparent text-white")}`}
            >
                <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-16 2xl:px-24">
                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-[23px] font-bold flex items-center gap-2.5 tracking-tighter group">
                        {!logoError ? (
                            <img
                                src="/company/logo.png"
                                alt="RapidTechPro Logo"
                                className={`h-8 w-auto object-contain transition-all duration-300 ${isScrolled || isLightPage ? "" : "brightness-0 invert"}`}
                                onError={() => setLogoError(true)}
                            />
                        ) : (
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-white ${isScrolled || isLightPage ? "bg-[#0FB5B7]" : "bg-white/20"}`}>R</div>
                        )}
                        <span className={`transition-colors duration-300 ${isScrolled || isLightPage ? "text-black group-hover:text-[#0FB5B7]" : "text-white group-hover:text-white/80"}`}>
                            Rapid<span className="text-[#0FB5B7]">TechPro</span>.
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden xl:flex items-center space-x-8 lg:space-x-12 text-[14px] tracking-tight">
                        <div
                            className="relative"
                            onMouseEnter={() => setIsSolutionsOpen(true)}
                            onMouseLeave={() => setIsSolutionsOpen(false)}
                        >
                            <Link href="/services" className={`py-2 font-bold whitespace-nowrap transition-colors ${isScrolled || isLightPage ? "hover:text-[#0FB5B7]" : "hover:text-white/70"}`}>Services</Link>
                            {/* Full-Screen Mega Menu */}
                            {isSolutionsOpen && (
                                <div
                                    className="fixed top-[80px] inset-x-0 bg-white hidden md:flex justify-center z-40 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl border-t border-gray-100"
                                    onClick={closeMegaMenu}
                                >
                                    <div
                                        className="w-full max-w-7xl mx-auto p-12 lg:p-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 text-black bg-white"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="flex">
                                            <div className="px-4 w-full">
                                                <h1 className="text-xl md:text-3xl font-bold flex justify-between w-full">Solutions <FaArrowRight className="text-[#0FB5B7]" /></h1>
                                            </div>
                                            <div className="h-24 border-r border-gray-200"></div>
                                        </div>
                                        {/* Dynamic service columns */}
                                        {Array.from({ length: Math.ceil(navServices.length / 2) }, (_, i) => navServices.slice(i * 2, i * 2 + 2)).map((chunk, colIdx) => (
                                            <div key={colIdx} className="flex justify-between">
                                                <div className="flex flex-col gap-4">
                                                    {chunk.map((svc) => (
                                                        <Link
                                                            key={svc.slug}
                                                            href={`/services/${svc.slug}`}
                                                            className="text-gray-800 hover:text-[#0FB5B7] font-semibold text-base transition-colors"
                                                            onClick={closeMegaMenu}
                                                        >
                                                            {svc.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="h-24 border-r border-gray-200"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => setIsSolutionsOpen(true)}
                            onMouseLeave={() => setIsSolutionsOpen(false)}
                        >
                            <Link href="/services" className={`py-2 font-bold whitespace-nowrap transition-colors ${isScrolled || isLightPage ? "hover:text-[#0FB5B7]" : "hover:text-white/70"}`}>Solutions</Link>
                        </div>
                        <Link href="/work" className={`font-bold whitespace-nowrap transition-colors ${isScrolled || isLightPage ? "hover:text-[#0FB5B7]" : "hover:text-white/70"}`}>Work</Link>
                        <Link href="/company" className={`font-bold whitespace-nowrap transition-colors ${isScrolled || isLightPage ? "hover:text-[#0FB5B7]" : "hover:text-white/70"}`}>Company</Link>
                        <Link href="/contact-us" className={`font-bold whitespace-nowrap transition-colors ${isScrolled || isLightPage ? "hover:text-[#0FB5B7]" : "hover:text-white/70"}`}>Contact</Link>
                    </nav>

                    {/* Contact & Button - Desktop Only */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="tel:8669782220" className={`flex items-center gap-2 text-sm lg:text-base font-bold whitespace-nowrap transition-colors ${isScrolled || isLightPage ? "hover:text-[#0FB5B7]" : "hover:text-white/70"}`}>
                            <BsTelephone className="text-sm" />
                            <span className="hidden lg:inline">866-978-2220</span>
                        </Link>
                        <button
                            className="px-8 py-3 rounded-full font-bold bg-black text-white hover:bg-black/90 transition-all text-sm tracking-tight shadow-md"
                            onClick={() => dispatch(openPopup())}
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* Toggle Button - Mobile Only */}
                    <button className="md:hidden text-2xl" onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>

            {/* Sidebar - Mobile Only */}
            <aside
                className={`fixed top-0 right-0 w-full sm:w-80 h-full bg-black/95 text-white transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-[60] shadow-2xl overflow-y-auto`}
            >
                {/* Close Button Inside Sidebar */}
                <button
                    onClick={toggleSidebar}
                    className="absolute top-6 right-6 text-white text-2xl hover:text-[#0FB5B7] transition-colors z-10"
                >
                    <FaTimes />
                </button>
                <div className="flex flex-col items-start p-6 space-y-6 relative">
                    {/* Logo in Sidebar */}
                    <Link href="/" className="text-2xl sm:text-3xl font-bold mb-6 pr-10">
                        Rapid <span className="text-bluish">TechPro.</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-4 w-full">
                        <Link href="/services" onClick={toggleSidebar} className="text-base sm:text-lg font-bold">
                            Services
                        </Link>
                        <div className="flex flex-col gap-2 pl-3 border-l border-gray-600 mb-2">
                            {navServices.map((svc) => (
                                <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    onClick={toggleSidebar}
                                    className="text-sm text-gray-300 hover:text-[#0FB5B7] font-bold"
                                >
                                    {svc.title}
                                </Link>
                            ))}
                        </div>
                        <Link href="/" onClick={toggleSidebar} className="text-base sm:text-lg font-bold">
                            Solutions
                        </Link>
                        <Link href="/work" onClick={toggleSidebar} className="text-base sm:text-lg font-bold">
                            Work
                        </Link>
                        <Link href="/company" onClick={toggleSidebar} className="text-base sm:text-lg font-bold">
                            Company
                        </Link>
                        <Link href="/contact-us" onClick={toggleSidebar} className="text-base sm:text-lg font-bold">
                            Contact
                        </Link>
                    </div>

                    {/* Contact Info & Button */}
                    <div className="flex flex-col items-start space-y-3 mt-6 w-full">
                        <Link href="tel:8669782220" className="flex items-center gap-2 text-base sm:text-lg">
                            <BsTelephone />
                            866-978-2220
                        </Link>
                        <button onClick={() => dispatch(openPopup())} className="w-full h-10 rounded-full bg-white text-black font-medium">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </aside>

            {/* Contact Drawer */}
            <AnimatePresence>
                {isOpenGetinTouch && (
                    <div className="fixed inset-0 z-[70]">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => dispatch(closePopup())}
                        ></motion.div>
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute top-0 right-0 h-full w-full md:w-[600px] lg:w-[650px] bg-[#0d1b2a] shadow-2xl overflow-y-auto"
                            style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #08121d 100%)' }}
                        >
                            <div className="relative p-6 md:p-8 min-h-full flex flex-col justify-center">
                                <button
                                    onClick={() => dispatch(closePopup())}
                                    className="absolute top-4 right-4 text-black bg-white w-8 h-8 rounded-full flex justify-center items-center font-bold hover:bg-gray-100 transition-colors z-10 shadow-lg"
                                >
                                    &times;
                                </button>

                                {/* Teal glow decoration */}
                                <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-10" style={{ background: '#0FB5B7', transform: 'translate(40%, -40%)' }} />

                                <div className="mt-2">
                                    <h2 className="text-xl md:text-2xl font-bold text-white">
                                        Got a <span className="text-bluish">Project?</span>
                                    </h2>
                                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                                        Share the details of your project – like scope, timeframes, or business challenges. Our team will thoroughly review the materials and respond to you promptly.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <p className="text-[11px] font-semibold text-gray-300 mb-2 tracking-wide">I'm interested in</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['Custom Software', 'Mobile App', 'UX/UI', 'Web Development'].map((interest) => (
                                            <button
                                                key={interest}
                                                onClick={() => handleInterestClick(interest)}
                                                className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold transition-all border"
                                                style={interests.includes(interest)
                                                    ? { background: '#0FB5B7', color: '#fff', borderColor: '#0FB5B7' }
                                                    : { background: 'rgba(255,255,255,0.03)', color: '#9ca3af', borderColor: 'rgba(255,255,255,0.1)' }}
                                            >
                                                {interest}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <form className="mt-5 space-y-2.5 flex-grow">
                                    <div className="space-y-2.5">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full p-2.5 rounded-lg text-white text-[13px] outline-none transition-all placeholder-gray-500 bg-white/5 border border-white/10 focus:border-[#0FB5B7]/50"
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="w-full p-2.5 rounded-lg text-white text-[13px] outline-none transition-all placeholder-gray-500 bg-white/5 border border-white/10 focus:border-[#0FB5B7]/50"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Whatsapp Number"
                                                className="w-full p-2.5 rounded-lg text-white text-[13px] outline-none transition-all placeholder-gray-500 bg-white/5 border border-white/10 focus:border-[#0FB5B7]/50"
                                            />
                                        </div>
                                        <textarea
                                            placeholder="Message"
                                            className="w-full p-2.5 rounded-lg text-white text-[13px] outline-none resize-none placeholder-gray-500 bg-white/5 border border-white/10 focus:border-[#0FB5B7]/50"
                                            rows="3"
                                        />
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-500 py-3 border-t border-white/5">
                                        {['Free Consultancy', 'Road Map Execution', 'Collaboration', 'Execution Guidance'].map(item => (
                                            <span key={item} className="flex items-center gap-1.5">
                                                <div className="w-1 h-1 rounded-full bg-[#0FB5B7]"></div>
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full p-2.5 rounded-lg text-white font-bold text-[13px] transition-all hover:brightness-110 active:scale-[0.98] shadow-2xl shadow-blue-600/20"
                                        style={{ background: 'linear-gradient(135deg, #3b82f6, #0FB5B7)' }}
                                    >
                                        Send Message
                                    </button>
                                </form>

                                <div className="mt-4 text-center pb-2">
                                    <p className="text-[10px] text-gray-500 leading-relaxed max-w-sm mx-auto">
                                        We'll keep your information in our CRM to respond to your request. For more details, see our <a href="#" className="text-[#0FB5B7] hover:underline">privacy policy</a>.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Overlay - Close Sidebar when clicking outside */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}
