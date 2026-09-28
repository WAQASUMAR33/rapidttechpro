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
    title: 'Development',
    description:
      'From concept to reality, we develop end-to-end solutions with a focus on feasibility, solid architecture, and agile methodologies to ensure rapid delivery without compromising quality.',
    id: 3,
  },
  {
    image: '/carousel/softwaretesting.png',
    title: 'Testing',
    description:
      'Quality is paramount. Through rigorous testing and quality assurance, we ensure your product meets the highest standards, providing a seamless user experience across all touchpoints.',
    id: 4,
  },
  {
    image: '/carousel/launcher.png',
    title: 'Launch',
    description:
      'We prepare for a smooth, impactful product launch with customized deployment strategies, ensuring a flawless rollout and offering continuous support post-launch.',
    id: 5,
  },
  {
    image: '/carousel/support.jpg',
    title: 'Ongoing Support',
    description:
      'Our commitment doesn\'t end at launch. We provide continuous updates and improvements, ensuring your product remains optimized for long-term success.',
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
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

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
    });

    setActiveStep(0);

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex bg-[#0B0F17] w-full flex-col py-24 md:py-32 site-full-grid border-t border-white/10" aria-label="Development Process">
      <div className="site-full-grid-inner">
        {/* Eyebrow */}
        <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/55 mb-4 sm:mb-5">
          Methodology & Delivery
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-white/20 mb-10 sm:mb-12" />

        {/* Two-Column Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <h2 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-bold leading-[1.08] tracking-tight text-white">
              <span className="text-white/55">Our Product</span> <br />
              Development Journey.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/60 max-w-md font-medium leading-relaxed">
            From strategic discovery to high-scale deployment, we turn complex ideas into seamless, market-leading digital products.
          </p>
        </div>

        {/* Main Content */}
        <div ref={containerRef} className="flex bg-transparent text-white relative pt-12 md:pt-16">
          {/* Left Progress Line */}
          <div className="hidden lg:flex flex-col items-center w-[1px] mr-12 lg:mr-20 relative flex-shrink-0">
            {/* Background line */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5" />
            {/* Animated fill line */}
            <div
              ref={progressLineRef}
              className="absolute top-0 left-0 w-full h-full bg-white origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Left Content Area */}
          <div className="relative flex flex-row w-full lg:w-1/2 overflow-x-auto lg:overflow-visible flex-nowrap lg:flex-col gap-6 lg:gap-0 snap-x snap-mandatory lg:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-10 lg:pb-0">
            {cards.map((step, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="step min-w-[85vw] md:min-w-[60vw] lg:min-w-0 shrink-0 lg:shrink lg:min-h-[70vh] flex flex-col justify-start lg:justify-center snap-center lg:snap-align-none"
              >
                {/* Mobile Image */}
                <div className="lg:hidden w-[75vw] sm:w-[350px] aspect-[3/4] mx-auto relative rounded-full overflow-hidden mb-8 mt-6 bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col text-left lg:py-16 lg:pr-12 transition-all duration-700 ease-in-out z-20 px-2 lg:px-0">
                  <p className={`text-sm md:text-base mb-2 font-mono tracking-widest transition-colors duration-500 uppercase ${activeStep === index ? 'text-white' : 'text-white lg:text-white/50'
                    }`}>
                    {String(index + 1).padStart(2, '0')}/06
                  </p>
                  <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-colors duration-500 ${activeStep === index ? 'text-[#0FB5B7]' : 'text-[#0FB5B7] lg:text-white/60'
                    }`}>
                    {step.title}
                  </h3>
                  <p className={`mt-6 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-xl transition-colors duration-500 ${activeStep === index ? 'text-white/90' : 'text-white/90 lg:text-white/50'
                    }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sticky Image Area */}
          <div className="lg:flex w-1/2 sticky top-0 h-screen items-center justify-center hidden">
            <div className="relative w-[280px] xl:w-[380px] aspect-[1/1.4] rounded-full overflow-hidden bg-white shadow-2xl transition-all duration-700">
              {cards.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === activeStep
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-110 translate-y-10'
                    }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
