'use client';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OurProductDevelopmentProcess = () => {
  return (
    <div className="bg-black">
      <div className="md:h-60 md:pl-20 md:pt-20 text-3xl py-10 px-4 md:text-6xl font-[800]">
        <h1 className="text-white">Our Product</h1>
        <h1 className="text-bluish">Development Process</h1>
        <p className="flex text-white text-sm md:text-xl font-medium items-center gap-2 mt-4">
          View More <FaArrowRight />
        </p>
      </div>
      <div className="relative">
        {/* <VerticalProgressBar /> */}
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

// const VerticalProgressBar = () => {
//   useEffect(() => {
//     // GSAP animation for the vertical line progress
//     gsap.to('.progress-fill', {
//       height: '100%',
//       scrollTrigger: {
//         trigger: '.horizontal-scroll',
//         start: 'top top', // Start when the section is at the top of the viewport
//         end: 'bottom top', // End when the section reaches the top of the viewport
//         scrub: 0.25, // Make it smooth and responsive
//         markers: false, // Optionally enable markers for debugging
//       },
//     });
//   }, []);

//   return (
//     <div className="fixed left-0 top-0 h-full w-2 bg-gray-600">
//       <div className="progress-fill w-full bg-white" style={{ height: '0%' }}></div>
//     </div>
//   );
// };

const HorizontalScrollCarousel = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for sliding cards from right to left on scroll
    gsap.utils.toArray('.card').forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: '100%', // Start from the right (off-screen)
          opacity: 0.5, // Start with zero opacity
        },
        {
          x: '0%', // End at normal position
          opacity: 1, // Fade in
          scrollTrigger: {
            trigger: card,
            start: 'top 90%', // Trigger when the card is 90% from the top of the viewport
            end: 'top 70%', // End when the card reaches 40% of the top of the viewport
            scrub: 0, // Lower scrub value to make it more responsive
            markers: false, // Optionally, you can add markers for debugging
            pin: false, // Disable pinning to prevent excessive scrolling issues
          },
          ease: 'power2.out', // Smoother easing
          duration: 0.3, // Shortened duration for faster transitions
        }
      );
    });
  }, []);

  return (
    <section className="horizontal-scroll relative min-h-screen bg-black w-full overflow-hidden">
      <div className="flex flex-col gap-10">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      className="card w-full min-h-[100vh] flex items-center bg-black group overflow-hidden transition-all duration-700 px-4 md:px-0 md:p-10"
    >
      <div className="grid grid-cols-1 md:gap-0 gap-3 md:grid-cols-2 w-full">
        <div className="flex flex-col text-left md:p-16">
          <p className="text-xl md:text-[20px] text-white mb-4">{card.date}</p>
          <h1 className="text-4xl md:text-[60px] text-bluish font-bold">{card.title}</h1>
          <p className="mt-4 text-sm md:text-[20px] text-white md:max-w-2xl">{card.description}</p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="border-2 border-white md:w-[420px] md:h-[570px] w-[200px] h-[200px] rounded-full overflow-hidden md:p-2">
            <img
              src={card.url}
              alt={card.title}
              className="md:w-[400px] md:h-[550px] w-full h-full object-cover md:object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductDevelopmentProcess;

const cards = [
  {
    url: '/carousel/idea.png',
    title: 'Idea',
    description:
      'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.',
    date: '1/2/2024',
    id: 1,
  },
  {
    url: '/carousel/uiux.jpeg',
    title: 'Designing',
    description:
      'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.',
    date: '1/2/2024',
    id: 2,
  },
  {
    url: '/carousel/softwaredeveloper.jpg',
    title: 'Development',
    description:
      'Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.',
    date: '1/2/2024',
    id: 3,
  },
  {
    url: '/carousel/softwaretesting.png',
    title: 'Testing',
    description:
      'Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.',
    date: '1/2/2024',
    id: 4,
  },
  {
    url: '/carousel/launcher.png',
    title: 'Launch',
    description:
      'Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.',
    date: '1/2/2024',
    id: 5,
  },
  {
    url: '/carousel/support.jpg',
    title: 'Support',
    description:
      'Providing ongoing support and enhancements to ensure continued product success.',
    date: '1/2/2024',
    id: 'custom',
  },
];
