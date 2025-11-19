"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Cloud, Cpu, Database, Smartphone, PenTool, ShieldCheck, Clock, Users, Bolt, Globe2 } from "lucide-react";

// 1️⃣ Hero Section
const HeroSection: React.FC = () => (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/it/it_bg.jpg')" }} // Placeholder image URL
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-20" />
        <div className="absolute inset-0 bg-[url('/effects/particles.png')] opacity-10" />
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative max-w-5xl text-center px-6"
        >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                IT Outsourcing <span className="text-[#4FC3F7]">Services</span>
            </h1>
            <p className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto text-blue-200">
                Engineering scalable digital solutions for global businesses.
            </p>
            <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4FC3F7" }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-[#4FC3F7] text-[#031A2F] font-semibold rounded-lg px-16 py-4 text-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-[#4FC3F7]/60 transition"
            >
                Get Started
            </motion.button>
        </motion.div>
    </section>
);

// 2️⃣ Overview Section
const OverviewSection: React.FC = () => (
    <section className="py-24 bg-[#F6FAFF]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <img
                    src="/it/overview-tech.jpg" // Placeholder tech abstract image
                    alt="IT Outsourcing Overview"
                    className="rounded-3xl shadow-lg object-cover w-full h-full"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl font-bold text-[#032542] mb-6">
                    Comprehensive IT Outsourcing Solutions
                </h2>
                <p className="text-[#0A2E4D] text-lg leading-relaxed mb-6 max-w-xl">
                    ITSASOO provides end-to-end IT outsourcing services combining cost efficiency,
                    highly skilled dedicated teams, agile workflows, and 24×7 availability to accelerate your business growth globally.
                </p>
                <ul className="list-disc list-inside space-y-3 text-[#0A2E4D] font-semibold max-w-xl">
                    <li>End-to-end development & deployment</li>
                    <li>Cost-effective customized solutions</li>
                    <li>Dedicated, expert teams aligned to your goals</li>
                    <li>Agile methodology reducing time-to-market</li>
                    <li>24×7 support ensuring uptime & business continuity</li>
                </ul>
            </motion.div>
        </div>
    </section>
);

// 3️⃣ Services Grid
interface Service {
    title: string;
    icon: JSX.Element;
    description: string;
}
const services: Service[] = [
    {
        title: "Web Development",
        icon: <Cpu className="w-10 h-10 text-[#4FC3F7]" />,
        description: "Robust, scalable websites tailored to your business needs and optimized for performance.",
    },
    {
        title: "Mobile App Development",
        icon: <Smartphone className="w-10 h-10 text-[#4FC3F7]" />,
        description: "Cross-platform mobile apps that engage users and accelerate growth on iOS and Android.",
    },
    {
        title: "UI/UX Design",
        icon: <PenTool className="w-10 h-10 text-[#4FC3F7]" />,
        description: "User-centric designs ensuring intuitive experience and high customer satisfaction.",
    },
    {
        title: "Cloud Solutions",
        icon: <Cloud className="w-10 h-10 text-[#4FC3F7]" />,
        description: "Secure and scalable cloud architecture enabling seamless business operations.",
    },
    {
        title: "API Integration",
        icon: <Globe2 className="w-10 h-10 text-[#4FC3F7]" />,
        description: "Smooth integration of third-party services and internal systems for enhanced automation.",
    },
    {
        title: "Cybersecurity",
        icon: <ShieldCheck className="w-10 h-10 text-[#4FC3F7]" />,
        description: "Enterprise-grade security protocols to protect your vital data and infrastructure.",
    },
];

const ServicesGridSection: React.FC = () => (
    <section className="py-24 bg-[#c1d6eb]">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-6xl font-bold text-[#032542] mb-12 text-center">
                Our IT Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map(({ title, icon, description }) => (
                    <motion.div
                        key={title}
                        whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(79,195,247,0.25)" }}
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-8 flex flex-col items-start space-y-6 cursor-pointer transition-shadow"
                    >
                        <div className="mb-2">{icon}</div>
                        <h3 className="text-xl font-semibold text-[#032542]">{title}</h3>
                        <p className="text-[#0A2E4D] text-base leading-relaxed">{description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// 4️⃣ Why Choose ITSASOO Section
const whyPoints = [
    {
        icon: <Users className="w-7 h-7 text-[#4FC3F7]" />,
        title: "Dedicated Development Teams",
        description: "Focus driven teams aligned with your project goals and culture.",
    },
    {
        icon: <Clock className="w-7 h-7 text-[#4FC3F7]" />,
        title: "Agile Methodology",
        description: "Adaptive workflows enabling fast delivery and continuous improvements.",
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-[#4FC3F7]" />,
        title: "Enterprise-level Security",
        description: "Best-in-class security protocols safeguarding your digital assets.",
    },
    {
        icon: <Bolt className="w-7 h-7 text-[#4FC3F7]" />,
        title: "Cost-effective Scaling",
        description: "Flexible solutions that scale with your business needs efficiently.",
    },
    {
        icon: <CheckCircle className="w-7 h-7 text-[#4FC3F7]" />,
        title: "Faster Time-to-Market",
        description: "Accelerated development cycles ensuring market competitiveness.",
    },
];

const WhyChooseSection: React.FC = () => (
    <section className="py-24 bg-[#0b132e] text-white">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-6xl font-bold text-center mb-12">Why Choose ITSASOO?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {whyPoints.map(({ icon, title, description }) => (
                    <motion.div
                        key={title}
                        whileHover={{ y: -6, boxShadow: "0 8px 20px rgba(79,195,247,0.3)" }}
                        className="flex flex-col items-start space-y-4 p-6 rounded-2xl bg-[#486177] cursor-default transition-shadow"
                    >
                        <div>{icon}</div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-[#BFD9E8]">{description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// 5️⃣ Project Delivery Timeline
interface TimelineStep {
    title: string;
    description: string;
    image: string;
}

const timelineSteps: TimelineStep[] = [
    {
        title: "Requirement Discovery",
        description:
            "Understanding your business needs to craft bespoke IT strategies aligning technical goals and compliance.",
        image: "/itoutsourcing/timeline/step1.jpg",
    },
    {
        title: "Architecture Planning",
        description:
            "Designing robust and scalable system architectures with security and performance optimized from the outset.",
        image: "/itoutsourcing/timeline/step2.jpg",
    },
    {
        title: "Design & Prototyping",
        description:
            "Rapid prototyping and UI/UX design iterations to validate usability and user journeys.",
        image: "/itoutsourcing/timeline/step3.jpg",
    },
    {
        title: "Development",
        description:
            "Agile coding and continuous integration delivering high-quality, maintainable software.",
        image: "/itoutsourcing/timeline/step4.jpg",
    },
    {
        title: "QA & Security Testing",
        description:
            "Comprehensive testing ensuring reliability, security compliance, and performance under load.",
        image: "/itoutsourcing/timeline/step5.jpg",
    },
    {
        title: "Deployment & Maintenance",
        description:
            "Seamless deployment with ongoing support to keep your systems optimized and evolving.",
        image: "/itoutsourcing/timeline/step6.jpg",
    },
];

const ProjectTimelineSection: React.FC = () => (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative">
            <h2 className="text-4xl font-bold text-center mb-16">Our Project Delivery Process</h2>
            <div className="relative border-l-2 border-[#4FC3F7] max-w-4xl mx-auto">
                {timelineSteps.map(({ title, description, image }, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className="mb-12 flex w-full max-w-4xl relative"
                            style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
                        >
                            {/* Dot on timeline */}
                            <div className="absolute left-[-14px] top-6 bg-[#4FC3F7] rounded-full w-7 h-7 shadow-lg" />

                            {/* Text Card */}
                            <div className="w-1/2 bg-[#0A2E4D] rounded-2xl p-6 shadow-lg text-white z-10">
                                <h3 className="text-xl font-bold mb-4">{title}</h3>
                                <p>{description}</p>
                            </div>

                            {/* Image Card */}
                            <div className="w-1/2 ml-10 rounded-2xl overflow-hidden shadow-xl">
                                <img src={image} alt={title} className="object-cover w-full h-40 rounded-2xl" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

// 6️⃣ Technology Icon Cloud
const techItems = [
    { src: "/it/tech/react.svg", name: "React" },
    { src: "/it/tech/nextjs.svg", name: "Next.js" },
    { src: "/it/tech/nodejs.svg", name: "Node.js" },
    { src: "/it/tech/python.svg", name: "Python" },
    { src: "/it/tech/aws.svg", name: "AWS" },
    { src: "/it/tech/azure.svg", name: "Azure" },
    { src: "/it/tech/mongodb.svg", name: "MongoDB" },
    { src: "/it/tech/mysql.svg", name: "MySQL" },
    { src: "/it/tech/flutter.svg", name: "Flutter" },
    { src: "/it/tech/firebase.svg", name: "Firebase" },
    { src: "/it/tech/docker.svg", name: "Docker" },
    { src: "/it/tech/kubernetes.svg", name: "Kubernetes" },
];

const TechCloudSection: React.FC = () => {
    const [tooltip, setTooltip] = useState<{ visible: boolean; name: string; x: number; y: number }>({
        visible: false,
        name: "",
        x: 0,
        y: 0,
    });

    const handleMouseMove = (e: React.MouseEvent, name: string) => {
        const offsetX = 15;
        const offsetY = 15;
        setTooltip({
            visible: true,
            name,
            x: e.clientX + offsetX,
            y: e.clientY + offsetY,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ visible: false, name: "", x: 0, y: 0 });
    };

    return (
        <section className="py-24 bg-blue-100 relative">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-6xl font-bold text-[#032542] mb-12">Technologies We Work With</h2>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 justify-center">
                    {techItems.map(({ src, name }, i) => (
                        <div
                            key={i}
                            className="bg-white/70 p-4 rounded-xl shadow-md backdrop-blur-sm flex items-center justify-center hover:shadow-2xl transition-shadow cursor-default relative"
                            onMouseMove={(e) => handleMouseMove(e, name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <motion.img
                                src={src}
                                alt={`${name} logo`}
                                className="max-h-12 max-w-full object-contain"
                                loading="lazy"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.4 }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tooltip */}
            {tooltip.visible && (
                <div
                    style={{
                        top: tooltip.y,
                        left: tooltip.x,
                    }}
                    className="pointer-events-none fixed z-50 whitespace-nowrap bg-[#032542] text-[#4FC3F7] px-3 py-1 rounded shadow-lg text-sm font-semibold select-none"
                >
                    {tooltip.name}
                </div>
            )}
        </section>
    );
};

// 7️⃣ Industries We Serve
const industries = [
    {
        icon: "/it/industries/finance.svg",
        title: "Finance & Accounting",
        description: "Delivering precise and compliant financial services worldwide.",
    },
    {
        icon: "/it/industries/healthcare.svg",
        title: "Healthcare",
        description: "Secure, HIPAA-compliant tech solutions to optimize patient care.",
    },
    {
        icon: "/it/industries/b2b&b2c.svg",
        title: "B2B & B2C",
        description: "Empowering flexible and scalable retail platforms.",
    },
    {
        icon: "/it/industries/logistics.svg",
        title: "Logistics",
        description: "Real-time tracking and automation for efficient supply chain management.",
    },
    {
        icon: "/it/industries/realestate.svg",
        title: "Real Estate",
        description: "Smart property management and intuitive customer engagement tools.",
    },
    {
        icon: "/it/industries/manufacturing.svg",
        title: "Manufacturing",
        description: "IoT and automation solutions driving efficiency and growth.",
    },
];

const IndustriesSection: React.FC = () => (
    <section className="py-24 bg-[#0b132e]">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl font-bold text-[#d9dce9] mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {industries.map(({ icon, title, description }) => (
                    <div key={title} className="p-6 border rounded-xl shadow hover:shadow-lg transition-shadow cursor-default bg-[#bcc2e2]">
                        <img src={icon} alt={`${title} icon`} className="h-14 mx-auto mb-6" loading="lazy" />
                        <h3 className="text-2xl font-extrabold text-[#000000] mb-2">{title}</h3>
                        <p className="text-[#31363a]">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 8️⃣ Testimonials Section
// (You can fill in real testimonials or keep placeholder content here)

const testimonials = [
    {
        stars: 5,
        quote: "ITSASOO helped us scale our IT infrastructure and improve software delivery drastically.",
        client: "CTO, SaaS Company",
        country: "Canada",
    },
    {
        stars: 5,
        quote: "Their cybersecurity experts ensured our data remains secure and compliant worldwide.",
        client: "Security Head, FinTech",
        country: "UK",
    },
    {
        stars: 5,
        quote: "Dedicated teams and agile processes made all the difference in our product launches.",
        client: "Product Manager, E-commerce",
        country: "USA",
    },
];

const TestimonialsSection: React.FC = () => (
    <section className="py-24 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl font-bold text-[#0B1B2E] mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                {testimonials.map(({ stars, quote, client, country }, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl p-8 shadow-md text-[#032542]"
                        tabIndex={0}
                    >
                        <div className="flex mb-4 space-x-1 text-yellow-400">
                            {[...Array(5)].map((_, idx) => (
                                <svg
                                    key={idx}
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            ))}
                        </div>
                        <blockquote className="text-lg italic mb-6">&ldquo;{quote}&rdquo;</blockquote>
                        <footer className="font-semibold text-[#032542]">
                            — {client} ({country})
                        </footer>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 9️⃣ CTA Section

const CTASection: React.FC = () => (
    <section className="py-24 bg-gradient-to-r from-[#122147] via-[#275e9c] to-[#1d73d4] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl px-6 mx-auto relative z-10">
            <h2 className="text-5xl font-extrabold drop-shadow-lg mb-6">
                Ready to build scalable digital solutions with ITSASOO?
            </h2>
            <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #4FC3F7" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#031A2F] font-semibold rounded-full px-16 py-4 text-xl shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-[#4FC3F7]/70 transition"
            >
                ➡ Get Started
            </motion.button>
        </div>
        <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-10 pointer-events-none" />
    </section>
);

// 🔟 Footer Section would be imported and placed here or included similarly.


export default function ITOutsourcingPage() {
    return (
        <>
            <HeroSection />
            <OverviewSection />
            <ServicesGridSection />
            <WhyChooseSection />
            {/* <ProjectTimelineSection /> */}
            <TechCloudSection />
            <IndustriesSection />
            <TestimonialsSection />
            <CTASection />
            {/* Footer can be added here */}
        </>
    );
}
