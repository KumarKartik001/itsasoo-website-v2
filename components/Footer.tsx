"use client";
import React from "react";

const icons = {
    linkedin: (
        <img
            src="/svgs/linkedin.svg" // apna downloaded svg path
            alt="LinkedIn"
            className="w-5 h-5"
        />
    ),
    twitter: (
        <img
            src="/svgs/twitter.svg"
            alt="Twitter"
            className="w-5 h-5"
        />
    ),
    facebook: (
        <img
            src="/svgs/facebook.svg"
            alt="Facebook"
            className="w-5 h-5"
        />
    ),
    instagram: (
        <img
            src="/svgs/instagram.svg"
            alt="Instagram"
            className="w-5 h-5"
        />
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
            {/* <div className="max-w-4xl mx-auto text-center mb-12">
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
            </div> */}

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
                            link="https://www.linkedin.com/company/itsasoo-solutions-private-limited/"
                        />
                        <SocialIcon name="twitter" link="https://x.com/Itsasoosol88644" />
                        <SocialIcon name="facebook" link="https://www.facebook.com/profile.php?id=61565472526946" />
                        <SocialIcon name="instagram" link="https://www.instagram.com/itsasoo.i/" />
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
