'use client'
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import Herosection from "@/components/Herosection";
import HomePageHeader from "@/components/HomePageHeader";
import ChatWithWhatsapp from "@/components/Chatwithwhatsapp";

// Dynamically import non-critical components
const AutoImagePlayCarousel = dynamic(() => import("@/components/AutoImagePlayCarousel"));
const OurJourney = dynamic(() => import("@/components/OurJourney"));
const AwardsAndRecognitions = dynamic(() => import("@/components/AwardsRecognition"));
const Autoplayslider = dynamic(() => import("@/components/AutoPlayCarousel"));
const TechnologyWiseUse = dynamic(() => import("@/components/TechnologyWiseUse"));
const TabsSection = dynamic(() => import("@/components/Tabs"));
const CreateSoftwareSection = dynamic(() => import("@/components/CreateSoftwaresection"));
const SuccessStories = dynamic(() => import("@/components/OurSuccessStories"));
const TwoColumnSection = dynamic(() => import("@/components/NewProductDevlopmentSlider"));
const OurClientsLove = dynamic(() => import("@/components/OurClientsLove"));
const Industries = dynamic(() => import("@/components/Industries"));
const CallToAction = dynamic(() => import("@/components/CallToAction"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function HomeClient() {
    const successStoriesRef = useRef(null);

    const companyNames = [
        "Android",
        "iOS",
        "UX Design",
        "Web Design",
        "Software Development",
        "Mobile Apps",
        "E-Commerce",
        "HR Solutions",
    ];

    return (
        <div className="bg-white">
            <ChatWithWhatsapp />
            <HomePageHeader />
            <Herosection />
            <AutoImagePlayCarousel />
            <OurJourney />
            <AwardsAndRecognitions />
            <div className="w-full overflow-hidden">
                <Autoplayslider companyNames={companyNames} />
            </div>
            <TechnologyWiseUse />
            <TabsSection successStoriesRef={successStoriesRef} />
            <CreateSoftwareSection />
            <SuccessStories ref={successStoriesRef} />
            <TwoColumnSection />
            <OurClientsLove />
            <Industries />
            <CallToAction />
            <Footer />
        </div>
    );
}
