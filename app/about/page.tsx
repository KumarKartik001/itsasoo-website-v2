// "use client";

// import React, { JSX, useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Users,
//   CheckCircle,
//   Clock,
//   Award,
//   Globe,
//   Briefcase,
//   Mail,
//   Globe2,
//   ArrowRight,
// } from "lucide-react";

// type StatItem = { label: string; value: number; icon: JSX.Element; suffix?: string };

// function useCountUp(target: number, duration = 1200, start = true) {
//   const [value, setValue] = useState(0);
//   const rafRef = useRef<number | null>(null);

//   useEffect(() => {
//     if (!start) return;
//     let startTime: number | null = null;
//     const step = (ts: number) => {
//       if (!startTime) startTime = ts;
//       const progress = Math.min((ts - startTime) / duration, 1);
//       const current = Math.floor(progress * target);
//       setValue(current);
//       if (progress < 1) rafRef.current = requestAnimationFrame(step);
//       else setValue(target);
//     };
//     rafRef.current = requestAnimationFrame(step);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [target, duration, start]);

//   return value;
// }

// export default function AboutUs() {
//   // Stats
//   const STATS: StatItem[] = [
//     { label: "Years Since Founding", value: 1, icon: <Briefcase className="w-6 h-6" /> },
//     { label: "Global Clients", value: 150, icon: <Globe className="w-6 h-6" /> },
//     { label: "Specialists", value: 40, icon: <Users className="w-6 h-6" /> },
//     { label: "Projects Delivered", value: 420, icon: <Award className="w-6 h-6" /> },
//   ];

//   // simple flags for in-view triggers (we'll animate on mount / whileInView for most)
//   const countsStart = true;
//   const counts = STATS.map((s) => useCountUp(s.value, 1400, countsStart));

//   return (
//     <main className="text-slate-900">
//       {/* HERO */}
//       <section className="relative h-[85vh] w-full flex items-center justify-center text-white overflow-hidden">

//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/about/about_bg.jpg')" }}
//         ></div>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

//         {/* Subtle Logo Watermark */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-10">
//           {/* <img
//             src="/logo/itsasoo-logo.png"
//             className="w-[70%] md:w-[40%] object-contain"
//             alt="ITSASOO Logo Watermark"
//         /> */}
//         </div>

//         {/* Fog & Particle Effects */}
//         <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-20"></div>
//         <div className="absolute inset-0 bg-[url('/effects/particles.png')] opacity-10"></div>

//         {/* Content */}
//         <div className="relative max-w-4xl mx-auto text-center px-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//             About <span className="text-blue-600">ITSASOO SOLUTIONS</span>
//           </h1>

//           <p className="text-lg md:text-xl text-blue-100 mt-4 max-w-2xl mx-auto">
//             Precision. Compliance. Growth.
//             Delivering world-class Finance, Accounting, IT & Digital Transformation for global enterprises.
//           </p>
//         </div>
//       </section>


//       {/* WHY / VALUES + STATS GLASS CUBES */}
//       <section className="py-20 bg-[#f1f3ff]">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           {/* left: mission & values */}
//           <div className="lg:col-span-2">
//             <motion.h2
//               initial={{ opacity: 0, y: 8 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl md:text-4xl font-bold text-[#062033]"
//             >
//               We enable companies to scale finance functions and transform operations
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 8 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.05 }}
//               className="mt-4 text-slate-600 max-w-3xl"
//             >
//               ITSASOO combines domain expertise, secure processes and modern tooling to deliver
//               accurate, compliant and scalable Finance, Accounting & IT solutions tailored for
//               enterprise-grade requirements.
//             </motion.p>

