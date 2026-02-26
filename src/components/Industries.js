import { FaCar, FaMoneyBillWave, FaBuilding, FaUtensils, FaGraduationCap, FaHospital } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Industries() {
  const industries = [
    {
      name: 'Automotive',
      description: 'Improve vehicle management and enhance customer satisfaction with custom solutions.',
      tags: ['Fleet Management', 'Telematics', 'Dealer Portal', 'Inventory'],
      icon: <FaCar className="text-xl md:text-2xl" />,
      color: 'from-orange-500/10 to-orange-500/5',
      accent: 'text-orange-500',
    },
    {
      name: 'Finance',
      description: 'Scalable solutions that improve the efficiency and security of your financial services.',
      tags: ['Payments', 'Analytics', 'Compliance', 'CRM'],
      icon: <FaMoneyBillWave className="text-xl md:text-2xl" />,
      color: 'from-green-500/10 to-green-500/5',
      accent: 'text-green-500',
    },
    {
      name: 'Real Estate',
      description: 'Streamline operations, simplifying property management and sales processes.',
      tags: ['Property Mgmt', 'CRM', 'Listings', 'Analytics'],
      icon: <FaBuilding className="text-xl md:text-2xl" />,
      color: 'from-blue-500/10 to-blue-500/5',
      accent: 'text-blue-500',
    },
    {
      name: 'Hospitality',
      description: 'User-friendly solutions that enhance guest experiences and boost satisfaction.',
      tags: ['Booking', 'POS', 'Inventory', 'Reviews'],
      icon: <FaUtensils className="text-xl md:text-2xl" />,
      color: 'from-pink-500/10 to-pink-500/5',
      accent: 'text-pink-500',
    },
    {
      name: 'Education',
      description: 'Revolutionize ed-tech with solutions that boost student engagement and simplify learning.',
      tags: ['LMS', 'Attendance', 'Grading', 'E-Learning'],
      icon: <FaGraduationCap className="text-xl md:text-2xl" />,
      color: 'from-purple-500/10 to-purple-500/5',
      accent: 'text-purple-500',
    },
    {
      name: 'Healthcare',
      description: 'Enhance healthcare by streamlining processes and improving patient care outcomes.',
      tags: ['EHR', 'Appointments', 'Billing', 'Telemedicine'],
      icon: <FaHospital className="text-xl md:text-2xl" />,
      color: 'from-red-500/10 to-red-500/5',
      accent: 'text-red-500',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#0FB5B7] text-sm font-semibold tracking-widest uppercase mb-3">Expertise</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Industries We <span className="text-[#0FB5B7]">Serve</span>
            </h2>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
              With deep expertise across diverse sectors, we understand your unique challenges and deliver tailored solutions that drive growth and success.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className={`group relative bg-white border border-gray-100 hover:border-transparent rounded-2xl p-6 md:p-8 overflow-hidden cursor-default transition-all duration-300 hover:shadow-xl`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-white ${industry.accent} mb-4 transition-colors duration-300 shadow-sm`}>
                  {industry.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{industry.name}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5">{industry.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-3 py-1 rounded-full bg-gray-100 group-hover:bg-white text-gray-600 transition-colors duration-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
