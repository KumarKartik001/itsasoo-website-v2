// File: FuturisticCaseStudies.jsx
"use client";
import { motion } from "framer-motion";

const caseStudies = [
    {
        industry: "CPA Firm — USA",
        problem: "Delayed bookkeeping",
        solution: "Redesigned workflow & dedicated team",
        results: [
            { label: "60% faster reporting", value: "60%" },
            { label: "30% cost savings", value: "30%" },
            { label: "100% compliance", value: "100%" },
        ],
        icon: (
            <svg
                className="w-12 h-12 text-[#4FC3F7]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 12h6M12 3v18" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
    },
    {
        industry: "E-commerce Business — UK",
        problem: "Inventory mismanagement",
        solution: "Automated stock controls & analytics",
        results: [
            { label: "50% reduction in stockouts", value: "50%" },
            { label: "40% inventory turnover increase", value: "40%" },
            { label: "Improved customer satisfaction", value: "" },
        ],
        icon: (
            <svg
                className="w-12 h-12 text-[#4FC3F7]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
        ),
    },
    {
        industry: "Tech Startup — Canada",
        problem: "Unscalable infrastructure",
        solution: "Cloud migration & DevOps automation",
        results: [
            { label: "70% faster deployment", value: "70%" },
            { label: "Scalable architecture", value: "" },
            { label: "Reduced downtime by 90%", value: "90%" },
        ],
        icon: (
            <svg
                className="w-12 h-12 text-[#4FC3F7]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2l7 7-7 7-7-7 7-7z" />
                <path d="M12 12l7 7-7 7-7-7 7-7z" />
            </svg>
        ),
    },
];

const cardVariants = {
    rest: { y: 0, boxShadow: "0 0 15px rgba(79, 195, 247, 0.2)" },
    hover: {
        y: -12,
        boxShadow:
            "0 10px 25px rgba(79, 195, 247, 0.6), 0 6px 12px rgba(79, 195, 247, 0.5)",
        scale: 1.05,
    },
};

const FuturisticCaseStudies = () => (
    <section className="bg-gradient-to-b from-[#bcdcff] to-[#f3f6f8] py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-extrabold tracking-tight text-[#0A2E4D] drop-shadow-md">
                Case Studies / Success Stories
            </h2>
            <p className="mt-4 text-[#2e4a6b] max-w-2xl mx-auto text-lg font-medium">
                Inspiring results driving the future of finance, accounting & IT.
            </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
            {caseStudies.map(({ industry, problem, solution, results, icon }, i) => (
                <motion.div
                    key={i}
                    tabIndex={0}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={cardVariants}
                    className="relative rounded-xl bg-white/[0.06] bg-clip-padding backdrop-blur-md border border-white/20 p-8 flex flex-col items-start cursor-pointer transition-transform will-change-transform outline-none focus:outline-none"
                >
                    <div className="mb-5">{icon}</div>
                    <h3 className="text-2xl font-semibold text-[#0A2E4D] mb-3">{industry}</h3>

                    <div className="mb-4 text-lg text-[#14426E] space-y-2">
                        <p>
                            <strong className="text-red-500 mr-2">Problem:</strong> {problem}
                        </p>
                        <p>
                            <strong className="text-green-500 mr-2">Solution:</strong> {solution}
                        </p>
                    </div>

                    <div className="mt-auto w-full">
                        <span className="block text-[#0A2E4D] font-bold mb-3">Results:</span>
                        <ul className="space-y-3">
                            {results.map(({ label, value }, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-3 text-[#0A2E4D] font-semibold"
                                >
                                    {value && (
                                        <span className="text-4xl font-extrabold text-[#4FC3F7] min-w-[70px]">
                                            {value}
                                        </span>
                                    )}
                                    <span className="text-lg">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default FuturisticCaseStudies;
