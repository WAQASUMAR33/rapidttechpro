'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';

const techData = [
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
        id: 'web-platforms',
        title: 'Web Platforms',
        categories: [
            {
                name: 'Backend',
                items: [
                    { name: 'Laravel', icon: '/tabsimages/laravel.png' },
                    { name: 'Node.js', icon: '/tabsimages/nodejs.png' },
                    { name: 'Django', icon: '/tabsimages/django.png' },
                    { name: 'Spring Boot', icon: '/tabsimages/springboot.png' },
                ]
            },
            {
                name: 'Frontend',
                items: [
                    { name: 'React', icon: '/tabsimages/react.png' },
                    { name: 'Next.js', icon: '/tabsimages/nextjs.png' },
                    { name: 'Tailwind', icon: '/tabsimages/tailwind.png' },
                ]
            }
        ]
    },
    { id: 'cross-platforms', title: 'Cross Platforms', categories: [] },
    { id: 'games', title: 'Games', categories: [] },
    { id: 'database', title: 'Database', categories: [] },
    { id: 'cloud-devops', title: 'Cloud & DevOps', categories: [] },
];

export default function TechnologiesSection() {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(techData[0].id);

    const activeTech = techData.find(t => t.id === activeTab);

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
                    <div className="lg:w-1/4 flex overflow-x-auto lg:overflow-visible flex-row lg:flex-col gap-6 lg:gap-1 border-b border-gray-200 lg:border-none mb-8 lg:mb-0 pb-0 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {techData.map((tab) => (
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
                                {activeTech?.categories.length > 0 ? (
                                    activeTech.categories.map((cat, idx) => (
                                        <div key={idx} className="space-y-6">
                                            <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                                                {cat.name}
                                            </h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                                {cat.items.map((item, i) => (
                                                    <motion.div
                                                        key={i}
                                                        whileHover={{ y: -4 }}
                                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                                        className="group flex items-center gap-3 px-5 py-4 bg-[#F5F5F5] rounded-full cursor-pointer overflow-hidden relative"
                                                        style={{ transition: 'background 0.3s ease, box-shadow 0.3s ease' }}
                                                        onMouseEnter={e => { e.currentTarget.style.background = '#0FB5B7'; e.currentTarget.querySelectorAll('.chip-text').forEach(el => { el.style.color = '#fff'; }); }}
                                                        onMouseLeave={e => { e.currentTarget.style.background = '#F5F5F5'; e.currentTarget.querySelectorAll('.chip-text').forEach(el => { el.style.color = ''; }); }}
                                                    >
                                                        <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-white rounded-full shadow-sm">
                                                            <img
                                                                src={item.icon}
                                                                alt={item.name}
                                                                className="w-5 h-5 object-contain"
                                                                onError={(e) => { e.target.style.display = 'none'; }}
                                                            />
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
