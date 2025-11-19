"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, CheckCircle2, BarChart2, UserCheck, Cpu, TrendingUp, Mail, Pencil, Video, Users, Target, Rocket, ChartBar, Clock } from "lucide-react";
import Link from "next/link";

// 1️⃣ Hero Section
const HeroSection: React.FC = () => (
    <section
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/digitalmarketing/digitalmarketing_bg.jpg')" }}
    >
        {/* Light semi-transparent overlay for better readability, less dark */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Optional subtle fog layer */}
        <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-20" />

        {/* Subtle particle layer */}
        <div className="absolute inset-0 bg-[url('/effects/particles.png')] opacity-10" />

        {/* Content with animation */}
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative max-w-5xl text-center px-6 z-10"
        >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Digital Marketing Services That <span className="text-[#4FC3F7]">Drive Real Business Growth</span>
            </h1>
            <p className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto text-blue-300">
                From performance marketing to SEO, branding, and social media — we build digital engines that scale globally.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4FC3F7" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#4FC3F7] text-[#031A2F] font-semibold rounded-lg px-16 py-4 text-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-[#4FC3F7]/60 transition"
                >
                    Get Started
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4FC3F7" }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-[#4FC3F7] text-[#4FC3F7] font-semibold rounded-lg px-16 py-4 text-xl shadow-lg hover:bg-[#4FC3F7] hover:text-[#031A2F] focus:outline-none focus:ring-4 focus:ring-[#4FC3F7]/60 transition"
                >
                    Talk to Our Experts
                </motion.button>
            </div>
        </motion.div>
    </section>

);

// 2️⃣ Services Grid Section
interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
}
const services: Service[] = [
    {
        icon: <TrendingUp className="w-10 h-10 text-[#4FC3F7]" />,
        title: "SEO (Search Engine Optimization)",
        description: "Boost your search visibility with tailored, white-hat strategies focusing on sustainable results.",
    },
    {
        icon: <BarChart2 className="w-10 h-10 text-[#4FC3F7]" />,
        title: "Performance Marketing",
        description: "Optimize Meta & Google Ads campaigns for maximum ROI and lead generation efficiency.",
    },
    {
        icon: <Users className="w-10 h-10 text-[#4FC3F7]" />,
        title: "Social Media Management",
        description: "Engage your audience across platforms with crafted campaigns that drive brand affinity.",
    },
    {
        icon: <Pencil className="w-10 h-10 text-[#4FC3F7]" />,
        title: "Content Marketing & Copywriting",
        description: "Compelling, strategic content that educates, entertains, and converts your audience.",
    },
    {
        icon: <Mail className="w-10 h-10 text-[#4FC3F7]" />,
        title: "Email & Automation Marketing",
        description: "Personalized workflows and automation driving customer journeys and lifetime value.",
    },
    {
        icon: <Rocket className="w-10 h-10 text-[#4FC3F7]" />,
        title: "Branding & Creative Design",
        description: "Create memorable brand stories and visuals that set you apart in a crowded market.",
    },
    {
        icon: <ChartBar className="w-10 h-10 text-[#4FC3F7]" />,
        title: "Web Analytics & CRO Optimization",
        description: "Data-driven insights to improve your conversion rates and overall digital performance.",
    },
    {
        icon: <Target className="w-10 h-10 text-[#4FC3F7]" />,
        title: "Influencer & Outreach Marketing",
        description: "Build authentic connections and amplify your reach via expert influencer campaigns.",
    },
    {
        icon: <Video className="w-10 h-10 text-[#4FC3F7]" />,
        title: "Video Marketing & Motion Graphics",
        description: "Engaging video content and animations that elevate your message and brand.",
    },
];

