'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const steps = useRef([]);

  useEffect(() => {
    steps.current.forEach((step) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50, scaleX: 0.8 },
        {
          opacity: 1,
          y: 0,
          scaleX: 1,
          ease: 'none',
          duration: 0.5,
          stagger:1,
          scrollTrigger: {
            trigger: step,
            start: 'top 90%',
            end: 'top 90%',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);

  const processSteps = [
    {
      title: '1. Discovery and Consultation',
      content:
        'Every project begins with understanding our clients’ unique needs and objectives. During the discovery phase, we engage in in-depth consultations to gather requirements, define project goals, and map out the key deliverables. This collaborative phase ensures that we have a clear vision of what success looks like.',
    },
    {
      title: '2. Planning and Design',
      content:
        'Once the goals are set, we move into planning and design. Our team of experts develops detailed project roadmaps, defines technical requirements, and creates wireframes and prototypes. We focus on delivering intuitive, user-friendly designs that align with the client’s vision and business goals.',
    },
    {
      title: '3. Development and Coding',
      content:
        'With a solid foundation in place, our development team begins the coding phase. Using agile methodologies, we work in iterative cycles (sprints) to build the software. This allows for flexibility and ensures that feedback is integrated throughout the process. We emphasize clean, maintainable code and follow best practices to ensure scalability and performance.',
    },
    {
      title: '4. Quality Assurance and Testing',
      content:
        'Before releasing any software, we conduct rigorous quality assurance and testing. Our QA team performs automated and manual tests to ensure the software is bug-free, secure, and ready for deployment. We test across multiple environments and devices to ensure the best possible user experience.',
    },
    {
      title: '5. Deployment and Launch',
      content:
        'Once the software passes testing, we prepare for deployment. Our team ensures a seamless transition from development to production, handling everything from server configurations to deployment protocols. After the software is live, we continue to monitor its performance to ensure stability.',
    },
    {
      title: '6. Maintenance and Support',
      content:
        'Our relationship doesn’t end with the launch. We provide ongoing maintenance and support to address any issues that may arise, release updates, and optimize performance. This post-launch phase is critical to ensuring the long-term success and evolution of the software.',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <UserLayout>
        <div className="bg-white min-h-screen flex flex-col items-center py-16 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Our Development Process at RapidTechPro
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
          At RapidTechPro, we follow a structured yet flexible approach to software development that ensures we deliver high-quality, tailored solutions on time and within budget. Our process is designed to foster collaboration, transparency, and continuous improvement from start to finish.
           </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            {processSteps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (steps.current[i] = el)}
                className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
              >
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  {step.title}
                </h2>
                <p className="text-gray-600">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </UserLayout>
    </div>
  );
}
