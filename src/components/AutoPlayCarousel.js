'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Autoplayslider = ({ companyNames }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    // Duplicate the items for seamless scrolling
    const totalWidth = container.scrollWidth / 4; // Quarter of the extended width

    // Create the GSAP infinite scrolling animation
    gsap.to(container, {
      x: -totalWidth, // Scroll leftward by a quarter of the total width
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(value => parseFloat(value) % totalWidth), // Loop back seamlessly
      },
    });
  });

  const extendedNames = [...companyNames, ...companyNames, ...companyNames, ...companyNames]; // Clone for looping effect
  //-rotate-3
  return (
    <div className="relative bg-white overflow-hidden py-3 md:py-4 mt-0">
      <div ref={containerRef} className="flex whitespace-nowrap">
        <ul className="flex list-none p-0">
          {extendedNames.map((name, index) => (
            <li key={index} className="inline-flex items-center mr-12 text-xl md:text-2xl font-light text-gray-700">
              <div className="md:h-2.5 md:w-2.5 h-2 w-2 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
              </div>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Autoplayslider;
