'use client';
import { BsChatDots } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
export default function Features() {
  const features = [
    {
      id: '01',
      title: 'Custom Development',
      description: 'We build scalable, robust software solutions tailored precisely to your business needs and operational goals.',
      icon: <BsChatDots />, // Replace with actual icon or SVG
    },
    {
      id: '02',
      title: 'UI/UX Design',
      description: 'We create intuitive, engaging, and modern user interfaces that delight your customers and drive conversions.',
      icon: <MdOutlineDesignServices />, // Replace with actual icon or SVG
    },
    {
      id: '03',
      title: 'Dedicated Support',
      description: 'Our partnership doesn’t end at launch. We provide ongoing maintenance and dedicated support to keep you growing.',
      icon: <div className="flex"><FaQuoteLeft /><FaQuoteRight /></div>, // Replace with actual icon or SVG
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative solutions. Expert execution.</h2>
        <p className="text-gray-600 mb-12">
          The rapidly evolving digital landscape requires a technical partner with deep expertise and creativity at its core.
        </p>
        <div className="grid md:grid-cols-3 gap-8 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border border-gray-700 p-6 rounded-xl h-[350px] bg-gradient-to-br from-white to-gray-400/20 hover:from-gray-400/20 hover:to-white "
            >
              <div className="text-gray-400 text-base md:text-2xl font-semibold">{feature.id}</div>
              <div className="text-4xl my-6">{feature.icon}</div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm md:text-lg">{feature.description}</p>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};
