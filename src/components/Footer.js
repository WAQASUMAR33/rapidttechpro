'use client';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaYoutube, FaGlobe, FaTiktok, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import Link from 'next/link';

export default function Footer() {
  const [footerServices, setFooterServices] = useState([
    { title: 'Mobile App', slug: 'Mobile-Apps' },
    { title: 'Game Development', slug: 'Game-Development' },
    { title: 'Blockchain Development', slug: 'Blockchain' },
    { title: 'AI Development', slug: 'AI' },
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

  return (
    <footer className="bg-black text-white w-full relative z-0 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12 pb-6">

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mb-6">
          {/* Company */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1 h-1 rounded-full bg-[#0FB5B7]"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-[#0FB5B7] font-bold">Company</h3>
            </div>
            <ul className="flex flex-col gap-1 text-white">
              <li><a href="/AboutUs" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">About Us</a></li>
              <li><a href="/Company/Testimonials" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Testimonials</a></li>
              <li><a href="/Company/Process" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Process</a></li>
              <li><a href="/Help" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1 h-1 rounded-full bg-[#0FB5B7]"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-[#0FB5B7] font-bold">Resources</h3>
            </div>
            <ul className="flex flex-col gap-1">
              <li><a href="/blog" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Blog</a></li>
              <li><a href="/Company/Events" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Events</a></li>
              <li><a href="/Company/Press-Release" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Press Release</a></li>
              <li><a href="/Work" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Work</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1 h-1 rounded-full bg-[#0FB5B7]"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-[#0FB5B7] font-bold">Services</h3>
            </div>
            <ul className="flex flex-col gap-1">
              {footerServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/Services/${svc.slug}`}
                    className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1 h-1 rounded-full bg-[#0FB5B7]"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-[#0FB5B7] font-bold">Insights</h3>
            </div>
            <ul className="flex flex-col gap-1">
              <li><a href="/University" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">University</a></li>
              <li><a href="/Company/Careers" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Careers</a></li>
              <li><a href="/Company/Manifesto" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Manifesto</a></li>
              <li><a href="/Company/Culture-Book" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Culture Book</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-gray-800 mb-6 opacity-20"></div>

        {/* Locations Section */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0FB5B7]"></div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#0FB5B7] font-bold">Locations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-2">Dubai</h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Building 11, Level 7, Bay Square, <br />
                Business Bay, Dubai - 23304, <br />
                United Arab Emirates
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Mandi Bahauddin</h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                54C, Phalia Road, Punjab Center, <br />
                Mandi Bahauddin - 75400, <br />
                Pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-800 mb-10 opacity-20"></div>

        {/* Contact and Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10 pt-4">
          {/* Contact Left */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
            <a href="tel:+923403051059" className="text-2xl md:text-3xl font-bold block mb-2 hover:text-[#0FB5B7] transition-colors tracking-tighter leading-none">+92 340 3051059</a>
            <a href="mailto:info@rapidtechpro.com" className="text-lg text-gray-400 hover:text-[#0FB5B7] transition-colors">info@rapidtechpro.com</a>
          </div>

          {/* Logo Center */}
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold tracking-tighter mb-2 flex items-baseline leading-none">
              <span className="text-white">RapidTech</span><span className="text-[#0FB5B7]">Pro</span>
            </div>
            <p className="text-gray-500 text-[11px] font-medium">© 2024 RapidTechPro All Rights Reserved</p>
          </div>

          {/* Socials Right */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex gap-5 text-xl">
              <a href="#" className="text-[#0FB5B7] hover:text-white transition-all"><FaLinkedin /></a>
              <a href="#" className="text-[#0FB5B7] hover:text-white transition-all"><FaTiktok /></a>
              <a href="#" className="text-[#0FB5B7] hover:text-white transition-all"><RiTwitterXFill /></a>
              <a href="#" className="text-[#0FB5B7] hover:text-white transition-all"><FaFacebook /></a>
              <a href="#" className="text-[#0FB5B7] hover:text-white transition-all"><FaInstagram /></a>
              <a href="#" className="text-[#0FB5B7] hover:text-white transition-all"><FaYoutube /></a>
            </div>
            <div className="flex items-center gap-6 text-[12px] font-semibold text-gray-400">
              <a href="/Company/Privacy-Policy" className="hover:text-[#0FB5B7] transition-colors">Privacy Policy</a>
              <a href="/Company/Terms-Of-Service" className="hover:text-[#0FB5B7] transition-colors">Terms Of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
