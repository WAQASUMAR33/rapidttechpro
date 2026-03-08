'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="px-6 md:px-16 py-20 text-black bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className='text-center text-3xl md:text-5xl mb-10 font-[700]  text-black w-[500px] mx-auto rounded-lg py-2 '>Are you ready to start?</h1>

        <div className=''>
          <div className="flex flex-wrap gap-4 justify-center items-center max-w-xl text-xl mx-auto">
            {Object.keys(categoryTree).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`border border-black rounded-full px-8 py-3 font-semibold ${currentCategory === category ? 'bg-black text-white' : 'text-black'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          
          <div className="flex flex-wrap gap-2 md:gap-4 mt-6">
            {categoryTree[currentCategory]?.children?.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`border border-black rounded-full text-xs md:text-base px-3 md:px-6 py-2 font-semibold ${selectedFilter === filter ? 'bg-bluish text-white' : 'text-black'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 h-[72vh]">
          
          <div className="bg-[#f3f6f9] border border-white rounded-lg relative  flex flex-col justify-between h-[30em]">
            <div className="absolute top-10 -left-10 h-16 w-36 -rotate-90 bg-bluish text-white rounded-tr-lg rounded-bl-lg px-3 py-1 flex justify-center items-center">
              {selectedFilter}
            </div>
            <div className='px-20 pt-16'>
              <div className="px-4">
                <h2 className="text-5xl font-bold">
                  ${pricingData[selectedFilter]?.price || 'N/A'}
                </h2>
                <p className="mt-2">Per Month</p>
              </div>
            </div>
            <div className='px-5 py-5'>
              <h3 className="mt-6 text-lg font-semibold">Details:</h3>
              <ul className="mt-4 space-y-2">
                {pricingData[selectedFilter]?.features?.map((feature, index) => (
                  <li key={index} className='line-clamp-1'>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <button className="  mb-6 px-3 py-1 w-auto mx-auto rounded-full border border-black text-white bg-black hover:bg-white hover:text-black">
              Book Free Consultancy
            </button>
          </div>

          
          <div className="col-span-2">
            <motion.div
              className="flex flex-wrap justify-center gap-1"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <AnimatePresence mode="wait">
              {projects[selectedFilter].map((imageSrc, index) => (
                  <motion.div
                    key={imageSrc + index}
                    className={`overflow-hidden w-[18vw] h-[18vw] rounded-lg `}
                    initial={{
                      x: Math.random() * 500 - 250, // Random x offset
                      y: Math.random() * 500 - 250, // Random y offset
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      x: 0, // Fly to center
                      y: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      x: Math.random() * 500 - 250, // Fly out to random position
                      y: Math.random() * 500 - 250,
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={imageSrc}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
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