//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[
//                 { title: "Accuracy", text: "Data-driven processes, QA and strict checks." },
//                 { title: "Transparency", text: "Clear SLAs, reports and audit trails." },
//                 { title: "Speed", text: "Fast ramp-up and predictable delivery." },
//                 { title: "Innovation", text: "Automation & tooling to reduce manual effort." },
//               ].map((v, i) => (
//                 <motion.div
//                   key={v.title}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: i * 0.06 }}
//                   className="flex gap-4 items-start bg-[#03092b] p-4 rounded-xl border border-[#E6F2FF] hover:bg-[#08086d] transition-all hover:shadow-2xl"
//                 >
//                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00A7FF] to-[#0071FF] flex items-center justify-center text-white shadow">
//                     <CheckCircle className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-[#f4f6f8]">{v.title}</div>
//                     <div className="text-sm text-[#969595]">{v.text}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* right: stats glass cubes */}
//           <div className="space-y-6">
//             {STATS.map((s, idx) => (
//               <motion.div
//                 key={s.label}
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.08 }}
//                 className="rounded-2xl p-5 bg-[#03092b] backdrop-blur-md border border-white/10 shadow hover:shadow-2xl hover:bg-[#08086d] transition-all"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 rounded-lg bg-gradient-to-br from-[#007BFF] to-[#00C6FF] text-white">
//                     {s.icon}
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-[#ffffff]">
//                       {counts[idx]}{s.suffix ?? ""}
//                     </div>
//                     <div className="text-sm text-slate-500">{s.label}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================================================================= */}
//       {/* MISSION + VISION                                                  */}
//       {/* ================================================================= */}
//       <section className="py-24 bg-[#0a0a2b]">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

//           {/* Mission */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="p-8 rounded-3xl bg-[#EAF4FF] shadow"
//           >
//             <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
//             <p className="text-slate-700 leading-relaxed">
//               To empower global businesses with precision-driven financial management,
//               compliance-ready accounting, and modern digital transformation — enabling
//               them to scale faster, operate smarter, and build long-term sustainability.
//             </p>
//           </motion.div>

//           {/* Vision */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="p-8 rounded-3xl bg-[#EAF4FF] shadow"
//           >
//             <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
//             <p className="text-slate-700 leading-relaxed">
//               To become a globally trusted outsourcing partner — setting new benchmarks
//               in accuracy, transparency, speed, and innovation across Finance and IT.
//             </p>
//           </motion.div>

//         </div>
//       </section>


//       {/* ================================================================= */}
//       {/* VALUES SECTION                                                   */}
//       {/* ================================================================= */}
//       <section className="py-24 bg-[#f1f3ff] text-black relative overflow-hidden">

//         <div className="absolute right-[-200px] top-[-200px] w-[500px] h-[500px] bg-[#a8a8ce] rounded-full blur-[120px]" />

//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-6xl font-bold text-center"
//           >
//             Our Core Values
//           </motion.h2>

//           <div className="grid md:grid-cols-4 gap-10 mt-14">
//             {[
//               {
//                 title: "Accuracy",
//                 desc: "Zero-error commitment in finance & accounting.",
//               },
//               {
//                 title: "Transparency",
//                 desc: "Real-time insights and clear communication.",
//               },
//               {
//                 title: "Speed",
//                 desc: "Efficient delivery without compromising quality.",
//               },
//               {
//                 title: "Innovation",
//                 desc: "Modern technology + automation-driven workflows.",
//               },
//             ].map((v, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="p-8 bg-[#a7b9da] rounded-2xl backdrop-blur shadow-lg text-center"
//               >
//                 <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
//                 <p className="text-[#2a2a2b]">{v.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* ================================================================= */}
//       {/* CAPABILITIES SECTION                                             */}
//       {/* ================================================================= */}
//       <section className="py-24 bg-[#06162b]">
//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-4xl font-bold text-[#d8e2e9] text-center">
//             Our Capabilities
//           </h2>

//           <div className="grid md:grid-cols-3 gap-10 mt-14">
//             {[
//               "Finance & Accounts Outsourcing",
//               "Bookkeeping & Finalization",
//               "Tax Preparation (Global)",
//               "Payroll Management",
//               "IT Services & Software Development",
//               "Digital Marketing & Branding",
//             ].map((cap, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 className="p-6 bg-white rounded-2xl shadow border border-blue-100"
//               >
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
//                   <span className="text-lg font-medium">{cap}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>


//       {/* ================================================================= */}
//       {/* WHY US SECTION                                                   */}
//       {/* ================================================================= */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>

//           <div className="grid md:grid-cols-2 gap-12 mt-14">
//             {[
//               "Specialized finance teams for USA, Canada, UK & Australia",
//               "Strict compliance with GAAP, IFRS, HMRC, CRA & IRS",
//               "Integrated IT + Finance services under one roof",
//               "24/5 global delivery model with rapid turnaround",
//               "Secure infrastructure with NDA-backed operations",
//               "Cost-effective outsourcing with enterprise quality",
//             ].map((point, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 className="flex items-start gap-3 text-lg text-slate-700"
//               >
//                 <CheckCircle className="text-blue-600 w-6 h-6" />
//                 <span>{point}</span>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>



//       {/* ================================================================= */}
//       {/* GLOBAL PRESENCE                                                  */}
//       {/* ================================================================= */}
//       <section className="py-24 bg-[#091322] text-white text-center">
//         <Globe2 className="mx-auto w-12 h-12 text-blue-300" />

//         <h2 className="text-4xl font-bold mt-4">Our Global Presence</h2>
//         <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
//           Supporting clients across North America, Europe, Asia-Pacific, and the Middle East.
//         </p>

//         <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-200 font-medium">
//           {["USA", "Canada", "United Kingdom", "Australia", "New Zealand", "India"].map((loc, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 8 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="bg-white/10 px-6 py-3 rounded-full backdrop-blur"
//             >
//               {loc}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* TIMELINE / APPROACH */}







//       {/* ================================================================= */}
//       {/* CTA                                                              */}
//       {/* ================================================================= */}
//       <section className="py-24 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
//         <h2 className="text-4xl font-extrabold text-blue-950">
//           Ready to Work With a Global Finance & Technology Partner?
//         </h2>
//         <p className="mt-3 text-blue-800 text-lg max-w-2xl mx-auto">
//           Let’s streamline your operations, reduce costs, and unlock next-level growth.
//         </p>

//         <a
//           href="/contact"
//           className="mt-8 inline-flex items-center gap-2 bg-white px-10 py-4 rounded-full font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition"
//         >
//           Contact Us <ArrowRight className="w-5 h-5" />
//         </a>
//       </section>

//       {/* Simple footer */}
//       <footer className="bg-[#021f3b] text-white py-8">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div>
//             <div className="font-bold">ITSASOO SOLUTIONS PRIVATE LIMITED</div>
//             <div className="text-sm text-slate-200">Precision. Compliance. Growth.</div>
//           </div>
//           <div className="text-sm text-slate-300">© {new Date().getFullYear()} ITSASOO. All rights reserved.</div>
//         </div>
//       </footer>
//     </main>
//   );
// }


























// "use client";

// import React, { useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle, Globe2, Users, Award, ArrowRight } from "lucide-react";

// /**
//  * Ultra-Modern Neon / Tech About Page
//  * - TailwindCSS classes
//  * - Framer Motion animations & parallax
//  * - Neon/glow accents that match ITSASOO theme (#031A2F / #4FC3F7)
//  *
//  * NOTE: Hero background references an uploaded path per your session:
//  *   /mnt/data/ContactHero.tsx
//  *
//  * Replace the heroBg variable with your actual image URL if required.
//  */

// const heroBg = "/contact/contact_bg.jpg"; // <-- session path used as requested (swap with real image URL)

// const NeonBadge = ({ children }: { children: React.ReactNode }) => (
//   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-[#05263A] to-[#021824] border border-[#4FC3F7]/25 shadow-[0_6px_30px_rgba(79,195,247,0.08)] text-[#9EEBFF]">
//     {children}
//   </div>
// );

// export default function AboutNeon() {
//   // parallax effect using framer-motion
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 800], [0, -120]);
//   const y2 = useTransform(scrollY, [0, 800], [0, -40]);

