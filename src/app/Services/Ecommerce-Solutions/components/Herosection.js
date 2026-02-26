'use client'
import gsap from "gsap"
import { useRef } from "react";
import { useGSAP } from "@gsap/react"
import Image from "next/image"
export default function EcommerceHero() {
    const herosection = useRef();
    const heroimg = useRef();

    useGSAP(() => {
        gsap.from(herosection.current, {
            opacity: 0,
            x: -200,
            duration: 2,
            ease: 'power1.out'

        })
        gsap.from(heroimg.current, {
            opacity: 0,
            x: 200,
            duration: 2,
            ease: 'power1.out'

        })
    });


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 pt-8 ">
                <div ref={herosection} className="flex flex-col justify-center text-justify">
                    <h1 className="text-3xl md:text-4xl text-center md:text-left font-[700]">Transform Your Online Business with Global Ecommerce Solutions</h1>
                    <p className="text-xs md:text-base mt-4 text-center md:text-justify">Running an online store shouldn’t feel overwhelming. At RapidTechPro, we bridge the gap between your vision and success with custom eCommerce solutions designed for growth. Whether you're launching a new store or scaling an enterprise-level eCommerce platform, we solve your challenges:</p>
                    <ul className="list-disc ml-4 text-base text-justify">
                        <li>
                            Struggling with slow website performance? We deliver lightning-fast eCommerce websites for seamless shopping experiences.
                        </li>
                        <li>
                            Facing low conversion rates? Our global eCommerce solutions are optimized to turn visitors into loyal customers.
                        </li>
                        <li>
                            Limited by local markets? Expand globally with multi-currency, multi-language, and region-friendly features.
                        </li>
                    </ul>
                    <p className="text-xs md:text-base text-center md:text-left">With RapidTechPro, you’ll gain a partner who understands your unique needs and provides cutting-edge solutions to dominate the eCommerce landscape. Let’s build your path to online success today!</p>
                </div>
                <div ref={heroimg} className="flex flex-col justify-center items-center">
                    <Image src="/subpageshero/ecommerce hero2.jpg" alt="Transform Your Online Business with RapidTechPro's Ecommerce Solutions" width={800} height={600} className="w-full h-auto rounded-xl object-cover" priority />
                </div>
            </div>
        </>
    );
}