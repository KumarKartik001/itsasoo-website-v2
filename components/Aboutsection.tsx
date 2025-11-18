"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative w-full py-24 bg-[#F7FBFF]">
            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#bcdcff] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-[2]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE — TEXT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1B2E] leading-tight">
                            Transforming Businesses with Intelligent
                            <span className="bg-gradient-to-r from-[#053d7c] to-[#02536b] bg-clip-text text-transparent ml-1">
                                IT & Accounting Solutions
                            </span>
                        </h2>

                        <p className="text-lg text-[#34445C] leading-relaxed max-w-xl">
                            ITSASOO SOLUTIONS PRIVATE LIMITED empowers organizations across the globe
                            with premium IT development, financial operations, digital marketing, and
                            business outsourcing services. Our mission is to support companies with
                            efficient, scalable, and technology-driven solutions that accelerate growth.
                        </p>

                        {/* Highlight Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                {
                                    title: "Certified Finance Experts",
                                    desc: "Experienced teams handling A/R, A/P, bookkeeping & compliance",
                                },
                                {
                                    title: "Modern IT & Digital Solutions",
                                    desc: "Web, software, automation, and marketing under one roof",
                                },
                                {
                                    title: "Global Delivery Model",
                                    desc: "Trusted by clients in USA, UK, Canada, Australia, India",
                                },
                                {
                                    title: "Operational Excellence",
                                    desc: "Reliable, transparent & measurable service delivery",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    className="p-5 rounded-xl bg-white shadow-sm border border-[#E4ECF7]"
                                >
                                    <h3 className="font-semibold text-[#0B1B2E] text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#4F637D] mt-1">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE — IMAGE WITH GRADIENT BORDER */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative w-full flex justify-center"
                    >
                        <div className="relative w-[90%] max-w-lg">
                            {/* Glow Border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0077FF] to-[#00C4FF] opacity-20 blur-xl"></div>

                            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-[#DCE9F9]">
                                <Image
                                    src="/about-illustration.png" // Replace with your image
                                    alt="ITSASOO About Us"
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
