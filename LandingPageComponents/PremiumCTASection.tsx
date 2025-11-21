// File: PremiumCTASection.tsx
"use client";
import Link from "next/link";
import React from "react";

const PremiumCTASection: React.FC = () => {
    return (
        <section
            className="relative w-full py-24 flex items-center justify-center bg-[#031A2F] overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/about/about_bg.jpg')" }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

            {/* Content */}
            <div className="relative px-6 max-w-5xl text-center z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#D1E7F5] drop-shadow-lg mb-8 leading-tight">
                    Ready to scale your operations with precision & compliance?
                </h2>
                <Link href="/contact">
                    <button
                        type="button"
                        className="inline-block bg-[#4FC3F7] text-[#031A2F] font-semibold rounded-lg px-10 py-4 text-xl shadow-lg transition-transform duration-300 ease-in-out
             hover:bg-[#61bcf7] hover:scale-105
             active:bg-[#369ed7] active:scale-95
             focus:outline-none focus:ring-4 focus:ring-[#4FC3F7]/60"
                    >
                        Get Started →
                    </button>
                </Link>

            </div>
        </section >
    );
};

export default PremiumCTASection;
