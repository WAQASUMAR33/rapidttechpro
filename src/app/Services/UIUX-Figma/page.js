import UserLayout from "@/app/UserLayout";
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";

export const metadata = {
    title: "UI/UX Design Services | Figma Prototyping | RapidTechPro",
    description: "User-centric UI/UX design that converts. RapidTechPro specializes in Figma prototyping, wireframing, and creating intuitive digital experiences.",
    keywords: "UI/UX design, Figma prototyping, user experience, interface design, wireframing, web design",
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