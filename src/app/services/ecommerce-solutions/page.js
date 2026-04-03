export const metadata = {
  title: "E-commerce Solutions",
  description: "Build powerful online stores with RapidTechPro's end-to-end e-commerce development solutions.",
  alternates: { canonical: "https://rapidtechpro.com/services/ecommerce-solutions" },
  openGraph: {
    title: "E-commerce Solutions | RapidTechPro",
    description: "Build powerful online stores with RapidTechPro's end-to-end e-commerce development solutions.",
    url: "https://rapidtechpro.com/services/ecommerce-solutions",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "E-commerce Solutions — RapidTechPro" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "E-commerce Solutions | RapidTechPro", description: "Build powerful online stores with RapidTechPro." },
};

import UserLayout from "@/app/UserLayout";
import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-commerce Solutions",
  url: "https://rapidtechpro.com/services/ecommerce-solutions",
  description: "End-to-end e-commerce development solutions for powerful online stores.",
  provider: { "@type": "Organization", name: "RapidTechPro", url: "https://rapidtechpro.com" },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rapidtechpro.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://rapidtechpro.com/services" },
    { "@type": "ListItem", position: 3, name: "E-commerce Solutions", item: "https://rapidtechpro.com/services/ecommerce-solutions" },
  ]},
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