'use client';
import React, { useState, useMemo } from 'react';
import UserLayout from '../UserLayout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaClock, FaCalendarAlt, FaUserTie, FaArrowRight, FaTimes, FaTag, FaBookmark, FaShareAlt, FaCheckCircle } from 'react-icons/fa';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Resilient Microservices with Next.js Edge and Kubernetes',
    slug: 'resilient-microservices-nextjs-kubernetes',
    category: 'Web & Cloud',
    featured: true,
    readTime: '6 min read',
    publishedDate: 'August 18, 2026',
    author: {
      name: 'Muhammad Waqas Umar',
      role: 'CEO & Lead Architect',
      image: '/team/waqas.png',
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    summary: 'Discover architectural patterns for decoupling heavy monolithic workloads into lightning-fast edge handlers and autoscaling container clusters.',
    content: `
### Modern Cloud Architecture at Scale

Modern enterprise applications demand sub-second latency, 99.99% availability, and frictionless developer velocity. Decoupling monolithic legacy codebases into event-driven microservices deployed across edge nodes provides the speed and resilience high-growth companies need.

#### 1. The Power of Edge Compute
By moving request routing, authentication verification, and cached data transformation to the CDN edge (such as Vercel Edge Network or Cloudflare Workers), cold starts are reduced to under 15ms globally.

#### 2. Kubernetes Orchestration & Auto-Scaling
Behind the edge layer, containerized background services run within private Kubernetes clusters. Horizontal Pod Autoscalers (HPA) continuously monitor CPU, memory, and message queue lengths to provision resources on demand during traffic spikes.

#### 3. Real-World Results
Implementing this architecture for our enterprise clients reduced average TTFB (Time to First Byte) by 78% and eliminated service outages during peak seasonal traffic events.

> *"Architectural simplicity at the edge paired with rock-solid autoscaling in the core delivers unmatched user experience."*
    `,
    tags: ['Next.js', 'Kubernetes', 'Microservices', 'Cloud Architecture'],
  },
  {
    id: 2,
    title: 'Harnessing Agentic AI for Enterprise Workflow Automation in 2026',
    slug: 'agentic-ai-enterprise-workflow-automation',
    category: 'AI & Machine Learning',
    featured: false,
    readTime: '5 min read',
    publishedDate: 'August 14, 2026',
    author: {
      name: 'Hannan Khan',
      role: 'Backend & AI Engineer',
      image: '/team/hannan.png',
    },
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
    summary: 'How autonomous LLM agents are transforming repetitive CRM operations, invoice reconciliation, and customer support with human-in-the-loop safeguards.',
    content: `
### The Evolution from Simple Chatbots to Autonomous Agents

Artificial Intelligence has moved far beyond prompt-and-response interfaces. Today's enterprise systems utilize multi-agent workflows that can perceive, plan, execute API actions, and verify their own results.

#### Key Applications in Modern Businesses:
- **Intelligent Document Processing:** Parsing unstructured PDFs, supplier invoices, and contracts directly into ERP systems with 99.4% precision.
- **Proactive Customer Routing:** Classifying client intents and generating dynamic personalized responses before escalating complex cases to human specialists.
- **Continuous Security Auditing:** Scanning codebase pull requests and cloud permissions automatically for compliance anomalies.

#### Safety & Human-in-the-Loop Governance
Implementing strict role-based access control (RBAC) and explicit approval gates ensures autonomous agents operate safely within regulatory parameters.
    `,
    tags: ['Artificial Intelligence', 'LLM Agents', 'Automation', 'Enterprise'],
  },
  {
    id: 3,
    title: 'Cross-Platform Mobile Mastery: Why Flutter Continues to Dominate',
    slug: 'cross-platform-mobile-mastery-flutter',
    category: 'Mobile Development',
    featured: false,
    readTime: '4 min read',
    publishedDate: 'August 10, 2026',
    author: {
      name: 'Ali Iftikhar',
      role: 'Senior Full Stack Developer',
      image: '/team/ali.png',
    },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    summary: 'A deep dive into Flutter’s Impeller rendering engine, state management with Bloc, and how single-codebase apps achieve native 120Hz performance.',
    content: `
### Native Performance with a Single Unified Codebase

For businesses launching mobile applications across both iOS and Android, choosing between native Swift/Kotlin and cross-platform frameworks has always involved trade-offs. Flutter’s modern engine eliminates those compromises.

#### Why We Choose Flutter for High-Performance Mobile Apps:
1. **Impeller Graphics Engine:** Complete elimination of shader compilation jank, providing silky smooth 120Hz animations.
2. **Predictable State Architecture:** Using Bloc and Riverpod patterns ensures maintainable state flow and high test coverage.
3. **Rapid Time-to-Market:** Shared UI code cuts engineering time by up to 40% without sacrificing platform-native fidelity.
    `,
    tags: ['Flutter', 'Mobile Apps', 'iOS', 'Android', 'Dart'],
  },
  {
    id: 4,
    title: 'Design Systems That Scale: Bridging the Gap Between Figma and React',
    slug: 'design-systems-that-scale-figma-react',
    category: 'UI/UX Design',
    featured: false,
    readTime: '5 min read',
    publishedDate: 'August 06, 2026',
    author: {
      name: 'Usama Aslam',
      role: 'UI/UX Designer',
      image: '/team/usama.png',
    },
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
    summary: 'Constructing robust design token pipelines that automatically sync typography, spacing, and color palettes from Figma files directly into Tailwind CSS code.',
    content: `
### Creating Unified Brand Experiences Across All Digital Touchpoints

A design system is not just a UI kit; it is a shared language between product designers, software engineers, and stakeholders.

#### Essential Pillars of a Scalable Design System:
- **Design Tokens as Single Source of Truth:** Automated export pipelines transforming Figma variable modes into typed JSON tokens and Tailwind utility classes.
- **Component Componentization:** Building modular, accessible primitives with zero runtime layout shifts.
- **Accessibility by Default:** Ensuring WCAG 2.1 AA compliance with high contrast ratios, semantic HTML landmarks, and keyboard navigation.
    `,
    tags: ['UI/UX', 'Figma', 'Design Systems', 'Tailwind CSS'],
  },
  {
    id: 5,
    title: 'High-Throughput E-Commerce: Handling 50,000 Concurrent Checkouts',
    slug: 'high-throughput-ecommerce-concurrency',
    category: 'Enterprise Software',
    featured: false,
    readTime: '7 min read',
    publishedDate: 'July 30, 2026',
    author: {
      name: 'Kashif Rasheed',
      role: 'Co-founder & Sales Manager',
      image: '/team/kashif.jpg',
    },
    image: 'https://images.unsplash.com/photo-1556742049-0a67e5572263?w=800&auto=format&fit=crop&q=80',
    summary: 'Lessons learned building high-velocity e-commerce and point-of-sale architectures with optimistic inventory locks, Redis queues, and Stripe integration.',
    content: `
### Engineering for High-Consequence Flash Sales & Peak Seasons

When high-volume retail brands launch limited-edition drops or peak holiday promotions, database deadlocks and slow payment gateways can cost millions in lost revenue.

#### The Blueprint for Zero-Downtime E-Commerce:
1. **Optimistic Locking & Redis Sharding:** Managing high-speed cart reservations in memory to prevent overselling while keeping database write contention low.
2. **Asynchronous Webhook Processing:** Decoupling payment authorization from order fulfillment pipelines through robust idempotency keys.
3. **Omnichannel POS Synchronization:** Bridging physical retail counters and web store inventory in real-time with sub-second delta updates.
    `,
    tags: ['E-Commerce', 'POS Systems', 'Database Locking', 'Stripe', 'Redis'],
  },
  {
    id: 6,
    title: 'Zero-Trust Cloud Security: Best Practices for SaaS Startups',
    slug: 'zero-trust-cloud-security-saas',
    category: 'DevOps & Security',
    featured: false,
    readTime: '6 min read',
    publishedDate: 'July 24, 2026',
    author: {
      name: 'Muhammad Waqas Umar',
      role: 'CEO & Lead Architect',
      image: '/team/waqas.png',
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    summary: 'Essential guidelines for implementing least-privilege IAM roles, automated secret rotation, and end-to-end telemetry for modern web applications.',
    content: `
### Never Trust, Always Verify: Securing Cloud Environments

In modern cloud-native architectures, traditional perimeter security is no longer sufficient. Every request, internal microservice call, and database query must be authenticated and authorized.

#### Core Principles of Zero-Trust Engineering:
- **Ephemeral Identity & Short-Lived Tokens:** Replacing static API keys with dynamic OIDC identity federation and automated secret vaults.
- **Network Micro-Segmentation:** Isolating sensitive customer database subnets behind strict security groups and mutual TLS (mTLS).
- **Automated Continuous Threat Monitoring:** Centralized logging and AI-driven anomaly detection alerting infrastructure engineers in real time.
    `,
    tags: ['Cloud Security', 'Zero Trust', 'DevOps', 'Cybersecurity', 'AWS'],
  },
];

