'use client';
import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const FALLBACK_TEAM = [
    { name: "Waqas Umar", image: "/team/waqas.png", designation: "CEO, Co-founder" },
    { name: "Kashif", image: "/team/kashif.jpg", designation: "Co-founder, Sales Manager" },
    { name: "Ali Iftikhar", image: "/team/ali.png", designation: "Senior Developer" },
    { name: "Usama Aslam", image: "/team/usama.png", designation: "UI/UX Designer" },
    { name: "Zofia", image: "/team/nabiya.jpg", designation: "SQA, Project Manager" },
    { name: "Nabiya", image: "/team/nabiya.jpg", designation: "SEO Content Writer" },
    { name: "Azzam Kashif", image: "/team/ali.png", designation: "Junior Developer" },
    { name: "Wasiq Saqlain", image: "/team/wasiq.png", designation: "UI/UX Designer" },
];

export default function OurTeam() {
    const [teamMembers, setTeamMembers] = useState(FALLBACK_TEAM);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch('/api/teams', {
                    method: 'GET',
                    headers: {
                        'x-api-key': process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026',
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) return;
                const data = await response.json();

                let list = [];
                if (data && data.success && Array.isArray(data.data)) {
                    list = data.data;
                } else if (Array.isArray(data)) {
                    list = data;
                } else if (data && Array.isArray(data.teams)) {
                    list = data.teams;
                } else if (data && Array.isArray(data.data)) {
                    list = data.data;
                }

                if (list.length > 0) {
                    setTeamMembers(list.map((m, idx) => ({
                        id: m.id || idx,
                        name: m.name || m.full_name || 'Team Member',
                        designation: m.position || m.designation || m.role || '',
                        image: m.image || m.image_url || m.avatar || m.photo || '/team/waqas.png',
                    })));
                }
            } catch (err) {
                console.error('Error fetching team members:', err);
            }
        };

        fetchTeamMembers();
    }, []);
    return (
        <>
            <div className="w-full h-full ">
                <div className="my-10">
                    <h1 className="text-5xl font-[800] text-center">Our Team</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => {
                        return (
                            <div key={index} className="p-4">
                                <div className=" group border transition-all duration-500 border-gray-200 hover:border hover:border-gray-800 rounded-lg py-4 shadow-lg">
                                    <div className="h-[250px] w-full flex justify-center items-center ">
                                        <img src={member.image} alt={member.name} className="object-cover border-[2px] border-bluish  rounded-full w-[250px] mx-auto h-[250px]"></img>
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