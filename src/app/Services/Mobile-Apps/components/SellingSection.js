'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function EcommerceSellingSection() {
  const categoryTree = {
    "Android Applications": {
      children: ["E-commerce App", "Social Media App", "Custom Utility App"],
    },
    "iOS Applications": {
      children: ["E-commerce App", "Social Media App", "Custom Utility App"],
    },
  };

  const projects = {
    "E-commerce App": [
      "/projects/figma/3dots/3dots (1).jpg",
      "/projects/figma/3dots/3dots (2).jpg",
      "/projects/figma/3dots/3dots (3).jpg",
      "/projects/figma/3dots/3dots (4).jpg",
      "/projects/figma/3dots/3dots (5).jpg",
      "/projects/figma/3dots/3dots (6).jpg",
    ],
    "Social Media App": [
      "/projects/figma/Tebaro/Terbaro (1).jpg",
      "/projects/figma/Tebaro/Terbaro (1).png",
      "/projects/figma/Tebaro/Terbaro (2).jpg",
      "/projects/figma/Tebaro/Terbaro (2).png",
      "/projects/figma/Tebaro/Terbaro (3).png",
      "/projects/figma/Tebaro/Terbaro (4).png",
    ],
    "Custom Utility App": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
    "Fitness Tracking App": [
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
    ],
    "Educational App": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
    "Enterprise App": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
  };

  const pricingData = {
    "E-commerce App": {
      price: 700,
      features: [
        "User-friendly product browsing",
        "Secure payment gateway integration",
        "Push notifications for updates",
        "User authentication and profiles",
        "Order and delivery tracking",
        "Admin dashboard integration",
      ],
    },
    "Social Media App": {
      price: 900,
      features: [
        "User profile creation",
        "Real-time messaging",
        "Content sharing (images, videos)",
        "Push notifications",
        "Analytics for engagement tracking",
        "Integration with external APIs (e.g., Google, Facebook)",
      ],
    },
    "Custom Utility App": {
      price: 500,
      features: [
        "Custom feature implementation",
        "Offline functionality support",
        "User-friendly UI/UX design",
        "Performance optimization",
        "Secure data storage",
        "Third-party API integration",
      ],
    },
    "Fitness Tracking App": {
      price: 800,
      features: [
        "Real-time activity tracking",
        "Integration with wearable devices",
        "Customizable fitness goals",
        "Progress tracking and analytics",
        "Push notifications for reminders",
        "Community and social features",
      ],
    },
    "Educational App": {
      price: 750,
      features: [
        "Interactive lessons and quizzes",
        "User progress tracking",
        "Multi-language support",
        "Offline access to content",
        "Push notifications for reminders",
        "Video and audio integration",
      ],
    },
    "Enterprise App": {
      price: 1200,
      features: [
        "Role-based access control",
        "Secure data management",
        "Integration with enterprise systems (CRM, ERP)",
        "Real-time reporting and dashboards",
        "Custom workflows and automations",
        "Push notifications and alerts",
      ],
    },
  };

  const [currentCategory, setCurrentCategory] = useState("Android Applications");
  const [selectedFilter, setSelectedFilter] = useState("E-commerce App");


  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setSelectedFilter(categoryTree[category]?.children?.[0] || category);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="px-4 md:px-16 py-16 md:py-24 text-black bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className='text-center text-3xl md:text-5xl mb-10 font-[700] text-black w-full max-w-lg mx-auto rounded-lg py-2 '>
          Are you ready to start? <span className="text-[#0FB5B7]">Your Mobile Project?</span>
        </h1>

        <div className='space-y-8'>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {Object.keys(categoryTree).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`border-2 rounded-full px-6 md:px-10 py-2 md:py-3 text-sm md:text-lg font-bold transition-all duration-300 ${currentCategory === category ? 'bg-black border-black text-white shadow-lg' : 'bg-white border-gray-100 text-gray-500 hover:border-[#0FB5B7]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categoryTree[currentCategory]?.children?.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`border-2 rounded-full text-xs md:text-sm px-4 md:px-6 py-2 font-bold transition-all duration-300 ${selectedFilter === filter ? 'bg-[#0FB5B7] border-[#0FB5B7] text-white' : 'bg-gray-50 border-gray-50 text-gray-600 hover:border-[#0FB5B7]/30'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
          {/* Pricing Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0FB5B7]/5 rounded-bl-full -z-0" />

            <div className="relative z-10">
              <span className="bg-[#0FB5B7] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 inline-block">
                {selectedFilter}
              </span>
              <div className='px-6 md:px-20 pt-16'>
                <div className="px-4">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    ${pricingData[selectedFilter]?.price || 'N/A'}
                  </h2>
                  <p className="mt-2 text-sm md:text-base">Per Month</p>
                </div>
              </div>
              <div className='px-6 md:px-5 py-5'>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  What's included:
                  <span className="h-[2px] w-8 bg-[#0FB5B7] rounded-full" />
                </h3>
                <ul className="space-y-4">
                  {pricingData[selectedFilter]?.features?.map((feature, index) => (
                    <li key={`feature-${index}`} className='flex items-start gap-3 text-gray-600 text-sm md:text-base'>
                      <span className="text-[#0FB5B7] font-bold mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="relative z-10 mt-12 px-8 py-4 w-full rounded-2xl bg-black text-white font-bold hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/10">
              Book Free Consultancy
            </button>
          </div>

          {/* Image Showcase Grid */}
          <div className="lg:col-span-2">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <AnimatePresence mode="wait">
                {projects[selectedFilter]?.map((imageSrc, index) => (
                  <motion.div
                    key={`project-${index}`}
                    className={`overflow-hidden w-[40vw] h-[40vw] md:w-[18vw] md:h-[18vw] rounded-2xl bg-gray-100 border border-gray-100 shadow-sm`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${selectedFilter} mockup ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

  );
}
