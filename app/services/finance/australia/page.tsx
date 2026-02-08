"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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


export default function AustraliaFinancePage() {
    return (
        <section className="bg-[#c2daf1]">

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white overflow-hidden">

                {/* Background */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: "url('/finance/countries/australia/australia.jpg')" }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

                {/* Hero text */}
                <motion.div {...fadeUp} className="relative text-center max-w-3xl mx-auto text-white px-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
                        Australia <span className="text-[#e9e505]">Finance Outsourcing Services</span>
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-gray-200 drop-shadow-md">
                        Professional accounting, taxation, payroll and bookkeeping outsourcing —
                        trusted by Canadian accounting firms for accuracy, compliance, and efficiency.
                    </p>
                </motion.div>
            </section>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">


                {/* BLOCK 1 — BOOKKEEPING */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/australia/australia_bookkeeping.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Bookkeeping & Financial Finalization</h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Australian bookkeeping services ensure your accounts are finalized, audit-ready and meet BAS and ATO requirements.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "BAS-ready bookkeeping",
                                "Audit support available",
                                "End-of-year account service",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>



                {/* BLOCK 2 — FINANCIAL REPORTING */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#93b2d4] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div {...fadeSide(-30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Financial Reporting</h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Australia-focused financial reporting delivers easy-to-understand statements that satisfy AASB standards and business needs.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Compliant with AASB",
                                "Detailed business reports",
                                "Growth-focused insights",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div {...fadeSide(30)}>
                        <img
                            src="/finance/countries/australia/australia_financialreporting.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </section>



                {/* BLOCK 3 — TAX RETURNS */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/australia/australia_tax.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Tax Return Preparation</h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Tax return preparation in Australia helps you maximize refunds and handle complex returns for both individuals and businesses and enterprises.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Refund maximization strategies",
                                "Fast multi-tax returns",
                                "ATO requirements fulfilled",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>



                {/* BLOCK 4 — PAYROLL */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#93b2d4] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div {...fadeSide(-30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Payroll Processing</h3>
                        <p className="text-[#455A64] leading-relaxed">
                            Our payroll processing is tailored for Australia’s PAYG and superannuation, guaranteeing accurate and Fair Work Act compliance.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "PAYG and superannuation included",
                                "Fair Work compliance",
                                "On-time staff payments",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div {...fadeSide(30)}>
                        <img
                            src="/finance/countries/australia/australia_payroll.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </section>



                {/* BLOCK 5 — SALES TAX */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#E3EEF3] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/australia/australia_taxfile.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Sales Tax Filing</h3>
                        <p className="text-[#455A64] leading-relaxed">
                            BAS and GST filing for Australian companies keeps your business on track with all state and federal regulations.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "BAS/GST filing expertise",
                                "Multi-state compliance",
                                "Reliable, prompt submissions",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
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
