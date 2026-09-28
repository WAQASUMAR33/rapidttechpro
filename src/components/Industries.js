'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const industryData = [
  {
    name: 'Healthcare & Telemedicine',
    description: 'HIPAA-compliant medical software, EHR/EMR portals, remote patient monitoring, and telemedicine apps that streamline clinical workflows and elevate patient care standards.',
  },
  {
    name: 'Education (Colleges & Schools)',
    description: 'Scalable EdTech platforms, automated school management systems (SMS), interactive LMS, and digital examination portals built for modern academic institutions.',
  },
  {
    name: 'Enterprise ERP Systems',
    description: 'Custom enterprise resource planning (ERP) platforms unifying multi-branch finance, supply chain, inventory tracking, and HR operations into one unified dashboard.',
  },
  {
    name: 'Restaurant Management Systems',
    description: 'All-in-one restaurant tech featuring digital QR ordering, Kitchen Display Systems (KDS), multi-location menu management, and seamless third-party delivery integrations.',
  },
  {
    name: 'Automobile & Fleet Industry',
    description: 'Fleet telematics, GPS vehicle tracking, dealership inventory management, and connected auto IoT solutions engineered for logistics efficiency and reduced downtime.',
  },
  {
    name: 'Point of Sale (POS) Systems',
    description: 'Fast, reliable cloud and offline POS solutions with real-time barcode scanning, multi-register syncing, payment gateway integrations, and instant sales analytics.',
  },
  {
    name: 'Real Estate & PropTech',
    description: 'High-converting real estate portals with MLS/IDX sync, broker CRM workflows, 3D property walkthroughs, and tenant management automation.',
  },
  {
    name: 'E-Commerce & Marketplaces',
    description: 'High-speed B2B & B2C e-commerce stores, custom multi-vendor marketplaces, automated checkout funnels, and seamless global payment gateway integrations.',
  },
  {
    name: 'Custom Software & Automation',
    description: 'Tailored business software, bespoke workflow automation bots, and enterprise legacy modernization built to eliminate manual friction and scale your operations.',
  },
];

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="industries" className="bg-[#f3f4f6] text-black scroll-mt-20">
      <div className="site-full-grid py-14 md:py-24 lg:py-[152px]">
        <div className="site-full-grid-inner">
          {/* Eyebrow */}
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-black/45 sm:mb-5">
            Industries
          </p>
          <div className="h-px w-full bg-black/10" />

          <div className="mt-10 sm:mt-12 flex flex-col gap-10 lg:gap-16">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <h2 className="max-w-[560px] text-[28px] font-bold leading-[1.25] tracking-tight text-black sm:text-4xl lg:max-w-[640px] lg:text-[48px] lg:leading-[1.2]">
                <span className="text-grey">Industries We </span>Serve
              </h2>
              <p className="text-[16px] font-medium leading-relaxed text-black/55 max-w-[520px]">
                With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions.
              </p>
            </div>

            {/* Industry Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {industryData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-7 rounded-2xl bg-white flex flex-col h-full cursor-pointer transition-all duration-300 border ${
                    hoveredIndex === index
                      ? 'border-[#0FB5B7] shadow-lg shadow-[#0FB5B7]/5'
                      : 'border-transparent'
                  }`}
                >
                  <h3 className={`text-[20px] font-bold mb-3 tracking-tight transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-[#0FB5B7]' : 'text-black'
                  }`}>
                    {item.name}
                  </h3>
                  <p className="text-[15px] font-medium text-black/55 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
