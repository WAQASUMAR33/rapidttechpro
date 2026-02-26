import UserLayout from "@/app/UserLayout";
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";

export const metadata = {
    title: "Professional Web Development Services | RapidTechPro",
    description: "Custom web development using modern frameworks like React, Next.js, and Node.js. Build fast, secure, and scalable websites with RapidTechPro.",
    keywords: "web development, custom websites, React development, Next.js, backend development, full-stack solutions",
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