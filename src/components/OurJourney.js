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
            const increment = (end - start) / (duration / 50);
            const interval = setInterval(() => {
                current += increment;
                if (current >= end) {
                    clearInterval(interval);
                    current = end;
                }
                setState(Math.floor(current));
            }, 50);
        };

        const duration = 1800;

        startCounter(0, 149, duration, setCompletedProjects);
        startCounter(0, 12, duration, setTalentedTeam);
        startCounter(0, 100, duration, setSatisfiedClients);
    }, [isVisible]);

    return (
        <section ref={ref} className="w-full bg-white" id="project-stats">
            <div className="site-full-grid pt-14 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12">
                <div className="site-full-grid-inner">
                    {/* Eyebrow */}
                    <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-black/45 sm:mb-5">
                        Our Journey
                    </p>
                    <div className="h-px w-full bg-black/10" />

                    <div className="mt-10 sm:mt-12 flex flex-col gap-12 md:gap-20">
                        {/* Heading + Description Row */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.05 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="max-w-[560px] text-[28px] font-bold leading-[1.25] tracking-tight text-black sm:text-4xl lg:max-w-[640px] lg:text-[48px] lg:leading-[1.2]"
                            >
                                <span className="text-grey">Our journey of </span>building success
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[16px] font-medium leading-relaxed text-black/55 max-w-[520px] lg:pt-2"
                            >
                                We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.
                            </motion.p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-black/10">
                            {[
                                { value: completedProjects.toLocaleString() + '+', label: 'Completed Projects' },
                                { value: talentedTeam + '+', label: 'Talented Professionals' },
                                { value: satisfiedClients + '+', label: 'Satisfied Clients' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className="flex flex-col gap-2 md:px-12 first:md:pl-0 last:md:pr-0"
                                >
                                    <span className="text-[48px] md:text-[64px] lg:text-[80px] font-bold text-black tracking-tighter leading-none tabular-nums">
                                        {stat.value}
                                    </span>
                                    <span className="text-[13px] md:text-[15px] font-semibold text-black/45 uppercase tracking-[0.08em]">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
