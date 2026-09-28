'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaHospital, FaGraduationCap, FaCogs, FaUtensils, FaCar, FaCashRegister, FaBuilding, FaShoppingCart, FaRobot } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';

const industryData = [
  {
    id: 'healthcare',
    name: 'Healthcare & Telemedicine',
    category: 'Healthcare & EdTech',
    icon: FaHospital,
    image: '/industries/healthcare.jpg',
    description: 'HIPAA-compliant telemedicine platforms, electronic health records (EHR/EMR), patient portals, and remote health monitoring systems engineered with zero-compromise security.',
    tags: ['HIPAA Certified', 'Telehealth', 'EHR/EMR', 'IoT Vitals'],
    stat: '99.99% Clinical Uptime',
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    category: 'Healthcare & EdTech',
    icon: FaGraduationCap,
    image: '/industries/education.jpg',
    description: 'Scalable learning management systems (LMS), virtual classroom portals, automated student information systems (SIS), and AI-driven assessment engines.',
    tags: ['Interactive LMS', 'Live Classrooms', 'Student SIS', 'AI Grading'],
    stat: '100K+ Active Students',
  },
  {
    id: 'erp',
    name: 'Enterprise ERP & Cloud Systems',
    category: 'Enterprise & ERP',
    icon: FaCogs,
    image: '/industries/erp.jpg',
    description: 'Bespoke ERP software unifying financial accounting, supply chain logistics, inventory automation, and multi-branch operations into centralized intelligence.',
    tags: ['Multi-Branch ERP', 'Real-time Supply Chain', 'Custom CRM', 'Cloud Sync'],
    stat: '45% Overhead Reduction',
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Hospitality Tech',
    category: 'Retail & POS',
    icon: FaUtensils,
    image: '/industries/restaurant.jpg',
    description: 'Modern food service platforms featuring touchless QR ordering, Kitchen Display Systems (KDS), delivery aggregator sync, and inventory cost control.',
    tags: ['Kitchen Display (KDS)', 'QR Self-Order', 'Delivery Sync', 'Inventory Control'],
    stat: 'Sub-3s Order Dispatch',
  },
  {
    id: 'automotive',
    name: 'Automotive & Fleet Telematics',
    category: 'PropTech & Fleet',
    icon: FaCar,
    image: '/industries/automotive.jpg',
    description: 'Connected fleet tracking, OBD-II vehicle telematics, predictive maintenance dispatching, and intelligent dealership inventory management suites.',
    tags: ['Fleet GPS Tracking', 'OBD-II Telematics', 'Predictive Diagnostics', 'Auto Dealer CRM'],
    stat: '15,000+ Vehicles Tracked',
  },
  {
    id: 'pos',
    name: 'Point of Sale (POS) Systems',
    category: 'Retail & POS',
    icon: FaCashRegister,
    image: '/industries/pos.jpg',
    description: 'High-speed cloud and offline POS systems engineered for retail and wholesale chains with instant barcode scanning, receipt printing, and payment gateways.',
    tags: ['Offline Resilience', 'Barcode Fast-Scan', 'Multi-Terminal', 'EMV Payments'],
    stat: 'Zero Downtime Architecture',
  },
  {
    id: 'realestate',
    name: 'Real Estate & PropTech',
    category: 'PropTech & Fleet',
    icon: FaBuilding,
    image: '/industries/realestate.jpg',
    description: 'High-converting real estate portals with MLS/IDX live synchronization, interactive 3D virtual tours, tenant billing, and automated broker CRM pipelines.',
    tags: ['MLS / IDX Sync', '3D Walkthroughs', 'Lease Automation', 'Broker CRM'],
    stat: '3.2x Lead Conversion',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Digital Marketplaces',
    category: 'Retail & POS',
    icon: FaShoppingCart,
    image: '/industries/ecommerce.jpg',
    description: 'Ultra-fast headless e-commerce storefronts, multi-vendor marketplaces, AI product recommendations, and frictionless checkout funnels built for global volume.',
    tags: ['Headless Storefront', 'Multi-Vendor', 'AI Recommendations', 'Global Gateways'],
    stat: 'Sub-second Load Times',
  },
  {
    id: 'automation',
    name: 'Custom Software & AI Automation',
    category: 'Enterprise & ERP',
    icon: FaRobot,
    image: '/industries/automation.jpg',
    description: 'Purpose-built enterprise workflows, robotic process automation (RPA), legacy database refactoring, and AI copilot integrations tailored to specialized business logic.',
    tags: ['AI Agent Copilots', 'RPA Bots', 'API Orchestration', 'Legacy Modernization'],
    stat: '80% Manual Work Automated',
  },
];

