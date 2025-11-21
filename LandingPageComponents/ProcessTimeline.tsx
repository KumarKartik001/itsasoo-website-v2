"use client";
import Image from "next/image";

const steps = [
    {
        title: "Discovery & Requirement Understanding",
        description:
            "We analyze workflows, pain points, compliance needs, and operational expectations to establish clarity and alignment.",
        img: "/process/process1.jpg",
    },
    {
        title: "Process Mapping",
        description:
            "Our experts define structured workflows, SOPs, KPIs, ownership layers, and reporting frameworks.",
        img: "/process/process2.jpg",
    },
    {
        title: "Team Setup",
        description:
            "A dedicated team is formed with the right mix of specialists and tools based on your operational needs.",
        img: "/process/process3.jpg",
    },
    {
        title: "Execution & Review",
        description:
            "Operations begin with multi-layered reviews to ensure accuracy, consistency, and compliance.",
        img: "/process/process4.jpg",
    },
    {
        title: "Delivery & Reporting",
        description:
            "Final outputs are delivered with audit-ready accuracy, standardized reporting, and performance dashboards.",
        img: "/process/process5.jpg",
    },
    {
        title: "Ongoing Optimization",
        description:
            "Continuous enhancements to improve speed, reduce costs, strengthen controls, and scale operations.",
        img: "/process/process6.jpg",
    },
];

export default function ProcessTimeline() {
    return (
        <section className="relative py-28 bg-[#051225] overflow-hidden">

            {/* LIGHTWEIGHT Glow (NO BLUR) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,147,255,0.15),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(18,94,255,0.10),transparent_65%)]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Title */}
                <h2 className="text-center text-5xl font-bold text-white opacity-0 animate-fade-in">
                    Our <span className="text-[#48C8FF]">Process</span>
                </h2>

                <p className="text-center text-slate-300 max-w-2xl mx-auto mt-4 opacity-0 animate-fade-in delay-200">
                    A refined, transparent and globally trusted execution framework.
                </p>

                {/* Timeline */}
                <div className="relative mt-20">

                    {/* Middle Line */}
                    <div className="absolute left-1/2 top-0 h-full w-[3px] bg-linear-to-b from-[#48C8FF] to-transparent opacity-60"></div>

                    <div className="space-y-32">
                        {steps.map((step, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`
                                        relative flex flex-col md:flex-row items-center gap-10 
                                        opacity-0 animate-slide-up 
                                        will-change-[transform,opacity]
                                        ${isLeft ? "md:flex-row-reverse" : ""}
                                    `}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >

                                    {/* Dot */}
                                    <div className="
                                        absolute left-1/2 -translate-x-1/2 
                                        w-5 h-5 rounded-full 
                                        bg-[#48C8FF]
                                        border-4 border-[#051225]
                                        shadow-[0_0_20px_rgba(72,200,255,0.6)]
                                    "></div>

                                    {/* Image */}
                                    <div className="md:w-1/2 w-full rounded-3xl overflow-hidden shadow-xl bg-white/5 border border-white/10">
                                        <Image
                                            src={step.img}
                                            alt={step.title}
                                            width={800}
                                            height={500}
                                            loading="lazy"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className="
                                        md:w-1/2 w-full bg-white/10 
                                        rounded-3xl p-8 
                                        shadow-lg border border-white/10
                                        text-white
                                    ">
                                        <h3 className="text-3xl font-semibold text-[#48C8FF]">
                                            {step.title}
                                        </h3>
                                        <p className="mt-3 text-slate-200 leading-relaxed text-lg">
                                            {step.description}
                                        </p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }

                @keyframes slide-up {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                .animate-slide-up {
                    animation: slide-up 0.7s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
