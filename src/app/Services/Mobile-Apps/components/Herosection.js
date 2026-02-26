'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function EcommerceHero() {
    const herosection = useRef();
    const heroimg = useRef();

    useEffect(() => {
        gsap.from(herosection.current, {
            opacity: 0,
            x: -200,
            duration: 2,
            ease: 'power1.out'
        });
        gsap.from(heroimg.current, {
            opacity: 0,
            x: 200,
            duration: 2,
            ease: 'power1.out'
        });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto min-h-[60vh] md:h-[60vh] px-6 md:px-12 py-12 md:py-0 gap-8 md:gap-12">
            {/* Text Section */}
            <div ref={herosection} className="flex flex-col justify-center order-2 md:order-1">
                <h1 className="text-3xl md:text-6xl font-extrabold text-[#0FB5B7] text-left leading-tight">
                    Mobile <span className="text-gray-900">Solutions</span>
                </h1>
                <p className="text-lg md:text-xl mt-6 text-gray-600 text-left leading-relaxed max-w-xl">
                    Take your business to the next level with cutting-edge mobile applications designed to enhance user experience and drive growth. We build high-performance iOS and Android apps.
                </p>
                <div className="flex gap-4 mt-8">
                    <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0FB5B7] transition-all">Get Started</button>
                </div>
            </div>

            {/* Image Section */}
            <div ref={heroimg} className="flex justify-center items-center order-1 md:order-2">
                <div className="relative w-full max-w-md md:max-w-none aspect-[4/3] md:aspect-auto md:h-[50vh]">
                    <Image
                        className="w-full h-full rounded-2xl object-cover shadow-2xl"
                        src="/subpageshero/mobile2.jpg"
                        alt="Mobile App Development Solutions - RapidTechPro"
                        width={800}
                        height={600}
                        priority
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0FB5B7]/10 rounded-full blur-2xl -z-10" />
                </div>
            </div>
        </div>
    );
}

