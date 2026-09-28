export const metadata = {
  title: "Case Studies & Portfolio — Web Apps, Mobile Apps & Enterprise Systems",
  description: "Explore RapidTechPro's portfolio of 149+ successfully delivered projects. Case studies in native mobile apps, cloud POS, enterprise ERP systems, and high-performance web applications.",
  keywords: [
    "software development portfolio",
    "mobile app case studies",
    "custom web applications portfolio",
    "enterprise software projects",
    "POS case studies",
    "RapidTechPro client work"
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Case Studies & Portfolio — Web Apps, Mobile Apps & Enterprise Systems | RapidTechPro",
    description: "Browse 149+ completed projects across web, iOS, Android, and enterprise software.",
    url: "/work",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "RapidTechPro Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Portfolio | RapidTechPro",
    description: "Browse 149+ completed projects across web, mobile, ERP, and POS systems.",
  },
};

import CallToAction from "@/components/CallToAction";
import UserLayout from "../UserLayout";
import WorkMainPage from "./MainPage";
import JsonLd from "@/components/JsonLd";

const workSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work — RapidTechPro Portfolio & Case Studies",
  url: "https://rapidtechpro.com/work",
  description: "A collection of 149+ successful custom software, web, and mobile app projects delivered by RapidTechPro.",
  publisher: { "@type": "Organization", name: "RapidTechPro", url: "https://rapidtechpro.com" },
};

export default function WorkPage(){
    return(
        <>
        <JsonLd data={workSchema} />
        <UserLayout>
            <WorkMainPage/>
            <CallToAction />
        </UserLayout>
        </>
    )
}