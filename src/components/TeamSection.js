'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TeamSection = () => {
    const teamMembers = [
        { name: "Waqas Umar", position: "CEO", image: "/team/waqas.png", link: 'https://www.linkedin.com/in/waqas-umar-5b0678196/' },
        { name: "Kashif", position: "Co-founder", image: "/team/kashif.jpg", link: 'https://www.linkedin.com/in/kashif-rasheed-seo/' },
        { name: "Usama", position: "UI/UX Designer", image: "/team/usama.png" },
        { name: "Ali", position: "Developer", image: "/team/ali.png" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="bg-white pt-16 pb-0 md:pt-24 md:pb-0 mb-0">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Meet Our Experts</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        The talented minds behind our innovative solutions, dedicated to your success.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-[#25CBA1] rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 opacity-10"></div>
                                <img
                                    src={member.image}
                                    className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-xl object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                                    alt={member.name}
                                />
                                {member.link && (
                                    <Link
                                        href={member.link}
                                        target="_blank"
                                        className="absolute bottom-2 right-2 z-20 bg-white p-2 rounded-full shadow-lg text-[#25CBA1] hover:bg-[#25CBA1] hover:text-white transition-all duration-300 transform scale-0 group-hover:scale-100"
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </Link>
                                )}
                            </div>

                            <h3 className="text-2xl font-bold text-black group-hover:text-[#25CBA1] transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 font-medium mb-3">{member.position}</p>

                            {member.link && (
                                <Link
                                    href={member.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#25CBA1] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                                >
                                    View Profile <FaArrowRight className="text-xs" />
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