//   // small reusable motion variants
//   const fadeUp = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7 } };
//   const cardHover = { whileHover: { y: -8, boxShadow: "0 20px 60px rgba(79,195,247,0.12)", scale: 1.02 } };

//   return (
//     <main className="min-h-screen w-full bg-[#010914] text-[#E6F9FF] antialiased">
//       {/* HERO */}
//       <header className="relative min-h-[72vh] md:min-h-[85vh] overflow-hidden">
//         {/* Large background image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center brightness-[0.46] saturate-110"
//           style={{
//             backgroundImage: `url("${heroBg}")`,
//             filter: "contrast(1.05) saturate(1.05)",
//           }}
//           aria-hidden
//         />

//         {/* animated grid overlay */}
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none"
//           preserveAspectRatio="none"
//           viewBox="0 0 100 100"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ mixBlendMode: "overlay", opacity: 0.12 }}
//         >
//           <defs>
//             <linearGradient id="g" x1="0" x2="1">
//               <stop offset="0%" stopColor="#0f2540" stopOpacity="1" />
//               <stop offset="100%" stopColor="#031A2F" stopOpacity="1" />
//             </linearGradient>
//           </defs>
//           <rect width="100" height="100" fill="url(#g)" />
//           {/* grid lines */}
//           <g stroke="#4FC3F7" strokeOpacity="0.06" strokeWidth="0.15">
//             {Array.from({ length: 20 }).map((_, i) => (
//               <line key={"v" + i} x1={(i * 100) / 20} y1="0" x2={(i * 100) / 20} y2="100" />
//             ))}
//             {Array.from({ length: 20 }).map((_, i) => (
//               <line key={"h" + i} x1="0" y1={(i * 100) / 20} x2="100" y2={(i * 100) / 20} />
//             ))}
//           </g>
//         </svg>

