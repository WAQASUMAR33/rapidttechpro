'use client';
import { useGSAP } from '@gsap/react';
import React, { useState, useRef } from 'react';
import { FaStar, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const awardsData = [
  { company: 'Clutch', rating: '4.9', description: 'Top-rated software development company 2024', stars: 5 },
  { company: 'GoodFirms', rating: '4.9', description: 'Top software consulting experts 2024', stars: 5 },
  { company: 'Trustpilot', rating: '4.8', description: 'Excellent service & client satisfaction 2024', stars: 5 },
  { company: 'Google', rating: '5.0', description: 'Highest rated tech agency in the region', stars: 5 },
  { company: 'Clutch', rating: '4.9', description: 'Top-rated software development company 2024', stars: 5 },
  { company: 'GoodFirms', rating: '4.9', description: 'Top software consulting experts 2024', stars: 5 },
];

const AwardsAndRecognitions = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(0);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(() => {
    const scrollContainer = () => {
      if (!isPaused && containerRef.current) {
        scrollRef.current += 0.5;
        if (scrollRef.current >= containerRef.current.scrollWidth / 2) {
          scrollRef.current = 0;
        }
        containerRef.current.scrollLeft = scrollRef.current;
      }
      animationRef.current = requestAnimationFrame(scrollContainer);
    };
    animationRef.current = requestAnimationFrame(scrollContainer);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  return (
    <section className="bg-gray-900 text-white py-16 md:py-24 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <FaTrophy className="text-amber-400 text-lg" />
              <span className="text-[#0FB5B7] text-sm font-semibold tracking-widest uppercase">Recognition</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Our Awards &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FB5B7] to-cyan-300">
                Recognitions.
              </span>
            </h2>
            <p className="text-white/60 text-base md:text-lg mt-3 max-w-2xl">
              Recognized globally for our industry-leading development expertise and innovative solutions.
            </p>
          </motion.div>
        </div>

        {/* Scrolling Cards */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          <div
            ref={containerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-5 overflow-hidden"
          >
            {[...awardsData, ...awardsData].map((award, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0FB5B7]/30 rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl text-white">{award.company}</h3>
                  <div className="flex items-center gap-1 bg-amber-400/10 px-2 py-1 rounded-full">
                    <FaStar className="text-amber-400 text-xs" />
                    <span className="text-amber-400 text-sm font-bold">{award.rating}</span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: award.stars }).map((_, i) => (
                    <FaStar key={i} className="text-amber-400" size={12} />
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAndRecognitions;
