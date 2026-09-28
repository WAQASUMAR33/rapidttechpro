'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';
import { FaArrowRight, FaSearch, FaCheckCircle, FaLock, FaClock, FaHeadset } from 'react-icons/fa';

const faqCategories = ['All Questions', 'Architecture & Dev', 'Timeline & Pricing', 'Security & IP', 'Global Delivery'];

const faqData = [
  {
    id: 1,
    category: 'Architecture & Dev',
    question: 'What custom software engineering and digital product services does RapidTechPro provide?',
    answer: 'RapidTechPro delivers full-lifecycle software solutions covering custom web application development, native and cross-platform mobile apps (iOS & Android), enterprise ERP/CRM platforms, point-of-sale (POS) systems, UI/UX design, and AI workflow automation. Every architecture is tailored to handle high concurrency and mission-critical uptime.',
    highlights: ['Microservices & Serverless', 'High-Concurrency DBs', 'Scalable Cloud Infrastructure'],
  },
  {
    id: 2,
    category: 'Timeline & Pricing',
    question: 'How long does a typical software development lifecycle take from kickoff to launch?',
    answer: 'Timelines are determined by technical complexity and functional scope. A focused Minimum Viable Product (MVP) is typically delivered within 6 to 10 weeks. Comprehensive enterprise ERP or multi-platform ecosystems usually span 3 to 5 months. Following initial technical discovery, you receive a sprint roadmap with strict milestone deliverables.',
    highlights: ['Agile 2-Week Sprints', 'Transparent Milestones', 'Dedicated Project PM'],
  },
  {
    id: 3,
    category: 'Architecture & Dev',
    question: 'Do you develop high-performance mobile apps for both iOS and Android?',
    answer: 'Yes. We architect native and cross-platform mobile solutions using React Native, Flutter, Swift (iOS), and Kotlin (Android). All mobile products feature offline synchronization, biometric authentication, real-time push notifications, and background processing.',
    highlights: ['App Store & Play Store Approval', 'Offline-First Storage', 'Biometric Security'],
  },
  {
    id: 4,
    category: 'Security & IP',
    question: 'Who owns the intellectual property (IP), source code, and deployment infrastructure?',
    answer: 'You retain 100% full intellectual property rights and complete source code ownership. Prior to any discovery session, we execute mutual Non-Disclosure Agreements (NDAs). Upon milestone sign-off, all repository access, cloud credentials, Docker containers, and documentation are transferred directly to your organization.',
    highlights: ['100% Client Code Ownership', 'Strict Mutual NDA', 'OWASP Security Standards'],
  },
  {
    id: 5,
    category: 'Architecture & Dev',
    question: 'Can RapidTechPro engineer custom ERP, Restaurant Management, and POS systems?',
    answer: 'Absolutely. We design bespoke enterprise software including multi-branch ERP suites, restaurant automation with Kitchen Display Systems (KDS) and delivery aggregator sync, and retail Point of Sale (POS) software with real-time barcode scanning and offline resilience.',
    highlights: ['Multi-Branch Synchronization', 'Offline Hardware Support', 'Automated KDS Routing'],
  },
  {
    id: 6,
    category: 'Global Delivery',
    question: 'How do you coordinate with clients located across North America, the UK, and the GCC (UAE & KSA)?',
    answer: 'Our distributed engineering teams maintain dedicated overlapping working hours with North America, the UK, and Middle East time zones. We conduct daily Slack/Teams standups, weekly sprint video demos, and maintain real-time Jira/Linear tracking dashboards for total delivery transparency.',
    highlights: ['Overlapping Time Zones', 'Daily Standups', 'Live Jira / Linear Dashboards'],
  },
  {
    id: 7,
    category: 'Timeline & Pricing',
    question: 'What engagement models and pricing structures do you offer?',
    answer: 'We provide two primary engagement models: Fixed-Price Milestone Contracts (ideal for well-defined project scopes and MVPs) and Dedicated Engineering Squads / Time & Material (ideal for evolving product roadmaps and enterprise scaling). Both models guarantee zero hidden costs.',
    highlights: ['Fixed-Price Milestones', 'Dedicated Squad Staffing', 'Zero Hidden Fees'],
  },
  {
    id: 8,
    category: 'Security & IP',
    question: 'Do you offer post-launch maintenance, SLA monitoring, and infrastructure scaling?',
    answer: 'Yes. We provide continuous SLA-backed support packages including 24/7 uptime monitoring, proactive security patching, database optimization, cloud cost reduction, and continuous feature deployment to ensure zero disruption as your traffic surges.',
    highlights: ['24/7 Server Monitoring', 'Regular Security Audits', 'Guaranteed SLA Response'],
  },
];

