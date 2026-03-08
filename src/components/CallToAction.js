'use client';
import React from 'react';
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
import { motion } from 'framer-motion';

export default function CallToAction() {
  const dispatch = useDispatch();

  return (
    <section className="bg-white py-12 md:py-20 flex flex-col items-center text-center px-6 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <p className="text-gray-500 text-lg md:text-xl mb-6 font-medium">Pull the Trigger!</p>
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-16 leading-[1.1] tracking-tight">
          Let's bring your <br />
          <span className="text-black">vision to life</span>
        </h2>

        <button
          onClick={() => dispatch(openPopup())}
          className="px-12 py-4 bg-black text-white rounded-full text-lg md:text-xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Get Started
        </button>
      </motion.div>
    </section>
  );
}