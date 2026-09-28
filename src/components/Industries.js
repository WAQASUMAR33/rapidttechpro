'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';
import {
  FaArrowRight,
  FaCheckCircle,
  FaHospital,
  FaGraduationCap,
  FaCogs,
  FaUtensils,
  FaCar,
  FaCashRegister,
  FaBuilding,
  FaShoppingCart,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';

const industriesData = [
  {
    id: 'healthcare',
    name: 'Healthcare & Telemedicine',
    shortName: 'Healthcare',
    eyebrow: 'Clinical & Patient Systems',
    icon: FaHospital,
    image: '/industries/healthcare.jpg',
    headline: 'Telehealth, Clinical EHR & Patient Portals Built for Trust',
    description: 'We engineer HIPAA-compliant telemedicine platforms, HL7/FHIR-integrated EHR systems, and secure patient engagement portals. Designed for high clinical accuracy, sub-100ms video consults, and airtight patient data privacy.',
    capabilities: [
      'HIPAA & HITECH Compliant Architecture',
      'WebRTC Encrypted Video Consultations',
      'HL7 / FHIR Electronic Health Records',
      'Remote Patient IoT & Vitals Monitoring',
    ],
    metric: '99.99%',
    metricLabel: 'Clinical System Uptime',
    tags: ['HIPAA Certified', 'Telehealth', 'FHIR / EHR', 'IoT Vitals'],
  },
  {
    id: 'erp',
    name: 'Enterprise ERP & Cloud Platforms',
    shortName: 'Enterprise ERP',
    eyebrow: 'Multi-Branch Operations',
    icon: FaCogs,
    image: '/industries/erp.jpg',
    headline: 'Unified Resource Planning, Supply Chain & Financial Intelligence',
    description: 'Bespoke ERP ecosystems that bridge fragmented business departments. Centralize financial reporting, warehouse inventory tracking, automated procurement, and multi-entity consolidation into a single high-throughput cockpit.',
    capabilities: [
      'Multi-Branch Financial Consolidation',
      'Real-Time Warehouse & Barcode Tracking',
      'Automated Procurement & PO Workflows',
      'Role-Based Executive Analytics & BI',
    ],
    metric: '-45%',
    metricLabel: 'Operational Overhead',
    tags: ['Multi-Branch', 'Real-Time Inventory', 'Custom BI', 'Cloud ERP'],
  },
  {
    id: 'pos',
    name: 'Retail Point of Sale (POS)',
    shortName: 'Retail & POS',
    eyebrow: 'High-Volume Retail',
    icon: FaCashRegister,
    image: '/industries/pos.jpg',
    headline: 'Ultra-Fast Cloud & Offline POS Engineered for Zero Downtime',
    description: 'Engineered for retail chains, supermarkets, and wholesale distributors. Lightning-fast barcode checkout with offline SQLite caching, multi-terminal syncing, EMV payment gateways, and automated end-of-day reconciliation.',
    capabilities: [
      'Offline-First Local SQLite Resilience',
      'Instant Barcode & Thermal Receipt Sync',
      'Stripe, Clover & Custom EMV Payments',
      'Multi-Store Inventory Cross-Sync',
    ],
    metric: '0.00s',
    metricLabel: 'Offline Checkout Delay',
    tags: ['Offline Caching', 'Barcode Scanning', 'Multi-Terminal', 'EMV Gateways'],
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Hospitality Systems',
    shortName: 'Hospitality',
    eyebrow: 'Food & Beverage Tech',
    icon: FaUtensils,
    image: '/industries/restaurant.jpg',
    headline: 'Kitchen Display (KDS), QR Ordering & Aggregator Sync',
    description: 'Transform high-turnover restaurant operations. Direct touchless table QR ordering, automated kitchen station routing (KDS), recipe cost tracking, and two-way integration with UberEats, DoorDash, and Talabat.',
    capabilities: [
      'Smart Kitchen Display System (KDS)',
      'Touchless QR Dine-in & Tab Splitting',
      'Delivery Aggregator Webhook Sync',
      'Ingredient-Level Inventory Depletion',
    ],
    metric: 'Sub-3s',
    metricLabel: 'Order-to-Kitchen Routing',
    tags: ['KDS Routing', 'QR Self-Order', 'Delivery Sync', 'Recipe Costing'],
  },
  {
    id: 'automotive',
    name: 'Automotive & Fleet Telematics',
    shortName: 'Automotive',
    eyebrow: 'Connected Mobility & IoT',
    icon: FaCar,
    image: '/industries/automotive.jpg',
    headline: 'Real-Time Fleet GPS, OBD-II Telematics & Dealership CRM',
    description: 'Connected fleet management platforms tracking vehicle diagnostics, geofencing routes, driver behavior scoring, and predictive maintenance schedules for logistics fleets and automotive dealership groups.',
    capabilities: [
      'OBD-II Real-Time Engine Diagnostics',
      'Live GPS Geofencing & Route Optimization',
      'Driver Safety & Fuel Efficiency Scoring',
      'Dealership Lot Inventory Management',
    ],
    metric: '15,000+',
    metricLabel: 'Connected Fleet Vehicles',
    tags: ['Fleet GPS', 'OBD-II Telematics', 'Predictive Maintenance', 'Auto CRM'],
  },
  {
    id: 'realestate',
    name: 'Real Estate & PropTech',
    shortName: 'Real Estate',
    eyebrow: 'Commercial & Residential',
    icon: FaBuilding,
    image: '/industries/realestate.jpg',
    headline: 'MLS/IDX Live Sync, Interactive 3D Tours & Broker CRM',
    description: 'High-converting real estate portals with real-time MLS/IDX synchronization, interactive floorplans, automated tenant screening pipelines, digital lease signing, and commission management for top brokerages.',
    capabilities: [
      'Direct MLS / IDX Real-Time Data Feed',
      'Interactive 3D Virtual Walkthroughs',
      'Automated Tenant Screening & Leases',
      'Broker Lead Distribution Pipeline',
    ],
    metric: '3.2x',
    metricLabel: 'Lead-to-Tour Conversion',
    tags: ['MLS / IDX Sync', '3D Walkthroughs', 'Lease Automation', 'Broker CRM'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Digital Marketplaces',
    shortName: 'E-Commerce',
    eyebrow: 'Headless Commerce',
    icon: FaShoppingCart,
    image: '/industries/ecommerce.jpg',
    headline: 'Headless Storefronts, Multi-Vendor Marketplaces & AI Checkout',
    description: 'Engineered for high concurrent traffic and global order fulfillment. Headless Next.js storefronts with sub-second page loads, multi-vendor commission splits, AI product recommendations, and frictionless localized checkout.',
    capabilities: [
      'Sub-Second Next.js Headless Stores',
      'Multi-Vendor Marketplace Architecture',
      'AI Recommendation & Search Personalization',
      'Global Multi-Currency Tax & Shipping',
    ],
    metric: '< 600ms',
    metricLabel: 'Average Page Load Speed',
    tags: ['Headless Store', 'Multi-Vendor', 'AI Recommendations', 'Global Gateways'],
  },
  {
    id: 'education',
    name: 'Education & EdTech Platforms',
    shortName: 'Education',
    eyebrow: 'Colleges & Digital Learning',
    icon: FaGraduationCap,
    image: '/industries/education.jpg',
    headline: 'Scalable LMS, Interactive Live Classrooms & Student SIS',
    description: 'Modern educational technology platforms for universities, school networks, and corporate academies. Features interactive courseware, automated student grading, video proctoring, and comprehensive SIS record tracking.',
    capabilities: [
      'SCORM-Compliant Learning Management',
      'Low-Latency Virtual Classrooms',
      'Automated AI Grading & Proctoring',
      'Student Information Systems (SIS)',
    ],
    metric: '100K+',
    metricLabel: 'Active Student Users',
    tags: ['Interactive LMS', 'Live Classrooms', 'Student SIS', 'AI Proctoring'],
  },
  {
    id: 'automation',
    name: 'Custom Software & AI Automation',
    shortName: 'AI & Automation',
    eyebrow: 'Enterprise Workflows',
    icon: FaRobot,
    image: '/industries/automation.jpg',
    headline: 'Bespoke AI Agents, RPA Bots & Legacy System Modernization',
    description: 'Eliminate manual administrative bottlenecks with custom intelligent automation. We build proprietary AI copilot agents, automated document extraction pipelines, and microservices bridges that modernize legacy infrastructure.',
    capabilities: [
      'Autonomous LLM & Copilot Agent Sprints',
      'Robotic Process Automation (RPA)',
      'Legacy Monolith Microservice Migration',
      'Real-Time ETL & Custom API Gateways',
    ],
    metric: '80%',
    metricLabel: 'Reduction in Manual Work',
    tags: ['AI Agent Copilots', 'RPA Automation', 'API Gateways', 'Modernization'],
  },
];

// Single Industry Image Loader Component
function SpotlightImage({ src, alt, stat, metricLabel }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto lg:h-full w-full overflow-hidden rounded-3xl bg-[#14171d] border border-white/10 shadow-2xl">
      {/* Shimmer loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] animate-pulse flex items-center justify-center z-10">
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-[#0FB5B7] animate-ping" />
            Rendering Architecture...
          </div>
        </div>
      )}

      {/* Actual Image with Lazy Loading and Smooth Load Transition */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md'
        }`}
      />

      {/* Dark Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      {/* Floating Production Metric Badge */}
      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl">
          <div>
            <p className="text-xl sm:text-2xl font-black text-[#0FB5B7] tracking-tight leading-none">
              {stat}
            </p>
            <p className="text-[11px] font-semibold text-white/70 uppercase tracking-wider mt-1">
              {metricLabel}
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white/90 backdrop-blur-md border border-white/15">
          <FaShieldAlt className="text-[#0FB5B7] text-xs" />
          Certified Architecture
        </span>
      </div>
    </div>
  );
}

export default function Industries() {
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState(industriesData[0].id);

  const activeIndustry = industriesData.find((i) => i.id === activeId) || industriesData[0];
  const ActiveIcon = activeIndustry.icon;

  return (
    <section
      id="industries"
      className="bg-[#0b0d11] text-white relative overflow-hidden py-16 md:py-24 lg:py-[140px] border-t border-white/[0.08]"
      aria-label="Industries We Serve"
    >
      {/* Ambient Lighting Sheen */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#0FB5B7]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#0FB5B7]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="site-full-grid relative z-10">
        <div className="site-full-grid-inner">
          {/* Eyebrow & Live Standards Capsule */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/50">
              Industries We Serve
            </p>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-white/80 border border-white/10">
              <FaCheckCircle className="text-[#0FB5B7] text-[10px]" />
              Industry-Specific Compliance &amp; SLAs
            </span>
          </div>

          <div className="h-px w-full bg-white/15" />

          {/* Section Header */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14 mb-12 sm:mb-16">
            <div>
              <h2 className="text-[30px] sm:text-4xl lg:text-[48px] font-bold leading-[1.15] tracking-tight text-white">
                <span className="text-white/40">Domain Expertise </span>
                That Shortens The Learning Curve
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-left text-[16px] sm:text-[18px] font-medium leading-relaxed text-white/60">
                We pair deep regulatory compliance, industry protocols, and sector-specific operational workflows with scalable cloud engineering. No generic templates — every platform is purpose-built.
              </p>
              <div className="flex items-center gap-6 text-xs text-white/50 font-mono uppercase tracking-wider">
                <span>• 9 Specialized Sectors</span>
                <span>• 100% IP Ownership</span>
                <span>• 99.98% Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Top Interactive Tabs Bar (Cubix Style) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {industriesData.map((item) => {
              const isSelected = activeId === item.id;
              const TabIcon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`group relative flex items-center gap-2 px-4 py-3 rounded-2xl text-[13px] font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer border ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-lg shadow-white/10'
                      : 'bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <TabIcon className={`text-xs ${isSelected ? 'text-[#0FB5B7]' : 'text-white/40 group-hover:text-white'}`} />
                  <span>{item.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Cubix Studio Spotlight Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-[#232730] bg-[#12151b] p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch gap-8 lg:gap-14">
                {/* Visual Media Showcase with Skeleton Loading & Lazy Loading */}
                <div className="w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[460px]">
                  <SpotlightImage
                    src={activeIndustry.image}
                    alt={activeIndustry.name}
                    stat={activeIndustry.metric}
                    metricLabel={activeIndustry.metricLabel}
                  />
                </div>

                {/* Right Architecture & Capability Breakdown */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0FB5B7]/15 text-[#0FB5B7] border border-[#0FB5B7]/30">
                        <ActiveIcon className="text-xs" />
                        {activeIndustry.eyebrow}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.2]">
                      {activeIndustry.headline}
                    </h3>

                    {/* Narrative Description */}
                    <p className="mt-4 text-[15px] sm:text-[16px] text-white/65 leading-relaxed font-medium">
                      {activeIndustry.description}
                    </p>

                    {/* 2-Column Capability Checklist */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                        Delivered Engineering Capabilities
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {activeIndustry.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="h-5 w-5 rounded-full bg-[#0FB5B7]/15 flex items-center justify-center shrink-0 mt-0.5 border border-[#0FB5B7]/30">
                              <FaCheckCircle className="text-[#0FB5B7] text-[10px]" />
                            </span>
                            <span className="text-[13px] sm:text-[14px] text-white/85 font-medium leading-snug">
                              {cap}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology & Domain Tags */}
                    <div className="mt-7 flex flex-wrap gap-1.5">
                      {activeIndustry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-white/70 text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Action Footer */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => dispatch(openPopup())}
                      className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[44px] pr-6 text-[13px] border border-white/20 bg-transparent cursor-pointer"
                    >
                      <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[38px] bg-white" />
                      <span className="relative z-10 flex items-center gap-2.5">
                        <span className="flex shrink-0 items-center justify-center h-[38px] w-[38px]">
                          <FaArrowRight className="text-black text-xs -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                        </span>
                        <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-white group-hover:text-black whitespace-nowrap font-bold">
                          Discuss {activeIndustry.shortName} Project
                        </span>
                      </span>
                    </button>

                    <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                      <FaChartLine className="text-[#0FB5B7]" />
                      <span>Production Verified Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Quick-Access Industry Cards Grid */}
          <div className="mt-14 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                Explore All 9 Industry Domains
              </p>
              <span className="text-xs text-white/40">Click any sector to inspect architecture</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industriesData.map((item) => {
                const isSelected = activeId === item.id;
                const GridIcon = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveId(item.id);
                      const el = document.getElementById('industries');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`group rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                      isSelected
                        ? 'bg-[#181c24] border-[#0FB5B7] shadow-lg shadow-[#0FB5B7]/10'
                        : 'bg-[#13161c] border-white/10 hover:border-white/25 hover:bg-[#161a22]'
                    }`}
                  >
                    <div className="relative h-14 w-14 rounded-xl overflow-hidden shrink-0 bg-white/5 border border-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <GridIcon className={`text-xs ${isSelected ? 'text-[#0FB5B7]' : 'text-white/40'}`} />
                        <span className="text-[11px] font-mono text-white/40 uppercase">
                          {item.metric}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#0FB5B7] transition-colors truncate">
                        {item.name}
                      </h4>
                    </div>

                    <span className="h-7 w-7 rounded-full bg-white/[0.06] group-hover:bg-[#0FB5B7] text-white/60 group-hover:text-black flex items-center justify-center shrink-0 transition-colors">
                      <FaArrowRight className="text-[10px] -rotate-45 group-hover:rotate-0 transition-transform" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
