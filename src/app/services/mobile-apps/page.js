export const metadata = {
  title: "Mobile App Development",
  description: "Custom iOS and Android mobile app development services by RapidTechPro — built for performance and scale.",
  alternates: { canonical: "https://rapidtechpro.com/services/mobile-apps" },
  openGraph: {
    title: "Mobile App Development | RapidTechPro",
    description: "Custom iOS and Android mobile app development services by RapidTechPro — built for performance and scale.",
    url: "https://rapidtechpro.com/services/mobile-apps",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "Mobile App Development — RapidTechPro" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Mobile App Development | RapidTechPro", description: "Custom iOS and Android mobile app development by RapidTechPro." },
};

import UserLayout from "@/app/UserLayout";
import JsonLd from "@/components/JsonLd";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  url: "https://rapidtechpro.com/services/mobile-apps",
  description: "Custom iOS and Android mobile app development built for performance and scale.",
  provider: { "@type": "Organization", name: "RapidTechPro", url: "https://rapidtechpro.com" },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rapidtechpro.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://rapidtechpro.com/services" },
    { "@type": "ListItem", position: 3, name: "Mobile Apps", item: "https://rapidtechpro.com/services/mobile-apps" },
  ]},
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
