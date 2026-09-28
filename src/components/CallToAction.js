'use client';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popupSlice';

export default function CallToAction() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data && data.success) {
        setSubmitted(true);
      } else {
        setError(data?.message || 'Failed to send. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email info@rapidtechpro.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#000000] text-white" id="home-contact">
      {/* Subtle glow */}
      <div className="absolute top-0 left-[-15%] w-[50%] h-[50%] bg-[#0FB5B7]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="site-full-grid relative z-10 pt-14 pb-[70px] md:pt-24 lg:pt-[152px]">
        <div className="site-full-grid-inner">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left - Big "Let's talk" */}
            <div>
              <h2 className="text-[56px] sm:text-[80px] lg:text-[120px] font-bold leading-none tracking-tight text-white">
                <span className="text-grey">Let&apos;s</span>
                <br />talk
              </h2>
              <p className="mt-12 md:mt-16 max-w-[520px] text-[18px] md:text-[20px] font-medium leading-snug text-white/50">
                <span className="text-white">Have an idea in mind </span>
                <span className="text-white/50">— website, app, or software product? Let us make it real.</span>
              </p>

              {/* Awards / Trust Signals */}
              <div className="mt-10 sm:mt-12">
                <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/40 sm:text-[14px]">
                  Trusted By Businesses Worldwide
                </span>
                <div className="mt-6 flex flex-wrap items-center gap-6 sm:gap-10">
                  <div className="flex items-center gap-2 bg-white/[0.05] px-4 py-2 rounded-xl border border-white/[0.06]">
                    <img src="/business/google.png" alt="Google" className="h-4 w-auto object-contain" loading="lazy" />
                    <span className="text-white/80 text-sm font-semibold">4.9</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.05] px-4 py-2 rounded-xl border border-white/[0.06]">
                    <img src="/business/clutch.png" alt="Clutch" className="h-4 w-auto object-contain" loading="lazy" />
                    <span className="text-white/80 text-sm font-semibold">5.0</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.05] px-4 py-2 rounded-xl border border-white/[0.06]">
                    <img src="/business/trustpilot.png" alt="Trustpilot" className="h-4 w-auto object-contain" loading="lazy" />
                    <span className="text-white/80 text-sm font-semibold">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form Glass */}
            <div className="home-contact-form-glass relative z-10 w-full min-w-0 max-w-[648px] overflow-hidden rounded-[20px] p-6 sm:rounded-[24px] sm:p-8 md:p-10 lg:p-[48px]">
              <div className="mb-7">
                <h3 className="text-[28px] md:text-[36px] font-bold leading-none tracking-tight text-white">Let&apos;s talk</h3>
                <p className="mt-4 max-w-[420px] text-[15px] font-medium leading-relaxed text-white/60">
                  Let&apos;s build something that outlasts the trend cycle.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center text-white">
                  <div className="w-14 h-14 rounded-full bg-[#0FB5B7]/20 text-[#0FB5B7] flex items-center justify-center text-2xl font-bold mb-4">✓</div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-sm text-white/50 max-w-xs mb-6">Thank you for reaching out. Our team will contact you shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                    className="px-5 py-2 rounded-lg bg-[#0FB5B7] text-white text-sm font-bold hover:brightness-110 transition"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="home-contact-form">
                  <div className="flex w-full max-w-[528px] flex-col gap-y-5">
                    {error && (
                      <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-xs text-center font-medium">
                        {error}
                      </div>
                    )}
                    <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-4">
                      <div className="w-full min-w-0 sm:flex-1">
                        <div className="home-contact-field-shell w-full">
                          <input
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Name*"
                            required
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className="home-contact-field block w-full rounded-[6px] px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus-visible:outline-none bg-transparent"
                          />
                        </div>
                      </div>
                      <div className="w-full min-w-0 sm:flex-1">
                        <div className="home-contact-field-shell w-full">
                          <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Email*"
                            required
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className="home-contact-field block w-full rounded-[6px] px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus-visible:outline-none bg-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="home-contact-field-shell w-full">
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="Phone number"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="home-contact-field block w-full rounded-[6px] px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus-visible:outline-none bg-transparent"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="home-contact-field-shell w-full">
                        <textarea
                          name="message"
                          placeholder="Tell us about your project*"
                          required
                          rows={4}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          className="home-contact-field block w-full rounded-[6px] px-4 py-3.5 text-[15px] text-white outline-none resize-none placeholder:text-white/40 focus-visible:outline-none bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative inline-flex w-fit shrink-0 items-center overflow-hidden rounded-full py-0.5 pl-0.5 font-semibold transition-colors h-[46px] pr-6 text-[13px] border border-white/25 bg-transparent hover:bg-white/5 disabled:opacity-50 mt-2"
                    >
                      <span aria-hidden="true" className="absolute left-0.5 top-0.5 bottom-0.5 rounded-full transition-[width] duration-500 ease-out group-hover:w-[calc(100%-0.25rem)] w-[38px] bg-[#0FB5B7]" />
                      <span className="relative z-10 flex items-center gap-2.5">
                        <span className="flex shrink-0 items-center justify-center h-[38px] w-[38px]">
                          <FaArrowRight className="text-white text-xs -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                        </span>
                        <span className="pl-0.5 pr-0.5 transition-colors duration-300 text-white/80 group-hover:text-white whitespace-nowrap">
                          {loading ? 'Sending...' : 'Send message'}
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}