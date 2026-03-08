import HeroSection from "./components/herosection";
import UserLayout from "../UserLayout";
import FaqSection from "./components/faqsection";
import BoxSection from "./components/Boxsection";
import ContactUsForm from "./components/Form";
import GlobalOffice from "./components/GlobalOfficeLocation";
import CallToAction from "@/components/CallToAction";

export default function HelpPage(){
    return( <UserLayout>
        <div className="bg-white pt-[4vw]">
            <HeroSection/>
            <FaqSection/>
            <BoxSection/>
            <ContactUsForm/>
            {/* <GlobalOffice/> */}
        <CallToAction/>
        </div>
        </UserLayout>
    )
}