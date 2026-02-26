'use client';

import CallToAction from '@/components/CallToAction';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function CaseStudy() {
  // const [scrollY, setScrollY] = useState(0);

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
      imageUrl: 'https://www.datocms-assets.com/48294/1699601550-dark-mode-in-app-design-9-background-colors.jpg?auto=format',
      service: 'Logistics',
      category: 'Supply Chain',
      technology: 'React',
      link: '#',
    },
    {
      id: 7,
      title: 'Personalized Learning Experience with EduSmart',
      description: 'Revolutionize the learning experience with EduSmart’s adaptive learning platform.',
      imageUrl: 'https://www.datocms-assets.com/48294/1699601550-dark-mode-in-app-design-9-background-colors.jpg?auto=format',
      service: 'EdTech',
      category: 'Education',
      technology: 'Python',
      link: '#',
    },
    {
      id: 8,
      title: 'Advanced Analytics with DataPro',
      description: 'Get in-depth insights into your business performance with DataPro’s analytics solutions.',
      imageUrl: 'https://www.datocms-assets.com/48294/1699601550-dark-mode-in-app-design-9-background-colors.jpg?auto=format',
      service: 'Data Analysis',
      category: 'Business',
      technology: 'Tableau',
      link: '#',
    },
    {
      id: 9,
      title: 'Augmented Reality for Retail with ARShop',
      description: 'Enhance your retail experience with ARShop’s augmented reality technology for immersive shopping.',
      imageUrl: 'https://www.datocms-assets.com/48294/1699601550-dark-mode-in-app-design-9-background-colors.jpg?auto=format',
      service: 'AR Development',
      category: 'Retail',
      technology: 'Unity',
      link: '#',
    },
    {
      id: 10,
      title: 'Efficient Project Management with TaskMaster',
      description: 'Manage your team and projects effectively with TaskMaster’s all-in-one platform.',
      imageUrl: 'https://www.datocms-assets.com/48294/1699601550-dark-mode-in-app-design-9-background-colors.jpg?auto=format',
      service: 'Project Management',
      category: 'Business',
      technology: 'Jira',
      link: '#',
    },
  ];

  const categories = ['All Categories', 'Marketing', 'Retail', 'Education', 'Business'];
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'category') setSelectedCategory(value);
  };

  const filteredStories = stories.filter((story) => {
    const matchesCategory = selectedCategory === 'All Categories' || story.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="px-4 md:px-16 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-[60px] font-[700] mt-10">Case Studies</h1>
        <p className="md:text-[30px] font-[400] mt-4">See how RapidTechPro has helped its clients...</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1 md:gap-4 justify-start md:mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange('category', category)}
              className={`border rounded-full px-2 py-1 text-sm mt-4 md:text-base md:px-6 md:py-2  ${selectedCategory === category ? 'bg-black text-white' : 'text-black'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="flex flex-wrap md:space-y-16 md:mt-10 md:max-w-6xl mx-auto">
          {filteredStories.map((story) => (
            <InViewCard key={`story-${story.id}`} story={story} />
          ))}
        </div>

        {/* See More Button */}
        <div className="w-full flex justify-center  mt-6 md:mt-10">
          <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:border-black border hover:text-black">See More</button>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}

// Component for each card with in-view animation
function InViewCard({ story }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: story.id * 0.1 },
    });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={`w-full md:w-1/2  md:px-12 mt-8 md:mb-16 ${story.id % 2 == 1 ? 'md:mt-5' : 'md:mt-20'}`}
    >
      <div className="bg-white shadow-md rounded-md overflow-hidden relative">
        <div className="h-72 w-full overflow-hidden">
          <Image
            src={story.imageUrl}
            alt={story.title}
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{story.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{story.description}</p>
          <div className="mt-4">
            <a href={story.link} className="text-blue-500 hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}