'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';


const stats = [
    { end: 599, suffix: '+', label: 'Projects Completed', duration: 2000 },
    { end: 20, suffix: '+', label: 'Expert Team Members', duration: 2000 },
    { end: 200, suffix: '+', label: 'Satisfied Clients', duration: 2000 },
];

function CountUp({ end, suffix, duration, isVisible }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end, duration]);
    return <>{count}{suffix}</>;
}

export default function OurJourney() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const teamMembers = [
        { name: "Waqas Umar", position: "CEO", image: "/team/waqas.png", link: 'https://www.linkedin.com/in/waqas-umar-5b0678196/' },
        { name: "Kashif", position: "Co-founder", image: "/team/kashif.jpg", link: 'https://www.linkedin.com/in/kashif-rasheed-seo/' },
        { name: "Usama", position: "UI/UX Designer", image: "/team/usama.png" },
        { name: "Ali", position: "Developer", image: "/team/ali.png" },
    ];

    return (
        <>
            {/* Journey + Team Section */}
            <section ref={ref} className="bg-white px-4 md:px-16 py-16 md:py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* Left: Text + Stats */}
                    <div className="lg:col-span-3 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-block text-[#0FB5B7] text-sm font-semibold tracking-widest uppercase mb-3">Our Story</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Our Journey to Empowering{' '}
                                <span className="text-[#0FB5B7]">Innovation</span> & Growth
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                                At RapidTechPro, we are more than a software development company — we're a full-cycle partner dedicated to transforming ideas into impactful solutions. Through creative problem-solving and technical expertise, we build user-centric products that address real challenges.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-[#0FB5B7]/40 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-[#0FB5B7]">
                                        <CountUp end={stat.end} suffix={stat.suffix} duration={stat.duration} isVisible={isVisible} />
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Team */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <span className="inline-block text-[#0FB5B7] text-sm font-semibold tracking-widest uppercase mb-3">Meet The Team</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The People Behind the Magic</h3>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-gray-50 hover:bg-[#0FB5B7]/5 border border-gray-100 hover:border-[#0FB5B7]/30 rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300"
                                >
                                    <div className="relative mb-3">
                                        <Image
                                            src={member.image}
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-md group-hover:border-[#0FB5B7]/50 transition-all duration-300"
                                            alt={`${member.name} - ${member.position}`}
                                            width={80}
                                            height={80}
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0FB5B7] rounded-full border-2 border-white" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
                                    <p className="text-gray-500 text-xs mt-0.5">{member.position}</p>
                                    {member.link && (
                                        <Link
                                            href={member.link}
                                            className="mt-2 flex items-center gap-1 text-[#0FB5B7] text-xs hover:underline"
                                        >
                                            <FaLinkedin /> LinkedIn
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
