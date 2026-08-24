'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ALL_TEAM_MEMBERS = [
    { name: "Muhammad Waqas Umar", position: "CEO & Co-founder", image: "/team/waqas.png", link: 'https://www.linkedin.com/in/waqas-umar-5b0678196/' },
    { name: "Kashif Rasheed", position: "Co-founder & Sales Manager", image: "/team/kashif.jpg", link: 'https://www.linkedin.com/in/kashif-rasheed-seo/' },
    { name: "Hannan Khan", position: "Backend Developer", image: "/team/hannan.png", link: '#' },
    { name: "Ali Iftikhar", position: "Senior Developer", image: "/team/ali.png", link: '#' },
    { name: "Usama Aslam", position: "UI/UX Designer", image: "/team/usama.png", link: '#' },
    { name: "Zofia", position: "SQA & Project Manager", image: "/team/nabiya.jpg", link: '#' },
    { name: "Nabiya", position: "SEO Content Writer", image: "/team/nabiya.jpg", link: '#' },
    { name: "Azzam Kashif", position: "Junior Developer", image: "/team/ali.png", link: '#' },
    { name: "Wasiq Saqlain", position: "UI/UX Designer", image: "/team/wasiq.png", link: '#' },
];

const TeamSection = () => {
    const [teamMembers, setTeamMembers] = useState(ALL_TEAM_MEMBERS);
    const [loading, setLoading] = useState(true);

    const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
    const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

    const resolveImage = (path) => {
        if (!path) return '/team/waqas.png';
        if (path.startsWith('http')) return path;
        if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
        return path;
    };

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch('/api/teams', {
                    method: 'GET',
                    headers: {
                        'x-api-key': apiKey,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) return;
                const data = await response.json();

                let apiList = [];
                if (data && data.success && Array.isArray(data.data)) {
                    apiList = data.data;
                } else if (Array.isArray(data)) {
                    apiList = data;
                } else if (data && Array.isArray(data.teams)) {
                    apiList = data.teams;
                } else if (data && Array.isArray(data.data)) {
                    apiList = data.data;
                }

                const validApiList = apiList.filter((m) => m && (m.name || m.full_name || m.title)?.trim());

                if (validApiList.length > 0) {
                    const formattedApiMembers = validApiList.map((m, idx) => ({
                        id: m.id || `api-${idx}`,
                        name: (m.name || m.full_name || m.title || '').trim(),
                        position: (m.position || m.designation || m.role || '').trim(),
                        image: resolveImage(m.image || m.image_url || m.avatar || m.photo),
                        link: m.link || m.linkedin || m.linkedin_url || m.profile_url || '',
                    }));

                    // Normalize names for comparison
                    const apiNames = new Set(
                        formattedApiMembers.map((m) => m.name.toLowerCase().replace(/[^a-z]/g, ''))
                    );

                    // Combine: API members first, followed by default members not yet in API
                    const remainingDefaults = ALL_TEAM_MEMBERS.filter((def) => {
                        const defNorm = def.name.toLowerCase().replace(/[^a-z]/g, '');
                        return !Array.from(apiNames).some(
                            (aName) => aName === defNorm || (aName.length > 5 && defNorm.length > 5 && (aName.includes(defNorm) || defNorm.includes(aName)))
                        );
                    });

                    setTeamMembers([...formattedApiMembers, ...remainingDefaults]);
                }
            } catch (err) {
                console.error('Error fetching team members:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, [apiKey]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-16 mb-0">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">Meet Our Experts</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        The talented minds behind our innovative solutions, dedicated to your success.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id || index}
                            variants={itemVariants}
                            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/70 hover:bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative mb-5">
                                <div className="absolute inset-0 bg-[#0FB5B7] rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 opacity-20"></div>
                                <img
                                    src={member.image}
                                    className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                                    alt={member.name}
                                    onError={(e) => {
                                        e.currentTarget.src = '/team/waqas.png';
                                    }}
                                />
                                {member.link && member.link !== '#' && (
                                    <Link
                                        href={member.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name}'s LinkedIn profile`}
                                        className="absolute bottom-1 right-1 z-20 bg-white p-2 rounded-full shadow-lg text-[#0FB5B7] hover:bg-[#0FB5B7] hover:text-white transition-all duration-300 transform scale-0 group-hover:scale-100 border border-gray-100"
                                    >
                                        <FaLinkedin className="text-base" />
                                    </Link>
                                )}
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-[#0FB5B7] transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium mt-1">{member.position}</p>

                            {member.link && member.link !== '#' && (
                                <Link
                                    href={member.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0FB5B7] mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                                >
                                    View Profile <FaArrowRight className="text-[10px]" />
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
