export default function Gurantees() {
  const Gurantee = [
    {
      name: 'High-Quality Practices',
      description:
        'High-quality practices in software development involve rigorous testing, adherence to standards, and continuous improvement, ensuring reliable, efficient, and robust solutions.',
    },
    {
      name: 'After completion 10 days QA check',
      description:
        'Once the primary development or project phase is completed, a quality assurance (QA) process will be carried out over the next 10 days.',
    },
    {
      name: 'Launched Projects',
      description:
        'The project launch marks the beginning of a project. The project launch includes all activities and measures of the project preparation (also called initialization).',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between xl:justify-start gap-8 xl:gap-20 mb-16">
        <h2 className="text-4xl md:text-[50px] font-bold text-gray-900 tracking-tight leading-tight whitespace-nowrap">
          RapidTechPro guarantees
        </h2>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {Gurantee.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-3xl p-8 md:p-10 bg-white border border-gray-200 hover:border-[#0FB5B7]/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-black mb-6 leading-snug">
              {item.name}
            </h3>
            <p className="text-gray-600 text-base md:text-[17px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
