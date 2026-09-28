import React from "react";

import OurJourney from "@/components/OurJourney";
import Herosection from "@/components/Herosection";
import Autoplayslider from "@/components/AutoPlayCarousel";
import Industries from "@/components/Industries";
import CallToAction from "@/components/CallToAction";
import ChatWithWhatsapp from "@/components/Chatwithwhatsapp";
import AutoImagePlayCarousel from "@/components/AutoImagePlayCarousel";
import TwoColumnSection from "@/components/NewProductDevlopmentSlider";
import TechnologiesSection from "@/components/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DarkAwardsSection from "@/components/DarkAwardsSection";
import SuccessStories from "@/components/OurSuccessStories";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {

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

      {/* ─── Hero ─── */}
      <Herosection />

      {/* ─── Client Logo Ticker ─── */}
      <AutoImagePlayCarousel />

      {/* ─── Stats / Journey ─── */}
      <OurJourney />

      {/* ─── Case Studies / Portfolio ─── */}
      <SuccessStories />

      {/* ─── Process Section (dark) ─── */}
      <TwoColumnSection />

      {/* ─── Technologies (tabbed) ─── */}
      <TechnologiesSection />

      {/* ─── Client Logo Ticker ─── */}
      <AutoImagePlayCarousel />

      {/* ─── Testimonials (dark) ─── */}
      <TestimonialsSection />

      {/* ─── Industries We Serve (light gray) ─── */}
      <Industries />

      {/* ─── Why Choose Us (Cubix-style architectural grid) ─── */}
      <WhyChooseUs />

      {/* ─── Awards (dark) ─── */}
      <DarkAwardsSection />

      {/* ─── Team ─── */}
      <TeamSection />

      {/* ─── Text Marquee ─── */}
      <div className="w-full overflow-hidden">
        <Autoplayslider companyNames={companyNames} />
      </div>

      {/* ─── FAQ (light gray) ─── */}
      <FAQSection />

      {/* ─── Contact / CTA (dark) ─── */}
      <CallToAction />
    </>
  );
}
