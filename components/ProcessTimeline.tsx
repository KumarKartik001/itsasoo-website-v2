"use client";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Discovery & Requirement Understanding",
        description:
            "We analyze workflows, pain points, compliance needs, and operational expectations.",
        img: "/placeholder-step-1.jpg",
    },
    {
        title: "Process Mapping",
        description:
            "We design end-to-end process structures, SOPs, KPIs, responsibilities, and reporting.",
        img: "/placeholder-step-2.jpg",
    },
    {
        title: "Team Setup",
        description:
            "We allocate dedicated specialists based on required skill sets and workload demands.",
        img: "/placeholder-step-3.jpg",
    },
    {
        title: "Execution & Review",
        description:
            "Operations begin with continuous review layers to ensure accuracy and consistency.",
        img: "/placeholder-step-4.jpg",
    },
    {
        title: "Delivery & Reporting",
        description:
            "Final outputs are delivered with audit-ready documentation and dashboards.",
        img: "/placeholder-step-5.jpg",
    },
    {
        title: "Ongoing Optimization",
        description:
            "We continuously refine workflows to increase speed, reduce cost, and elevate quality.",
        img: "/placeholder-step-6.jpg",
    },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            type: "spring",
            stiffness: 70,
            damping: 15,
        },
    }),
};

const TimelineStacked = () => {
    return (
        <section className="bg-[#03132A] py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
                    Our <span className="text-[#4FC3F7]">Process</span>
                </h2>
                <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
                    A streamlined, transparent operational model designed for global
                    scalability.
                </p>

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-center rounded-2xl shadow-lg p-8 bg-gradient-to-b from-[#052547] to-[#a8b3e4] pointer-events-none hover:shadow-2xl"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 0 25px #4FC3F7" }}
                        >
                            <div className="md:w-1/2 md:pr-10 text-white">
                                <h3 className="text-[#4FC3F7] text-2xl font-semibold mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-[#D1E7F5] text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-2xl shadow-inner">
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="w-full h-60 object-cover object-center opacity-90"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineStacked;
