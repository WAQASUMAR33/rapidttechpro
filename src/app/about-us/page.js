export const metadata = {
  title: "About Us",
  description: "Learn about RapidTechPro — our story, mission, and the team behind our innovative technology solutions.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us | RapidTechPro",
    description: "Learn about RapidTechPro — our story, mission, and the team behind our innovative technology solutions.",
    url: "/about-us",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "About RapidTechPro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | RapidTechPro",
    description: "Learn about RapidTechPro — our story, mission, and the team behind us.",
  },
};

import OurJourney from "@/components/OurJourney";
import UserLayout from "../UserLayout";
import HerosectionAboutus from "./component/herosection";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";
import JsonLdStructured from "@/components/JsonLdStructured";

export default function AboutUs() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About RapidTechPro",
            "description": "Learn about RapidTechPro — our story, mission, and the team behind our innovative technology solutions.",
            "url": "https://rapidtechpro.com/about-us"
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://rapidtechpro.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About Us",
                    "item": "https://rapidtechpro.com/about-us"
                }
            ]
        }
    ];

    return (
        <>
            <JsonLdStructured schemas={schemas} />
            <UserLayout>
                <HerosectionAboutus />
                <OurJourney />
                <section className="w-full bg-white">
                    <div className="bg-white px-6 md:px-12 py-8 flex flex-col gap-6 mx-auto">
                        <div className="max-w-5xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">About RapidTechPro</h2>
                            <p className="text-lg text-justify text-gray-700 leading-relaxed">
                                Great Things Happen when Our Talented Teams Work Together to Achieve your Goals. At RapidTechPro, We Focus on Solving Real Business Problems Because That’s Where True Value Lies.
                            </p>
                        </div>
                        <div className="flex gap-4 items-center mt-4">
                            <Image src="/team/waqas.png" alt="Mr. Waqas — CEO, RapidTechPro" width={96} height={96} className="md:w-24 md:h-24 h-20 w-20 rounded-full border border-gray-800 object-cover" />
                            <div className="flex flex-col justify-center items-start">
                                <h3 className="text-xl md:text-2xl text-black font-bold">Mr. Waqas</h3>
                                <p className="text-lg md:text-xl text-black">CEO, RapidTechPro</p>
                            </div>
                        </div>
                    </div>
                    <TeamSection title="Our Team" subtitle="" className="bg-white pt-4 pb-12 md:pb-16" />
                </section>

            </UserLayout>
        </>
    )
}