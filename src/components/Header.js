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
    const [navServices, setNavServices] = useState([
        { title: 'Ecommerce Solutions', slug: 'Ecommerce-Solutions' },
        { title: 'HR Solutions', slug: 'HR-Solution' },
        { title: 'Mobile App Solutions', slug: 'Mobile-Apps' },
        { title: 'UI/UX - Figma Solutions', slug: 'UIUX-Figma' },
        { title: 'Website Development Solutions', slug: 'Web-Development' },
        { title: 'Point Of Sale Solutions', slug: 'Point-Of-Sale' },
    ]);

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
                const response = await fetch(`${apiBaseUrl}/api/services`, {
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
                className={`fixed z-50 w-full h-16 flex items-center justify-between px-4 sm:px-12 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-16"
                    } ${isScrolled ? "bg-white shadow-md text-black border-b" : "bg-white shadow-md text-black border-b"}`}
            >
                {/* Logo */}
                <Link href="/" className="text-xl md:text-[30px] font-bold flex justify-center items-center">
                    <img src="/company/logo.png" className="md:h-[60px] md:w-[60px] h-[40px] w-[40px]" />
                    Rapid<span className={"text-bluish"}>TechPro</span>

                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex space-x-6 lg:space-x-12 text-base lg:text-base relative">
                    <div
                        className="relative"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <Link href="/Services" className="py-2 ">Services</Link>
                        {/* Full-Screen Mega Menu */}
                        {isSolutionsOpen && (
                            <div
                                className="fixed top-[100px]   inset-0 bg-white hidden md:flex justify-center items-center z-40"
                                onClick={closeMegaMenu}
                            >
                                <div
                                    className="w-full p-16 grid grid-cols-2 lg:grid-cols-5 gap-6 text-black bg-white mt-32"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex">
                                        <div className="px-4 w-full">
                                            <h1 className="text-xl md:text-3xl flex justify-between w-full">Solutions <FaArrowRight /></h1>
                                        </div>
                                        <div className="h-24 border-r-2"></div>
                                    </div>
                                    {/* Dynamic service columns: group into chunks of 2 */}
                                    {Array.from({ length: Math.ceil(navServices.length / 2) }, (_, i) => navServices.slice(i * 2, i * 2 + 2)).map((chunk, colIdx) => (
                                        <div key={colIdx} className="flex justify-between">
                                            <div className="flex flex-col gap-4">
                                                {chunk.map((svc) => (
                                                    <Link
                                                        key={svc.slug}
                                                        href={`/Services/${svc.slug}`}
                                                        className="text-gray-800 hover:text-bluish"
                                                        onClick={closeMegaMenu}
                                                    >
                                                        {svc.title}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="h-24 border-r-2"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <Link href="/">Industries</Link>
                    <Link href="/">Solutions</Link>
                    <Link href="/Work">Work</Link>
                    <Link href="/Company">Company</Link>
                    <Link href="/ContactUs">Contact</Link>
                </nav>

                {/* Contact & Button - Desktop Only */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="tel:8669782220" className="flex items-center gap-1 text-base lg:text-base">
                        <BsTelephone />
                        866-978-2220
                    </Link>
                    <button
                        className="w-28 md:w-32 h-10 rounded-full font-medium border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black transition-all"
                        onClick={() => dispatch(openPopup())}
                    >
                        Get in Touch
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
                    <div className="flex flex-col gap-3">
                        <Link href="/Services" onClick={toggleSidebar} className="text-base sm:text-lg font-semibold">
                            Services
                        </Link>
                        <div className="flex flex-col gap-2 pl-3 border-l border-gray-600">
                            {navServices.map((svc) => (
                                <Link
                                    key={svc.slug}
                                    href={`/Services/${svc.slug}`}
                                    onClick={toggleSidebar}
                                    className="text-sm text-gray-300 hover:text-[#0FB5B7]"
                                >
                                    {svc.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Link href="/" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Industries
                    </Link>
                    <Link href="/" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Solutions
                    </Link>
                    <Link href="/Work" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Work
                    </Link>
                    <Link href="/Company" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Company
                    </Link>
                    <Link href="/ContactUs" onClick={toggleSidebar} className="text-base sm:text-lg">
                        Contact
                    </Link>

                    {/* Contact Info & Button */}
                    <div className="flex flex-col items-start space-y-3 mt-6">
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

            {isOpenGetinTouch && (
                <div className="fixed md:right-0 z-50 flex items-center justify-center">
                    <div className="text-white p-6 max-w-2xl h-full w-full relative" style={{ background: 'linear-gradient(160deg, #0a1628 0%, #0d2235 100%)', borderLeft: '1px solid rgba(15,181,183,0.2)' }}>
                        <button onClick={() => dispatch(closePopup())} className="absolute top-4 right-4 text-black text-2xl bg-white w-10 h-10 rounded-full flex justify-center items-center font-bold hover:bg-gray-100 transition-colors">&times;</button>

                        {/* Teal glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-20" style={{ background: '#0FB5B7', transform: 'translate(30%, -30%)' }} />

                        <h2 className="text-2xl sm:text-3xl font-bold mt-6">
                            Got a <span style={{ color: '#0FB5B7' }}>Project?</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 mt-2">
                            Share the details — scope, timeframes, or business challenges. We'll respond promptly.
                        </p>

                        <p className="text-sm mt-5 mb-3 font-semibold text-gray-300">I'm interested in</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {['Custom Software', 'Mobile App', 'UX/UI', 'Web Development'].map((interest) => (
                                <button
                                    key={interest}
                                    onClick={() => handleInterestClick(interest)}
                                    className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                                    style={interests.includes(interest)
                                        ? { background: '#0FB5B7', color: '#fff', border: '1px solid #0FB5B7' }
                                        : { background: 'transparent', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.2)' }}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>

                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 rounded-xl text-white text-sm outline-none transition-all placeholder-gray-500"
                                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                                onFocus={e => e.target.style.borderColor = '#0FB5B7'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                            />
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded-xl text-white text-sm outline-none transition-all placeholder-gray-500"
                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                                    onFocus={e => e.target.style.borderColor = '#0FB5B7'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                                />
                                <input
                                    type="tel"
                                    placeholder="WhatsApp Number"
                                    className="w-full p-3 rounded-xl text-white text-sm outline-none transition-all placeholder-gray-500"
                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                                    onFocus={e => e.target.style.borderColor = '#0FB5B7'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                                />
                            </div>
                            <textarea
                                placeholder="Project details / Message"
                                className="w-full p-3 rounded-xl text-white text-sm outline-none resize-none placeholder-gray-500"
                                rows="3"
                                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                                onFocus={e => e.target.style.borderColor = '#0FB5B7'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                            />

                            <div className="flex flex-wrap justify-between text-xs text-gray-500 py-1">
                                {['Free Consultancy', 'Road Map', 'Collaboration', 'Execution'].map(b => (
                                    <span key={b} className="flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="#0FB5B7" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                        {b}
                                    </span>
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 p-3 rounded-xl text-white font-bold text-base transition-all hover:opacity-90"
                                style={{ background: 'linear-gradient(135deg, #0FB5B7, #0a8e90)', boxShadow: '0 8px 25px rgba(15,181,183,0.3)' }}
                            >
                                Send Message →
                            </button>
                        </form>

                        <p className="text-xs text-gray-500 mt-4">
                            We'll keep your information in our CRM. See our{' '}
                            <a href="#" style={{ color: '#0FB5B7' }} className="hover:underline">privacy policy</a>.
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
