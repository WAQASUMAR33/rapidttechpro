'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const careerContent = useRef([]);

  useEffect(() => {
    careerContent.current.forEach((content, index) => {
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

  const careerInfo = [
    {
      title: 'Why Work with Us?',
      content: [
        'Innovative Projects: Work on cutting-edge technologies and contribute to projects that make a real-world impact.',
        'Professional Growth: We invest in our team’s development with continuous learning opportunities and career advancement.',
        'Supportive Culture: Join a team where your ideas are heard, collaboration is encouraged, and diversity is celebrated.',
        'Work-Life Balance: Enjoy flexible working hours and a healthy balance between work and life.',
      ],
    },
    {
      title: 'Join Our Team',
      content:
        'If you’re ready to take your career to the next level in a forward-thinking, high-growth company, we’d love to hear from you. Explore our open positions and apply today to become part of the RapidTechPro family.',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <UserLayout>
        <div className="bg-white min-h-screen flex flex-col items-center py-16 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Careers at RapidTechPro
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
            At RapidTechPro, we’re more than just a software development company—we’re a team of innovators, problem solvers, and technology enthusiasts. We are always on the lookout for talented individuals who are eager to shape the future of software development. If you are passionate about coding, designing, or building impactful tech solutions, RapidTechPro offers a collaborative and dynamic environment to help you grow professionally.
          </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            {careerInfo.map((section, i) => (
              <div
                key={i}
                ref={(el) => (careerContent.current[i] = el)}
                className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
              >
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  {section.title}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-4 text-gray-600">
                    {section.content.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </UserLayout>
    </div>
  );
}
