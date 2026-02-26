import dynamic from "next/dynamic";
import ServiceHerosection from "./components/herosection";
import ServicesWeProvide from "./components/ServicesWeProvide";

// Dynamically import non-critical components
const SellingSection = dynamic(() => import("./components/SellingSection"));
const CaseStudy = dynamic(() => import("./components/CaseStudy"));
const Gurantees = dynamic(() => import("./components/Guarantee"));
const TestimonialSlider = dynamic(() => import("@/components/OurClientsLove"));
const CallToAction = dynamic(() => import("@/components/CallToAction"));

export default function MainServicePage() {
    return (
        <>
            <ServiceHerosection />
            <ServicesWeProvide />
            <SellingSection />
            {/* <ServiceSection/> */}
            <CaseStudy />
            <Gurantees />
            <TestimonialSlider />
            <CallToAction />
        </>
    )
}