//         {/* floating neon shapes */}
//         <motion.div style={{ y: y1 }} className="absolute -left-24 -top-16 w-[420px] h-[420px] rounded-full blur-[80px] bg-gradient-to-br from-[#4FC3F7]/30 to-[#7ED8FB]/6 mix-blend-screen" />
//         <motion.div style={{ y: y2 }} className="absolute -right-24 top-10 w-[360px] h-[360px] rounded-full blur-[60px] bg-gradient-to-br from-[#a3f0ff]/10 to-[#4FC3F7]/6 mix-blend-overlay" />

//         {/* hero content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
//           <div className="max-w-4xl mx-auto text-center">
//             <NeonBadge>Enterprise • Neon • Futuristic</NeonBadge>

//             <motion.h1 {...fadeUp} className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#9EEBFF] via-[#4FC3F7] to-[#D8F8FF]">
//               Ultra Modern <span className="block text-6xl md:text-7xl lg:inline">Neon Technology</span> for Enterprise Finance & IT
//             </motion.h1>

//             <motion.p {...{ ...fadeUp, transition: { duration: 0.8, delay: 0.08 } }} className="mt-6 text-lg md:text-xl text-[#CFEFFB]/85 max-w-3xl mx-auto">
//               We blend secure finance operations with bleeding-edge engineering — neon-grade UX, compliant processes, and global scale.
//             </motion.p>

//             <motion.div {...{ ...fadeUp, transition: { duration: 0.8, delay: 0.18 } }} className="mt-8 flex items-center justify-center gap-4 flex-wrap">
//               <a href="#contact" className="inline-block">
//                 <motion.button whileHover={{ scale: 1.03 }} className="rounded-full px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#8BE7FF] text-[#02202a] font-semibold shadow-2xl">
//                   Get in Touch
//                 </motion.button>
//               </a>

//               <a href="#services" className="inline-block">
//                 <motion.button whileHover={{ scale: 1.03 }} className="rounded-full px-6 py-3 border border-[#4FC3F7]/30 text-[#CFF9FF] backdrop-blur-sm">
//                   Our Services
//                 </motion.button>
//               </a>
//             </motion.div>

//             {/* quick stats mini */}
//             <motion.div {...{ ...fadeUp, transition: { duration: 0.8, delay: 0.26 } }} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 items-stretch">
//               {[
//                 { label: "Clients", value: "150+" },
//                 { label: "Projects", value: "420+" },
//                 { label: "Specialists", value: "40+" },
//                 { label: "ISO Ready", value: "Yes" },
//               ].map((s, idx) => (
//                 <div key={idx} className="bg-[#001724]/40 backdrop-blur rounded-xl px-4 py-3 text-center border border-[#4FC3F7]/12">
//                   <div className="text-lg font-semibold text-[#E8FCFF]">{s.value}</div>
//                   <div className="text-sm text-[#BFE8F6] mt-1">{s.label}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </header>

//       {/* WHY / VALUES GRID (neon cards + interactions) */}
//       <section className="relative py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           {/* left column */}
//           <motion.div {...fadeUp} className="lg:col-span-2">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#D8F8FF]">We enable enterprises to scale finance & IT with a neon-first approach.</h2>
//             <p className="mt-4 text-[#9FDFF3] max-w-2xl">
//               Combining secure processes, automation and a high-velocity engineering culture — we deliver measurable outcomes with speed and compliance.
//             </p>

