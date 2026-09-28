export const metadata = {
  title: "Custom E-Commerce & Multi-Vendor Marketplace Solutions",
  description: "Accelerate your online revenue with RapidTechPro's custom e-commerce development. We architect high-converting online stores, B2B marketplaces, custom cart checkouts, and seamless payment gateways.",
  keywords: [
    "custom ecommerce development company",
    "multi-vendor marketplace development",
    "B2B ecommerce solutions",
    "online store development services",
    "custom shopping cart integration",
    "ecommerce software developers Pakistan"
  ],
  alternates: { canonical: "/services/ecommerce-solutions" },
  openGraph: {
    title: "Custom E-Commerce & Multi-Vendor Marketplace Solutions | RapidTechPro",
    description: "Build high-speed, high-converting digital storefronts and multi-vendor marketplaces with RapidTechPro.",
    url: "/services/ecommerce-solutions",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "E-Commerce Solutions — RapidTechPro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom E-Commerce & Marketplace Solutions | RapidTechPro",
    description: "End-to-end e-commerce, multi-vendor marketplaces, and high-conversion store development.",
  },
};

import UserLayout from "@/app/UserLayout";
import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-Commerce & Marketplace Development Solutions",
  serviceType: "E-Commerce Software Development",
  url: "https://rapidtechpro.com/services/ecommerce-solutions",
  description: "End-to-end e-commerce and multi-vendor marketplace development solutions with automated checkout, payment integrations, and inventory control.",
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
      { "@type": "ListItem", position: 3, name: "E-Commerce Solutions", item: "https://rapidtechpro.com/services/ecommerce-solutions" },
    ]
  },
};
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