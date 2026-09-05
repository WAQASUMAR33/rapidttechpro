'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DEFAULT_AVATARS = {
    male: '/team/avatar-male.svg',
    female: '/team/avatar-female.svg',
};

const normalizeGender = (gender) =>
    String(gender || '').trim().toLowerCase() === 'female' ? 'female' : 'male';

const isCeoMember = (m) =>
    Boolean(m.isCeo || m.is_ceo) ||
    /\b(ceo|chief executive|founder)\b/i.test(`${m.designation || ''} ${m.role || ''} ${m.position || ''}`);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const MemberCard = ({ member, featured = false }) => (
    <motion.div
        variants={itemVariants}
        className={`group flex flex-col items-center text-center p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 ${
            featured
                ? 'bg-white border-[#0FB5B7]/30 shadow-lg py-8'
                : 'bg-white/70 hover:bg-white border-gray-100 hover:border-gray-200'
        }`}
    >
        <div className="relative mb-5">
            <div className="absolute inset-0 bg-[#0FB5B7] rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 opacity-20"></div>
            <img                 src={member.image}
                className={`rounded-full border-4 border-white shadow-md object-cover relative z-10 transition-transform duration-500 group-hover:scale-105 ${
                    featured ? 'w-36 h-36 md:w-44 md:h-44 ring-4 ring-[#0FB5B7]/30' : 'w-28 h-28 md:w-32 md:h-32'
                }`}
                alt={member.name}
                onError={(e) => {
                    e.currentTarget.src = DEFAULT_AVATARS[normalizeGender(member.gender)];
                }}
            />
        </div>

        <h3
            className={`font-bold text-black group-hover:text-[#0FB5B7] transition-colors duration-300 ${
                featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
            }`}
        >
            {member.name}
        </h3>
        <p className={`text-gray-500 font-medium mt-1 ${featured ? 'text-base' : 'text-sm'}`}>
            {member.designation}
        </p>
    </motion.div>
);

const TeamSection = ({
    title = 'Meet Our Experts',
    subtitle = 'The talented minds behind our innovative solutions, dedicated to your success.',
    className = 'bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-16 mb-0',
}) => {
    const [teamMembers, setTeamMembers] = useState([]);

    const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
    const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

    // Members without an uploaded photo fall back to a gender-based placeholder
    const resolveImage = (path, gender) => {
        if (!path) return '';
        if (path.includes('/defaults/avatar-female')) return DEFAULT_AVATARS.female;
        if (path.includes('/defaults/avatar-male')) return DEFAULT_AVATARS.male;
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
                }

                const mapped = apiList
                    .filter(Boolean)
                    .map((m, idx) => ({
                        id: m.id || `api-${idx}`,
                        name: (m.name || m.full_name || m.title || '').trim(),
                        designation: (m.designation || m.position || m.role || '').trim(),
                        gender: normalizeGender(m.gender),
                        isCeo: isCeoMember(m),
                        image: resolveImage(m.image || m.image_url || m.avatar || m.photo, m.gender),
                    }))
                    // Only members carrying all three official fields are rendered
                    .filter((m) => m.name && m.designation && m.image);

                setTeamMembers(mapped);
            } catch (err) {
                console.error('Error fetching team members:', err);
            }
        };

        fetchTeamMembers();
    }, [apiKey]);

    if (teamMembers.length === 0) return null;

    const ceo = teamMembers.find((m) => m.isCeo);
    const otherMembers = ceo ? teamMembers.filter((m) => m.id !== ceo.id) : teamMembers;

    return (
        <section className={className}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">{title}</h2>
                    {subtitle && (
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
                    )}
                </motion.div>

                {/* CEO spotlight - top centre of the team section */}
                {ceo && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex justify-center mb-12 md:mb-16"
                    >
                        <div className="w-full max-w-sm">
                            <MemberCard member={ceo} featured />
                        </div>
                    </motion.div>
                )}

                {otherMembers.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
                    >
                        {otherMembers.map((member, index) => (
                            <MemberCard key={member.id || index} member={member} />
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default TeamSection;
