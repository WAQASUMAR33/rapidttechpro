export const metadata = {
  title: "Our Work",
  description: "Browse RapidTechPro's portfolio of successful projects spanning web, mobile, and enterprise technology solutions.",
  alternates: { canonical: "https://rapidtechpro.com/work" },
  openGraph: {
    title: "Our Work | RapidTechPro",
    description: "Browse RapidTechPro's portfolio of successful projects spanning web, mobile, and enterprise technology solutions.",
    url: "https://rapidtechpro.com/work",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "RapidTechPro Portfolio" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Our Work | RapidTechPro", description: "Browse RapidTechPro's portfolio of successful projects." },
};

import CallToAction from "@/components/CallToAction";
import UserLayout from "../UserLayout";
import WorkMainPage from "./MainPage";
import JsonLd from "@/components/JsonLd";

const workSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work — RapidTechPro Portfolio",
  url: "https://rapidtechpro.com/work",
  description: "A collection of successful technology projects delivered by RapidTechPro.",
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