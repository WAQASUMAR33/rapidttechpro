'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const manifestoContent = useRef([]);

  useEffect(() => {
    manifestoContent.current.forEach((content, index) => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 50, scaleX: 0.8 },
        {
          opacity: 1,
          y: 0,
          scaleX: 1,
          ease: 'power2.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: content,
            start: 'top 90%',
            end: 'top 90%',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
          delay: index * 0.2, // Adds staggered delay for each section
        }
      );
    });
  }, []);

  const manifestoInfo = [
    {
      title: 'Innovation with Purpose',
      content:
        'We don’t just create software—we create solutions that matter. We tackle challenges with creativity, developing products that push boundaries and make a tangible impact. Every project we undertake is an opportunity to shape the future.',
    },
    {
      title: 'Quality without Compromise',
      content:
        'Excellence is our standard. We believe that the best solutions come from meticulous attention to detail, rigorous testing, and a relentless pursuit of quality. Our commitment to delivering superior software is unwavering, and we never compromise on the integrity of our work.',
    },
    {
      title: 'Collaboration is Key',
      content:
        'We know that great software is built by great teams. At RapidTechPro, we foster a culture of collaboration where ideas flow freely, feedback is valued, and everyone contributes to the bigger picture. We work closely with our clients, understanding their unique needs and crafting tailored solutions that exceed expectations.',
    },
    {
      title: 'Empowering People',
      content:
        'We are dedicated to empowering both our clients and our team members. We invest in continuous learning and development, creating an environment where everyone has the opportunity to grow, innovate, and achieve their full potential. We believe that technology’s true power lies in its ability to uplift and create opportunities for people.',
    },
    {
      title: 'Building the Future',
      content:
        'We’re not just looking at today; we’re building tomorrow. By embracing the latest technologies and forward-thinking approaches, we strive to be at the forefront of digital transformation, helping businesses navigate the future with confidence and agility.',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <UserLayout>
        <div className="bg-white min-h-screen flex flex-col items-center py-16 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Our Manifesto at RapidTechPro
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
            At RapidTechPro, we believe that technology should serve a higher purpose. We are driven by a passion for innovation, a commitment to quality, and a vision to create solutions that not only solve problems but also inspire change. Our manifesto is a reflection of the values that guide every line of code we write, every project we deliver, and every relationship we build.
          </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            {manifestoInfo.map((section, i) => (
              <div
                key={i}
                ref={(el) => (manifestoContent.current[i] = el)}
                className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
              >
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </UserLayout>
    </div>
  );
}
