import UserLayout from "@/app/UserLayout";
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";

export default function MobileAppsSolutions() {
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
