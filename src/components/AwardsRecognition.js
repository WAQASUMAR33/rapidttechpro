// components/AwardsAndRecognitions.js
'use client';
import { useGSAP } from '@gsap/react';
import React, { useState, useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; // Importing the star icon

const AwardsAndRecognitions = () => {
  const awardsData = [
    { company: 'Clutch', rating: 4.9, description: 'Acclaimed as a top-rated software development company 2024', icon: <FaStar /> }, // Replaced with icon
    { company: 'GoodFirms', rating: 4.9, description: 'Acknowledged among the top software consulting experts 2024', icon: <FaStar /> },
    { company: 'Clutch', rating: 4.9, description: 'Acclaimed as a top-rated software development company 2024', icon: <FaStar /> },
    { company: 'GoodFirms', rating: 4.9, description: 'Acknowledged among the top software consulting experts 2024', icon: <FaStar /> },
  ];

  const containerRef = useRef(null);
  const scrollRef = useRef(0); // Tracks current scroll position
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(() => {
    const totalAwards = [...awardsData, ...awardsData]; // Clone data array

    const scrollContainer = () => {
      if (!isPaused) {
        scrollRef.current += 0.5;

        if (scrollRef.current >= containerRef.current.scrollWidth / 2) {
          scrollRef.current = 0;
        }

        containerRef.current.scrollLeft = scrollRef.current;
      }
      animationRef.current = requestAnimationFrame(scrollContainer);
    };

    animationRef.current = requestAnimationFrame(scrollContainer);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  return (
    <section className=" bg-black text-white py-10 md:py-20 px-4 md:px-16 overflow-hidden">
      <h2 className="md:text-5xl text-3xl font-bold text-left mb-8">
        Our Awards and <br></br><span className="text-bluish">Recognitions.</span>
      </h2>
      <p className="text-lg md:text-2xl font-light mb-12 max-w-5xl">
        Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!
      </p>

<div className='relative'>
      {/* Awards Slider */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className=" flex gap-6 overflow-hidden h-[280px]" // Removed whitespace-nowrap
      >
        {[...awardsData, ...awardsData].map((award, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center bg-gradient-to-br from-black/10 to-gray-500 rounded-lg p-6 w-64 md:min-w-64  md:max-w-64 text-left"
          >
            <div className="flex justify-between items-center gap-2 mb-4 w-full">
              <div className="flex justify-center items-center">
                <h3 className="font-semibold text-2xl">{award.company}</h3>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-yellow-500 text-xl">{award.icon}</span> {/* Display the icon here */}
                <span className="text-2xl">{award.rating}</span>
              </div>
            </div>

            {/* Adjusting Description Size */}
            <div className="">
              <p className="text-md text-gray-300 h-[80px] overflow-hidden">
                {award.description}
              </p>
            </div>
          </div>
        ))}
       
      </div>
             {/* Left gradient overlay */}
         <div className="absolute left-0 top-0 h-full w-6 md:w-12  bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

{/* Right gradient overlay */}
<div className="absolute right-0 top-0 h-full w-6 md:w-12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
</div>
    </section>
  );
};

export default AwardsAndRecognitions;
