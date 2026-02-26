import UserLayout from "@/app/UserLayout";
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";

export const metadata = {
    title: "HR Solutions & Management Software | RapidTechPro",
    description: "Streamline your HR processes with custom HR solution software. From payroll to employee management, RapidTechPro builds tools that simplify your workflow.",
    keywords: "HR management software, payroll systems, employee portal, human resources technology, workflow automation",
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