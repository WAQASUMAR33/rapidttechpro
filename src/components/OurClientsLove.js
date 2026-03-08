'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Hamed Al Zadjali',
    title: 'Digital Manager',
    rating: 5,
    review:
      'RapidTecPro managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    title: 'Project Lead',
    rating: 5,
    review:
      'The team at RapidTecPro was amazing. They took our vision and turned it into reality seamlessly. Communication was always clear, and they went above and beyond to meet our deadlines.',
  },
  {
    id: 3,
    name: 'John Doe',
    title: 'CEO',
    rating: 5,
    review:
      'A highly skilled and reliable team! RapidTecPro exceeded our expectations in every way. The project was delivered ahead of schedule, and the quality of work was exceptional.',
  },
  {
    id: 4,
    name: 'Alice Williams',
    title: 'Product Manager',
    rating: 4,
    review:
      'The project delivery was smooth, and the team communicated very well throughout the development process. The final product met our expectations, and we are excited to see the next phase.',
  },
  {
    id: 5,
    name: 'George Clark',
    title: 'Marketing Specialist',
    rating: 5,
    review:
      'RapidTecPro provided top-tier services, consistently delivering high-quality work on time. Their attention to detail and client-first attitude set them apart from the rest.',
  },
  {
    id: 6,
    name: 'Sophia Lee',
    title: 'Lead Developer',
    rating: 5,
    review:
      'Their technical expertise and ability to solve complex problems quickly helped us keep the project on track. We appreciate their dedication and professionalism.',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < reviews.length ? prevIndex + 3 : 0
    );
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : reviews.length - 3
    );
  };
  

  return (
    <div className="relative bg-white md:min-h-screen flex items-center justify-center md:px-4 py-8 md:py-16 overflow-hidden w-full">
      <div className="text-center md:max-w-7xl mx-auto text-black  h-full ">
        <h2 className="text-xl md:text-4xl font-bold mb-6">
          Our Clients Simply love <span className="text-bluish">What We Do.</span>
        </h2>
        <p className="text-gray-700 mb-10 text-sm md:text-lg">
          Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-10">
          <div className="text-bluish text-4xl font-bold">R</div>
          <div className="text-gray-700">52 REVIEWS</div>
          <div className="text-bluish text-4xl font-bold">F</div>
          <div className="text-gray-700">32 REVIEWS</div>
        </div>

        {/* Desktop Slider Section */}
        <div className="hidden md:block  relative">
        <button onClick={handlePrevious} className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-500 hover:text-gray-800">
          <FaChevronLeft size={30} />
        </button>
        <button onClick={handleNext} className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-500 hover:text-gray-800">
          <FaChevronRight size={30} />
        </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center space-x-4 w-full"
            >
          
              {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
                <div
                  key={review.id}
                  className="border border-gray-400 md:p-8 rounded-lg flex flex-col justify-between h-[300px] md:h-[400px] md:w-[calc(33.333%-1rem)]"
                >
                  <div>
                    <p className="text-sm text-justify md:text-lg mb-6 text-gray-800">
                      &ldquo;{review.review}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center justify-start">
                    <div className="bg-bluish w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-xl font-bold text-gray-900 mr-4">
                      {review.name.split(' ').map((word) => word[0]).join('')}
                    </div>
                    <div className="text-left">
                      <p className="text-sm md:text-base font-semibold text-gray-800">{review.name}</p>
                      <p className="text-xs md:text-sm text-gray-800">{review.title}</p>
                      <div className="text-xs md:text-base flex text-yellow-400">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} className="mr-1">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Slider Section */}
        <div className="md:hidden overflow-hidden p-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center space-x-4 w-full"
            >
              {reviews.slice(currentIndex, currentIndex + 1).map((review) => (
                <div
                  key={review.id}
                  className="border border-gray-400 md:p-8 p-3 rounded-lg flex flex-col justify-between h-[300px] md:h-[300px] w-full mx-auto"
                >
                  <div>
                    <p className="text-base text-justify md:text-lg mb-6 text-gray-800">
                      &ldquo;{review.review}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center justify-start">
                    <div className="bg-bluish w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-xl font-bold text-gray-900 mr-4">
                      {review.name.split(' ').map((word) => word[0]).join('')}
                    </div>
                    <div className="text-left">
                      <p className="text-sm md:text-base font-semibold text-gray-800">{review.name}</p>
                      <p className="text-xs md:text-sm text-gray-800">{review.title}</p>
                      <div className="text-sm md:text-base flex text-yellow-400">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} className="mr-1">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}