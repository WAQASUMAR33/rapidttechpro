export const metadata = {
  title: "Mobile App Development Services — iOS & Android Apps",
  description: "Transform your app concept into a market-leading digital product. RapidTechPro engineers high-performance iOS, Android, Flutter, and React Native mobile apps for startups and enterprises worldwide.",
  keywords: [
    "mobile application development services",
    "iOS app development company",
    "Android app development services",
    "React Native app developers",
    "Flutter app development agency",
    "custom mobile apps Pakistan",
    "cross platform mobile development",
    "hire mobile app developers"
  ],
  alternates: { canonical: "/services/mobile-apps" },
  openGraph: {
    title: "Mobile App Development Services — iOS & Android Apps | RapidTechPro",
    description: "Build market-leading mobile applications with RapidTechPro. Native iOS, Android, Flutter, and React Native apps engineered for performance and scale.",
    url: "/services/mobile-apps",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "Mobile App Development — RapidTechPro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services — iOS & Android | RapidTechPro",
    description: "High-performance iOS, Android, Flutter, and React Native mobile app development.",
  },
};

import UserLayout from "@/app/UserLayout";
import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile Application Development (iOS & Android)",
  serviceType: "Mobile Application Development",
  url: "https://rapidtechpro.com/services/mobile-apps",
  description: "Full-cycle custom mobile app development services for iOS and Android using Swift, Kotlin, Flutter, and React Native.",
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
      { "@type": "ListItem", position: 3, name: "Mobile App Development", item: "https://rapidtechpro.com/services/mobile-apps" },
    ]
  },
};
import EcommerceHero from "./components/Herosection";
import EcommerceSellingSection from "./components/SellingSection";
import Overview from "./components/Overview";
import Features from "./components/Features";
import CallToAction from "@/components/CallToAction";
import FaqSection from "./components/faqsection";

export default function MobileAppsSolutions() {
    return (
        <>
            <JsonLd data={schema} />
            <UserLayout>
                <div className="bg-white  pt-[9vh] md:pt-[4vw]">
                    <EcommerceHero />
                    <EcommerceSellingSection />
                    {/* <Overview/> */}
                    <Features />
                    <FaqSection />
                    <CallToAction />
                </div>
            </UserLayout>
        </>
    )
}
