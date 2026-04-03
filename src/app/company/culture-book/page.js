'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function CultureBook() {
  const cultureContent = useRef([]);

  useEffect(() => {
    cultureContent.current.forEach((content, index) => {
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

  const cultureInfo = [
    {
      title: 'Empathy in Action',
      content:
        'We believe empathy is the cornerstone of our success. Understanding each other’s perspectives—whether within the team or with our clients—helps us build stronger relationships and more impactful solutions. We approach every challenge with a mindset that values communication, understanding, and mutual respect.',
    },
    {
      title: 'Collaboration Over Competition',
      content:
        'At RapidTechPro, we thrive on collaboration. We don’t see our team members as individuals working in isolation, but as a collective force working towards a common goal. We break down silos and encourage open communication, knowing that the best ideas come from working together. Whether it\'s a brainstorming session or a feedback loop, we value every voice and foster an environment where creativity and collaboration can flourish.',
    },
    {
      title: 'Innovation and Curiosity',
      content:
        'Innovation is in our DNA. We embrace curiosity and encourage our team to constantly challenge the status quo. Every project is an opportunity to explore new technologies, experiment with fresh ideas, and push boundaries. At RapidTechPro, we don\'t just follow trends—we set them.',
    },
    {
      title: 'Ownership and Accountability',
      content:
        'We believe in empowering our team to take ownership of their work. Each member is encouraged to lead with confidence, make decisions, and take responsibility for the outcomes. This sense of ownership fosters a culture of accountability where everyone feels personally invested in the company’s success.',
    },
    {
      title: 'Work-Life Harmony',
      content:
        'We recognize that our team’s well-being is just as important as the work we do. That\'s why we offer flexibility, allowing our employees to strike a healthy balance between their personal and professional lives. Whether it\'s flexible hours, remote work options, or simply encouraging time for rest and recharge, we support each team member in finding their own version of work-life harmony.',
    },
    {
      title: 'Continuous Learning',
      content:
        'In an ever-evolving tech landscape, learning is a constant. We invest in our people by offering opportunities for personal and professional development. From training programs to tech meetups and mentorship, we ensure that everyone at RapidTechPro has the resources they need to stay at the forefront of the software development field.',
    },
    {
      title: 'Celebrating Diversity',
      content:
        'We believe diverse teams create better solutions. RapidTechPro is committed to fostering an inclusive environment where everyone, regardless of background, is encouraged to bring their full, authentic selves to work. We embrace different perspectives because we know that diversity sparks innovation and drives success.',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <UserLayout>
        <div className="bg-white min-h-screen flex flex-col items-center py-16 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Culture Book at RapidTechPro
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
            At RapidTechPro, our culture is the foundation of everything we do. It's about more than just developing innovative software—it's about creating an environment where creativity thrives, collaboration flourishes, and every individual is empowered to bring their best ideas forward. We believe in building a company culture that fosters personal growth, inclusivity, and a shared commitment to excellence.
          </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            {cultureInfo.map((section, i) => (
              <div
                key={i}
                ref={(el) => (cultureContent.current[i] = el)}
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
