// components/AwardsAndRecognitions.js
'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AwardsAndRecognitionsSection = () => {
  const awardsData = [
    {
      company: 'Clutch',
      rating: 4.9,
      description: 'Acclaimed as a top-rated software development company 2024',
      image: '/business/clutch.png',
      link: 'https://clutch.co/'
    },
    {
      company: 'BBB',
      rating: 4.9,
      description: 'Acknowledged among the top software consulting experts 2024',
      image: '/business/bbborg.png',
      link: 'https://www.bbb.org/'
    },
    {
      company: 'Trustpilot',
      rating: 4.9,
      description: 'Acclaimed as a top-rated software development company 2024',
      image: '/business/trustpilot2.PNG',
      link: 'https://www.trustpilot.com/'
    },
    {
      company: 'GoodFirms',
      rating: 4.9,
      description: 'Acknowledged among the top software consulting experts 2024',
      image: '/business/goodfirms.png',
      link: 'https://www.goodfirms.co/'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="text-black relative w-full">
      {/* Awards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {awardsData.map((award, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Link
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-[220px] justify-between border border-gray-200 text-gray-800 rounded-2xl p-5 w-full transform transition-all duration-300 hover:border-black hover:shadow-xl bg-white"
            >
              <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center h-12 w-28 bg-white overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.company}
                    className="object-contain max-h-full max-w-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
                  <FaStar className="text-yellow-400 text-lg" />
                  <span className="text-lg font-bold">{award.rating}</span>
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-sm md:text-base text-gray-600 leading-snug group-hover:text-black transition-colors duration-300">
                  {award.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AwardsAndRecognitionsSection;
