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

const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative w-10 h-10"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full">
          <div className="animate-spin border-4 border-gray-300 border-t-transparent rounded-full w-6 h-6"></div>
        </div>
      )}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-500`}
          onLoad={handleLoad}
        />
      )}
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


const projectDataPlaceholder = [
  { id: 1, category: "ecommerce", title: "Store2u", image: "/projects/Store2u 1.png", description: " This is an online shopping store. In this project I have used Nextjs, Tailwind CSS, MySQL." },
  { id: 2, category: "webApplications", title: "Maker4u", image: "/projects/maker4u3.png", description: " This is an online editing website. From where user can create certificates, banners, ads ,resumes and much more content." },
];

const TabsSection = ({ successStoriesRef }) => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'http://localhost:3001';
  const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

  const resolveImage = (path) => {
    if (!path) return '/images/herosection.png';
    if (path.startsWith('http')) return path;
    if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
    return path;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        const response = await fetch(`${apiBaseUrl}/api/projects`, {
          headers: {
            'x-api-key': apiKey
          },
          signal: controller.signal
        });
        clearTimeout(timeout);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${errorText.substring(0, 100)}`);
        }

        const data = await response.json();

        // Handle new API response format { success: true, data: [...] }
        let projectData = [];
        if (data && data.data && Array.isArray(data.data)) {
          projectData = data.data;
        } else if (Array.isArray(data)) {
          projectData = data;
        } else if (data && data.projects && Array.isArray(data.projects)) {
          projectData = data.projects;
        }

        setProjects(projectData);
        setLoading(false);
      } catch (err) {
        console.error('Tabs projects fetch error:', {
          message: err.message,
          name: err.name,
          url: `${apiBaseUrl}/api/projects`
        });
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [apiBaseUrl, apiKey]);

  const handleScrollToSuccessStories = () => {
    if (successStoriesRef && successStoriesRef.current) {
      successStoriesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <h3 className="md:text-3xl text-2xl mb-2 capitalize flex gap-2 font-bold">{subCategory}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {items.map((item, index) => (
                  <Link
                    href="/"
                    key={index}
                    className={`${styles['link-container']} bg-gray-100 hover:bg-[#25CBA1] group hover:text-white text-center rounded-full md:px-2 px-2 py-2 md:py-2 text-sm md:text-[18px] flex items-center justify-start gap-3 overflow-hidden`}
                  >
                    {item.icons && (
                      <LazyImage
                        src={item.icons}
                        alt={item.name}
                        className="w-10 h-10 object-contain group-hover:bg-white rounded-full"
                      />
                    )}
                    <div className='flex flex-col w-auto h-8 overflow-hidden text-[15px]'>
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
            <div key={index} className="bg-gray-200 hover:bg-[#25CBA1] hover:text-white text-center rounded-full md:px-4 px-2 py-1 md:py-2 text-lg md:text-2xl flex items-center justify-start gap-2">
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
    if (loading) return <div className="text-sm text-gray-500 py-4">Loading projects...</div>;
    if (error) return <div className="text-sm text-red-500 py-4">Projects currently unavailable.</div>;

    // Filter projects based on activeTab (category)
    const filteredProjects = projects.filter(project => {
      const catName = activeTab.toLowerCase();
      // Check if any of the project's categories match the active tab
      const hasCategory = project.categories?.some(cat =>
        (typeof cat === 'string' ? cat : cat.name).toLowerCase().includes(catName)
      ) || (project.category && project.category.toLowerCase().includes(catName));

      return hasCategory;
    }).slice(0, 3);

    if (filteredProjects.length === 0) return <p className="text-sm text-gray-500 py-4">No projects available for this category.</p>;

    return (
      <div className="flex md:flex-col flex-row gap-4 mt-6">
        {filteredProjects.map(project => (
          <button
            key={project.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group flex flex-col items-start w-full"
            onClick={() => projectcard(project)}
          >
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={resolveImage(project.mainImage || project.image)}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
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
                <img
                  loading='lazy'
                  src={resolveImage(selectedProject.mainImage || selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-[20em] h-[20em] object-cover rounded-md"
                />
              </div>
              <div className="col-span-3 p-4">
                <h1 className="text-3xl font-semibold">{selectedProject.title}</h1>
                <p className="text-xl">
                  {selectedProject.categories?.length > 0
                    ? (typeof selectedProject.categories[0] === 'string' ? selectedProject.categories[0] : selectedProject.categories[0]?.name)
                    : (selectedProject.category || 'Project')}
                </p>
                <p className="text-xl">{selectedProject.shortDescription || selectedProject.description}</p>
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
              className={`min-w-max text-left px-2 py-1 md:py-3 md:px-3 flex gap-4 items-center rounded-full transition-all duration-300
          ${activeTab === tab.name
                  ? ' bg-[#25CBA1]/10 text-[#25CBA1] font-bold'
                  : 'text-gray-600 hover:bg-[#25CBA1]/5 hover:text-[#25CBA1]'
                }`}
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