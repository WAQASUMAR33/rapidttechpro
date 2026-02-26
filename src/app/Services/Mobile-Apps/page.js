import UserLayout from "@/app/UserLayout";
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";

export const metadata = {
    title: "Mobile App Development Services | RapidTechPro",
    description: "Cross-platform and native mobile app development for iOS and Android. RapidTechPro creates engaging, high-performance apps that drive business results.",
    keywords: "mobile apps, iOS development, Android development, React Native, cross-platform apps, mobile strategy",
};


export default function EcommerceSolutions() {
    return (
        <>
            <UserLayout>
                <div className="bg-white  pt-[9vh] md:pt-[4vw]">
                    <EcommerceHero />
                    <EcommerceSellingSection />
                    {/* <Overview/> */}
                    <Features />
                    <FaqSection />
                    <CallToAction />
                </div>
            </UserLayout>
        </>
    )
}