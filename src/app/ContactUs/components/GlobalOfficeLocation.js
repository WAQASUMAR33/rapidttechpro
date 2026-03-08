'use client';
import { motion } from 'framer-motion';

const TEAL = '#0FB5B7';

const offices = [
    { city: 'Manchester', country: 'United Kingdom', address: '73 Meadway, Bramhall, Stockport, SK7 1LX', flag: '🇬🇧' },
    { city: 'Dubai', country: 'United Arab Emirates', address: 'Business Bay, Sheikh Zayed Rd, Dubai', flag: '🇦🇪' },
    { city: 'Lahore', country: 'Pakistan', address: 'DHA Phase 6, Main Boulevard, Lahore', flag: '🇵🇰' },
];

export default function GlobalOffice() {
    return (
        <section className="py-24 px-6 md:px-16" style={{ background: '#0a1628' }}>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 text-white"
                        style={{ background: 'rgba(15,181,183,0.15)', border: '1px solid rgba(15,181,183,0.4)' }}
                    >
                        Our Presence
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Global Office Locations</h2>
                    <p className="text-gray-400 text-lg max-w-xl">
                        Find our team among specialists across multiple offices worldwide.
                    </p>
                </motion.div>

                {/* Office cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {offices.map((office, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="rounded-3xl overflow-hidden group"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                        >
                            {/* Map placeholder with teal gradient */}
                            <div className="h-52 relative overflow-hidden flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, rgba(15,181,183,0.12), rgba(10,142,144,0.05))` }}>
                                <div className="absolute inset-0 opacity-5">
                                    <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                                        {Array.from({ length: 10 }).map((_, r) =>
                                            Array.from({ length: 10 }).map((_, c) => (
                                                <circle key={`${r}-${c}`} cx={c * 22 + 11} cy={r * 22 + 11} r="1" fill="#fff" />
                                            ))
                                        )}
                                    </svg>
                                </div>
                                <div className="relative z-10 text-7xl">{office.flag}</div>
                                <div
                                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                                    style={{ background: TEAL }}
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full" style={{ background: TEAL }} />
                                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: TEAL }}>
                                        {office.country}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2">{office.city}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{office.address}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}