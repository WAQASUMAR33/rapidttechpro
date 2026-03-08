'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.",
        author: "Jackie Dallas",
        role: "Director",
        initials: "JD",
        avatarColor: "bg-[#25CBA1]",
        logo: "/business/hotset.png", // Attempting logical paths based on prev research
        stars: 5,
    },
    {
        id: 2,
        quote: "The engagement met the expectations of the internal team. Cubix successfully worked within the robust scope, often going above and beyond to ensure client satisfaction. The team provides clients with a high level of support while still working quickly and creatively.",
        author: "Hamed Al Zadjal",
        role: "Digital Manager",
        initials: "HA",
        avatarColor: "bg-[#25CBA1]",
        logo: "/business/electro.png",
        stars: 5,
    },
    {
        id: 3,
        quote: "Cubix produced clean code and the app got positive reviews. While there were staffing and language issues, the overall experience was positive. The assigned resources were attentive and fixed problems within a day.",
        author: "Geoffrey Anderson",
        role: "Co-Founder and CSO",
        initials: "GA",
        avatarColor: "bg-[#25CBA1]",
        logo: "/business/glimmer.png",
        stars: 5,
    }
];

export default function TestimonialsSection() {
    return (
        <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our clients simply love <span className="text-[#25CBA1]">what we do</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                        Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
                    </p>

                    {/* Rating Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        <div className="flex items-center gap-3">
                            <img src="/business/clutch.png" alt="Clutch" className="h-8 md:h-10 brightness-0 invert" />
                            <div className="text-left">
                                <div className="flex text-red-500 text-sm">★★★★★</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">52 Reviews</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/business/goodfirms.png" alt="GoodFirms" className="h-8 md:h-10 brightness-0 invert" />
                            <div className="text-left">
                                <div className="flex text-blue-500 text-sm">★★★★★</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">32 Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials List */}
                <div className="space-y-6 max-w-5xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-black border border-gray-800 rounded-[24px] p-8 md:p-10 flex flex-col gap-8 hover:border-gray-700 transition-colors"
                        >
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal italic">
                                "{item.quote}"
                            </p>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className={`${item.avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg`}>
                                        {item.initials}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-white text-base">{item.author}, {item.role}</span>
                                        <div className="flex text-yellow-500 text-xs mt-1">
                                            {[...Array(item.stars)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="h-8 md:h-10 flex items-center">
                                    <img src={item.logo} alt="Company Logo" className="h-full object-contain opacity-80" onError={(e) => { e.target.style.display = 'none'; }} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
