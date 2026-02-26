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
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto h-[60vh] p-4">
                {/* Text Section */}
                <div ref={herosection} className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl text-center md:text-left font-[700]">
                        Point Of Sale
                    </h1>
                    <p className="text-xl md:text-2xl mt-4 text-center md:text-left">
                        Simplify sales, inventory, and customer management with our robust Point of Sale solutions designed to enhance business efficiency and customer satisfaction.
                    </p>
                </div>

                {/* Image Section */}
                <div ref={heroimg} className="p-8 flex flex-col justify-center items-center">
                    <Image
                        className="w-[50vw] h-auto rounded-xl object-cover"
                        src="/subpageshero/pos.jpg"
                        alt="Point Of Sale (POS) Solutions - RapidTechPro"
                        width={800}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </>
    );
}
