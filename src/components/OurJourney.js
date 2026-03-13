'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function OurJourney() {
    const [completedProjects, setCompletedProjects] = useState(0);
    const [talentedTeam, setTalentedTeam] = useState(0);
    const [satisfiedClients, setSatisfiedClients] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const startCounter = (start, end, duration, setState) => {
            let current = start;
            const increment = (end - start) / (duration / 100);
            const interval = setInterval(() => {
                current += increment;
                if (current >= end) {
                    clearInterval(interval);
                    current = end;
                }
                setState(Math.floor(current));
            }, 100);
        };

        const duration = 2000;

        startCounter(400, 1300, duration, setCompletedProjects);
        startCounter(0, 350, duration, setTalentedTeam);
        startCounter(100, 600, duration, setSatisfiedClients);
    }, [isVisible]);

    return (
        <section ref={ref} className="w-full bg-white py-12 md:py-24 lg:py-32">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-12 lg:px-16 2xl:px-24 flex flex-col gap-12 md:gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 text-left"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-black tracking-tighter leading-[1.1]">
                        Our journey of building success
                    </h2>
                    <p className="text-sm md:text-lg lg:text-xl text-gray-500 max-w-[900px] leading-relaxed font-medium">
                        We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.
                    </p>
                </motion.div>

                {/* Stats Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl md:text-7xl lg:text-[84px] font-bold text-black tracking-tighter">{completedProjects.toLocaleString()}+</span>
                        <span className="text-gray-600 text-sm md:text-xl font-medium">Completed Projects</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl md:text-7xl lg:text-[84px] font-bold text-black tracking-tighter">{talentedTeam}+</span>
                        <span className="text-gray-600 text-sm md:text-xl font-medium">Talented Professionals</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl md:text-7xl lg:text-[84px] font-bold text-black tracking-tighter">{satisfiedClients}+</span>
                        <span className="text-gray-600 text-sm md:text-xl font-medium">Satisfied Clients</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
