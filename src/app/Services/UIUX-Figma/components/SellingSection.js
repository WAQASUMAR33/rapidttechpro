'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function EcommerceSellingSection() {
  const categoryTree = {
    "Web UI Design": {
      children: ["Corporate Website", "E-commerce Website", "Portfolio Website"],
    },
    "Mobile UI Design": {
      children: ["E-commerce App", "Social Media App", "Utility App"],
    },
  };

  const projects = {
    "Corporate Website": [
      "/projects/figma/corporate/maker4u1.jpg",
      "/projects/figma/corporate/maker4u2.jpg",
      "/projects/figma/corporate/maker4u3.jpg",
      "/projects/figma/corporate/Rapid UI.jpeg",
      "/projects/figma/corporate/Rapid UI 2.jpeg",
      "/projects/figma/corporate/Rapid UI 3.jpeg",
    ],
    "E-commerce Website": [
      "/projects/figma/spareonwheel.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
    ],
    "Portfolio Website": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
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
    "Utility App": [
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
  };

  const pricingData = {
    "Corporate Website": {
      price: 500,
      features: [
        "Custom homepage and inner page designs",
        "Responsive design for all devices",
        "High-fidelity wireframes",
        "Interactive prototypes",
        "Branding and color palette customization",
        "Component-based Figma files",
      ],
    },
    "E-commerce Website": {
      price: 700,
      features: [
        "Product page and cart design",
        "User-friendly navigation design",
        "Responsive mobile and desktop layouts",
        "Interactive prototypes",
        "Customizable design elements",
        "SEO-friendly UI structure",
      ],
    },
    "Portfolio Website": {
      price: 400,
      features: [
        "Unique and creative portfolio design",
        "Responsive and lightweight layouts",
        "Interactive components",
        "Custom animations and transitions",
        "Showcase project templates",
        "Figma source file delivery",
      ],
    },
    "E-commerce App": {
      price: 600,
      features: [
        "User-friendly product browsing screens",
        "Payment gateway integration design",
        "Interactive prototyping",
        "Mobile-first responsive layouts",
        "Custom icons and illustrations",
        "Component libraries for reuse",
      ],
    },
    "Social Media App": {
      price: 750,
      features: [
        "Profile and feed design",
        "Messaging and notifications interface",
        "Interactive prototypes",
        "Responsive layouts for mobile/tablets",
        "Customizable theme options",
        "Consistent typography and iconography",
      ],
    },
    "Utility App": {
      price: 450,
      features: [
        "Minimalist, functional layouts",
        "Responsive designs for various devices",
        "Interactive flows and animations",
        "Custom dashboard and tools screens",
        "UI assets export from Figma",
        "Scalable component libraries",
      ],
    },
  };

  const [currentCategory, setCurrentCategory] = useState("Web UI Design");
  const [selectedFilter, setSelectedFilter] = useState("Corporate Website");


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
                      className="w-full h-full object-contain"
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
