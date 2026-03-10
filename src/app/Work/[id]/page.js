'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import UserLayout from '../../UserLayout';
import CallToAction from '@/components/CallToAction';

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

  const cardsY = useTransform(processProgress, [0, 1], ["0%", "-78%"]);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  const fetchWithAuth = async (url) => {
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    };
    const response = await fetch(url, { headers });
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

  const rawImage = resolveImage(project.mainImage || project.imageUrl || project.image || project.projectIcon) || '/images/herosection.png';
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

  const rawGallery = project.images?.length > 0
    ? project.images.map(img => resolveImage(img.imageUrl || img.url)).filter(Boolean)
    : [rawImage, rawImage, rawImage, rawImage];

  const p = {
    ...project,
    title: project.title || "Project",
    subTitle: project.shortDescription || project.description || "Innovation meets performance in every detail.",
    imageUrl: rawImage,
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
    arHeading: project.arHeading || "Adaptable design and AR features",
    arDescription: project.arDescription || "Creating solutions that are versatile, accommodating various user preferences. Enhancing user interaction and engagement with innovative pet profiles, animations and AR filters.",
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
        <section className="pt-40 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-10">
            <div>
              {(project.logo || project.projectIcon) && (
                <img src={resolveImage(project.logo || project.projectIcon)} className="h-16 w-auto object-contain" alt="Logo" />
              )}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight max-w-5xl">
              {p.title}
            </h1>
            <div className="pt-4">
              <span className="px-8 py-3.5 border-2 border-gray-900 rounded-full text-lg font-black text-gray-900 uppercase">
                {p.category} for {p.clientName}
              </span>
            </div>
          </motion.div>
        </section>

        {/* 2. MAIN IMAGE SECTION (130vh) */}
        <section className="h-[130vh] w-full px-0 relative overflow-hidden">
          <img src={p.imageUrl} className="w-full h-full object-cover" alt="Main Banner" />
        </section>

        {/* 3. ABOUT CLIENT SECTION (100vh) */}
        <section className="h-screen w-full flex items-center px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-900/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full items-center text-gray-900 relative">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10 z-10">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">About the client</h2>
              <p className="text-xl md:text-2xl leading-relaxed font-black">
                {p.aboutText}
              </p>
              <div className="pt-10">
                <p className="text-lg font-black uppercase tracking-widest inline-block mr-4 opacity-50">Location:</p>
                <p className="text-2xl font-black inline-block">{p.location}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center relative">
              <img src="/globe.svg" alt="World Map" className="w-full h-auto opacity-30 grayscale invert" />
              <div className="absolute top-1/2 left-[60%] w-6 h-6 bg-bluish rounded-full animate-ping opacity-50" />
              <div className="absolute top-1/2 left-[60%] w-3 h-3 bg-bluish rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* 4. INNOVATION SECTION */}
        <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start text-gray-900">
          <div className="space-y-10">
            <h2 className="text-5xl font-black leading-tight uppercase tracking-tighter">Innovation {p.title}</h2>
            <p className="text-xl leading-relaxed font-black">
              {p.description || "We developed a comprehensive ecosystem that bridges the gap between complex backend data and a fluid, user-centric mobile experience."}
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-6 px-1 opacity-50">Tech Stack:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {p.technologies.slice(0, 4).map((tech, i) => (
                  <div key={i} className="flex items-center gap-4 px-8 py-5 bg-gray-50 rounded-full border-2 border-transparent hover:border-bluish transition-all shadow-sm">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      {tech.icon ? (
                        <img src={tech.icon} className="w-full h-full object-contain" alt={tech.name} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white rounded-lg font-black text-xl border border-gray-200">{tech.name.charAt(0)}</div>
                      )}
                    </div>
                    <span className="text-xl font-black tracking-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xs font-black uppercase tracking-widest mb-2 px-1 opacity-50">Duration:</p>
              <p className="text-2xl font-black px-1">{p.duration}</p>
            </div>
          </div>
        </section>

        {/* 5. OUR CHALLENGE (Text + 1 Screen Left, 2 Screens Right) */}
        <section className="py-20 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {/* Left Column: Text + 1st Phone */}
            <div className="space-y-16">
              <div className="max-w-md">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our challenge</h2>
                <p className="text-xl text-gray-900 leading-relaxed font-black opacity-80">
                  {p.challengeText}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[40px] md:rounded-[60px] overflow-hidden aspect-[9/18.5] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] md:border-[16px] border-black bg-black"
              >
                <img src={p.gallery[0] || p.imageUrl} className="w-full h-full object-cover" alt="Challenge Screen 1" />
              </motion.div>
            </div>

            {/* Right Column: 2nd and 3rd Phone Stacked */}
            <div className="space-y-10 md:space-y-20 md:pt-40">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-[40px] md:rounded-[60px] overflow-hidden aspect-[9/18.5] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] md:border-[16px] border-black bg-black"
              >
                <img src={p.gallery[1] || p.imageUrl} className="w-full h-full object-cover" alt="Challenge Screen 2" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-[40px] md:rounded-[60px] overflow-hidden aspect-[9/18.5] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] md:border-[16px] border-black bg-black"
              >
                <img src={p.gallery[2] || p.imageUrl} className="w-full h-full object-cover" alt="Challenge Screen 3" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. THE PROCESS (Sticky Heading + Scrolling Cards) */}
        <section className="px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 lg:gap-48 items-start relative py-20 md:py-40">
          {/* Left Column: Sticky Static Heading */}
          <div className="md:sticky md:top-40 w-full md:w-1/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tighter">
              The <br className="hidden md:block" /> process
            </h2>
          </div>

          {/* Right Column: Scrolling Cards */}
          <div className="w-full md:w-2/3 space-y-8 md:space-y-12">
            {p.processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#f2f2f2] p-8 md:p-14 rounded-[30px] md:rounded-[40px] border border-gray-200 group hover:shadow-xl transition-all">
                <div className="space-y-4">
                  <span className="text-4xl md:text-5xl font-black text-gray-900 leading-none">0{idx + 1}</span>
                  <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">{step.title}</h3>
                  <p className="text-lg md:text-xl text-gray-900 leading-relaxed font-medium opacity-70">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. BLENDING DESIGN & FUNCTIONALITY (Restored Black Area) */}
        <section className="bg-black pt-16 md:pt-24 pb-64 md:pb-[550px] relative overflow-visible">
          <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-start text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl">
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
                {p.blendingPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 w-full group">
                    <div className="w-6 h-6 rounded-full bg-[#10d056] flex items-center justify-center mt-1 shrink-0">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg text-white font-bold tracking-tight group-hover:text-[#10d056] transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. HANDLING GROWTH (With 50/50 Overlapping Image) */}
        <section className="bg-white text-gray-900 relative">
          {/* Centered Image Bridging the Split - sitting UNDER the points relative to Section 7 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-6 z-30">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-auto rounded-[40px] md:rounded-[80px] overflow-hidden"
            >
              <img src={p.gallery[1] || p.imageUrl} className="w-full h-auto object-cover" alt="Focus Visual" />
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto space-y-20 pt-64 md:pt-[600px] pb-32 px-6 md:px-16">
            <h2 className="text-5xl md:text-8xl font-black max-w-4xl uppercase tracking-tighter">{p.growthHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                {p.growthStats.map(stat => (
                  <div key={stat} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-bluish flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(15,181,183,0.3)]">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                    </div>
                    <span className="text-2xl font-black group-hover:text-bluish transition-all tracking-tight">{stat}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-[80px] bg-gray-100 p-5 h-[600px] shadow-inner overflow-hidden border-2 border-gray-200">
                <img src="/images/herosection.png" className="w-full h-full object-cover rounded-[60px]" alt="Growth Visual" />
              </div>
            </div>
          </div>
        </section>

        {/* 9. ADAPTABLE DESIGN & AR FEATURES */}
        <section className="bg-white py-32 md:py-48 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6 mb-24 max-w-4xl">
              <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight">
                {p.arHeading.split('<br />').length > 1 ? (
                  <>
                    {p.arHeading.split('<br />')[0]} <br /> {p.arHeading.split('<br />')[1]}
                  </>
                ) : p.arHeading}
              </h2>
              <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
                {p.arDescription}
              </p>
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
                <img src={p.gallery[2] || p.imageUrl} className="w-full h-full object-cover" alt="App Screen 1" />
              </motion.div>

              {/* Screen 2 - Center Main */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full md:w-[32%] aspect-[9/19] rounded-[55px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] border-[10px] border-black z-10"
              >
                <img src={p.gallery[3] || p.imageUrl} className="w-full h-full object-cover" alt="App Screen 2" />
              </motion.div>

              {/* Screen 3 - Right Staggered */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full md:w-[30%] aspect-[9/18] rounded-[50px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border-[8px] border-black"
              >
                <img src={p.gallery[4] || p.imageUrl} className="w-full h-full object-cover" alt="App Screen 3" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 10. STATIC BRAND NARRATIVE (Generalized) */}
        <section className="bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-10 max-w-5xl">
              <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight">
                Fostering digital excellence <br /> and innovation for {p.title}
              </h2>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                  {p.title} emerged as a trailblazing solution precisely developed to meet the evolving needs of its users. This innovative platform allows for enhanced engagement and streamlined management, giving users the freedom to connect, collaborate, and thrive within their specific industry.
                </p>
                <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                  The design and development of this project by the RapidTechPro team involved a strategic blend of creativity and technical expertise. The result is a vibrant, interactive network that brings together diverse functionalities into a common platform that is not only visually stunning but also technically robust, ensuring a seamless experience for all daily operational needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        {/* 11. FEATURE RESULTS IMAGE */}
        <section className="py-20 md:py-32 px-6 md:px-16 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[16/9] bg-[#4B42D1] rounded-[40px] md:rounded-[80px] overflow-hidden flex items-center justify-center p-12 md:p-24"
            >
              <img
                src={p.gallery[5] || p.imageUrl}
                className="w-full h-auto object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
                alt="Product Showcase"
              />
            </motion.div>
          </div>
        </section>

        {/* 12. PROJECT RESULTS */}
        <section className="py-24 md:py-48 px-6 md:px-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
            {/* Sidebar Label */}
            <div className="flex-shrink-0">
              <span className="inline-block px-12 py-3 bg-[#10d056] text-black text-xl font-black uppercase tracking-widest rounded-full [writing-mode:vertical-lr] rotate-180">
                Results
              </span>
            </div>

            <div className="flex-grow space-y-16">
              <h2 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-tight uppercase">
                {p.resultsHeading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {p.resultsList.map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-8 h-8 rounded-full bg-[#10d056] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-32 md:py-64 px-6 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <span className="text-bluish text-2xl font-black uppercase tracking-[0.3em]">
              Pick the Project
            </span>
            <h2 className="text-6xl md:text-[10rem] font-black text-gray-900 leading-[0.85] tracking-tighter uppercase italic">
              Let's bring your <br /> vision to life
            </h2>
            <div className="pt-20">
              <Link href="/ContactUs" className="inline-block px-24 py-10 bg-black text-white rounded-full font-black text-4xl uppercase tracking-tighter hover:bg-gray-800 transition-all hover:scale-105 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                Get Started
              </Link>
            </div>
          </div>
        </section>

      </div>
      <CallToAction />
    </UserLayout>
  );
}
