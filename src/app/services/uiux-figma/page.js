export const metadata = {
  title: "UI/UX Product Design & Figma Prototyping Agency",
  description: "Craft intuitive, world-class user experiences with RapidTechPro's UI/UX design services. From Figma interactive prototypes and design systems to mobile app interfaces that maximize conversion rates.",
  keywords: [
    "UI UX design services",
    "Figma design agency",
    "mobile app UI UX design",
    "web design and prototyping",
    "product design systems",
    "UI UX agency Pakistan Lahore",
    "hire UI UX designers"
  ],
  alternates: { canonical: "/services/uiux-figma" },
  openGraph: {
    title: "UI/UX Product Design & Figma Prototyping Agency | RapidTechPro",
    description: "Award-winning UI/UX design and clickable Figma prototypes engineered for maximum retention and user conversion.",
    url: "/services/uiux-figma",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "UI/UX Design — RapidTechPro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Product Design & Figma Agency | RapidTechPro",
    description: "Professional UI/UX product design, interactive wireframing, and Figma design systems.",
  },
};

import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UI/UX Design & Prototyping Services",
  serviceType: "Digital Product Design",
  url: "https://rapidtechpro.com/services/uiux-figma",
  description: "Professional UI/UX design services crafting intuitive, visually stunning digital experiences and Figma interactive prototypes.",
  provider: {
    "@type": "Organization",
    name: "RapidTechPro",
    url: "https://rapidtechpro.com",
    logo: "https://rapidtechpro.com/company/logo.png"
  },
  areaServed: ["United States", "United Kingdom", "United Arab Emirates", "Saudi Arabia", "Pakistan"],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rapidtechpro.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rapidtechpro.com/services" },
      { "@type": "ListItem", position: 3, name: "UI/UX Design", item: "https://rapidtechpro.com/services/uiux-figma" },
    ]
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