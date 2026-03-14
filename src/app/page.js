'use client'
import React, { useRef } from "react";

import OurJourney from "@/components/OurJourney";
import Herosection from "@/components/Herosection";
import Autoplayslider from "@/components/AutoPlayCarousel";
import Industries from "@/components/Industries";
import BlogSection from "@/components/BlogsSection";
import CallToAction from "@/components/CallToAction";
import ChatWithWhatsapp from "@/components/Chatwithwhatsapp";
import OurProductDevelopmentProcess from "@/components/ProductDevelopmentSlider";
import AutoImagePlayCarousel from "@/components/AutoImagePlayCarousel";
import TwoColumnSection from "@/components/NewProductDevlopmentSlider";
import TechnologiesSection from "@/components/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DarkAwardsSection from "@/components/DarkAwardsSection";
import HighlightsSection from "@/components/HighlightsSection";
import SuccessStories from "@/components/OurSuccessStories";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  const successStoriesRef = useRef(null);

  const companyNames = [
    "Android",
    "IOS",
    "UX Design",
    "Web Design",
    "Software Development",
  ];

  return (
    <>
      <ChatWithWhatsapp />
      <div className="flex flex-col min-h-screen">
        <Herosection />
        <AutoImagePlayCarousel />
      </div>
      <OurJourney />
      <SuccessStories ref={successStoriesRef} />
      <TwoColumnSection />
      <TechnologiesSection />
      <AutoImagePlayCarousel />
      <TestimonialsSection />
      <Industries />
      <DarkAwardsSection />
      <HighlightsSection />
      <TeamSection />
      <div className=" w-full overflow-hidden">
        <Autoplayslider companyNames={companyNames} />
      </div>
      {/* <BlogSection /> */}
      <CallToAction />
    </>
  );
}
