'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaStore } from 'react-icons/fa';
import { IoMdLaptop } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TabsSection.module.css'
import Link from 'next/link';
import { MdOutlineBookOnline, MdOutlineDesignServices, MdOutlinePointOfSale, MdSmartphone } from 'react-icons/md';
import { CgWebsite } from "react-icons/cg";
import { GrSystem } from "react-icons/gr";

import Image from 'next/image';

const LazyImage = ({ src, alt, className }) => {
  return (
    <div className="relative w-10 h-10 flex-shrink-0">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className={`${className} object-contain transition-opacity duration-500`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
    </div>
  );
};


const tabData = [{
  name: 'ecommerce',
  title: 'Ecommerce Solutions',
  icons: { tabicon: <MdOutlineBookOnline className='text-4xl ' />, platformicon: <FaStore /> },
  content: {
    platform: [
      { name: 'Custom', icons: '/tabsimages/custom.png' },
      { name: 'Woo Commerce', icons: '/tabsimages/woocommerce.png' },
      { name: 'Shopify', icons: '/tabsimages/shopify.png' },
      { name: 'Wix', icons: '/tabsimages/wix.png' },
    ]
  },
},
{
  name: 'webApplications',
  title: 'Web Applications',
  icons: { tabicon: <CgWebsite className='text-4xl ' />, platformicon: <FaStore /> },
  content: {
    Backend: [
      { name: 'Laravel', icons: '/tabsimages/laravel.png' },
      { name: 'ASP.NET', icons: '/tabsimages/aspnet.png' },
      { name: 'NestJS', icons: '/tabsimages/nextjs.png' },
      { name: 'Django', icons: '/tabsimages/django.png' },
      { name: 'Spring Boot', icons: '/tabsimages/springboot.png' },
      { name: 'Node', icons: '/tabsimages/nodejs.png' },
    ],
    Frontend: [
      { name: 'HTML', icons: '/tabsimages/htmllogo.png' },
      { name: 'CSS', icons: '/tabsimages/css.png' },
      { name: 'Bootstrap', icons: '/tabsimages/bootstrap.png' },
      { name: 'Tailwind', icons: '/tabsimages/tailwind.png' },
      { name: 'React', icons: '/tabsimages/react.png' },
      { name: 'JQuery', icons: '/tabsimages/jquery.png' },
      { name: 'Nextjs', icons: '/tabsimages/nextjs.png' },
    ],

  },
},
{
  name: 'cms',
  title: 'CMS',
  icons: { tabicon: <GrSystem className='text-4xl ' />, platformicon: <FaStore /> },
  content: {
    Editors: [
      { name: 'Magento', icons: '/tabsimages/magento.png' },
      { name: 'Shopify', icons: '/tabsimages/shopify.png' },
      { name: 'Wix', icons: '/tabsimages/wix.png' },
      { name: 'WordPress', icons: '/tabsimages/wordpress.png' },
    ],
  },
},
{
  name: 'mobileApps',
  title: 'Mobile Apps',
  icons: { tabicon: <MdSmartphone className='text-4xl ' />, platformicon: <FaStore /> },
  content: {
    Hybrid: [
      { name: "Flutter", icons: '/tabsimages/flutter.png' },
      { name: "React Native", icons: '/tabsimages/react.png' },
    ],
    iOS: [
      { name: "Swift", icons: '/tabsimages/swift.png' },
      { name: "UI Kit", icons: '/tabsimages/uikit.png' },
      { name: "RxSwift", icons: '/tabsimages/rxswift.png' },

    ],
    android: [
      { name: 'Java', icons: '/tabsimages/java.png' },
      { name: 'Kotlin', icons: '/tabsimages/kotlin.png' },

      { name: 'RxJava', icons: '/tabsimages/rxjava.png' },

    ],
  },
},


{
  name: 'hr',
  title: 'HR Solutions',
  icons: { tabicon: <IoMdLaptop className='text-4xl ' />, platformicon: <FaStore /> },
  content: {
    'Features': [
      { name: 'Employee ', icons: '/tabsimages/employee.png' },
      { name: 'Recruitment', icons: '/tabsimages/recruitment.png' },
      { name: 'Talent ', icons: '/tabsimages/talent.png' },
      { name: 'Payroll', icons: '/tabsimages/payroll.png' },
      { name: 'Attendence', icons: '/tabsimages/attendence.png' },
      { name: 'Training', icons: '/tabsimages/training.png' },
      { name: 'Development', icons: '/tabsimages/development.png' },
      { name: 'Benefit', icons: '/tabsimages/benefits.png' },
      { name: 'Analytics', icons: '/tabsimages/analytics.png' },
      { name: 'Portal', icons: '/tabsimages/custom.png' },
    ],
  },
},
{
  name: 'crm',
  title: 'Point of Sale System',
  icons: { tabicon: <MdOutlinePointOfSale className='text-4xl ' />, platformicon: <FaStore /> },
  content: {
    'Features': [
      { name: 'Inventory', icons: '/tabsimages/inventory.png' },
      { name: 'Sales ', icons: '/tabsimages/sales.png' },
      { name: 'Transaction', icons: '/tabsimages/transaction.png' },
      { name: 'Customer', icons: '/tabsimages/customer.png' },
      { name: 'Employee', icons: '/tabsimages/employee.png' },
      { name: 'Analytics', icons: '/tabsimages/analytics.png' },
      { name: 'Discount', icons: '/tabsimages/discount.png' },
      { name: 'Receipt', icons: '/tabsimages/receipt.png' },
      { name: 'Purchase ', icons: '/tabsimages/purchase.png' },
      { name: 'Multi Store', icons: '/tabsimages/multistore.png' },
      { name: 'Cash ', icons: '/tabsimages/cash.png' },
      { name: 'Security', icons: '/tabsimages/security.png' },
      { name: 'Permissions', icons: '/tabsimages/permission.png' },
      { name: 'Returns', icons: '/tabsimages/return.png' },
      { name: 'Tax ', icons: '/tabsimages/tax.png' },
      { name: 'Offline ', icons: '/tabsimages/offline.png' },
      { name: 'Online', icons: '/tabsimages/online.png' },
    ],
  },
},
{
  name: 'uiux',
  title: 'UI/UX - Figma',
  icons: { tabicon: <MdOutlineDesignServices className='text-4xl ' />, platformicon: <FaStore /> },
  content: {
    'Features': [
      { name: 'Wireframes', icons: '/tabsimages/wireframe.png' },
      { name: 'Mockups ', icons: '/tabsimages/mockups.png' },
      { name: 'Usability Testing', icons: '/tabsimages/usability testing.jpg' },
      { name: 'A/B Testing', icons: '/tabsimages/abtesting.jpg' },
      { name: 'Analysis', icons: '/tabsimages/analysis.png' },
      { name: 'Prototyping', icons: '/tabsimages/prototyping.png' },
      { name: 'Strategy', icons: '/tabsimages/strategy.png' },
      { name: 'Reports', icons: '/tabsimages/reports.png' },
      { name: 'Recommendations ', icons: '/tabsimages/recommendations.jpg' },
    ],
  },
},

];


const projectData = [
  { id: 1, category: "ecommerce", title: "Store2u", image: "/projects/Store2u 1.png", description: " This is an online shopping store. In this project I have used Nextjs, Tailwind CSS, MySQL." },
  { id: 2, category: "webApplications", title: "Maker4u", image: "/projects/maker4u3.png", description: " This is an online editing website. From where user can create certificates, banners, ads ,resumes and much more content." },
  { id: 3, category: "flutter", title: "Weather App", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 4, category: "flutter", title: "Chat App", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 5, category: "nodejs", title: "API Server", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 6, category: "nextjs", title: "E-commerce Site", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 7, category: "cms", title: "Shopify Website", image: "/projects/Shopify/shopify 1.png", description: " This is an online shopping store." },
  { id: 8, category: "cms", title: "Shopify Website 2", image: "/projects/Shopify/shopify 2.png", description: " This is an online shopping store." },
  { id: 9, category: "react", title: "Social Media App", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 10, category: "react", title: "Portfolio Website", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 11, category: "angular", title: "Inventory Management", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 12, category: "vue", title: "Blog Platform", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 13, category: "django", title: "E-Learning Platform", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 14, category: "flask", title: "Task Manager", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 15, category: "fastapi", title: "Expense Tracker", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 16, category: "firebase", title: "Authentication System", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 17, category: "nodejs", title: "Real-time Collaboration Tool", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 18, category: "nextjs", title: "Marketing Landing Page", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 19, category: "python", title: "Machine Learning Dashboard", image: "/images/herosection.png", description: " This is an online shopping store." },
  { id: 20, category: "mobileApps", title: "Food Delivery App", image: "/images/herosection.png", description: " This is an online shopping store." },
];

const TabsSection = ({ successStoriesRef }) => {
  const handleScrollToSuccessStories = () => {
    if (successStoriesRef && successStoriesRef.current) {
      successStoriesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeTab, setActiveTab] = useState(tabData[0].name);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const projectcard = (project) => {
    setSelectedProject(project);
    setShowOverlay(true);
  };


  const renderTabContent = () => {
    const activeTabData = tabData.find((tab) => tab.name === activeTab);

    if (!activeTabData) return <div>Select a tab to view the content</div>;

    if (typeof activeTabData.content === 'object' && !Array.isArray(activeTabData.content)) {
      return (
        <div className="flex flex-col gap-8 w-full">
          {Object.entries(activeTabData.content).map(([subCategory, items]) => (
            <div key={subCategory}>
              <h3 className="md:text-3xl text-2xl mb-2 capitalize flex gap-2 ">{subCategory}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {items.map((item, index) => (
                  <Link
                    href="/"
                    key={index}
                    className={`${styles['link-container']} bg-gray-100 hover:bg-black group hover:text-white text-center rounded-full md:px-2 px-2 py-2 md:py-2 text-sm md:text-[18px] flex items-center justify-start gap-3 overflow-hidden`}
                  >
                    {item.icons && (
                      <LazyImage
                        src={item.icons}
                        alt={item.name}
                        className="w-10 h-10 object-contain group-hover:bg-white rounded-full"
                      />
                    )}
                    {/* {item.icons && <img className="w-10 h-10 object-contain group-hover:bg-white rounded-full" src={item.icons}></img>} */}
                    <div className='flex flex-col  w-auto h-8 overflow-hidden text-[15px]'>
                      <span className={styles['item-name']}>{item.name || item}</span>
                      <span className={styles['item-name-hover']}>{item.name || item}</span>
                    </div>

                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>


      );
    } else if (Array.isArray(activeTabData.content)) {
      return (
        <div className="grid grid-cols-3 gap-2 w-full">
          {activeTabData.content.map((item, index) => (
            <div key={index} className="bg-gray-200 hover:bg-black hover:text-white text-center rounded-full md:px-4 px-2 py-1 md:py-2 text-lg md:text-2xl flex items-center justify-start gap-2">
              {item.icons && <span className="md:text-2xl text-xl">{item.icons}</span>}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No valid content to display</div>;
    }
  };

  const renderProjects = () => {
    const filteredProjects = projectData.filter(project => project.category === activeTab).slice(0, 3);

    if (filteredProjects.length === 0) return <p>No projects available for this category.</p>;

    return (
      <div className=" flex md:flex-col flex-row">
        {filteredProjects.map(project => (
          <button key={project.id} className="bg-white rounded-md p-2 flex flex-col items-start " onClick={() => projectcard(project)}>
            <Image src={project.image} alt={project.title} width={160} height={128} className="w-40 h-32 object-cover rounded-md mb-4" />
          </button>
        ))}
      </div>
    );
  };

  return (

    <div className="flex bg-white flex-col md:flex-row text-lg md:text-xl  md:px-28 mx-auto w-full md:min-h-[80vh] ">
      <AnimatePresence>
        {showOverlay && selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white max-w-6xl h-[60vh] rounded-xl grid grid-cols-5 p-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="col-span-2">
                <Image src={selectedProject.image} alt={selectedProject.title} width={400} height={400} className="w-[20em] h-[20em] object-cover rounded-md" />
              </div>
              <div className="col-span-3 p-4">
                <h1 className="text-3xl font-semibold">{selectedProject.title}</h1>
                <p className="text-xl">{selectedProject.category}</p>
                <p className="text-xl">{selectedProject.description}</p>
                <button
                  onClick={() => setShowOverlay(false)}
                  className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
                >
                  ×
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <div className="md:w-[30%] text-black md:p-6 p-4 md:border-t border-gray-300 ">
        <div className="flex flex-row md:flex-col md:space-y-4 overflow-x-auto overflow-y-hidden no-scrollbar ">
          {tabData.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`min-w-max text-left px-2 py-1 md:py-3 md:px-3 flex gap-4 items-center rounded-full
          ${activeTab === tab.name
                  ? ' bg-gray-200 md:bg-gradient-to-r from-blue-300/50 to-white underline md:no-underline'
                  : 'hover:bg-gray-100 '
                } transition duration-200 ease-in-out md:hover:bg-transparent`}
            >
              {/* <img src={tab.icons.tabicon} className='w-16 h-16 object-contain'></img> */}
              {tab.icons.tabicon}
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full border-t md:border-l p-6 grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div className="col-span-3">
          {renderTabContent()}
        </div>
        <div className=' w-full'>
          <button onClick={handleScrollToSuccessStories} className="text-2xl font-[700] cursor-pointer">
            Case Studies
          </button>
          {renderProjects()}
        </div>
      </div>

    </div>

  );
};

export default TabsSection;