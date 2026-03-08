'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50, scaleX: 0.8 },
        {
          opacity: 1,
          y: 0,
          scaleX: 1,
          ease: 'none',
          duration: 0.7,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 80%',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <UserLayout>
        <div className="bg-white min-h-screen flex flex-col items-center py-16 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Testimonials at RapidTechPro
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
            At RapidTechPro, the satisfaction of our clients and partners speaks volumes about the quality of our work and the impact of our solutions. We take great pride in the relationships we’ve built and the results we’ve delivered. Our testimonials are a reflection of the trust our clients place in us and the value we bring to their businesses.
          </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            {[
              {
                title: 'Client Success Stories',
                content:
                  'Our clients consistently share their positive experiences with us, highlighting our commitment to excellence, innovation, and collaboration. From custom software development to system integrations and digital transformations, we’ve helped businesses across industries achieve their goals and overcome complex challenges.',
              },
              {
                title: 'Partnerships that Matter',
                content:
                  "We don't just deliver services—we build lasting partnerships. Many of our testimonials come from long-term collaborators who value our reliability, responsiveness, and ability to scale with their needs. These testimonials underscore our role as a trusted technology partner who is invested in the long-term success of our clients.",
              },
              {
                title: 'Team Recognition',
                content:
                  'In addition to client feedback, our team testimonials reflect the supportive, inclusive, and dynamic culture at RapidTechPro. Our team members appreciate the opportunities for growth, the collaborative environment, and the emphasis on work-life balance, which helps them thrive both professionally and personally.',
              },
            ].map((section, i) => (
              <div
                key={i}
                ref={(el) => (sections.current[i] = el)}
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
