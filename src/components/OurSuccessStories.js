'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const SuccessStories = forwardRef((props, ref) => {
  // const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Set up GSAP animations for each card
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.2,
          stagger: 2,
        }
      );
    });


    const showPopupWithAnimation = () => setShowPopup(true);


    const hidePopupWithDelay = () => {
      setShowPopup(false);
      setTimeout(() => setShowPopup(null), 200);
    };

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 90%',
      end: 'bottom 30%',
      onEnter: showPopupWithAnimation,
      onEnterBack: showPopupWithAnimation,
      onLeave: hidePopupWithDelay,
      onLeaveBack: hidePopupWithDelay,
      once: false,
    });

  }, []);

  const popupVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const stories = [
    {
      id: 1,
      title: 'Maker4U',
      description: 'Your all-in-one solution for creating magnetic promotional products and flawless editing.',
      imageUrl: '/projects/maker4u3.png',
      link: '#',
    },
    {
      id: 2,
      title: 'Image Maker',
      description: 'Discover a variety of products at unbeatable prices. Shop now and enjoy a seamless online shopping experience!',
      imageUrl: '/projects/Imagemaker.png',
      link: '#',
    },
    {
      id: 3,
      title: 'CouponRi',
      description: 'Join SolveAndWin: Compete, Solve Challenges, and Earn Rewards Like Never Before!',
      imageUrl: '/projects/CoupenRi 1.png',
      link: '#',
    },
    {
      id: 4,
      title: 'Advance AI Tools',
      description: 'Use our Text to Speech technology to transform your articles, books, and more into audio in just a few clicks!',
      imageUrl: '/projects/AdvanceAi.png',
      link: '#',
    },
    {
      id: 4,
      title: 'Solve And Wins',
      description: 'Use our Text to Speech technology to transform your articles, books, and more into audio in just a few clicks!',
      imageUrl: '/projects/solveandwins.png',
      link: '#',
    },
  ];

  return (
    <section ref={ref} className="py-12 bg-white relative overflow-hidden h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="md:text-5xl text-3xl font-bold text-gray-900 mb-8 text-left"
        >
          Our Success Stories
        </h2>
        <div className="flex flex-wrap md:-mx-4 md:space-y-16 space-y-4">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`w-full md:w-1/2 px-4 md:px-12 md:mb-16 ${index % 2 === 1 ? 'md:mt-[80px]' : ''}`}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                marginTop: index % 2 === 1 ? '80px' : '0px',
              }}
            >
              <div className="bg-white rounded-lg overflow-hidden">
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-contain rounded-xl"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{story.title}</h3>
                  <p className="text-gray-600 mt-2">{story.description}</p>
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <Link href="/Work" className="px-4 h-10 flex justify-center items-center rounded-full border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black">
            Our Success Stories
          </Link>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed bottom-4 right-4 bg-pink-500 text-white p-4 rounded-lg shadow-lg z-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4 text-xs md:text-base">
              <div className="bg-white rounded-md p-2 text-black text-center">
                <Image src='/business/google.png' alt="Google Reviews" width={64} height={24} className='w-16 h-6 mx-auto object-cover' />
                <p>4.9 </p>
                <div className="flex justify-center mt-2">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="bg-white rounded-md p-2 text-black text-center">
                <Image src='/business/trustpilot.png' alt="Trustpilot Reviews" width={80} height={24} className='w-20 h-6 mx-auto object-cover' />
                <p>4.8</p>
                <div className="flex justify-center mt-2">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="bg-white rounded-md p-2 text-black text-center">
                <Image src='/business/clutch.png' alt="Clutch Reviews" width={64} height={24} className='w-16 h-6 mx-auto object-cover ' />
                <p>5</p>
                <div className="flex justify-center mt-2">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default SuccessStories;
