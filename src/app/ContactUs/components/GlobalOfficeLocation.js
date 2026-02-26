import Image from "next/image";

export default function GlobalOffice() {
    return (
        <>
            <div className="p-12 bg-white">
                <h1 className="text-3xl md:text-5xl  font-bold max-w-lg">
                    Our Global Office Locations
                </h1>
                <p className="mt-4 text-xl max-w-lg mb-2">Find your team among 350 specialists in 4 offices from 3 countries.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                    <div className="card-1 rounded-xl flex flex-col h-full">
                        <div className="w-full h-80 rounded-xl">
                            <Image src="/images/herosection.png" alt="Manchester Office" width={600} height={400} className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <div className="h-40">
                            <h1 className="text-xl md:text-2xl font-bold mt-2">Manchester</h1>
                            <p className="mt-2">
                                73 Meadway, Bramhall
                                Stockport, Manchester - SK7 1LX,
                                United Kingdom
                            </p>
                        </div>
                    </div>
                    <div className="card-1 rounded-xl flex flex-col h-full">
                        <div className="w-full h-80 rounded-xl">
                            <Image src="/images/herosection.png" alt="Dubai Office" width={600} height={400} className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <div className="h-40">
                            <h1 className="text-xl md:text-2xl font-bold mt-2">Dubai</h1>
                            <p className="mt-2">
                                73 Meadway, Bramhall
                                Stockport, Manchester - SK7 1LX,
                                United Kingdom
                            </p>
                        </div>
                    </div>
                    <div className="card-1 rounded-xl flex flex-col h-full">
                        <div className="w-full h-80 rounded-xl">
                            <Image src="/images/herosection.png" alt="Manchester Office" width={600} height={400} className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <div className="h-40">
                            <h1 className="text-xl md:text-2xl font-bold mt-2">Manchester</h1>
                            <p className="mt-2">
                                73 Meadway, Bramhall
                                Stockport, Manchester - SK7 1LX,
                                United Kingdom
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}