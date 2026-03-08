'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    id: 1,
    title: 'Maker4U',
    description: 'Your all-in-one solution for creating magnetic promotional products and flawless editing.',
    imageUrl: '/projects/maker4u3.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Image Maker',
    description: 'Discover a variety of products at unbeatable prices. Shop now and enjoy a seamless online shopping experience!',
    imageUrl: '/projects/Imagemaker.png',
    link: '#',
  },
  {
    id: 3,
    title: 'CouponRi',
    description: 'Join SolveAndWin: Compete, Solve Challenges, and Earn Rewards Like Never Before!',
    imageUrl: '/projects/CoupenRi 1.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Advance AI Tools',
    description: 'Use our Text to Speech technology to transform your articles, books, and more into audio in just a few clicks!',
    imageUrl: '/projects/AdvanceAi.png',
    link: '#',
  },
  {
    id: 5,
    title: 'Solve And Wins',
    description: 'Use our Text to Speech technology to transform your articles, books, and more into audio in just a few clicks!',
    imageUrl: '/projects/solveandwins.png',
    link: '#',
  },
];

const PortfolioSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 1, // Stagger animation for sequential effect
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentNode, // Trigger based on parent container
          start: 'top 90%',
          end: 'bottom 40%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 capitalize">Our amazing work</h2>
        <p className="text-lg text-gray-600 mb-8">
          We offer versatile templates that can be used by individuals and companies
          looking for a simple one page template.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-full mb-12 hover:bg-gray-800 transition">
          View all projects &rarr;
        </button>

        {/* Row Layout */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <div
                key={story.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative h-60 sm:h-80 group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                  <p className="text-sm mb-4">{story.description}</p>
                  <a
                    href={story.link}
                    className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
                  >
                    Learn More
                  </a>
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
