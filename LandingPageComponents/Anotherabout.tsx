"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeAboutSection() {
    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#F5FAFF] to-[#E9F1FB]">

            {/* Soft floating blob */}
            <div className="absolute -top-28 -left-32 w-[450px] h-[450px] bg-[#DDEBFF] rounded-full blur-[120px] opacity-60" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C7D9F7] rounded-full blur-[160px] opacity-40" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT: TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#072039] leading-tight">
                        About{" "}
                        <span className="bg-gradient-to-r from-[#0F4C81] to-[#0086B3] bg-clip-text text-transparent">
                            ITSASOO SOLUTIONS
                        </span>
                    </h2>

                    <p className="text-lg text-[#3A4C61] leading-relaxed">
                        Founded in 2024, ITSASOO Solutions Pvt. Ltd. delivers{" "}
                        <strong className="text-[#0F4C81]">
                            Finance & Accounting Outsourcing, IT Services, and Digital Marketing
                        </strong>{" "}
                        to global firms with unmatched accuracy, transparency, compliance, and speed.
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-4">
                        {[
                            "Precision-driven finance & compliance operations",
                            "Smart digital & IT transformations for modern enterprises",
                            "Scalable outsourcing teams trusted globally",
                        ].map((point, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="mt-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#0F4C81] to-[#0085B2]" />
                                <p className="text-[#2D4555] leading-relaxed">{point}</p>
                            </div>
                        ))}
                    </div>

                    <Link href="/about">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.3 }}
                            className="
                                mt-8 px-10 py-4 text-white font-semibold 
                                rounded-xl shadow-lg 
                                bg-gradient-to-r from-[#0F4C81] to-[#0086B3]
                                hover:shadow-xl 
                                transition-all
                            "
                        >
                            Learn More About Us →
                        </motion.button>
                    </Link>
                </motion.div>

                {/* RIGHT: PREMIUM CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div
                        className="
                            relative p-10 rounded-3xl overflow-hidden
                            bg-gradient-to-b from-[#0A1A2F] to-[#0D2238]
                            text-white
                            shadow-[0_12px_40px_rgba(0,0,0,0.28)]
                            border border-white/10
                        "
                    >
                        {/* Glow */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-[90px]" />

                        <h3 className="text-3xl font-bold mb-4 relative z-10">Who We Are</h3>

                        <p className="text-blue-100 leading-relaxed relative z-10">
                            A modern outsourcing & technology company supporting global
                            accounting firms, enterprises, and fast-growing businesses.
                            We are driven by innovation, accuracy, and uncompromised client service.
                        </p>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-6 relative z-10">
                            <div className="p-5 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-center">
                                <div className="text-4xl font-bold text-blue-300">2024</div>
                                <div className="text-sm text-blue-100 mt-1">Founded</div>
                            </div>

                            <div className="p-5 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-center">
                                <div className="text-4xl font-bold text-blue-300">3+</div>
                                <div className="text-sm text-blue-100 mt-1">Core Services</div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
