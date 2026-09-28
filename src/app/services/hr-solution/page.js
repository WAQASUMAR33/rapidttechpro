export const metadata = {
  title: "Custom HRMS & Payroll Management Software Solutions",
  description: "Automate workforce operations with RapidTechPro's custom HRMS software. Featuring biometric attendance, automated payroll calculation, leave tracking, employee self-service portals, and performance appraisals.",
  keywords: [
    "custom HRMS software",
    "HR management software development",
    "payroll management system Pakistan",
    "employee portal software",
    "biometric attendance software",
    "enterprise HR software solutions"
  ],
  alternates: { canonical: "/services/hr-solution" },
  openGraph: {
    title: "Custom HRMS & Payroll Management Software Solutions | RapidTechPro",
    description: "Streamline human resources and payroll operations with RapidTechPro's custom HRMS platform.",
    url: "/services/hr-solution",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "HR Solution — RapidTechPro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom HRMS & Payroll Software Solutions | RapidTechPro",
    description: "Streamline HR operations, payroll, and attendance with RapidTechPro's enterprise software.",
  },
};

import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Human Resource Management (HRMS) & Payroll Software",
  serviceType: "Enterprise HR Software",
  url: "https://rapidtechpro.com/services/hr-solution",
  description: "Comprehensive enterprise HRMS and payroll management software built to streamline HR workflows, payroll computation, and employee lifecycle tracking.",
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
      { "@type": "ListItem", position: 3, name: "HR Solution", item: "https://rapidtechpro.com/services/hr-solution" },
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