'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'Hamed Al Zadjali',
    title: 'Digital Manager',
    rating: 5,
    review: 'RapidTechPro managed to provide successful support and development in a timely manner. The app has been receiving a lot of positive feedback. The team provided excellent workflow and communication throughout the project.',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    title: 'Project Lead',
    rating: 5,
    review: 'The team at RapidTechPro was amazing. They took our vision and turned it into reality seamlessly. Communication was always clear, and they went above and beyond to meet our deadlines.',
  },
  {
    id: 3,
    name: 'John Doe',
    title: 'CEO',
    rating: 5,
    review: 'A highly skilled and reliable team! RapidTechPro exceeded our expectations in every way. The project was delivered ahead of schedule, and the quality of work was exceptional.',
  },
  {
    id: 4,
    name: 'Alice Williams',
    title: 'Product Manager',
    rating: 4,
    review: 'The project delivery was smooth, and the team communicated very well throughout the development process. The final product met our expectations, and we are excited to see the next phase.',
  },
  {
    id: 5,
    name: 'George Clark',
    title: 'Marketing Specialist',
    rating: 5,
    review: 'RapidTechPro provided top-tier services, consistently delivering high-quality work on time. Their attention to detail and client-first attitude set them apart from the rest.',
  },
  {
    id: 6,
    name: 'Sophia Lee',
    title: 'Lead Developer',
    rating: 5,
    review: 'Their technical expertise and ability to solve complex problems quickly helped us keep the project on track. We appreciate their dedication and professionalism.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < rating ? 'text-amber-400' : 'text-gray-200'} size={14} />
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name.split(' ').map(w => w[0]).join('');
  const colors = ['bg-[#0FB5B7]', 'bg-purple-500', 'bg-blue-500', 'bg-emerald-500', 'bg-orange-500', 'bg-pink-500'];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`${color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const perPage = 3;

  const handleNext = () => setCurrentIndex(prev => (prev + perPage < reviews.length ? prev + perPage : 0));
  const handlePrevious = () => setCurrentIndex(prev => (prev - perPage >= 0 ? prev - perPage : reviews.length - perPage));

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#0FB5B7] text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Clients Simply Love{' '}
              <span className="text-[#0FB5B7]">What We Do.</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base md:text-lg max-w-xl">
              Proud to serve as the innovation partner for industry leaders who have experienced our expertise firsthand.
            </p>
          </motion.div>

          {/* Platform badges */}
          <div className="flex gap-4 flex-shrink-0">
            {[
              { name: 'Google', rating: '4.9', img: '/business/google.png' },
              { name: 'Clutch', rating: '5.0', img: '/business/clutch.png' },
              { name: 'Trustpilot', rating: '4.8', img: '/business/trustpilot.png' },
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 min-w-[70px]">
                <Image src={p.img} alt={`${p.name} average rating of ${p.rating}`} width={60} height={20} className="h-5 w-auto object-contain mb-1" />
                <div className="text-xs font-bold text-gray-800">{p.rating}</div>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <FaStar key={j} className="text-amber-400" size={8} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {reviews.slice(currentIndex, currentIndex + perPage).map((review) => (
                <div
                  key={review.id}
                  className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#0FB5B7]/20 hover:shadow-lg hover:shadow-[#0FB5B7]/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <FaQuoteLeft className="text-[#0FB5B7]/30 text-3xl mb-4" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      "{review.review}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                    <Avatar name={review.name} />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.title}</p>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#0FB5B7] hover:text-[#0FB5B7] flex items-center justify-center text-gray-500 transition-all duration-200"
            >
              <FaChevronLeft size={14} />
            </button>
            {Array.from({ length: Math.ceil(reviews.length / perPage) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * perPage)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${Math.floor(currentIndex / perPage) === i ? 'bg-[#0FB5B7] w-6' : 'bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#0FB5B7] hover:text-[#0FB5B7] flex items-center justify-center text-gray-500 transition-all duration-200"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[currentIndex].id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-5"
            >
              <FaQuoteLeft className="text-[#0FB5B7]/30 text-2xl mb-3" />
              <p className="text-gray-700 text-sm leading-relaxed">"{reviews[currentIndex].review}"</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                <Avatar name={reviews[currentIndex].name} />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{reviews[currentIndex].name}</p>
                  <p className="text-gray-500 text-xs">{reviews[currentIndex].title}</p>
                  <StarRating rating={reviews[currentIndex].rating} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-5">
            <button onClick={handlePrevious} className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#0FB5B7] flex items-center justify-center text-gray-500">
              <FaChevronLeft size={12} />
            </button>
            <button onClick={handleNext} className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#0FB5B7] flex items-center justify-center text-gray-500">
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}