'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function ServicesWeProvide() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Customized Software Development",
      description:
        "Customized software development delivers tailored solutions to meet specific business needs, enhancing efficiency, productivity, and competitive advantage.",
    },
    {
      title: "Audit and Consulting",
      description:
        "Provides expert consulting services to audit and assess your business requirements, ensuring optimal software solutions.",
    },
    {
      title: "Delivery",
      description:
        "Ensures timely delivery of high-quality software products tailored to your business objectives.",
    },
    {
      title: "Support and Maintenance",
      description:
        "Ongoing support and maintenance services to ensure the continuous operation and improvement of your software.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-6 bg-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Services We Provide.</h1>
      <div className="flex flex-col md:flex-row gap-8 transition-all duration-500">
        {/* Image container */}
        <div className="flex justify-center w-full md:w-1/3">
          <Image
            src="/images/serviceshero.png"
            alt="Services Hero"
            width={600}
            height={600}
            className="max-w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>

        {/* Accordion section */}
        <div className="flex flex-col space-y-6 p-4 md:p-6 mt-6 transition-all duration-500 w-full md:w-2/3">
          {services.map((service, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
