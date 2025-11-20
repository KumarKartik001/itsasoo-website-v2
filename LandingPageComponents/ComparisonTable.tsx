// File: ComparisonTable.tsx
"use client";
import { motion } from "framer-motion";

interface RowData {
    feature: string;
    inHouse: string;
    itsasoo: string;
}

const rows: RowData[] = [
    { feature: "Cost", inHouse: "High", itsasoo: "Low" },
    { feature: "Scalability", inHouse: "Limited", itsasoo: "Instant" },
    { feature: "Compliance", inHouse: "Risky", itsasoo: "Fully Managed" },
    { feature: "Support", inHouse: "8 hours", itsasoo: "24×7" },
    { feature: "Expertise", inHouse: "Depends", itsasoo: "Dedicated Specialists" },
];

const rowVariants = {
    rest: { scale: 1, backgroundColor: "transparent", boxShadow: "none" },
    hover: {
        scale: 1.03,
        backgroundColor: "#D9F2FF",
        boxShadow: "0 0 12px 3px rgba(79,195,247,0.4)",
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const ComparisonTable: React.FC = () => {
    return (
        <section className="bg-[#aac3db] py-16 flex justify-center">
            <div className="w-[90%] bg-[#E9F3FF] rounded-2xl shadow-[inset_0_0_15px_rgba(151,196,227,0.4)] p-10">
                <h2 className="text-center text-4xl font-extrabold mb-10 text-[#0A2E4D] tracking-wide">
                    What Makes Us Different
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full rounded-xl overflow-hidden table-auto border-collapse">
                        <thead>
                            <tr
                                className="bg-gradient-to-r from-[#0A2E4D] via-[#254B73] to-[#0A2E4D] text-white uppercase tracking-widest text-sm select-none"
                                style={{ boxShadow: "0 4px 12px #4FC3F7" }}
                            >
                                <th className="py-5 px-8 font-semibold rounded-tl-xl border-r border-[#4FC3F7]/70">
                                    Feature
                                </th>
                                <th className="py-5 px-8 font-semibold border-r border-[#4FC3F7]/70">
                                    In-House
                                </th>
                                <th className="py-5 px-8 font-semibold rounded-tr-xl">
                                    ITSASOO
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <motion.tr
                                    key={idx}
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    variants={rowVariants}
                                    className={`${idx % 2 === 0 ? "bg-[#F5FAFF]" : "bg-white"}`}
                                    style={{ cursor: "pointer" }}
                                >
                                    <td className="py-6 px-8 font-semibold text-[#0A2E4D] border-r border-[#4FC3F7]/50 text-lg">
                                        {row.feature}
                                    </td>
                                    <td className="py-6 px-8 text-[#42506B] border-r border-[#4FC3F7]/50 text-lg">
                                        {row.inHouse}
                                    </td>
                                    <td className="py-6 px-8 text-[#116BB3] text-lg font-semibold">
                                        <span className="inline-block bg-[#4FC3F7]/20 text-[#0277BD] rounded-full px-4 py-1 tracking-wide drop-shadow-sm select-none">
                                            {row.itsasoo}
                                        </span>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
