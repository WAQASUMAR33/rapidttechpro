'use client';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Discovery & Product Strategy",
        description: "We dive deep into your business goals, target audience, and market landscape to define a clear roadmap for success."
    },
    {
        number: "02",
        title: "UX/UI Design & Prototyping",
        description: "Our designers create intuitive, high-fidelity prototypes that define the look and feel of your mobile app."
    },
    {
        number: "03",
        title: "Technical Architecture & Planning",
        description: "We architect a robust, scalable backend and front-end infrastructure tailored to your app's unique needs."
    },
    {
        number: "04",
        title: "Agile Development & Engineering",
        description: "Our expert developers bring the design to life using cutting-edge technologies and agile methodologies."
    },
    {
        number: "05",
        title: "Quality Assurance & Testing",
        description: "Rigorous testing across devices and scenarios ensures your app is bug-free, performant, and secure."
    },
    {
        number: "06",
        title: "Deployment & Launch Support",
        description: "We manage the entire submission process to the App Store and Play Store, providing 24/7 post-launch support."
    }
];

export default function Process() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Build Mobile Apps</h2>
                    <p className="text-xl text-gray-600 max-w-3xl">Our streamlined 6-step mobile app development workflow ensures transparency, efficiency, and high-quality results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="text-[#0FB5B7] text-6xl font-bold mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
