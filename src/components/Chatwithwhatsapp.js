'use client'
import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

export default function ChatWithWhatsapp() {
  const phoneNumber = '+923403051059'; // Replace with your WhatsApp number

  // State to control the visibility of the scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to create WhatsApp link
  const createWhatsAppLink = () => `https://wa.me/${phoneNumber}`;

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // UseEffect to listen to scroll events and show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Version of WhatsApp Button */}
      <div 
        className="md:flex fixed hidden z-50 left-0 top-1/2 transform -translate-y-1/2 h-36 w-8 bg-bluish rounded-r-lg items-center justify-center chat-button cursor-pointer"
        onClick={() => window.open(createWhatsAppLink(), '_blank')}
      >
        <span className="text-white transform -rotate-90 whitespace-nowrap text-xs md:text-sm">
          Chat with WhatsApp
        </span>
      </div>

      {/* Mobile Version of WhatsApp Button */}
      <div
        className="fixed bottom-6 right-4 z-50 shadow-lg cursor-pointer flex items-center justify-center bg-green-500 p-3 rounded-full md:hidden"
        onClick={() => window.open(createWhatsAppLink(), '_blank')}
      >
        <FaWhatsapp className="text-white w-6 h-6" />
      </div>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <div
          className="fixed bottom-20 right-4 z-50 shadow-lg cursor-pointer group flex items-center justify-center bg-gray-700 p-3 rounded-full transition-all duration-300"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-white w-6 h-6" />
          <p className="hidden group-hover:flex text-white font-bold text-sm opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:translate-x-2 transition-all duration-300 px-4">
            Go to Top
          </p>
        </div>
      )}
    </>
  );
}
