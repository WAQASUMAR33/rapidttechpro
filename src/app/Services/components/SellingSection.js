'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function SellingSection() {
  const categories = [
    "Ecommerce Solutions",
    "Web Applications",
    "CMS",
    "Mobile Apps",
    "HR Solutions",
    "Point of Sale System",
    "UI/UX - Figma",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Ecommerce Solutions");

  const pricingData = {
    "Ecommerce Solutions": {
      price: 300,
      features: [
        "Custom ecommerce platform development",
        "Secure payment gateway integration",
        "Inventory and order management system",
        "SEO and marketing tools",
        "Responsive and mobile-friendly designs",
        "Customer reviews and ratings system",
      ],
    },
    "Web Applications": {
      price: 250,
      features: [
        "Custom web application development",
        "Scalable and high-performance solutions",
        "API development and integration",
        "Cross-browser compatibility",
        "Secure and data-driven architecture",
        "User-friendly interface design",
      ],
    },
    "CMS": {
      price: 200,
      features: [
        "Customizable content management system",
        "Role-based access control",
        "Built-in SEO optimization tools",
        "Integration with analytics platforms",
        "Drag-and-drop content editor",
        "Support for multi-language content",
      ],
    },
    "Mobile Apps": {
      price: 350,
      features: [
        "Cross-platform app development",
        "Push notifications and messaging",
        "Integration with third-party APIs",
        "In-app purchases and payment processing",
        "Custom UI/UX designs",
        "Real-time data syncing",
      ],
    },
    "HR Solutions": {
      price: 400,
      features: [
        "Employee management system",
        "Payroll and benefits management",
        "Performance tracking and appraisals",
        "Leave and attendance management",
        "Recruitment and onboarding tools",
        "Customizable workflows",
      ],
    },
    "Point of Sale System": {
      price: 300,
      features: [
        "Custom POS software development",
        "Inventory and stock management",
        "Sales and billing system",
        "Support for multiple payment methods",
        "Detailed sales analytics and reporting",
        "Integration with accounting software",
      ],
    },
    "UI/UX - Figma": {
      price: 150,
      features: [
        "Custom UI/UX design services",
        "Prototyping and wireframing using Figma",
        "Interactive mockups for user testing",
        "Responsive design for all screen sizes",
        "Design systems and reusable components",
        "Consistent branding across all designs",
      ],
    },
  };

  const imageData = {
    "Ecommerce Solutions": [
      "/projects/Store2u/Store2u 1.png",
      "/projects/Store2u/Store2U 2.png",
      "/projects/Store2u/Store2U 3.png",
      "/projects/Store2u/Store2U 4.png",
      "/projects/Store2u/Store2U 5.png",
      "/projects/Store2u/Store2U 6.png",
    ],
    "Web Applications": [
      "/projects/maker4u/Maker4u 0.png",
      "/projects/maker4u/Maker4u 2.png",
      "/projects/maker4u/Maker4u 3.png",
      "/projects/maker4u/Maker4u 4.png",
      "/projects/maker4u/Maker4u 5.png",
      "/projects/maker4u/Maker4u 6.png",
    ],
    "CMS": [
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
    ],
    "Mobile Apps": [
      "/projects/Tebaro.png",
      "/projects/3dots.jpg",
      "/projects/figma/Tebaro/Terbaro (4).png",
      "/projects/figma/3dots/3dots (4).jpg",
      "/projects/figma/Tebaro/Terbaro (2).jpg",
      "/projects/figma/3dots/3dots (3).jpg",
    ],
    "HR Solutions": [
      "/projects/maker4u3.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
    ],
    "Point of Sale System": [
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
      "/projects/maker4u3.png",
      "/carousel/launcher.png",
    ],
    "UI/UX - Figma": [
      "/projects/Tebaro.png",
      "/projects/3dots.jpg",
      "/projects/figma/spareonwheel.png",
      "/projects/figma/Tebaro/Terbaro (4).png",
      "/projects/figma/rapidtechprowebsite.jpg",
      "/projects/figma/Tebaro/Terbaro (2).jpg",
    ],
  };



  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="px-4 md:px-16 py-12 md:py-20 text-black bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">We Sell Our Services.</h1>
            <div className="flex flex-wrap gap-4 justify-start mt-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`border border-black rounded-full px-6 py-2 font-semibold ${selectedCategory === category ? 'bg-bluish text-white' : 'text-black'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 ">
          <div className="bg-[#f3f6f9] border border-white rounded-lg relative flex flex-col justify-between h-[30em] ">
            <div className="absolute top-10 -left-10 h-16 w-36 -rotate-90 bg-bluish text-white rounded-tr-lg rounded-bl-lg px-3 py-1 flex justify-center items-center">
              {selectedCategory}
            </div>
            <div className='px-6 md:px-20 pt-16'>
              <div className="px-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  ${pricingData[selectedCategory]?.price || 'N/A'}
                </h2>
                <p className="mt-2 text-sm md:text-base">Per Month</p>
              </div>
            </div>
            <div className='px-6 md:px-5 pt-5'>
              <h3 className="mt-6 text-lg font-semibold">Details:</h3>
              <ul className="mt-4 space-y-2">
                {pricingData[selectedCategory]?.features?.map((feature, index) => (
                  <li key={index} className='line-clamp-1'>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <button className="mt-2 mb-6 px-3 py-2 w-auto mx-auto rounded-full border border-black text-white bg-black hover:bg-white hover:text-black">
              Book Free Consultancy
            </button>
          </div>

          {/* Image Gallery Section */}
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
                {imageData[selectedCategory].map((imageSrc, index) => (
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
