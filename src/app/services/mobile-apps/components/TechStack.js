'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techGroups = {
    "iOS": ["Swift", "Objective-C", "Xcode"],
    "Android": ["Kotlin", "Java", "Android Studio"],
    "Cross-Platform": ["Flutter", "React Native", "Ionic"],
    "Backend": ["Node.js", "Python", "PHP", "Go", "Firebase"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
};

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("Cross-Platform");

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Robust Tech Stack</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">We use the most advanced and stable technologies to power your mobile solutions.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.keys(techGroups).map((group) => (
                        <button
                            key={group}
                            onClick={() => setActiveTab(group)}
                            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${activeTab === group
                                    ? 'bg-[#0FB5B7] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {group}
                        </button>
                    ))}
                </div>

                {/* Icons Grid */}
                <div className="min-h-[200px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
                        >
                            {techGroups[activeTab].map((tech) => (
                                <div key={tech} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-white rounded-xl mb-4 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                        {/* Placeholder for actual icons - can use React Icons in final implementation */}
                                        <span className="text-2xl font-bold text-[#0FB5B7]">{tech[0]}</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">{tech}</span>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
