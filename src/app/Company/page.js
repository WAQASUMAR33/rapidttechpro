import HomePageHeader from "@/components/HomePageHeader";
import UserLayout from "../UserLayout";
import BigSection from "./components/BigSection";
import Features from "./components/Features";
import CompanyHerosection from "./components/herosection";
import PortfolioSection from "./components/ProjectSection";
import Section from "./components/Section";
import FeatureSection from "./components/Weareteam";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Our Company | Experts in Custom Software & Tech Innovation",
    description: "Learn about RapidTechPro, our expertise in software development, and how we empower businesses with cutting-edge technology solutions.",
    keywords: "tech innovation, software company, enterprise solutions, custom software engineering",
};

export default function CompanyPage() {
    return (
        <>
            {/* <UserLayout> */}
            <HomePageHeader />
            <div className="bg-white">
                <CompanyHerosection />
                <Features />
                <BigSection />
                <FeatureSection />
                <PortfolioSection />
                <Section />
            </div>
            <Footer />
            {/* </UserLayout> */}
        </>
    )
}