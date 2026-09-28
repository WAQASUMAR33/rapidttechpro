'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';
import { FaArrowRight } from 'react-icons/fa';

const faqData = [
  {
    question: 'What custom software development services does RapidTechPro provide?',
    answer: 'RapidTechPro delivers end-to-end software solutions including custom web application development, mobile apps for iOS and Android, enterprise ERP and CRM systems, Point of Sale (POS) software, UI/UX product design, API integrations, and AI workflow automation. Every solution is custom-architected to your specific operational requirements.',
  },
  {
    question: 'How long does it take to develop a custom software or mobile app?',
    answer: 'Timelines vary based on scope and technical complexity. A focused Minimum Viable Product (MVP) typically takes 6 to 12 weeks, while large-scale enterprise ERP or multi-platform systems take 3 to 6 months. Following your initial consultation, we provide an exact development sprint roadmap with transparent milestones.',
  },
  {
    question: 'Do you build native and cross-platform apps for both iOS and Android?',
    answer: 'Yes. We engineer high-performance mobile applications using React Native, Flutter, Swift (iOS), and Kotlin (Android). Our mobile solutions feature offline support, secure biometrics, real-time push notifications, and seamless cloud database syncing.',
  },
  {
    question: 'Can RapidTechPro develop custom ERP, Restaurant Management, and POS systems?',
    answer: 'Absolutely. We specialize in custom business platforms including multi-branch Enterprise ERPs, restaurant management systems with Kitchen Display Systems (KDS), and retail Point of Sale (POS) software with real-time inventory management and barcode scanning.',
  },
  {
    question: 'How do you ensure data security, NDA compliance, and code ownership?',
    answer: 'We sign strict Non-Disclosure Agreements (NDAs) prior to project discovery. You retain 100% intellectual property (IP) rights, proprietary source code, and deployment credentials upon milestone completion. We follow industry-standard OWASP security, role-based access control, and GDPR/HIPAA compliance.',
  },
  {
    question: 'How do we collaborate if our company is located in the USA, UK, UAE, or Saudi Arabia?',
    answer: 'Our distributed engineering teams operate across overlapping time zones covering North America, the UK/Europe, and the Middle East (UAE & KSA). We maintain daily Slack/Teams communication, weekly sprint video demos, and real-time Jira/Trello project tracking to ensure seamless collaboration.',
  },
  {
    question: 'Can you modernize, refactor, or scale our existing legacy application?',
    answer: 'Yes. We specialize in legacy application modernization, database optimization, cloud migration (AWS, Azure, Google Cloud), and microservices refactoring — upgrading speed, security, and scalability without interrupting your daily business operations.',
  },
  {
    question: 'Do you provide continuous maintenance and post-launch technical support?',
    answer: 'Yes. We provide flexible SLA-backed maintenance and support packages that include 24/7 uptime monitoring, critical security patching, performance audits, cloud infrastructure management, and regular feature enhancements.',
  },
];

export default function FAQSection() {
  const dispatch = useDispatch();
  const [openIndex, setOpenIndex] = useState(0);

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

  return (
    <section className="bg-[#f3f4f6] text-black" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="site-full-grid py-14 md:py-24 lg:py-[152px]">
        <div className="site-full-grid-inner">
          {/* Eyebrow */}
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-black/45 sm:mb-5">
            FAQ
          </p>
          <div className="h-px w-full bg-black/10" />

          {/* Two Column Layout */}
          <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16 xl:gap-20">
            {/* Left - Sticky */}
            <div className="lg:sticky lg:top-32">
              <h2 className="max-w-[560px] text-[28px] font-bold leading-[1.25] tracking-tight text-black sm:text-4xl lg:max-w-[640px] lg:text-[48px] lg:leading-[1.2]">
                <span className="text-grey">Frequently</span>
                <br />asked questions
              </h2>

              <div className="mt-8 flex flex-col rounded-2xl bg-white p-7">
                <p className="text-[18px] font-semibold leading-snug tracking-tight text-black sm:text-[20px]">
                  Straight answers, before you have to ask twice.
                </p>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-black/55">
                  Explore answers to common questions about our services, process, and how we help businesses build and scale digital products.
                </p>
                <div className="mt-7 flex">
                  <button
                    type="button"
                    onClick={() => dispatch(openPopup())}
                    className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[42px] pr-5 text-[13px] border border-black/15 bg-transparent"
                  >
                    <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[36px] bg-black" />
                    <span className="relative z-10 flex items-center gap-2.5">
                      <span className="flex shrink-0 items-center justify-center h-[36px] w-[36px]">
                        <FaArrowRight className="text-white text-xs -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                      </span>
                      <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-black/80 group-hover:text-white whitespace-nowrap">
                        Let&apos;s talk
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right - Accordion */}
            <div className="flex flex-col gap-1">
              {faqData.map((faq, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full cursor-pointer rounded-2xl bg-white px-7 text-left"
                >
                  <span className="flex w-full items-start justify-between gap-4 pt-7">
                    <span className="text-[17px] font-semibold leading-snug tracking-tight text-black sm:text-[19px]">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white mt-0.5">
                      <svg
                        width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-500 ease-out ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
                      >
                        <path d="M6 1.5V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M1.5 6H10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                  <span
                    className={`grid overflow-hidden pb-7 transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <span className="min-h-0">
                      <span className="block pt-5 text-[14px] font-medium leading-relaxed text-black/55 sm:text-[15px]">
                        {faq.answer}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
