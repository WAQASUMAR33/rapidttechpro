export const metadata = {
  title: "UI/UX Design & Figma",
  description: "Professional UI/UX design services using Figma — crafting intuitive and visually stunning digital experiences.",
  alternates: { canonical: "https://rapidtechpro.com/services/uiux-figma" },
  openGraph: {
    title: "UI/UX Design & Figma | RapidTechPro",
    description: "Professional UI/UX design services using Figma — crafting intuitive and visually stunning digital experiences.",
    url: "https://rapidtechpro.com/services/uiux-figma",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "UI/UX Design — RapidTechPro" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "UI/UX Design & Figma | RapidTechPro", description: "Professional UI/UX design using Figma by RapidTechPro." },
};

import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UI/UX Design",
  url: "https://rapidtechpro.com/services/uiux-figma",
  description: "Professional UI/UX design services crafting intuitive and visually stunning digital experiences.",
  provider: { "@type": "Organization", name: "RapidTechPro", url: "https://rapidtechpro.com" },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rapidtechpro.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://rapidtechpro.com/services" },
    { "@type": "ListItem", position: 3, name: "UI/UX Design", item: "https://rapidtechpro.com/services/uiux-figma" },
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