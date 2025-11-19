"use client";

// File: GlobalPresenceInfoSection.jsx

import { motion } from "framer-motion";

const GlobalPresenceSection = () => (
    <section className="relative flex flex-col justify-center min-h-screen w-full bg-[#03132A] px-2">
        <div className="text-center pt-14 pb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4FC3F7] mb-3">
                Our Global Presence
            </h2>
            <p className="text-[#D1E7F5] text-lg md:text-2xl">
                Delivering finance, accounting & IT services across major global markets.
            </p>
        </div>
        <div className="relative w-full flex items-center justify-center z-10">
            <motion.div
                className="mx-auto w-full bg-[#0A2E4D] border-2 border-[#4FC3F7] rounded-2xl shadow-lg p-0"
                animate={{
                    y: [0, -12, 0], // Floating effect: moves up and down gently
                }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <img
                    src="/worldmap.png"
                    alt="ITSASOO Global Map & Locations"
                    className="w-full h-[60vw] max-h-[580px] object-contain rounded-xl"
                    draggable={false}
                />
            </motion.div>
        </div>
    </section>
);

export default GlobalPresenceSection;
