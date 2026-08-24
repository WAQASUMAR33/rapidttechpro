'use client';
import React, { useState } from 'react';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data && data.success) {
                setSubmitted(true);
            } else {
                setError(data?.message || 'Failed to send message. Please try again.');
            }
        } catch (err) {
            console.error('Help form submission error:', err);
            setError('Something went wrong. Please try again or email info@rapidtechpro.com.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" relative  bg-black mx-auto px-4   ">
            {/* Optional Overlay */}
            <div className="absolute inset-0  opacity-40 "></div>

            <div className="relative flex flex-col-reverse gap-4  md:flex-row-reverse space-y-8 md:space-y-0 md:space-x-8 px-2 py-16 md:px-12 md:py-20">
                {/* Left Side: Contact Form */}
                <div className="flex flex-col w-full md:w-1/2 rounded-2xl p-6 md:p-8 bg-black/70 backdrop-blur-lg">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-white">
                            <div className="w-16 h-16 rounded-full bg-[#0FB5B7]/20 text-[#0FB5B7] flex items-center justify-center text-2xl font-bold mb-4">
                                ✓
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                            <p className="text-gray-400 text-sm max-w-sm">Thank you for getting in touch. Our team will review your message and reply promptly.</p>
                            <button
                                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                                className="mt-6 px-6 py-2.5 rounded-xl bg-[#0FB5B7] text-white font-bold text-sm hover:bg-[#0FB5B7]/80 transition"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            {error && (
                                <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs text-center font-medium">
                                    {error}
                                </div>
                            )}
                            <div>
                                <label htmlFor="name" className="block text-sm md:text-lg font-medium text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 mt-2 border text-white border-gray-300 bg-white/10 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm md:text-lg font-medium text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 mt-2 border text-white bg-white/10 border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm md:text-lg font-medium text-white">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full p-3 mt-2 border text-white bg-white/10 border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#0FB5B7] text-white hover:bg-[#0a8e90] py-3.5 rounded-xl font-bold transition duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? 'Sending Message...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col w-full md:w-1/2 items-center rounded-lg text-white p-6 bg-black/70 backdrop-blur-lg">
                    <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
                        Got an Idea for Your Project?
                    </h1>

                    <div className="w-full hidden md:flex flex-col md:flex-row gap-4 md:gap-8 mt-6">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 md:w-10 md:h-10 border border-white text-white text-lg md:text-3xl flex justify-center items-center rounded-full">
                                1
                            </div>
                            <div className="hidden md:block h-24 border-r-2 border-white"></div>
                            <div className="w-8 h-8 md:w-10 md:h-10 border border-white text-white text-lg md:text-3xl flex justify-center items-center rounded-full">
                                2
                            </div>
                            <div className="hidden md:block h-24 border-r-2 border-white"></div>
                            <div className="w-8 h-8 md:w-10 md:h-10 border border-white text-white text-lg md:text-3xl flex justify-center items-center rounded-full">
                                3
                            </div>
                        </div>

                        <div className="w-full flex flex-col space-y-4 md:space-y-6">
                            <div>
                                <h1 className="text-lg md:text-3xl font-bold">Contact Us</h1>
                                <p className="text-sm md:text-lg mt-2">
                                    Fill out our brief contact form, and we’ll be in touch soon to learn more about your business.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-lg md:text-3xl font-bold">Launch Targeted Campaigns</h1>
                                <p className="text-sm md:text-lg mt-2">
                                    Our digital marketing experts will work closely with you to implement strategies that drive growth.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-lg md:text-3xl font-bold">Achieve Lasting Growth</h1>
                                <p className="text-sm md:text-lg mt-2">
                                    Solidify your digital presence, expand your brand reach, and see results month-over-month.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;