const categories = ['All Industries', 'Enterprise & ERP', 'Healthcare & EdTech', 'Retail & POS', 'PropTech & Fleet'];

// Single Industry Card with dedicated loading animation state
function IndustryCard({ item, index, onAction }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const IconComponent = item.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#0FB5B7]/40 transition-all duration-500 cursor-pointer"
      onClick={onAction}
    >
      {/* Visual Image with Loading Animation & Lazy Loading */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        {/* Shimmer Skeleton Placeholder while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Loading...</span>
          </div>
        )}

        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-108 ${
            imageLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
          }`}
        />

        {/* Gradient Scrim for crisp text over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
            <IconComponent className="text-[#0FB5B7] text-xs" />
            {item.category.split('&')[0].trim()}
          </span>

          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#0FB5B7] text-white shadow-md">
            {item.stat}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-bold text-black group-hover:text-[#0FB5B7] transition-colors duration-300 leading-tight tracking-tight">
            {item.name}
          </h3>

          <p className="mt-3 text-[14px] sm:text-[15px] font-medium text-black/60 leading-relaxed">
            {item.description}
          </p>

          {/* Solution Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-gray-100 text-[11px] font-semibold text-gray-700 group-hover:bg-[#0FB5B7]/10 group-hover:text-[#0FB5B7] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="mt-6 pt-5 border-t border-black/[0.06] flex items-center justify-between text-xs sm:text-[13px] font-bold text-black group-hover:text-[#0FB5B7] transition-colors">
          <span>Discuss Industry Solution</span>
          <span className="h-7 w-7 rounded-full bg-gray-100 group-hover:bg-[#0FB5B7] group-hover:text-white flex items-center justify-center transition-all duration-300">
            <FaArrowRight className="text-[10px] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('All Industries');

  const filteredData = activeCategory === 'All Industries'
    ? industryData
    : industryData.filter((item) => item.category === activeCategory);

  return (
    <section id="industries" className="bg-[#f8f9fa] text-black scroll-mt-20 py-16 md:py-24 lg:py-[130px] border-t border-black/[0.06]">
      <div className="site-full-grid">
        <div className="site-full-grid-inner">
          {/* Eyebrow */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/50">
              Industries We Serve
            </p>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#0FB5B7]/10 text-[#0FB5B7] border border-[#0FB5B7]/20">
              <FaCheckCircle className="text-[10px]" />
              Enterprise-Grade Compliance
            </span>
          </div>

          <div className="h-px w-full bg-black/10" />

          {/* Header */}
          <div className="mt-10 sm:mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <h2 className="max-w-[620px] text-[30px] sm:text-4xl lg:text-[48px] font-bold leading-[1.18] tracking-tight text-black">
                <span className="text-black/45">Industry Expertise </span>
                That Accelerates Time-to-Market
              </h2>
              <p className="mt-3 text-[15px] sm:text-[17px] font-medium leading-relaxed text-black/60 max-w-[560px]">
                Domain-specific architecture, certified compliance standards, and battle-tested engineering frameworks tailored to the operational demands of each sector.
              </p>
            </div>

            {/* Quick Metrics Capsule */}
            <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-2xl border border-black/10 shadow-xs shrink-0">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-black">120+</p>
                <p className="text-xs text-black/50 font-medium">Industry Deployments</p>
              </div>
              <div className="border-l border-black/10 pl-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0FB5B7]">100%</p>
                <p className="text-xs text-black/50 font-medium">Regulatory Compliant</p>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center mb-10 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex p-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-black text-white shadow-md'
                      : 'text-black/60 hover:text-black hover:bg-black/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredData.map((item, index) => (
                <IndustryCard
                  key={item.id}
                  item={item}
                  index={index}
                  onAction={() => dispatch(openPopup())}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
