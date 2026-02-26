import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
    { name: 'React', icon: '/tabsimages/react.png', category: 'Frontend' },
    { name: 'Next.js', icon: '/tabsimages/nextjs.png', category: 'Frontend' },
    { name: 'Flutter', icon: '/tabsimages/flutter.png', category: 'Mobile' },
    { name: 'Laravel', icon: '/tabsimages/laravel.png', category: 'Backend' },
    { name: 'Node.js', icon: '/tabsimages/nodejs.png', category: 'Backend' },
    { name: 'Django', icon: '/tabsimages/django.png', category: 'Backend' },
    { name: 'Tailwind', icon: '/tabsimages/tailwind.png', category: 'Frontend' },
    { name: 'WordPress', icon: '/tabsimages/wordpress.png', category: 'CMS' },
    { name: 'Shopify', icon: '/tabsimages/shopify.png', category: 'Ecommerce' },
    { name: 'Kotlin', icon: '/tabsimages/kotlin.png', category: 'Mobile' },
    { name: 'Swift', icon: '/tabsimages/swift.png', category: 'Mobile' },
    { name: 'Spring Boot', icon: '/tabsimages/springboot.png', category: 'Backend' },
];

export default function TechnologyWiseUse() {
    return (
        <section className="bg-white px-4 md:px-16 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-[#0FB5B7] text-sm font-semibold tracking-widest uppercase mb-3">Our Stack</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Technologies & Expert{' '}
                            <span className="text-[#0FB5B7]">Talent</span> at Your Service
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center"
                    >
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Tap into our team of specialized experts in web, mobile, and software development. With deep expertise in the latest technologies and frameworks, we're ready to seamlessly scale your development teams and bring your vision to life.
                        </p>
                    </motion.div>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -4, scale: 1.05 }}
                            className="group flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#0FB5B7]/30 hover:shadow-lg hover:shadow-[#0FB5B7]/10 rounded-2xl p-4 cursor-default transition-all duration-300"
                        >
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 text-center">{tech.name}</span>
                            <span className="text-[10px] text-[#0FB5B7] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">{tech.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}