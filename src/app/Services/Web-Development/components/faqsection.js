'use client';
import { useState, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Using different icons
import gsap from 'gsap';

const faqData = [
    {
      id: 1,
      question: "How do you ensure my eCommerce website is secure?",
      answer: "We prioritize the security of your eCommerce platform by implementing SSL encryption, PCI-compliant payment gateways, and advanced fraud detection systems to protect both your data and your customers’ transactions.",
    },
    {
      id: 2,
      question: "Can I scale my eCommerce store as my business grows?",
      answer: "Absolutely! Our custom eCommerce solutions are built to scale with your business, offering advanced features like increased product listings, multi-vendor support, and integrations with powerful tools to accommodate growth and expansion.",
    },
    {
      id: 3,
      question: "Do you provide ongoing support and maintenance after the website launch?",
      answer: "Yes, we offer continuous support, maintenance, and optimization services for your eCommerce website to ensure its performance, security, and functionality remain top-notch, keeping your store running smoothly.",
    },
    {
      id: 4,
      question: "Will my website work seamlessly on all devices?",
      answer: "Yes, every eCommerce website we build is fully responsive and optimized for a seamless user experience across desktops, tablets, and mobile devices, ensuring your customers can shop anywhere, anytime.",
    },
    {
      id: 5,
      question: "What makes RapidTechPro different from other eCommerce solution providers?",
      answer: "We stand out by offering tailored eCommerce solutions with a strong focus on performance, security, and scalability. Our dedicated team provides personalized support, from website creation to ongoing optimization, to help your business succeed in the competitive online market.",
    },
  ];
  

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const answersRef = useRef([]);

    const toggleAnswer = (index) => {
        if (openIndex === index) {
            
            gsap.to(answersRef.current[index], { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
            setOpenIndex(null);
        } else {
            // Close the previously open FAQ (if any)
            if (openIndex !== null) {
                gsap.to(answersRef.current[openIndex], { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
            }
            // Open the clicked FAQ
            gsap.fromTo(
                answersRef.current[index],
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.3, ease: "power2.inOut" }
            );
            setOpenIndex(index);
        }
    };

    return (
        <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 leading-tight">Frequently Asked Questions</h2>
                <div className="flex md:flex-row flex-col md:gap-4 max-w-7xl mx-auto">
                    <div className='flex flex-col'>
                        {faqData.slice(0, 2).map((item, index) => (
                            <div key={item.id} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                                <button
                                    onClick={() => toggleAnswer(index)}
                                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out"
                                    style={{
                                        borderRadius: openIndex === index ? '0.5rem 0.5rem 0 0' : '0.5rem',
                                    }}
                                >
                                    <h3 className="font-medium text-sm text-gray-800">{item.question}</h3>
                                    {openIndex === index ? (
                                        <IoIosArrowUp className="w-6 h-6 text-gray-600 transform transition-transform duration-300" />
                                    ) : (
                                        <IoIosArrowDown className="w-6 h-6 text-gray-600 transform transition-transform duration-300" />
                                    )}
                                </button>
                                <div
                                    ref={(el) => (answersRef.current[index] = el)}
                                    className=" text-gray-700"
                                    style={{ borderTop: '1px solid #e5e7eb', overflow: 'hidden', height: 0, opacity: 0 }}
                                >
                                    <p className='p-4 text-sm'>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col'>
                        {faqData.slice(2, 4).map((item, index) => (
                            <div key={item.id} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                                <button
                                    onClick={() => toggleAnswer(index + 4)}
                                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out"
                                    style={{
                                        borderRadius: openIndex === index + 4 ? '0.5rem 0.5rem 0 0' : '0.5rem',
                                    }}
                                >
                                    <h3 className="font-medium text-sm text-gray-800">{item.question}</h3>
                                    {openIndex === index + 4 ? (
                                        <IoIosArrowUp className="w-6 h-6 text-gray-600 transform transition-transform duration-300" />
                                    ) : (
                                        <IoIosArrowDown className="w-6 h-6 text-gray-600 transform transition-transform duration-300" />
                                    )}
                                </button>
                                <div
                                    ref={(el) => (answersRef.current[index + 4] = el)}
                                    className=" text-gray-700"
                                    style={{ borderTop: '1px solid #e5e7eb', overflow: 'hidden', height: 0, opacity: 0 }}
                                >
                                    <p className='p-4 text-sm'>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
