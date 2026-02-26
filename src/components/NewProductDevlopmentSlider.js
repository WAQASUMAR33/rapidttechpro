'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: '/carousel/idea.png',
    title: 'Ideation',
    description:
      'We dive deep into your vision, collaborating closely to create a strategic roadmap that aligns perfectly with your goals, setting the foundation for a successful product journey.',
    date: '1/2/2024',
    id: 1,
  },
  {
    image: '/carousel/uiux.jpeg',
    title: 'Designing',
    description:
      'We craft a sleek, functional Minimum Viable Product (MVP), blending intuitive design with core features to deliver maximum value and an exceptional user experience.',
    date: '1/2/2024',
    id: 2,
  },
  {
    image: '/carousel/softwaredeveloper.jpg',
    title: 'Development',
    description:
      'From concept to reality, we develop end-to-end solutions with a focus on feasibility, solid architecture, and agile methodologies to ensure rapid delivery without compromising quality.',
    date: '1/2/2024',
    id: 3,
  },
  {
    image: '/carousel/softwaretesting.png',
    title: 'Testing',
    description:
      'Quality is paramount. Through rigorous testing and quality assurance, we ensure your product meets the highest standards, providing a seamless user experience across all touchpoints.',
    date: '1/2/2024',
    id: 4,
  },
  {
    image: '/carousel/launcher.png',
    title: 'Launch',
    description:
      'We prepare for a smooth, impactful product launch with customized deployment strategies, ensuring a flawless rollout and offering continuous support post-launch.',
    date: '1/2/2024',
    id: 5,
  },
  {
    image: '/carousel/support.jpg',
    title: 'Ongoing Support',
    description:
      'Our commitment doesn’t end at launch. We provide continuous updates and improvements, ensuring your product remains optimized for long-term success.',
    date: '1/2/2024',
    id: 'custom',
  },
];

export default function ProductProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Set up ScrollTrigger for each section
    sectionRefs.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveStep(index),
        onLeaveBack: () => setActiveStep(index - 1),
        scrub: true,
      });
    });

    // Set initial position of images off-screen at the bottom
    gsap.set(imageRefs.current, { opacity: 0, y: 50 });

    // Quickly transition images when the section is in view
    cards.forEach((step, index) => {
      const image = imageRefs.current[index];

      ScrollTrigger.create({
        trigger: sectionRefs.current[index],
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          gsap.to(image, {
            opacity: 1,  // Make the image fully visible when in view
            y: 0, // Move image up to its natural position
            duration: 0.01, // Smooth transition duration
            ease: 'none', // Ease for smooth animation
          });
        },
        onLeave: () => {
          gsap.to(image, {
            opacity: 0,  // Fade out when the section leaves
            y: 50, // Move image down to simulate exit
            duration: 0.01, // Smooth fade-out duration
            ease: 'none', // Ease for fade-out animation
          });
        },
        onEnterBack: () => {
          gsap.to(image, {
            opacity: 1,  // Fade in when scrolling back into view
            y: 0,
            duration: 0.01,
            ease: 'none',
          });
        },
        onLeaveBack: () => {
          gsap.to(image, {
            opacity: 0, // Fade out quickly when leaving
            y: 50,
            duration: 0.01,
            ease: 'none',
          });
        },
        scrub: 1,  // Scrub the scroll so the animation progresses with the scroll
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='flex bg-black w-full flex-col px-4'>
  <div className="md:h-60 md:pl-20 md:pt-20 font-semibold text-3xl py-10  md:text-5xl">
                <h2 className="text-white">Our Product</h2>
                <h2 className="text-bluish">Development Journey</h2>
                <p className="flex text-white text-sm md:text-xl font-medium items-center gap-2 mt-4">
                Bringing Your Vision to Life, Step by Step
                <FaArrowRight className='rotate-90'/>
                </p>
            </div>

    <div className="flex bg-black text-white">
      {/* Left Content Area with Vertical Line */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-1/2  lg:px-16 md:py-16">
        {cards.map((step, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`step transition-opacity duration-500 min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center`}
          >
            <div className="flex flex-col text-left md:p-12 transition-all duration-1000 ease-in-out">
              <p className="text-lg md:text-[20px] text-white mb-2 md:mb-4">{step.date}</p>
              <h3 className="text-3xl md:text-[60px]  text-bluish font-bold">{step.title}</h3>
              <p className="mt-2 md:mt-8 text-sm md:text-[18px] font-[400] text-white leading-relaxed">{step.description}</p>

            </div>
          </div>
        ))}
      </div>

      {/* Right Sticky Image Area */}
      <div className="lg:flex w-1/2 sticky top-0 h-screen items-center justify-center hidden">
        <div className="relative w-[350px] h-[500px] overflow-hidden ">
          {cards.map((step, index) => (
            <Image
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              src={step.image}
              alt={step.title}
              layout="fill"
              objectFit="cover"
              className={`absolute top-0 left-0 transition-all duration-500  transform rounded-full opacity-50 ${
                index === activeStep ? 'opacity-100' : 'opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
