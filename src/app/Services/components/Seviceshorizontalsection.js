'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ServiceSection() {
  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: 'Unleash Creativity With Maker4U',
      description: 'Your all-in-one solution for creating magnetic promotional products.',
      imageUrl: '/projects/maker4u3.png',
      category: 'Marketing',
      link: '#',
    },
    {
      id: 2,
      title: 'Welcome to Our Store2U',
      description: 'Discover a variety of products at unbeatable prices.',
      imageUrl: '/projects/maker4u3.png',
      category: 'Retail',
      link: '#',
    },
    {
      id: 3,
      title: 'Unleash Your Potential with SolveAndWins',
      description: 'Join SolveAndWin: Compete, Solve Challenges, and Earn Rewards!',
      imageUrl: '/projects/maker4u3.png',
      category: 'Education',
      link: '#',
    },
    {
      id: 4,
      title: 'AI Tools for Better Business Decisions',
      description: 'Leverage AI tools to enhance your business strategies.',
      imageUrl: '/projects/maker4u3.png',
      category: 'Business',
      link: '#',
    },
    // Add more projects as needed
  ];

  const categories = ['All Categories', 'Marketing', 'Retail', 'Education', 'Business'];

  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter the projects based on selected category
  const filteredProjects = projects.filter((project) => {
    return selectedCategory === 'All Categories' || project.category === selectedCategory;
  });

  return (
    <div className="px-6 md:px-16 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-[60px] font-[700] mt-10">Our Services</h1>
        <p className="md:text-[30px] font-[400] mt-4">
          Explore our diverse range of services and find the perfect solution for your needs.
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-between  mt-10 w-full">
          <div className='flex md:gap-4 gap-1 flex-between flex-wrap '>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`border border-black rounded-full md:px-6 px-2 py-1 md:py-3 text-black  text-xs md:text-base ${selectedCategory === category ? 'bg-black text-white' : 'hover:bg-gray-100'
                  } transition`}
              >
                {category}
              </button>
            ))}</div>
          <div className="flex justify-center">
            <button className="border border-black rounded-full md:px-6 px-2 py-1 md:py-3 text-xs md:text-base text-white bg-black  hover:bg-white hover:text-black  transition">
              Get Free Consultancy
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap  md:space-y-16 md:mt-10 md:max-w-6xl mx-auto">
          {filteredProjects.map((story) => (
            <div
              key={story.id}
              className={`w-full md:w-1/2 md:px-12 md:mb-16 ${story.id % 2 === 1 ? 'md:mt-[20px]' : 'md:mt-[90px]'}`}
            >
              <div className="bg-white shadow-md rounded-md overflow-hidden">
                <Image src={story.imageUrl} alt={story.title} width={500} height={300} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">{story.title}</h2>
                  <p className="text-sm text-gray-600 mt-2">{story.description}</p>
                  <div className="mt-4">
                    <a href={story.link} className="text-blue-500 hover:underline">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Get Free Consultancy Button */}

      </div>
    </div>
  );
}
