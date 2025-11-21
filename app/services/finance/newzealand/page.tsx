"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function newzealandFinancePage() {
    return (
        <section className="bg-[#dde2f1]"> {/* Light sky pastel */}

            {/* ========================================================= */}
            {/* HERO SECTION                                                */}
            {/* ========================================================= */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: "url('/finance/countries/newzealand/newzealand.jpg')" }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-center max-w-3xl mx-auto text-white px-6"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
                        New Zealand
                        <span className="text-[#c9d60b]"> Finance Outsourcing Services</span>
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-gray-200 drop-shadow-md">
                        Professional accounting, taxation, payroll and bookkeeping outsourcing —
                        trusted by New Zealand's accounting firms for accuracy, compliance, and efficiency.
                    </p>
                </motion.div>
            </section>



            {/* ========================================================= */}
            {/* MAIN CONTENT                                               */}
            {/* ========================================================= */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">



                {/* ========================================================= */}
                {/* 1 — BOOKKEEPING (IMAGE | TEXT) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#f7f7f7] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <img src="/finance/countries/newzealand/newzealand_bookkeeping.jpg" className="rounded-2xl shadow-xl object-cover w-full h-80" />
                    </motion.div>

                    {/* Text */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Bookkeeping & Financial Finalization
                        </h3>
                        <p className="text-[black] leading-relaxed">
                            New Zealand bookkeeping solutions keep your accounts IRD-compliant and ensure smooth year-end financial tracking.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "IRD-compliant books",
                                "End-of-year account reconciliation",
                                "Fast bookkeeping support",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[blue] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>



                {/* ========================================================= */}
                {/* 2 — FINANCIAL REPORTING (TEXT | IMAGE) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#b5c7f7] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Financial Reporting
                        </h3>
                        <p className="text-[black] leading-relaxed">
                            Our NZ financial reporting services give Kiwi companies the clarity and compliance they need to succeed.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Tailored business reports",
                                "Regulatory compliance maintained",
                                "Clear performance snapshots",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[blue] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <img src="/finance/countries/newzealand/newzealand_financialreporting.jpg" className="rounded-2xl shadow-xl object-cover w-full h-full" />
                    </motion.div>
                </div>



                {/* ========================================================= */}
                {/* 3 — TAX RETURNS (IMAGE | TEXT) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#f7f7f7] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <img src="/finance/countries/newzealand/newzealand_tax.jpg" className="rounded-2xl shadow-xl object-cover w-full h-full" />
                    </motion.div>

                    {/* Text */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Tax Return Preparation
                        </h3>
                        <p className="text-[black] leading-relaxed">
                            Tax return preparation in New Zealand guarantees proper refunds and accurate IRD filings for local and international businesses.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Maximized tax refunds",
                                "IRD filings handled",
                                "Multi-entity coverage",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[blue] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>



                {/* ========================================================= */}
                {/* 4 — PAYROLL (TEXT | IMAGE) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#b5c7f7] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Payroll Processing
                        </h3>
                        <p className="text-[black] leading-relaxed">
                            Kiwi payroll processing covers PAYE, KiwiSaver, and employee leave management, simplifying HR processes.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "PAYE and KiwiSaver included",
                                "Leave management streamlined",
                                "Fast salary disbursement",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[blue] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <img src="/finance/countries/newzealand/newzealand_payroll.jpg" className="rounded-2xl shadow-xl object-cover w-full h-full" />
                    </motion.div>
                </div>



                {/* ========================================================= */}
                {/* 5 — SALES TAX (IMAGE | TEXT) */}
                {/* ========================================================= */}
                <div className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <img src="/finance/countries/newzealand/newzealand_taxfile.jpg" className="rounded-2xl shadow-xl object-cover w-full h-full" />
                    </motion.div>

                    {/* Text */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl font-extrabold text-[black] mb-4">
                            Sales Tax Filing
                        </h3>
                        <p className="text-[black] leading-relaxed">
                            Enjoy seamless GST filing services for New Zealand businesses, compliant with the latest ATO requirements.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "GST compliance ensured",
                                "Timely return submissions",
                                "Support for all transactions",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-[black] text-lg font-medium">
                                    <CheckCircle className="text-[blue] w-6 h-6 mt-1" />
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
