'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const events = useRef([]);

  useEffect(() => {
    events.current.forEach((event, index) => {
      gsap.fromTo(
        event,
        { opacity: 0, y: 50, scaleX: 0.8 },
        {
          opacity: 1,
          y: 0,
          scaleX: 1,
          ease: 'power2.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: event,
            start: 'top 90%',
            end: 'top 90%',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
          delay: index * 0.2, // Adds delay for staggered effect
        }
      );
    });
  }, []);

  const eventDetails = [
    {
      title: 'Tech Meetups and Networking Events',
      content:
        'We host tech meetups and networking events that bring together industry professionals, thought leaders, and developers to share ideas and discuss emerging technologies. These events foster a spirit of collaboration and help our team stay connected with the latest industry trends while building valuable relationships within the tech ecosystem.',
    },
    {
      title: 'Hackathons and Innovation Challenges',
      content:
        'Innovation is at the core of our company culture. Our hackathons and innovation challenges provide an opportunity for our team members to collaborate, experiment, and build new solutions in a high-energy, creative environment. These events encourage out-of-the-box thinking and enable us to push the boundaries of technology.',
    },
    {
      title: 'Workshops and Skill-Building Sessions',
      content:
        'We offer regular workshops and skill-building sessions focused on specific technologies, tools, or development practices. These events help our team members deepen their expertise, learn new skills, and stay ahead in the ever-evolving world of software development.',
    },
    {
      title: 'Conferences and Industry Partnerships',
      content:
        'As part of our commitment to staying at the forefront of the industry, we participate in and sponsor conferences and industry partnerships. These events allow us to share our insights and engage with other tech leaders to explore new ways of solving challenges through collaboration.',
    },
    {
      title: 'Internal Knowledge-Sharing Events',
      content:
        'Internally, we host regular knowledge-sharing sessions where team members present on projects, new tools, or lessons learned. These sessions foster a culture of continuous improvement and ensure that everyone at RapidTechPro is equipped with the latest insights and best practices.',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <UserLayout>
        <div className="bg-white min-h-screen flex flex-col items-center py-16 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Events Resources at RapidTechPro
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
            At RapidTechPro, we believe in the power of community, collaboration, and continuous learning. Our event resources are designed to support both our internal team and the broader tech community by creating opportunities for knowledge exchange, networking, and growth.
          </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            {eventDetails.map((event, i) => (
              <div
                key={i}
                ref={(el) => (events.current[i] = el)}
                className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
              >
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  {event.title}
                </h2>
                <p className="text-gray-600">{event.content}</p>
              </div>
            ))}
          </div>
        </div>
      </UserLayout>
    </div>
  );
}
