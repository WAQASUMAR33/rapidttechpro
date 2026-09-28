'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const images = [
  '/companieslogo/maker4u1.png',
  '/companieslogo/couponriimage.jpg',
  '/companieslogo/PUT.png',
  '/companieslogo/autsparepartlogo.png',
  '/companieslogo/applelegal.png',
];

const AutoImagePlayCarousel = ({ dark = false }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 4 + 10;

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

  const extendedImages = [...images, ...images, ...images, ...images];

  return (
    <div
      className={`relative overflow-hidden h-[86px] md:h-[96px] flex items-center z-20 w-full border-y transition-colors duration-300 ${
        dark
          ? 'bg-[#0B0F17] border-white/10'
          : 'bg-white border-black/[0.06]'
      }`}
    >
      <div ref={containerRef} className="flex whitespace-nowrap">
        <ul className="flex list-none p-0 items-center">
          {extendedImages.map((src, index) => (
            <li key={index} className="inline-flex items-center mr-16 md:mr-24 flex-shrink-0">
              <img
                src={src}
                alt={`Client logo ${(index % images.length) + 1}`}
                className="w-auto h-[44px] md:h-[50px] object-contain opacity-85 hover:opacity-100 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoImagePlayCarousel;
