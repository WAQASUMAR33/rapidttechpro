'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function WorkMainPage() {
  const stories = [
    {
      id: 1,
      title: 'Maker4U',
      description: 'Your all-in-one solution for creating magnetic promotional products and flawless editing.',
      imageUrl: '/projects/maker4u3.png',
      service: 'Design Tools',
      category: 'Marketing',
      technology: 'Figma',
      link: '#',
    },
    {
      id: 2,
      title: 'Store2U',
      description: 'Discover a variety of products at unbeatable prices. Shop now and enjoy a seamless online shopping experience!',
      imageUrl: '/projects/Store2u 1.png',
      service: 'E-commerce',
      category: 'Retail',
      technology: 'Shopify',
      link: '#',
    },
    {
      id: 3,
      title: 'Unleash Your Potential with SolveAndWins',
      description: 'Join SolveAndWin: Compete, Solve Challenges, and Earn Rewards Like Never Before!',
      imageUrl: '/projects/solveandwins.png',
      service: 'Gamification',
      category: 'Education',
      technology: 'JavaScript',
      link: '#',
    },
    {
      id: 4,
      title: 'Discover the Power of Voice with Advance AI Tools',
      description: 'Use our Text to Speech technology to transform your articles, books, and more into audio in just a few clicks!',
      imageUrl: '/projects/AdvanceAi.png',
      service: 'AI Development',
      category: 'Media',
      technology: 'Python',
      link: '#',
    },
    {
      id: 5,
      title: 'ImageMaker',
      description: 'Easily create and manage your ad campaigns with our user-friendly marketing tools.',
      imageUrl: '/projects/Imagemaker.png',
      service: 'Marketing Tools',
      category: 'Marketing',
      technology: 'Adobe XD',
      link: '#',
    },
    {
      id: 6,
      title: 'Streamline Operations with SmartLogistics',
      description: 'Optimize your supply chain and logistics management with our advanced tracking software.',
      imageUrl: '/projects/solveandwins.png', // Fallback to avoid remote URL issues if any
      service: 'Logistics',
      category: 'Supply Chain',
      technology: 'React',
      link: '#',
    },
    {
      id: 7,
      title: 'Personalized Learning Experience with EduSmart',
      description: 'Revolutionize the learning experience with EduSmart’s adaptive learning platform.',
      imageUrl: '/projects/solveandwins.png',
      service: 'EdTech',
      category: 'Education',
      technology: 'Python',
      link: '#',
    },
    {
      id: 8,
      title: 'Advanced Analytics with DataPro',
      description: 'Get in-depth insights into your business performance with DataPro’s analytics solutions.',
      imageUrl: '/projects/solveandwins.png',
      service: 'Data Analysis',
      category: 'Business',
      technology: 'Tableau',
      link: '#',
    },
    {
      id: 9,
      title: 'Augmented Reality for Retail with ARShop',
      description: 'Enhance your retail experience with ARShop’s augmented reality technology for immersive shopping.',
      imageUrl: '/projects/solveandwins.png',
      service: 'AR Development',
      category: 'Retail',
      technology: 'Unity',
      link: '#',
    },
    {
      id: 10,
      title: 'Efficient Project Management with TaskMaster',
      description: 'Manage your team and projects effectively with TaskMaster’s all-in-one platform.',
      imageUrl: '/projects/solveandwins.png',
      service: 'Project Management',
      category: 'Business',
      technology: 'Jira',
      link: '#',
    },
  ];

  const categories = ['All Categories', 'Marketing', 'Retail', 'Education', 'Business'];
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Register plugin inside useEffect for SSR safety
    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: '.case-studies-section',
      start: 'top 0%',
      end: 'bottom 100%',
      onEnter: () => setShowPopup(true),
      onLeave: () => setShowPopup(false),
      onEnterBack: () => setShowPopup(true),
      onLeaveBack: () => setShowPopup(false),
    });

    return () => st.kill();
  }, []);

  const handleFilterChange = (value) => {
    setSelectedCategory(value);
  };

  const filteredStories = stories.filter((story) => {
    return selectedCategory === 'All Categories' || story.category === selectedCategory;
  });

  const popupVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className="px-4 md:px-16 py-24 bg-white case-studies-section relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mt-10">Case Studies</h1>
          <p className="text-xl md:text-3xl text-gray-600 mt-4 max-w-3xl font-light">
            See how RapidTechPro has helped its clients transform ideas into successful digital realities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-4 justify-start mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`rounded-full px-6 py-2 text-sm md:text-base transition-all duration-300 ${selectedCategory === category
                ? 'bg-[#0FB5B7] text-white shadow-lg shadow-[#0FB5B7]/20 border border-[#0FB5B7]'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0FB5B7] hover:text-[#0FB5B7]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16">
          {filteredStories.map((story, index) => (
            <InViewCard key={`story-${story.id}`} index={index} story={story} />
          ))}
        </div>

        {/* See More Button */}
        <div className="w-full flex justify-center mt-12 md:mt-20">
          <button className="px-10 py-4 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 font-semibold shadow-xl">
            Load More Projects
          </button>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed bottom-6 right-6 bg-white border border-gray-100 p-4 rounded-2xl shadow-2xl z-50 flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <Image src='/business/google.png' alt="Google" width={100} height={20} className='h-5 object-contain' />
                <span className="text-[10px] font-bold text-gray-800 mt-1">4.9 ⭐⭐⭐⭐⭐</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-100"></div>
              <div className="flex flex-col items-center">
                <Image src='/business/trustpilot.png' alt="Trustpilot" width={100} height={20} className='h-5 object-contain' />
                <span className="text-[10px] font-bold text-gray-800 mt-1">4.8 ⭐⭐⭐⭐⭐</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-100"></div>
              <div className="flex flex-col items-center">
                <Image src='/business/clutch.png' alt="Clutch" width={100} height={20} className='h-5 object-contain' />
                <span className="text-[10px] font-bold text-gray-800 mt-1">5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InViewCard({ story, index }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-16' : ''}`}
    >
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#0FB5B7]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0FB5B7]/10 flex flex-col h-full">
        <div className="aspect-[16/10] w-full overflow-hidden bg-gray-50 relative">
          <Image
            src={story.imageUrl}
            alt={story.title}
            width={800}
            height={500}
            priority={index < 2}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-[#0FB5B7] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              {story.technology}
            </span>
          </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#0FB5B7] text-xs font-semibold uppercase tracking-widest">{story.service}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">{story.category}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#0FB5B7] transition-colors duration-300">{story.title}</h2>
          <p className="text-gray-500 mt-3 text-base leading-relaxed line-clamp-2">{story.description}</p>
          <div className="mt-auto pt-6 flex items-center text-[#0FB5B7] font-semibold text-sm group/btn">
            <span>View Case Study</span>
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
