import React, { useState, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

const NewBlogCategorySlider = () => {
  const [categories] = useState([  // Directly setting categories in state
    { title: 'Mobile App', imageUrl: 'https://via.placeholder.com/150?text=Category+1' },
    { title: 'Business', imageUrl: 'https://via.placeholder.com/150?text=Category+2' },
    { title: 'Web Design', imageUrl: 'https://via.placeholder.com/150?text=Category+3' },
    { title: 'UX/UI', imageUrl: 'https://via.placeholder.com/150?text=Category+4' },
    { title: 'Software Testing', imageUrl: 'https://via.placeholder.com/150?text=Category+5' },
    { title: 'Nap Design', imageUrl: 'https://via.placeholder.com/150?text=Category+6' },
    { title: 'Synchronization', imageUrl: 'https://via.placeholder.com/150?text=Category+7' },
    { title: 'Category 8', imageUrl: 'https://via.placeholder.com/150?text=Category+8' },
    { title: 'Category 9', imageUrl: 'https://via.placeholder.com/150?text=Category+9' },
    { title: 'Category 10', imageUrl: 'https://via.placeholder.com/150?text=Category+10' }
  ]);

  const sliderRef = useRef(null);
  const firstCategoryRef = useRef(null); // Ref for the first category

  const scroll = (direction) => {
    if (sliderRef.current && firstCategoryRef.current) {
      const categoryWidth = firstCategoryRef.current.offsetWidth; // Get the dynamic width
      const { scrollLeft } = sliderRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - categoryWidth
        : scrollLeft + categoryWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-3 text-white">
      <button className="absolute left-0 z-10 top-1/2 -translate-y-1/2" onClick={() => scroll('left')}>
        <MdChevronLeft size={30} />
      </button>
      <div className="overflow-hidden" ref={sliderRef}>
        <div className="flex">
          {categories.map((category, index) => (
            <div key={index} className="flex-shrink-0 p-4" style={{ minWidth: '10%' }}
              ref={index === 0 ? firstCategoryRef : null}  // Set the ref to the first category card
            >
              <div className="rounded-lg p-2 flex justify-center items-center">
                <Image src={category.imageUrl} alt={category.title} width={112} height={112} className="h-28 w-28 rounded-full object-cover" />
              </div>
              <h2 className='text-center'>{category.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute right-0 z-10 top-1/2 -translate-y-1/2" onClick={() => scroll('right')}>
        <MdChevronRight size={30} />
      </button>
    </div>
  );
};

export default NewBlogCategorySlider;
