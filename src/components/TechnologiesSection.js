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
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed">
                        Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.
                    </p>
                </div>

                {/* Main Tabs Container */}
                <div className="flex flex-col lg:flex-row gap-12 min-h-[500px] border-t border-gray-100 pt-12">
                    {/* Sidebar Buttons */}
                    <div className="lg:w-1/4 flex flex-col gap-2">
                        {techData.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`text-left px-6 py-4 rounded-2xl text-lg md:text-xl font-semibold transition-all duration-300 border-2 ${activeTab === tab.id
                                    ? 'bg-[#0FB5B7] text-white border-[#0FB5B7] shadow-lg shadow-[#0FB5B7]/20 scale-[1.02]'
                                    : 'text-gray-500 border-transparent hover:text-[#0FB5B7] hover:bg-[#0FB5B7]/5 hover:border-[#0FB5B7]/20 font-medium'
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
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex flex-col gap-12"
                            >
                                {activeTech?.categories.length > 0 ? (
                                    activeTech.categories.map((cat, idx) => (
                                        <div key={idx} className="space-y-8">
                                            <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight border-l-4 border-[#0FB5B7] pl-4">
                                                {cat.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-5">
                                                {cat.items.map((item, i) => (
                                                    <motion.div
                                                        key={i}
                                                        whileHover={{ scale: 1.05, y: -5 }}
                                                        className="group flex items-center gap-4 px-6 py-3.5 bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(15,181,183,0.15)] transition-all border border-gray-100 hover:border-[#0FB5B7]/30 cursor-pointer"
                                                    >
                                                        <div className="w-8 h-8 flex items-center justify-center p-1.5 bg-gray-50 rounded-lg group-hover:bg-[#0FB5B7]/10 transition-colors">
                                                            <img
                                                                src={item.icon}
                                                                alt={item.name}
                                                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                                                onError={(e) => { e.target.style.display = 'none'; }}
                                                            />
                                                        </div>
                                                        <span className="text-gray-800 font-bold group-hover:text-[#0FB5B7] transition-colors">{item.name}</span>
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

                {/* Bottom Banner */}
                <div className="mt-20 md:mt-32">
                    <div className="bg-[#0FB5B7]/5 rounded-[40px] px-8 md:px-16 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#0FB5B7]/10">
                        <h3 className="text-2xl md:text-4xl font-extrabold text-black leading-tight max-w-xl">
                            Create a software development <span className="text-[#0FB5B7]">Team</span> with us
                        </h3>
                        <button
                            className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0FB5B7] hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[#0FB5B7]/20 shrink-0"
                            onClick={() => dispatch(openPopup())}
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
