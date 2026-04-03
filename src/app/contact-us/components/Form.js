'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TEAL = '#0FB5B7';
const TEAL_DARK = '#0a8e90';

const interests = ['Custom Software', 'Mobile App', 'UX/UI Design', 'Web Development', 'E-commerce', 'AI Solution'];

const steps = [
    { num: '01', title: 'Tell Us Your Idea', desc: 'Fill out the form and share your project scope, timeframes, or business challenges.' },
    { num: '02', title: 'Expert Review', desc: 'Our team thoroughly reviews your request and prepares a tailored response just for you.' },
    { num: '03', title: 'Lets Build Together', desc: 'We align on strategy, kick off planning, and bring your vision to life — fast.' },
];

const ContactUsForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [selected, setSelected] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const toggle = (item) => setSelected(p => p.includes(item) ? p.filter(x => x !== item) : [...p, item]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { ...formData, interests: selected });
        setSubmitted(true);
    };

    return (
        <section className="relative overflow-hidden min-h-screen" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2235 50%, #0a1628 100%)' }}>

            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20" style={{ background: TEAL, transform: 'translate(-30%, -30%)' }} />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-15" style={{ background: TEAL_DARK, transform: 'translate(30%, 30%)' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* ── LEFT: Info Side ── */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-white"
                >
                    {/* Label */}
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 text-white" style={{ background: 'rgba(15,181,183,0.15)', border: '1px solid rgba(15,181,183,0.4)' }}>
                        Let's Work Together
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                        Got a{' '}
                        <span style={{ color: TEAL }}>Project</span>?
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-md">
                        Share the details of your project — like scope, timeframes, or business challenges. Our team will respond promptly with a tailored plan.
                    </p>

                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.15 }}
                                className="flex gap-5"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm" style={{ background: 'rgba(15,181,183,0.12)', color: TEAL, border: '1px solid rgba(15,181,183,0.3)' }}>
                                    {step.num}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-1">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact details */}
                    <div className="mt-12 pt-10 border-t border-white/10 flex flex-col gap-3">
                        <a href="tel:8669782220" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.3 10.8a11.374 11.374 0 005.9 5.9l1.413-1.924a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 16.72V20a2 2 0 01-2 2H17C9.163 22 2 14.837 2 7V5z" /></svg>
                            866-978-2220
                        </a>
                        <a href="mailto:info@rapidtechpro.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            info@rapidtechpro.com
                        </a>
                    </div>
                </motion.div>

                {/* ── RIGHT: Form Card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="rounded-3xl p-8 md:p-10"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}
                >
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(15,181,183,0.15)' }}>
                                <svg className="w-10 h-10" fill="none" stroke={TEAL} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
                            <p className="text-gray-400">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                            <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); setSelected([]); }} className="mt-8 px-8 py-3 rounded-full font-bold text-white transition-all" style={{ background: TEAL }}>
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">Send us a message</h2>
                                <p className="text-gray-400 text-sm">We typically respond within 24 hours.</p>
                            </div>

                            {/* Interest Chips */}
                            <div>
                                <p className="text-sm font-semibold text-gray-300 mb-3">I'm interested in</p>
                                <div className="flex flex-wrap gap-2">
                                    {interests.map(item => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => toggle(item)}
                                            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                                            style={selected.includes(item)
                                                ? { background: TEAL, color: '#fff', border: `1px solid ${TEAL}` }
                                                : { background: 'transparent', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.15)' }}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="peer w-full px-4 pt-5 pb-2 rounded-xl text-white text-sm outline-none transition-all"
                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                                    onFocus={e => e.target.style.borderColor = TEAL}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                                />
                                <label htmlFor="name" className="absolute left-4 top-1 text-xs font-semibold text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm transition-all">Full Name</label>
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                        className="peer w-full px-4 pt-5 pb-2 rounded-xl text-white text-sm outline-none transition-all"
                                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                                        onFocus={e => e.target.style.borderColor = TEAL}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                                    />
                                    <label htmlFor="email" className="absolute left-4 top-1 text-xs font-semibold text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm transition-all">Email</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder=" "
                                        className="peer w-full px-4 pt-5 pb-2 rounded-xl text-white text-sm outline-none transition-all"
                                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                                        onFocus={e => e.target.style.borderColor = TEAL}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                                    />
                                    <label htmlFor="phone" className="absolute left-4 top-1 text-xs font-semibold text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm transition-all">WhatsApp / Phone</label>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder=" "
                                    className="peer w-full px-4 pt-5 pb-2 rounded-xl text-white text-sm outline-none resize-none transition-all"
                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                                    onFocus={e => e.target.style.borderColor = TEAL}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                                />
                                <label htmlFor="message" className="absolute left-4 top-1 text-xs font-semibold text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm transition-all">Project Details / Message</label>
                            </div>

                            {/* Benefits row */}
                            <div className="flex flex-wrap justify-between gap-2 text-xs text-gray-500">
                                {['Free Consultancy', 'Road Map Execution', 'Collaboration', 'Execution Guidance'].map(b => (
                                    <span key={b} className="flex items-center gap-1">
                                        <svg className="w-3 h-3" fill={TEAL} viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                        {b}
                                    </span>
                                ))}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl font-black text-white text-base tracking-wide transition-all hover:opacity-90 hover:shadow-lg"
                                style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`, boxShadow: `0 8px 30px rgba(15,181,183,0.3)` }}
                            >
                                Send Message →
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                We'll keep your information in our CRM. Consult our{' '}
                                <a href="#" style={{ color: TEAL }} className="hover:underline">privacy policy</a>.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUsForm;
