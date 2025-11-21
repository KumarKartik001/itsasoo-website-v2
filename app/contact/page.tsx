"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

/*
    Single-file production-ready Contact Page for Next.js App Router
    - Tailwind CSS classes used
    - Framer Motion for animations
    - Theme: ITSASOO (Deep Navy #031A2F, Accent #4FC3F7)
    Sections (Option B):
    Hero (dark + image)
    Contact Info (glass light)
    Contact Form (deep navy + glass form)
    FAQ (electric blue gradient subtle)
    Map (light gradient)
    Testimonials (dark glossy)
    CTA (dual-tone gradient)
    Footer (navy)

    NOTE: replace image URLs with your actual assets. I referenced /contact/contact_bg.jpg as hero background.
*/

const FadeUp = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay }}
    >
        {children}
    </motion.div>
);

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [sending, setSending] = useState(false);
    const [faqsOpen, setFaqsOpen] = useState({});

    const faqs = [
        { q: "How soon will we respond?", a: "We typically respond within 24 hours (business days). For priority support choose Schedule a Call." },
        { q: "Do you offer free consultations?", a: "Yes — we offer a complimentary discovery call to scope the project." },
        { q: "What industries do you serve?", a: "Finance, healthcare, e-commerce, SaaS, logistics and enterprise integrations." },
        { q: "How secure is my data?", a: "We follow industry-standard security (ISO, SOC2-ready). Data is encrypted in transit and at rest." },
    ];

    const testimonials = [
        { quote: "ITSASOO transformed our product and helped scale to millions of users.", name: "Riya Sharma", company: "FinEdge", country: "India" },
        { quote: "Exceptional engineering and communication. Highly recommended.", name: "David Miller", company: "HealthGrid", country: "USA" },
        { quote: "Very professional, delivered ahead of schedule.", name: "Amelia Clarke", company: "ShopPro", country: "UK" },
    ];

    function handleChange(e: { target: { name: any; value: any; }; }) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setSending(true);
        // Simulate sending — replace with actual API call
        setTimeout(() => {
            setSending(false);
            alert("Thanks — we received your message. We'll be in touch within 24 hours.");
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 900);
    }

    return (
        <div className="min-h-screen w-full bg-[#031A2F] text-white antialiased">
            {/* HERO (dark + image) */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <img
                    src="/contact/contact_bg.jpg"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover brightness-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Ambient shapes */}
                <div className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-[#4FC3F7]/20 blur-3xl mix-blend-screen" />
                <div className="absolute -right-28 bottom-10 w-72 h-72 rounded-full bg-[#4FC3F7]/10 blur-2xl mix-blend-screen" />

                <div className="relative top-2 z-10 max-w-5xl px-6 text-center">
                    <FadeUp>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]">
                            Let’s Build Something Incredible Together
                        </h1>
                    </FadeUp>

                    <FadeUp delay={0.12}>
                        <p className="mt-6 text-1xl text-extrabold  text-[#ffffff]  mx-auto">
                            Whether you want to discuss a project, start a partnership, or simply ask a question — we’re here to help.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.24}>
                        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                            <a href="#contact-form" className="inline-block">
                                <motion.button
                                    whileHover={{ scale: 1.03, boxShadow: "0 8px 40px rgba(79,195,247,0.28)" }}
                                    className="rounded-2xl bg-gradient-to-r from-[#4FC3F7] to-[#7ED8FB] text-[#031A2F] text-2xl font-semibold px-8 py-3 shadow-2xl"
                                >
                                    Get in Touch
                                </motion.button>
                            </a>

                            <a href="#schedule" className="inline-block">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    className="rounded-2xl border border-[#4FC3F7]/40 text-[#BFD9E8] px-8 py-3 font-semibold backdrop-blur-sm text-2xl"
                                >
                                    Schedule a Call
                                </motion.button>
                            </a>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.36}>
                        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-[#BFD9E8]/80">
                            <div className="flex items-center gap-3">
                                <svg width="18" height="18" fill="none" className="opacity-90"><circle cx="9" cy="9" r="8" stroke="#4FC3F7" /></svg>
                                <span>24×7 Global Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="18" height="18" fill="none" className="opacity-90"><rect x="2" y="2" width="14" height="14" stroke="#4FC3F7" rx="3" /></svg>
                                <span>ISO & SOC2 Ready</span>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                {/* decorative dots */}
                <div className="absolute right-6 top-6 text-[#4FC3F7]/10"> </div>
            </header>

            {/* Contact Info (glass light) */}
            <section className="relative bg-gradient-to-b from-white/80 via-[#E6F7FF]/60 to-white/80 text-[#031A2F] py-14">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
                            Contact Information
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                        {[
                            {
                                icon: "📧",
                                title: "Email",
                                lines: ["social@itsasoo.com"],
                                link: "mailto:social@itsasoo.com"
                            },
                            {
                                icon: "📞",
                                title: "Phone",
                                lines: ["+91 12052 95768"],
                                link: "tel:+911205295768"
                            },
                            {
                                icon: "📍",
                                title: "Office",
                                lines: ["India (HQ)"],
                                link: null
                            },
                            {
                                icon: "⏰",
                                title: "Hours",
                                lines: ["24×7 Support for clients"],
                                link: null
                            },
                        ].map((c, i) => {
                            const Wrapper: any = c.link ? "a" : "div"; // If link exists, use <a>, otherwise <div>

                            return (
                                <Wrapper
                                    key={i}
                                    href={c.link || undefined}
                                    className="
                            backdrop-blur-sm bg-white/60 border border-white/40 
                            shadow-lg rounded-2xl p-6 text-center cursor-pointer
                            transition-all hover:shadow-xl
                        "
                                    target={c.link?.startsWith("http") ? "_blank" : undefined}
                                >
                                    <motion.div whileHover={{ y: -6 }}>
                                        <div className="w-14 h-14 rounded-lg inline-flex items-center justify-center bg-gradient-to-br from-[#EAFBFF] to-white text-2xl mb-3 shadow-inner">
                                            {c.icon}
                                        </div>
                                        <h4 className="font-semibold text-2xl">{c.title}</h4>
                                        {c.lines.map((l, idx) => (
                                            <p key={idx} className="text-1xl mt-1">{l}</p>
                                        ))}
                                    </motion.div>
                                </Wrapper>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Contact Form (deep navy + glass form) */}
            <section id="contact-form" className="bg-[#031A2F] py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <FadeUp>
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-4">Let’s Build Something Great</h3>
                            <p className="text-[#BFD9E8] max-w-xl">Share a few details and our specialists will reach out with next steps. We typically reply within 24 hours.</p>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-[#0A2E4D] rounded-2xl border border-white/6 shadow-md">
                                    <h5 className="font-semibold">Trusted Security</h5>
                                    <p className="mt-2 text-sm text-[#BFD9E8]">ISO & SOC2-ready infrastructure and encrypted data.</p>
                                </div>
                                <div className="p-6 bg-[#0A2E4D] rounded-2xl border border-white/6 shadow-md">
                                    <h5 className="font-semibold">Experienced Team</h5>
                                    <p className="mt-2 text-sm text-[#BFD9E8]">Senior engineers, product managers and compliance specialists.</p>
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.08}>
                        <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-[#072335]/80 via-[#041726]/60 to-[#072335]/80 border border-[#4FC3F7]/10 p-8 rounded-3xl shadow-xl">
                            <div className="absolute -top-6 left-6 w-20 h-20 rounded-full bg-[#4FC3F7]/10 blur-2xl" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="px-4 py-3 rounded-xl bg-[#031A2F]/60 border border-white/6 outline-none" />
                                <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" type="email" className="px-4 py-3 rounded-xl bg-[#031A2F]/60 border border-white/6 outline-none" />
                                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="px-4 py-3 rounded-xl bg-[#031A2F]/60 border border-white/6 outline-none" />
                                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="px-4 py-3 rounded-xl bg-[#031A2F]/60 border border-white/6 outline-none" />
                            </div>

                            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project" rows={6} className="mt-4 w-full px-4 py-3 rounded-2xl bg-[#031A2F]/60 border border-white/6 outline-none" />

                            <div className="mt-4 flex items-center justify-between gap-4">
                                <button disabled={sending} className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4FC3F7] to-[#7ED8FB] text-[#031A2F] px-6 py-3 rounded-2xl font-semibold shadow-lg hover:opacity-95">
                                    {sending ? 'Sending…' : 'Send Message'}
                                </button>

                                <div className="text-sm text-[#BFD9E8]"> <svg width="16" height="16" className="inline-block mr-1"><rect width="14" height="10" x="1" y="3" stroke="#4FC3F7" rx="2" /></svg> Your data is secure & encrypted</div>
                            </div>
                        </form>
                    </FadeUp>
                </div>
            </section>

            {/* FAQ (electric blue gradient subtle) */}
            <section className="bg-gradient-to-b from-[#E8F9FF]/60 via-white/40 to-[#E8F9FF]/60 py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <FadeUp>
                        <h3 className="text-3xl font-bold text-center mb-8 text-[#031A2F]">Frequently Asked Questions</h3>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((f, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.01 }} className="p-6 rounded-2xl bg-white/90 border border-[#4FC3F7]/8">
                                <summary className="list-none text-[#031A2F] font-semibold">{f.q}</summary>
                                <p className="mt-3 text-sm text-[#0A2E4D]">{f.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map section (light gradient) */}
            {/* ================= MAP SECTION (Interactive Premium) ================= */}
            <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/50 to-white overflow-hidden">

                {/* Ambient shapes */}
                <div className="absolute -top-10 -left-20 w-60 h-60 bg-[#4FC3F7]/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4FC3F7]/10 blur-3xl rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* TEXT BLOCK */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="backdrop-blur-xl bg-white/60 rounded-3xl border border-white/50 shadow-xl p-10"
                    >
                        <h3 className="text-4xl font-extrabold text-[#031A2F] mb-4">
                            Find Us
                        </h3>

                        <p className="text-[#405A6B] leading-relaxed mb-8">
                            Visit our headquarters or explore our global offices.
                            Click below to open your location directly in Google Maps.
                        </p>

                        {/* Animated button */}
                        <motion.a
                            href="https://www.google.com/maps/place/PALM+RESORT/@28.7048117,77.4228071,627m/data=!3m1!1e3!4m6!3m5!1s0x390cf100492190fb:0x78ad7f49093157cf!8m2!3d28.704807!4d77.425382!16s%2Fg%2F11xfb395s0?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(79,195,247,0.45)" }}
                            className="inline-flex items-center gap-3 px-7 py-3 rounded-full 
                            bg-gradient-to-r from-[#4FC3F7] to-[#7ED8FB] 
                            text-[#031A2F] font-semibold shadow-lg"
                        >
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path stroke="#031A2F" strokeWidth="1.8"
                                    d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
                                <circle cx="12" cy="9" r="2.5" stroke="#031A2F" strokeWidth="1.8" />
                            </svg>

                            Open in Google Maps
                        </motion.a>
                    </motion.div>

                    {/* MAP BLOCK */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-3xl shadow-2xl overflow-hidden border border-[#4FC3F7]/20 bg-white"
                    >
                        {/* 
        ⭐ To Set Your Location:
        1. Go to https://maps.google.com
        2. Search your place
        3. Click 'Share'
        4. Click 'Embed a map'
        5. Copy the <iframe src="..."> link
        6. Replace ONLY the src="" below
      */}

                        <iframe
                            title="itsasoo-office-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.422209067686!2d77.42280707422611!3d28.70481168079703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf100492190fb%3A0x78ad7f49093157cf!2sPALM%20RESORT!5e1!3m2!1sen!2sin!4v1763682504112!5m2!1sen!2sin"
                            className="w-full h-[380px] lg:h-[460px] border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        ></iframe>
                    </motion.div>

                </div>
            </section>


            {/* Testimonials (dark glossy) */}
            <section className="bg-[#031A2F] py-16">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <FadeUp>
                        <h3 className="text-3xl font-bold mb-8">What Clients Say</h3>
                    </FadeUp>

                    <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-4 px-2">
                            {testimonials.map((t, i) => (
                                <motion.div key={i} whileHover={{ y: -6 }} className="min-w-[300px] bg-gradient-to-br from-[#072335]/80 to-[#041726]/70 border border-white/6 rounded-2xl p-6 shadow-2xl">
                                    <p className="text-[#BFD9E8] italic">“{t.quote}”</p>
                                    <div className="mt-4 text-sm">
                                        <strong className="text-white">{t.name}</strong>
                                        <div className="text-[#9fc2d8]">{t.company} — {t.country}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA (dual-tone gradient) */}
            <section className="py-20 bg-gradient-to-r from-[#062033] via-[#04243a] to-[#053047] text-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">Ready to start your project? Let’s talk.</motion.h2>
                    <p className="text-[#BFD9E8] mb-8">Our specialists will get back to you within 24 hours.</p>

                    <motion.a whileHover={{ scale: 1.04, boxShadow: '0 10px 40px rgba(79,195,247,0.25)' }} href="#contact-form" className="inline-block px-10 py-4 rounded-3xl bg-gradient-to-r from-[#4FC3F7] to-[#7ED8FB] text-[#031A2F] font-semibold">Contact Now</motion.a>
                </div>
            </section>
        </div>
    );
}
