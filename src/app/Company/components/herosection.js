import Image from "next/image";

export default function CompanyHerosection() {
    return (
        <>
            <div className="h-screen w-full  flex  justify-center items-center">
                {/* [url('/images/bg-2.png')]  */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video/temwork.mp4"
                    poster="/images/herosection.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="z-20 bg-black/40 w-full h-full flex justify-center items-center flex-col">
                    <Image src="/company/logo.png" alt="RapidTechPro Official Logo" width={192} height={192} className="w-24 h-24 md:h-48 md:w-48" />
                    <h1 className="text-white text-5xl md:text-[5.5rem] italic font-bold tracking-tight leading-tight md:leading-[1.2]">Rapid<span className="text-bluish">TechPro</span></h1>
                    <p className="text-center mt-4 text-lg md:text-2xl font-[500] text-white">A simple solution to complex problems. <br></br>Manage Information and succeed.</p>
                </div>
            </div>
        </>
    )
}