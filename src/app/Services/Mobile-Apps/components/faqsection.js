'use client';
import { useState, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Using different icons
import gsap from 'gsap';

const faqData = [
    {
        id: 1,
        question: "Do you develop for both iOS and Android?",
        answer: "Yes, we specialize in both native development (Swift for iOS, Kotlin for Android) and cross-platform solutions (React Native, Flutter) to ensure your app reaches the widest possible audience.",
    },
    {
        id: 2,
        question: "How long does it take to develop a mobile app?",
        answer: "A typical mobile app development lifecycle takes between 3 to 6 months depending on the complexity of features, UI design requirements, and backend integrations.",
    },
    {
        id: 3,
        question: "Will you help with App Store and Play Store submissions?",
        answer: "Absolutely. We handle the entire submission process, ensuring your app meets all guidelines for both Apple’s App Store and Google’s Play Store for a successful launch.",
    },
    {
        id: 4,
        question: "Can you integrate third-party APIs and services?",
        answer: "Yes, we have extensive experience integrating payment gateways, social media logins, analytics tools, CRM systems, and any other third-party APIs your business requires.",
    },
    {
        id: 5,
        question: "Do you provide post-launch maintenance?",
        answer: "We offer comprehensive maintenance packages that include OS updates, bug fixes, performance monitoring, and feature enhancements to keep your app up-to-date and efficient.",
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
            if (openIndex !== null && answersRef.current[openIndex]) {
                gsap.to(answersRef.current[openIndex], { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
            }
            gsap.fromTo(
                answersRef.current[index],
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.3, ease: "power2.inOut" }
            );
            setOpenIndex(index);
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-gray-900 leading-tight">
                    Common <span className="text-[#0FB5B7]">Questions</span>
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={item.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0FB5B7]/20 transition-colors">
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                            >
                                <h3 className="font-bold text-lg text-gray-800 pr-8">{item.question}</h3>
                                {openIndex === index ? (
                                    <IoIosArrowUp className="w-6 h-6 text-[#0FB5B7]" />
                                ) : (
                                    <IoIosArrowDown className="w-6 h-6 text-gray-400" />
                                )}
                            </button>
                            <div
                                ref={(el) => (answersRef.current[index] = el)}
                                className="overflow-hidden"
                                style={{ height: 0, opacity: 0 }}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-0">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default FaqSection;
