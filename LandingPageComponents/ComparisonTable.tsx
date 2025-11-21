"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Mail, X } from "lucide-react";
import Link from "next/link";

const easeBezier = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Row = {
    feature: string;
    inHouse: string;
    itsasoo: string;
    detailsInHouse: string;
    detailsItsasoo: string;
};

const ROWS: Row[] = [
    {
        feature: "Cost",
        inHouse: "High",
        itsasoo: "Low",
        detailsInHouse:
            "In-house costs include salaries, benefits, infrastructure, tools, training and admin — fixed overheads that scale poorly.",
        detailsItsasoo:
            "ITSASOO uses optimized staffing, automation and offshore capabilities to reduce ongoing costs and improve predictability.",
    },
    {
        feature: "Scalability",
        inHouse: "Limited",
        itsasoo: "Instant",
        detailsInHouse:
            "Scaling in-house often requires hiring, onboarding and additional infrastructure which introduces delays.",
        detailsItsasoo:
            "ITSASOO enables elastic capacity with on-demand team ramp-ups, flexible SLAs and fast ramp timelines.",
    },
    {
        feature: "Compliance",
        inHouse: "Risky",
        itsasoo: "Fully Managed",
        detailsInHouse:
            "In-house setups may lack multi-layered reviews and up-to-date regulatory coverage — higher audit risk.",
        detailsItsasoo:
            "ITSASOO delivers audit-ready controls, continuous policy updates and multi-layer QA to ensure compliance.",
    },
    {
        feature: "Support",
        inHouse: "8 hours",
        itsasoo: "24×7",
        detailsInHouse:
            "Local business hours produce coverage gaps across timezones and slower incident handling.",
        detailsItsasoo:
            "Our global model ensures 24×7 monitoring, overlapping shifts and SLA-driven incident response.",
    },
    {
        feature: "Expertise",
        inHouse: "Depends",
        itsasoo: "Dedicated Specialists",
        detailsInHouse:
            "In-house skill availability depends on hires and training; specialist knowledge can be inconsistent.",
        detailsItsasoo:
            "Access to certified domain specialists with continuous upskilling and deep tooling expertise.",
    },
];

const stop = (e: React.MouseEvent) => e.stopPropagation();

