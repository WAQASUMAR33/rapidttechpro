'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function PressRelease() {
  const pressResources = useRef([]);

  useEffect(() => {
    pressResources.current.forEach((resource, index) => {
      gsap.fromTo(
        resource,
        { opacity: 0, y: 50, scaleX: 0.8 },
        {
          opacity: 1,
          y: 0,
          scaleX: 1,
          ease: 'power2.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: resource,
            start: 'top 90%',
            end: 'top 90%',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
          delay: index * 0.2, // Adds staggered delay for each resource
        }
      );
    });
  }, []);

  const pressReleaseDetails = [
    {
      title: 'Comprehensive Media Kit',
      content:
        'We maintain an up-to-date media kit that includes key information about our company, products, leadership team, and services. This resource provides journalists and media professionals with all the details they need for a comprehensive story, including high-quality images, logos, and company background.',
    },
    {
      title: 'Press Release Templates',
      content:
        'To streamline the process of announcing news or updates, we have developed press release templates that are tailored to different types of announcements—be it product releases, partnership announcements, or company milestones. These templates ensure consistency in messaging while allowing for customization to address the unique aspects of each announcement.',
    },
    {
      title: 'Press Contact Directory',
      content:
        'Our press contact directory helps journalists quickly reach the right person for media inquiries. Whether you’re seeking insight into a new product feature or details about an upcoming event, our dedicated PR team is available to provide information and facilitate media relations.',
    },
    {
      title: 'Company Blog & Thought Leadership',
      content:
        'In addition to traditional press releases, we regularly update our company blog with thought leadership articles, case studies, and behind-the-scenes insights into our work at RapidTechPro. This blog serves as an extension of our press efforts, offering deeper perspectives on industry trends, technology innovations, and our company’s role in shaping the future of software development.',
    },
    {
      title: 'Media Partnerships',
      content:
        'We also build and nurture media partnerships with influential tech publications, industry blogs, and online platforms. These collaborations help us expand our reach and share our story with a broader audience while keeping us connected with thought leaders and industry influencers.',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <UserLayout>
        <div className="bg-white min-h-screen flex flex-col items-center py-16 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Press Release Resources at RapidTechPro
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
            At RapidTechPro, we understand the importance of clear and effective communication with the media and the public. Our press release resources are designed to ensure that we share our company’s news, product launches, achievements, and innovations in a way that is engaging, informative, and aligned with our brand.
          </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            {pressReleaseDetails.map((resource, i) => (
              <div
                key={i}
                ref={(el) => (pressResources.current[i] = el)}
                className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
              >
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  {resource.title}
                </h2>
                <p className="text-gray-600">{resource.content}</p>
              </div>
            ))}
          </div>
        </div>
      </UserLayout>
    </div>
  );
}
