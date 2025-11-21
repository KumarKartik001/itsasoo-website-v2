"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

/* SAME VARIANTS SYSTEM FOR ALL COUNTRY PAGES */

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


export default function UkFinancePage() {
    return (
        <section className="bg-[#bfe2c2]">

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white overflow-hidden">

                {/* Background */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: "url('/finance/countries/uk/uk.jpg')" }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

                {/* Text */}
                <motion.div {...fadeUp} className="relative text-center max-w-3xl mx-auto text-white px-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
                        United Kingdom <span className="text-[#4a9726]"> Finance Outsourcing Services</span>
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-gray-200 drop-shadow-md">
                        Professional accounting, taxation, payroll and bookkeeping outsourcing —
                        trusted by United Kingdom’s accounting firms for accuracy, compliance, and efficiency.
                    </p>
                </motion.div>
            </section>




            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

                {/* BLOCK 1 — BOOKKEEPING */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/uk/uk_bookkeeping.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-80"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">
                            Bookkeeping & Financial Finalization
                        </h3>

                        <p className="text-black leading-relaxed">
                            Our UK bookkeeping services cover everything from daily transactions to finalization for HMRC, safeguarding your compliance.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "HMRC-compliant records",
                                "Suitable for SMEs & sole traders",
                                "Fast account finalization",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#022e02] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>




                {/* BLOCK 2 — FINANCIAL REPORTING */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#a6ddaa] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div {...fadeSide(-30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">
                            Financial Reporting
                        </h3>

                        <p className="text-black leading-relaxed">
                            UK financial reporting services deliver actionable insights and ensure statutory requirements are met for growth and security.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Statutory annual reporting",
                                "Business intelligence provided",
                                "Easy compliance",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#022e02] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div {...fadeSide(30)}>
                        <img
                            src="/finance/countries/uk/uk_financialreporting.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </section>




                {/* BLOCK 3 — TAX RETURNS */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/uk/uk_tax.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">
                            Tax Return Preparation
                        </h3>

                        <p className="text-black leading-relaxed">
                            UK tax return preparation makes filings easy and accurate, helping individuals and companies avoid HMRC penalties and save on taxes.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Individual & corporate tax prep",
                                "Penalty avoidance focus",
                                "Maximized savings",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#022e02] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>




                {/* BLOCK 4 — PAYROLL */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#a6ddaa] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div {...fadeSide(-30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">
                            Payroll Processing
                        </h3>

                        <p className="text-black leading-relaxed">
                            Professional UK payroll processing covers RTI, payslip management, and pension auto-enrollment, suitable for any business size.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "RTI-compliant payroll",
                                "Pension enrollment included",
                                "Timely staff payments",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#022e02] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div {...fadeSide(30)}>
                        <img
                            src="/finance/countries/uk/uk_payroll.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </section>




                {/* BLOCK 5 — SALES TAX */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/uk/uk_taxfile.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">
                            Sales Tax Filing
                        </h3>

                        <p className="text-black leading-relaxed">
                            Our team specializes in VAT filing for UK businesses, ensuring quarterly reports and compliance with MTD rules.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "VAT and MTD compliance",
                                "Quarterly submissions",
                                "Support for digital reporting",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#022e02] w-6 h-6 mt-1" />
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
