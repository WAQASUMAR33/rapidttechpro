'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
                                className={`text-left px-6 py-3 rounded-full text-lg md:text-xl font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-[#E8F5EE] text-[#2BA55E]'
                                    : 'text-gray-500 hover:text-black hover:bg-gray-50'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="lg:w-3/4 lg:pl-12 lg:border-l border-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-10"
                            >
                                {activeTech?.categories.length > 0 ? (
                                    activeTech.categories.map((cat, idx) => (
                                        <div key={idx}>
                                            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                                                {cat.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-4">
                                                {cat.items.map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-3 px-5 py-2.5 bg-[#F9FAFB] rounded-full hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                                                    >
                                                        <div className="w-6 h-6 flex items-center justify-center">
                                                            <img
                                                                src={item.icon}
                                                                alt={item.name}
                                                                className="w-full h-full object-contain"
                                                                onError={(e) => { e.target.style.display = 'none'; }}
                                                            />
                                                        </div>
                                                        <span className="text-gray-700 font-medium">{item.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400 italic">
                                        Coming soon...
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="mt-20 md:mt-32">
                    <div className="bg-[#F6F9F8] rounded-[40px] px-8 md:px-16 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <h3 className="text-2xl md:text-4xl font-bold text-black">
                            Create a software development <span className="text-[#2BA55E]">Team</span> with us
                        </h3>
                        <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shrink-0">
                            Get a Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
