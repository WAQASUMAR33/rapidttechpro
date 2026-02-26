'use client'
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CallToAction() {
  const dispatch = useDispatch();
  return (
    <section className="bg-white px-4 md:px-16 py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-[#0FB5B7]/8 rounded-full blur-3xl" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#0FB5B7] text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Pull the Trigger!
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight"
        >
          Get Started on{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FB5B7] to-cyan-400">
            Your Journey
          </span>
          <br />Today!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-gray-500 text-base md:text-xl max-w-2xl mx-auto"
        >
          Join 200+ businesses that have transformed their operations with our custom software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => dispatch(openPopup())}
            className="group flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Book Free Consultancy
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => dispatch(openPopup())}
            className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#0FB5B7] text-gray-700 hover:text-[#0FB5B7] px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
          >
            Talk to an Expert
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-gray-400 text-sm"
        >
          Free consultation · No credit card required · Response within 24 hours
        </motion.p>
      </div>
    </section>
  );
}