export const metadata = {
  title: "Web Development",
  description: "High-performance web development services by RapidTechPro — from landing pages to complex web applications.",
  alternates: { canonical: "https://rapidtechpro.com/services/web-development" },
  openGraph: {
    title: "Web Development | RapidTechPro",
    description: "High-performance web development services by RapidTechPro — from landing pages to complex web applications.",
    url: "https://rapidtechpro.com/services/web-development",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "Web Development — RapidTechPro" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Web Development | RapidTechPro", description: "High-performance web development services by RapidTechPro." },
};

import UserLayout from "@/app/UserLayout";
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";
import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development",
  url: "https://rapidtechpro.com/services/web-development",
  description: "High-performance web development services — from landing pages to complex web applications.",
  provider: { "@type": "Organization", name: "RapidTechPro", url: "https://rapidtechpro.com" },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rapidtechpro.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://rapidtechpro.com/services" },
    { "@type": "ListItem", position: 3, name: "Web Development", item: "https://rapidtechpro.com/services/web-development" },
  ]},
};

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