'use client';
import React, { useRef, useState } from 'react';

const ScrollableSlider = ({ data }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to handle scroll event and move to the next slide or section
  const handleScroll = (e) => {
    if (isScrolling) return;

    setIsScrolling(true);
    const slideWidth = sliderRef.current.clientWidth; // Get the width of the container

    if (e.deltaY > 0 && currentSlide < data.length - 1) {
      // Scroll down to the next slide
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      // Scroll up to the previous slide
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }

    // Wait for smooth scrolling to finish before allowing another scroll event
    setTimeout(() => setIsScrolling(false), 500);
  };

  // Scroll to the current slide
  React.useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth; // Get the width of the container
      sliderRef.current.scrollTo({
        left: slideWidth * currentSlide, // Scroll horizontally
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  return (
    <div className="w-screen h-screen overflow-hidden" onWheel={handleScroll}>
      <div
        ref={sliderRef}
        className="flex transition-all duration-500 ease-in-out"
        style={{ width: `${data.length * 100}vw` }} // Ensure the total width is large enough for all slides
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-gray-100 snap-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-80 h-60 object-cover mb-4 rounded-lg shadow-lg"
            />
            <div className="text-center">
              <h3 className="text-3xl font-semibold mb-2">{item.title}</h3>
              <p className="text-lg text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableSlider;
