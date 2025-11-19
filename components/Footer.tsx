// File: FuturisticFooter.tsx

"use client";

import React from "react";

const SocialIcon = ({ name }: { name: string }) => (
    <a
        href="#"
        aria-label={name}
        className="p-2 rounded-full border border-gray-600 hover:border-[#4FC3F7] hover:shadow-[0_0_10px_#4FC3F7] transition duration-300"
    >
        {name === "linkedin" && (
            <svg
                className="w-5 h-5 text-[#BFD9E8]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 8a6 6 0 00-12 0v0a6 6 0 0112 0v0zM4 20V16a4 4 0 014-4h8a4 4 0 014 4v4" />
            </svg>
        )}
        {name === "twitter" && (
            <svg
                className="w-5 h-5 text-[#BFD9E8]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 19c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5z" />
            </svg>
        )}
        {name === "facebook" && (
            <svg
                className="w-5 h-5 text-[#BFD9E8]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M18 2v20H6V2h12z" />
            </svg>
        )}
        {name === "youtube" && (
            <svg
                className="w-5 h-5 text-[#BFD9E8]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10 9v6l4-3-4-3z" />
            </svg>
        )}
    </a>
);

const FuturisticFooter: React.FC = () => {
    return (
        <footer className="relative bg-[#23262c] text-[#BFD9E8] pt-16 pb-10 px-6 max-w-[1600px] mx-auto overflow-hidden select-none">
            {/* Optional radial subtle glow effect behind */}
            <div className="absolute inset-0 pointer-events-none rounded-t-3xl bg-gradient-to-t from-[#252c33] via-[#26333d] to-transparent blur-3xl"></div>

            {/* Newsletter */}
            <div className="mb-12 max-w-3xl mx-auto bg-[#091129] bg-opacity-20 backdrop-blur-md rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-inner">
                <div className="flex items-center space-x-3 text-[#4FC3F7] font-semibold text-base select-text">
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" />
                        <path d="M4 6l8 5 8-5" />
                    </svg>
                    <span>Get Insights That Drive Business Efficiency</span>
                </div>

                <form className="flex w-full sm:max-w-md bg-white rounded-full px-4 py-2">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="flex-grow bg-transparent placeholder-[#484f53] text-[#DDEBFF] outline-none"
                    />
                    <button
                        type="submit"
                        className="ml-3 bg-[#4FC3F7] hover:bg-[#61bcf7] text-[#031A2F] font-semibold rounded-full px-6 py-2 shadow-md transition duration-300 ease-in-out"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Main footer grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10 border-t border-[#4FC3F7]/20 pt-10">
                {/* Columns with vertical separators (on md+) */}
                {[

                    {
                        title: "ITSASOO SOLUTIONS PRIVATE LIMITED",
                        description:
                            "A global provider of Finance & Accounting Outsourcing, IT Services, and Digital Marketing — focusing on precision, transparency, and long-term growth.",
                        links: [
                            { text: "About Us", href: "#" },
                            { text: "Careers", href: "#" },
                            { text: "Leadership", href: "#" },
                            { text: "Contact", href: "#" },
                        ],
                        social: true,
                        tagline: "Precision. Compliance. Growth.",
                    },
                    {
                        title: "Quick Links",
                        links: [
                            { text: "Home", href: "#" },
                            { text: "About", href: "#" },
                            { text: "Services", href: "#" },
                            { text: "Case Studies", href: "#" },
                            { text: "Testimonials", href: "#" },
                            { text: "Contact Us", href: "#" },
                            { text: "Get a Quote", href: "#" },
                        ],
                    },
                    {
                        title: "Finance & Accounts",
                        links: [
                            { text: "Bookkeeping", href: "#" },
                            { text: "Accounts Payable", href: "#" },
                            { text: "Accounts Receivable", href: "#" },
                            { text: "Payroll Processing", href: "#" },
                            { text: "Tax Preparation", href: "#" },
                            { text: "Financial Reporting", href: "#" },
                            { text: "Virtual CFO Services", href: "#" },
                            { text: "USA", href: "#" },
                            { text: "Canada", href: "#" },
                            { text: "UK", href: "#" },
                            { text: "Australia", href: "#" },
                            { text: "New Zealand", href: "#" },
                            { text: "India", href: "#" },
                        ],
                    },
                    {
                        title: "Technology & Digital",
                        links: [
                            { text: "Web Development", href: "#" },
                            { text: "Mobile Apps", href: "#" },
                            { text: "UI/UX Design", href: "#" },
                            { text: "Cloud Solutions", href: "#" },
                            { text: "API Integration", href: "#" },
                            { text: "Cybersecurity", href: "#" },
                            { text: "SEO", href: "#" },
                            { text: "Social Media", href: "#" },
                            { text: "PPC", href: "#" },
                            { text: "Branding", href: "#" },
                        ],
                    },
                    {
                        title: "Contact",
                        details: [
                            "Corporate HQ Address (India)",
                            "Email: info@itsasoo.com",
                            "Phone: +91-XXXXXXXXXX",
                            "Available 24×7 for global clients",
                        ],
                    },

                ].map(({ title, description, tagline, links, social, details }, index, arr) => (
                    <div
                        key={index}
                        className={`${index < arr.length - 1 ? "border-r border-[#4FC3F7]/20 pr-8" : "pr-0"
                            }`}
                    >
                        <h4 className="text-white font-semibold mb-5">{title}</h4>

                        {description && (
                            <>
                                <p className="text-[#BFD9E8] mb-3 text-sm leading-relaxed">{description}</p>
                                {tagline && (
                                    <p className="mb-5 text-[#4FC3F7] font-semibold tracking-wide">{tagline}</p>
                                )}
                            </>
                        )}

                        {links && (
                            <ul className="space-y-2 text-sm">
                                {links.map(({ text, href }, i) => (
                                    <li key={i}>
                                        <a
                                            href={href}
                                            className="hover:text-[#4FC3F7] transition-colors duration-300"
                                        >
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {social && (
                            <div className="flex space-x-3 mt-6">
                                <SocialIcon name="linkedin" />
                                <SocialIcon name="twitter" />
                                <SocialIcon name="facebook" />
                                <SocialIcon name="youtube" />
                            </div>
                        )}

                        {details && (
                            <ul className="text-sm space-y-1 text-[#BFD9E8]">
                                {details.map((item, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {item.includes("Email:") ? (
                                            <a
                                                href={`mailto:${item.split("Email: ")[1]}`}
                                                className="hover:text-[#4FC3F7] transition-colors duration-300"
                                            >
                                                {item}
                                            </a>
                                        ) : (
                                            item
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-[#4FC3F7]/20 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-[#BFD9E8] select-none gap-4">
                <p>© 2024 ITSASOO SOLUTIONS PRIVATE LIMITED. All Rights Reserved.</p>
                <div className="flex space-x-6 text-[#BFD9E8]">
                    <a href="#" className="hover:text-[#4FC3F7] transition">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-[#4FC3F7] transition">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-[#4FC3F7] transition">
                        Sitemap
                    </a>
                    <a href="#" className="hover:text-[#4FC3F7] transition">
                        Cookies Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FuturisticFooter;
