'use client'
import React, { useState, useEffect } from "react";

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
  const [activeIndex, setActiveIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'http://localhost:3001';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiBaseUrl}/api/services`, {
          headers: { 'x-api-key': apiKey }
        });
        if (!response.ok) throw new Error('Failed to fetch services');
        const data = await response.json();

        // Handle new API response format { success: true, data: [...] }
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
    <div className="px-4 py-6 bg-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Services We Provide.</h1>
      <div className="flex flex-col md:flex-row gap-8 transition-all duration-500">
        {/* Image container */}
        <div className={`flex justify-center ${activeIndex !== null ? 'w-full md:w-1/3' : 'w-full md:w-1/3'}`}>
          <img
            src="/images/serviceshero.png"
            alt="Services Hero"
            className="max-w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Accordion section */}
        <div className={`flex flex-col space-y-6 p-6 mt-6 transition-all duration-500 ${activeIndex !== null ? 'w-full md:w-2/3' : 'w-full md:w-2/3'}`}>
          {loading ? (
            <div className="text-gray-500">Loading services...</div>
          ) : (
            services.map((service, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h2
                    className={`text-2xl md:text-3xl font-semibold transition-colors duration-300 ${activeIndex === index ? "text-blue-500" : "text-black"
                      }`}
                  >
                    {service.title}
                  </h2>
                  <span className="text-2xl md:text-3xl font-bold">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-600 mt-2 text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
