'use client';
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FALLBACK_SERVICES = [
  {
    title: "Customized Software Development",
    description: "Customized software development delivers tailored solutions to meet specific business needs, enhancing efficiency, productivity, and competitive advantage.",
  },
  {
    title: "Audit and Consulting",
    description: "Provides expert consulting services to audit and assess your business requirements, ensuring optimal software solutions.",
  },
  {
    title: "Delivery",
    description: "Ensures timely delivery of high-quality software products tailored to your business objectives.",
  },
  {
    title: "Support and Maintenance",
    description: "Ongoing support and maintenance services to ensure the continuous operation and improvement of your software.",
  },
];

export default function ServicesWeProvide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const headers = { 'x-api-key': apiKey };
        const targetUrl = apiBaseUrl.includes('localhost') ? '/api/proxy/api/services' : `${apiBaseUrl}/api/services`;

        const response = await fetch(targetUrl, { headers });
        if (!response.ok) throw new Error('Failed to fetch services');
        const data = await response.json();

        let serviceData = [];
        if (data && data.data && Array.isArray(data.data)) {
          serviceData = data.data;
        } else if (Array.isArray(data)) {
          serviceData = data;
        } else if (data && data.services && Array.isArray(data.services)) {
          serviceData = data.services;
        }

        setServices(serviceData.length > 0 ? serviceData : FALLBACK_SERVICES);
      } catch (err) {
        console.error('Error fetching services:', err);
        setServices(FALLBACK_SERVICES);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [apiBaseUrl, apiKey]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white min-h-screen flex items-center pt-40 pb-20 lg:pt-32 lg:pb-0">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-[50px] font-extrabold mb-10 text-black tracking-tight leading-tight">
          Services we provide
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Side: Just the Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[550px] h-[350px] md:h-[550px] lg:h-[650px]">
              <Image
                src="/subpageshero/service-image.jpg"
                alt="Services Mockup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side: Accordion section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 lg:mt-6">
            <div className="flex flex-col divide-y divide-gray-200">
              {loading ? (
                <div className="py-10 text-gray-500 font-medium">Loading premium services...</div>
              ) : (
                services.map((service, index) => (
                  <div key={index} className="py-6 first:pt-0 group border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex justify-between items-center w-full text-left focus:outline-none"
                    >
                      <h3
                        className={`text-2xl md:text-3xl lg:text-[32px] font-bold transition-all duration-300 pr-8 ${activeIndex === index ? "text-[#0FB5B7]" : "text-black hover:text-[#0FB5B7]/70"
                          }`}
                      >
                        {service.title}
                      </h3>
                      <span className={`text-xl transition-transform duration-300 ${activeIndex === index ? "text-[#0FB5B7]" : "text-black"
                        }`}>
                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                        }`}
                    >
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
