export const metadata = {
  title: "Custom Web Application Development Company",
  description: "Scale your business with RapidTechPro's custom web application development services. We engineer secure, fast Next.js web apps, SaaS platforms, enterprise portals, and cloud APIs.",
  keywords: [
    "custom web application development company",
    "web app development services",
    "Next.js web development",
    "SaaS platform development",
    "enterprise web portals",
    "full stack web development services",
    "React web applications",
    "web development company Lahore Islamabad"
  ],
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Custom Web Application Development Company | RapidTechPro",
    description: "Scale your business with RapidTechPro's custom web development services — Next.js portals, SaaS products, and secure enterprise architectures.",
    url: "/services/web-development",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "Web Development — RapidTechPro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Application Development Company | RapidTechPro",
    description: "High-performance web development, Next.js, React, and cloud APIs built to scale effortlessly.",
  },
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
  name: "Custom Web Application Development Services",
  serviceType: "Software Development",
  url: "https://rapidtechpro.com/services/web-development",
  description: "High-performance custom web application development services — from high-converting SaaS platforms to enterprise portals.",
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
      { "@type": "ListItem", position: 3, name: "Web Development", item: "https://rapidtechpro.com/services/web-development" },
    ]
  },
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