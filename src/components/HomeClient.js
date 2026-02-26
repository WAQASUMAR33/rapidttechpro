'use client'
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import Herosection from "@/components/Herosection";
// Critical header stays regular import for LCP discovery of logo
import HomePageHeader from "@/components/HomePageHeader";

// Dynamically import almost everything else
const ChatWithWhatsapp = dynamic(() => import("@/components/Chatwithwhatsapp"), { ssr: false });

// Dynamically import non-critical components
const AutoImagePlayCarousel = dynamic(() => import("@/components/AutoImagePlayCarousel"), { ssr: false });
const OurJourney = dynamic(() => import("@/components/OurJourney"), { ssr: false });
const AwardsAndRecognitions = dynamic(() => import("@/components/AwardsRecognition"), { ssr: false });
const Autoplayslider = dynamic(() => import("@/components/AutoPlayCarousel"), { ssr: false });
const TechnologyWiseUse = dynamic(() => import("@/components/TechnologyWiseUse"), { ssr: false });
const TabsSection = dynamic(() => import("@/components/Tabs"), { ssr: false });
const CreateSoftwareSection = dynamic(() => import("@/components/CreateSoftwaresection"), { ssr: false });
const SuccessStories = dynamic(() => import("@/components/OurSuccessStories"), { ssr: false });
const TwoColumnSection = dynamic(() => import("@/components/NewProductDevlopmentSlider"), { ssr: false });
const OurClientsLove = dynamic(() => import("@/components/OurClientsLove"), { ssr: false });
const Industries = dynamic(() => import("@/components/Industries"), { ssr: false });
const CallToAction = dynamic(() => import("@/components/CallToAction"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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
