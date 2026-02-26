import HeroSection from "./components/herosection";
import UserLayout from "../UserLayout";
import FaqSection from "./components/faqsection";
import BoxSection from "./components/Boxsection";
import ContactUsForm from "./components/Form";
import GlobalOffice from "./components/GlobalOfficeLocation";
import CallToAction from "@/components/CallToAction";

export const metadata = {
    title: "Help & Support | RapidTechPro",
    description: "Find answers to your questions about our services, process, and support. We're here to help you succeed with your technology projects.",
    keywords: "help center, customer support, FAQ, software queries, tech support, RapidTechPro help",
};

export default function HelpPage() {
    return (<UserLayout>
        <div className="bg-white pt-[4vw]">
            <HeroSection />
            <FaqSection />
            <BoxSection />
            <ContactUsForm />
            {/* <GlobalOffice/> */}
            <CallToAction />
        </div>
    </UserLayout>
    )
}