export default function FAQSection() {
  const dispatch = useDispatch();
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [searchQuery, setSearchQuery] = useState('');

  // Structured Data Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory = selectedCategory === 'All Questions' || item.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="bg-[#f8f9fa] text-black scroll-mt-20 py-16 md:py-24 lg:py-[130px] border-t border-black/[0.06]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="site-full-grid">
        <div className="site-full-grid-inner">
          {/* Eyebrow */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/50">
              Frequently Asked Questions
            </p>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#0FB5B7]/10 text-[#0FB5B7] border border-[#0FB5B7]/20">
              <FaCheckCircle className="text-[10px]" />
              Clear &amp; Transparent Answers
            </span>
          </div>

          <div className="h-px w-full bg-black/10" />

          {/* Two-Column Grid */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16 xl:gap-20">
            {/* Left Sticky Hero Card */}
            <div className="lg:sticky lg:top-32 flex flex-col gap-6">
              <div>
                <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-bold leading-[1.15] tracking-tight text-black">
                  <span className="text-black/45">Direct Answers, </span>
                  <br />Before You Ask Twice.
                </h2>
                <p className="mt-3 text-[15px] sm:text-[17px] font-medium leading-relaxed text-black/60">
                  Explore how we structure development sprints, guarantee intellectual property rights, and collaborate across international markets.
                </p>
              </div>

              {/* Consultation Card */}
              <div className="rounded-3xl bg-white p-7 sm:p-8 border border-black/[0.08] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0FB5B7] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0FB5B7]">
                      Have a Unique Challenge?
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight leading-snug">
                    Speak directly with a Senior Technical Architect.
                  </h3>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed">
                    Skip the generic sales pitch. Get immediate feasibility, tech stack recommendations, and preliminary budget estimates.
                  </p>

                  {/* Trust Signals Checklist */}
                  <div className="mt-6 space-y-2.5 border-t border-black/[0.06] pt-5">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-black/70">
                      <FaLock className="text-[#0FB5B7] text-xs" />
                      <span>100% NDA Protection Prior to Discovery</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-black/70">
                      <FaClock className="text-[#0FB5B7] text-xs" />
                      <span>Average Response Time &lt; 30 Minutes</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-black/70">
                      <FaHeadset className="text-[#0FB5B7] text-xs" />
                      <span>Direct Engineering Lead Consultation</span>
                    </div>
                  </div>
                </div>

                {/* Cubix-style Pill Button */}
                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => dispatch(openPopup())}
                    className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[44px] pr-6 text-[13px] border border-black/15 bg-transparent cursor-pointer"
                  >
                    <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[38px] bg-black" />
                    <span className="relative z-10 flex items-center gap-2.5">
                      <span className="flex shrink-0 items-center justify-center h-[38px] w-[38px]">
                        <FaArrowRight className="text-white text-xs -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                      </span>
                      <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-black/90 group-hover:text-white whitespace-nowrap font-bold">
                        Schedule Free Tech Call
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Search + Filters + Accordion */}
            <div className="flex flex-col gap-6">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions by topic (e.g., NDA, pricing, mobile, ERP)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-white border border-black/[0.08] text-sm text-black placeholder-black/40 focus:outline-none focus:border-[#0FB5B7] focus:ring-1 focus:ring-[#0FB5B7] transition-all shadow-xs"
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 text-xs" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-black/40 hover:text-black font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {faqCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-black text-white shadow-sm'
                        : 'bg-white text-black/60 hover:text-black hover:bg-black/[0.04] border border-black/[0.08]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Accordion Items List */}
              <div className="flex flex-col gap-3">
                {filteredFaqs.length === 0 ? (
                  <div className="bg-white rounded-2xl p-8 text-center border border-black/[0.08]">
                    <p className="text-black/60 text-sm font-medium">
                      No matching questions found for &ldquo;{searchQuery}&rdquo;.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSearchQuery(''); setSelectedCategory('All Questions'); }}
                      className="mt-3 text-xs font-bold text-[#0FB5B7] underline"
                    >
                      Reset search filters
                    </button>
                  </div>
                ) : (
                  filteredFaqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={faq.id}
                        className={`rounded-2xl bg-white border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'border-[#0FB5B7]/40 shadow-md ring-1 ring-[#0FB5B7]/10'
                            : 'border-black/[0.08] hover:border-black/20 hover:shadow-xs'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? -1 : index)}
                          className="w-full cursor-pointer px-6 sm:px-7 py-5 sm:py-6 text-left flex items-start justify-between gap-4"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start gap-3.5">
                            <span className="font-mono text-xs font-bold text-black/35 mt-1 shrink-0">
                              0{faq.id}
                            </span>
                            <div>
                              <div className="mb-1">
                                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0FB5B7] bg-[#0FB5B7]/10 px-2 py-0.5 rounded">
                                  {faq.category}
                                </span>
                              </div>
                              <span className="text-[16px] sm:text-[18px] font-bold leading-snug tracking-tight text-black">
                                {faq.question}
                              </span>
                            </div>
                          </div>

                          {/* Plus/Minus Rotating Toggle */}
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                              isOpen ? 'bg-[#0FB5B7] text-white shadow-md' : 'bg-black text-white hover:bg-black/80'
                            }`}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`transition-transform duration-500 ease-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                            >
                              <path d="M6 1.5V10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                              <path d="M1.5 6H10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                          </span>
                        </button>

                        {/* Collapsible Answer */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 sm:px-7 pb-6 pt-1 border-t border-black/[0.04]">
                                <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-black/65">
                                  {faq.answer}
                                </p>

                                {/* Highlights Chips */}
                                {faq.highlights && (
                                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-black/[0.04]">
                                    {faq.highlights.map((item) => (
                                      <span
                                        key={item}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/[0.04] text-[11px] font-semibold text-black/70"
                                      >
                                        <FaCheckCircle className="text-[#0FB5B7] text-[9px]" />
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
