'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ServiceHeroSection() {
  const asset1Ref = useRef(null);
  const asset2Ref = useRef(null);

  useEffect(() => {
    // Subtle floating animations for the new assets
    gsap.to(asset1Ref.current, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(asset2Ref.current, {
      y: -10,
      x: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="relative min-h-[90vh] lg:min-h-screen w-full bg-[#F4F5F7] text-black flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">

      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#0FB5B7]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Edge-to-Edge Assets (Outside constrained container) */}
      {/* Floating Image 1 (Left - Sphere/Asset) - Reduced top margin and size */}
      <div
        ref={asset1Ref}
        className="absolute left-[-2%] top-[200px] w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 z-10 opacity-70 md:opacity-90"
      >
        <Image
          src="/images/download.webp"
          alt="Digital Service Element 1"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Floating Image 2 (Right - Hand/Asset) - Reduced size and flushed to edge */}
      <div
        ref={asset2Ref}
        className="absolute right-[-2%] bottom-[-5%] w-[180px] h-[180px] md:w-[280px] md:h-[280px] lg:w-[420px] lg:h-[420px] z-10"
      >
        <Image
          src="/images/service1.webp"
          alt="Digital Service Element 2"
          fill
          className="object-contain object-right-bottom"
          priority
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col items-center">

        {/* Center Content Area */}
        <div className="max-w-5xl w-full text-center relative z-20">
          <h1 className="text-3xl sm:text-5xl md:text-[4rem] lg:text-[5.5rem] font-bold tracking-tight leading-[1] md:leading-[1.1] mx-auto">
            <span className="text-[#0FB5B7]">Business</span> through <br />
            Accelerated Digital <br />
            Services.
          </h1>
          <p className="text-base md:text-xl font-normal mt-10 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Achieve business goals and meet user satisfaction by developing seamless and intuitive products.
          </p>
        </div>

      </div>
    </div>
  );
}
