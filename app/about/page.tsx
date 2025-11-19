"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  CheckCircle,
  Clock,
  Award,
  Globe,
  Briefcase,
  Mail,
  Globe2,
  ArrowRight,
} from "lucide-react";

type StatItem = { label: string; value: number; icon: JSX.Element; suffix?: string };

function useCountUp(target: number, duration = 1200, start = true) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else setValue(target);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return value;
}

export default function AboutUs() {
  // Stats
  const STATS: StatItem[] = [
    { label: "Years Since Founding", value: 1, icon: <Briefcase className="w-6 h-6" /> },
    { label: "Global Clients", value: 150, icon: <Globe className="w-6 h-6" /> },
    { label: "Specialists", value: 40, icon: <Users className="w-6 h-6" /> },
    { label: "Projects Delivered", value: 420, icon: <Award className="w-6 h-6" /> },
  ];

  // simple flags for in-view triggers (we'll animate on mount / whileInView for most)
  const countsStart = true;
  const counts = STATS.map((s) => useCountUp(s.value, 1400, countsStart));

  return (
    <main className="text-slate-900">
      {/* HERO */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-white overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about/about_bg.jpg')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

        {/* Subtle Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          {/* <img
            src="/logo/itsasoo-logo.png"
            className="w-[70%] md:w-[40%] object-contain"
            alt="ITSASOO Logo Watermark"
        /> */}
        </div>

        {/* Fog & Particle Effects */}
        <div className="absolute inset-0 bg-[url('/effects/fog.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/effects/particles.png')] opacity-10"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            About <span className="text-blue-600">ITSASOO SOLUTIONS</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mt-4 max-w-2xl mx-auto">
            Precision. Compliance. Growth.
            Delivering world-class Finance, Accounting, IT & Digital Transformation for global enterprises.
          </p>
        </div>
      </section>


      {/* WHY / VALUES + STATS GLASS CUBES */}
      <section className="py-20 bg-[#f1f3ff]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* left: mission & values */}
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#062033]"
            >
              We enable companies to scale finance functions and transform operations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-slate-600 max-w-3xl"
            >
              ITSASOO combines domain expertise, secure processes and modern tooling to deliver
              accurate, compliant and scalable Finance, Accounting & IT solutions tailored for
              enterprise-grade requirements.
            </motion.p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Accuracy", text: "Data-driven processes, QA and strict checks." },
                { title: "Transparency", text: "Clear SLAs, reports and audit trails." },
                { title: "Speed", text: "Fast ramp-up and predictable delivery." },
                { title: "Innovation", text: "Automation & tooling to reduce manual effort." },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex gap-4 items-start bg-[#03092b] p-4 rounded-xl border border-[#E6F2FF] hover:bg-[#08086d] transition-all hover:shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00A7FF] to-[#0071FF] flex items-center justify-center text-white shadow">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#f4f6f8]">{v.title}</div>
                    <div className="text-sm text-[#969595]">{v.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* right: stats glass cubes */}
          <div className="space-y-6">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl p-5 bg-[#03092b] backdrop-blur-md border border-white/10 shadow hover:shadow-2xl hover:bg-[#08086d] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#007BFF] to-[#00C6FF] text-white">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#ffffff]">
                      {counts[idx]}{s.suffix ?? ""}
                    </div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* MISSION + VISION                                                  */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#0a0a2b]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-3xl bg-[#EAF4FF] shadow"
          >
            <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              To empower global businesses with precision-driven financial management,
              compliance-ready accounting, and modern digital transformation — enabling
              them to scale faster, operate smarter, and build long-term sustainability.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-3xl bg-[#EAF4FF] shadow"
          >
            <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-slate-700 leading-relaxed">
              To become a globally trusted outsourcing partner — setting new benchmarks
              in accuracy, transparency, speed, and innovation across Finance and IT.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================================================================= */}
      {/* VALUES SECTION                                                   */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#f1f3ff] text-black relative overflow-hidden">

        <div className="absolute right-[-200px] top-[-200px] w-[500px] h-[500px] bg-[#a8a8ce] rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-center"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10 mt-14">
            {[
              {
                title: "Accuracy",
                desc: "Zero-error commitment in finance & accounting.",
              },
              {
                title: "Transparency",
                desc: "Real-time insights and clear communication.",
              },
              {
                title: "Speed",
                desc: "Efficient delivery without compromising quality.",
              },
              {
                title: "Innovation",
                desc: "Modern technology + automation-driven workflows.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#a7b9da] rounded-2xl backdrop-blur shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-[#2a2a2b]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================= */}
      {/* CAPABILITIES SECTION                                             */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#06162b]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#d8e2e9] text-center">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {[
              "Finance & Accounts Outsourcing",
              "Bookkeeping & Finalization",
              "Tax Preparation (Global)",
              "Payroll Management",
              "IT Services & Software Development",
              "Digital Marketing & Branding",
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-white rounded-2xl shadow border border-blue-100"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                  <span className="text-lg font-medium">{cap}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ================================================================= */}
      {/* WHY US SECTION                                                   */}
      {/* ================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 gap-12 mt-14">
            {[
              "Specialized finance teams for USA, Canada, UK & Australia",
              "Strict compliance with GAAP, IFRS, HMRC, CRA & IRS",
              "Integrated IT + Finance services under one roof",
              "24/5 global delivery model with rapid turnaround",
              "Secure infrastructure with NDA-backed operations",
              "Cost-effective outsourcing with enterprise quality",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-start gap-3 text-lg text-slate-700"
              >
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>



      {/* ================================================================= */}
      {/* GLOBAL PRESENCE                                                  */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#091322] text-white text-center">
        <Globe2 className="mx-auto w-12 h-12 text-blue-300" />

        <h2 className="text-4xl font-bold mt-4">Our Global Presence</h2>
        <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
          Supporting clients across North America, Europe, Asia-Pacific, and the Middle East.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-200 font-medium">
          {["USA", "Canada", "United Kingdom", "Australia", "New Zealand", "India"].map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 px-6 py-3 rounded-full backdrop-blur"
            >
              {loc}
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE / APPROACH */}







      {/* ================================================================= */}
      {/* CTA                                                              */}
      {/* ================================================================= */}
      <section className="py-24 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
        <h2 className="text-4xl font-extrabold text-blue-950">
          Ready to Work With a Global Finance & Technology Partner?
        </h2>
        <p className="mt-3 text-blue-800 text-lg max-w-2xl mx-auto">
          Let’s streamline your operations, reduce costs, and unlock next-level growth.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-white px-10 py-4 rounded-full font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition"
        >
          Contact Us <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* Simple footer */}
      <footer className="bg-[#021f3b] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold">ITSASOO SOLUTIONS PRIVATE LIMITED</div>
            <div className="text-sm text-slate-200">Precision. Compliance. Growth.</div>
          </div>
          <div className="text-sm text-slate-300">© {new Date().getFullYear()} ITSASOO. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}


























