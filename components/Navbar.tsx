"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
    // Mobile menu open state
    const [isOpen, setIsOpen] = useState(false);
    // Detect scroll for shrinking navbar
    const [scrolled, setScrolled] = useState(false);

    // Desktop dropdown states
    const [servicesOpen, setServicesOpen] = useState(false);
    const [financeOpen, setFinanceOpen] = useState(false);

    // Mobile accordion states
    const [servicesMobile, setServicesMobile] = useState(false);
    const [financeMobile, setFinanceMobile] = useState(false);

    // Hover timeouts for smooth dropdown
    const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
    const financeTimeout = useRef<NodeJS.Timeout | null>(null);

    // Scroll listener
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close all mobile menus
    const closeAllMenus = () => {
        setIsOpen(false);
        setServicesMobile(false);
        setFinanceMobile(false);
    };

    // Close desktop menus
    const closeDesktopMenus = () => {
        setServicesOpen(false);
        setFinanceOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className={`
                    backdrop-blur-xl bg-white/40 border border-white/30
                    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    rounded-3xl w-full max-w-6xl
                    transition-all duration-300
                    ${scrolled ? "py-3" : "py-4"}
                `}
            >
                <div className="flex items-center justify-between px-6">

                    {/* LOGO */}
                    <Link href="/home" className="flex items-center">
                        <img src="/logo.png" alt="ITSASOO Logo" className="h-12 w-auto" />
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-8 ml-auto md:mr-5">
                        <Link href="/" className="nav-link navsize" onClick={closeDesktopMenus}>Home</Link>
                        <Link href="/about" className="nav-link navsize" onClick={closeDesktopMenus}>About Us</Link>

                        {/* SERVICES DESKTOP DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => {
                                if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
                                setServicesOpen(true);
                            }}
                            onMouseLeave={() => {
                                servicesTimeout.current = setTimeout(() => {
                                    setServicesOpen(false);
                                    setFinanceOpen(false);
                                }, 120);
                            }}
                        >
                            <span className="nav-link navsize cursor-pointer">Services</span>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.18 }}
                                        className="absolute left-0 top-8 mt-4 w-56 
                                        bg-white/95 backdrop-blur-xl rounded-xl p-2 border navdrop shadow-lg"
                                    >
                                        {/* Finance & Accounts Submenu */}
                                        {/* Finance & Accounts Submenu */}
                                        <div
                                            className="relative cursor-pointer"
                                            onMouseEnter={() => {
                                                if (financeTimeout.current) clearTimeout(financeTimeout.current);
                                                setFinanceOpen(true);
                                            }}
                                            onMouseLeave={() => {
                                                financeTimeout.current = setTimeout(() => {
                                                    setFinanceOpen(false);
                                                }, 120);
                                            }}
                                        >
                                            <Link href="/services/finance" onClick={closeDesktopMenus}>
                                                <div className="dropdown-item flex justify-between items-center px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
                                                    <span>Finance & Accounts <ChevronRight size={16} className="inline" /></span>
                                                </div>
                                            </Link>

                                            <AnimatePresence>
                                                {financeOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -8 }}
                                                        transition={{ duration: 0.18 }}
                                                        className="absolute top-0 left-full ml-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl p-2 border navdrop shadow-lg"
                                                    >
                                                        {/* Sub-items */}
                                                        {["USA", "Canada", "UK", "Australia", "New Zealand", "India & Others"].map((item) => (
                                                            <Link key={item} href={`/services/finance/${item.toLowerCase().replace(" ", "")}`} onClick={closeDesktopMenus}>
                                                                <div className="dropdown-item px-3 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200">
                                                                    {item}
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Other services */}
                                        <Link href="/services/itoutsourcing" onClick={closeDesktopMenus}>
                                            <div className="dropdown-item px-3 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200">
                                                IT Outsourcing
                                            </div>
                                        </Link>
                                        <Link href="/services/digitalmarketing" onClick={closeDesktopMenus}>
                                            <div className="dropdown-item px-3 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200">
                                                Digital Marketing
                                            </div>
                                        </Link>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/contact" className="nav-link navsize" onClick={closeDesktopMenus}>Contact Us</Link>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 shadow-md"
                        onClick={closeDesktopMenus}
                    >
                        Get Started
                    </Link>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="md:hidden text-[#0B1B2E]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="md:hidden px-6 pb-4 flex flex-col text-[#0B1B2E] gap-3 mt-2"
                        >
                            <Link href="/" onClick={closeAllMenus} className="mobile-link">Home</Link>
                            <Link href="/about" onClick={closeAllMenus} className="mobile-link">About Us</Link>

                            {/* MOBILE SERVICES ACCORDION */}
                            <div className="flex flex-col">
                                <button
                                    onClick={() => setServicesMobile(!servicesMobile)}
                                    className="mobile-link flex justify-between items-center"
                                >
                                    Services
                                    <ChevronRight className={`transition ${servicesMobile ? "rotate-90" : ""}`} />
                                </button>

                                {/* SERVICES EXPAND */}
                                <AnimatePresence>
                                    {servicesMobile && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="pl-4 flex flex-col gap-2 mt-1"
                                        >
                                            {/* FINANCE ACCORDION */}
                                            <button
                                                onClick={() => setFinanceMobile(!financeMobile)}
                                                className="mobile-sublink flex justify-between items-center"
                                            >
                                                Finance & Accounts
                                                <ChevronRight className={`transition ${financeMobile ? "rotate-90" : ""}`} />
                                            </button>

                                            {/* FINANCE EXPAND */}
                                            <AnimatePresence>
                                                {financeMobile && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="pl-4 flex flex-col gap-2"
                                                    >
                                                        <Link href="/services/finance/usa" onClick={closeAllMenus} className="mobile-sublink">USA</Link>
                                                        <Link href="/services/finance/canada" onClick={closeAllMenus} className="mobile-sublink">Canada</Link>
                                                        <Link href="/services/finance/uk" onClick={closeAllMenus} className="mobile-sublink">UK</Link>
                                                        <Link href="/services/finance/australia" onClick={closeAllMenus} className="mobile-sublink">Australia</Link>
                                                        <Link href="/services/finance/newzealand" onClick={closeAllMenus} className="mobile-sublink">New Zealand</Link>
                                                        <Link href="/services/finance/india" onClick={closeAllMenus} className="mobile-sublink">India & Others</Link>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            <Link href="/services/itoutsourcing" onClick={closeAllMenus} className="mobile-sublink">
                                                IT Outsourcing
                                            </Link>
                                            <Link href="/services/digitalmarketing" onClick={closeAllMenus} className="mobile-sublink">
                                                Digital Marketing
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="/contact" onClick={closeAllMenus} className="mobile-link">Contact Us</Link>

                            <Link
                                href="/contact"
                                onClick={closeAllMenus}
                                className="text-center bg-blue-600 text-white px-5 py-3 rounded-full mt-3"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </nav>
    );
}
