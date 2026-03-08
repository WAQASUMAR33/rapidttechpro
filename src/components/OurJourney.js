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
        <section ref={ref} className="bg-white pt-16 pb-20 md:pt-24 md:pb-32 px-6 md:px-12 lg:px-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight">
                        Our journey of building success
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
                        We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.
                    </p>
                </motion.div>

                {/* Stats Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
                    <div className="flex flex-col gap-2">
                        <span className="text-5xl md:text-6xl font-bold text-black">{completedProjects.toLocaleString()}+</span>
                        <span className="text-gray-800 text-xl font-normal">Completed Projects</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-5xl md:text-6xl font-bold text-black">{talentedTeam}+</span>
                        <span className="text-gray-800 text-xl font-normal">Talented Cubixians</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-5xl md:text-6xl font-bold text-black">{satisfiedClients}+</span>
                        <span className="text-gray-800 text-xl font-normal">Satisfied Clients</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
