'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';
import { SiReact, SiUnity, SiUnrealengine, SiGodotengine, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiNginx, SiDocker, SiKubernetes, SiJenkins, SiFirebase, SiHeroku } from "react-icons/si";
import { FaServer, FaAws, FaCloud, FaMobileAlt, FaTools, FaDatabase, FaWindows, FaSearch, FaCode, FaCodeBranch, FaLayerGroup } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { RiFlutterFill } from "react-icons/ri";

const DEFAULT_TECH_DATA = [
    {
        id: 'web-platforms',
        title: 'Web Platforms',
        categories: [
            {
                name: 'Frontend & Frameworks',
                items: [
                    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
                    { name: 'HTML5', icon: '/tabsimages/htmllogo.png' },
                    { name: 'CSS3', icon: '/tabsimages/css.png' },
                    { name: 'Bootstrap', icon: '/tabsimages/bootstrap.png' },
                ]
            },
            {
                name: 'Backend & APIs',
                items: [
                    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
                    { name: 'Laravel', icon: '/tabsimages/laravel.png' },
                    { name: 'Django', icon: '/tabsimages/django.png' },
                    { name: 'NestJS', icon: '/tabsimages/nextjs.png' },
                ]
            }
        ]
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        categories: [
            {
                name: 'iOS',
                items: [
                    { name: 'Swift', icon: '/tabsimages/swift.png' },
                    { name: 'UI Kit', icon: '/tabsimages/uikit.png' },
                    { name: 'RxSwift', icon: '/tabsimages/rxswift.png' },
                ]
            },
            {
                name: 'Android',
                items: [
                    { name: 'Kotlin', icon: '/tabsimages/kotlin.png' },
                    { name: 'RxJava', icon: '/tabsimages/rxjava.png' },
                    { name: 'Java', icon: '/tabsimages/java.png' },
                ]
            }
        ]
    },
    {
        id: 'cross-platforms',
        title: 'Cross Platforms',
        categories: [
            {
                name: 'React Native',
                items: [
                    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Redux', icon: '/tabsimages/react.png' },
                    { name: 'Mobx', icon: null, iconComponent: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
                    { name: 'RxJS', icon: null, iconComponent: <FaCode className="w-5 h-5 text-[#B7178C]" /> },
                ]
            },
            {
                name: 'Flutter & Dart',
                items: [
                    { name: 'Flutter', icon: '/tabsimages/flutter.png' },
                    { name: 'Dart', icon: null, iconComponent: <FaCodeBranch className="w-5 h-5 text-[#0175C2]" /> },
                    { name: 'Bloc', icon: '/tabsimages/flutter.png' },
                    { name: 'Rx Dart', icon: '/tabsimages/flutter.png' },
                ]
            }
        ]
    },
    {
        id: 'database',
        title: 'Database',
        categories: [
            {
                name: 'Databases & ORMs',
                items: [
                    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
                    { name: 'MongoDB', icon: null, iconComponent: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
                    { name: 'MySQL', icon: null, iconComponent: <SiMysql className="w-5 h-5 text-[#4479A1]" /> },
                    { name: 'Redis', icon: null, iconComponent: <SiRedis className="w-5 h-5 text-[#DC382D]" /> },
                    { name: 'DynamoDB', icon: null, iconComponent: <FaAws className="w-5 h-5 text-[#FF9900]" /> },
                    { name: 'Elasticsearch', icon: null, iconComponent: <FaSearch className="w-5 h-5 text-[#005571]" /> },
                ]
            }
        ]
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        categories: [
            {
                name: 'Cloud Infrastructure',
                items: [
                    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
                    { name: 'AWS', icon: null, iconComponent: <FaAws className="w-5 h-5 text-[#FF9900]" /> },
                    { name: 'Azure', icon: null, iconComponent: <FaWindows className="w-5 h-5 text-[#0078D4]" /> },
                    { name: 'Firebase', icon: null, iconComponent: <SiFirebase className="w-5 h-5 text-[#FFCA28]" /> },
                    { name: 'Heroku', icon: null, iconComponent: <SiHeroku className="w-5 h-5 text-[#430098]" /> },
                ]
            },
            {
                name: 'DevOps & Containers',
                items: [
                    { name: 'Docker', icon: null, iconComponent: <SiDocker className="w-5 h-5 text-[#2496ED]" /> },
                    { name: 'Kubernetes', icon: null, iconComponent: <SiKubernetes className="w-5 h-5 text-[#326CE5]" /> },
                    { name: 'Nginx', icon: null, iconComponent: <SiNginx className="w-5 h-5 text-[#009639]" /> },
                    { name: 'Jenkins', icon: null, iconComponent: <SiJenkins className="w-5 h-5 text-[#D24939]" /> },
                ]
            }
        ]
    },
    {
        id: 'games',
        title: 'Games',
        categories: [
            {
                name: 'Engines & 3D',
                items: [
                    { name: 'Unreal Engine', icon: null, iconComponent: <SiUnrealengine className="w-5 h-5" /> },
                    { name: 'Unity', icon: null, iconComponent: <SiUnity className="w-5 h-5" /> },
                    { name: 'Godot', icon: null, iconComponent: <SiGodotengine className="w-5 h-5" /> },
                ]
            }
        ]
    },
];

function buildTechCategories(apiTechnologies) {
    if (!apiTechnologies || !Array.isArray(apiTechnologies) || apiTechnologies.length === 0) {
        return DEFAULT_TECH_DATA;
    }

    const formatItem = (t) => ({
        id: t.id,
        name: t.name || 'Technology',
        icon: t.icon || null,
        iconComponent: null,
    });

    const isMobile = (name) => /swift|ios|kotlin|android|uikit|rxswift|rxjava|java\b/i.test(name);
    const isCross = (name) => /flutter|react native|dart|ionic|cordova|expo/i.test(name);
    const isDatabase = (name) => /postgres|mongo|mysql|redis|prisma|dynamo|elastic|sql|database|supabase/i.test(name);
    const isCloud = (name) => /vercel|aws|azure|cloud|docker|kubernetes|nginx|jenkins|firebase|heroku|devops/i.test(name);
    const isGames = (name) => /unity|unreal|godot|game|cryengine/i.test(name);

    // Dynamic categorizations
    const webFrontend = [];
    const webBackend = [];
    const mobileIos = [];
    const mobileAndroid = [];
    const crossPlatform = [];
    const databases = [];
    const cloudDevops = [];
    const games = [];
    const others = [];

    apiTechnologies.forEach((tech) => {
        const item = formatItem(tech);
        const name = item.name.toLowerCase();

        if (isMobile(name)) {
            if (/swift|ios|uikit|rxswift/i.test(name)) mobileIos.push(item);
            else mobileAndroid.push(item);
        } else if (isCross(name)) {
            crossPlatform.push(item);
        } else if (isDatabase(name)) {
            databases.push(item);
        } else if (isCloud(name)) {
            cloudDevops.push(item);
        } else if (isGames(name)) {
            games.push(item);
        } else if (/react|next|tailwind|html|css|bootstrap|typescript|javascript|vue|angular/i.test(name)) {
            webFrontend.push(item);
        } else if (/node|graphql|php|wordpress|laravel|django|nest|express|python|api/i.test(name)) {
            webBackend.push(item);
        } else {
            others.push(item);
        }
    });

    // Merge API data with default tabs to ensure a complete, rich list
    const mergeItems = (apiItems, defaultItems) => {
        const apiNames = new Set(apiItems.map(i => i.name.toLowerCase().replace(/[^a-z0-9]/g, '')));
        const missingDefaults = defaultItems.filter(
            d => !apiNames.has(d.name.toLowerCase().replace(/[^a-z0-9]/g, ''))
        );
        return [...apiItems, ...missingDefaults];
    };

    return [
        {
            id: 'web-platforms',
            title: 'Web Platforms',
            categories: [
                {
                    name: 'Frontend & Frameworks',
                    items: mergeItems(webFrontend, DEFAULT_TECH_DATA[0].categories[0].items)
                },
                {
                    name: 'Backend & APIs',
                    items: mergeItems(webBackend, DEFAULT_TECH_DATA[0].categories[1].items)
                },
                ...(others.length > 0 ? [{ name: 'Additional Technologies', items: others }] : [])
            ]
        },
        {
            id: 'mobile-apps',
            title: 'Mobile Apps',
            categories: [
                {
                    name: 'iOS',
                    items: mergeItems(mobileIos, DEFAULT_TECH_DATA[1].categories[0].items)
                },
                {
                    name: 'Android',
                    items: mergeItems(mobileAndroid, DEFAULT_TECH_DATA[1].categories[1].items)
                }
            ]
        },
        {
            id: 'cross-platforms',
            title: 'Cross Platforms',
            categories: [
                {
                    name: 'Cross-Platform Frameworks',
                    items: mergeItems(crossPlatform, [
                        ...DEFAULT_TECH_DATA[2].categories[0].items,
                        ...DEFAULT_TECH_DATA[2].categories[1].items
                    ])
                }
            ]
        },
        {
            id: 'database',
            title: 'Database',
            categories: [
                {
                    name: 'Databases & ORMs',
                    items: mergeItems(databases, DEFAULT_TECH_DATA[3].categories[0].items)
                }
            ]
        },
        {
            id: 'cloud-devops',
            title: 'Cloud & DevOps',
            categories: [
                {
                    name: 'Cloud & Infrastructure',
                    items: mergeItems(cloudDevops, [
                        ...DEFAULT_TECH_DATA[4].categories[0].items,
                        ...DEFAULT_TECH_DATA[4].categories[1].items
                    ])
                }
            ]
        },
        {
            id: 'games',
            title: 'Games',
            categories: [
                {
                    name: 'Engines & 3D',
                    items: mergeItems(games, DEFAULT_TECH_DATA[5].categories[0].items)
                }
            ]
        }
    ];
}

export default function TechnologiesSection() {
    const [techList, setTechList] = useState(DEFAULT_TECH_DATA);
    const [activeTab, setActiveTab] = useState(DEFAULT_TECH_DATA[0].id);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const res = await fetch('/api/technologies', {
                    headers: { 'Content-Type': 'application/json' },
                });
                if (!res.ok) return;
                const data = await res.json();

                let rawItems = [];
                if (Array.isArray(data)) {
                    rawItems = data;
                } else if (data && data.success && Array.isArray(data.data)) {
                    rawItems = data.data;
                } else if (data && Array.isArray(data.technologies)) {
                    rawItems = data.technologies;
                } else if (data && Array.isArray(data.data)) {
                    rawItems = data.data;
                }

                if (rawItems.length > 0) {
                    const structured = buildTechCategories(rawItems);
                    setTechList(structured);
                }
            } catch (err) {
                console.error('Error fetching technologies from database:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTechnologies();
    }, []);

    const activeTech = techList.find(t => t.id === activeTab) || techList[0];

    return (
        <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                        Technologies we use
                    </h2>
                    <p className="text-lg md:text-xl text-black max-w-4xl leading-relaxed">
                        Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.
                    </p>
                </div>

                {/* Main Tabs Container */}
                <div className="flex flex-col lg:flex-row gap-12 min-h-[500px] border-t border-gray-100 pt-12">
                    {/* Sidebar Buttons */}
                    <div className="lg:w-1/4 flex overflow-x-auto lg:overflow-visible flex-row lg:flex-col gap-6 lg:gap-1 border-b border-gray-200 lg:border-none mb-8 lg:mb-0 pb-2 lg:pb-0 scroll-smooth custom-scrollbar">
                        {techList.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`text-left px-2 lg:px-8 pt-2 pb-1 lg:py-5 lg:rounded-full text-lg md:text-2xl font-bold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeTab === tab.id
                                    ? 'border-b-[3px] border-[#0FB5B7] lg:border-none lg:bg-gradient-to-r lg:from-[#DFF7F5] lg:to-white text-black lg:shadow-sm'
                                    : 'border-b-[3px] border-transparent text-black hover:bg-gray-50'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="lg:w-3/4 lg:pl-16 lg:border-l border-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex flex-col gap-12"
                            >
                                {activeTech?.categories?.length > 0 ? (
                                    activeTech.categories.map((cat, idx) => (
                                        <div key={idx} className="space-y-6">
                                            <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                                                {cat.name}
                                            </h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                                {cat.items.map((item, i) => (
                                                    <motion.div
                                                        key={item.id || i}
                                                        whileHover={{ y: -4 }}
                                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                                        className="group flex items-center gap-3 px-5 py-4 bg-[#F5F5F5] rounded-full cursor-pointer overflow-hidden relative"
                                                        style={{ transition: 'background 0.3s ease, box-shadow 0.3s ease' }}
                                                        onMouseEnter={e => { e.currentTarget.style.background = '#0FB5B7'; e.currentTarget.querySelectorAll('.chip-text').forEach(el => { el.style.color = '#fff'; }); }}
                                                        onMouseLeave={e => { e.currentTarget.style.background = '#F5F5F5'; e.currentTarget.querySelectorAll('.chip-text').forEach(el => { el.style.color = ''; }); }}
                                                    >
                                                        <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-white rounded-full shadow-sm">
                                                            {item.icon ? (
                                                                <img                                                                     src={item.icon}
                                                                    alt={item.name}
                                                                    className="w-5 h-5 object-contain"
                                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                                />
                                                            ) : item.iconComponent ? (
                                                                item.iconComponent
                                                            ) : (
                                                                <FaLayerGroup className="w-4 h-4 text-[#0FB5B7]" />
                                                            )}
                                                        </div>
                                                        <span className="chip-text text-black font-semibold text-sm md:text-base transition-colors duration-300">{item.name}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full py-20 text-gray-400">
                                        <div className="w-16 h-16 mb-4 opacity-20 bg-[#0FB5B7] rounded-full animate-pulse" />
                                        <p className="italic text-lg">Detailed stack coming soon...</p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
