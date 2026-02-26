'use client'
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
import { motion } from "framer-motion";
import { FaArrowRight, FaRocket } from "react-icons/fa";

export default function CreateSoftwareSection() {
    const dispatch = useDispatch();
    return (
        <section className="px-4 md:px-16 py-8 md:py-12 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl px-8 md:px-16 py-14 md:py-20 text-white"
            >
                {/* Decorative glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#0FB5B7]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <FaRocket className="text-[#0FB5B7] text-xl" />
                            <span className="text-[#0FB5B7] text-sm font-semibold tracking-widest uppercase">Let's Build Together</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Ready to Create Software
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FB5B7] to-cyan-300">
                                That Changes Everything?
                            </span>
                        </h2>
                        <p className="mt-4 text-white/60 text-base md:text-lg max-w-xl">
                            From idea to launch — we handle it all. Let's build something remarkable together.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 flex-shrink-0">
                        <button
                            onClick={() => dispatch(openPopup())}
                            className="group flex items-center gap-2 bg-[#0FB5B7] hover:bg-[#0ca3a5] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-[#0FB5B7]/30 hover:shadow-[#0FB5B7]/50 hover:scale-105 whitespace-nowrap"
                        >
                            Book Free Consultancy
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                        <p className="text-center text-white/40 text-xs">No commitment required</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}