//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {[
//                 { title: "Accuracy", desc: "Automation-driven checks, audit trails & QA." },
//                 { title: "Transparency", desc: "Real-time dashboards & slas." },
//                 { title: "Speed", desc: "Rapid sprints, measurable delivery." },
//                 { title: "Innovation", desc: "AI-assisted automation & tooling." },
//               ].map((v, i) => (
//                 <motion.div
//                   key={v.title}
//                   {...cardHover}
//                   className="flex gap-4 items-start p-5 rounded-2xl bg-gradient-to-br from-[#01131D]/70 to-[#001821]/60 border border-[#4FC3F7]/8"
//                 >
//                   <div className="min-w-[56px] min-h-[56px] rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00B3FF] to-[#0070FF] shadow-lg text-white">
//                     <CheckCircle className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-white text-lg">{v.title}</div>
//                     <div className="text-sm text-[#9FDFF3] mt-1">{v.desc}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* right column: neon stats */}
//           <motion.aside {...fadeUp} className="space-y-4">
//             {[
//               { label: "Years", value: 1, icon: <svg className="w-6 h-6"><circle cx="6" cy="6" r="5" stroke="#7EEBFF" strokeWidth="1.2" /></svg> },
//               { label: "Clients", value: 150, icon: <Globe2 className="w-6 h-6" /> },
//               { label: "Experts", value: 40, icon: <Users className="w-6 h-6" /> },
//               { label: "Projects", value: 420, icon: <Award className="w-6 h-6" /> },
//             ].map((s, i) => (
//               <motion.div key={i} {...cardHover} className="p-4 rounded-2xl bg-[#021927]/60 border border-[#4FC3F7]/8">
//                 <div className="flex items-center gap-3">
//                   <div className="rounded-lg p-2 bg-gradient-to-br from-[#7EEBFF] to-[#4FC3F7] text-[#021824]">
//                     {s.icon}
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white">{s.value}{s.label === "Years" ? "+" : ""}</div>
//                     <div className="text-sm text-[#9FDFF3]">{s.label}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.aside>
//         </div>
//       </section>

//       {/* CAPABILITIES (icon grid) */}
//       <section className="py-16 bg-[#00121a]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <h3 className="text-3xl font-bold text-center text-[#D8F8FF]">Our Capabilities</h3>
//           <p className="text-center mt-3 text-[#9FDFF3] max-w-2xl mx-auto">Full-stack financial operations, IT engineering and compliance solutions built for modern enterprises.</p>

