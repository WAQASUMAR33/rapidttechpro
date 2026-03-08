'use client'
import React, { useRef } from "react";

import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import OurJourney from "@/components/OurJourney";
import TeamSection from "@/components/TeamSection";
import Autoplayslider from "@/components/AutoPlayCarousel";
import Industries from "@/components/Industries";
import BlogSection from "@/components/BlogsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ChatWithWhatsapp from "@/components/Chatwithwhatsapp";
import OurProductDevelopmentProcess from "@/components/ProductDevelopmentSlider";
import HomePageHeader from "@/components/HomePageHeader";
import AutoImagePlayCarousel from "@/components/AutoImagePlayCarousel";
import TwoColumnSection from "@/components/NewProductDevlopmentSlider";
import TechnologiesSection from "@/components/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DarkAwardsSection from "@/components/DarkAwardsSection";
import HighlightsSection from "@/components/HighlightsSection";
import SuccessStories from "@/components/OurSuccessStories";

export default function Home() {
  const [footerHeight, setFooterHeight] = React.useState(0);
  const footerRef = useRef(null);
  const successStoriesRef = useRef(null);

  React.useEffect(() => {
    if (!footerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === footerRef.current) {
          setFooterHeight(entry.contentRect.height);
        }
      }
    });

    resizeObserver.observe(footerRef.current);

    // Initial height
    setFooterHeight(footerRef.current.offsetHeight);

    return () => resizeObserver.disconnect();
  }, []);

  const companyNames = [
    "Android",
    "IOS",
    "UX Design",
    "Web Design",
    "Software Development",
  ];

  return (
    <>
      <div className="bg-white footer-reveal-container">
        <div
          className="main-content-wrapper shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          style={{ marginBottom: footerHeight }}
        >
          <ChatWithWhatsapp />
          <HomePageHeader />
          <Herosection />
          <AutoImagePlayCarousel />
          <OurJourney />
          <SuccessStories ref={successStoriesRef} />
          <TwoColumnSection />
          <TechnologiesSection />
          <TestimonialsSection />
          <Industries />
          <DarkAwardsSection />
          <HighlightsSection />
          <div className=" w-full overflow-hidden">
            <Autoplayslider companyNames={companyNames} />
          </div>
          <TeamSection />
          {/* <BlogSection /> */}
          <CallToAction />
        </div>
        <div className="sticky-footer-wrapper" ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}
