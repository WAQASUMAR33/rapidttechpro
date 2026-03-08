'use client'
import React, { useEffect } from "react";
// import { FaLaptopCode, FaSearch, FaMobileAlt, FaChartLine } from "react-icons/fa";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaRocket, FaGlobeAmericas, FaHeadset, FaCogs } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {

  const features = [
    {
      title: "Tailored Solutions for Every Business",
      description: "From startups to enterprises, we design eCommerce platforms that perfectly align with your goals and scale as you grow.",
      icon: <FaCogs size={70} className="" />,
    },
    {
      title: "Fast Delivery Without Compromise",
      description: "Launch your eCommerce website quickly with our streamlined development process, without sacrificing quality or performance.",
      icon: <FaRocket size={70} className="" />,
    },
    {
      title: "Global Reach, Local Expertise",
      description: "Expand your business globally with multi-language, multi-currency, and region-specific features that make selling effortless.",
      icon: <FaGlobeAmericas size={70} className="" />,
    },
    {
      title: "End-to-End Support You Can Trust",
      description: "Enjoy peace of mind with our dedicated team providing 24/7 support, from setup to ongoing optimization and maintenance.",
      icon: <FaHeadset size={70} className="" />,
    },
  ];
  

  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: cards,
        start: "top 80%", // Animation starts when cards enter 80% of viewport
        end: "top 50%",
        toggleActions: "play none none none",
        scrub:2,
      },
    });
  }, []);

  return (
    <>
      <section className="py-16 bg-black text-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)} // Add each card to refs
                className="flex card items-center p-6 border rounded-lg shadow-[0_0_8px_black] h-[10em]"
              >
                {/* Left Side: Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold ">
                    {feature.title}
                  </h3>
                  <p className="mt-4 ">{feature.description}</p>
                </div>
                {/* Right Side: Icon */}
                <div className="ml-4">{feature.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="border-b-2 border-gray-400 mt-12 max-w-4xl mx-auto"></div>
    </>
  );
};

export default Features;
