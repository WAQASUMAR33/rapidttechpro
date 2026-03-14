'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RealTimeProjectMap from './RealTimeProjectMap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Custom Filterable Dropdown (Combobox-style) ---
function FilterDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);
  const ref = useRef(null);

  const filtered = options.filter((o) =>
    o.toLowerCase().includes(search.toLowerCase())
  );

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const openDropdown = () => {
    setOpen(true);
    setSearch('');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const select = (option) => {
    onChange(option);
    setOpen(false);
    setSearch('');
  };

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-semibold text-black mb-2 pl-1">{label}</label>

      {/* Trigger / Search Input */}
      <div
        className={`w-full flex items-center justify-between px-5 py-4 border rounded-2xl bg-white text-gray-800 text-base font-medium transition-all duration-200 cursor-pointer ${
          open ? 'border-[#0FB5B7] ring-1 ring-[#0FB5B7]' : 'border-gray-200 hover:border-gray-300'
        }`}
        onClick={!open ? openDropdown : undefined}
      >
        {open ? (
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${label.toLowerCase()}...`}
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none text-base"
          />
        ) : (
          <span className="text-black">{value}</span>
        )}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); open ? (setOpen(false), setSearch('')) : openDropdown(); }}
          className="ml-2 flex-shrink-0"
        >
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180 text-[#0FB5B7]' : ''}`}
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto py-2">
              {filtered.length > 0 ? (
                filtered.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); select(option); }}
                    className={`w-full text-left px-5 py-2.5 text-sm font-medium transition-colors ${
                      value === option
                        ? 'bg-[#0FB5B7]/10 text-[#0FB5B7]'
                        : 'text-black hover:bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-400 text-center py-4">No results found</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function WorkMainPage() {
  const [stories, setStories] = useState([]);
  const [categories, setCategories] = useState(['All Categories']);
  const [services, setServices] = useState(['All Services']);
  const [technologies, setTechnologies] = useState(['All Technologies']);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedService, setSelectedService] = useState('All Services');
  const [selectedTechnology, setSelectedTechnology] = useState('All Technologies');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  const fetchWithAuth = async (url) => {
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    };

    // Proxy fix for localhost CORS
    const targetUrl = apiBaseUrl.includes('localhost') && url.startsWith(apiBaseUrl)
      ? `/api/proxy${url.replace(apiBaseUrl, '')}`
      : url;

    const response = await fetch(targetUrl, { headers });
    return response;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        try {
          const categoriesResponse = await fetchWithAuth(`${apiBaseUrl}/api/categories`);
          if (categoriesResponse.ok) {
            const rawData = await categoriesResponse.json();
            const categoriesData = rawData?.data || rawData || [];
            const categoryList = ['All Categories', ...categoriesData.map((cat) => (typeof cat === 'string' ? cat : cat?.name || '')).filter(Boolean)];
            setCategories(categoryList);
          }
        } catch (err) {
          console.warn('Warning fetching categories:', err);
          setCategories(['All Categories']);
        }

        try {
          const technologiesResponse = await fetchWithAuth(`${apiBaseUrl}/api/technologies`);
          if (technologiesResponse.ok) {
            const rawData = await technologiesResponse.json();
            const technologiesData = rawData?.data || rawData || [];
            const technologyList = ['All Technologies', ...technologiesData.map((tech) => (typeof tech === 'string' ? tech : tech?.name || '')).filter(Boolean)];
            setTechnologies(technologyList);
          }
        } catch (err) {
          console.warn('Warning fetching technologies:', err);
          setTechnologies(['All Technologies']);
        }

        try {
          const servicesResponse = await fetchWithAuth(`${apiBaseUrl}/api/services`);
          if (servicesResponse.ok) {
            const rawData = await servicesResponse.json();
            const servicesData = rawData?.data || rawData || [];
            // API for services uses 'title' field
            const serviceList = ['All Services', ...servicesData.map((svc) => (typeof svc === 'string' ? svc : svc?.title || svc?.name || '')).filter(Boolean)];
            setServices(serviceList);
          }
        } catch (err) {
          console.warn('Warning fetching services:', err);
          setServices(['All Services']);
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        const projTargetUrl = apiBaseUrl.includes('localhost') ? '/api/proxy/api/projects' : `${apiBaseUrl}/api/projects`;
        const projectsResponse = await fetch(projTargetUrl, {
          headers: { 'x-api-key': apiKey },
          signal: controller.signal
        });
        clearTimeout(timeout);

        if (!projectsResponse.ok) {
          const errorText = await projectsResponse.text();
          throw new Error(`HTTP error! status: ${projectsResponse.status} - ${errorText.substring(0, 100)}`);
        }

        const rawProjectsData = await projectsResponse.json();

        // Handle new API response format { success: true, data: [...] }
        let projectsData = [];
        if (rawProjectsData && rawProjectsData.data && Array.isArray(rawProjectsData.data)) {
          projectsData = rawProjectsData.data;
        } else if (Array.isArray(rawProjectsData)) {
          projectsData = rawProjectsData;
        } else if (rawProjectsData && rawProjectsData.projects && Array.isArray(rawProjectsData.projects)) {
          projectsData = rawProjectsData.projects;
        }

        setStories(projectsData);
      } catch (err) {
        console.error('WorkMainPage fetch error:', {
          message: err.message,
          name: err.name,
          url: `${apiBaseUrl}/api/projects`
        });
        setError(
          <>
            <strong>{err.message}</strong>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              Make sure your API backend is running with endpoints:<br />
              • GET {apiBaseUrl}/api/projects<br />
              • GET {apiBaseUrl}/api/categories<br />
              • GET {apiBaseUrl}/api/services<br />
              • GET {apiBaseUrl}/api/technologies
            </p>
          </>
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiBaseUrl, apiKey]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'category') setSelectedCategory(value);
    if (filterType === 'service') setSelectedService(value);
    if (filterType === 'technology') setSelectedTechnology(value);
  };

  const filteredStories = stories.filter((story) => {
    const storyCategories = story.categories?.map(c => typeof c === 'string' ? c : c?.name) || [story.category].filter(Boolean);
    const storyTechnologies = story.technologies?.map(t => typeof t === 'string' ? t : t?.name) || [story.technology].filter(Boolean);
    const matchesCategory = selectedCategory === 'All Categories' || storyCategories.includes(selectedCategory);
    const matchesService = selectedService === 'All Services' || story.service === selectedService;
    const matchesTechnology = selectedTechnology === 'All Technologies' || storyTechnologies.includes(selectedTechnology);
    return matchesCategory && matchesService && matchesTechnology;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ScrollTrigger.create({
        trigger: '.case-studies-section',
        start: 'top 0%',
        end: 'bottom 100%',
        onEnter: () => setShowPopup(true),
        onLeave: () => setShowPopup(false),
        onEnterBack: () => setShowPopup(true),
        onLeaveBack: () => setShowPopup(false),
      });
    }
  }, []);

  const popupVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  if (loading) {
    return (
      <div className="bg-white case-studies-section relative">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-12 lg:px-16 2xl:px-24 py-20">
          <p className="text-center text-gray-600">Loading case studies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white case-studies-section relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-12 lg:px-16 2xl:px-24 pt-20">
        <h1 className="text-4xl md:text-[48px] font-[800] tracking-tight text-black leading-tight">Case Studies</h1>
        <p className="text-xl md:text-[24px] font-[500] mt-2 text-black">See how RapidTechPro has helped its clients...</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6">
            <p className="font-semibold">Error loading projects</p>
            <div className="text-sm mt-2">
              {typeof error === 'string' ? error : error}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
          <FilterDropdown
            label="Services"
            options={services}
            value={selectedService}
            onChange={(val) => handleFilterChange('service', val)}
          />
          <FilterDropdown
            label="Categories"
            options={categories}
            value={selectedCategory}
            onChange={(val) => handleFilterChange('category', val)}
          />
          <FilterDropdown
            label="Technology"
            options={technologies}
            value={selectedTechnology}
            onChange={(val) => handleFilterChange('technology', val)}
          />
        </div>

        <div className="flex flex-wrap md:mt-10 items-start">
          {filteredStories.length > 0 ? (
            filteredStories.slice(0, visibleCount).map((story, index) => (
              <InViewCard key={story.id} index={index} story={story} />
            ))
          ) : (
            <div className="w-full text-center py-20">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>

        {filteredStories.length > visibleCount && (
          <div className="w-full flex justify-center mt-6 md:mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-10 py-3 rounded-full bg-black text-white hover:bg-white hover:border-black border hover:text-black font-bold transition-all"
            >
              See More
            </button>
          </div>
        )}
      </div>

      <RealTimeProjectMap apiBaseUrl={apiBaseUrl} />


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
                <img src="/business/google.png" className="w-16 h-6 mx-auto object-cover" alt="Google"></img>
                <p>4.9</p>
                <div className="flex justify-center mt-2">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="bg-white rounded-md p-2 text-black text-center">
                <img src="/business/trustpilot.png" className="w-20 h-6 mx-auto object-cover" alt="Trustpilot"></img>
                <p>4.8</p>
                <div className="flex justify-center mt-2">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="bg-white rounded-md p-2 text-black text-center">
                <img src="/business/clutch.png" className="w-16 h-6 mx-auto object-cover" alt="Clutch"></img>
                <p>5</p>
                <div className="flex justify-center mt-2">⭐⭐⭐⭐⭐</div>
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

  // Backend images are uploaded to localhost:3001/uploads/ — must prefix with backend URL
  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const resolveImage = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
    return path;
  };

  // Backend uses mainImage, shortDescription, categories[] (array of objects), technologies[] (array of objects)
  const projectImage = resolveImage(story.mainImage || story.imageUrl || story.image || story.projectIcon) || '/images/herosection.png';
  const projectDesc = story.shortDescription || story.description || story.metaDescription || "";
  const projectCategory = story.categories?.length > 0
    ? (typeof story.categories[0] === 'string' ? story.categories[0] : story.categories[0]?.name)
    : (story.category || null);
  const projectTech = story.technologies?.length > 0
    ? (typeof story.technologies[0] === 'string' ? story.technologies[0] : story.technologies[0]?.name)
    : (story.technology || null);

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
      className={`w-full md:w-1/2 px-4 md:px-8 mb-12 md:mb-24 ${index % 2 === 1 ? 'md:mt-32' : ''}`}
    >
      <Link href={`/Work/${story.id}`} className="block h-full group">
        <div className="bg-transparent flex flex-col h-full group-hover:-translate-y-2 transition-transform duration-500">
          {/* Image Section */}
          <div className="w-full h-[400px] md:h-[550px] lg:h-[650px] mx-auto overflow-hidden rounded-3xl bg-gray-50 flex-shrink-0 relative group-hover:shadow-[0_20px_50px_rgba(15,181,183,0.3)] transition-all duration-700">
            <img
              src={projectImage}
              alt={story.title}
              className="h-full w-full object-cover group-hover:scale-[1.08] transition-transform duration-1000 ease-out"
            />
            {/* Subtle premium overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Content Section */}
          <div className="pt-8 pb-4 flex flex-col flex-grow">
            {/* Logo above title */}
            {story.logo && (
              <div className="mb-3">
                <img
                  src={resolveImage(story.logo)}
                  alt={`${story.title} logo`}
                  className="h-8 w-auto object-contain object-left"
                />
              </div>
            )}

            {/* Title */}
            <h2 className="text-3xl sm:text-[32px] font-bold text-black mb-3 leading-[1.2] tracking-tight">
              {story.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-black line-clamp-3 leading-relaxed mb-8 flex-grow">
              {projectDesc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {projectCategory && (
                <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full text-white" style={{ backgroundColor: '#0FB5B7' }}>
                  {projectCategory}
                </span>
              )}
              {projectTech && (
                <span className="inline-block bg-gray-100 text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
                  {projectTech}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
