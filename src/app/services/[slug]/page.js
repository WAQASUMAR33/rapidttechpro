'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';
import UserLayout from '@/app/UserLayout';
import CallToAction from '@/components/CallToAction';
import { resolveImageUrl } from '@/utils/imageHelper';
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaLaptopCode,
  FaLayerGroup,
  FaSyncAlt,
  FaCogs,
  FaClock,
  FaUsers,
  FaChevronRight,
  FaLock,
} from 'react-icons/fa';

const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';
const headers = { 'x-api-key': apiKey };

// Helper to safely parse JSON or return original object
function tryParse(value) {
  if (!value) return null;
  if (typeof value === 'object') return value;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

// Default comprehensive data tailored for Web App Development
const DEFAULT_WEB_DEV_DATA = {
  title: 'Web App Development',
  heroSubtitle: 'Custom, high-performance web applications engineered for scale, ultra-low latency, and modern enterprise reliability.',
  heroImage: '/subpageshero/website.jpg',
  coreOfferings: [
    {
      icon: FaLaptopCode,
      title: 'Custom SaaS & Cloud Applications',
      description: 'End-to-end multi-tenant SaaS platforms featuring automated subscription billing, role-based access control (RBAC), and elastic cloud scalability.',
      tags: ['Multi-Tenancy', 'Stripe Billing', 'RBAC Security'],
    },
    {
      icon: FaLayerGroup,
      title: 'Enterprise Web Portals & ERPs',
      description: 'Centralized web applications that streamline internal operations, unifying multi-branch supply chains, accounting, and staff management.',
      tags: ['Workflow Automation', 'Real-Time Sync', 'Data Cockpit'],
    },
    {
      icon: FaRocket,
      title: 'Progressive Web Apps (PWA)',
      description: 'App-like speed and offline resilience directly in the web browser. Push notifications, hardware APIs, and zero app-store installation friction.',
      tags: ['Offline Caching', 'Push Notifications', 'Sub-second Load'],
    },
    {
      icon: FaServer,
      title: 'Microservices & API Gateways',
      description: 'High-throughput backend architectures built with Node.js, Laravel, or Python. Decoupled services communicating via high-speed REST & GraphQL.',
      tags: ['GraphQL / REST', 'Event-Driven', 'Docker Containers'],
    },
    {
      icon: FaSyncAlt,
      title: 'Legacy Codebase Modernization',
      description: 'Refactor slow monolithic architectures into modern Next.js/React applications with zero business downtime and significant cloud cost reduction.',
      tags: ['Code Refactoring', 'Cloud Migration', 'Zero Downtime'],
    },
    {
      icon: FaCloud,
      title: 'Cloud Infrastructure & DevOps CI/CD',
      description: 'Automated CI/CD pipelines, Dockerized deployments on AWS and Vercel, SSL management, automated testing, and 24/7 server health monitoring.',
      tags: ['AWS Cloud', 'Docker / K8s', 'Automated CI/CD'],
    },
  ],
  techStack: {
    'Frontend Ecosystem': [
      { name: 'Next.js 14', role: 'Server-Side Rendering & App Router', icon: '/tabsimages/nextjs.png' },
      { name: 'React 18', role: 'Component-Driven UI Engineering', icon: '/tabsimages/react.png' },
      { name: 'TypeScript', role: 'Type-Safe Architecture & Reliability', icon: null },
      { name: 'Tailwind CSS', role: 'Modern Responsive Design System', icon: '/tabsimages/tailwind.png' },
    ],
    'Backend Engineering': [
      { name: 'Laravel & PHP', role: 'Enterprise MVC & Rapid APIs', icon: '/tabsimages/laravel.png' },
      { name: 'Node.js', role: 'Non-Blocking High-Concurrency Engine', icon: '/tabsimages/node.png' },
      { name: 'Python & FastAPI', role: 'High-Speed Microservices & AI APIs', icon: null },
      { name: 'Express.js', role: 'Lightweight RESTful Framework', icon: null },
    ],
    'Databases & Caching': [
      { name: 'PostgreSQL', role: 'ACID-Compliant Relational Data', icon: null },
      { name: 'MySQL', role: 'Enterprise Structured Storage', icon: null },
      { name: 'MongoDB', role: 'Flexible High-Volume Document Store', icon: null },
      { name: 'Redis', role: 'Sub-Millisecond In-Memory Caching', icon: null },
    ],
    'DevOps & Cloud': [
      { name: 'AWS Cloud', role: 'Elastic Compute, S3 & RDS', icon: '/images/cloud.PNG' },
      { name: 'Docker', role: 'Containerized Deployment Pipeline', icon: null },
      { name: 'Vercel Edge', role: 'Global Edge Network & CDN', icon: null },
      { name: 'GitHub Actions', role: 'Automated Test & Deployment CI/CD', icon: null },
    ],
  },
  processSteps: [
    {
      step: '01',
      title: 'Architectural Discovery & Wireframing',
      description: 'We analyze your business objectives, map out database schemas, audit third-party APIs, and produce interactive low-fidelity user flow wireframes.',
    },
    {
      step: '02',
      title: 'UI/UX Design Systems & Clickable Prototype',
      description: 'Crafting clean, accessible Figma design systems tailored to your brand, refined through client feedback into a fully clickable interactive prototype.',
    },
    {
      step: '03',
      title: 'Agile Sprint Engineering & Code Reviews',
      description: 'Development sprints conducted every two weeks with strict peer code reviews, continuous automated linting, and daily Slack/Teams progress updates.',
    },
    {
      step: '04',
      title: 'Security Audits & QA Performance Testing',
      description: 'Comprehensive OWASP vulnerability scanning, cross-browser compatibility tests, automated regression runs, and Lighthouse speed optimization.',
    },
    {
      step: '05',
      title: 'Zero-Downtime Production Deployment',
      description: 'Seamless release to production via automated CI/CD pipelines, SSL configuration, database indexing, and real-time server monitoring setup.',
    },
    {
      step: '06',
      title: 'Post-Launch SLA & Continuous Scaling',
      description: 'Dedicated post-launch warranty, 24/7 uptime monitoring, proactive security updates, and agile scaling squads ready to deploy new feature requests.',
    },
  ],
  benefits: [
    {
      title: 'Sub-Second Page Load Speeds',
      description: 'Next.js server-side rendering and edge caching eliminate latency, driving higher user conversion and optimal SEO rankings.',
    },
    {
      title: '100% IP & Source Code Ownership',
      description: 'All GitHub repositories, deployment scripts, database schemas, and documentation are transferred directly to your organization.',
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Engineered with OWASP Top 10 protection, encrypted data at rest and in transit, and role-based access control (RBAC).',
    },
    {
      title: 'Infinite Cloud Scalability',
      description: 'Stateless container architecture ready to handle thousands of concurrent users without costly server overhauls.',
    },
  ],
  faq: [
    {
      question: 'How long does custom web application development take?',
      answer: 'A focused MVP typically takes 6 to 10 weeks, while complex enterprise platforms or multi-tenant SaaS products take 3 to 5 months. We deliver working software in transparent 2-week agile sprints.',
    },
    {
      question: 'Can you modernize or rebuild our existing legacy web application?',
      answer: 'Yes. We frequently migrate outdated PHP, monoliths, or slow legacy architectures into high-speed Next.js and microservices with zero downtime for your active users.',
    },
    {
      question: 'Who owns the intellectual property and source code?',
      answer: 'You own 100% of the intellectual property, source code, and deployment infrastructure. We sign a strict mutual NDA prior to project discovery.',
    },
    {
      question: 'What happens after our web application launches?',
      answer: 'We provide comprehensive post-launch warranty, SLA-backed maintenance packages, 24/7 uptime monitoring, and continuous feature expansion sprints.',
    },
  ],
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const initialTitle = slug ? slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : 'Web App Development';
  const [service, setService] = useState({ title: initialTitle, slug });
  const [loading, setLoading] = useState(false);
  const [activeTechTab, setActiveTechTab] = useState('Frontend Ecosystem');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    if (!slug) return;
    const fetchService = async () => {
      try {
        setLoading(true);
        const targetUrl = apiBaseUrl.includes('localhost')
          ? `/api/proxy/api/services/slug/${slug}`
          : `${apiBaseUrl}/api/services/slug/${slug}`;
        const res = await fetch(targetUrl, { headers });
        if (res.ok) {
          const data = await res.json();
          setService(data?.data || data);
        } else {
          // Fallback to default service data if API returns 404
          setService({ title: 'Web App Development', slug });
        }
      } catch (err) {
        setService({ title: 'Web App Development', slug });
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug]);

  // Merge API data with rich fallbacks so page is NEVER empty or broken
  const pageData = useMemo(() => {
    const raw = service || {};
    const parsedOfferings = tryParse(raw.coreOfferings);
    const parsedTech = tryParse(raw.techStack);
    const parsedProcess = tryParse(raw.processSteps);
    const parsedBenefits = tryParse(raw.benefits);
    const parsedFaq = tryParse(raw.faq);

    return {
      title: raw.title || DEFAULT_WEB_DEV_DATA.title,
      description: raw.description || DEFAULT_WEB_DEV_DATA.heroSubtitle,
      heroSubtitle: raw.heroSubtitle || DEFAULT_WEB_DEV_DATA.heroSubtitle,
      heroImage: resolveImageUrl(raw.heroImage || raw.image, DEFAULT_WEB_DEV_DATA.heroImage),
      coreOfferings: Array.isArray(parsedOfferings) && parsedOfferings.length > 0 ? parsedOfferings : DEFAULT_WEB_DEV_DATA.coreOfferings,
      techStack: parsedTech && Object.keys(parsedTech).length > 0 ? parsedTech : DEFAULT_WEB_DEV_DATA.techStack,
      processSteps: Array.isArray(parsedProcess) && parsedProcess.length > 0 ? parsedProcess : DEFAULT_WEB_DEV_DATA.processSteps,
      benefits: Array.isArray(parsedBenefits) && parsedBenefits.length > 0 ? parsedBenefits : DEFAULT_WEB_DEV_DATA.benefits,
      faq: Array.isArray(parsedFaq) && parsedFaq.length > 0 ? parsedFaq : DEFAULT_WEB_DEV_DATA.faq,
    };
  }, [service]);

  const techTabs = Object.keys(pageData.techStack || {});

  if (loading) {
    return (
      <UserLayout>
        <div className="flex justify-center items-center min-h-[70vh] bg-[#0B0F17]">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-[#0FB5B7]" />
            <p className="text-white/60 text-xs font-mono uppercase tracking-widest">Loading Service Blueprint...</p>
          </div>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="bg-white text-black min-h-screen">
        {/* =========================================================================
            1. HERO SECTION (Dark Luxury Aesthetic inspired by Cubix)
        ========================================================================= */}
        <section className="relative bg-[#0B0F17] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0FB5B7]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#0FB5B7]/10 rounded-full blur-[160px] pointer-events-none" />

          <div className="site-full-grid relative z-10">
            <div className="site-full-grid-inner">
              {/* Breadcrumb Navigation */}
              <div className="flex items-center gap-2 text-xs font-semibold text-white/50 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <FaChevronRight className="text-[9px] text-white/30" />
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <FaChevronRight className="text-[9px] text-white/30" />
                <span className="text-[#0FB5B7]">{pageData.title}</span>
              </div>

              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-wider text-white/90 mb-6">
                <span className="h-2 w-2 rounded-full bg-[#0FB5B7] animate-pulse" />
                Enterprise-Grade Engineering
              </div>

              {/* Main Two-Column Hero Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.08] tracking-tight text-white">
                    {pageData.title.split(' ')[0]}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                      {pageData.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h1>

                  <p className="mt-6 text-base sm:text-lg md:text-[19px] text-white/70 leading-relaxed font-medium max-w-xl">
                    {pageData.heroSubtitle}
                  </p>

                  {/* Trust Signals Capsule */}
                  <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-white/80">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
                      <FaCheckCircle className="text-[#0FB5B7] text-[11px]" />
                      100% Code &amp; IP Ownership
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
                      <FaCheckCircle className="text-[#0FB5B7] text-[11px]" />
                      2-Week Agile Sprints
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
                      <FaCheckCircle className="text-[#0FB5B7] text-[11px]" />
                      99.98% SLA Uptime
                    </span>
                  </div>

                  {/* Hero Action Buttons */}
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => dispatch(openPopup())}
                      className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[48px] pr-6 text-[14px] border border-white/20 bg-transparent cursor-pointer"
                    >
                      <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[42px] bg-white" />
                      <span className="relative z-10 flex items-center gap-3">
                        <span className="flex shrink-0 items-center justify-center h-[42px] w-[42px]">
                          <FaArrowRight className="text-black text-xs -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                        </span>
                        <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-white group-hover:text-black whitespace-nowrap font-bold">
                          Get Technical Consultation
                        </span>
                      </span>
                    </button>

                    <Link
                      href="/work"
                      className="px-6 py-3 rounded-full text-[14px] font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                    >
                      Explore Case Studies &rarr;
                    </Link>
                  </div>
                </div>

                {/* Hero Visual Mockup Window */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#141822] aspect-[16/11]">
                    <img
                      src={pageData.heroImage}
                      alt={pageData.title}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.src = '/subpageshero/website.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Floating Performance Pill */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10 bg-black/70 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Production Architecture</p>
                        <p className="text-sm font-bold text-white mt-0.5">Next.js 14 • Microservices • Cloud Ready</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0FB5B7] text-white">
                        Sub-second Load
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. SERVICES WE OFFER (Grid of High-Impact Architectural Capabilities)
        ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#f9fafb] border-t border-black/[0.06]">
          <div className="site-full-grid">
            <div className="site-full-grid-inner">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/50">
                  Core Engineering Capabilities
                </p>
                <span className="text-xs font-mono text-black/40">Full-Stack Solutions</span>
              </div>
              <div className="h-px w-full bg-black/10 mb-10" />

              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-black tracking-tight leading-tight max-w-2xl">
                  <span className="text-black/45">{pageData.title} </span>
                  Services We Deliver
                </h2>
                <p className="text-[16px] text-black/60 font-medium max-w-md">
                  From scalable greenfield SaaS platforms to high-throughput legacy modernization, we build software that turns technical complexity into business growth.
                </p>
              </div>

              {/* Offerings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {pageData.coreOfferings.map((item, index) => {
                  const IconComp = item.icon || FaLaptopCode;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="group bg-white rounded-3xl p-8 border border-black/[0.08] hover:border-[#0FB5B7] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-14 w-14 rounded-2xl bg-black/[0.03] group-hover:bg-[#0FB5B7]/10 flex items-center justify-center transition-all duration-300 border border-black/[0.06] mb-6">
                          <IconComp className="text-2xl text-black/70 group-hover:text-[#0FB5B7] transition-colors" />
                        </div>
                        <h3 className="text-xl sm:text-[22px] font-bold text-black group-hover:text-[#0FB5B7] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[15px] text-black/60 leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>

                      {item.tags && (
                        <div className="mt-6 pt-5 border-t border-black/[0.06] flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-black/[0.04] text-[11px] font-semibold text-black/70 group-hover:bg-[#0FB5B7]/10 group-hover:text-[#0FB5B7] transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHY CHOOSE RAPIDTECHPRO FOR THIS SERVICE (Architectural Advantages)
        ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#0B0D11] text-white border-t border-white/10">
          <div className="site-full-grid">
            <div className="site-full-grid-inner">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  The Engineering Advantage
                </p>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0FB5B7]/15 text-[#0FB5B7] border border-[#0FB5B7]/30">
                  Zero Technical Debt
                </span>
              </div>
              <div className="h-px w-full bg-white/15 mb-10" />

              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight">
                  <span className="text-white/40">Architected for Speed, </span>
                  Resilience &amp; Scale
                </h2>
                <p className="text-[16px] sm:text-[17px] text-white/65 font-medium leading-relaxed">
                  We don&apos;t just write code; we design reliable digital engines. Every application undergoes rigorous load testing, continuous security auditing, and automated CI/CD verification before hitting production.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pageData.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="p-7 rounded-3xl bg-[#13161c] border border-white/10 hover:border-[#0FB5B7]/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-[#0FB5B7] font-mono text-sm font-bold mb-5 border border-white/10">
                        0{i + 1}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                        {b.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed font-medium">
                        {b.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#0FB5B7] font-semibold">
                      <FaCheckCircle className="text-[10px]" />
                      <span>Guaranteed Milestone</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. TECHNOLOGY ECOSYSTEM TABS
        ========================================================================= */}
        {techTabs.length > 0 && (
          <section className="py-20 md:py-28 bg-white border-t border-black/[0.06]">
            <div className="site-full-grid">
              <div className="site-full-grid-inner">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/50">
                    Technology Ecosystem
                  </p>
                  <span className="text-xs font-mono text-black/40">Battle-Tested Stacks</span>
                </div>
                <div className="h-px w-full bg-black/10 mb-10" />

                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-black tracking-tight leading-tight">
                    <span className="text-black/40">Technologies We Build </span>
                    Your Application With
                  </h2>
                  <p className="mt-3 text-[16px] text-black/60 font-medium">
                    We select modern, battle-tested technologies that balance developer velocity with enterprise-level performance.
                  </p>
                </div>

                {/* Tabs Switcher */}
                <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <div className="inline-flex p-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] shadow-xs">
                    {techTabs.map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTechTab(tab)}
                        className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                          activeTechTab === tab
                            ? 'bg-black text-white shadow-md'
                            : 'text-black/60 hover:text-black hover:bg-black/[0.04]'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tech Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(pageData.techStack[activeTechTab] || []).map((tech, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-3xl bg-[#f8f9fa] border border-black/[0.06] hover:border-[#0FB5B7] hover:shadow-xl transition-all duration-300 flex items-center gap-4 group"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center shrink-0 p-2 shadow-xs group-hover:scale-108 transition-transform">
                        {tech.icon ? (
                          <img src={tech.icon} alt={tech.name} className="h-full w-full object-contain" />
                        ) : (
                          <FaCode className="text-xl text-[#0FB5B7]" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-[16px] font-bold text-black group-hover:text-[#0FB5B7] transition-colors leading-tight">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-black/55 font-medium mt-1 leading-snug">
                          {tech.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            5. SPRINT-BASED AGILE PROCESS
        ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#f8f9fa] border-t border-black/[0.06]">
          <div className="site-full-grid">
            <div className="site-full-grid-inner">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/50">
                  Agile Sprint Delivery
                </p>
                <span className="text-xs font-mono text-black/40">From Concept to Production</span>
              </div>
              <div className="h-px w-full bg-black/10 mb-10" />

              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-black tracking-tight leading-tight max-w-2xl">
                  <span className="text-black/45">Our Transparent </span>
                  Development Process
                </h2>
                <p className="text-[16px] text-black/60 font-medium max-w-md">
                  Predictable delivery cadences with bi-weekly sprint demos and live progress tracking. You always know what is being built and when it ships.
                </p>
              </div>

              {/* Process Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {pageData.processSteps.map((step, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-white border border-black/[0.08] hover:border-black/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-black text-[#0FB5B7] font-mono">
                          {step.step || `0${i + 1}`}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 px-2.5 py-1 bg-black/[0.04] rounded-md">
                          Phase 0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-black leading-snug mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-black/60 font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. SERVICE FREQUENTLY ASKED QUESTIONS
        ========================================================================= */}
        {pageData.faq && pageData.faq.length > 0 && (
          <section className="py-20 md:py-28 bg-white border-t border-black/[0.06]">
            <div className="site-full-grid">
              <div className="site-full-grid-inner max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/50 mb-3">
                    Got Questions?
                  </p>
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-black tracking-tight leading-tight">
                    <span className="text-black/40">Frequently Asked </span>Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {pageData.faq.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'border-[#0FB5B7]/40 shadow-sm bg-gray-50/50'
                            : 'border-black/[0.08] hover:border-black/20 bg-white'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                          className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <span className="text-[16px] sm:text-[18px] font-bold text-black">
                            {item.question}
                          </span>
                          <span
                            className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                              isOpen ? 'bg-[#0FB5B7] text-white rotate-45' : 'bg-black text-white'
                            }`}
                          >
                            +
                          </span>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 sm:px-8 pb-6 pt-1 text-[15px] font-medium text-black/65 leading-relaxed border-t border-black/[0.04]">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            7. CALL TO ACTION (Consultation Booking)
        ========================================================================= */}
        <CallToAction />
      </div>
    </UserLayout>
  );
}
