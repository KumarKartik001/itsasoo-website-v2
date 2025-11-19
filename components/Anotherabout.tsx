"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeAboutSection() {
    return (
        <section className="relative py-20 bg-[#F4F9FF] overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-[#bcdcff] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center relative z-10">

                {/* LEFT: TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold text-[#062033] leading-tight">
                        About <span className="text-blue-600">ITSASOO SOLUTIONS</span>
                    </h2>

                    <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                        Founded in 2024, ITSASOO Solutions Pvt. Ltd. delivers
                        <strong> Finance & Accounting Outsourcing, IT Services, and Digital Marketing </strong>
                        to global firms with unmatched accuracy, transparency, compliance, and speed.
                    </p>

                    <div className="mt-6 space-y-3 text-slate-700">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                            Precision-driven finance & compliance operations
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                            Smart digital & IT transformations for modern enterprises
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                            Scalable outsourcing teams trusted globally
                        </div>
                    </div>

                    <Link href="/about">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition font-semibold"
                        >
                            Learn More About Us →
                        </motion.button>
                    </Link>
                </motion.div>

                {/* RIGHT: DARK CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="bg-[#0A1A2F] text-white rounded-3xl p-10 shadow-xl border border-blue-800/30">
                        <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
                        <p className="text-blue-100 leading-relaxed">
                            A modern outsourcing & technology company built to support global
                            accounting firms, enterprises, and fast-growing businesses.
                            Driven by innovation, accuracy, and uncompromised client service.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-5">
                            <div className="p-4 bg-white/10 rounded-xl text-center">
                                <div className="text-3xl font-bold text-blue-300">2024</div>
                                <div className="text-sm text-blue-100 mt-1">Founded</div>
                            </div>
                            <div className="p-4 bg-white/10 rounded-xl text-center">
                                <div className="text-3xl font-bold text-blue-300">3+</div>
                                <div className="text-sm text-blue-100 mt-1">Core Services</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
