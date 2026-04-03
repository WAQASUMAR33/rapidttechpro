export const metadata = {
  title: "HR Solution",
  description: "Streamline your human resources with RapidTechPro's comprehensive HR management software solutions.",
  alternates: { canonical: "https://rapidtechpro.com/services/hr-solution" },
  openGraph: {
    title: "HR Solution | RapidTechPro",
    description: "Streamline your human resources with RapidTechPro's comprehensive HR management software solutions.",
    url: "https://rapidtechpro.com/services/hr-solution",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "HR Solution — RapidTechPro" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "HR Solution | RapidTechPro", description: "Streamline HR with RapidTechPro's management software." },
};

import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HR Solution",
  url: "https://rapidtechpro.com/services/hr-solution",
  description: "Comprehensive HR management software to streamline your human resources.",
  provider: { "@type": "Organization", name: "RapidTechPro", url: "https://rapidtechpro.com" },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rapidtechpro.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://rapidtechpro.com/services" },
    { "@type": "ListItem", position: 3, name: "HR Solution", item: "https://rapidtechpro.com/services/hr-solution" },
  ]},
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
        <JsonLd data={schema} />
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