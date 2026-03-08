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
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Define scale transform at the top level to avoid hook violation
  const galleryScale = useTransform(scrollYProgress, [0.2, 0.4], [0.95, 1]);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'http://localhost:3001';
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
          // Fallback to list if specific fetch fails
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

    if (projectId) {
      fetchProject();
    }
  }, [projectId, apiBaseUrl, apiKey]);

  if (loading) {
    return (
      <UserLayout>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500 font-medium">Loading case study...</p>
          </motion.div>
        </div>
      </UserLayout>
    );
  }

  if (error || !project) {
    return (
      <UserLayout>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Project not found</h2>
          <p className="text-gray-600 mb-8 text-center max-w-md">We couldn't find the case study you're looking for. It might have been moved or deleted.</p>
          <Link href="/Work" className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Back to All Projects
          </Link>
        </div>
      </UserLayout>
    );
  }

  // ── Normalize field names from backend → frontend format ──
  // Backend uses: mainImage, shortDescription, client, categories[], technologies[], processSteps (JSON string)

  // Images are served from the backend origin (localhost:3001), not the frontend (localhost:3002).
  // Prefix any path that starts with /uploads/ with the API base URL.
  const resolveImage = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;           // already absolute
    if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`; // backend-hosted
    return path;                                         // already a local public asset
  };

  const rawImage = resolveImage(project.mainImage || project.imageUrl || project.image || project.projectIcon) || '/images/herosection.png';
  const rawDesc = project.shortDescription || project.description || project.blog || '';
  const rawCategory = project.categories?.length > 0
    ? (typeof project.categories[0] === 'string' ? project.categories[0] : project.categories[0]?.name)
    : (project.category || 'Tech Solution');

  // processSteps may be a JSON string from the DB
  let parsedProcessSteps = [
    { id: "01", title: "Discovery", desc: "Deep dive into user needs and project requirements." },
    { id: "02", title: "Strategy", desc: "Defining the roadmap and technical architecture." },
    { id: "03", title: "Design", desc: "Crafting intuitive user interfaces and experiences." },
    { id: "04", title: "Development", desc: "Building the core functionality with cutting-edge tech." },
    { id: "05", title: "Testing", desc: "Ensuring every detail is polished and bug-free." },
  ];
  if (project.processSteps) {
    try {
      const parsed = typeof project.processSteps === 'string'
        ? JSON.parse(project.processSteps)
        : project.processSteps;
      if (Array.isArray(parsed) && parsed.length > 0) parsedProcessSteps = parsed;
    } catch { }
  }

  // technologies may be an array of objects { id, name, icon }
  const rawTechnologies = project.technologies?.length > 0
    ? project.technologies.map(t => (typeof t === 'string' ? t : t?.name)).filter(Boolean)
    : ['Next.js', 'Tailwind CSS', 'React', 'Node.js'];

  // gallery from ProjectImage relation or fallback to mainImage (3 slots for Cubix-style layout)
  const bannerFallback = resolveImage(project.bannerImage) || rawImage;
  const rawGallery = project.images?.length > 0
    ? project.images.map(img => resolveImage(img.imageUrl || img.url)).filter(Boolean)
    : [rawImage, bannerFallback, rawImage];

  const p = {
    ...project,
    title: project.title || "Project",
    subTitle: project.shortDescription || project.description || "Innovation meets performance in every detail.",
    imageUrl: rawImage,
    category: rawCategory,
    clientName: project.client || project.clientName || 'Confidential',
    duration: project.duration || project.location || '6 Months',
    aboutHeading: "About the Project",
    aboutText: rawDesc || "A deep dive into this innovative solution tailored for excellence.",
    experienceHeading: "Experience the app and get from easy the process",
    challengeHeading: "Our Challenge",
    challengeText: project.challenge || project.challengeText || "Creating a solution that provides real-time performance while maintaining a seamless user experience across all devices.",
    processHeading: "The Process",
    processSteps: parsedProcessSteps,
    technologies: rawTechnologies,
    gallery: rawGallery,
  };

  return (
    <UserLayout>
      <div className="bg-white overflow-hidden" ref={targetRef}>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 md:px-16 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl z-10"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-semibold text-gray-800 mb-6 uppercase tracking-wider"
            >
              Case Study / {p.category || 'Portfolio'}
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] mb-8">
              {p.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
              {p.subTitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-6xl mt-12 aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img
              src={p.imageUrl}
              alt={p.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl -z-10 opacity-30" style={{ backgroundColor: '#0FB5B7' }} />
        </section>

        {/* About Section */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{p.aboutHeading}</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {p.aboutText}
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Client</p>
                <p className="text-lg font-bold text-gray-900">{p.clientName || 'Confidential'}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Industry</p>
                <p className="text-lg font-bold text-gray-900">{p.category || 'Tech Solution'}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Duration</p>
                <p className="text-lg font-bold text-gray-900">{p.duration || '6 Months'}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-50 rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden relative">
              {/* Abstract World Map placeholder */}
              <img src="/globe.svg" alt="Global Impact" className="w-full h-full opacity-10 grayscale absolute" />
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="w-32 h-32 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(15,181,183,0.1)' }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(15,181,183,0.2)' }}>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#0FB5B7', boxShadow: '0 0 20px rgba(15,181,183,0.6)' }} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="py-24 bg-gray-50 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  {p.experienceHeading}
                </h2>
                <p className="text-xl text-gray-600">
                  {p.subTitle}
                </p>
              </motion.div>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(15,181,183,0.1)', color: '#0FB5B7' }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0FB5B7'; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(15,181,183,0.1)'; e.currentTarget.style.color = '#0FB5B7'; }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Feature {i}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cubix-style portrait gallery */}
            <motion.div
              style={{ scale: galleryScale }}
              className="flex items-end justify-center gap-4 md:gap-6 px-4"
            >
              {p.gallery.slice(0, 3).map((img, idx) => {
                const isMiddle = idx === 1;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative overflow-hidden flex-1"
                    style={{
                      borderRadius: '28px',
                      boxShadow: '0 30px 80px -10px rgba(0,0,0,0.25)',
                      aspectRatio: '9/16',
                      maxWidth: isMiddle ? '340px' : '280px',
                      marginBottom: isMiddle ? '0px' : '40px',
                    }}
                  >
                    <img
                      src={img}
                      alt={`Screen ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* subtle gradient overlay at bottom */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{p.challengeHeading}</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {p.challengeText}
              </p>
              <div className="space-y-4">
                {['High Performance', 'User Centric Design', 'Scalable Architecture'].map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-bold text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative p-12"
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-full blur-3xl" style={{ backgroundColor: 'rgba(15,181,183,0.05)' }} />
              <img
                src={p.imageUrl}
                className="relative z-10 w-full h-auto rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] tilt-effect"
                alt="The Challenge"
              />
            </motion.div>
          </div>
        </section>

        {/* The Process Section */}
        <section className="py-24 bg-black text-white px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">{p.processHeading}</h2>
                <p className="text-xl text-gray-400">Our systematic approach to delivering excellence in every phase.</p>
              </div>
              <div className="hidden md:block">
                <Link href="/Work" className="inline-flex items-center space-x-2 text-white font-bold group">
                  <span>Back to all projects</span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {p.processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="block text-4xl font-black text-white/10 mb-6">{step.id}</span>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {(p.technologies || ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React', 'Node.js']).map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 transition-colors shadow-sm group-hover:bg-[#0FB5B7]/10">
                  <span className="text-2xl font-black text-gray-300 group-hover:text-[#0FB5B7]">
                    {typeof tech === 'string' ? tech.charAt(0) : (tech?.name?.charAt(0) || 'T')}
                  </span>
                </div>
                <p className="font-bold text-gray-600">{typeof tech === 'string' ? tech : tech.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Impact / CTA Card */}
        <section className="px-6 md:px-16 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #0FB5B7, #0a8e90)' }}
          >
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Level up your game with innovative technology</h2>
              <p className="text-xl mb-12 opacity-80" style={{ color: 'rgba(255,255,255,0.85)' }}>We're ready to help you build your next big idea. Let's work together to create something amazing.</p>
              <Link href="/ContactUs" className="px-10 py-5 bg-white rounded-full font-black text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl" style={{ color: '#0FB5B7' }}>
                Let's bring your vision to life
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
      <CallToAction />
    </UserLayout>
  );
}
