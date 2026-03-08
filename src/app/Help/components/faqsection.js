'use client';
import { useState, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Using different icons
import gsap from 'gsap';

const faqData = [
    { id: 1, question: "What services does Rapid Tech Pro offer?", answer: "Rapid Tech Pro offers a wide range of services including software development, IT consulting, cloud solutions, cybersecurity, and digital transformation strategies." },
    { id: 2, question: "How can I request a quote for a project?", answer: "You can request a quote by filling out the contact form on our website or by emailing us directly at [email protected]" },
    { id: 3, question: "Do you provide ongoing support after project completion?", answer: "Yes, we offer various support and maintenance packages tailored to your specific needs to ensure your systems run smoothly." },
    { id: 4, question: "What technologies does Rapid Tech Pro specialize in?", answer: "We specialize in a variety of technologies including but not limited to React, Node.js, Python, AWS, Azure, and various database systems." },
    { id: 5, question: "How do you ensure the security of my data?", answer: "We implement robust security measures including encryption, access controls, regular security audits, and compliance with industry standards to protect your data." },
    { id: 6, question: "Can you help with migrating our existing systems to the cloud?", answer: "Absolutely! We have extensive experience in cloud migration and can help you seamlessly transition your systems to the cloud." },
    { id: 7, question: "What is your typical project development process?", answer: "Our process involves requirement gathering, planning, design, development, testing, deployment, and ongoing support. We follow agile methodologies to ensure flexibility and client involvement." },
    { id: 8, question: "Do you offer training for my team on the new technologies implemented?", answer: "Yes, we provide comprehensive training programs to ensure your team can effectively manage and utilize the new technologies." },
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
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 leading-tight">Frequently Asked Questions</h2>
                <div className="flex md:flex-row flex-col md:gap-8 max-w-7xl mx-auto">
                    <div className='flex flex-col'>
                        {faqData.slice(0, 4).map((item, index) => (
                            <div key={item.id} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                                <button
                                    onClick={() => toggleAnswer(index)}
                                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out"
                                    style={{
                                        borderRadius: openIndex === index ? '0.5rem 0.5rem 0 0' : '0.5rem',
                                    }}
                                >
                                    <h3 className="font-medium text-lg text-gray-800">{item.question}</h3>
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
                                    <p className='p-4'>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col'>
                        {faqData.slice(4, 8).map((item, index) => (
                            <div key={item.id} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                                <button
                                    onClick={() => toggleAnswer(index + 4)}
                                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out"
                                    style={{
                                        borderRadius: openIndex === index + 4 ? '0.5rem 0.5rem 0 0' : '0.5rem',
                                    }}
                                >
                                    <h3 className="font-medium text-lg text-gray-800">{item.question}</h3>
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
                                    <p className='p-4'>{item.answer}</p>
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
