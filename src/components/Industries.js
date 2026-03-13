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
            Industries We <span className="text-[#0FB5B7]">Serve</span>
          </h2>
          <p className="text-base md:text-lg text-black leading-relaxed">
            With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[24px] border border-gray-100 bg-white flex flex-col h-full cursor-pointer hover:border-[#0FB5B7] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                {item.name}
              </h3>
              <p className="text-black text-base leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

