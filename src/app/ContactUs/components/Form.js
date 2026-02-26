'use client';
import React, { useState } from 'react';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className=" relative  bg-cover mx-auto px-4   ">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/video/wireframe.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Optional Overlay */}
            <div className="absolute inset-0  opacity-40 "></div>

            <div className="relative flex flex-col-reverse gap-4  md:flex-row-reverse space-y-8 md:space-y-0 md:space-x-8 px-2 py-16 md:px-12 md:py-20">
                {/* Left Side: Contact Form */}
                <div className="flex flex-col w-full md:w-1/2 rounded-2xl p-6 md:p-8 bg-black/70 backdrop-blur-lg">
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                            className="w-full bg-white text-black hover:text-white py-3 rounded-xl hover:bg-black border-black hover:border-white transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
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
