'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiVuedotjs, SiAngular, SiHtml5, SiCss, SiBootstrap,
    SiNodedotjs, SiExpress, SiNestjs, SiPython, SiDjango, SiPhp, SiLaravel, SiGraphql,
    SiSwift, SiKotlin, SiAndroid, SiApple,
    SiFlutter, SiDart, SiRedux, SiExpo, SiIonic,
    SiPostgresql, SiMongodb, SiMysql, SiRedis, SiPrisma, SiSupabase, SiElasticsearch, SiSqlite,
    SiGooglecloud, SiVercel, SiFirebase, SiHeroku, SiDocker, SiKubernetes, SiNginx, SiJenkins, SiGithubactions, SiTerraform,
    SiOpenai, SiTensorflow, SiPytorch, SiLangchain,
    SiUnity, SiUnrealengine, SiGodotengine, SiBlender, SiThreedotjs
} from "react-icons/si";
import { FaCode, FaServer, FaCloud, FaDatabase, FaMobileAlt, FaRobot, FaGamepad, FaLayerGroup, FaAws } from "react-icons/fa";

const TECH_CATEGORIES = [
    {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        icon: <FaMobileAlt className="text-base" />,
        categories: [
            {
                name: 'iOS Development',
                items: [
                    { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', fallback: <SiSwift className="w-5 h-5 text-[#F05138]" /> },
                    { name: 'SwiftUI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', fallback: <SiApple className="w-5 h-5 text-black" /> },
                    { name: 'UIKit', icon: '/tabsimages/uikit.png', fallback: <SiApple className="w-5 h-5 text-[#007AFF]" /> },
                    { name: 'Objective-C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg', fallback: <FaCode className="w-5 h-5 text-[#007AFF]" /> },
                    { name: 'RxSwift', icon: '/tabsimages/rxswift.png', fallback: <FaCode className="w-5 h-5 text-[#B7178C]" /> },
                    { name: 'CoreData', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', fallback: <FaDatabase className="w-5 h-5 text-[#007AFF]" /> },
                    { name: 'Xcode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg', fallback: <FaCode className="w-5 h-5 text-[#1575F9]" /> },
                ]
            },
            {
                name: 'Android Development',
                items: [
                    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', fallback: <SiKotlin className="w-5 h-5 text-[#7F52FF]" /> },
                    { name: 'Jetpack Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', fallback: <SiAndroid className="w-5 h-5 text-[#3DDC84]" /> },
                    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', fallback: <FaCode className="w-5 h-5 text-[#5382A1]" /> },
                    { name: 'Android SDK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', fallback: <SiAndroid className="w-5 h-5 text-[#3DDC84]" /> },
                    { name: 'RxJava', icon: '/tabsimages/rxjava.png', fallback: <FaCode className="w-5 h-5 text-[#B7178C]" /> },
                    { name: 'Coroutines', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', fallback: <SiKotlin className="w-5 h-5 text-[#7F52FF]" /> },
                ]
            }
        ]
    },
    {
        id: 'web-platforms',
        title: 'Web Platforms',
        icon: <FaCode className="text-base" />,
        categories: [
            {
                name: 'Frontend & Frameworks',
                items: [
                    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', fallback: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
                    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', fallback: <SiNextdotjs className="w-5 h-5 text-black" /> },
                    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', fallback: <SiTypescript className="w-5 h-5 text-[#3178C6]" /> },
                    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', fallback: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> },
                    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', fallback: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" /> },
                    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', fallback: <SiVuedotjs className="w-5 h-5 text-[#4FC08D]" /> },
                    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', fallback: <SiAngular className="w-5 h-5 text-[#DD0031]" /> },
                    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', fallback: <SiHtml5 className="w-5 h-5 text-[#E34F26]" /> },
                    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', fallback: <SiCss className="w-5 h-5 text-[#1572B6]" /> },
                    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', fallback: <SiBootstrap className="w-5 h-5 text-[#7952B3]" /> },
                ]
            },
            {
                name: 'Backend & APIs',
                items: [
                    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', fallback: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
                    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', fallback: <SiExpress className="w-5 h-5 text-black" /> },
                    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', fallback: <SiNestjs className="w-5 h-5 text-[#E0234E]" /> },
                    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', fallback: <SiPython className="w-5 h-5 text-[#3776AB]" /> },
                    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', fallback: <SiDjango className="w-5 h-5 text-[#092E20]" /> },
                    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', fallback: <SiPhp className="w-5 h-5 text-[#777BB4]" /> },
                    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', fallback: <SiLaravel className="w-5 h-5 text-[#FF2D20]" /> },
                    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', fallback: <SiGraphql className="w-5 h-5 text-[#E10098]" /> },
                    { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', fallback: <FaServer className="w-5 h-5 text-[#0FB5B7]" /> },
                ]
            }
        ]
    },
    {
        id: 'cross-platforms',
        title: 'Cross Platforms',
        icon: <FaLayerGroup className="text-base" />,
        categories: [
            {
                name: 'Multi-Platform Frameworks',
                items: [
                    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', fallback: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
                    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', fallback: <SiFlutter className="w-5 h-5 text-[#02569B]" /> },
                    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', fallback: <SiDart className="w-5 h-5 text-[#0175C2]" /> },
                    { name: 'Redux Toolkit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', fallback: <SiRedux className="w-5 h-5 text-[#764ABC]" /> },
                    { name: 'Expo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg', fallback: <SiExpo className="w-5 h-5 text-black" /> },
                    { name: 'Capacitor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/capacitor/capacitor-original.svg', fallback: <FaCode className="w-5 h-5 text-[#119EFF]" /> },
                    { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', fallback: <SiIonic className="w-5 h-5 text-[#3880FF]" /> },
                ]
            }
        ]
    },
    {
        id: 'database',
        title: 'Database & Cache',
        icon: <FaDatabase className="text-base" />,
        categories: [
            {
                name: 'Relational, NoSQL & Caching',
                items: [
                    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', fallback: <SiPostgresql className="w-5 h-5 text-[#4169E1]" /> },
                    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', fallback: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
                    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', fallback: <SiMysql className="w-5 h-5 text-[#4479A1]" /> },
                    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', fallback: <SiRedis className="w-5 h-5 text-[#DC382D]" /> },
                    { name: 'Prisma ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', fallback: <SiPrisma className="w-5 h-5 text-[#2D3748]" /> },
                    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', fallback: <SiSupabase className="w-5 h-5 text-[#3ECF8E]" /> },
                    { name: 'DynamoDB', icon: null, fallback: <FaDatabase className="w-5 h-5 text-[#4053D6]" /> },
                    { name: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg', fallback: <SiElasticsearch className="w-5 h-5 text-[#005571]" /> },
                    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', fallback: <SiSqlite className="w-5 h-5 text-[#003B57]" /> },
                ]
            }
        ]
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        icon: <FaCloud className="text-base" />,
        categories: [
            {
                name: 'Cloud Providers',
                items: [
                    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', fallback: <FaAws className="w-5 h-5 text-[#FF9900]" /> },
                    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', fallback: <SiGooglecloud className="w-5 h-5 text-[#4285F4]" /> },
                    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', fallback: <FaCloud className="w-5 h-5 text-[#0078D4]" /> },
                    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', fallback: <SiVercel className="w-5 h-5 text-black" /> },
                    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', fallback: <SiFirebase className="w-5 h-5 text-[#FFCA28]" /> },
                    { name: 'Heroku', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg', fallback: <SiHeroku className="w-5 h-5 text-[#430098]" /> },
                ]
            },
            {
                name: 'DevOps & Containers',
                items: [
                    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', fallback: <SiDocker className="w-5 h-5 text-[#2496ED]" /> },
                    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', fallback: <SiKubernetes className="w-5 h-5 text-[#326CE5]" /> },
                    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', fallback: <SiNginx className="w-5 h-5 text-[#009639]" /> },
                    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', fallback: <SiJenkins className="w-5 h-5 text-[#D24939]" /> },
                    { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', fallback: <SiGithubactions className="w-5 h-5 text-[#2088FF]" /> },
                    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', fallback: <SiTerraform className="w-5 h-5 text-[#7B42BC]" /> },
                ]
            }
        ]
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        icon: <FaRobot className="text-base" />,
        categories: [
            {
                name: 'Artificial Intelligence & LLMs',
                items: [
                    { name: 'OpenAI GPT-4', icon: null, fallback: <SiOpenai className="w-5 h-5 text-[#10A37F]" /> },
                    { name: 'Claude AI', icon: null, fallback: <FaRobot className="w-5 h-5 text-[#D97706]" /> },
                    { name: 'LangChain', icon: null, fallback: <SiLangchain className="w-5 h-5 text-[#00A67E]" /> },
                    { name: 'Llama 3', icon: null, fallback: <FaServer className="w-5 h-5 text-[#0866FF]" /> },
                    { name: 'Python AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', fallback: <SiPython className="w-5 h-5 text-[#3776AB]" /> },
                    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', fallback: <SiTensorflow className="w-5 h-5 text-[#FF6F00]" /> },
                    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', fallback: <SiPytorch className="w-5 h-5 text-[#EE4C2C]" /> },
                ]
            },
            {
                name: 'Workflow Automation & Bots',
                items: [
                    { name: 'n8n Workflows', icon: null, fallback: <FaCode className="w-5 h-5 text-[#EA4B71]" /> },
                    { name: 'Zapier', icon: null, fallback: <FaCloud className="w-5 h-5 text-[#FF4A00]" /> },
                    { name: 'Make.com', icon: null, fallback: <FaServer className="w-5 h-5 text-[#6D28D9]" /> },
                    { name: 'Custom ERP Bots', icon: null, fallback: <FaRobot className="w-5 h-5 text-[#0FB5B7]" /> },
                ]
            }
        ]
    },
    {
        id: 'games',
        title: 'Games & 3D',
        icon: <FaGamepad className="text-base" />,
        categories: [
            {
                name: 'Engines & 3D Interactive',
                items: [
                    { name: 'Unreal Engine 5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg', fallback: <SiUnrealengine className="w-5 h-5 text-black" /> },
                    { name: 'Unity 3D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', fallback: <SiUnity className="w-5 h-5 text-black" /> },
                    { name: 'Godot Engine', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg', fallback: <SiGodotengine className="w-5 h-5 text-[#478CBF]" /> },
                    { name: 'Blender 3D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', fallback: <SiBlender className="w-5 h-5 text-[#F5792A]" /> },
                    { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg', fallback: <SiThreedotjs className="w-5 h-5 text-black" /> },
                ]
            }
        ]
    },
];

export default function TechnologiesSection() {
    const [techList, setTechList] = useState(TECH_CATEGORIES);
    const [activeTab, setActiveTab] = useState(TECH_CATEGORIES[0].id);

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const res = await fetch('/api/technologies', {
                    headers: { 'Content-Type': 'application/json' },
                });
                if (!res.ok) return;
                const data = await res.json();
                let rawItems = [];
                if (Array.isArray(data)) rawItems = data;
                else if (data?.success && Array.isArray(data.data)) rawItems = data.data;
                else if (Array.isArray(data?.technologies)) rawItems = data.technologies;

                // If DB items exist, merge them into the respective categories
                if (rawItems.length > 0) {
                    setTechList((prev) =>
                        prev.map((categoryGroup) => {
                            const updatedCategories = categoryGroup.categories.map((subCat) => {
                                const matchedDbItems = rawItems.filter((dbItem) => {
                                    const dbName = (dbItem.name || '').toLowerCase();
                                    return subCat.items.some((preset) =>
                                        preset.name.toLowerCase() === dbName || dbName.includes(preset.name.toLowerCase())
                                    );
                                });
                                if (matchedDbItems.length === 0) return subCat;

                                const formattedDb = matchedDbItems.map((d) => ({
                                    name: d.name,
                                    icon: d.icon || null,
                                    fallback: <FaCode className="w-5 h-5 text-[#0FB5B7]" />,
                                }));

                                const existingNames = new Set(formattedDb.map((i) => i.name.toLowerCase()));
                                const remainingPresets = subCat.items.filter((p) => !existingNames.has(p.name.toLowerCase()));
                                return { ...subCat, items: [...formattedDb, ...remainingPresets] };
                            });
                            return { ...categoryGroup, categories: updatedCategories };
                        })
                    );
                }
            } catch (err) {
                // Silently maintain high-quality preset list
            }
        };

        fetchTechnologies();
    }, []);

    const activeTech = techList.find((t) => t.id === activeTab) || techList[0];

    return (
        <section id="technologies" className="bg-[#f9fafb] py-16 md:py-24 lg:py-28 site-full-grid border-t border-black/[0.06]" aria-label="Technologies">
            <div className="site-full-grid-inner">
                {/* Eyebrow */}
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/55 mb-4 sm:mb-5">
                    Engineering Ecosystem
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-black/10 mb-8 sm:mb-10" />

                {/* Two-Column Header matching Cubix style */}
                <div className="grid grid-cols-1 gap-6 sm:mt-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-start xl:gap-10 mb-10 md:mb-14">
                    <h2 className="w-full text-[30px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-bold leading-[1.1] tracking-tight text-black">
                        <span className="text-black/55">Technologies </span>We Build With.
                    </h2>
                    <p className="w-full text-left text-[16px] sm:text-[18px] md:text-[19px] font-medium leading-relaxed text-black/55 xl:pt-2">
                        Deep, current expertise across mobile, web, cross-platform, game engines, databases, AI, and cloud, ready to plug into your roadmap.
                    </p>
                </div>

                {/* Interactive Cubix-Style Container Card */}
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                    {/* Top Tab Bar with Smooth Sliding Highlight */}
                    <div className="overflow-x-auto border-b border-black/10 bg-[#f5f6f8] p-1.5 md:p-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div role="tablist" aria-label="Technology categories" className="relative flex gap-1 md:gap-2">
                            {techList.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveTab(tab.id)}
                                        className="relative z-10 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 sm:px-6 sm:py-3.5 text-left outline-none transition-colors duration-200 cursor-pointer"
                                    >
                                        {/* Animated Sliding Pill Background */}
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeTechTabPill"
                                                className="absolute inset-0 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.08]"
                                                transition={{ type: "spring", stiffness: 450, damping: 32 }}
                                            />
                                        )}
                                        <span className={`relative z-10 flex items-center gap-2 text-[14px] sm:text-[15px] md:text-[16px] transition-colors duration-200 ${
                                            isActive ? "font-bold text-[#0B0C0D]" : "font-medium text-[#0B0C0D]/55 hover:text-[#0B0C0D]"
                                        }`}>
                                            <span className={`${isActive ? "text-[#0FB5B7]" : "text-black/40"}`}>{tab.icon}</span>
                                            {tab.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Tab Content Panel */}
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12 min-h-[380px] bg-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.28, ease: "easeOut" }}
                                className="flex flex-col gap-10"
                            >
                                {activeTech.categories.map((subCat, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-black/85 tracking-tight">
                                                {subCat.name}
                                            </h3>
                                            <span className="text-[11px] font-semibold uppercase tracking-wider text-black/45 px-2.5 py-0.5 rounded-full bg-gray-100 border border-black/5">
                                                {subCat.items.length} Techs
                                            </span>
                                        </div>

                                        {/* Technology Grid with Interactive Cards */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                                            {subCat.items.map((item, itemIdx) => (
                                                <motion.div
                                                    key={itemIdx}
                                                    whileHover={{ y: -3, scale: 1.02 }}
                                                    transition={{ duration: 0.18, ease: "easeOut" }}
                                                    className="group flex items-center gap-3 px-3.5 py-3 rounded-xl bg-gray-50/70 hover:bg-white border border-black/[0.06] hover:border-[#0FB5B7]/40 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-md hover:shadow-[#0FB5B7]/10 transition-all duration-300 cursor-pointer"
                                                    title={item.name}
                                                >
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white shadow-xs group-hover:bg-[#0FB5B7]/10 transition-colors p-1 border border-black/5">
                                                        {item.icon ? (
                                                            <img
                                                                src={item.icon}
                                                                alt={item.name}
                                                                className="w-5 h-5 object-contain"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                                                                }}
                                                            />
                                                        ) : null}
                                                        <span className={`${item.icon ? 'hidden' : 'flex'} items-center justify-center`}>
                                                            {item.fallback}
                                                        </span>
                                                    </div>
                                                    <span className="text-[13px] sm:text-[14px] font-semibold text-black/80 group-hover:text-[#0FB5B7] transition-colors truncate">
                                                        {item.name}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
