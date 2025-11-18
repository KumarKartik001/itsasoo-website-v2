"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FileSpreadsheet,
    Laptop,
    BarChart3,
} from "lucide-react";

const services = [
    {
        title: "Finance & Accounts Outsourcing",
        icon: FileSpreadsheet,
        href: "/services/finance",
        bg: "/finance.jpg",
        description:
            "Global-standard accounting, compliance, reporting and payroll operations delivered with precision.",
    },
    {
        title: "IT Outsourcing",
        icon: Laptop,
        href: "/services/it-outsourcing",
        bg: "/it.jpg",
        description:
            "Full-cycle development, cloud engineering, automation and secure IT management.",
    },
    {
        title: "Digital Marketing",
        icon: BarChart3,
        href: "/services/digital-marketing",
        bg: "/marketing.jpg",
        description:
            "SEO, paid ads, brand strategy and digital campaigns engineered for business growth.",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative w-full py-28 overflow-hidden bg-[#03132A]">

            {/* ===== TECH GRID BACKGROUND ===== */}
            <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
                <div className="w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-[0.15]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-white"
                >
                    Our <span className="text-blue-400">Services</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-3 text-gray-300 max-w-2xl mx-auto"
                >
                    Outsourcing solutions engineered for scalability, accuracy and enterprise-grade performance.
                </motion.p>

                {/* ===== SERVICES GRID ===== */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Link key={service.title} href={service.href}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                    }}
                                    className="
                                        group relative rounded-2xl overflow-hidden cursor-pointer
                                        h-[360px]          /* Equal card height */
                                        bg-black
                                    "
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${service.bg})` }}
                                    />

                                    {/* Dark Overlay Tint */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all"></div>

                                    {/* Shine Sweep */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "linear",
                                        }}
                                    ></motion.div>

                                    {/* CONTENT */}
                                    <div className="relative z-[5] h-full p-8 flex flex-col justify-end text-left">

                                        {/* Service Icon */}
                                        <div className="
                                            w-14 h-14 flex items-center justify-center 
                                            rounded-xl bg-white/20 border border-white/20
                                        ">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="mt-4 text-2xl font-semibold text-white">
                                            {service.title}
                                        </h3>

                                        <p className="mt-2 text-gray-200 text-sm leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="mt-4 text-blue-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Learn More →
                                        </div>
                                    </div>

                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
