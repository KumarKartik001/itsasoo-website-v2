"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

/* SAME STRUCTURE AS AUSTRALIA PAGE */

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


export default function IndiaFinancePage() {
    return (
        <section className="bg-[#f0d6c8]">

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white overflow-hidden">

                {/* Background */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: "url('/finance/countries/india/india.jpg')" }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

                {/* Hero text */}
                <motion.div {...fadeUp} className="relative text-center max-w-3xl mx-auto text-white px-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
                        India <span className="text-[#ff6600]"> Finance Outsourcing Services</span>
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-gray-200 drop-shadow-md">
                        Professional accounting, taxation, payroll and bookkeeping outsourcing —
                        trusted by Indian accounting firms for accuracy, compliance, and efficiency.
                    </p>
                </motion.div>
            </section>


            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">


                {/* BLOCK 1 — BOOKKEEPING */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#fff5f0] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/india/india_bookkeeping.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Bookkeeping & Financial Finalization</h3>
                        <p className="text-black leading-relaxed">
                            India-based bookkeeping services deliver precise account finalization for companies expanding locally and globally.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "India tax-compliant books",
                                "Global accounting support",
                                "Quick account closure",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#ff6600] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>



                {/* BLOCK 2 — FINANCIAL REPORTING */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#f3c8ae] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div {...fadeSide(-30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Financial Reporting</h3>
                        <p className="text-black leading-relaxed">
                            Financial reporting in India and worldwide brings transparency, meeting regional and international standards.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Reports for startups and MNCs",
                                "Multi-country compliance",
                                "Performance tracking",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#ff6600] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div {...fadeSide(30)}>
                        <img
                            src="/finance/countries/india/india_financialreporting.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </section>



                {/* BLOCK 3 — TAX RETURNS */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#fff5f0] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/india/india_tax.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Tax Return Preparation</h3>
                        <p className="text-black leading-relaxed">
                            Tax return preparation in India and other regions ensures proper Income Tax, VAT, and cross-border regulatory compliance.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "IT & VAT expertise",
                                "Cross-border compliance",
                                "Refund maximization",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#ff6600] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>



                {/* BLOCK 4 — PAYROLL */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#f3c8ae] p-10 rounded-3xl shadow-lg">

                    {/* Text */}
                    <motion.div {...fadeSide(-30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Payroll Processing</h3>
                        <p className="text-black leading-relaxed">
                            Payroll services in India support PF, ESI, and statutory deductions while scaling for global teams.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Statutory compliance (PF/ESI)",
                                "Scalable for multinationals",
                                "On-time payroll management",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#ff6600] w-6 h-6 mt-1" />
                                    <span className="bg-white/40 px-3 py-1 rounded-md shadow-sm">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div {...fadeSide(30)}>
                        <img
                            src="/finance/countries/india/india_payroll.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </section>



                {/* BLOCK 5 — SALES TAX */}
                <section className="grid md:grid-cols-2 gap-14 items-center bg-[#fff5f0] p-10 rounded-3xl shadow-lg">

                    {/* Image */}
                    <motion.div {...fadeSide(-30)}>
                        <img
                            src="/finance/countries/india/india_taxfile.jpg"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeSide(30)}>
                        <h3 className="text-3xl font-extrabold text-black mb-4">Sales Tax Filing</h3>
                        <p className="text-black leading-relaxed">
                            GST filing services for India and global businesses offer multi-state returns and international regulatory adherence.

                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "GST expertise",
                                "Multi-jurisdiction coverage",
                                "Reliable filings",
                            ].map((p) => (
                                <li key={p} className="flex gap-3 text-black text-lg font-medium">
                                    <CheckCircle className="text-[#ff6600] w-6 h-6 mt-1" />
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
