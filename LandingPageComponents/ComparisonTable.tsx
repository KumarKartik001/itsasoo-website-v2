// File: ComparisonTableNeonRefactor.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Mail, X } from "lucide-react";
import Link from "next/link";

const easeBezier = [0.16, 1, 0.3, 1] as [number, number, number, number];

/**
 * Developer note:
 * This is the uploaded image path; your build/tooling will transform it to a URL.
 * Keep it as-is in development.
 */
const uploadedFileUrl = "/mnt/data/6d7eecd3-3392-4376-9348-80108997751c.png";

/* -------------------------
   Types & Data
   ------------------------- */
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

/* -------------------------
   Reusable small helpers
   ------------------------- */
const stop = (e: React.MouseEvent) => e.stopPropagation();

/* -------------------------
   Component
   ------------------------- */
export default function ComparisonTableNeonRefactor(): JSX.Element {
    // state: which row's modal is open
    const [openRow, setOpenRow] = useState<Row | null>(null);
    // state: which feature is currently selected (highlight)
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

    // touch handling for swipe-to-close
    const touchStartY = useRef<number | null>(null);
    const touchCurrentY = useRef<number | null>(null);

    // lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = openRow ? "hidden" : "";
    }, [openRow]);

    // ESC to close modal
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenRow(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // touch handlers for swipe-to-close
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        touchCurrentY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = () => {
        if (touchStartY.current != null && touchCurrentY.current != null) {
            const delta = touchCurrentY.current - touchStartY.current;
            if (delta > 80) setOpenRow(null); // swipe down threshold
        }
        touchStartY.current = null;
        touchCurrentY.current = null;
    };

    /* -------------------------
       Row click handler (opens modal)
       ------------------------- */
    const onRowClick = (row: Row) => {
        setSelectedFeature(row.feature);
        setOpenRow(row);
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-[#e7f7ff] to-[#dbeefc]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#06233f] mb-10">
                    Why companies choose <span className="text-blue-600">ITSASOO</span>
                </h2>

                {/* Table container (90% width) */}
                <div className="flex justify-center">
                    <div className="w-[90%]">
                        {/* Panel */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            {/* Header row */}
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

                            {/* Rows list */}
                            <div className="bg-[rgba(3,18,28,0.85)]">
                                {ROWS.map((r, i) => {
                                    const isSelected = selectedFeature === r.feature;
                                    return (
                                        <div
                                            key={r.feature}
                                            onClick={() => onRowClick(r)}
                                            // hover & selected classes: holographic glow + slight scale
                                            className={`group grid grid-cols-12 items-center cursor-pointer border-t border-white/10 transition-transform duration-250 transform-gpu ${isSelected
                                                ? "scale-101 shadow-holo-selected"
                                                : "hover:scale-[1.01] hover:shadow-holo hover:shadow-[rgba(72,200,255,0.16)]"
                                                } ${i % 2 === 0 ? "bg-white/5" : "bg-white/6"}`}
                                            style={{ minHeight: 96 }}
                                            aria-pressed={isSelected}
                                        >
                                            {/* Selection glow bar (left) */}
                                            <div className="col-span-5 px-6 flex items-center gap-4 relative">
                                                {/* left indicator — visible when selected */}
                                                <div
                                                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 rounded-r-full transition-all duration-300 ${isSelected ? "bg-gradient-to-b from-cyan-400 to-blue-400 opacity-100" : "opacity-0"
                                                        }`}
                                                />

                                                {/* Feature name */}
                                                <div className="ml-4">
                                                    <div className="table-feature text-white text-xl font-semibold tracking-wide">
                                                        {r.feature}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* In-House column */}
                                            <div className="col-span-3 px-6 text-center">
                                                <div className="inline-flex items-center justify-center gap-3">
                                                    <XCircle className="w-6 h-6 text-rose-300" />
                                                    <span className="table-value text-white text-lg font-semibold">
                                                        {r.inHouse}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* ITSASOO column */}
                                            <div className="col-span-4 px-6 text-right pr-8">
                                                <div className="inline-flex items-center justify-end gap-3">
                                                    <CheckCircle className="w-6 h-6 text-cyan-300" />
                                                    <span className="table-value text-white text-lg font-semibold">
                                                        {r.itsasoo}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* hint */}
                            {/* <div className="mt-4 text-sm text-[#22445c] text-center">
                                Click any row to view an in-depth holographic comparison.
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------
          Modal (Neon Hologram) — only visible on click
        ------------------------- */}
            <AnimatePresence>
                {openRow && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpenRow(null)}
                        aria-modal="true"
                        role="dialog"
                    >
                        {/* overlay */}
                        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

                        {/* modal panel */}
                        <motion.div
                            className="relative rounded-3xl overflow-hidden w-[90vw] md:w-[60vw] max-w-[1100px]"
                            onClick={stop}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.94, opacity: 0 }}
                            transition={{ duration: 0.28, ease: easeBezier }}
                        >
                            {/* neon outline */}
                            <div
                                className="absolute inset-0 pointer-events-none rounded-3xl"
                                style={{
                                    boxShadow:
                                        "0 12px 80px rgba(72,200,255,0.18), inset 0 0 28px rgba(72,200,255,0.06)",
                                    border: "1px solid rgba(72,200,255,0.18)",
                                }}
                            />

                            {/* animated grid background */}
                            <div className="absolute inset-0 pointer-events-none">
                                <svg
                                    className="absolute inset-0 w-full h-full opacity-30 animate-grid"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                >
                                    <defs>
                                        <pattern id="pg2" width="8" height="8" patternUnits="userSpaceOnUse">
                                            <path d="M 8 0 L 0 0 0 8" stroke="rgba(80,200,255,0.06)" strokeWidth="0.5" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#pg2)" />
                                </svg>
                            </div>

                            {/* inner glass content */}
                            <div
                                className="relative p-8 rounded-3xl"
                                style={{
                                    backdropFilter: "blur(14px) saturate(150%)",
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                                    border: "1px solid rgba(80,200,255,0.08)",
                                }}
                            >
                                {/* top neon accent */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#48C8FF] to-transparent opacity-90 blur-[2px]" />

                                {/* header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-3xl font-extrabold text-white tracking-tight">
                                            {openRow.feature}
                                        </h3>
                                        <p className="mt-2 text-cyan-100 text-lg">
                                            In-depth comparison — In-House vs ITSASOO
                                        </p>
                                    </div>

                                    <button
                                        aria-label="Close"
                                        onClick={() => setOpenRow(null)}
                                        className="p-2 rounded-full bg-white/8 hover:bg-white/12 transition"
                                    >
                                        <X className="w-5 h-5 text-cyan-100" />
                                    </button>
                                </div>

                                {/* content columns */}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* left: In-House */}
                                    <div
                                        className="rounded-xl p-6"
                                        style={{
                                            background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(4,10,20,0.12))",
                                            border: "1px solid rgba(255,255,255,0.03)",
                                        }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 rounded-md bg-rose-500/10">
                                                <XCircle className="w-6 h-6 text-rose-300" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-slate-200">In-House</h4>
                                                <div className="text-sm text-slate-300 mt-1">Typical challenges</div>
                                            </div>
                                        </div>

                                        <div className="mt-4 text-slate-200 text-base leading-relaxed">
                                            {openRow.detailsInHouse}
                                        </div>

                                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                                            <li>• Fixed overheads (salaries, infra)</li>
                                            <li>• Slow scale-up & ramp time</li>
                                            <li>• Limited timezone coverage</li>
                                        </ul>
                                    </div>

                                    {/* right: ITSASOO */}
                                    <div
                                        className="rounded-xl p-6"
                                        style={{
                                            background: "linear-gradient(180deg, rgba(12,28,48,0.36), rgba(6,20,40,0.22))",
                                            border: "1px solid rgba(72,200,255,0.12)",
                                        }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 rounded-md bg-cyan-500/10">
                                                <CheckCircle className="w-6 h-6 text-cyan-300" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-cyan-100">ITSASOO</h4>
                                                <div className="text-sm text-cyan-200 mt-1">How ITSASOO solves it</div>
                                            </div>
                                        </div>

                                        <div className="mt-4 text-cyan-100 text-base leading-relaxed">{openRow.detailsItsasoo}</div>

                                        <ul className="mt-4 space-y-2 text-sm text-cyan-200">
                                            <li>• Elastic, on-demand resourcing</li>
                                            <li>• SLA-backed 24×7 support & monitoring</li>
                                            <li>• Audit-ready controls & automation</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* modal footer */}
                                <div className="mt-8 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4 text-sm text-cyan-200">
                                        <img src={"/logo.png"} alt="ITSASOO" className="w-12 h-12 rounded-md object-cover opacity-95" />
                                        <div>
                                            <div className="font-semibold text-white">ITSASOO Solutions</div>
                                            <div className="text-xs text-cyan-200">Trusted enterprise partner</div>
                                        </div>
                                    </div>

                                    <div>
                                        <Link
                                            href="/contact"
                                            onClick={() => setOpenRow(null)}
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#48C8FF] to-[#1EA4D9] text-[#001827] font-semibold shadow-md hover:scale-[1.02] transition"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* -------------------------
          Local CSS-in-JS for glows, grid animation, and utilities
         ------------------------- */}
            <style jsx>{`
        /* animate the subtle grid behind modal */
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

        /* holographic glow on hover */
        .hover\\:shadow-holo:hover {
          box-shadow: 0 18px 80px rgba(72, 200, 255, 0.14),
            0 6px 30px rgba(30, 150, 220, 0.06),
            inset 0 0 28px rgba(72, 200, 255, 0.03);
        }

        /* selection shadow (when a row is selected) */
        .shadow-holo-selected {
          box-shadow: 0 20px 120px rgba(72, 200, 255, 0.20),
            0 8px 40px rgba(30, 150, 220, 0.08),
            inset 0 0 40px rgba(72, 200, 255, 0.04);
          transform: translateZ(0);
        }

        /* slight scale to match selection / hover */
        .scale-101 {
          transform: scale(1.01);
        }

        /* ensure smooth transform transitions */
        .transform-gpu {
          will-change: transform, box-shadow;
          transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* row value & feature utility (ensures visibility over dark backgrounds) */
        .table-value {
          color: #ffffff;
        }
        .table-feature {
          color: #ffffff;
        }

        /* mobile friendly (bigger modal) */
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
