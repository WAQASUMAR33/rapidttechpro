'use client';
import UserLayout from "../UserLayout";
import BigSection from "./components/BigSection";
import Features from "./components/Features";
import CompanyHerosection from "./components/herosection";
import PortfolioSection from "./components/ProjectSection";
import Section from "./components/Section";
import FeatureSection from "./components/Weareteam";

export default function CompanyPage() {
    return (
        <>
            {/* <UserLayout> */}
            <div className="bg-white">
                <CompanyHerosection />
                <Features />
                <BigSection />
                <FeatureSection />
                <PortfolioSection />
                <Section />
            </div>
            {/* </UserLayout> */}
        </>
    )
}