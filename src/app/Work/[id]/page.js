'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import UserLayout from '../../UserLayout';
import CallToAction from '@/components/CallToAction';
import DottedWorldMap from '@/components/DottedWorldMap';


export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const targetRef = useRef(null);
  const processScrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: processProgress } = useScroll({
    target: processScrollRef,
    offset: ["start start", "end end"]
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };


  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  const fetchWithAuth = async (url) => {
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    };

    // Proxy fix for localhost CORS
    const targetUrl = apiBaseUrl.includes('localhost') && url.startsWith(apiBaseUrl)
      ? `/api/proxy${url.replace(apiBaseUrl, '')}`
      : url;

    const response = await fetch(targetUrl, { headers });
    return response;
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchWithAuth(`${apiBaseUrl}/api/projects/${projectId}`);
        if (response.ok) {
          const rawData = await response.json();
          const data = rawData?.data || rawData;
          setProject(data);
        } else {
          const allProjectsResponse = await fetchWithAuth(`${apiBaseUrl}/api/projects`);
          if (allProjectsResponse.ok) {
            const rawProjects = await allProjectsResponse.json();
            const allProjects = rawProjects?.data || rawProjects;
            const foundProject = allProjects.find(p => String(p.id) === String(projectId));
            if (foundProject) {
              setProject(foundProject);
            } else {
              throw new Error('Project not found');
            }
          } else {
            throw new Error('Failed to fetch projects');
          }
        }
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (projectId) fetchProject();
  }, [projectId, apiBaseUrl, apiKey]);

  if (loading) {
    return (
      <UserLayout>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-900 font-bold tracking-tight uppercase">Loading case study...</p>
          </div>
        </div>
      </UserLayout>
    );
  }

  if (error || !project) {
    return (
      <UserLayout>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Project not found</h2>
          <Link href="/Work" className="px-8 py-3 bg-black text-white rounded-full font-semibold">Back to All Projects</Link>
        </div>
      </UserLayout>
    );
  }

  const resolveImage = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
    return path;
  };

  // Named image fields from API
  const mainImage = resolveImage(project.mainImage) || resolveImage(project.imageUrl || project.image) || '/images/herosection.png';
  const bannerImage = resolveImage(project.bannerImage) || mainImage;
  const projectIcon = resolveImage(project.projectIcon || project.logo);

  // Challenge section images
  const challengeImage1 = resolveImage(project.challengeImage1) || mainImage;
  const challengeImage2 = resolveImage(project.challengeImage2) || resolveImage(project.images?.[0]?.imageUrl) || '/images/mobile-hero.png';
  const challengeImage3 = resolveImage(project.challengeImage3) || resolveImage(project.images?.[1]?.imageUrl) || '/images/webhero.png';

  // Adaptable design / AR section images
  const adaptableImage1 = resolveImage(project.adaptableImage1) || resolveImage(project.images?.[0]?.imageUrl) || '/images/mobile-hero.png';
  const adaptableImage2 = resolveImage(project.adaptableImage2) || resolveImage(project.images?.[1]?.imageUrl) || '/images/serviceshero.png';
  const adaptableImage3 = resolveImage(project.adaptableImage3) || resolveImage(project.images?.[2]?.imageUrl) || '/images/companybanner.png';

  // Full gallery from images[].imageUrl
  const rawGallery = project.images?.length > 0
    ? project.images.map(img => resolveImage(img.imageUrl || img.url)).filter(Boolean)
    : [];

  const rawDesc = project.shortDescription || project.description || project.blog || '';
  const rawCategory = project.categories?.length > 0
    ? (typeof project.categories[0] === 'string' ? project.categories[0] : project.categories[0]?.name)
    : (project.category || 'Tech Solution');

  let parsedProcessSteps = [
    { title: "Discovery", desc: "Deep dive into user needs and project requirements." },
    { title: "Strategy", desc: "Defining the roadmap and technical architecture." },
    { title: "Design", desc: "Crafting intuitive user interfaces and experiences." },
    { title: "Development", desc: "Building the core functionality with cutting-edge tech." },
    { title: "Testing", desc: "Ensuring every detail is polished and bug-free." },
  ];
  if (project.processSteps) {
    try {
      const parsed = typeof project.processSteps === 'string' ? JSON.parse(project.processSteps) : project.processSteps;
      if (Array.isArray(parsed) && parsed.length > 0) parsedProcessSteps = parsed;
    } catch { }
  }

  const rawTechnologies = project.technologies?.length > 0
    ? project.technologies.map(t => {
      if (typeof t === 'string') return { name: t, icon: null };
      return { name: t.name, icon: resolveImage(t.icon || t.imageUrl) };
    }).filter(t => t.name)
    : [
      { name: 'Next.js', icon: null },
      { name: 'Tailwind', icon: null },
      { name: 'React', icon: null },
      { name: 'Node.js', icon: null }
    ];

  const p = {
    ...project,
    title: project.title || "Project",
    subTitle: project.shortDescription || project.description || "Innovation meets performance in every detail.",
    // Named image fields
    imageUrl: mainImage,
    bannerImage,
    projectIcon,
    challengeImage1,
    challengeImage2,
    challengeImage3,
    adaptableImage1,
    adaptableImage2,
    adaptableImage3,
    category: rawCategory,
    clientName: project.client || project.clientName || 'Confidential',
    duration: project.duration || '1 Year',
    location: project.location || 'Global',
    aboutText: rawDesc || "A deep dive into this innovative solution tailored for excellence.",
    challengeText: project.challenge || "Creating a solution that provides real-time performance while maintaining a seamless user experience across all devices.",
    processSteps: parsedProcessSteps,
    technologies: rawTechnologies,
    gallery: rawGallery,
    // Section 7
    blendingHeading: project.blendingHeading || "Blending design with functionality",
    blendingDescription: project.blendingDescription || "Strategic focus on integrating intuitive design with high-performance practical features, creating a seamless digital hub.",
    blendingPoints: project.blendingPoints ? (typeof project.blendingPoints === 'string' ? JSON.parse(project.blendingPoints) : project.blendingPoints) : [
      "UX/UI Design: Intuitive and appealing designs for easy interaction.",
      "Creative Content: Engaging media for user profiles and interactions.",
      "Aligning Objectives: Design and features aligning with business goals.",
      "Interactive Visuals: Implementing interactive elements for a dynamic experience."
    ],
    // Section 8
    growthHeading: project.growthHeading || "Handling growth for success",
    growthStats: project.growthStats ? (typeof project.growthStats === 'string' ? JSON.parse(project.growthStats) : project.growthStats) : [
      '99.9% Infrastructure Uptime', 'Over 1M Active Daily Transactions', 'Real-time Analytics Dashboard', 'Auto-scaling Cloud Architecture'
    ],
    // Section 9
    arHeading: project.adaptableHeading || "Adaptable design and AR features",
    arDescription: project.adaptableDescription || "Creating solutions that are versatile, accommodating various user preferences. Enhancing user interaction and engagement with innovative pet profiles, animations and AR filters.",
    // Section 11
    resultsHeading: project.resultsHeading || "Project Results",
    resultsList: project.resultsList ? (typeof project.resultsList === 'string' ? JSON.parse(project.resultsList) : project.resultsList) : [
      'Successful App Store Launch', 'Integrated Secure Payments', 'Enhanced User Engagement', 'Highly Scalable Core'
    ]
  };

  return (
    <UserLayout>
      <div className="bg-white overflow-hidden font-sans" ref={targetRef}>

        {/* 1. BRAND HERO */}
        <section className="pt-32 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:max-w-[60%] lg:max-w-[50%]"
          >
            <div>
              {p.projectIcon && (
                <img src={p.projectIcon} className="h-12 w-auto object-contain" alt="Logo" />
              )}
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              {p.title}
            </h1>
            <div className="pt-2">
              <span className="px-3 py-1 border border-gray-300 rounded-full text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Industry: {p.category}
              </span>
            </div>
          </motion.div>
        </section>

        {/* 2. BANNER IMAGE SECTION (130vh) */}
        <section className="h-[130vh] w-full px-0 relative overflow-hidden">
          <img src={p.bannerImage} className="w-full h-full object-cover" alt="Hero Banner" />
        </section>

        {/* 3. ABOUT CLIENT SECTION (100vh) */}
        <section className="h-screen w-full flex items-center px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-900/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full items-center text-gray-900 relative">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10 z-10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">About the client</h2>
              <p className="text-lg md:text-xl leading-relaxed font-bold">
                {p.aboutText}
              </p>
              <div className="pt-10 flex items-center gap-4">
                <p className="text-lg font-medium text-gray-500">Location:</p>
                <p className="text-xl font-bold text-gray-900">{p.location}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center relative">
              <div className="w-full max-w-lg relative group">
                <DottedWorldMap className="w-full h-auto text-gray-200" />

                {/* Location Pin */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-[40%] left-[55%] flex flex-col items-center"
                >
                  <div className="bg-bluish/20 p-2 rounded-full animate-pulse">
                    <FaMapMarkerAlt className="text-bluish text-2xl" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. INNOVATION SECTION */}
        <section className="pt-32 pb-16 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start text-gray-900">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold leading-tight uppercase tracking-tighter">Innovation {p.title}</motion.h2>
            <motion.p variants={fadeIn} className="text-base md:text-lg leading-relaxed">
              {p.description || "We developed a comprehensive ecosystem that bridges the gap between complex backend data and a fluid, user-centric mobile experience."}
            </motion.p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <motion.p variants={fadeIn} className="text-xs font-bold uppercase tracking-widest mb-6 px-1 opacity-50">Tech Stack:</motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {p.technologies.slice(0, 4).map((tech, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex items-center gap-4 px-8 py-5 bg-gray-50 rounded-full border-2 border-transparent hover:border-bluish transition-all shadow-sm"
                  >
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      {tech.icon ? (
                        <img src={tech.icon} className="w-full h-full object-contain" alt={tech.name} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white rounded-lg font-bold text-xl border border-gray-200">{tech.name.charAt(0)}</div>
                      )}
                    </div>
                    <span className="text-xl font-bold tracking-tight">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div variants={fadeIn} className="pt-4">
              <p className="text-xs font-bold uppercase tracking-widest mb-2 px-1 opacity-50">Duration:</p>
              <p className="text-2xl font-bold px-1">{p.duration}</p>
            </motion.div>
          </motion.div>
        </section>

        {/* 5. OUR CHALLENGE */}
        <section className="pt-16 md:pt-20 pb-20 md:pb-40 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">

          {/* Top Row: Text Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tighter uppercase">Our challenge</motion.h2>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-900 leading-relaxed font-bold opacity-80">
              {p.challengeText}
            </motion.p>
          </motion.div>

          {/* Bottom Row: 3 Staggered Mobile Mockups */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 lg:gap-10">

            {/* Screen 1 - Left (Lowered) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="w-full md:w-[30%] aspect-[9/18] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border-[8px] border-black bg-white"
            >
              <img src={p.challengeImage1} className="w-full h-full object-cover" alt="Challenge Screen 1" />
            </motion.div>

            {/* Screen 2 - Center (Raised & Slightly Larger) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: -40 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full md:w-[32%] aspect-[9/19] rounded-[45px] md:rounded-[55px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] border-[10px] border-black z-10 bg-white"
            >
              <img src={p.challengeImage2} className="w-full h-full object-cover" alt="Challenge Screen 2" />
            </motion.div>

            {/* Screen 3 - Right (Lowered) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full md:w-[30%] aspect-[9/18] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border-[8px] border-black bg-white"
            >
              <img src={p.challengeImage3} className="w-full h-full object-cover" alt="Challenge Screen 3" />
            </motion.div>

          </div>
        </section>
        {/* 6. THE PROCESS (Sticky Heading + Scrolling Cards) */}
        <section className="px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 lg:gap-48 items-start relative py-20 md:py-40">
          {/* Left Column: Sticky Static Heading */}
          <div className="md:sticky md:top-40 w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tighter uppercase">
              The <br className="hidden md:block" /> process
            </h2>
          </div>

          {/* Right Column: Scrolling Cards */}
          <div className="w-full md:w-2/3 space-y-8 md:space-y-12">
            {p.processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-[#f2f2f2] p-8 md:p-14 rounded-[30px] md:rounded-[40px] border border-gray-200 group hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 leading-none">0{idx + 1}</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight uppercase">{step.title}</h3>
                  <p className="text-lg md:text-xl text-gray-900 leading-relaxed font-medium opacity-70">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. BLENDING DESIGN & FUNCTIONALITY (Restored Black Area) */}
        <section className="bg-black pt-16 md:pt-24 pb-16 md:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-start text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter leading-tight max-w-4xl">
                {p.blendingHeading.split('<br />').length > 1 ? (
                  <>
                    {p.blendingHeading.split('<br />')[0]} <br /> {p.blendingHeading.split('<br />')[1]}
                  </>
                ) : p.blendingHeading}
              </h2>
              <p className="text-base md:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">
                {p.blendingDescription}
              </p>
              <div className="flex flex-col items-start gap-y-5 max-w-3xl pt-4">
                {p.blendingPoints.map((item, i) => {
                  const [title, desc] = item.includes(':') ? item.split(':') : [item, ''];
                  return (
                    <div key={i} className="flex items-start gap-4 w-full group">
                      <div className="w-4 h-4 rounded-full bg-[#10d056] mt-1.5 shrink-0 shadow-[0_0_10px_rgba(16,208,86,0.3)]"></div>
                      <span className="text-base md:text-lg text-white tracking-tight leading-relaxed">
                        <strong className="font-bold text-white">{title}{desc ? ':' : ''}</strong> {desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. MAIN IMAGE OVERLAP (Exact 50/50 Black & White Split) */}
        <section className="relative z-20">
          {/* Half Black, Half White Background */}
          <div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
            <div className="w-full h-1/2 bg-black"></div>
            <div className="w-full h-1/2 bg-white"></div>
          </div>

          <div className="w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 py-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-auto rounded-[12px] md:rounded-[24px] overflow-hidden shadow-2xl bg-white border-2 border-gray-100"
            >
              <img src={p.imageUrl} className="w-full h-auto object-cover" alt="Main Project Overview" />
            </motion.div>
          </div>
        </section>

        {/* 9. HANDLING GROWTH */}
        <section className="bg-white text-gray-900 relative z-20">
          <div className="max-w-7xl mx-auto space-y-16 pt-10 md:pt-16 pb-32 px-6 md:px-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl md:text-[48px] font-bold max-w-4xl uppercase tracking-tighter leading-tight"
            >
              {p.growthHeading}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-8"
              >
                {p.growthStats.map(stat => (
                  <motion.div key={stat} variants={fadeIn} className="flex items-center gap-6 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bluish flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(15,181,183,0.3)]">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                    </div>
                    <span className="text-lg md:text-xl font-bold group-hover:text-bluish transition-all tracking-tight">{stat}</span>
                  </motion.div>
                ))}
              </motion.div>
              <div className="rounded-[40px] md:rounded-[80px] bg-gray-100 p-2 md:p-5 h-[400px] md:h-[600px] shadow-inner overflow-hidden border-2 border-gray-200">
                <img src={p.gallery[4 % p.gallery.length] || p.imageUrl} className="w-full h-full object-cover rounded-[30px] md:rounded-[60px]" alt="Growth Visual" />
              </div>
            </div>
          </div>
        </section>

        {/* 9. ADAPTABLE DESIGN & AR FEATURES */}
        <section className="bg-white py-32 md:py-48 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6 mb-24 max-w-4xl"
            >
              <motion.h2 variants={fadeIn} className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tighter leading-tight uppercase">
                {p.arHeading.split('<br />').length > 1 ? (
                  <>
                    {p.arHeading.split('<br />')[0]} <br /> {p.arHeading.split('<br />')[1]}
                  </>
                ) : p.arHeading}
              </motion.h2>
              <motion.p variants={fadeIn} className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-3xl">
                {p.arDescription}
              </motion.p>
            </motion.div>

            {/* Staggered Mobile Mockups */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
              {/* Screen 1 - Left Staggered */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="w-full md:w-[30%] aspect-[9/18] rounded-[50px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border-[8px] border-black"
              >
                <img src={p.adaptableImage1} className="w-full h-full object-cover" alt="App Screen 1" />
              </motion.div>

              {/* Screen 2 - Center Main */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full md:w-[32%] aspect-[9/19] rounded-[55px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] border-[10px] border-black z-10"
              >
                <img src={p.adaptableImage2} className="w-full h-full object-cover" alt="App Screen 2" />
              </motion.div>

              {/* Screen 3 - Right Staggered */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full md:w-[30%] aspect-[9/18] rounded-[50px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border-[8px] border-black"
              >
                <img src={p.adaptableImage3} className="w-full h-full object-cover" alt="App Screen 3" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 10. STATIC BRAND NARRATIVE (Generalized) */}
        <section className="bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-10 max-w-5xl"
            >
              <motion.h2 variants={fadeIn} className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tighter leading-tight uppercase">
                Fostering digital excellence <br /> and innovation for {p.title}
              </motion.h2>
              <motion.div variants={stagger} className="space-y-8">
                <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                  {p.title} emerged as a trailblazing solution precisely developed to meet the evolving needs of its users. This innovative platform allows for enhanced engagement and streamlined management, giving users the freedom to connect, collaborate, and thrive within their specific industry.
                </motion.p>
                <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                  The design and development of this project by the RapidTechPro team involved a strategic blend of creativity and technical expertise. The result is a vibrant, interactive network that brings together diverse functionalities into a common platform that is not only visually stunning but also technically robust, ensuring a seamless experience for all daily operational needs.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* 11. FEATURE RESULTS IMAGE */}
        <section className="w-full relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <img
              src={p.gallery[5 % p.gallery.length] || p.imageUrl}
              className="w-full h-auto object-cover"
              alt="Product Showcase"
            />
          </motion.div>
        </section>

        {/* 12. PROJECT SHOWCASE (SCROLLING ROWS) */}
        {p.gallery?.length > 0 && (
          <section className="pt-24 md:pt-32 pb-0 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16 md:mb-24 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter uppercase mb-6">Project Showcase</h2>
              <p className="text-xl md:text-2xl text-gray-500 font-medium">A closer look at the project's visual journey and interface design.</p>
            </div>

            {/* Dark Navy Background Only Behind Images */}
            <div className="w-full flex flex-col gap-8 md:gap-12 relative py-16 md:py-24 bg-slate-900 px-4 md:px-0">
              {/* Row 1: Right to Left */}
              <div className="w-full relative overflow-hidden flex">
                <motion.div
                  className="flex gap-8 md:gap-12 whitespace-nowrap min-w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                >
                  {[...p.gallery, ...p.gallery, ...p.gallery, ...p.gallery, ...p.gallery].map((img, i) => (
                    <div key={`row1-${i}`} className="w-[450px] md:w-[700px] lg:w-[1000px] shrink-0 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl bg-white border border-slate-700/50">
                      <img src={img} className="w-full h-[200px] md:h-[300px] lg:h-[450px] object-cover" alt={`Showcase item row 1 - ${i}`} />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2: Left to Right */}
              <div className="w-full relative overflow-hidden flex">
                <motion.div
                  className="flex gap-8 md:gap-12 whitespace-nowrap min-w-max"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
                >
                  {/* Reversing the array to provide visual variation between rows */}
                  {[...p.gallery, ...p.gallery, ...p.gallery, ...p.gallery, ...p.gallery].reverse().map((img, i) => (
                    <div key={`row2-${i}`} className="w-[450px] md:w-[700px] lg:w-[1000px] shrink-0 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl bg-white border border-slate-700/50">
                      <img src={img} className="w-full h-[200px] md:h-[300px] lg:h-[450px] object-cover" alt={`Showcase item row 2 - ${i}`} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* 13. PROJECT RESULTS */}
        <section className="py-24 md:py-48 px-6 md:px-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
            {/* Sidebar Label */}
            <div className="flex-shrink-0">
              <span className="inline-block px-12 py-3 bg-bluish text-white text-xl font-bold uppercase tracking-widest rounded-full [writing-mode:vertical-lr] rotate-180">
                Results
              </span>
            </div>

            <div className="flex-grow space-y-16">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-4xl md:text-[48px] font-bold text-gray-900 tracking-tighter leading-tight uppercase"
              >
                {p.resultsHeading}
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12"
              >
                {p.resultsList.map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-center gap-6 group">
                    <div className="w-8 h-8 rounded-full bg-bluish flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>


      </div>
      <CallToAction />
    </UserLayout>
  );
}
