"use client";

import Link from "next/link";
import { FileSpreadsheet, Laptop, BarChart3 } from "lucide-react";

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

export default function Servicepage() {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#061529]">
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-[#0A1E3B]/70 to-[#061529] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-bold text-white">
                    Our <span className="text-blue-300">Services</span>
                </h2>

                <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
                    Enterprise outsourcing solutions built to drive accuracy, stability and scalable growth.
                </p>

                {/* Grid */}
                <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const delay = `${index * 120}ms`; // stagger 120ms

                        return (
                            <Link key={service.title} href={service.href} className="group">
                                <article
                                    className="relative overflow-hidden cursor-pointer rounded-3xl bg-[#0C2037]/70 border border-white/8 shadow-lg hover:shadow-xl transition-transform duration-300 transform-gpu will-change-transform"
                                    style={{ minHeight: 380, animation: `scaleIn 420ms ease forwards`, animationDelay: delay }}
                                >
                                    {/* background image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-95 transition-opacity duration-600"
                                        style={{
                                            backgroundImage: `url(${service.bg})`,
                                            filter: "contrast(0.95) saturate(1.05)",
                                        }}
                                        aria-hidden
                                    />

                                    {/* dark overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/72 to-transparent" />

                                    {/* content */}
                                    <div className="relative z-10 p-7 flex flex-col justify-end h-full">
                                        <div
                                            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/12 border border-white/12 backdrop-blur"
                                            style={{ willChange: "transform, opacity", animation: `fadeInUp 500ms ease forwards`, animationDelay: delay }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        <h3
                                            className="mt-5 text-2xl font-semibold text-white"
                                            style={{ willChange: "transform, opacity", animation: `fadeInUp 540ms ease forwards`, animationDelay: `calc(${delay} + 60ms)` }}
                                        >
                                            {service.title}
                                        </h3>

                                        <p
                                            className="mt-2 text-gray-300 text-sm leading-relaxed max-w-[85%]"
                                            style={{ animation: `fadeInUp 580ms ease forwards`, animationDelay: `calc(${delay} + 120ms)` }}
                                        >
                                            {service.description}
                                        </p>

                                        <div
                                            className="mt-4 text-blue-300 font-medium flex items-center gap-2"
                                            style={{ animation: `fadeInUp 620ms ease forwards`, animationDelay: `calc(${delay} + 180ms)` }}
                                        >
                                            Learn More →
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* animation CSS */}
            <style jsx>{`
        /* basic fade-in-up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* scale in for card container */
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          article,
          .relative,
          .group,
          .group * {
            animation: none !important;
            transition: none !important;
          }
        }

        /* small tweak to avoid sudden blue flash on very slow loads:
           ensure background color matches section while images load. */
        article {
          background-color: rgba(8, 20, 33, 0.9); /* fallback - matches #0C2037 */
        }

        @media (max-width: 640px) {
          article {
            min-height: 340px !important;
          }
        }
      `}</style>
        </section>
    );
}
