"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Globe2 } from "lucide-react";

export default function FinanceOutsourcing() {


    return (
        <div className="w-full overflow-hidden">

            {/* ========================================================= */}
            {/* HERO SECTION                                               */}
            {/* ========================================================= */}
            <section className="relative h-[90vh] w-full flex items-center justify-center text-white overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/finance.jpg')" }}
                ></div>

                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

                <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-20"></div>
                <div className="absolute inset-0 bg-[url('/effects/particles.png')] opacity-10"></div>

                <div className="relative max-w-4xl text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold leading-tight"
                    >
                        Finance & Accounts <span className="text-blue-500">Outsourcing</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-lg md:text-xl text-blue-100 mt-4"
                    >
                        Precision-driven finance operations for global scalability, compliance, and performance.
                    </motion.p>
                </div>
            </section>


            {/* ========================================================= */}
            {/* SECTION 1 — OVERVIEW (LIGHT BLUE)                          */}
            {/* ========================================================= */}
            <section className="py-24 bg-[#E9F3FF]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/finance/overview1.jpg"
                                className="w-full h-full object-cover"
                                alt="Finance Overview"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#0B1B2E]">
                            End-to-End Finance Process Management
                        </h2>
                        <p className="text-gray-700 mt-4 leading-relaxed text-lg">
                            We manage your finance operations with precision — allowing your business
                            to scale with confidence while staying compliant and audit-ready across
                            global markets.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* SECTION 2 — BENEFITS (DARK BLUE)                           */}
            {/* ========================================================= */}
            <section className="py-24 bg-[#032542] text-white relative overflow-hidden">

                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 0.2, scale: 1.1 }}
                    transition={{ duration: 2 }}
                    className="absolute right-[-200px] top-[-200px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
                />

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl font-bold">Why Outsource With Us?</h2>

                        <ul className="mt-6 space-y-4 text-lg">
                            {[
                                "Global accounting standards (GAAP, IFRS)",
                                "Cost-effective operational scaling",
                                "Real-time financial reporting",
                                "Dedicated accounting specialists",
                                "Regulatory & tax compliance management",
                                "Zero-error automated workflows",
                            ].map((point) => (
                                <li key={point} className="flex items-start gap-3">
                                    <CheckCircle className="text-blue-300 w-6 h-6 mt-1" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/finance/benefits1.jpg"
                                className="w-full h-full object-cover"
                                alt="Benefits"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* SECTION — COUNTRIES WE SERVE (PREMIUM + FLAG BACKGROUNDS) */}
            {/* ========================================================= */}

            <section className="py-24 bg-[#E9F3FF]">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-[#0B1B2E]"
                    >
                        Countries <span className="text-blue-800">We Serve</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-3 text-gray-600 max-w-2xl mx-auto"
                    >
                        Delivering compliant, high-accuracy finance outsourcing across multiple global regions.
                    </motion.p>

                    {/* CARD GRID */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

                        {[
                            { name: "USA", link: "/services/finance/usa", flag: "/finance/countries/usa/usa.jpg" },
                            { name: "Canada", link: "/services/finance/canada", flag: "/finance/countries/canada/canada.jpg" },
                            { name: "United Kingdom", link: "/services/finance/uk", flag: "/finance/countries/uk/uk.jpg" },
                            { name: "Australia", link: "/services/finance/australia", flag: "/finance/countries/australia/australia.jpg" },
                            { name: "New Zealand", link: "/services/finance/newzealand", flag: "/finance/countries/newzealand/newzealand.jpg" },
                            { name: "India & Other Countries", link: "/services/finance/india", flag: "/finance/countries/india/india.jpg" },
                        ].map((country, i) => (
                            <Link href={country.link} key={country.name} className="w-full max-w-[330px]">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.07 }}
                                    className="
                            relative w-full h-[220px] rounded-2xl shadow-lg overflow-hidden
                            cursor-pointer transition-all duration-300 ease-out
                            hover:shadow-2xl
                        "
                                >

                                    {/* Background Flag Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${country.flag})` }}
                                    ></div>

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/45"></div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                                        <Globe2 className="text-white w-10 h-10 mb-4 opacity-90" />
                                        <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                                        <p className="text-blue-100 text-sm mt-2">
                                            Finance operations for {country.name}
                                        </p>
                                    </div>

                                </motion.div>
                            </Link>
                        ))}

                    </div>

                </div>
            </section>


            {/* ========================================================= */}
            {/* CTA SECTION                                                */}
            {/* ========================================================= */}
            <section className="py-24 bg-linear-to-r from-blue-100 to-blue-200 text-blue-950 text-center">
                <h2 className="text-4xl font-extrabold">Ready to Optimize Your Finance Operations?</h2>
                <p className="text-blue-900 mt-4 text-lg font-bold">
                    Let our finance specialists take your business to global standards.
                </p>

                <a
                    href="/contact"
                    className="mt-8 inline-block bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-lg 
                    hover:shadow-xl hover:bg-blue-50 transition"
                >
                    Get Started
                </a>
            </section>

        </div>
    );
}
