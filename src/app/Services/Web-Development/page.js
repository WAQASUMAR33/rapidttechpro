export const metadata = {
  title: "Web Development | RapidTechPro",
  description: "High-performance web development services by RapidTechPro — from landing pages to complex web applications.",
  alternates: {
    canonical: "https://rapidtechpro.com/Services/Web-Development",
  },
};

import UserLayout from "@/app/UserLayout";
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";

export default function EcommerceSolutions(){
    return(
        <>
        <UserLayout>
            <div className="bg-white  pt-[9vh] md:pt-[4vw]">
              <EcommerceHero/>
              <EcommerceSellingSection/>
              {/* <Overview/> */}
              <Features/>
              <FaqSection/>
              <CallToAction/>
            </div>
        </UserLayout>
        </>
    )
}