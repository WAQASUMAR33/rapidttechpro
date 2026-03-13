'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const SuccessStories = forwardRef((props, ref) => {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [showPopup, setShowPopup] = useState(false);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  const resolveImage = (path) => {
    if (!path) return '/projects/maker4u3.png'; // Fallback
    if (path.startsWith('http')) return path;
    if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
    return path;
  };

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000); // Increased to 15s for Vercel cold starts

        const response = await fetch(`/api/projects`, {
          headers: { 'x-api-key': apiKey },
          signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${errorText.substring(0, 100)}`);
        }

        const data = await response.json();

        // Handle new API response format { success: true, data: [...] }
        let projectData = [];
        if (data && data.data && Array.isArray(data.data)) {
          projectData = data.data;
        } else if (Array.isArray(data)) {
          projectData = data;
        } else if (data && data.projects && Array.isArray(data.projects)) {
          projectData = data.projects;
        }

        setStories(projectData.slice(0, 5));
      } catch (err) {
        console.error('SuccessStories fetch error:', {
          message: err.message,
          name: err.name,
          url: `${apiBaseUrl}/api/projects`,
          stack: err.stack
        });
        setError('Service temporarily unavailable. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [apiBaseUrl, apiKey]);

  useEffect(() => {
    if (loading || stories.length === 0) return;

    // Set up GSAP animations for each card after they are rendered
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
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
        }
      );
    });

    const showPopupWithAnimation = () => setShowPopup(true);

    const hidePopupWithDelay = () => {
      setShowPopup(false);
    };

    if (ref.current) {
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
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loading, stories, ref]);

  const popupVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  if (error) {
    return (
      <section ref={ref} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden h-full">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-12 lg:px-16 2xl:px-24">
        <div className="flex justify-between items-end mb-12 md:mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 text-left"
          >
            Our success stories
          </h2>
          <Link href="/Work" className="hidden md:flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium">
            More case studies <FaArrowRight className="text-sm" />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#25CBA1]"></div>
          </div>
        ) : (
          <div className="flex flex-wrap md:-mx-6 lg:-mx-8">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`w-full md:w-1/2 px-4 md:px-6 lg:px-8 mb-12 md:mb-24 ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="bg-white group">
                  <Link href={`/Work/${story.id}`}>
                    <div className="overflow-hidden rounded-xl h-[500px] md:h-[650px] lg:h-[800px] bg-gray-50">
                      <img
                        src={resolveImage(story.mainImage || story.image)}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="pt-6 flex flex-col items-start gap-4">
                    {(story.logo || story.projectIcon) && (
                      <img
                        src={resolveImage(story.logo || story.projectIcon)}
                        alt={`${story.title} logo`}
                        className="h-6 md:h-8 w-auto object-contain"
                      />
                    )}

                    <div className="flex flex-col gap-2">
                      <Link href={`/Work/${story.id}`}>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight hover:text-bluish transition-colors">
                          {story.title}
                        </h3>
                      </Link>

                      <p className="text-gray-500 mt-2 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                        {(() => {
                          const desc = (typeof story.shortDescription === 'string' ? story.shortDescription : '') || (typeof story.description === 'string' ? story.description : '');
                          const firstSentence = desc.split('.')[0];
                          return firstSentence ? firstSentence + '.' : desc;
                        })()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="md:hidden w-full flex justify-center items-center mt-8">
          <Link href="/Work" className="px-8 h-12 flex justify-center items-center rounded-full border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black transition-all font-semibold">
            Explore All Work
          </Link>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed bottom-4 right-4 bg-[#25CBA1] text-black p-4 rounded-2xl shadow-xl z-10 border border-white/20 backdrop-blur-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-3 text-xs md:text-sm font-bold">
              <div className="bg-white rounded-md p-2 text-black text-center">
                <img src='/business/google.png' className='w-16 h-6 mx-auto object-cover'></img>
                {/* <p>Google</p> */}
                <p>4.9 </p>
                <div className="flex justify-center mt-2">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="bg-white rounded-md p-2 text-black text-center">
                <img src='/business/trustpilot.png' className='w-20 h-6 mx-auto object-cover'></img>
                {/* <p>Trustpilot</p> */}
                <p>4.8</p>
                <div className="flex justify-center mt-2">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="bg-white rounded-md p-2 text-black text-center">
                <img src='/business/clutch.png' className='w-16 h-6 mx-auto object-cover '></img>
                {/* <p>Clutch</p> */}
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
