'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <div className="bg-white py-24 md:py-40 px-6 md:px-12 w-full flex flex-col items-center justify-center border-t border-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 md:mb-10">
          Pull the Trigger!
        </span>
        <h2 className="text-4xl md:text-[64px] lg:text-[76px] font-black text-black tracking-tighter leading-[1.05] mb-12 max-w-3xl">
          Let’s bring your <br className="hidden md:block" /> ideas to life
        </h2>
        <Link
          href="/contact-us"
          className="bg-black text-white font-bold py-3.5 px-10 rounded-full hover:bg-black/90 transition-all duration-300 text-xs md:text-[13px] uppercase tracking-widest cursor-pointer shadow-xl"
        >
          GET STARTED
        </Link>
      </div>

    </div>
  );
}