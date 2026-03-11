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
    title: 'Ideate',
    description:
      'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.',
    id: 1,
  },
  {
    image: '/carousel/uiux.jpeg',
    title: 'Designing',
    description:
      'We craft a sleek, functional Minimum Viable Product (MVP), blending intuitive design with core features to deliver maximum value and an exceptional user experience.',
    id: 2,
  },
  {
    image: '/carousel/softwaredeveloper.jpg',
    title: 'Develop',
    description:
      'From concept to reality, we develop end-to-end solutions with a focus on feasibility, solid architecture, and agile methodologies.',
    id: 3,
  },
  {
    image: '/carousel/softwaretesting.png',
    title: 'Testing',
    description:
      'Quality is paramount. Through rigorous testing and quality assurance, we ensure your product meets the highest standards.',
    id: 4,
  },
  {
    image: '/carousel/launcher.png',
    title: 'Launch',
    description:
      'We prepare for a smooth, impactful product launch with customized deployment strategies, ensuring a flawless rollout.',
    id: 5,
  },
  {
    image: '/carousel/support.jpg',
    title: 'Ongoing Support',
    description:
      'Our commitment doesn\'t end at launch. We provide continuous updates and improvements for long-term success.',
    id: 6,
  },
];

export default function ProductProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);

  const totalSteps = cards.length;

  useEffect(() => {
    // ScrollTrigger for each section to track active step
    sectionRefs.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActiveStep(index),
        onEnterBack: () => setActiveStep(index),
      });
    });

    // Animate the progress line
    if (progressLineRef.current && containerRef.current) {
      gsap.to(progressLineRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true,
        },
      });
    }

    // Ensure the first image is handled by state
    setActiveStep(0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='flex bg-black w-full flex-col px-6 md:px-16 lg:px-24 xl:px-40 pb-20'>
      {/* Header */}
      <div className="md:h-60 md:pt-20 font-semibold text-3xl py-10 md:text-5xl">
        <h2 className="text-white">Our Product</h2>
        <h2 className="text-bluish">Development Journey</h2>
        <p className="flex text-white text-sm md:text-xl font-medium items-center gap-2 mt-4">
          Bringing Your Vision to Life, Step by Step
          <FaArrowRight className='rotate-90' />
        </p>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="flex bg-black text-white relative pt-10">
        {/* Left Progress Line */}
        <div className="hidden md:flex flex-col items-center w-[3px] mr-8 lg:mr-12 relative flex-shrink-0">
          {/* Background line */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-full" />
          {/* Animated fill line */}
          <div
            ref={progressLineRef}
            className="absolute top-0 left-0 w-full h-full bg-white rounded-full origin-top"
            style={{ transform: 'scaleY(0)' }}
          />
        </div>

        {/* Left Content Area (Scrollable Horizontally on Mobile, Vertically on Desktop) */}
        <div className="relative flex flex-row w-full lg:w-1/2 overflow-x-auto lg:overflow-visible flex-nowrap lg:flex-col gap-6 lg:gap-0 snap-x snap-mandatory lg:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-10 lg:pb-0">
          {cards.map((step, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="step min-w-[85vw] md:min-w-0 lg:h-[80vh] flex flex-col justify-start lg:justify-center snap-center lg:snap-align-none"
            >
              {/* Mobile Image (Visible only on mobile) */}
              <div className="lg:hidden w-[85vw] sm:w-[400px] aspect-[3/4] mx-auto relative rounded-[150px] overflow-hidden mb-8 mt-6 bg-gray-900/10">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105 opacity-90"
                />
              </div>

              <div className="flex flex-col text-left lg:py-12 lg:pr-16 transition-all duration-700 ease-in-out z-20 px-2 lg:px-0 mt-20 lg:mt-0">
                <p className={`text-sm md:text-lg lg:text-xl mb-1 md:mb-6 font-mono tracking-wider transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-white/30'
                  }`}>
                  {String(index + 1).padStart(2, '0')}/{String(totalSteps).padStart(2, '0')}
                </p>
                <h3 className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight italic transition-colors duration-500 ${activeStep === index ? 'text-[#0FB5B7]' : 'text-white/20'
                  }`}>
                  {step.title}
                </h3>
                <p className={`mt-3 md:mt-10 text-sm md:text-base lg:text-xl font-normal leading-relaxed max-w-2xl transition-colors duration-500 ${activeStep === index ? 'text-white/90' : 'text-white/20'
                  }`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sticky Image Area */}
        <div className="lg:flex w-1/2 sticky top-0 h-screen items-center justify-center hidden">
          <div className="relative w-[320px] xl:w-[400px] 2xl:w-[450px] h-[450px] xl:h-[550px] 2xl:h-[650px] rounded-[160px] overflow-hidden bg-gray-900/10 shadow-2xl mt-[-10vh]">
            {cards.map((step, index) => (
              <Image
                key={index}
                src={step.image}
                alt={step.title}
                layout="fill"
                objectFit="cover"
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeStep
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
