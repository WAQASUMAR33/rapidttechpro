'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalOffice() {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.from(cardsRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,

            scrollTrigger: {
                trigger: cardsRef.current[0]?.parentElement, // Trigger animation when the grid is in view
                start: "top 100%", // Adjust based on when you want the animation to start
                end: "top 70%",
                scrub: 2,
            },
        });
    }, []);

    return (
        <div className="p-12 bg-white">
            <h1 className="text-3xl md:text-5xl font-bold max-w-xl">
                Our Global Office Locations
            </h1>
            <p className="mt-4 text-xl max-w-lg mb-2">
                Find your team among 350 specialists in 4 offices from 3 countries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                {["Manchester", "Dubai", "New York"].map((location, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)} // Assign each card to the cardsRef array
                        className="card-1 rounded-xl flex flex-col h-full"
                    >
                        <div className="w-full h-80 rounded-xl">
                            <Image
                                src="/images/herosection.png"
                                alt={location}
                                width={600}
                                height={400}
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-40">
                            <h1 className="text-xl md:text-2xl font-bold mt-2">{location}</h1>
                            <p className="mt-2">
                                73 Meadway, Bramhall
                                Stockport, Manchester - SK7 1LX,
                                United Kingdom
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
