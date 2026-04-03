export const metadata = {
  title: "About Us",
  description: "Learn about RapidTechPro — our story, mission, and the team behind our innovative technology solutions.",
  alternates: { canonical: "https://rapidtechpro.com/about-us" },
  openGraph: {
    title: "About Us | RapidTechPro",
    description: "Learn about RapidTechPro — our story, mission, and the team behind our innovative technology solutions.",
    url: "https://rapidtechpro.com/about-us",
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
import OurTeam from "./component/OurTeam";

export default function AboutUs() {
    return (
        <>
            <UserLayout>
                <HerosectionAboutus />
                <OurJourney />
                <div className="w-full bg-white">
                    <div className="bg-white px-6 md:px-12 py-8 flex flex-col gap-6 mx-auto">
                        <h1 className="max-w-5xl text-2xl text-justify md:text-3xl font-bold text-black">Great Things Happen when Our Talented Teams Work Together to Achieve your Goals. at RapidTechPro, We Focus on Solving Real Business Problems Because That’s Where True Value Lies.</h1>
                        <div className="flex gap-2">
                            <img src="/team/waqas.png" className="md:w-24 md:h-24 h-20 w-20 rounded-full border border-gray-800"></img>
                            <div className="flex flex-col justify-center items-start">
                                <h1 className="text-xl md:text-2xl text-black font-bold">Mr. Waqas</h1>
                                <p className="text-lg md:text-xl text-black">CEO, RapidTechPro</p>
                            </div>
                        </div>
                    </div>
                    <OurTeam />
                </div>

            </UserLayout>
        </>
    )
}