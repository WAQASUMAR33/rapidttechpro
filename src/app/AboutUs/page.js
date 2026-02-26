import dynamic from "next/dynamic";
import UserLayout from "../UserLayout";
import HerosectionAboutus from "./component/herosection";
import Image from "next/image";

// Dynamically import non-critical components
const OurJourney = dynamic(() => import("@/components/OurJourney"));
const OurTeam = dynamic(() => import("./component/OurTeam"));

export const metadata = {
    title: "About Us | RapidTechPro Team",
    description: "Learn about RapidTechPro's mission, our journey, and the talented team behind our innovative custom software solutions.",
    keywords: "about RapidTechPro, software development team, company mission, tech innovation journey",
};


export default function AboutUs() {
    return (
        <>
            <UserLayout>
                <HerosectionAboutus />
                <OurJourney />
                <div className="w-full bg-white">
                    <div className="bg-white px-6 md:px-12 py-8 flex flex-col gap-6 mx-auto">
                        <h1 className="max-w-5xl text-2xl text-justify md:text-3xl font-bold text-black">Great Things Happen when Our Talented Teams Work Together to Achieve your Goals. at Cubix, We Focus on Solving Real Business Problems Because That’s Where True Value Lies.</h1>
                        <div className="flex gap-2">
                            <Image src="/team/waqas.png" alt="Mr. Waqas - CEO of RapidTechPro" width={96} height={96} className="md:w-24 md:h-24 h-20 w-20 rounded-full border border-gray-800" />
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