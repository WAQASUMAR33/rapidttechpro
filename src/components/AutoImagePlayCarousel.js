'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const images = [
  '/companieslogo/maker4u1.png',
  '/companieslogo/couponriimage.jpg',
  '/companieslogo/PUT.png',
  '/companieslogo/autsparepartlogo.png',
  '/companieslogo/applelegal.png',
  // 'https://www.couponri.com/logo/logo2.jpg',
];

const AutoImagePlayCarousel = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;

    const totalWidth = container.scrollWidth / 4 + 10;

    gsap.to(container, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(value => parseFloat(value) % totalWidth), // Loop back seamlessly
      },
    });
  });

  const extendedImages = [...images, ...images, ...images, ...images]; // Clone for looping effect

  return (
    <div className="relative bg-white overflow-hidden mt-2">
      <div ref={containerRef} className="flex whitespace-nowrap">
        <ul className="flex list-none p-0">
          {extendedImages.map((src, index) => (
            <li key={index} className="inline-flex items-center mr-6 flex-shrink-0">
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="w-auto h-10 object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoImagePlayCarousel;
