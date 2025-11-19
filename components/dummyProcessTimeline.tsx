"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
    {
        title: "Discovery & Requirement Understanding",
        desc: "We begin by analyzing your workflow, pain points, compliance requirements, and operational expectations.",
        img: "/placeholder-process-1.jpg",
    },
    {
        title: "Process Mapping",
        desc: "Our experts map your end-to-end workflow including responsibilities, SOPs, KPIs, and reporting patterns.",
        img: "/placeholder-process-2.jpg",
    },
    {
        title: "Team Setup",
        desc: "We allocate dedicated finance, accounting, or IT specialists based on required skill sets and workload.",
        img: "/placeholder-process-3.jpg",
    },
    {
        title: "Execution & Review",
        desc: "Daily/weekly operations begin with multi-level review and continuous quality control for accuracy.",
        img: "/placeholder-process-4.jpg",
    },
    {
        title: "Delivery & Reporting",
        desc: "Outputs are delivered with audit-ready documentation, dashboards, and compliance reports.",
        img: "/placeholder-process-5.jpg",
    },
    {
        title: "Ongoing Optimization",
        desc: "We fine-tune processes to increase efficiency, reduce cost, and improve turnaround time.",
        img: "/placeholder-process-6.jpg",
    },
];

export default function DummyProcessTimeline() {
    return (
        <section className="relative bg-[#031A2F] text-white py-24 px-6 overflow-hidden">

            {/* Glow Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[200px]" />
                <div className="absolute bottom-[-200px] right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[200px]" />
            </div>

            {/* Heading */}
            <div className="relative text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Our <span className="text-[#4FC3F7]">Process</span>
                </h2>
                <p className="mt-4 text-gray-300 text-lg">
                    A streamlined, transparent operational model designed for global scalability.
                </p>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-6xl mx-auto">

                {/* Center Glowing Line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[4px] bg-[#4FC3F7] rounded-full
                        shadow-[0_0_25px_#4FC3F7]"></div>

                {/* Steps */}
                <div className="flex flex-col gap-32 relative">
                    {steps.map((step, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${!isLeft && "md:flex-row-reverse"}`}
                            >
                                {/* Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.8 }}
                                    className={`w-full md:w-5/12 p-6 rounded-2xl shadow-xl bg-[#0A2E4D]/70 backdrop-blur-xl
                              border border-[#4FC3F7]/10
                              hover:shadow-[0_0_30px_#4FC3F7] hover:bg-[#0A2E4D]/90
                              transition-all duration-300`}
                                >
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    <p className="text-gray-300 mt-3 leading-relaxed">{step.desc}</p>

                                    {/* Placeholder image */}
                                    <div className="mt-6 w-full h-48 rounded-xl overflow-hidden bg-black/20">
                                        <img
                                            src={step.img}
                                            alt={step.title}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    </div>
                                </motion.div>

                                {/* Center Node */}
                                <div className="relative flex flex-col items-center mx-6">
                                    <div className="w-8 h-8 rounded-full bg-[#4FC3F7] shadow-[0_0_20px_#4FC3F7]" />
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
