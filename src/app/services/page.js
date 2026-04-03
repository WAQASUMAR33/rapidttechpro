export const metadata = {
  title: "Services",
  description: "Explore RapidTechPro's full range of technology services — web development, mobile apps, UI/UX, e-commerce, and more.",
  alternates: { canonical: "https://rapidtechpro.com/services" },
  openGraph: {
    title: "Services | RapidTechPro",
    description: "Explore RapidTechPro's full range of technology services — web development, mobile apps, UI/UX, e-commerce, and more.",
    url: "https://rapidtechpro.com/services",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "RapidTechPro Services" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Services | RapidTechPro", description: "Explore RapidTechPro's full range of technology services." },
};

import UserLayout from "../UserLayout"
import MainServicePage from "./Mainpage"
import JsonLd from "@/components/JsonLd"

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "RapidTechPro Services",
  url: "https://rapidtechpro.com/services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Web Development", url: "https://rapidtechpro.com/services/web-development" },
    { "@type": "ListItem", position: 2, name: "Mobile App Development", url: "https://rapidtechpro.com/services/mobile-apps" },
    { "@type": "ListItem", position: 3, name: "UI/UX Design", url: "https://rapidtechpro.com/services/uiux-figma" },
    { "@type": "ListItem", position: 4, name: "E-commerce Solutions", url: "https://rapidtechpro.com/services/ecommerce-solutions" },
    { "@type": "ListItem", position: 5, name: "Point of Sale", url: "https://rapidtechpro.com/services/point-of-sale" },
    { "@type": "ListItem", position: 6, name: "HR Solution", url: "https://rapidtechpro.com/services/hr-solution" },
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