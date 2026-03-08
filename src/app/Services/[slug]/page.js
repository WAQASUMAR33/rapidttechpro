'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import UserLayout from '@/app/UserLayout';
import CallToAction from '@/components/CallToAction';

const apiBaseUrl = process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || '/api/proxy';
const apiKey = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';
const headers = { 'x-api-key': apiKey };

const resolveImage = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    if (path.startsWith('/uploads')) return `${apiBaseUrl}${path}`;
    return path;
};

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;
        const fetchService = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${apiBaseUrl}/api/services/slug/${slug}`, { headers });
                if (!res.ok) throw new Error(`Service not found (${res.status})`);
                const data = await res.json();
                setService(data?.data || data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchService();
    }, [slug]);

    if (loading) {
        return (
            <UserLayout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#0FB5B7]" />
                </div>
            </UserLayout>
        );
    }

    if (error || !service) {
        return (
            <UserLayout>
                <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">Service Not Found</h1>
                    <p className="text-gray-500">{error || 'This service page is not available.'}</p>
                    <Link href="/Services" className="px-6 py-3 bg-black text-white rounded-full hover:bg-[#0FB5B7] transition-all">
                        Back to Services
                    </Link>
                </div>
            </UserLayout>
        );
    }

    const coreOfferings = tryParse(service.coreOfferings);
    const platformExpertise = tryParse(service.platformExpertise);
    const processSteps = tryParse(service.processSteps);
    const industries = tryParse(service.industries);
    const techStack = tryParse(service.techStack);
    const benefits = tryParse(service.benefits);
    const faq = tryParse(service.faq);
    const timeline = tryParse(service.timeline);
    const testimonials = tryParse(service.testimonials);
    const caseStudies = tryParse(service.caseStudies);
    const maintenance = tryParse(service.maintenance);

    return (
        <UserLayout>
            <div className="bg-white pt-16">

                {/* ===== HERO ===== */}
                <section className="relative bg-white pt-16 pb-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 ${service.heroImage ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
                            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 mt-6">
                                    {service.title}
                                </h1>
                                {service.heroSubtitle && (
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">{service.heroSubtitle}</p>
                                )}
                                {service.description && !service.heroSubtitle && (
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">{service.description}</p>
                                )}
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Link href="/ContactUs" className="px-8 py-4 bg-black text-white hover:bg-[#0FB5B7] transition-all rounded-full font-bold text-lg shadow-xl">
                                        Get A Consultation
                                    </Link>
                                    <Link href="/Work" className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all rounded-full font-bold text-lg">
                                        Our Work
                                    </Link>
                                </div>
                            </motion.div>
                            {service.heroImage && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                                    <img src={resolveImage(service.heroImage)} alt={service.title} className="w-full h-auto rounded-3xl shadow-2xl" />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* ===== CORE OFFERINGS ===== */}
                {Array.isArray(coreOfferings) && coreOfferings.length > 0 && (
                    <section className="py-24 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our {service.title} Services</h2>
                            <p className="text-xl text-gray-600 mb-16 max-w-3xl">Everything you need to succeed, delivered by our expert team.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {coreOfferings.map((item, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                                        {item.icon && <div className="text-4xl mb-4">{item.icon}</div>}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title || item.name}</h3>
                                        {item.description && <p className="text-gray-500 leading-relaxed">{item.description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== PLATFORM EXPERTISE ===== */}
                {Array.isArray(platformExpertise) && platformExpertise.length > 0 && (
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Platform Expertise</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {platformExpertise.map((platform, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 text-center group">
                                        {platform.icon && <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{platform.icon}</div>}
                                        <h3 className="font-bold text-gray-900">{platform.name || platform.title}</h3>
                                        {platform.description && <p className="text-sm text-gray-500 mt-2">{platform.description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== PROCESS STEPS ===== */}
                {Array.isArray(processSteps) && processSteps.length > 0 && (
                    <section className="py-24 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Work</h2>
                            <p className="text-xl text-gray-600 mb-16 max-w-3xl">Our proven process ensures quality, transparency, and results at every step.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {processSteps.map((step, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                        <div className="text-6xl font-bold text-[#0FB5B7] mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title || step.name}</h3>
                                        {step.description && <p className="text-gray-500 leading-relaxed">{step.description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== TECH STACK ===== */}
                {techStack && (
                    <TechStackSection techStack={techStack} />
                )}

                {/* ===== INDUSTRIES ===== */}
                {Array.isArray(industries) && industries.length > 0 && (
                    <section className="py-24 bg-gray-900 text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
                            <p className="text-xl text-gray-400 mb-16 max-w-3xl">We bring specialized expertise across diverse sectors.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {industries.map((ind, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                        whileHover={{ y: -5 }}
                                        className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-[#0FB5B7] transition-all duration-300 flex flex-col items-center text-center group">
                                        {ind.icon && <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{ind.icon}</div>}
                                        <h3 className="text-lg font-semibold">{ind.name || ind.title}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== BENEFITS ===== */}
                {Array.isArray(benefits) && benefits.length > 0 && (
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Why Choose Us</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {benefits.map((b, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                                        <div className="flex-shrink-0 w-10 h-10 bg-[#0FB5B7] rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{b.title || b.name || b}</h3>
                                            {b.description && <p className="text-gray-500 text-sm">{b.description}</p>}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== TIMELINE ===== */}
                {Array.isArray(timeline) && timeline.length > 0 && (
                    <section className="py-24 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Our Delivery Timeline</h2>
                            <div className="flex flex-col md:flex-row gap-6 justify-center">
                                {timeline.map((t, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                        className="flex-1 min-w-0 bg-white p-6 rounded-2xl border-l-4 border-[#0FB5B7] shadow-sm">
                                        <div className="text-[#0FB5B7] font-bold mb-2">{t.duration || t.time}</div>
                                        <h3 className="font-bold text-gray-900">{t.milestone || t.title}</h3>
                                        {t.description && <p className="text-gray-500 text-sm mt-1">{t.description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== MAINTENANCE ===== */}
                {Array.isArray(maintenance) && maintenance.length > 0 && (
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Post-Launch Support</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {maintenance.map((m, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                                        {m.icon && <div className="text-4xl mb-4">{m.icon}</div>}
                                        <h3 className="font-bold text-gray-900 mb-2">{m.title || m.name}</h3>
                                        {m.description && <p className="text-gray-500 text-sm">{m.description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== TESTIMONIALS ===== */}
                {Array.isArray(testimonials) && testimonials.length > 0 && (
                    <section className="py-24 bg-gray-900 text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">What Our Clients Say</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {testimonials.map((t, i) => (
                                    <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                                        <p className="text-gray-300 italic mb-6">"{t.quote || t.text}"</p>
                                        <div className="flex items-center gap-3">
                                            {t.avatar && <img src={resolveImage(t.avatar)} alt={t.name} className="w-12 h-12 rounded-full object-cover" />}
                                            <div>
                                                <p className="font-bold">{t.name}</p>
                                                {t.role && <p className="text-gray-400 text-sm">{t.role}</p>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== CASE STUDIES ===== */}
                {Array.isArray(caseStudies) && caseStudies.length > 0 && (
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">Success Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {caseStudies.map((cs, i) => (
                                    <Link key={i} href={`/Work/${cs.id || cs.projectId || '#'}`} className="group block">
                                        <div className="rounded-3xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300">
                                            {cs.image && (
                                                <div className="h-64 overflow-hidden">
                                                    <img src={resolveImage(cs.image)} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                            )}
                                            <div className="p-8">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cs.title}</h3>
                                                {cs.description && <p className="text-gray-500">{cs.description}</p>}
                                                <span className="inline-block mt-4 text-[#0FB5B7] font-semibold">View Case Study →</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== FAQ ===== */}
                {Array.isArray(faq) && faq.length > 0 && (
                    <FaqSection faq={faq} />
                )}

                {/* ===== CTA ===== */}
                <section className="py-24 bg-black text-white text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">{service.ctaTitle || `Ready to Start Your ${service.title} Project?`}</h2>
                        {service.ctaText && <p className="text-xl text-gray-400 mb-10">{service.ctaText}</p>}
                        <Link
                            href="/ContactUs"
                            className="inline-block px-12 py-5 bg-[#0FB5B7] text-white rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                        >
                            {service.ctaButtonText || 'Get A Free Consultation'}
                        </Link>
                    </div>
                </section>

            </div>
        </UserLayout>
    );
}

// ── helper: safely parse JSON field ──────────────────────────────────────────
function tryParse(value) {
    if (!value) return null;
    if (typeof value === 'object') return value; // already parsed
    try { return JSON.parse(value); } catch { return null; }
}

// ── Tech Stack with tabs ─────────────────────────────────────────────────────
function TechStackSection({ techStack }) {
    const parsed = typeof techStack === 'object' ? techStack : tryParse(techStack);
    if (!parsed) return null;

    const isGrouped = !Array.isArray(parsed) && typeof parsed === 'object';
    const groups = isGrouped ? parsed : { Technologies: Array.isArray(parsed) ? parsed : [] };
    const tabs = Object.keys(groups);
    const [active, setActive] = useState(tabs[0]);

    if (!tabs.length) return null;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Our Tech Stack</h2>
                {tabs.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {tabs.map((tab) => (
                            <button key={tab} onClick={() => setActive(tab)}
                                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${active === tab ? 'bg-[#0FB5B7] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {(groups[active] || []).map((tech, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                            className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                            {tech.icon ? (
                                <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <img src={resolveImage(tech.icon)} alt={tech.name} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                                </div>
                            ) : (
                                <div className="w-16 h-16 bg-white rounded-xl mb-4 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                    <span className="text-2xl font-bold text-[#0FB5B7]">{(tech.name || tech)[0]}</span>
                                </div>
                            )}
                            <span className="text-gray-700 font-medium text-center">{tech.name || tech}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── FAQ Accordion ────────────────────────────────────────────────────────────
function FaqSection({ faq }) {
    const [open, setOpen] = useState(null);
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-4">
                    {faq.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex justify-between items-center px-8 py-6 text-left">
                                <span className="text-lg font-semibold text-gray-900">{item.question || item.q}</span>
                                <span className="text-2xl text-gray-400 ml-4">{open === i ? '−' : '+'}</span>
                            </button>
                            {open === i && (
                                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                                    {item.answer || item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
