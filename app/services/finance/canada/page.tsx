"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const easeBezier = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeBezier },
    },
};

const fadeSide = (x: number) => ({
    initial: { opacity: 0, x },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeBezier },
    },
});

export default function CanadaFinancePage() {
    return (
        <section className="bg-[#c2daf1]">
            {/* ========================================================= */}
            {/* HERO SECTION */}
            {/* ========================================================= */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: "url('/finance/countries/canada/canada.jpg')" }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeBezier }}
                    className="relative text-center max-w-3xl mx-auto text-white px-6"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
                        Canada
                        <span className="text-[#7e0218]"> Finance Outsourcing Services</span>
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-gray-200 drop-shadow-md">
                        Professional accounting, taxation, payroll and bookkeeping outsourcing —
                        trusted by Canadian accounting firms for accuracy, compliance, and efficiency.
                    </p>
                </motion.div>
            </section>

            {/* ========================================================= */}
            {/* MAIN CONTENT */}
            {/* ========================================================= */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

                {/* ========================================================= */}
                {/* 1 — BOOKKEEPING (IMAGE | TEXT) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)} viewport={{ once: true }}>
                        <img
                            src="/finance/countries/canada/canada_bookkeeping.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-80"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Bookkeeping & Financial Finalization
                        </h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Customized bookkeeping solutions ensuring accuracy, compliance and seamless monthly & annual reporting.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Bank, credit card & loan reconciliation",
                                "General ledger clean-up & review",
                                "Year-end adjustments & accruals",
                                "Finalization support for T2 corporate filings",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[#D9042B] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>


                {/* ========================================================= */}
                {/* 2 — FINANCIAL REPORTING (TEXT | IMAGE) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#93b2d4] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div {...fadeSide(-30)} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Financial Reporting
                        </h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Accurate and compliant financial statements for monthly, quarterly, and annual reporting.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Balance sheet preparation",
                                "Profit & loss statements",
                                "Cash flow statements",
                                "Management & KPI reporting",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[#D9042B] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div {...fadeSide(30)} viewport={{ once: true }}>
                        <img
                            src="/finance/countries/canada/canada_financialreport.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </div>


                {/* ========================================================= */}
                {/* 3 — TAX RETURNS (IMAGE | TEXT) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)} viewport={{ once: true }}>
                        <img
                            src="/finance/countries/canada/canada_tax.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Tax Return Preparation
                        </h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Fast, accurate and compliant tax preparation for individuals and corporations.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Personal Return – T1",
                                "Corporate Return – T2",
                                "GST/HST filing & reconciliation",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[#D9042B] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>


                {/* ========================================================= */}
                {/* 4 — PAYROLL (TEXT | IMAGE) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#93b2d4] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div {...fadeSide(-30)} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Payroll Processing
                        </h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Fully managed and compliant Canadian payroll services for small and large firms.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Weekly, bi-weekly, monthly payroll",
                                "CPP, EI & tax calculations",
                                "T4, T4A preparation",
                                "Payroll reconciliations",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[#D9042B] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div {...fadeSide(30)} viewport={{ once: true }}>
                        <img
                            src="/finance/countries/canada/canada_payroll.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </div>


                {/* ========================================================= */}
                {/* 5 — SALES TAX (IMAGE | TEXT) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)} viewport={{ once: true }}>
                        <img
                            src="/finance/countries/canada/canada_taxfile.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Sales Tax Filing
                        </h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Hassle-free GST/HST calculations, compliance checks and timely filing.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "GST/HST computation",
                                "Online sales tax filing",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[#D9042B] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
