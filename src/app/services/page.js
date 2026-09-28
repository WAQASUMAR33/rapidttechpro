export const metadata = {
  title: "Custom Software, Web & Mobile App Development Services",
  description: "Explore RapidTechPro's full suite of software engineering services: custom web applications, native iOS & Android mobile apps, Enterprise ERP & POS systems, UI/UX design, AI automation, and cloud database architecture.",
  keywords: [
    "custom software development services",
    "web application development",
    "mobile app development services",
    "iOS and Android app development",
    "system design and development",
    "desktop application development",
    "UI UX design development",
    "API development and integration",
    "AI and automation solutions",
    "database design and optimization",
    "enterprise ERP software",
    "custom POS systems"
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Custom Software, Web & Mobile App Development Services | RapidTechPro",
    description: "Full-cycle digital engineering: custom web platforms, mobile apps (iOS & Android), ERP, POS systems, UI/UX, and AI automation for global enterprises.",
    url: "/services",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "RapidTechPro Software Services" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering & App Development Services | RapidTechPro",
    description: "Custom software, mobile apps, ERPs, POS systems, and AI automation built to scale your business.",
  },
};

import UserLayout from "../UserLayout"
import MainServicePage from "./Mainpage"
import JsonLd from "@/components/JsonLd"

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "RapidTechPro Technology & Software Engineering Services",
  url: "https://rapidtechpro.com/services",
  numberOfItems: 9,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Web Application Development", url: "https://rapidtechpro.com/services/web-development" },
    { "@type": "ListItem", position: 2, name: "Mobile Application Development (iOS & Android)", url: "https://rapidtechpro.com/services/mobile-apps" },
    { "@type": "ListItem", position: 3, name: "UI/UX Product Design & Prototyping", url: "https://rapidtechpro.com/services/uiux-figma" },
    { "@type": "ListItem", position: 4, name: "E-Commerce Platforms & Marketplaces", url: "https://rapidtechpro.com/services/ecommerce-solutions" },
    { "@type": "ListItem", position: 5, name: "Point of Sale (POS) & Retail Systems", url: "https://rapidtechpro.com/services/point-of-sale" },
    { "@type": "ListItem", position: 6, name: "Enterprise ERP & HR Solutions", url: "https://rapidtechpro.com/services/hr-solution" },
    { "@type": "ListItem", position: 7, name: "System Design & Architecture", url: "https://rapidtechpro.com/services" },
    { "@type": "ListItem", position: 8, name: "API Development & Cloud Integration", url: "https://rapidtechpro.com/services" },
    { "@type": "ListItem", position: 9, name: "AI & Intelligent Workflow Automation", url: "https://rapidtechpro.com/services" },
  ],
};

export default function ServicePage(){
    return(
        <UserLayout>
        <JsonLd data={servicesSchema} />
        <MainServicePage/>
        </UserLayout>
    )
}