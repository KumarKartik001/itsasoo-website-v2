"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Globe2, CheckCircle, ShieldCheck, Users, BarChart2 } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactUsPage() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: "",
        consent: false,
    });

    const serviceOptions = [
        "Finance & Accounting",
        "IT Services",
        "Digital Marketing",
        "Other",
    ];

    const faqs = [
        {
            q: "How quickly does your team respond?",
            a: "Our team responds typically within 1 business hour.",
        },
        {
            q: "Do you offer customized pricing?",
            a: "Yes, pricing is tailored based on your service needs and scale.",
        },
        {
            q: "What industries do you support?",
            a: "We serve Finance, IT, Digital marketing, Healthcare, Manufacturing, and more.",
        },
        {
            q: "What files do you need to start?",
            a: "We will request required documents during kickoff to ensure compliance.",
        },
        {
            q: "Do you provide NDAs?",
            a: "Absolutely, NDAs and confidentiality agreements are standard.",
        },
        {
            q: "How do you ensure data security?",
            a: "We use ISO-certified processes, SOC2 standards, and GDPR compliance.",
        },
        {
            q: "What timezones do you support?",
            a: "Our support operates 24×7 across all major global timezones.",
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <main className="bg-[#031A2F] text-white min-h-screen">
            {/* 1️⃣ Hero Section */}
            <section
                className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/contact/hero-bg.jpg')" }} // Placeholder image
            >
                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-20" />
                <div className="absolute inset-0 bg-[url('/effects/particles.png')] opacity-10" />
                <div className="absolute inset-0 bg-[url('/logos/itsasoo-watermark.svg')] opacity-5 bg-contain bg-center bg-no-repeat" />

                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    className="relative px-4 max-w-4xl text-center z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] bg-gradient-to-r from-blue-600  via-[#6fa9cf] to-blue-100 text-transparent bg-clip-text">
                        Contact ITSASOO SOLUTIONS PRIVATE LIMITED
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-blue-300">
                        We’re here to help you scale with precision, compliance & world-class support.
                    </p>
                    <div className="mt-12 flex justify-center gap-6 flex-wrap">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #4FC3F7" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#4FC3F7] text-[#031A2F] font-semibold rounded-lg px-14 py-4 text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-[#4FC3F7]/60 transition"
                        >
                            Send a Message
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #4FC3F7" }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-[#4FC3F7] text-[#4FC3F7] font-semibold rounded-lg px-14 py-4 text-lg shadow-lg hover:bg-[#4FC3F7] hover:text-[#031A2F] focus:outline-none focus:ring-4 focus:ring-[#4FC3F7]/60 transition"
                        >
                            Schedule a Call
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* 2️⃣ Contact Form Section */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-10 flex flex-col space-y-6 shadow-lg border border-[#4FC3F7]/30"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {[
                        { label: "Full Name", type: "text", name: "fullName", icon: <Users className="w-5 h-5 text-[#4FC3F7]" /> },
                        { label: "Email", type: "email", name: "email", icon: <Mail className="w-5 h-5 text-[#4FC3F7]" /> },
                        { label: "Phone", type: "tel", name: "phone", icon: <Phone className="w-5 h-5 text-[#4FC3F7]" /> },
                        { label: "Company", type: "text", name: "company", icon: <Globe2 className="w-5 h-5 text-[#4FC3F7]" /> },
                    ].map(({ label, type, name, icon }) => (
                        <div key={name} className="flex items-center border border-[#4FC3F7]/40 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#4FC3F7]">
                            <div className="p-3 bg-[#4FC3F7]/10 flex items-center justify-center">{icon}</div>
                            <input
                                type={type}
                                name={name}
                                placeholder={label}
                                value={form[name as keyof typeof form]}
                                onChange={handleChange}
                                required
                                className="flex-grow bg-transparent px-4 py-3 placeholder-[#BFD9E8] text-white focus:outline-none"
                            />
                        </div>
                    ))}

                    <div className="flex items-center border border-[#4FC3F7]/40 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#4FC3F7]">
                        <div className="p-3 bg-[#4FC3F7]/10 flex items-center justify-center">
                            <BarChart2 className="w-5 h-5 text-[#4FC3F7]" />
                        </div>
                        <select
                            name="serviceType"
                            value={form.serviceType}
                            onChange={handleChange}
                            required
                            className="flex-grow bg-transparent px-4 py-3 text-white placeholder-[#BFD9E8] focus:outline-none"
                        >
                            <option value="" disabled>
                                Select Service Type
                            </option>
                            <option value="Finance & Accounting">Finance & Accounting</option>
                            <option value="IT Services">IT Services</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="resize-none bg-white bg-opacity-10 rounded-lg p-4 placeholder-[#BFD9E8] text-white focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
                    />

                    <label className="inline-flex items-center space-x-3">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={form.consent}
                            onChange={handleChange}
                            required
                            className="form-checkbox h-5 w-5 text-[#4FC3F7] rounded transition duration-200"
                        />
                        <span className="text-white text-sm">I consent to providing my data for this inquiry.</span>
                    </label>

                    <motion.button
                        whileHover={{ boxShadow: "0 0 15px #4FC3F7" }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={!form.consent}
                        className="bg-[#4FC3F7] disabled:opacity-60 disabled:cursor-not-allowed text-[#031A2F] font-semibold rounded-lg px-10 py-4 text-xl shadow-lg focus:outline-none transition"
                    >
                        Send Message →
                    </motion.button>
                </motion.form>

                {/* Contact Information Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0A2E4D] rounded-3xl p-10 shadow-xl flex flex-col justify-between"
                >
                    <h3 className="text-white text-3xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <Mail className="text-[#4FC3F7] w-6 h-6" />
                            <a href="mailto:contact@itsasoo.com" className="text-[#BFD9E8] hover:text-[#4FC3F7] transition">
                                contact@itsasoo.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Phone className="text-[#4FC3F7] w-6 h-6" />
                            <div>
                                <p className="text-[#BFD9E8]">+91 XXXXX XXXXX</p>
                                <p className="text-[#BFD9E8]">+1 (XXX) XXX-XXXX</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-[#4FC3F7] w-6 h-6 mt-1" />
                            <address className="not-italic text-[#BFD9E8]">
                                ITSASOO Solutions Pvt Ltd<br />
                                Corporate HQ, India
                            </address>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Clock className="text-[#4FC3F7] w-6 h-6" />
                            <p className="text-[#BFD9E8]">24×7 Support for Global Clients</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 3️⃣ Contact Information Grid */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
                {[
                    {
                        icon: <Mail className="w-10 h-10 text-[#4FC3F7]" />,
                        title: "Email",
                        content: "contact@itsasoo.com",
                    },
                    {
                        icon: <Phone className="w-10 h-10 text-[#4FC3F7]" />,
                        title: "Phone",
                        content: ["+91 XXXXX XXXXX", "+1 (XXX) XXX-XXXX"],
                    },
                    {
                        icon: <MapPin className="w-10 h-10 text-[#4FC3F7]" />,
                        title: "Office Address",
                        content: [
                            "India (HQ)",
                            "USA, Canada, UK, Australia, New Zealand",
                        ],
                    },
                    {
                        icon: <Clock className="w-10 h-10 text-[#4FC3F7]" />,
                        title: "Business Hours",
                        content: "24×7 Support for Global Clients",
                    },
                ].map(({ icon, title, content }, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(79,195,247,0.4)" }}
                        className="bg-[#0A2E4D] rounded-2xl p-6 text-center cursor-default"
                    >
                        <div className="flex justify-center mb-4">{icon}</div>
                        <h4 className="text-white text-xl font-semibold mb-2">{title}</h4>
                        {Array.isArray(content) ? (
                            content.map((line, idx) => (
                                <p key={idx} className="text-[#BFD9E8] mb-1">
                                    {line}
                                </p>
                            ))
                        ) : (
                            <p className="text-[#BFD9E8]">{content}</p>
                        )}
                    </motion.div>
                ))}
            </section>

            {/* 4️⃣ Interactive Map Section */}
            <section className="relative max-w-7xl mx-auto px-6 py-20 text-center">
                <h2 className="text-white text-4xl font-bold mb-12">Our Global Presence</h2>
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="/maps/world-map-muted.svg" // Placeholder subtle map image
                        alt="Global Presence Map"
                        className="w-full h-full object-cover grayscale brightness-75"
                    />
                    {/* Example Pins */}
                    {[
                        { name: "India (HQ)", x: "58%", y: "74%" },
                        { name: "USA", x: "18%", y: "43%" },
                        { name: "Canada", x: "13%", y: "32%" },
                        { name: "UK", x: "22%", y: "31%" },
                        { name: "Australia", x: "73%", y: "86%" },
                        { name: "New Zealand", x: "84%", y: "92%" },
                    ].map(({ name, x, y }) => (
                        <div
                            key={name}
                            className="absolute bg-[#4FC3F7] rounded-full w-5 h-5 shadow-lg animate-ping-slow"
                            style={{ top: y, left: x, transform: "translate(-50%, -50%)" }}
                            title={name}
                        />
                    ))}
                </div>
            </section>

            {/* 5️⃣ Live Support Section (Optional) */}
            <section className="fixed bottom-8 right-8 z-50">
                <div className="bg-[#4FC3F7] text-[#031A2F] rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 transform transition">
                    <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 16v-2a2 2 0 00-2-2H7l-4 4v2a2 2 0 002 2h12l4-4z" />
                    </svg>
                    <span className="sr-only">Talk to our support assistant</span>
                </div>
            </section>

            {/* 6️⃣ FAQ Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <h2 className="text-white text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto space-y-4 text-white">
                    {[
                        { q: "How quickly does your team respond?", a: "Typically within 1 hour during business hours." },
                        { q: "Do you offer customized pricing?", a: "Yes, we tailor pricing to your requirements and scale." },
                        { q: "What industries do you support?", a: "Finance, IT, healthcare, e-commerce, and more." },
                        { q: "What files do you need to start?", a: "We will request these during project kickoff for compliance." },
                        { q: "Do you provide NDAs?", a: "Absolutely, confidentiality is guaranteed with signed NDAs." },
                        { q: "How do you ensure data security?", a: "We follow ISO and SOC2 standards with GDPR compliance." },
                        { q: "What timezones do you support?", a: "Our support operates 24/7 across global timezones." },
                    ].map(({ q, a }, i) => (
                        <details key={i} className="border border-[#4FC3F7]/40 rounded-lg p-4 bg-[#0A2E4D] cursor-pointer">
                            <summary className="text-lg font-semibold">{q}</summary>
                            <p className="mt-2 text-[#BFD9E8]">{a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* 7️⃣ CTA Strip */}
            <section
                className="py-20 bg-gradient-to-r from-[#031A2F] via-[#064A7F] to-[#4FC3F7] text-white text-center relative overflow-hidden"
            >
                <div className="max-w-4xl mx-auto px-6 z-20 relative">
                    <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
                        Ready to Transform Your Finance, IT & Digital Operations?
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px #4FC3F7" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-[#031A2F] rounded-full px-16 py-4 font-semibold shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-[#4FC3F7]/70 transition"
                    >
                        Get Started
                    </motion.button>
                </div>
                <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-10 pointer-events-none" />
            </section>

            {/* 8️⃣ Social Proof Section (Optional) */}
            <section className="max-w-7xl mx-auto px-6 py-12 flex justify-center space-x-8 filter grayscale opacity-60">
                {[1, 2, 3, 4, 5].map((n) => (
                    <img key={n} src={`/clients/logo${n}.svg`} alt="Client logo" className="h-12 w-auto" />
                ))}
            </section>

            {/* 9️⃣ Success Metrics */}
            <section className="bg-[#062033] py-16 px-6 text-white max-w-7xl mx-auto rounded-xl flex flex-wrap justify-around gap-8 text-center">
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-extrabold text-[#4FC3F7]">120+</span>
                    <span>Global Clients</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-extrabold text-[#4FC3F7]">99.4%</span>
                    <span>Accuracy</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-extrabold text-[#4FC3F7]">24×7</span>
                    <span>Dedicated Support</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-extrabold text-[#4FC3F7]">5</span>
                    <span>Global Delivery Centers</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-extrabold text-[#4FC3F7]">6+</span>
                    <span>Years Combined Team Expertise</span>
                </div>
            </section>

            {/* 1️⃣0️⃣ Compliance / Security Strip */}
            <section className="bg-[#031A2F] text-[#4FC3F7] py-6 flex justify-center gap-12 max-w-7xl mx-auto">
                {[
                    { label: "ISO Certified", icon: <ShieldCheck className="w-6 h-6" /> },
                    { label: "SOC 2 Standards", icon: <ShieldCheck className="w-6 h-6" /> },
                    { label: "GDPR Compliance", icon: <ShieldCheck className="w-6 h-6" /> },
                    { label: "NDA & Data Security", icon: <ShieldCheck className="w-6 h-6" /> },
                ].map(({ label, icon }, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm">
                        {icon}
                        <span>{label}</span>
                    </div>
                ))}
            </section>

            {/* 1️⃣1️⃣ Footer (Imported or Built Separately) */}
        </main>
    );
}
