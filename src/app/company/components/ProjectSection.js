'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_STORIES = [
  {
    id: 1,
    title: 'Maker4U',
    description: 'Your all-in-one solution for creating magnetic promotional products and flawless editing.',
    imageUrl: '/projects/maker4u3.png',
    link: '/work/1',
  },
  {
    id: 2,
    title: 'Image Maker',
    description: 'Discover a variety of products at unbeatable prices. Shop now and enjoy a seamless online shopping experience!',
    imageUrl: '/projects/Imagemaker.png',
    link: '/work/2',
  },
  {
    id: 3,
    title: 'CouponRi',
    description: 'Join SolveAndWin: Compete, Solve Challenges, and Earn Rewards Like Never Before!',
    imageUrl: '/projects/CoupenRi 1.png',
    link: '/work/3',
  },
  {
    id: 4,
    title: 'Advance AI Tools',
    description: 'Use our Text to Speech technology to transform your articles, books, and more into audio in just a few clicks!',
    imageUrl: '/projects/AdvanceAi.png',
    link: '/work/4',
  },
  {
    id: 5,
    title: 'Solve And Wins',
    description: 'Use our Text to Speech technology to transform your articles, books, and more into audio in just a few clicks!',
    imageUrl: '/projects/solveandwins.png',
    link: '/work/5',
  },
];

const PortfolioSection = () => {
  const [stories, setStories] = useState(FALLBACK_STORIES);
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef([]);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  const resolveImage = (path) => {
    if (!path) return '/projects/maker4u3.png';
    if (path.startsWith('http')) return path;
    if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
    return path;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);

        const response = await fetch('/api/projects', {
          headers: { 'x-api-key': apiKey },
          signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!response.ok) return;
        const data = await response.json();

        let projectData = [];
        if (data && data.data && Array.isArray(data.data)) {
          projectData = data.data;
        } else if (Array.isArray(data)) {
          projectData = data;
        } else if (data && data.projects && Array.isArray(data.projects)) {
          projectData = data.projects;
        }

        if (projectData.length > 0) {
          setStories(
            projectData.map((p, idx) => ({
              id: p.id || idx + 1,
              title: p.title || p.name || 'Untitled Project',
              description: p.description || p.shortDescription || p.category || '',
              imageUrl: resolveImage(p.mainImage || p.imageUrl || p.image || p.bannerImage || p.projectIcon),
              link: p.id ? `/work/${p.id}` : '/work',
            }))
          );
        }
      } catch (err) {
        console.error('PortfolioSection fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [apiKey]);

  useEffect(() => {
    const validCards = cardsRef.current.filter(Boolean);
    if (validCards.length > 0) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            scrollTrigger: {
              trigger: validCards[0]?.parentNode,
              start: 'top 90%',
              end: 'bottom 40%',
              scrub: false,
            },
          }
        );
      });
      return () => ctx.revert();
    }
  }, [stories]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 capitalize">Our amazing work</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          We offer versatile templates and custom solutions tailored for individuals and companies looking to scale their digital presence.
        </p>
        <Link
          href="/work"
          className="inline-block bg-black text-white py-2.5 px-6 rounded-full mb-12 hover:bg-gray-800 transition font-semibold text-sm tracking-wide shadow-md hover:shadow-lg"
        >
          View all projects &rarr;
        </Link>

        {/* Row Layout */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <div
                key={story.id ?? index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative h-60 sm:h-80 group overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-gray-50"
              >
                <img                   src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/projects/maker4u3.png';
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center text-white p-6 backdrop-blur-[2px]">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-sm mb-5 text-gray-200 line-clamp-3 max-w-sm">{story.description}</p>
                  <Link
                    href={story.link || `/work/${story.id}`}
                    className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-[#0FB5B7] hover:text-white transition shadow-lg text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
