'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FALLBACK = [
  { id: 1, name: 'Hamed Al Zadjali', role: 'Digital Manager', ratings: 5, review: 'RapidTechPro managed to provide successful support and development in a timely manner. The team provided excellent workflow and communication throughout the project.' },
  { id: 2, name: 'Emily Johnson', role: 'Project Lead', ratings: 5, review: 'The team at RapidTechPro was amazing. They took our vision and turned it into reality seamlessly. Communication was always clear and they went above and beyond to meet our deadlines.' },
  { id: 3, name: 'John Doe', role: 'CEO', ratings: 5, review: 'A highly skilled and reliable team! RapidTechPro exceeded our expectations in every way. The project was delivered ahead of schedule, and the quality of work was exceptional.' },
  { id: 4, name: 'Alice Williams', role: 'Product Manager', ratings: 4, review: 'The project delivery was smooth, and the team communicated very well throughout the development process. The final product met our expectations.' },
  { id: 5, name: 'George Clark', role: 'Marketing Specialist', ratings: 5, review: 'RapidTechPro provided top-tier services, consistently delivering high-quality work on time. Their attention to detail and client-first attitude set them apart.' },
  { id: 6, name: 'Sophia Lee', role: 'Lead Developer', ratings: 5, review: 'Their technical expertise and ability to solve complex problems quickly helped us keep the project on track. We appreciate their dedication and professionalism.' },
];

function getInitials(name = '') {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

export default function TestimonialSlider() {
  const [reviews, setReviews] = useState(FALLBACK);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/api/testimonials`, {
          headers: { 'x-api-key': apiKey },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        let items = [];
        if (Array.isArray(data)) items = data;
        else if (data?.data && Array.isArray(data.data)) items = data.data;
        else if (data?.testimonials && Array.isArray(data.testimonials)) items = data.testimonials;
        if (items.length > 0) setReviews(items);
      } catch (err) {
        console.error('TestimonialSlider fetch error:', err);
      }
    };
    fetchTestimonials();
  }, [apiBaseUrl, apiKey]);

  const handleNext = () => {
    setCurrentIndex(prev => prev + 3 < reviews.length ? prev + 3 : 0);
  };
  const handlePrevious = () => {
    setCurrentIndex(prev => prev - 3 >= 0 ? prev - 3 : Math.max(0, reviews.length - 3));
  };

  // Normalise field names from API (name/role/ratings or name/title/rating)
  const normalise = (r) => ({
    id: r.id,
    name: r.name || '',
    role: r.role || r.title || '',
    ratings: Number(r.ratings ?? r.rating ?? 5),
    review: r.review || '',
    image: r.image || null,
  });

  const items = reviews.map(normalise);

  return (
    <div className="relative bg-white md:min-h-screen flex items-center justify-center md:px-4 py-8 md:py-16 overflow-hidden w-full">
      <div className="text-center md:max-w-7xl mx-auto text-black h-full w-full px-4">
        <h2 className="text-xl md:text-4xl font-bold mb-6">
          Our Clients Simply love <span className="text-[#0FB5B7]">What We Do.</span>
        </h2>
        <p className="text-gray-700 mb-10 text-sm md:text-lg">
          Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-10">
          <div className="text-[#0FB5B7] text-4xl font-bold">R</div>
          <div className="text-gray-700">52 REVIEWS</div>
          <div className="text-[#0FB5B7] text-4xl font-bold">F</div>
          <div className="text-gray-700">32 REVIEWS</div>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block relative">
          <button onClick={handlePrevious} className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-500 hover:text-[#0FB5B7] transition-colors">
            <FaChevronLeft size={30} />
          </button>
          <button onClick={handleNext} className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-500 hover:text-[#0FB5B7] transition-colors">
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
              {items.slice(currentIndex, currentIndex + 3).map((r, idx) => (
                <div key={r.id ?? idx} className="border border-gray-200 hover:border-[#0FB5B7]/40 md:p-8 rounded-2xl flex flex-col justify-between h-[300px] md:h-[380px] md:w-[calc(33.333%-1rem)] transition-colors duration-300 hover:shadow-lg hover:shadow-[#0FB5B7]/10">
                  <div>
                    <div className="flex text-yellow-400 text-sm mb-4">
                      {[...Array(r.ratings)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className="text-sm text-justify md:text-base mb-6 text-gray-700 leading-relaxed">
                      &ldquo;{r.review}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center justify-start border-t border-gray-100 pt-4">
                    {r.image ? (
                      <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-[#0FB5B7]/20" onError={e => { e.target.style.display = 'none'; }} />
                    ) : (
                      <div className="bg-[#0FB5B7] w-12 h-12 rounded-full flex items-center justify-center text-base font-bold text-white mr-4">
                        {getInitials(r.name)}
                      </div>
                    )}
                    <div className="text-left">
                      <p className="text-sm md:text-base font-semibold text-gray-800">{r.name}</p>
                      <p className="text-xs md:text-sm text-gray-500">{r.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Slider */}
        {items.length > 0 && (
          <div className="md:hidden overflow-hidden p-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[currentIndex]?.id ?? currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center space-x-4 w-full"
              >
                {items.slice(currentIndex, currentIndex + 1).map((r, idx) => (
                  <div key={r.id ?? idx} className="border border-gray-200 p-5 rounded-2xl flex flex-col justify-between h-[320px] w-full mx-auto">
                    <div>
                      <div className="flex text-yellow-400 text-sm mb-3">
                        {[...Array(r.ratings)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <p className="text-base text-justify mb-4 text-gray-700">&ldquo;{r.review}&rdquo;</p>
                    </div>
                    <div className="flex items-center justify-start border-t border-gray-100 pt-3">
                      {r.image ? (
                        <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover mr-4" onError={e => { e.target.style.display = 'none'; }} />
                      ) : (
                        <div className="bg-[#0FB5B7] w-12 h-12 rounded-full flex items-center justify-center text-base font-bold text-white mr-4">
                          {getInitials(r.name)}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-800">{r.name}</p>
                        <p className="text-xs text-gray-500">{r.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-6 mt-6">
              <button onClick={handlePrevious} className="text-gray-400 hover:text-[#0FB5B7] transition-colors"><FaChevronLeft size={22} /></button>
              <button onClick={handleNext} className="text-gray-400 hover:text-[#0FB5B7] transition-colors"><FaChevronRight size={22} /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}