"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Dropdown states
    const [servicesOpen, setServicesOpen] = useState(false);
    const [financeOpen, setFinanceOpen] = useState(false);

    // Hover delay logic (prevent flicker)
    const servicesTimeout = useRef<any>(null);
    const financeTimeout = useRef<any>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="fixed top-4 left-0 right-0 z-[999] flex justify-center px-4">

            {/* Floating Glass Container */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`
                    backdrop-blur-xl backdrop-saturate-150
                    bg-white/40 border border-white/30 
                    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    rounded-3xl w-full max-w-6xl
                    transition-all duration-300
                    ${scrolled ? "py-3" : "py-4"}
                `}
            >
                <div className="flex items-center justify-between px-6">

                    {/* Logo */}
                    <Link href="/home" className="flex items-center gap-2">
                        <img
                            src="/logo (1).png"
                            alt="ITSASOO Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 ml-auto">

                        {/* HOME */}
                        <Link href="/" className="nav-link">Home</Link>

                        {/* ABOUT */}
                        <Link href="/about" className="nav-link">About Us</Link>

                        {/* SERVICES — dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => {
                                clearTimeout(servicesTimeout.current);
                                setServicesOpen(true);
                            }}
                            onMouseLeave={() => {
                                servicesTimeout.current = setTimeout(() => {
                                    setServicesOpen(false);
                                    setFinanceOpen(false);
                                }, 150);
                            }}
                        >
                            <span className="nav-link cursor-pointer">
                                Services
                            </span>

                            {/* DROPDOWN */}
                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.18 }}
                                        className="
                                            absolute left-0 top-8 mt-4
                                            w-52 bg-white/90 backdrop-blur-xl
                                            border border-white/60 shadow-lg
                                            rounded-xl p-2
                                        "
                                    >

                                        {/* Finance & Accounts Outsourcing */}
                                        <div
                                            className="relative"
                                            onMouseEnter={() => {
                                                clearTimeout(financeTimeout.current);
                                                setFinanceOpen(true);
                                            }}
                                            onMouseLeave={() => {
                                                financeTimeout.current = setTimeout(() => {
                                                    setFinanceOpen(false);
                                                }, 150);
                                            }}
                                        >
                                            <div className="dropdown-item flex justify-between">
                                                Finance & Accounts
                                                <span className="text-neutral-600"> ›</span>
                                            </div>

                                            {/* SUB MENU */}
                                            <AnimatePresence>
                                                {financeOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -8 }}
                                                        transition={{ duration: 0.18 }}
                                                        className="
                                                            absolute top-0 left-[100%] ml-2
                                                            w-52 bg-white/90 backdrop-blur-xl
                                                            border border-white/60 shadow-lg
                                                            rounded-xl p-2
                                                        "
                                                    >
                                                        <Link href="/services/finance/usa" className="dropdown-item">USA</Link>
                                                        <Link href="/services/finance/canada" className="dropdown-item">Canada</Link>
                                                        <Link href="/services/finance/uk" className="dropdown-item">UK</Link>
                                                        <Link href="/services/finance/australia" className="dropdown-item">Australia</Link>
                                                        <Link href="/services/finance/newzealand" className="dropdown-item">New Zealand</Link>
                                                        <Link href="/services/finance/india" className="dropdown-item">India & Others</Link>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <Link href="/services/it" className="dropdown-item">
                                            IT Outsourcing
                                        </Link>

                                        <Link href="/services/digital-marketing" className="dropdown-item">
                                            Digital Marketing
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* CONTACT */}
                        <Link href="/contact" className="nav-link">Contact Us</Link>

                    </div>

                    {/* CTA BUTTON */}
                    <Link
                        href="/contact"
                        className="
                            hidden md:inline-flex items-center 
                            bg-blue-600 text-white font-semibold rounded-full
                            px-6 py-3 shadow-md hover:bg-blue-700
                            transition ml-4
                        "
                    >
                        Get Started
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#0B1B2E]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden px-6 pb-4 flex flex-col gap-4"
                    >
                        {["Home", "About Us", "Services", "Contact Us"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "")}`}
                                className="text-[18px] font-medium text-[#0B1B2E] py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="
                                inline-flex justify-center mt-2
                                bg-blue-600 text-white font-semibold rounded-full
                                px-6 py-3 shadow-md hover:bg-blue-700 transition
                            "
                        >
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </motion.div>
        </nav>
    );
}
