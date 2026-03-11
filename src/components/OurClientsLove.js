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
        const res = await fetch('/api/testimonials', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        let items = [];
        if (Array.isArray(data)) items = data;
        else if (data?.data && Array.isArray(data.data)) items = data.data;
        else if (data?.testimonials && Array.isArray(data.testimonials)) items = data.testimonials;
        if (items.length > 0) setReviews(items);
      } catch (err) {
        // Silently fall back to static data
      }
    };
    fetchTestimonials();
  }, []);

  const [stepSize, setStepSize] = useState(1);

  useEffect(() => {
    // Setting stepSize to 1 for all viewports as per new "one testimonial per row" requirement
    setStepSize(1);
  }, []);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + stepSize < reviews.length ? prev + stepSize : 0));
  };
  const handlePrevious = () => {
    setCurrentIndex(prev => (prev - stepSize >= 0 ? prev - stepSize : Math.max(0, Math.floor((reviews.length - 1) / stepSize) * stepSize)));
  };

  // Normalise field names from API
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
    <div className="relative md:min-h-screen flex items-center justify-center md:px-4 py-16 md:py-24 overflow-hidden w-full bg-[#030907]">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A3D2C] via-[#030907] to-[#030907] opacity-60"></div>

      <div className="text-center md:max-w-7xl mx-auto h-full w-full px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Our clients simply love <span className="text-[#0FB5B7]">what we do</span>
        </h2>
        <p className="text-gray-300 md:text-lg mb-12 max-w-3xl mx-auto">
          Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
        </p>

        {/* Brands / Logos Area (Placeholder based on screenshot) */}
        <div className="flex justify-center flex-wrap items-center gap-6 md:gap-12 mb-16 opacity-80">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl flex items-center gap-1">
              <span className="text-red-500 text-3xl shrink-0">C</span> Clutch
            </span>
            <div className="flex text-red-500 text-sm ml-2">★★★★★</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl flex items-center gap-1">
              <span className="text-blue-500 text-3xl font-serif shrink-0">f</span> GoodFirms
            </span>
            <div className="flex text-blue-500 text-sm ml-2">★★★★★</div>
          </div>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block relative">
          <button onClick={handlePrevious} className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-[#0FB5B7] transition-colors">
            <FaChevronLeft size={30} />
          </button>
          <button onClick={handleNext} className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-[#0FB5B7] transition-colors">
            <FaChevronRight size={30} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center w-full"
            >
              {items.slice(currentIndex, currentIndex + 1).map((r, idx) => (
                <div key={r.id ?? idx} className="bg-black/40 backdrop-blur-sm border border-[#0FB5B7]/20 p-10 md:p-16 rounded-[40px] flex flex-col justify-between min-h-[400px] w-full max-w-4xl transition-all duration-300 hover:border-[#0FB5B7]/50 hover:shadow-[0_0_30px_rgba(15,181,183,0.15)]">
                  <div>
                    <p className="text-base text-left mb-8 text-gray-300 leading-relaxed font-light">
                      &ldquo;{r.review}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-4">
                      {r.image ? (
                        <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover" onError={e => { e.target.style.display = 'none'; }} />
                      ) : (
                        <div className="bg-[#0FB5B7] w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white">
                          {getInitials(r.name)}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="text-base font-semibold text-white">{r.name}</p>
                        <div className="flex text-[#0FB5B7] text-sm mt-1">
                          {[...Array(r.ratings)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Slider */}
        {items.length > 0 && (
          <div className="md:hidden overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[currentIndex]?.id ?? currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {items.slice(currentIndex, currentIndex + 1).map((r, idx) => (
                  <div key={r.id ?? idx} className="bg-black/40 backdrop-blur-sm border border-[#0FB5B7]/20 p-6 rounded-3xl flex flex-col justify-between h-[380px] w-full mx-auto">
                    <div>
                      <p className="text-base text-left mb-6 text-gray-300 leading-relaxed font-light">&ldquo;{r.review}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                      {r.image ? (
                        <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover" onError={e => { e.target.style.display = 'none'; }} />
                      ) : (
                        <div className="bg-[#0FB5B7] w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white">
                          {getInitials(r.name)}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="text-base font-semibold text-white">{r.name}</p>
                        <div className="flex text-[#0FB5B7] text-sm mt-1">
                          {[...Array(r.ratings)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-8 mt-8">
              <button onClick={handlePrevious} className="text-gray-400 hover:text-[#0FB5B7] transition-colors"><FaChevronLeft size={24} /></button>
              <button onClick={handleNext} className="text-gray-400 hover:text-[#0FB5B7] transition-colors"><FaChevronRight size={24} /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}