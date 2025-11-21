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
        href: "/services/itoutsourcing",
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
        <section className="relative w-full py-28 overflow-hidden bg-[#061529]">

            {/* Soft Gradient Tint */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3B]/80 to-[#061529] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 text-center">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold text-white"
                >
                    Our <span className="text-blue-300">Services</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg"
                >
                    Enterprise outsourcing solutions built to drive accuracy, stability and scalable growth.
                </motion.p>

                {/* Services Cards */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Link key={service.title} href={service.href}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15,
                                    }}
                                    className="
                                        group relative overflow-hidden cursor-pointer
                                        rounded-3xl bg-[#0C2037]/80
                                        border border-white/10
                                        shadow-[0_6px_22px_rgba(0,0,0,0.35)]
                                        hover:shadow-[0_14px_28px_rgba(0,0,0,0.45)]
                                        transition-all
                                        h-[420px] flex flex-col justify-end
                                    "
                                >

                                    {/* Background Image (now more visible) */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center opacity-75 group-hover:opacity-90 transition-all duration-500"
                                        style={{ backgroundImage: `url(${service.bg})` }}
                                    />

                                    {/* Light glass overlay (less white to show image more) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#373d442a]" />

                                    {/* Content */}
                                    <div className="relative z-20 p-8 text-left">

                                        {/* Icon */}
                                        <div className="
                                            w-14 h-14 flex items-center justify-center
                                            rounded-2xl bg-white/15 backdrop-blur border border-white/20
                                        ">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        <h3 className="mt-5 text-2xl font-semibold text-white">
                                            {service.title}
                                        </h3>

                                        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
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
