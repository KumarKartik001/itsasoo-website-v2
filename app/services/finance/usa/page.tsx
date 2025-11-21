// File: USAFinancePage.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

/**
 * USAFinancePage
 * - Mirrors Australia page layout & animations
 * - Uses USA colors (light/dark blocks) as requested
 * - DOES NOT change any image paths
 */

// typed cubic-bezier (satisfies framer-motion TS typing)
const easeBezier = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeBezier },
    },
};

const fadeSide = (xValue: number) => ({
    initial: { opacity: 0, x: xValue },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeBezier },
    },
});

export default function USAFinancePage() {
    return (
        <section className="bg-[#F6EFE8]">

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white overflow-hidden">

                {/* Background Image (path kept) */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: "url('/finance/countries/usa/usa.jpg')" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

                {/* Hero text */}
                <motion.div {...fadeUp} className="relative text-center max-w-3xl mx-auto text-white px-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
                        USA <span className="text-orange-300">Finance Outsourcing Services</span>
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-gray-200 drop-shadow-md">
                        Trusted outsourcing partner for CPA firms in the USA & Canada — delivering accuracy, efficiency, compliance, and significant cost savings.
                    </p>
                </motion.div>
            </section>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

                {/* BLOCK 1 — BOOKKEEPING (Image | Text) */}
                <section className="grid md:grid-cols-2 gap-14 items-center p-10 rounded-3xl bg-[#F6EFE8] shadow-[0_0_40px_rgba(0,0,0,0.06)]">

                    {/* IMAGE */}
                    <motion.div {...fadeSide(-30)} className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/finance/countries/usa/usa_bookkeeping.jpg"
                            className="w-full h-80 object-cover"
                            alt="USA bookkeeping"
                        />
                    </motion.div>

                    {/* TEXT */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-[#3A2F27] mb-4">Bookkeeping & Finalization of Accounts</h3>

                        <p className="text-[#4A3F35] leading-relaxed">
                            Our bookkeeping services are tailored to meet your specific CPA firm needs — accuracy, reconciliations, and clean books for tax-ready submissions.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Data entry for bank, credit card & loan statements",
                                "General ledger reviews & adjustments",
                                "Year-end adjustments for depreciation, loans, payroll, etc.",
                                "Finalization of books for business tax returns",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[#3E2F26] text-lg font-medium">
                                    <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>

                {/* BLOCK 2 — FINANCIAL REPORTING (Text | Image) */}
                <section className="grid md:grid-cols-2 gap-14 items-center p-10 rounded-3xl bg-[#E8D8C6] shadow-[0_0_40px_rgba(0,0,0,0.06)]">

                    {/* TEXT FIRST */}
                    <motion.div {...fadeSide(-30)}>
                        <h3 className="text-3xl font-extrabold text-[#3A2F27] mb-4">Financial Reporting</h3>

                        <p className="text-[#4A3F35] leading-relaxed">
                            Accurate monthly, quarterly and annual financial statements with end-to-end compliance and management-ready reports.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Income & expenditure statements",
                                "Balance sheet preparation",
                                "Cash flow statements",
                                "Management reporting",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[#3E2F26] text-lg font-medium">
                                    <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* IMAGE SECOND */}
                    <motion.div {...fadeSide(30)} className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/finance/countries/usa/usa_Financial Reporting.jpg"
                            className="w-full h-full object-cover"
                            alt="USA financial reporting"
                        />
                    </motion.div>
                </section>

                {/* BLOCK 3 — TAX RETURNS (Image | Text) */}
                <section className="grid md:grid-cols-2 gap-14 items-center p-10 rounded-3xl bg-[#F6EFE8] shadow-[0_0_40px_rgba(0,0,0,0.06)]">

                    {/* IMAGE */}
                    <motion.div {...fadeSide(-30)} className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/finance/countries/usa/usa_tax.jpg"
                            className="w-full h-80 object-cover"
                            alt="USA tax"
                        />
                    </motion.div>

                    {/* TEXT */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-[#3A2F27] mb-4">Tax Return Preparation</h3>

                        <p className="text-[#4A3F35] leading-relaxed">
                            Tax filing for individuals and corporations handled with expert accuracy and strict compliance to US federal and state regulations.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Individual Return – Form 1040",
                                "Corporate Returns – 1120, 1120S",
                                "Partnership Return – Form 1065",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[#3E2F26] text-lg font-medium">
                                    <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>

                {/* BLOCK 4 — PAYROLL (Text | Image) */}
                <section className="grid md:grid-cols-2 gap-14 items-center p-10 rounded-3xl bg-[#E8D8C6] shadow-[0_0_40px_rgba(0,0,0,0.06)]">

                    {/* TEXT */}
                    <motion.div {...fadeSide(-30)}>
                        <h3 className="text-3xl font-extrabold text-[#3A2F27] mb-4">Payroll Processing</h3>

                        <p className="text-[#4A3F35] leading-relaxed">
                            End-to-end payroll management including federal & state tax calculations, forms, and compliance checks.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Weekly / Monthly payroll processing",
                                "Federal & state tax calculations",
                                "W-2, W-3, 1099-MISC preparation",
                                "Quarterly & Annual payroll returns",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[#3E2F26] text-lg font-medium">
                                    <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div {...fadeSide(30)} className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/finance/countries/usa/usa_payroll.jpg"
                            className="w-full h-full object-cover"
                            alt="USA payroll"
                        />
                    </motion.div>
                </section>

                {/* BLOCK 5 — SALES TAX (Image | Text) */}
                <section className="grid md:grid-cols-2 gap-14 items-center p-10 rounded-3xl bg-[#F6EFE8] shadow-[0_0_40px_rgba(0,0,0,0.06)]">

                    {/* IMAGE */}
                    <motion.div {...fadeSide(-30)} className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/finance/countries/usa/usa_taxfile.jpg"
                            className="w-full h-full object-cover"
                            alt="USA taxfile"
                        />
                    </motion.div>

                    {/* TEXT */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-[#3A2F27] mb-4">Sales Tax Filing</h3>

                        <p className="text-[#4A3F35] leading-relaxed">
                            We compute and file accurate sales tax returns across states, handling registrations, filing and reconciliations.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Computation of sales tax",
                                "Online filing of sales tax returns",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[#3E2F26] text-lg font-medium">
                                    <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>

            </div>
        </section>
    );
}
