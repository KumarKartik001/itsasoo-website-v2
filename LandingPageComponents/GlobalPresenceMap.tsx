"use client";

import dynamic from "next/dynamic";
import React from "react";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
    ssr: false,
});

export default function GlobalPresenceInfoSection() {
    return (
        <section className="bg-darkBlue text-white py-20 lg:py-32 w-full">
            <div className="text-center px-4 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Global Presence</h2>
                <p className="text-lg lg:text-xl text-gray-300">
                    Delivering finance, accounting & IT services across major global markets.
                </p>
            </div>

            {/* FULL WIDTH MAP */}
            <div className="w-full h-[500px]">
                <LeafletMap />
            </div>
        </section>
    );
}
