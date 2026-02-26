import Image from "next/image";

export default function HerosectionAboutus() {
    return (
        <>
            <div className=" flex flex-col text-white px-6 md:px-20 pt-24 pb-10 bg-black">
                <h1 className="text-3xl md:text-5xl max-w-xl font-bold">
                    Brilliant Tech Minds, Together!
                </h1>
                <p className="text-xl max-w-xl mt-4">We are a team of visionary leaders and problem-solvers utilizing our agile processes to build solutions for lasting value.</p>
                <Image src="/images/herosection.png" alt="RapidTechPro Team - Brilliant Tech Minds" width={1200} height={600} className="w-full h-auto rounded-2xl mt-4" priority />
            </div>
        </>
    )
}