//           <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {[
//               "Finance Ops",
//               "Bookkeeping",
//               "Tax (Global)",
//               "Payroll",
//               "Software Engineering",
//               "Analytics & BI",
//             ].map((c, i) => (
//               <motion.div key={i} {...cardHover} className="flex flex-col items-center justify-center gap-2 py-6 rounded-2xl bg-gradient-to-br from-[#02282f]/60 to-[#00121a] border border-[#4FC3F7]/6">
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00A7FF] to-[#0071FF] flex items-center justify-center text-white mb-1">
//                   <CheckCircle className="w-5 h-5" />
//                 </div>
//                 <div className="text-sm text-[#CFF9FF] font-medium">{c}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TECH STACK / WHY US */}
//       <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <motion.div {...fadeUp}>
//             <h3 className="text-3xl font-bold text-[#D8F8FF]">Why choose ITSASOO?</h3>
//             <ul className="mt-6 space-y-3 text-[#9FDFF3]">
//               <li className="flex items-start gap-3"><span className="mt-1 text-[#4FC3F7]">•</span> Compliance-first, audit-ready processes</li>
//               <li className="flex items-start gap-3"><span className="mt-1 text-[#4FC3F7]">•</span> Dedicated specialists & secure infrastructure</li>
//               <li className="flex items-start gap-3"><span className="mt-1 text-[#4FC3F7]">•</span> Rapid delivery backed by SLAs</li>
//             </ul>

//             <div className="mt-6 flex gap-3">
//               <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#8BE7FF] text-[#021824] font-semibold">
//                 Talk to an Expert
//               </a>
//               <a href="/case-studies" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#4FC3F7]/20 text-[#9FDFF3]">
//                 View Case Studies
//               </a>
//             </div>
//           </motion.div>

//           <motion.div {...fadeUp} className="p-6 rounded-2xl bg-[#021827]/60 border border-[#4FC3F7]/8">
//             <div className="text-sm text-[#BFE8F6]">Tech & Tools</div>
//             <div className="mt-4 flex flex-wrap gap-3">
//               {["Next.js", "React", "Node.js", "Postgres", "MongoDB", "AWS", "Stripe", "Plaid"].map((t, i) => (
//                 <div key={i} className="px-3 py-2 rounded-lg bg-[#00262b]/60 border border-[#4FC3F7]/8 text-sm text-[#DDF7FF]">
//                   {t}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* TESTIMONIALS SLIDER */}
//       <section className="py-16 bg-gradient-to-b from-[#000a10] to-[#00141a]">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-3xl font-bold text-[#D8F8FF]">What clients say</h3>
//           <div className="mt-8 overflow-hidden">
//             <div className="flex gap-6 px-2 snap-x snap-mandatory overflow-x-auto scrollbar-hide py-4">
//               {[
//                 { q: "Transformed our finance stack — scale ready.", n: "Riya S., FinEdge" },
//                 { q: "Exceptional engineering & delivery.", n: "David M., HealthGrid" },
//                 { q: "Highly professional & on-time.", n: "Amelia C., ShopPro" },
//               ].map((t, i) => (
//                 <motion.div key={i} {...cardHover} className="snap-center min-w-[300px] md:min-w-[380px] lg:min-w-[420px] bg-[#021826]/70 border border-[#4FC3F7]/8 p-6 rounded-2xl">
//                   <p className="italic text-[#BFE8F8]">“{t.q}”</p>
//                   <div className="mt-4 text-sm text-[#9FDFF3]">{t.n}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-[#00232a] via-[#021827] to-[#00141a] text-center">
//         <div className="max-w-5xl mx-auto px-6">
//           <h3 className="text-4xl font-extrabold text-[#D8F8FF]">Ready to build neon-grade finance & IT systems?</h3>
//           <p className="mt-3 text-[#9FDFF3]">Contact our specialists — we'll reply within 24 hours.</p>
//           <div className="mt-8 flex items-center justify-center gap-4">
//             <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#8BE7FF] text-[#021824] font-semibold">
//               Contact Now <ArrowRight className="w-4 h-4" />
//             </a>
//             <a href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#4FC3F7]/20 text-[#9FDFF3]">
//               Pricing & Plans
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-[#00060a] text-[#A7E7F6] py-8">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div>
//             <div className="font-bold text-xl">ITSASOO SOLUTIONS</div>
//             <div className="text-sm mt-1">Neon-grade fintech & enterprise engineering</div>
//           </div>
//           <div className="flex gap-6 text-sm">
//             <div>contact@itsasoo.com</div>
//             <div>+91 XXXXX XXXXX</div>
//           </div>
//           <div className="text-sm">© {new Date().getFullYear()} ITSASOO</div>
//         </div>
//       </footer>
//     </main>
//   );
// }




"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Globe2, Users, Award, ArrowRight } from "lucide-react";

/**
 * About Page — Option 2 (Mixed Mode)
 * - Dark neon cyber HERO (parallax + neon shapes)
 * - Following sections: light, clean, glassmorphism for mission/vision/values
 * - Capabilities: white cards with glowing borders
 * - Text focuses on company copy only (no stats)
 *
 * NOTE: Hero background uses the uploaded session path:
 *   heroBg = "/mnt/data/ContactHero.tsx"
 * Replace with a real image URL (jpg/png) in production.
 */

const heroBg = "/about/about_bg.jpg"; // <-- replace with real image (e.g. /images/hero.jpg)

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay }} viewport={{ once: true }}>
    {children}
  </motion.div>
);

