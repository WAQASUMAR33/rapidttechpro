'use client';
import React from 'react';
import { motion } from 'framer-motion';

const industryData = [
  {
    name: 'Automotive',
    description: 'Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.',
    highlight: false
  },
  {
    name: 'Finance',
    description: 'Get scalable custom solutions that enhance operational efficiency, boost data security, and streamline your financial services seamlessly.',
    highlight: false
  },
  {
    name: 'Real Estate',
    description: 'Our custom real estate solutions simplify property management and sales, streamline operations, and enhance customer experience effectively.',
    highlight: false
  },
  {
    name: 'Hospitality',
    description: 'Get user-friendly hospitality solutions that enhance guest experiences, boost satisfaction, and streamline hotel operations for better service delivery.',
    highlight: false
  },
  {
    name: 'Education',
    description: 'Revolutionize ed-tech with innovative solutions that increase student engagement, simplify learning, and support personalized education experiences.',
    highlight: false
  },
  {
    name: 'Healthcare',
    description: 'Our healthcare solutions streamline operations, reduce administrative tasks, and improve patient care for more efficient and responsive medical services.',
    highlight: false
  }
];

export default function Industries() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Industries we serve
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-8 md:p-10 rounded-[32px] border-2 transition-all duration-300 flex flex-col h-full cursor-pointer group ${item.highlight
                ? 'border-[#25CBA1] shadow-lg shadow-green-50'
                : 'border-gray-100 hover:border-[#25CBA1] bg-white hover:shadow-xl hover:shadow-green-50/30'
                }`}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 transition-colors duration-300 ${item.highlight ? 'text-[#25CBA1]' : 'text-black group-hover:text-[#25CBA1]'
                }`}>
                {item.name}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
