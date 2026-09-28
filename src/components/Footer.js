'use client';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import Link from 'next/link';

export default function Footer() {
  const [footerServices, setFooterServices] = useState([
    { title: 'Mobile App', slug: 'mobile-apps' },
    { title: 'Ecommerce Solutions', slug: 'ecommerce-solutions' },
    { title: 'HR Solutions', slug: 'hr-solution' },
    { title: 'Web Development', slug: 'web-development' },
  ]);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  useEffect(() => {
    const fetchFooterServices = async () => {
      try {
        const targetUrl = apiBaseUrl.includes('localhost') ? '/api/proxy/api/services' : `${apiBaseUrl}/api/services`;
        const response = await fetch(targetUrl, {
          headers: { 'x-api-key': apiKey }
        });
        if (!response.ok) return;
        const data = await response.json();

        let servicesData = [];
        if (data && data.data && Array.isArray(data.data)) {
          servicesData = data.data;
        } else if (Array.isArray(data)) {
          servicesData = data;
        } else if (data && data.services && Array.isArray(data.services)) {
          servicesData = data.services;
        }

        if (servicesData.length > 0) {
          setFooterServices(servicesData.slice(0, 6).map((svc) => ({
            title: svc.title || svc.name,
            slug: svc.slug || (svc.title || svc.name)?.replace(/\s+/g, '-'),
          })));
        }
      } catch (err) {
        // Keep fallback
      }
    };
    fetchFooterServices();
  }, [apiBaseUrl, apiKey]);

  const linkGroups = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Testimonials', href: '/company/testimonials' },
        { label: 'Process', href: '/company/process' },
        { label: 'Contact', href: '/help' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Events', href: '/company/events' },
        { label: 'Press Release', href: '/company/press-release' },
        { label: 'Work', href: '/work' },
      ],
    },
    {
      title: 'Services',
      links: footerServices.map((svc) => ({
        label: svc.title,
        href: `/services/${svc.slug}`,
      })),
    },
    {
      title: 'Insights',
      links: [
        { label: 'Careers', href: '/company/careers' },
        { label: 'Manifesto', href: '/company/manifesto' },
        { label: 'Culture Book', href: '/company/culture-book' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/rapidtechpro', label: 'LinkedIn' },
    { icon: <FaTiktok />, href: 'https://www.tiktok.com/@rapidtechpro', label: 'TikTok' },
    { icon: <RiTwitterXFill />, href: 'https://x.com/rapidtechpro', label: 'X' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/rapidtechpro', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/rapidtechpro', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#0b0c0d] text-white w-full relative z-0 min-h-screen flex flex-col">
      <div className="site-full-grid flex-1 flex flex-col justify-center py-16 md:py-24">
        <div className="site-full-grid-inner">
          {/* Main Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-16">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-6">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] font-medium text-white/70 hover:text-[#0FB5B7] transition-colors leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-white/[0.08] mb-12" />

          {/* Locations */}
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-6">
              Locations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[16px] font-bold mb-2 text-white">Dubai</h4>
                <p className="text-white/40 text-[14px] leading-relaxed font-medium">
                  Building 11, Level 7, Bay Square,<br />
                  Business Bay, Dubai - 23304,<br />
                  United Arab Emirates
                </p>
              </div>
              <div>
                <h4 className="text-[16px] font-bold mb-2 text-white">Mandi Bahauddin</h4>
                <p className="text-white/40 text-[14px] leading-relaxed font-medium">
                  54C, Phalia Road, Punjab Center,<br />
                  Mandi Bahauddin - 75400,<br />
                  Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/[0.08] mb-12" />

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10">
            {/* Contact */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left">
              <a href="tel:+923403051059" className="text-[24px] sm:text-[32px] font-bold block mb-2 hover:text-[#0FB5B7] transition-colors tracking-tight leading-none">
                +92 340 3051059
              </a>
              <a href="mailto:info@rapidtechpro.com" className="text-[14px] text-white/40 hover:text-[#0FB5B7] transition-colors font-medium">
                info@rapidtechpro.com
              </a>
            </div>

            {/* Brand */}
            <div className="flex flex-col items-center">
              <div className="text-[18px] font-bold tracking-tight mb-2 flex items-baseline leading-none">
                <span className="text-white">RapidTech</span>
                <span className="text-[#0FB5B7]">Pro</span>
              </div>
              <p className="text-white/30 text-[11px] font-medium text-center leading-relaxed">
                © 2026 RapidTechPro All Rights Reserved
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center lg:items-end gap-5">
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`RapidTechPro on ${social.label}`}
                    className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-[#0FB5B7] hover:border-[#0FB5B7]/30 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-6 text-[12px] font-medium text-white/40">
                <Link href="/company/privacy-policy" className="hover:text-[#0FB5B7] transition-colors">Privacy Policy</Link>
                <Link href="/company/terms-of-service" className="hover:text-[#0FB5B7] transition-colors">Terms Of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
