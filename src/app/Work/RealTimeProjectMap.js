'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FALLBACK_CATEGORIES = ['All', 'Food', 'E-Commerce', 'Automobiles', 'Marketplace', 'Education', 'Finance', 'Cryptocurrency'];

const FALLBACK_PROJECTS = [
    {
        id: 'f1',
        title: 'Autoconnect',
        shortDescription: 'Automotive Marketplace for Buyers & Sellers',
        location: 'Greenland | App',
        mainImage: '/images/herosection.png',
        categories: [{ name: 'Automobiles' }]
    },
    {
        id: 'f2',
        title: 'Horof',
        shortDescription: 'Global E-Learning App Bridging Learners & Tutors',
        location: 'Saudi Arabia | App',
        mainImage: '/images/herosection.png',
        categories: [{ name: 'Education' }]
    },
];

export default function RealTimeProjectMap() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [categories, setCategories] = useState(['All']);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
    const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

    const resolveImage = (path) => {
        if (!path) return '/images/herosection.png';
        if (path.startsWith('http')) return path;
        if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
        return path;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch Categories
                const catTargetUrl = apiBaseUrl.includes('localhost') ? '/api/proxy/api/categories' : `${apiBaseUrl}/api/categories`;
                const catResponse = await fetch(catTargetUrl, {
                    headers: { 'x-api-key': apiKey }
                });

                if (catResponse.ok) {
                    const catData = await catResponse.json();
                    // Robust parsing for various shapes: direct array, data: [], categories: []
                    const rawCats = Array.isArray(catData)
                        ? catData
                        : (catData.data || catData.categories || []);

                    const dynamicCats = ['All', ...rawCats.map(c => typeof c === 'string' ? c : c.name).filter(Boolean)];
                    setCategories(dynamicCats.length > 1 ? dynamicCats : FALLBACK_CATEGORIES);
                } else {
                    console.error(`Categories API returned ${catResponse.status} at ${catTargetUrl}`);
                    setCategories(FALLBACK_CATEGORIES);
                }

                // Fetch Projects
                const projTargetUrl = apiBaseUrl.includes('localhost') ? '/api/proxy/api/projects' : `${apiBaseUrl}/api/projects`;
                const response = await fetch(projTargetUrl, {
                    headers: {
                        'x-api-key': apiKey
                    }
                });
                if (!response.ok) throw new Error(`Failed to fetch projects (${response.status}) at ${projTargetUrl}`);
                const data = await response.json();

                // Handle new API response format { success: true, data: [...] }
                let projectData = [];
                if (data && data.data && Array.isArray(data.data)) {
                    projectData = data.data;
                } else if (Array.isArray(data)) {
                    projectData = data;
                } else if (data && data.projects && Array.isArray(data.projects)) {
                    projectData = data.projects;
                }

                setProjects(projectData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data for map:', err);
                setProjects(FALLBACK_PROJECTS);
                setCategories(FALLBACK_CATEGORIES);
                setError('Database Connection Error: Showing fallback data.');
                setLoading(false);
            }
        };

        fetchData();
    }, [apiBaseUrl, apiKey]);

    const filteredProjects = projects.filter(proj => {
        if (activeCategory === 'All') return true;
        const projCats = proj.categories?.map(c => (typeof c === 'string' ? c : c.name).toLowerCase()) || [];
        const mainCat = proj.category?.toLowerCase() || '';
        return projCats.includes(activeCategory.toLowerCase()) || mainCat.includes(activeCategory.toLowerCase());
    });

    return (
        <section className="bg-black text-white w-full py-20">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-12 lg:px-16 2xl:px-24">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                    <span style={{ color: '#0FB5B7' }}>Real-time </span>
                    <span className="text-white">project map</span>
                </h2>

                {/* Categories Pills */}
                <div className="flex flex-nowrap overflow-x-auto gap-3 mb-12 pb-1 scrollbar-hide items-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${activeCategory === cat
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-gray-300 border-gray-600 hover:border-white hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                    <button className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border border-[#0FB5B7] text-[#0FB5B7] hover:bg-[#0FB5B7]/10 ml-2 flex items-center gap-1 transition-colors">
                        + See more
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 min-h-[600px] h-[600px] md:h-[700px]">
                    {/* Scrollable List container */}
                    <div className="relative h-full overflow-hidden">
                        {/* Top/bottom gradient masks for the smooth scroll fade effect */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                        {/* List */}
                        <div className="h-full overflow-y-auto pb-24 pr-4 space-y-8 custom-scrollbar">
                            {loading ? (
                                <div className="text-gray-500 py-10">Loading real-time data...</div>
                            ) : filteredProjects.length > 0 ? (
                                filteredProjects.map((proj) => (
                                    <motion.div
                                        key={proj.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-6 group cursor-pointer"
                                    >
                                        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-[24px] flex-shrink-0 overflow-hidden shadow-lg border border-gray-800 p-1 group-hover:bg-gray-100 transition-colors">
                                            <div className="w-full h-full rounded-[20px] overflow-hidden bg-gray-100">
                                                <img
                                                    src={resolveImage(proj.mainImage || proj.projectIcon || proj.icon)}
                                                    alt={proj.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-grow pt-1">
                                            <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#0FB5B7] transition-colors leading-tight">
                                                {proj.title}
                                            </h3>
                                            <p className="text-[#a0aab2] text-sm mt-1 leading-snug max-w-sm line-clamp-2">
                                                {proj.shortDescription || proj.subtitle}
                                            </p>
                                            <p className="text-gray-500 text-xs font-semibold mt-3 tracking-wide">
                                                {proj.location || 'Global'}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-gray-500 py-10">No projects found in this category.</div>
                            )}
                        </div>
                        {/* Custom scrollbar track line visual reference */}
                        <div className="hidden lg:block absolute left-[-24px] top-6 bottom-6 w-[2px] bg-gray-800 rounded-full">
                            <div
                                className="w-full h-1/3 rounded-full"
                                style={{ backgroundColor: '#0FB5B7' }}
                            ></div>
                        </div>
                    </div>

                    {/* Map Visualization placeholder container */}
                    <div className="relative h-full bg-[#0a0a0a] rounded-[32px] overflow-hidden border border-gray-900 shadow-2xl flex items-center justify-center grayscale opacity-80 mix-blend-screen hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        {/* A simulated dark map graphic background */}
                        <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-cover filter invert"></div>

                        {/* Ping locations */}
                        <div className="absolute top-[30%] left-[25%] animate-pulse">
                            <svg className="w-6 h-6" fill="#0FB5B7" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        </div>
                        <div className="absolute top-[40%] right-[30%] animate-pulse" style={{ animationDelay: '0.5s' }}>
                            <svg className="w-8 h-8" fill="#0FB5B7" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        </div>
                        <div className="absolute top-[60%] left-[20%] animate-pulse pb-4" style={{ animationDelay: '1s' }}>
                            <svg className="w-5 h-5" fill="#0FB5B7" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        </div>
                        <div className="absolute bottom-[35%] right-[40%] animate-pulse" style={{ animationDelay: '1.5s' }}>
                            <svg className="w-7 h-7" fill="#0FB5B7" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