const ServicesSection: React.FC = () => (
    <section className="py-20 bg-[#e3ecfc] w-full mx-auto px-10">
        <h2 className="text-4xl font-bold text-[#032542] mb-16 text-center">Services We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ icon, title, description }) => (
                <motion.div
                    key={title}
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(79,195,247,0.2)" }}
                    className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start space-y-4 cursor-pointer transition-shadow duration-300"
                >
                    <div>{icon}</div>
                    <h3 className="text-xl font-semibold text-[#032542]">{title}</h3>
                    <p className="text-[#0A2E4D]">{description}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

// 3️⃣ Why Choose Us Section
const points = [
    { icon: <CheckCircle2 className="w-8 h-8 text-[#4FC3F7]" />, title: "ROI-Driven Strategies", desc: "Maximize return on every marketing dollar spent." },
    { icon: <UserCheck className="w-8 h-8 text-[#4FC3F7]" />, title: "Expert Specialists", desc: "Dedicated experts across every marketing channel." },
    { icon: <BarChart2 className="w-8 h-8 text-[#4FC3F7]" />, title: "Data-Backed Decisions", desc: "Analytics-driven strategies for precise targeting." },
    { icon: <Cpu className="w-8 h-8 text-[#4FC3F7]" />, title: "Transparent Reporting", desc: "Clear insights and measurable outcomes." },
    { icon: <Clock className="w-8 h-8 text-[#4FC3F7]" />, title: "Full-Funnel Strategy", desc: "Optimized customer journey from awareness to loyalty." },
    { icon: <Rocket className="w-8 h-8 text-[#4FC3F7]" />, title: "AI-Powered Optimization", desc: "Leverage AI to continuously refine campaigns." },
    { icon: <Users className="w-8 h-8 text-[#4FC3F7]" />, title: "Fast Execution & Global Expertise", desc: "Rapid rollouts with a global perspective." },
];

const WhyChooseUsSection: React.FC = () => (
    <section className="bg-[#031A2F] py-20 w-full mx-auto px-6 text-white rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose ITSASOO for Digital Marketing?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {points.map(({ icon, title, desc }) => (
                <motion.div
                    key={title}
                    whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(79,195,247,0.6)" }}
                    className="flex flex-col items-start bg-[#0A2E4D] p-6 rounded-xl cursor-default transition-shadow"
                >
                    <div className="mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-[#BFD9E8]">{desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

// 4️⃣ Our Process Timeline
const timelineSteps = [
    { title: "Requirement Understanding", image: "/digitalmarketing/process/step1.jpg" },
    { title: "Market & Competitor Research", image: "/digitalmarketing/process/step2.jpg" },
    { title: "Strategy Building", image: "/digitalmarketing/process/step3.jpg" },
    { title: "Campaign Creation", image: "/digitalmarketing/process/step4.jpg" },
    { title: "Execution & Monitoring", image: "/digitalmarketing/process/step5.jpg" },
    { title: "Optimization & Reporting", image: "/digitalmarketing/process/step6.jpg" },
];

const ProcessTimelineSection: React.FC = () => (
    <section className="py-24 max-w-7xl mx-auto px-6 relative bg-white rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-16">Our Digital Marketing Process</h2>
        <div className="relative border-l-4 border-[#4FC3F7] max-w-4xl mx-auto">
            {timelineSteps.map(({ title, image }, i) => {
                const isLeft = i % 2 === 0;
                return (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                        className={`mb-16 flex w-full max-w-4xl relative ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                        <div className="absolute top-6 left-[-16px] bg-[#4FC3F7] rounded-full w-8 h-8 shadow-md z-20" />
                        <div className="w-1/2 max-w-[280px] rounded-xl overflow-hidden shadow-lg">
                            <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl" />
                        </div>
                        <div className={`w-1/2 p-6 bg-[#0A2E4D] rounded-xl shadow-xl text-white flex items-center`}>
                            <h3 className="text-2xl font-bold m-0">{title}</h3>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    </section>
);

// 5️⃣ Results & Metrics
const metrics = [
    { label: "4× Faster Growth for SMEs", value: "4×" },
    { label: "10M+ Ads Impressions Delivered", value: "10M+" },
    { label: "300% Traffic Boost Delivered", value: "300%" },
    { label: "40+ Brands Managed", value: "40+" },
];

const MetricsSection: React.FC = () => (
    <section className="py-20 bg-[#E9F3FF] w-full mx-auto px-6 text-[#032542] rounded-xl shadow-md text-center">
        <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {metrics.map(({ label, value }) => (
                <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl p-6 shadow-lg flex flex-col justify-center items-center"
                >
                    <span className="text-5xl font-extrabold text-[#4FC3F7]">{value}</span>
                    <span className="mt-2 text-lg font-semibold">{label}</span>
                </motion.div>
            ))}
        </div>
    </section>
);

// 6️⃣ Industries We Serve
const industries = [
    { icon: "/digitalmarketing/industries/finance.svg", title: "Finance & CPA Firms" },
    { icon: "/digitalmarketing/industries/tech.svg", title: "Tech Startups" },
    { icon: "/digitalmarketing/industries/commerce.svg", title: "E-Commerce" },
    { icon: "/digitalmarketing/industries/healthcare.svg", title: "Healthcare" },
    { icon: "/digitalmarketing/industries/realestate.svg", title: "Real Estate" },
    { icon: "/digitalmarketing/industries/education.svg", title: "Education" },
    { icon: "/digitalmarketing/industries/hospitality.svg", title: "Hospitality" },
    { icon: "/digitalmarketing/industries/manufacturing.svg", title: "Manufacturing" },
];

const IndustriesSection: React.FC = () => (
    <section className="py-24 bg-white max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#032542] mb-12 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {industries.map(({ icon, title }) => (
                <div key={title} className="p-6 rounded-xl bg-[#F7FAFC] hover:shadow-lg transition-shadow cursor-default flex flex-col items-center">
                    <img src={icon} alt={title} className="h-16 mb-4" />
                    <h3 className="text-xl font-semibold text-[#000000]">{title}</h3>
                </div>
            ))}
        </div>
    </section>
);

// 7️⃣ Case Studies / Success Stories
const caseStudies = [
    {
        industry: "CPA Firm — USA",
        problem: "Low website traffic",
        solution: "300% organic growth through SEO and content marketing",
        results: ["10× more inbound leads", "100% improved SEO score"],
    },
    {
        industry: "E-Commerce — UK",
        problem: "Poor ad conversions",
        solution: "Optimized paid campaigns with data-driven targeting",
        results: ["Better CPC by 35%", "2× conversion rate"],
    },
    {
        industry: "Tech Startup — Canada",
        problem: "Low brand awareness",
        solution: "Influencer and outreach marketing",
        results: ["5× increase in social mentions", "Brand reach doubled"],
    },
];

const CaseStudiesSection: React.FC = () => (
    <section className="py-24 bg-[#E9F3FF] max-w-7xl mx-auto px-6 text-[#032542]">
        <h2 className="text-4xl font-bold mb-14 text-center">Case Studies / Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {caseStudies.map(({ industry, problem, solution, results }) => (
                <div key={industry} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-4">{industry}</h3>
                    <ul className="mb-4">
                        <li className="mb-1 text-red-600">❌ Problem: {problem}</li>
                        <li className="mb-1 text-green-700">✔ Solution: {solution}</li>
                        <li>✔ Result:</li>
                        <ul className="list-disc list-inside ml-6">
                            {results.map((res, i) => (<li key={i}>{res}</li>))}
                        </ul>
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

// 8️⃣ Testimonials Section
const testimonials = [
    {
        stars: 5,
        quote: "ITSASOO transformed our digital marketing results with precise analytics and creative campaigns.",
        client: "Michael, Startup Owner",
        region: "USA",
    },
    {
        stars: 5,
        quote: "Thanks to ITSASOO, our social media reach increased exponentially with measurable results.",
        client: "Sara, Marketing Head",
        region: "UK",
    },
    {
        stars: 5,
        quote: "Professional team with great insights that doubled our inbound leads within months.",
        client: "Raj, CEO",
        region: "Canada",
    },
];

const TestimonialsSection: React.FC = () => (
    <section className="py-24 bg-white max-w-7xl mx-auto px-6 text-[#032542] text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {testimonials.map(({ stars, quote, client, region }, i) => (
                <div
                    key={i}
                    className="bg-[#E9F3FF] rounded-2xl p-8 shadow-md"
                >
                    <div className="flex space-x-1 justify-center mb-4 text-yellow-400">
                        {[...Array(5)].map((_, idx) => (
                            <svg key={idx} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <blockquote className="italic text-lg mb-4">“{quote}”</blockquote>
                    <footer className="font-semibold">{client} <span className="text-[#4fc3f7]">({region})</span></footer>
                </div>
            ))}
        </div>
    </section>
);

// 9️⃣ Global Presence Map (Placeholder)
const GlobalPresenceMap: React.FC = () => (
    <section className="py-24 bg-[#F0F7FB] text-[#032542] text-center w-full mx-auto px-6 rounded-xl shadow-inner">
        <h2 className="text-4xl font-bold mb-8">Our Global Presence</h2>
        <img src="/worldmap.png" alt="Global Presence Map ITSASOO" className="mx-auto max-w-full rounded-lg shadow-md" />
        <p className="mt-6 max-w-xl mx-auto text-lg">
            We serve clients across India (HQ), USA, Canada, UK, Australia, New Zealand, and more.
        </p>
    </section>
);

// 🔟 Call to Action Strip
const CTAStrip: React.FC = () => (
    <section className="py-20 bg-gradient-to-r from-[#031A2F] via-[#064A7F] to-[#4FC3F7] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 z-20 relative">
            <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
                Ready to Scale Your Digital Presence?
            </h2>
            <p className="mb-10 text-lg max-w-lg mx-auto">
                Speak to our experts and unlock data-driven growth today.
            </p>
            <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #4FC3F7" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#031A2F] rounded-full px-16 py-4 font-semibold shadow-lg transition focus:outline-none focus:ring-4 focus:ring-[#4FC3F7]/70"
            >
                Get Started
            </motion.button>
        </div>
        <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-10 pointer-events-none" />
    </section>
);

// 11️⃣ Newsletter Signup Section
const NewsletterSection: React.FC = () => (
    <section className="py-16 bg-[#E9F3FF] max-w-7xl mx-auto px-6 rounded-xl shadow-inner text-center">
        <h2 className="text-3xl font-semibold text-[#032542] mb-6">
            🚀 Get Weekly Business Growth Insights
        </h2>
        <form className="max-w-md mx-auto flex space-x-4">
            <input
                type="email"
                placeholder="Your email"
                className="flex-grow rounded-full px-6 py-3 outline-none border border-blue-300 placeholder-blue-400 focus:ring-4 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-[#4FC3F7] hover:bg-[#61bcf7] text-[#031A2F] rounded-full px-8 font-semibold shadow-md transition"
            >
                Subscribe
            </button>
        </form>
        <p className="mt-3 text-sm text-[#0A2E4D]/60">We never spam. Unsubscribe anytime.</p>
    </section>
);

// 12️⃣ Footer (can be imported or implemented as required)


export default function DigitalMarketingServicesPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <ServicesSection />
            <WhyChooseUsSection />
            {/* <ProcessTimelineSection /> */}
            <MetricsSection />
            <IndustriesSection />
            <CaseStudiesSection />
            <TestimonialsSection />
            <GlobalPresenceMap />
            <CTAStrip />
            {/* <NewsletterSection /> */}
            {/* Footer here */}
        </main>
    );
}
