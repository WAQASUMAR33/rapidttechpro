import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"

export default function OurTeam() {
    const TeamMembers = [
        { name: "Waqas Umar", image: "/team/waqas.png", designation: "CEO, Co-founder" },
        { name: "Kashif", image: "/team/kashif.jpg", designation: "Co-founder, Sales Manager" },
        { name: "Ali Iftikhar", image: "/team/ali.png", designation: "Senior Developer" },
        { name: "Usama Aslam", image: "/team/usama.png", designation: "UI/UX Designer" },
        { name: "Zofia", image: "/team/nabiya.jpg", designation: "SQA, Project Manager" },
        { name: "Nabiya", image: "/team/nabiya.jpg", designation: "SEO Content Writer" },
        { name: "Azzam Kashif", image: "/team/ali.png", designation: "Junior Developer" },
        { name: "Wasiq Saqlain", image: "/team/wasiq.png", designation: "UI/UX Designer" },
    ]
    return (
        <>
            <div className="w-full h-full ">
                <div className="my-10">
                    <h1 className="text-5xl font-[800] text-center">Our Team</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {TeamMembers.map((member, index) => {
                        return (
                            <div key={index} className="p-4">
                                <div className=" group border transition-all duration-500 border-gray-200 hover:border hover:border-gray-800 rounded-lg py-4 shadow-lg">
                                    <div className="h-[250px] w-full flex justify-center items-center ">
                                        <Image src={member.image} alt={`${member.name} - ${member.designation}`} width={250} height={250} className="object-cover border-[2px] border-bluish  rounded-full w-[250px] h-[250px] mx-auto" />
                                    </div>
                                    <div className=" text-black h-32 w-full flex flex-col gap-1 justify-center items-center">
                                        <h1 className="text-3xl font-[700]">{member.name}</h1>
                                        <p className="text-xl">{member.designation}</p>
                                        {/* <div className="flex gap-4 justify-center items-center mt-1 text-bluish">
                                            <a className="p-2 border-bluish  border rounded-full">
                                                <Facebook/>
                                            </a>
                                            <a className="p-2 border-bluish border rounded-full">
                                                <Instagram/>
                                            </a>
                                            <a className="p-2 border-bluish border rounded-full">
                                                <Linkedin/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}