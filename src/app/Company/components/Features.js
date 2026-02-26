import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from "react-icons/bi";
export default function Features(){
  const features = [
    {
      id: '01',
      title: 'Strong admin',
      description: 'Enjoy the process of setting up and managing the site without special tasks. Now even a beginner can easily create their own website.',
      icon: <AiOutlineMessage/>, // Replace with actual icon or SVG
    },
    {
      id: '02',
      title: 'Clean design',
      description: 'Use design for any business. You can create your own unique site. Simple and creative design that will impress you.',
      icon: <MdOutlineDesignServices/>, // Replace with actual icon or SVG
    },
    {
      id: '03',
      title: 'Unique features',
      description: 'Elegant, simple and functional design. Everyone who sees your site will be delighted and will most likely want to contact you.',
      icon: <div className="flex"><BiSolidQuoteSingleLeft/><BiSolidQuoteSingleRight/></div>, // Replace with actual icon or SVG
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Modern design. Strong framework</h2>
        <p className="text-gray-600 mb-12">
          The changing media and technology landscape requires a new kind of creative agency with innovation and creativity at its core.
        </p>
        <div className="grid md:grid-cols-3 gap-8 ">
          {features.map((feature) => (
           <div
           key={feature.id}
           className="border border-gray-700 p-6 rounded-xl h-[350px] bg-gradient-to-br from-white to-gray-400/20 hover:from-gray-400/20 hover:to-white "
         >
           <div className="text-gray-400 text-base md:text-2xl font-semibold">{feature.id}</div>
           <div className="text-4xl my-6">{feature.icon}</div>
           <h3 className="text-3xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
           <p className="text-gray-500 text-sm md:text-lg">{feature.description}</p>
         </div>
         
          ))}
        </div>
      </div>
    </div>
  );
};
