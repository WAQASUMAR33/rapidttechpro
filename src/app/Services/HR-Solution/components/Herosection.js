'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";

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
                        HR Solutions
                    </h1>
                    <p className="text-xl md:text-2xl mt-4 text-center md:text-left">
                        Streamline your hiring process, manage talent efficiently, and build a stronger workforce with our comprehensive HR solutions tailored to your business needs.
                    </p>
                </div>

                {/* Image Section */}
                <div ref={heroimg} className="p-8 flex flex-col justify-center items-center">
                    <img 
                        className="w-[50vw] h-[50vh] rounded-xl object-cover" 
                        src="/subpageshero/hr hero 2.jpg" 
                        alt="HR Solutions" 
                    />
                </div>
            </div>
        </>
    );
}
