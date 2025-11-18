"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-screen h-screen overflow-hidden">

            {/* Background Video */}
            {/* add the "muted" attribute if you want to mute the video running in the background.  */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Soft Overlay (optional, reduce if text is inside video) */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>

            {/* CTA BUTTONS ONLY */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                    absolute bottom-16 left-1/2 -translate-x-1/2 
                    z-20 flex items-center gap-4
                "
            >
                <Link
                    href="/contact"
                    className="
                        bg-blue-600 hover:bg-blue-700 
                        text-white px-8 py-4 rounded-full 
                        shadow-lg font-semibold transition
                    "
                >
                    Get Started
                </Link>

                <Link
                    href="/about"
                    className="
                        bg-white/30 backdrop-blur-md 
                        border border-white/40 
                        text-white px-8 py-4 rounded-full
                        hover:bg-white/40 transition
                    "
                >
                    Learn More
                </Link>
            </motion.div>
        </section>
    );
}
