export const metadata = {
  title: "Cloud POS Systems & Restaurant Management Software",
  description: "Accelerate checkout speed and streamline inventory with RapidTechPro's custom Point of Sale (POS) and Restaurant Management Systems. Engineered with barcode scanning, offline mode, multi-branch syncing, and real-time sales reporting.",
  keywords: [
    "point of sale systems",
    "cloud POS software development",
    "restaurant management system",
    "retail POS system Pakistan",
    "multi-branch inventory software",
    "custom POS application developers",
    "POS software Lahore Islamabad Mandi Bahauddin"
  ],
  alternates: { canonical: "/services/point-of-sale" },
  openGraph: {
    title: "Cloud POS Systems & Restaurant Management Software | RapidTechPro",
    description: "Modern cloud POS software and restaurant management systems engineered for multi-branch retail, restaurants, and wholesale businesses.",
    url: "/services/point-of-sale",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "POS System — RapidTechPro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud POS & Restaurant Management Systems | RapidTechPro",
    description: "Fast, reliable cloud and offline POS solutions tailored for retail and hospitality businesses.",
  },
};

import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Point of Sale (POS) & Restaurant Management Software Development",
  serviceType: "POS Software Development",
  url: "https://rapidtechpro.com/services/point-of-sale",
  description: "Fast, reliable cloud and offline POS solutions tailored for retail, grocery, and restaurant businesses with multi-branch synchronization.",
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
      { "@type": "ListItem", position: 3, name: "Point of Sale", item: "https://rapidtechpro.com/services/point-of-sale" },
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