export default function ComparisonTableNeonRefactor(): React.ReactElement {
    const [openRow, setOpenRow] = useState<Row | null>(null);
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

    const touchStartY = useRef<number | null>(null);
    const touchCurrentY = useRef<number | null>(null);

    useEffect(() => {
        document.body.style.overflow = openRow ? "hidden" : "";
    }, [openRow]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenRow(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        touchCurrentY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = () => {
        if (touchStartY.current != null && touchCurrentY.current != null) {
            const delta = touchCurrentY.current - touchStartY.current;
            if (delta > 80) setOpenRow(null);
        }
        touchStartY.current = null;
        touchCurrentY.current = null;
    };

    const onRowClick = (row: Row) => {
        setSelectedFeature(row.feature);
        setOpenRow(row);
    };

    return (
        <section className="relative py-20 bg-linear-to-b from-[#e7f7ff] to-[#dbeefc]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#06233f] mb-10">
                    Why companies choose <span className="text-blue-600">ITSASOO</span>
                </h2>

                <div className="flex justify-center">
                    <div className="w-[90%]">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <div
                                className="grid grid-cols-12 items-center px-6 py-4"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(4,25,45,0.88), rgba(5,35,60,0.92))",
                                }}
                            >
                                <div className="col-span-5 text-sm font-semibold text-cyan-100 uppercase tracking-wider">
                                    Feature
                                </div>
                                <div className="col-span-3 text-sm font-semibold text-cyan-100 uppercase tracking-wider text-center">
                                    In-House
                                </div>
                                <div className="col-span-4 text-sm font-semibold text-cyan-100 uppercase tracking-wider text-right">
                                    ITSASOO
                                </div>
                            </div>

                            <div className="bg-[rgba(3,18,28,0.85)]">
                                {ROWS.map((r, i) => {
                                    const isSelected = selectedFeature === r.feature;
                                    return (
                                        <div
                                            key={r.feature}
                                            onClick={() => onRowClick(r)}
                                            className={`group grid grid-cols-12 items-center cursor-pointer border-t border-white/10 transition-transform duration-250 transform-gpu ${isSelected
                                                ? "scale-101 shadow-holo-selected"
                                                : "hover:scale-[1.01] hover:shadow-holo hover:shadow-[rgba(72,200,255,0.16)]"
                                                } ${i % 2 === 0 ? "bg-white/5" : "bg-white/6"}`}
                                            style={{ minHeight: 96 }}
                                            aria-pressed={isSelected}
                                        >
                                            <div className="col-span-5 px-6 flex items-center gap-4 relative">
                                                <div
                                                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 rounded-r-full transition-all duration-300 ${isSelected
                                                        ? "bg-linear-to-b from-cyan-400 to-blue-400 opacity-100"
                                                        : "opacity-0"
                                                        }`}
                                                />

                                                <div className="ml-4">
                                                    <div className="table-feature text-white text-xl font-semibold tracking-wide">{r.feature}</div>
                                                </div>
                                            </div>

                                            <div className="col-span-3 px-6 text-center">
                                                <div className="inline-flex items-center justify-center gap-3">
                                                    <XCircle className="w-6 h-6 text-rose-300" />
                                                    <span className="table-value text-white text-lg font-semibold">{r.inHouse}</span>
                                                </div>
                                            </div>

                                            <div className="col-span-4 px-6 text-right pr-8">
                                                <div className="inline-flex items-center justify-end gap-3">
                                                    <CheckCircle className="w-6 h-6 text-cyan-300" />
                                                    <span className="table-value text-white text-lg font-semibold">{r.itsasoo}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {openRow && (
                    <motion.div
                        className="fixed inset-0 z-1000 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpenRow(null)}
                        aria-modal="true"
                        role="dialog"
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                        {/* Modal */}
                        <motion.div
                            className="relative max-h-[70vh] w-full rounded-2xl overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.38 }}
                            style={{ maxWidth: "650px", zIndex: 1000 }}
                        >
                            <div
                                className="relative p-6 rounded-2xl"
                                style={{
                                    backdropFilter: "blur(16px) saturate(140%)",
                                    background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(180,255,255,0.18)",
                                }}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{openRow.feature}</h3>
                                        <p className="mt-1 text-cyan-100 text-sm">Detailed Comparison</p>
                                    </div>

                                    <button
                                        aria-label="Close"
                                        onClick={() => setOpenRow(null)}
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                    >
                                        <X className="w-5 h-5 text-cyan-100" />
                                    </button>
                                </div>

                                {/* Side-by-side Comparison */}
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white relative">
                                    {/* Divider */}
                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-white/10"></div>

                                    {/* In-House */}
                                    <div className="rounded-xl p-4 bg-white/10 border border-white/15">
                                        <h4 className="flex items-center gap-2 text-rose-300 font-semibold text-lg mb-2">
                                            <XCircle className="w-4 h-4" /> In-House
                                        </h4>
                                        <p className="text-slate-200">{openRow.detailsInHouse}</p>
                                    </div>

                                    {/* ITSASOO */}
                                    <div className="rounded-xl p-4 bg-white/10 border border-cyan-300/20">
                                        <h4 className="flex items-center gap-2 text-cyan-300 font-semibold text-lg mb-2">
                                            <CheckCircle className="w-4 h-4" /> ITSASOO
                                        </h4>
                                        <p className="text-cyan-100">{openRow.detailsItsasoo}</p>
                                    </div>
                                </div>

                                {/* Footer CTA */}
                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-cyan-200">
                                        <img
                                            src="/shortlogo.png"
                                            alt="ITSASOO"
                                            className="w-15 h-15 rounded-md object-cover opacity-95"
                                        />
                                        <div>
                                            <div className="font-semibold text-white text-sm">ITSASOO Solutions</div>
                                            <div className="text-xs text-cyan-200">Trusted enterprise partner</div>
                                        </div>
                                    </div>

                                    <Link
                                        href="/contact"
                                        onClick={() => setOpenRow(null)}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-[#48C8FF] to-[#1EA4D9] text-[#001827] font-semibold shadow-md hover:scale-[1.03] transition"
                                    >
                                        <Mail className="w-4 h-4" /> Contact Us
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .animate-grid {
          transform-origin: center;
          animation: grid-scroll 10s linear infinite;
        }
        @keyframes grid-scroll {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-6%) translateX(6%);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .hover\\:shadow-holo:hover {
          box-shadow: 0 18px 80px rgba(72, 200, 255, 0.14),
            0 6px 30px rgba(30, 150, 220, 0.06),
            inset 0 0 28px rgba(72, 200, 255, 0.03);
        }
        .shadow-holo-selected {
          box-shadow: 0 20px 120px rgba(72, 200, 255, 0.20),
            0 8px 40px rgba(30, 150, 220, 0.08),
            inset 0 0 40px rgba(72, 200, 255, 0.04);
          transform: translateZ(0);
        }
        .scale-101 {
          transform: scale(1.01);
        }
        .transform-gpu {
          will-change: transform, box-shadow;
          transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .table-value {
          color: #ffffff;
        }
        .table-feature {
          color: #ffffff;
        }
        @media (max-width: 640px) {
          .table-feature {
            font-size: 1.05rem;
          }
          .table-value {
            font-size: 1rem;
          }
        }
      `}</style>
        </section>
    );
}