export default function AboutPage() {
  // tiny parallax for ambient shapes
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 800], [0, -80]);
  const yFast = useTransform(scrollY, [0, 800], [0, -160]);

  return (
    <main className="min-h-screen w-full bg-[#031A2F] text-white antialiased">
      {/* ================= HERO — neon cyber (dark) ================= */}
      <header className="relative min-h-[72vh] md:min-h-[82vh] overflow-hidden">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.55] saturate-110"
          style={{
            backgroundImage: `url('${heroBg}')`,
            // fallback & subtle filter
            backgroundBlendMode: "overlay",
          }}
          aria-hidden
        />

        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50" />

        {/* animated grid overlay for subtle tech feel */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <g stroke="#4FC3F7" strokeOpacity="0.04" strokeWidth="0.12">
            {Array.from({ length: 28 }).map((_, i) => (
              <line key={`v${i}`} x1={(i * 100) / 28} y1="0" x2={(i * 100) / 28} y2="100" />
            ))}
            {Array.from({ length: 18 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={(i * 100) / 18} x2="100" y2={(i * 100) / 18} />
            ))}
          </g>
        </svg>

        {/* ambient neon shapes */}
        <motion.div style={{ y: ySlow }} className="absolute -left-40 -top-24 w-[420px] h-[420px] rounded-full blur-[80px] bg-gradient-to-br from-[#4FC3F7]/30 to-[#7ED8FB]/6 mix-blend-screen" />
        <motion.div style={{ y: yFast }} className="absolute right-[-120px] top-10 w-[360px] h-[360px] rounded-full blur-[64px] bg-gradient-to-br from-[#9EEBFF]/12 to-[#4FC3F7]/6 mix-blend-overlay" />

        {/* hero content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-12 py-20 md:py-32 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-[#021827]/60 border border-[#4FC3F7]/20 text-sm text-[#CFF9FF] font-semibold">
              ITSASOO SOLUTIONS — Enterprise Finance & Technology
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9EEBFF] via-[#4FC3F7] to-[#D8F8FF]">
              Modern finance and IT operations — engineered with precision
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-5 text-lg md:text-xl text-[#CDECFB]/90 max-w-3xl mx-auto leading-relaxed">
              We deliver secure, compliant and scalable finance & IT solutions — combining audit-ready processes with cutting-edge engineering to help enterprises operate smarter.
            </p>
          </FadeIn>

          <FadeIn delay={0.26}>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <a href="#mission" className="inline-block">
                <motion.button whileHover={{ scale: 1.03 }} className="rounded-full px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#8BE7FF] text-[#021824] font-semibold shadow-2xl">
                  Learn More
                </motion.button>
              </a>

              <a href="/contact" className="inline-block">
                <motion.button whileHover={{ scale: 1.03 }} className="rounded-full px-6 py-3 border border-[#4FC3F7]/30 text-[#CFF9FF] backdrop-blur-sm">
                  Contact Our Team
                </motion.button>
              </a>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ================= INTRO (light + clean) ================= */}
      <section className="py-14 bg-gradient-to-b from-white to-[#F6FBFF] text-[#031A2F]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">What we do</h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  ITSASOO partners with enterprises to modernize financial operations and integrate secure IT systems. We combine deep domain knowledge in finance and accounting with high-quality engineering to create compliant, resilient and efficient solutions.
                </p>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  From process design and automation to cloud-native engineering and monitoring — our approach is outcome-driven, transparent and audit-ready.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFFAFF] border border-[#D7F4FF] text-[#03607A] text-sm">Finance Operations</span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFFAFF] border border-[#D7F4FF] text-[#03607A] text-sm">Compliance & Controls</span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFFAFF] border border-[#D7F4FF] text-[#03607A] text-sm">Cloud & Integrations</span>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md border border-[#E6F7FF]">
                <h3 className="font-semibold text-[#031A2F]">How we work</h3>
                <ul className="mt-4 space-y-3 text-slate-700 ">
                  <li>Discovery & risk assessment to align with compliance needs.</li>
                  <li>Design of processes, SLAs and audit-friendly documentation.</li>
                  <li>Engineering & automation: secure, test-driven delivery.</li>
                  <li>Handover, monitoring and optional long-term support.</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= MISSION / VISION (glass) ================= */}
      <section id="mission" className="py-16 bg-[#c9dff1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          <FadeIn>
            <div className="h-full p-8 rounded-3xl bg-white/70 backdrop-blur border border-white/40 shadow-md flex flex-col">
              <h3 className="text-2xl font-bold text-[#031A2F]">Our Mission</h3>
              <p className="mt-4 text-[#2e4b57] leading-relaxed">
                To empower enterprises with precise, compliant and efficient finance operations — enabling better decisions through reliable data, secure systems and continuous improvement.
              </p>
              <div className="mt-6 text-sm text-[#3d5560]">
                We emphasize clear processes, strong controls and transparent reporting to reduce risk and improve operational velocity.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="h-full p-8 rounded-3xl bg-white/70 backdrop-blur border border-white/40 shadow-md flex flex-col">
              <h3 className="text-2xl font-bold text-[#031A2F]">Our Vision</h3>
              <p className="mt-4 text-[#2e4b57] leading-relaxed">
                To be the trusted partner for global enterprises seeking secure, automated and compliant finance ecosystems — where technology and governance converge to deliver predictable outcomes.
              </p>
              <div className="mt-6 text-sm text-[#3d5560]">
                We invest in people, processes and tooling so customers can scale confidently and meet regulatory expectations across regions.
              </div>
            </div>
          </FadeIn>

        </div>
      </section>


      {/* ================= VALUES (glass tiles) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[#031A2F] text-center">Our Core Values</h2>
            <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
              Values that guide our decisions, shape our processes and protect our clients.
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Accuracy", desc: "Data integrity and zero-error processes." },
              { title: "Transparency", desc: "Clear reports, SLAs and audit trails." },
              { title: "Security", desc: "Encryption, controls and compliance-first design." },
              { title: "Innovation", desc: "Automation and tooling that reduce manual effort." },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={0.06 * i}>
                <div className="p-6 rounded-2xl bg-white/80 backdrop-blur border border-white/50 shadow hover:shadow-lg transition">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#4FC3F7] to-[#7ED8FB] text-white">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="mt-4 font-semibold text-[#031A2F]">{v.title}</h4>
                  <p className="mt-2 text-sm text-slate-700">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES (white cards with glowing borders) ================= */}
      <section className="py-16 bg-[#c9dff1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#031A2F] text-center">What we deliver</h2>
            <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
              End-to-end finance & IT services crafted for enterprise compliance and scale.
            </p>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Finance Process Design", text: "SOPs, controls and automated pipelines for recurring financial tasks." },
              { title: "Cloud Integrations", text: "Secure integrations with your ERP, banking and reporting systems." },
              { title: "Compliance & Controls", text: "Design and implement controls aligned to standards and regulations." },
              { title: "Automation & RPA", text: "Reduce manual work and accelerate month-end processes." },
              { title: "Monitoring & Support", text: "Observability, alerts and fast-response support for operations." },
              { title: "Advisory & Transformation", text: "Roadmap, implementation and governance for large-scale transformation." },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={0.04 * i}>
                <div className="p-6 bg-white rounded-2xl border border-[#E6F7FF] shadow-md hover:shadow-lg transition">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg p-3 bg-gradient-to-br from-[#00A7FF] to-[#0071FF] text-white">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#031A2F]">{c.title}</h4>
                      <p className="mt-2 text-sm text-slate-700">{c.text}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US (compact) ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h3 className="text-2xl font-bold text-[#031A2F] text-center">Why ITSASOO</h3>
            <p className="mt-4 text-center text-slate-700 max-w-2xl mx-auto">
              We combine financial domain expertise with secure engineering practices so enterprises can rely on accurate reporting, maintain regulatory compliance and scale operations without risk.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/80 border border-white/50 shadow">
                <div className="font-semibold text-[#031A2F]">Compliance-first</div>
                <p className="mt-2 text-sm text-slate-700">Processes designed for audits and regulatory reviews.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 border border-white/50 shadow">
                <div className="font-semibold text-[#031A2F]">Security & Privacy</div>
                <p className="mt-2 text-sm text-slate-700">Encrypted data flows and access controls as standard.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 border border-white/50 shadow">
                <div className="font-semibold text-[#031A2F]">Long-term Partnership</div>
                <p className="mt-2 text-sm text-slate-700">Support, maintenance and continuous improvements post-implementation.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-gradient-to-r from-[#E8F9FF] to-[#F5FDFF]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h3 className="text-3xl font-bold text-[#031A2F]">Ready to modernize your finance & IT operations?</h3>
            <p className="mt-3 text-slate-700">Schedule a discovery call and we’ll craft a compliant roadmap tailored to your needs.</p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#031A2F] text-white font-semibold shadow-md hover:opacity-95">
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#3f4346] text-[#031A2F] hover:shadow-2xl">
                Our Services
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
