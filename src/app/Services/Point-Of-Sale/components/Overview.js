'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const cardsRef = useRef([]);

  const services = [
    { title: "Custom Design", description: "Tailored interfaces for your brand." },
    { title: "SEO Optimization", description: "Boost your store's search rankings." },
    { title: "Mobile Responsive", description: "Optimized for all devices." },
    { title: "Secure Payments", description: "Integrations with trusted gateways." },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    // GSAP animation
    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: cards[0], // Use the first card as the trigger
        start: "top 100%", // Animation starts when the section enters the viewport
        end:"bottom 100%",
        scrub:2
        // toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="py-16 bg-black text-white h-[60vh] flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              ref={(el) => (cardsRef.current[index] = el)} // Add each card to refs
              className="p-6 rounded-lg  bg-white/10 hover:bg-white/20 shadow-[0_0_8px_white] border-white border text-center"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4 text-white">{service.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
