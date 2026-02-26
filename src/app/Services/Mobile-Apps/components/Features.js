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
      title: "Native iOS & Android Apps",
      description: "We build high-performance native applications using Swift and Kotlin to deliver the best possible user experience on every platform.",
      icon: <FaRocket size={50} className="text-[#0FB5B7]" />,
    },
    {
      title: "Cross-Platform Efficiency",
      description: "Leverage React Native or Flutter to reach both platforms with a single codebase, reducing time-to-market without compromising quality.",
      icon: <FaGlobeAmericas size={50} className="text-[#0FB5B7]" />,
    },
    {
      title: "UI/UX Focused Design",
      description: "Our design team creates intuitive mobile interfaces that engage users and drive higher retention rates with smooth animations.",
      icon: <FaCogs size={50} className="text-[#0FB5B7]" />,
    },
    {
      title: "Robust Backend Integration",
      description: "Secure and scalable API integrations to ensure your mobile app handles data smoothly and supports enterprise-level workflows.",
      icon: <FaHeadset size={50} className="text-[#0FB5B7]" />,
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: cards[0],
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#0FB5B7] text-sm font-bold uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black leading-tight">Mobile Application <br />Development Services</h3>
          </div>
          <p className="text-gray-400 max-w-sm font-light text-lg">
            We transform complex business requirements into elegant mobile solutions that scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group flex flex-col md:flex-row items-start md:items-center p-8 bg-gray-900/50 border border-gray-800 rounded-3xl hover:border-[#0FB5B7]/50 transition-all duration-500 shadow-2xl gap-8"
            >
              <div className="flex-shrink-0 bg-gray-800 p-5 rounded-2xl group-hover:bg-[#0FB5B7]/10 transition-colors">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold group-hover:text-[#0FB5B7] transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Features;
