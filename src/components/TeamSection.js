'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveImageUrl } from '@/utils/imageHelper';
import { FaLinkedinIn, FaCrown, FaCode, FaPaintBrush, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const DEFAULT_AVATARS = {
    male: '/team/avatar-male.svg',
    female: '/team/avatar-female.svg',
};

const normalizeGender = (gender) =>
    String(gender || '').trim().toLowerCase() === 'female' ? 'female' : 'male';

const isCeoMember = (m) =>
    Boolean(m.isCeo || m.is_ceo) ||
    /\b(ceo|chief executive|founder|co-founder)\b/i.test(`${m.designation || ''} ${m.role || ''} ${m.position || ''}`);

// Determine departmental category for filtering
const getDepartment = (member) => {
    const text = `${member.role || ''} ${member.designation || ''}`.toLowerCase();
    if (isCeoMember(member) || /leadership|founder|director|partner|sales manager/i.test(text)) {
        return 'Leadership';
    }
    if (/developer|engineer|backend|frontend|fullstack|devops|architect/i.test(text)) {
        return 'Engineering';
    }
    if (/design|ui|ux|figma|creative|art/i.test(text)) {
        return 'Design';
    }
    return 'Operations';
};

export default function TeamSection() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

    const resolveImage = (path, gender) => {
        if (!path) return DEFAULT_AVATARS[normalizeGender(gender)];
        if (path.includes('/defaults/avatar-female')) return DEFAULT_AVATARS.female;
        if (path.includes('/defaults/avatar-male')) return DEFAULT_AVATARS.male;
        // Prefer local public/team asset if matching
        const match = path.match(/team\/(waqas|kashif|hannan|wasiq|nabiya|ali|usama)\.(png|jpg|jpeg)/i);
        if (match) {
            return `/team/${match[1].toLowerCase()}.${match[2].toLowerCase()}`;
        }
        return resolveImageUrl(path, DEFAULT_AVATARS[normalizeGender(gender)]);
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
                        department: getDepartment(m),
                        linkedinUrl: m.linkedinUrl || m.linkedin_url || null,
                        portfolioUrl: m.portfolioUrl || m.portfolio_url || null,
                        image: resolveImage(m.image || m.image_url || m.avatar || m.photo, m.gender),
                    }))
                    .filter((m) => m.name && m.designation && m.image);

                // Sort: Leaders first, then others
                mapped.sort((a, b) => {
                    if (a.isCeo && !b.isCeo) return -1;
                    if (!a.isCeo && b.isCeo) return 1;
                    return 0;
                });

                setTeamMembers(mapped);
            } catch (err) {
                console.error('Error fetching team members:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, [apiKey]);

    const filterTabs = useMemo(() => {
        const departments = new Set(teamMembers.map((m) => m.department));
        const tabs = ['All'];
        if (departments.has('Leadership')) tabs.push('Leadership');
        if (departments.has('Engineering')) tabs.push('Engineering');
        if (departments.has('Design')) tabs.push('Design');
        if (departments.has('Operations')) tabs.push('Operations');
        return tabs;
    }, [teamMembers]);

    const filteredMembers = useMemo(() => {
        if (activeFilter === 'All') return teamMembers;
        return teamMembers.filter((m) => m.department === activeFilter);
    }, [teamMembers, activeFilter]);

    if (!loading && teamMembers.length === 0) return null;

    return (
        <section className="bg-[#fcfdfd] py-20 md:py-28 lg:py-32 site-full-grid border-t border-black/[0.06] overflow-hidden" aria-label="Leadership & Team">
            <div className="site-full-grid-inner">
                {/* Eyebrow */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/50">
                        Leadership &amp; Experts
                    </p>
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#0FB5B7]/10 text-[#0FB5B7] border border-[#0FB5B7]/20">
                        <FaCheckCircle className="text-[10px]" />
                        12+ Senior Specialists
                    </span>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-black/10 mb-8 sm:mb-12" />

                {/* Two-Column Header matching modern Cubix layout */}
                <div className="grid grid-cols-1 gap-6 sm:mt-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-start xl:gap-10 mb-12 md:mb-16">
                    <div>
                        <h2 className="w-full text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] font-bold leading-[1.08] tracking-tight text-black">
                            <span className="text-black/50">The Visionaries &amp;</span> <br />
                            Engineers Driving Success.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-left text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-relaxed text-black/60 xl:pt-2">
                            A battle-tested multidisciplinary team of software architects, product visionaries, and UX leaders dedicated to turning complex business challenges into scalable technology.
                        </p>
                        <p className="text-sm text-[#0FB5B7] font-semibold">
                            Meet the specialized minds powering high-growth platforms worldwide.
                        </p>
                    </div>
                </div>

                {/* Category Filter Tabs */}
                {filterTabs.length > 2 && (
                    <div className="flex items-center justify-start sm:justify-center mb-10 md:mb-14 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div className="inline-flex p-1.5 rounded-full bg-gray-100/90 border border-black/[0.08] shadow-xs">
                            {filterTabs.map((tab) => {
                                const isActive = activeFilter === tab;
                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => setActiveFilter(tab)}
                                        className="relative z-10 px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap outline-none"
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeTeamTabPill"
                                                className="absolute inset-0 rounded-full bg-white shadow-sm border border-black/5"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        <span className={`relative z-10 transition-colors duration-200 ${
                                            isActive ? "text-black font-bold" : "text-black/55 hover:text-black"
                                        }`}>
                                            {tab === 'All' ? 'All Experts' : tab}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Team Members Grid with Editorial Portrait Cards */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                >
                    <AnimatePresence>
                        {filteredMembers.map((member, index) => {
                            const isLeadership = member.isCeo || member.department === 'Leadership';

                            return (
                                <motion.div
                                    layout
                                    key={member.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    whileHover={{ y: -8 }}
                                    className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-2xl ${
                                        isLeadership
                                            ? 'border-2 border-[#0FB5B7]/30 hover:border-[#0FB5B7] hover:shadow-[#0FB5B7]/20'
                                            : 'border border-black/[0.08] hover:border-black/20 hover:shadow-black/10'
                                    }`}
                                    style={{ height: '460px' }}
                                >
                                    {/* Member Image with Smooth Ken-Burns Zoom */}
                                    <div className="absolute inset-0 w-full h-full bg-[#11161d] overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                                            onError={(e) => {
                                                e.currentTarget.src = DEFAULT_AVATARS[member.gender];
                                            }}
                                        />
                                    </div>

                                    {/* Vignette / Scrim Gradient for Ultra-Crisp Typography */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300" />

                                    {/* Teal Glow Sheen on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0FB5B7]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    {/* Card Header Floating Badges */}
                                    <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                                        {/* Department / Executive Badge */}
                                        <div className="flex items-center gap-1.5">
                                            {isLeadership ? (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0FB5B7] text-white shadow-md shadow-[#0FB5B7]/30 border border-white/20">
                                                    <FaCrown className="text-[10px]" />
                                                    Executive Leadership
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/50 text-white/90 backdrop-blur-md border border-white/15">
                                                    {member.department === 'Engineering' && <FaCode className="text-[10px] text-[#0FB5B7]" />}
                                                    {member.department === 'Design' && <FaPaintBrush className="text-[10px] text-[#0FB5B7]" />}
                                                    {member.department === 'Operations' && <FaChartLine className="text-[10px] text-[#0FB5B7]" />}
                                                    {member.department}
                                                </span>
                                            )}
                                        </div>

                                        {/* LinkedIn Icon Link */}
                                        {member.linkedinUrl && (
                                            <a
                                                href={member.linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#0FB5B7] text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/20 active:scale-95"
                                                title={`Connect with ${member.name} on LinkedIn`}
                                                aria-label={`Connect with ${member.name} on LinkedIn`}
                                            >
                                                <FaLinkedinIn className="text-sm" />
                                            </a>
                                        )}
                                    </div>

                                    {/* Card Footer Information */}
                                    <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 z-10 flex flex-col justify-end">
                                        {/* Name */}
                                        <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-tight group-hover:text-white transition-colors duration-200">
                                            {member.name}
                                        </h3>

                                        {/* Designation */}
                                        <p className="text-[14px] sm:text-[15px] font-medium text-white/80 mt-1">
                                            {member.designation}
                                        </p>

                                        {/* Animated Expanding Teal Line */}
                                        <div className="w-8 h-[3px] bg-[#0FB5B7] rounded-full mt-3.5 group-hover:w-20 transition-all duration-500 ease-out" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
