// components/Industries.js
import { FaCheckCircle, FaClipboardList, FaRocket } from 'react-icons/fa'; // Importing icons

export default function Gurantees() {
  const Gurantee = [
    {
      name: 'High-Quality Practices',
      description:
        'High-quality practices in software development involve rigorous testing, adherence to standards, and continuous improvement, ensuring reliable, efficient, and robust solutions.',
      icon: <FaCheckCircle size={40} />,
    },
    {
      name: 'After completion 10 days QA check',
      description:
        'Once the primary development or project phase is completed, a quality assurance (QA) process will be carried out over the next 10 days.',
      icon: <FaClipboardList size={40} />,
    },
    {
      name: 'Launched Projects',
      description:
        'The project launch marks the beginning of a project. The project launch includes all activities and measures of the project preparation (also called initialization).',
      icon: <FaRocket size={40} />,
    },
  ];

  return (
    <div className="bg-white py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          RapidTechPro <span className='text-bluish'>Guarantees</span>
        </h2>
      </div>
      <div className="grid gap-2 gap-x-2 gap-y-8 md:gap-x-8 md:gap-y-8 grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {Gurantee.map((item, index) => (
          <div
            key={index}
            className="group border-2 flex flex-col justify-between rounded-xl p-2 md:p-6 md:h-[350px] md:pr-10 bg-white shadow-sm border-gray-500 hover:border-bluish relative text-gray-800 hover:text-bluish"
          >
            {/* Icon placed at the top of the card */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-2 border-black group-hover:border-bluish w-16 h-16 flex justify-center items-center">
              {item.icon}
            </div>

            <div className="mt-8"> {/* Add margin top to create space for icon */}
              <h3 className="text-xl md:text-3xl font-semibold  mb-1">
                {item.name}
              </h3>
            </div>
            <div>
              <p className="text-gray-600 mb-4 text-base text-justify md:text-xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
