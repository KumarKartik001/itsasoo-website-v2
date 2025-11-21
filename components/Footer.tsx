"use client";
import React from "react";

const icons = {
    linkedin: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5A2.5 2.5 0 114.97 8a2.5 2.5 0 01.01-4.5zM4 9h2v12H4zM9 9h2v1.8h.03A3.4 3.4 0 0114 9c2.6 0 3 1.7 3 3.8V21h-2v-7.2c0-1.7-.03-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V21H8.9z" />
        </svg>
    ),
    twitter: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.46 7.98c.01.14.01.29.01.43 0 4.4-3.35 9.47-9.47 9.47A9.4 9.4 0 014 16.8c.23.03.48.04.73.04a6.67 6.67 0 004.14-1.43 3.33 3.33 0 01-3.1-2.3c.2.03.4.06.62.06.29 0 .58-.03.85-.1a3.32 3.32 0 01-2.67-3.26v-.04c.45.25.97.4 1.52.42A3.32 3.32 0 015 7.08c0-.62.17-1.2.46-1.7a9.45 9.45 0 006.86 3.48 3.32 3.32 0 015.66-3.03 6.62 6.62 0 002.1-.81 3.32 3.32 0 01-1.46 1.83 6.56 6.56 0 001.9-.52 7.05 7.05 0 01-1.66 1.75z" />
        </svg>
    ),
    facebook: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 11h4l-.5 4H13v9h-4v-9H7v-4h2V8c0-3 1.7-5 5-5h3v4h-2c-1 0-2 .5-2 2v2z" />
        </svg>
    ),
    youtube: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 9v6l5-3-5-3zm12-3s-.2-1.4-.8-2a3 3 0 00-2-.8C16.4 3 12 3 12 3s-4.4 0-7.2.2c-.7 0-1.5.3-2 .8-.6.6-.8 2-.8 2S2 7 2 9v2c0 2 .2 4 .2 4s.2 1.4.8 2 .9.8 1.7.9C7.6 18.8 12 19 12 19s4.4 0 7.2-.2c.8 0 1.5-.3 2-.8.6-.6.8-2 .8-2s.2-2 .2-4v-2c0-2-.2-4-.2-4z" />
        </svg>
    ),
};

const SocialIcon = ({
    name,
    link,
}: {
    name: keyof typeof icons;
    link: string;
}) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="p-2 rounded-full border border-[#3c4a56] hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)] transition-all duration-300"
    >
        {icons[name]}
    </a>
);

const LINK_COL = "space-y-2 text-sm text-gray-300";
const TITLE = "text-white font-semibold mb-4";

export default function FuturisticFooter() {
    return (
        <footer className="bg-[#14181d] text-[#cbd6e0] pt-14 pb-8 px-6 select-none border-t border-[#2c3a44]">
            {/* Newsletter */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h3 className="text-cyan-300 font-semibold text-lg mb-4">
                    Get Insights That Drive Business Efficiency
                </h3>

                <form className="flex flex-col sm:flex-row gap-3 justify-center">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="px-4 py-3 rounded-full w-full sm:w-72 bg-[#1b2229] text-gray-200 placeholder-gray-500 outline-none border border-[#2c3a44] focus:border-cyan-300 transition"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-cyan-400 text-[#031A2F] font-semibold rounded-full hover:bg-cyan-300 transition shadow"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {/* Company Info */}
                <div>
                    <h4 className={TITLE}>ITSASOO SOLUTIONS PRIVATE LIMITED</h4>
                    <p className="text-sm leading-relaxed mb-4">
                        A global provider of Finance, IT & Digital Solutions delivering
                        precision, transparency, and long-term growth.
                    </p>
                    <p className="text-cyan-300 font-semibold text-sm mb-4">
                        Precision. Compliance. Growth.
                    </p>

                    <div className="flex gap-3">
                        <SocialIcon
                            name="linkedin"
                            link="https://www.linkedin.com/company/itsasoo/"
                        />
                        <SocialIcon name="twitter" link="https://twitter.com/" />
                        <SocialIcon name="facebook" link="https://facebook.com/" />
                        <SocialIcon name="youtube" link="https://youtube.com/" />
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h4 className={TITLE}>Quick Links</h4>
                    <ul className={LINK_COL}>
                        <li>
                            <a href="/home" className="hover:text-cyan-300 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-cyan-300 transition">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-cyan-300 transition">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/home" className="hover:text-cyan-300 transition">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-cyan-300 transition">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h4 className={TITLE}>Finance & Accounts</h4>
                    <ul className={LINK_COL}>
                        <li>
                            <a href="/services/finance" className="hover:text-cyan-300">
                                Bookkeeping
                            </a>
                        </li>
                        <li>
                            <a href="/services/finance" className="hover:text-cyan-300">
                                Accounts Payable
                            </a>
                        </li>
                        <li>
                            <a href="/services/finance" className="hover:text-cyan-300">
                                Accounts Receivable
                            </a>
                        </li>
                        <li>
                            <a href="/services/finance" className="hover:text-cyan-300">
                                Payroll Processing
                            </a>
                        </li>
                        <li>
                            <a href="/services/finance" className="hover:text-cyan-300">
                                Tax Preparation
                            </a>
                        </li>
                        <li>
                            <a href="/services/finance" className="hover:text-cyan-300">
                                Financial Reporting
                            </a>
                        </li>
                        <li>
                            <a href="/services/finance" className="hover:text-cyan-300">
                                Virtual CFO Services
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h4 className={TITLE}>Contact</h4>
                    <ul className="text-sm space-y-1">
                        <li>Palm Resort, Tower-G1, Rajnagar Ext., Ghaziabad</li>
                        <li>
                            <a href="mailto:social@itsasoo.com" className="hover:text-cyan-300">
                                social@itsasoo.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+911205295768" className="hover:text-cyan-300">
                                +91-12052 95768
                            </a>
                        </li>
                        <li>Available 24×7 for global clients</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-[#2c3a44] pt-6 text-center text-sm text-gray-400">
                <p className="mb-3">
                    © 2025 ITSASOO SOLUTIONS PRIVATE LIMITED. All Rights Reserved.
                </p>
                <div className="flex justify-center gap-6">
                    <a href="/" className="hover:text-cyan-300 transition">
                        Privacy Policy
                    </a>
                    <a href="/" className="hover:text-cyan-300 transition">
                        Terms & Conditions
                    </a>
                    <a href="/" className="hover:text-cyan-300 transition">
                        Sitemap
                    </a>
                    <a href="/" className="hover:text-cyan-300 transition">
                        Cookies Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}
