'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';
import { FaArrowRight, FaShieldAlt, FaRocket, FaCodeBranch, FaEye, FaHandshake, FaChartBar, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    num: '01',
    icon: FaRocket,
    title: 'Architectural Precision',
    description: 'We build systems designed for ultra-low latency, clean modularity, and effortless horizontal scalability right from day one.',
    benefit: 'Built for enterprise traffic',
  },
  {
    num: '02',
    icon: FaChartBar,
    title: 'Business-Driven Engineering',
    description: 'We solve the core commercial bottleneck first. Elegant architectures, resilient APIs, and optimized databases are the byproducts.',
    benefit: 'Direct ROI-focused delivery',
  },
  {
    num: '03',
    icon: FaCodeBranch,
    title: '100% IP & Source Ownership',
    description: 'Mutual NDAs signed before discovery. All proprietary source code, deployment scripts, and cloud repositories belong entirely to you.',
    benefit: 'Zero vendor lock-in',
  },
  {
    num: '04',
    icon: FaEye,
    title: 'Radical Sprint Transparency',
    description: 'Daily Slack and Teams updates, bi-weekly video sprint demonstrations, and real-time Jira boards you never have to chase.',
    benefit: 'Continuous visibility',
  },
  {
    num: '05',
    icon: FaShieldAlt,
    title: 'Zero-Trust Data Security',
    description: 'OWASP-compliant code audits, automated dependency vulnerability scans, and strict role-based access controls engineered in.',
    benefit: 'HIPAA & GDPR ready',
  },
  {
    num: '06',
    icon: FaHandshake,
    title: 'Dedicated Long-Term SLA',
    description: 'Proactive server uptime monitoring, continuous security patching, and on-demand engineering squads ready to scale features.',
    benefit: '99.98% SLA backing',
  },
];

export default function WhyChooseUs() {
  const dispatch = useDispatch();

  return (
    <section className="bg-white text-black py-16 md:py-24 lg:py-[130px] border-t border-black/[0.06]" id="why-choose-us">
      <div className="site-full-grid">
        <div className="site-full-grid-inner">
          {/* Eyebrow */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-black/45">
              Why Choose Us
            </p>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#0FB5B7]/10 text-[#0FB5B7] border border-[#0FB5B7]/20">
              <FaCheckCircle className="text-[10px]" />
              Engineering Trust &amp; Predictability
            </span>
          </div>

          <div className="h-px w-full bg-black/10" />

          {/* Header */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            <h2 className="text-[28px] sm:text-4xl lg:text-[48px] font-bold leading-[1.18] tracking-tight text-black">
              <span className="text-black/45">Why Businesses Choose </span>
              RapidTechPro?
            </h2>

            <div className="flex flex-col items-start gap-6">
              <p className="text-left text-[17px] sm:text-[19px] font-medium leading-relaxed text-black/60">
                Technical rigor, honest sprint cadences, and an unwavering commitment to business outcomes. Here is what actually keeps leading companies partnering with RapidTechPro past the first project.
              </p>

              {/* Cubix-style Pill Button */}
              <button
                type="button"
                onClick={() => dispatch(openPopup())}
                className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[42px] pr-5 text-[13px] border border-black/15 bg-transparent cursor-pointer"
              >
                <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[36px] bg-black" />
                <span className="relative z-10 flex items-center gap-2.5">
                  <span className="flex shrink-0 items-center justify-center h-[36px] w-[36px]">
                    <FaArrowRight className="text-white text-xs -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                  </span>
                  <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-black/80 group-hover:text-white whitespace-nowrap">
                    Let&apos;s Discuss
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Cubix-style Grid with Border Dividers */}
          <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-12 xl:grid-cols-3">
            {features.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group flex flex-col items-start border-l border-black/10 px-6 py-6 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-l-[#0FB5B7] md:px-8"
                >
                  {/* Top Icon & Number */}
                  <div className="w-full flex items-center justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-black/[0.03] group-hover:bg-[#0FB5B7]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 border border-black/[0.06] group-hover:border-[#0FB5B7]/30">
                      <IconComp className="text-xl text-black/70 group-hover:text-[#0FB5B7] transition-colors" />
                    </div>
                    <span className="font-mono text-sm font-bold text-black/30 group-hover:text-[#0FB5B7] transition-colors">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] sm:text-[26px] font-semibold leading-tight tracking-tight text-black/85 transition-colors duration-300 group-hover:text-black">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-black/60 transition-colors duration-300 group-hover:text-black/75">
                    {item.description}
                  </p>

                  {/* Benefit Pill */}
                  <div className="mt-6 pt-4 border-t border-black/[0.06] w-full">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0FB5B7]">
                      <FaCheckCircle className="text-[10px]" />
                      {item.benefit}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
