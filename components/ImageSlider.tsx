"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    return (
        <div className="relative w-full h-[380px] overflow-hidden rounded-2xl shadow-xl">

            <AnimatePresence>
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                />
            </AnimatePresence>

            {/* Left Arrow */}
            <button
                onClick={prev}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={next}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
            >
                <ChevronRight size={28} />
            </button>
        </div>
    );
}
