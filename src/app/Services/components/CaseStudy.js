'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import DottedWorldMap from '@/components/DottedWorldMap';

const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

const resolveImage = (path) => {
  if (!path) return '/projects/maker4u3.png';
  if (path.startsWith('http')) return path;
  if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
  return path;
};

export default function CaseStudy() {
  const [stories, setStories] = useState([]);
  const [categories, setCategories] = useState(['All Category']);
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const headers = { 'x-api-key': apiKey };

        // Fetch categories for the filter pills
        try {
          const targetUrl = apiBaseUrl.includes('localhost') ? '/api/proxy/api/categories' : `${apiBaseUrl}/api/categories`;

          const catRes = await fetch(targetUrl, { headers });
          if (catRes.ok) {
            const catData = await catRes.json();
            // Handle various response shapes
            const catList = Array.isArray(catData)
              ? catData
              : (catData?.data || catData?.categories || []);

            const names = catList
              .map((c) => (typeof c === 'string' ? c : c?.name))
              .filter(Boolean);

            if (names.length > 0) {
              setCategories(['All Category', ...names]);
              setSelectedCategory('All Category');
            }
          }
        } catch (catErr) {
          console.error("Error fetching categories:", catErr);
        }

        // Fetch projects
        const projTargetUrl = apiBaseUrl.includes('localhost') ? '/api/proxy/api/projects' : `${apiBaseUrl}/api/projects`;
        const projRes = await fetch(projTargetUrl, { headers });
        if (!projRes.ok) throw new Error(`Failed to fetch projects (${projRes.status})`);
        const projData = await projRes.json();

        let projects = [];
        if (projData && projData.data && Array.isArray(projData.data)) {
          projects = projData.data;
        } else if (Array.isArray(projData)) {
          projects = projData;
        } else if (projData && projData.projects && Array.isArray(projData.projects)) {
          projects = projData.projects;
        }

        setStories(projects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredStories = stories.filter((story) => {
    if (selectedCategory === 'All Category') return true;
    const cats = story.categories?.map((c) => (typeof c === 'string' ? c : c?.name)) || [story.category];
    return cats.includes(selectedCategory);
  });

  return (
    <div className="w-full bg-[#0A0A0A] text-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">

        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight">
            <span className="text-[#0FB5B7] font-extrabold">Real-time</span> project map
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm md:text-xs font-bold transition-all duration-300 border ${selectedCategory === category
                  ? 'bg-[#0FB5B7] text-white border-[#0FB5B7]'
                  : 'bg-transparent text-gray-300 border-gray-600 hover:border-gray-400'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 h-auto lg:h-[600px]">

          {/* Left: Project List Area (Scrollable) */}
          <div className="w-full lg:w-[40%] flex flex-col relative h-full">
            {/* Top Fade overlay */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            <div className="flex-1 overflow-y-auto pr-4 lg:pr-6 space-y-4 custom-scrollbar relative z-0 pb-20">
              {loading && (
                <div className="flex justify-center py-20">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0FB5B7]"></div>
                </div>
              )}
              {error && (
                <div className="text-center py-10 text-red-500">{error}</div>
              )}
              {!loading && !error && filteredStories.length === 0 && (
                <div className="text-center py-10 text-gray-400">No projects found.</div>
              )}

              {/* Project Items */}
              {!loading && !error && filteredStories.map((story, idx) => (
                <Link href={`/Work/${story.slug || story.id}`} key={idx} className="block group">
                  <div className="flex gap-5 p-5 rounded-2xl bg-[#111] border border-gray-800 hover:border-[#0FB5B7]/50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-2">
                      <img
                        src={resolveImage(story.image || story.projectIcon || story.mainImage || story.bannerImage)}
                        alt={story.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#0FB5B7] transition-colors leading-tight mb-1">
                        {story.title}
                      </h3>
                      {/* Categories list */}
                      {story.categories && story.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                          {story.categories.slice(0, 3).map((cat, cidx) => (
                            <span key={cidx} className="text-[10px] uppercase tracking-wider text-[#0FB5B7] bg-[#0FB5B7]/10 px-2 py-0.5 rounded">
                              {typeof cat === 'string' ? cat : cat.name}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {story.shortDescription || story.description || story.clientName || 'Digital transformation project.'}
                      </p>
                      <span className="text-[#0FB5B7] text-xs font-semibold mt-3 group-hover:underline flex items-center gap-1">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Fade overlay */}
            <div className="hidden lg:block absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          </div>

          {/* Right: Map Area */}
          <div className="w-full lg:w-[60%] relative flex justify-center items-center h-[300px] md:h-[500px] lg:h-full">
            <div className="relative w-full max-w-[800px] opacity-40 hover:opacity-100 transition-opacity duration-700">
              {/* Background Map SVG */}
              <DottedWorldMap className="w-full h-auto text-gray-600" />

              {/* Decorative Pins */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute top-[30%] left-[20%] text-[#0FB5B7]">
                <FaMapMarkerAlt size={24} className="filter drop-shadow-[0_0_8px_rgba(15,181,183,1)]" />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }} className="absolute top-[45%] left-[50%] text-[#8ffbff]">
                <FaMapMarkerAlt size={20} className="filter drop-shadow-[0_0_8px_rgba(143,251,255,1)]" />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 1 }} className="absolute top-[25%] right-[25%] text-[#0FB5B7]">
                <FaMapMarkerAlt size={28} className="filter drop-shadow-[0_0_12px_rgba(15,181,183,1)]" />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[30%] left-[65%] text-[#8ffbff]">
                <FaMapMarkerAlt size={18} className="filter drop-shadow-[0_0_6px_rgba(15,181,183,1)]" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Scrollbar styling injected for this specific list */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(15, 181, 183, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(15, 181, 183, 0.8);
        }
      `}} />
    </div>
  );
}