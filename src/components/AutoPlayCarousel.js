'use client'
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Autoplayslider = ({ companyNames }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const totalWidth = container.scrollWidth / 2;
    gsap.to(container, {
      x: -totalWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(value => parseFloat(value) % totalWidth),
      },
    });
  });

  const extendedNames = [...companyNames, ...companyNames];

  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden py-6 border-y border-gray-100">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <div ref={containerRef} className="flex whitespace-nowrap">
        <ul className="flex list-none p-0 m-0">
          {extendedNames.map((name, index) => (
            <li
              key={index}
              className="inline-flex items-center mr-10 text-xl md:text-2xl font-medium text-gray-400 hover:text-[#0FB5B7] transition-colors duration-300 cursor-default select-none"
            >
              <span className="w-1.5 h-1.5 bg-[#0FB5B7] rounded-full mr-4 flex-shrink-0" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Autoplayslider;
