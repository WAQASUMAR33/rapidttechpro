'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function EcommerceSellingSection() {
  const categoryTree = {
    "Retail POS": {
      children: ["Standalone POS", "Cloud-based POS", "Inventory Management POS"],
    },
    "Restaurant POS": {
      children: ["Table Service POS", "Quick Service POS", "Kitchen Display System"],
    },
  };

  const projects = {
    "Standalone POS": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
    "Cloud-based POS": [
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
    ],
    "Inventory Management POS": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
    "Table Service POS": [
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
    ],
    "Quick Service POS": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
    "Kitchen Display System": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
  };

  const pricingData = {
    "Standalone POS": {
      price: 500,
      features: [
        "Simple installation and setup",
        "Supports multiple payment methods",
        "Offline functionality",
        "Basic reporting and analytics",
        "User-friendly interface",
        "Customizable receipts",
      ],
    },
    "Cloud-based POS": {
      price: 800,
      features: [
        "Real-time data synchronization",
        "Access from multiple devices",
        "Automatic software updates",
        "Data backup and recovery",
        "Detailed sales and inventory reports",
        "Multi-store support",
      ],
    },
    "Inventory Management POS": {
      price: 700,
      features: [
        "Real-time inventory tracking",
        "Low-stock alerts",
        "Barcode scanning support",
        "Purchase order creation",
        "Inventory analytics and reports",
        "Integration with e-commerce platforms",
      ],
    },
    "Table Service POS": {
      price: 900,
      features: [
        "Table and seat management",
        "Order customization and notes",
        "Integration with kitchen display systems",
        "Split billing and tips management",
        "Real-time sales tracking",
        "Loyalty and rewards program support",
      ],
    },
    "Quick Service POS": {
      price: 700,
      features: [
        "Quick order processing",
        "Support for multiple payment methods",
        "Combo and discount management",
        "Customer-facing display",
        "Inventory management",
        "Reporting and analytics tools",
      ],
    },
    "Kitchen Display System": {
      price: 600,
      features: [
        "Real-time order updates",
        "Customizable order views",
        "Status tracking for each order",
        "Integration with restaurant POS systems",
        "Color-coded priority levels",
        "Hardware compatibility",
      ],
    },
  };

  const [currentCategory, setCurrentCategory] = useState("Retail POS");
  const [selectedFilter, setSelectedFilter] = useState("Standalone POS");

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
        <h1 className='text-center text-3xl md:text-5xl mb-10 font-[700] text-black w-full max-w-lg mx-auto rounded-lg py-2 '>Are you ready to start?</h1>

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
            <div className='px-6 md:px-20 pt-16'>
              <div className="px-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  ${pricingData[selectedFilter]?.price || 'N/A'}
                </h2>
                <p className="mt-2 text-sm md:text-base">Per Month</p>
              </div>
            </div>
            <div className='px-6 md:px-5 py-5'>
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
                    className={`overflow-hidden w-[40vw] h-[40vw] md:w-[18vw] md:h-[18vw] rounded-lg `}
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
                    <Image
                      src={imageSrc}
                      alt={`Image ${index + 1}`}
                      width={400}
                      height={400}
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
