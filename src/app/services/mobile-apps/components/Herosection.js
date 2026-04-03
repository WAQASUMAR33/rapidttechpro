'use client';
import { motion } from 'framer-motion';

export default function MobileAppsHero() {
    return (
        <section className="relative bg-white pt-20 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-extrabold text-[#0a0a0a] leading-tight mb-6 mt-12">
                                Premier <span className="text-[#0FB5B7]">Mobile App</span> Development Agency
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                                We transform your vision into world-class mobile experiences. From strategy to launch, we build high-performance iOS and Android apps that drive real business results.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-4 mb-12 mt-12">
                                <button className="px-8 py-4 bg-black text-white hover:bg-[#0FB5B7] transition-all rounded-full font-bold text-lg shadow-xl hover:shadow-[#0FB5B7]/20">
                                    Get A Consultation
                                </button>
                                <button className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all rounded-full font-bold text-lg">
                                    Our Success Stories
                                </button>
                            </div>

                            {/* Ratings */}
                            <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-2xl">4.9</span>
                                        <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                                    </div>
                                    <span className="text-gray-500 text-sm font-medium">Clutch Rating</span>
                                </div>
                                <div className="h-10 w-px bg-gray-200" />
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-2xl">5.0</span>
                                        <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                                    </div>
                                    <span className="text-gray-500 text-sm font-medium">Google Reviews</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img
                                src="/images/mobile-hero.png"
                                alt="Mobile App Development Mockup"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-1" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
