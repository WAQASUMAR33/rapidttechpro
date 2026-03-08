import TestimonialSlider from "@/components/OurClientsLove";
import Gurantees from "./components/Guarantee";
import ServiceHerosection from "./components/herosection";
import ServicesWeProvide from "./components/ServicesWeProvide";
import ServiceSection from "./components/Seviceshorizontalsection";
import CallToAction from "@/components/CallToAction";
import SellingSection from "./components/SellingSection";
import CaseStudy from "./components/CaseStudy";

export default function MainServicePage(){
    return(
        <>
        <ServiceHerosection/>
        <ServicesWeProvide/>
        <SellingSection/>
        {/* <ServiceSection/> */}
        <CaseStudy/>
        <Gurantees/>
        <TestimonialSlider/>
        <CallToAction/>
        </>
    )
}