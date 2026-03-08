'use client';
import { motion } from 'framer-motion';

const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Retail & E-commerce", icon: "🛍️" },
    { name: "Automotive", icon: "🚗" },
    { name: "Education", icon: "🎓" },
    { name: "Logistics", icon: "🚚" },
    { name: "FinTech", icon: "💳" },
    { name: "Real Estate", icon: "🏠" },
    { name: "Travel & Hospitality", icon: "✈️" }
];

export default function Industries() {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
                    <p className="text-xl text-gray-400 max-w-3xl">We build custom mobile solutions that solve complex challenges for diverse industrial segments.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-[#0FB5B7] transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {industry.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{industry.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
