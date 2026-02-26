'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

const images = [
  '/companieslogo/maker4u1.png',
  '/companieslogo/couponriimage.jpg',
  '/companieslogo/PUT.png',
  '/companieslogo/autsparepartlogo.png',
  '/companieslogo/applelegal.png',
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
        x: gsap.utils.unitize(value => parseFloat(value) % totalWidth),
      },
    });
  });

  const extendedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative bg-white overflow-hidden mt-4">
      <div ref={containerRef} className="flex whitespace-nowrap">
        <div className="flex list-none p-0">
          {extendedImages.map((src, index) => (
            <div key={index} className="inline-flex items-center px-4 flex-shrink-0">
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                width={150}
                height={80}
                className="w-auto h-16 object-contain"
                loading="eager" // Keeping it eager for top of page carousel if needed, or lazy if below fold.
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoImagePlayCarousel;
