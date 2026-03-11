'use client';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaYoutube, FaGlobe } from 'react-icons/fa';
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
          setFooterServices(servicesData.map((svc) => ({
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-8 pb-6 md:pt-10 md:pb-8">

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-1 h-1 rounded-full bg-bluish"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">Company</h3>
            </div>
            <ul className="flex flex-col gap-2 text-white">
              <li><a href="/AboutUs" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">About Us</a></li>
              <li><a href="/Company/Testimonials" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Testimonials</a></li>
              <li><a href="/Company/Process" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Process</a></li>
              <li><a href="/Help" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-1 h-1 rounded-full bg-bluish"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">Resources</h3>
            </div>
            <ul className="flex flex-col gap-2">
              <li><a href="/blog" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Blog</a></li>
              <li><a href="/Company/Events" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Events</a></li>
              <li><a href="/Company/Press-Release" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Press Release</a></li>
              <li><a href="/Work" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Work</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-1 h-1 rounded-full bg-bluish"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">Services</h3>
            </div>
            <ul className="flex flex-col gap-2">
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
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-1 h-1 rounded-full bg-bluish"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">Insights</h3>
            </div>
            <ul className="flex flex-col gap-2">
              <li><a href="/University" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">University</a></li>
              <li><a href="/Company/Careers" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Careers</a></li>
              <li><a href="/Company/Manifesto" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Manifesto</a></li>
              <li><a href="/Company/Culture-Book" className="text-lg md:text-[20px] font-bold hover:text-bluish transition-colors leading-tight">Culture Book</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-gray-800 mb-6 opacity-30"></div>

        {/* Locations Section */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 mb-6">
            <div className="w-1 h-1 rounded-full bg-bluish"></div>
            <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">Locations</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            <div>
              <h4 className="text-lg font-bold mb-2">West Palm Beach</h4>
              <p className="text-gray-500 text-[11px] leading-relaxed max-w-[180px]">
                550 Village Blvd., Suite 120 #3, <br />
                West Palm Beach, FL 33409, <br />
                United States
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Manchester</h4>
              <p className="text-gray-500 text-[11px] leading-relaxed max-w-[180px]">
                73 Meadway, Bramhall <br />
                Stockport, Manchester - SK7 1LX, <br />
                United Kingdom
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Dubai</h4>
              <p className="text-gray-500 text-[11px] leading-relaxed max-w-[180px]">
                IFZA Business Park, <br />
                Dubai Silicon Oasis, DXB-75900, <br />
                United Arab Emirates
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Karachi</h4>
              <p className="text-gray-500 text-[11px] leading-relaxed max-w-[180px]">
                54C, Kashmir Road, Block 2, <br />
                PECHS, Karachi, Sindh - 75400, <br />
                Pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-800 mb-6 opacity-30"></div>

        {/* Contact and Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pt-2">
          {/* Contact Left */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-1 h-1 rounded-full bg-bluish"></div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">Contact</h3>
            </div>
            <a href="tel:8669782220" className="text-xl md:text-2xl font-bold block mb-1 hover:text-bluish transition-colors tracking-tighter leading-none">866-978-2220</a>
            <a href="mailto:info@rapidtechpro.com" className="text-sm font-bold text-gray-500 hover:text-bluish transition-colors">info@rapidtechpro.com</a>
          </div>

          {/* Logo Center */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-black tracking-tighter mb-2 flex items-baseline leading-none">
              rapidtechpro<span className="text-bluish text-2xl leading-[0]">.</span>
            </div>
            <p className="text-gray-600 text-[8px] uppercase tracking-[0.2em] font-bold">© 2026 RapidTechPro. All Rights Reserved</p>
            <div className="mt-4 flex items-center gap-2 opacity-30 scale-75">
              <div className="flex items-center gap-1 border border-bluish px-1.5 py-0.5 rounded">
                <span className="text-bluish text-[6px] font-black uppercase tracking-tighter">DMCA</span>
                <span className="text-white text-[6px] font-black uppercase tracking-tighter">Protected</span>
              </div>
            </div>
          </div>

          {/* Socials Right */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-4 text-base">
              <a href="#" className="text-gray-600 hover:text-bluish transition-all"><FaLinkedin /></a>
              <a href="#" className="text-gray-600 hover:text-bluish transition-all"><RiTwitterXFill /></a>
              <a href="#" className="text-gray-600 hover:text-bluish transition-all"><FaFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-bluish transition-all"><FaGlobe /></a>
              <a href="#" className="text-gray-600 hover:text-bluish transition-all"><FaYoutube /></a>
            </div>
            <div className="flex items-center gap-2 text-[7px] uppercase tracking-widest text-gray-700 font-black">
              <a href="/Company/Privacy-Policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="opacity-20">|</span>
              <a href="/Company/Terms-Of-Service" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
