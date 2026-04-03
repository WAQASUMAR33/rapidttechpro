export const metadata = {
  title: "Point of Sale System",
  description: "Modern POS solutions by RapidTechPro — fast, reliable, and tailored for retail and hospitality businesses.",
  alternates: { canonical: "https://rapidtechpro.com/services/point-of-sale" },
  openGraph: {
    title: "Point of Sale System | RapidTechPro",
    description: "Modern POS solutions by RapidTechPro — fast, reliable, and tailored for retail and hospitality businesses.",
    url: "https://rapidtechpro.com/services/point-of-sale",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "POS System — RapidTechPro" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Point of Sale System | RapidTechPro", description: "Modern POS solutions for retail and hospitality." },
};

import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Point of Sale System",
  url: "https://rapidtechpro.com/services/point-of-sale",
  description: "Fast, reliable POS solutions tailored for retail and hospitality businesses.",
  provider: { "@type": "Organization", name: "RapidTechPro", url: "https://rapidtechpro.com" },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rapidtechpro.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://rapidtechpro.com/services" },
    { "@type": "ListItem", position: 3, name: "Point of Sale", item: "https://rapidtechpro.com/services/point-of-sale" },
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