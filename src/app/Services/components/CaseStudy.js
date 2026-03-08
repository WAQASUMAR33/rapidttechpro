'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'http://localhost:3001';
const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

const resolveImage = (path) => {
  if (!path) return '/projects/maker4u3.png';
  if (path.startsWith('http')) return path;
  if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
  return path;
};

export default function CaseStudy() {
  const [stories, setStories] = useState([]);
  const [categories, setCategories] = useState(['All Categories']);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const headers = { 'x-api-key': apiKey };

        // Fetch categories for the filter pills
        try {
          const catRes = await fetch(`${apiBaseUrl}/api/categories`, { headers });
          if (catRes.ok) {
            const catData = await catRes.json();
            const catList = catData?.data || catData || [];
            const names = catList.map((c) => (typeof c === 'string' ? c : c?.name)).filter(Boolean);
            if (names.length > 0) setCategories(['All Categories', ...names]);
          }
        } catch { /* keep default */ }

        // Fetch projects
        const projRes = await fetch(`${apiBaseUrl}/api/projects`, { headers });
        if (!projRes.ok) throw new Error(`Failed to fetch projects (${projRes.status})`);
        const projData = await projRes.json();

        // Handle new API response format { success: true, data: [...] }
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
    if (selectedCategory === 'All Categories') return true;
    const cats = story.categories?.map((c) => (typeof c === 'string' ? c : c?.name)) || [story.category];
    return cats.includes(selectedCategory);
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
              onClick={() => setSelectedCategory(category)}
              className={`border rounded-full px-2 py-1 text-sm mt-4 md:text-base md:px-6 md:py-2 ${selectedCategory === category ? 'bg-black text-white' : 'text-black'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* States */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0FB5B7]"></div>
          </div>
        )}
        {error && (
          <div className="text-center py-10 text-red-500">{error}</div>
        )}

        {/* Case Studies Grid */}
        {!loading && !error && (
          <div className="flex flex-wrap md:space-y-16 md:mt-10 md:max-w-6xl mx-auto">
            {filteredStories.length > 0 ? (
              filteredStories.map((story, index) => (
                <InViewCard key={story.id} story={story} index={index} />
              ))
            ) : (
              <p className="text-gray-500 py-12 text-center w-full">No projects found.</p>
            )}
          </div>
        )}

        {/* See More Button */}
        {!loading && filteredStories.length > 0 && (
          <div className="w-full flex justify-center mt-6 md:mt-10">
            <Link href="/Work" className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:border-black border hover:text-black">
              See More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// Card component with in-view animation
function InViewCard({ story, index }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  if (inView) {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.1 } });
  }

  const image = resolveImage(story.mainImage || story.imageUrl || story.image);
  const desc = story.shortDescription || story.description || '';
  const cats = story.categories?.map((c) => (typeof c === 'string' ? c : c?.name)).filter(Boolean) || [];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={`w-full md:w-1/2 md:px-12 mt-8 md:mb-16 ${index % 2 === 0 ? 'md:mt-5' : 'md:mt-20'}`}
    >
      <Link href={`/Work/${story.id}`} className="block group">
        <div className="bg-white shadow-md rounded-2xl overflow-hidden relative">
          <div className="h-72 w-full overflow-hidden">
            <img
              src={image}
              alt={story.title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {cats.slice(0, 2).map((cat) => (
                <span key={cat} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#0FB5B7', color: '#fff' }}>
                  {cat}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{story.title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{desc}</p>
            <div className="mt-4 text-[#0FB5B7] font-semibold hover:underline">View Case Study →</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}