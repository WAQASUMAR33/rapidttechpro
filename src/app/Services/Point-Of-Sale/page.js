import UserLayout from "@/app/UserLayout";
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";

export const metadata = {
    title: "Custom Point of Sale (POS) Solutions | RapidTechPro",
    description: "Modern POS systems tailored to your retail or hospitality business. Improve efficiency and customer experience with RapidTechPro's custom POS development.",
    keywords: "POS systems, retail software, hospitality POS, inventory management, sales tracking, custom POS development",
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