const CATEGORIES = [
  'All',
  'Web & Cloud',
  'AI & Machine Learning',
  'Mobile Development',
  'UI/UX Design',
  'Enterprise Software',
  'DevOps & Security',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query)) ||
        post.author.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <UserLayout>
      <div className="bg-[#0a1628] text-white min-h-screen pt-28 pb-24">
        {/* Top Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 px-6 md:px-12 lg:px-24">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#0FB5B7]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0FB5B7] bg-[#0FB5B7]/15 border border-[#0FB5B7]/30 mb-5">
              Insights & Thought Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15]">
              Engineering, AI & <span className="text-[#0FB5B7]">Technology Trends</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Deep dives, architectural blueprints, and industry insights from the software engineers, designers, and strategists at RapidTechPro.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative flex items-center">
                <FaSearch className="absolute left-5 text-gray-400 text-lg" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by topic, framework, keyword, or author..."
                  className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-sm md:text-base outline-none focus:border-[#0FB5B7] focus:bg-white/15 transition-all shadow-xl backdrop-blur-md"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 p-2 text-gray-400 hover:text-white"
                    aria-label="Clear search"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="px-6 md:px-12 lg:px-24 mb-12">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-[#0FB5B7] text-white border-[#0FB5B7] shadow-lg shadow-[#0FB5B7]/25 scale-105'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post (shown if no specific search and "All" or matching category) */}
        {!searchQuery && (selectedCategory === 'All' || selectedCategory === featuredPost.category) && (
          <section className="px-6 md:px-12 lg:px-24 mb-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#0FB5B7]/50 transition-all duration-500 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 cursor-pointer"
                onClick={() => setActiveArticle(featuredPost)}
              >
                <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
                  <img                     src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent lg:hidden" />
                  <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-black bg-[#0FB5B7] shadow-lg">
                    Featured Insight
                  </span>
                </div>

                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-semibold">
                      <span className="text-[#0FB5B7] font-bold">{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><FaCalendarAlt className="text-[10px]" /> {featuredPost.publishedDate}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><FaClock className="text-[10px]" /> {featuredPost.readTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#0FB5B7] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                      {featuredPost.summary}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img                         src={featuredPost.author.image}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full border-2 border-[#0FB5B7] object-cover"
                        onError={(e) => { e.currentTarget.src = '/team/waqas.png'; }}
                      />
                      <div>
                        <p className="text-sm font-bold text-white">{featuredPost.author.name}</p>
                        <p className="text-xs text-gray-400">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0FB5B7] group-hover:translate-x-1 transition-transform">
                      Read Article <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Main Blog Grid */}
        <section className="px-6 md:px-12 lg:px-24 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Insights`}
              </h2>
              <span className="text-sm text-gray-400 font-semibold">
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="p-16 rounded-3xl bg-white/5 border border-white/10 text-center">
                <p className="text-xl font-bold text-white mb-2">No articles found</p>
                <p className="text-gray-400 text-sm mb-6">
                  We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try exploring other topics.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="px-6 py-2.5 rounded-full bg-[#0FB5B7] text-white font-bold text-sm hover:bg-[#0FB5B7]/80 transition"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setActiveArticle(post)}
                    className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#0FB5B7]/40 transition-all duration-300 cursor-pointer shadow-xl"
                  >
                    <div>
                      {/* Thumbnail */}
                      <div className="relative h-52 w-full overflow-hidden bg-gray-900">
                        <img                           src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         loading="lazy" />
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-black bg-[#0FB5B7] shadow-md">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-semibold">
                          <span className="flex items-center gap-1"><FaCalendarAlt className="text-[10px]" /> {post.publishedDate}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><FaClock className="text-[10px]" /> {post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-[#0FB5B7] transition-colors leading-snug mb-3 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-4">
                          {post.summary}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-md text-[10px] font-semibold text-gray-300 bg-white/5 border border-white/5">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Author Footer */}
                    <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img                           src={post.author.image}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full border border-[#0FB5B7]/50 object-cover"
                          onError={(e) => { e.currentTarget.src = '/team/waqas.png'; }}
                        />
                        <div>
                          <p className="text-xs font-bold text-white">{post.author.name}</p>
                          <p className="text-[10px] text-gray-400">{post.author.role}</p>
                        </div>
                      </div>

                      <span className="text-[#0FB5B7] text-xs font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read <FaArrowRight className="text-[10px]" />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription Banner */}
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto rounded-3xl p-8 md:p-14 bg-gradient-to-r from-[#0d2235] via-[#0a1628] to-[#0d2235] border border-[#0FB5B7]/30 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0FB5B7]/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Stay Ahead in Software Engineering
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-8">
              Join 5,000+ technology leaders and founders receiving our monthly architecture breakdowns, AI strategies, and case studies.
            </p>

            {newsletterSuccess ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0FB5B7]/20 border border-[#0FB5B7] text-[#0FB5B7] font-bold text-sm">
                <FaCheckCircle className="text-lg" /> Thank you for subscribing to RapidTechPro Insights!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="flex-grow px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm outline-none focus:border-[#0FB5B7] transition"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#0FB5B7] text-white font-bold text-sm hover:bg-[#0FB5B7]/80 transition shadow-lg shadow-[#0FB5B7]/25 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Detailed Article Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d2235] border border-white/15 text-white shadow-2xl p-6 sm:p-10 md:p-12 my-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveArticle(null)}
                  className="sticky top-0 float-right z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition mb-4 ml-4"
                  aria-label="Close article modal"
                >
                  <FaTimes className="text-base" />
                </button>

                {/* Article Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4 font-semibold">
                    <span className="px-3 py-1 rounded-full bg-[#0FB5B7] text-black font-black uppercase text-[10px]">
                      {activeArticle.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {activeArticle.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><FaClock /> {activeArticle.readTime}</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                    {activeArticle.title}
                  </h1>

                  {/* Author Bar */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <img                       src={activeArticle.author.image}
                      alt={activeArticle.author.name}
                      className="w-12 h-12 rounded-full border-2 border-[#0FB5B7] object-cover"
                      onError={(e) => { e.currentTarget.src = '/team/waqas.png'; }}
                    />
                    <div>
                      <h4 className="font-bold text-white text-base">{activeArticle.author.name}</h4>
                      <p className="text-xs text-gray-400">{activeArticle.author.role} at RapidTechPro</p>
                    </div>
                  </div>
                </div>

                {/* Cover Image */}
                <div className="rounded-2xl overflow-hidden mb-8 max-h-[400px]">
                  <img                     src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                   loading="lazy" />
                </div>

                {/* Article Body */}
                <div className="text-gray-200 leading-relaxed space-y-6 text-base sm:text-lg border-b border-white/10 pb-10">
                  <p className="text-xl text-[#0FB5B7] font-medium leading-relaxed italic border-l-4 border-[#0FB5B7] pl-4">
                    {activeArticle.summary}
                  </p>

                  <div className="space-y-4 whitespace-pre-line font-normal text-gray-300">
                    {activeArticle.content}
                  </div>

                  {/* Tags */}
                  <div className="pt-6 flex flex-wrap gap-2">
                    {activeArticle.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg text-xs font-bold text-[#0FB5B7] bg-[#0FB5B7]/10 border border-[#0FB5B7]/30 flex items-center gap-1">
                        <FaTag className="text-[10px]" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Footer CTA */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#0FB5B7]/20 to-transparent border border-[#0FB5B7]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Have questions about this architecture?</h3>
                    <p className="text-xs text-gray-300">Schedule a direct technical consultation with our engineering team.</p>
                  </div>
                  <Link
                    href="/help"
                    className="px-6 py-3 rounded-xl bg-[#0FB5B7] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0FB5B7]/80 transition whitespace-nowrap shadow-lg shadow-[#0FB5B7]/30"
                  >
                    Talk to an Expert →
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </UserLayout>
  );
}