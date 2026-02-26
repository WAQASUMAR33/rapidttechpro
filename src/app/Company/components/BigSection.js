'use client'
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "We are the best agency to improve your deals. Great theme with great features!",
    description: "An effective template for developing your website!",
    image: "/team/waqas.png",
    name: "Waqas Umar",
    position: "CEO",
    content:
      "Use your website for any financial business, corporation, company, agency, digital marketing, consulting, digital studio, mobile app software, start–up business and more.",
  },
  {
    title: "Take your business to the next level with our cutting-edge solutions!",
    description: "A robust framework for modern businesses.",
    image: "/team/kashif.jpg", // Replace with actual profile image URL
    name: "Kashif",
    position: "Co-founder",
    content:
      "Our solutions cater to startups, enterprises, and everything in between. Experience the best digital transformation.",
  },
  // {
  //   title: "Achieve your goals with our professional services!",
  //   description: "Tailored strategies for unparalleled success.",
  //   image: "/team/Ali.png", // Replace with actual profile image URL
  //   name: "Ali",
  //   position: "Developer",
  //   content:
  //     "From digital marketing to consulting, our team ensures your business gets the attention it deserves.",
  // },
];

export default function BigSectionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="w-full h-[70vh] md:h-screen bg-black text-white flex items-center relative overflow-hidden ">
      {/* Content Section */}
      <div className="w-[80vw] mx-auto relative h-full">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute  grid grid-cols-2  w-full h-full  "
          >
            {/* Left Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-white mb-8">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-start justify-center relative">
              <p className="text-white text-justify text-lg md:text-xl mb-6">
                {slides[currentSlide].content}
              </p>
              <div className="flex items-center">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{slides[currentSlide].name}</h3>
                  <p className="text-gray-400 text-sm">
                    {slides[currentSlide].position}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full"
      >
        <FaArrowCircleLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full"
      >
        <FaArrowCircleRight className="w-6 h-6" />
      </button>
    </div>
  );
}
