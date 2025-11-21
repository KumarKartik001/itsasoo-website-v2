"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const easeBezier = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function AboutSection() {
    return (
        <section className="relative w-full py-28 bg-gradient-to-b from-[#F7F9FC] via-[#EEF3F9] to-[#F7FAFF] overflow-hidden">

            {/* Soft enterprise background blobs */}
            <div className="absolute -top-32 -left-20 w-[380px] h-[380px] bg-[#E1EAF4] rounded-full blur-[120px] opacity-60" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#DDE7F5] rounded-full blur-[140px] opacity-70" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE — Premium Text Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: easeBezier }}
                        className="space-y-8"
                    >
                        {/* Section Tag */}
                        <div className="inline-flex px-4 py-1.5 rounded-full bg-white/60 backdrop-blur border border-[#D4DFEA] text-sm text-[#3E5167] shadow-sm">
                            ABOUT ITSASOO
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0C1B2E] leading-tight tracking-tight">
                            Modernizing Finance & Technology
                            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#1D3557] to-[#335E89]">
                                with Enterprise Precision
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-[#3A4B61] leading-relaxed max-w-xl">
                            ITSASOO SOLUTIONS PRIVATE LIMITED helps organizations build reliable,
                            compliant and scalable operations across finance, technology and digital
                            functions. Our approach blends domain expertise, structured governance
                            and modern engineering to deliver measurable outcomes.
                        </p>

                        {/* Glass Cards — Deloitte-Style */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                {
                                    title: "Finance Excellence",
                                    desc: "Structured accounting, controls & compliant operations.",
                                },
                                {
                                    title: "Technology-Driven Delivery",
                                    desc: "Secure software, automation and digital transformation.",
                                },
                                {
                                    title: "Process Governance",
                                    desc: "Transparent workflows with predictable SLA outcomes.",
                                },
                                {
                                    title: "Enterprise Scalability",
                                    desc: "Systems designed to grow with organizational needs.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    className="
                    p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
                    border border-[#E7EDF5]
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                    transition-all
                    "
                                >
                                    <h3 className="font-semibold text-[#0E1F33] text-lg">{item.title}</h3>
                                    <p className="text-sm text-[#4F627A] mt-2 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE — Premium Image Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: easeBezier }}
                        className="relative flex justify-center"
                    >
                        {/* Soft halo glow */}
                        <div className="absolute inset-0 w-[90%] h-[90%] rounded-3xl bg-[#C4D8EE] blur-[120px] opacity-40" />

                        {/* Glass-Frame Image */}
                        <div className="
                relative overflow-hidden rounded-3xl shadow-xl
                bg-white/70 backdrop-blur-lg
                border border-[#EBF3FA]
                w-[88%] max-w-lg
            ">
                            <Image
                                src="/about-illustration.png"
                                alt="About ITSASOO"
                                width={600}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
