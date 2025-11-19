"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  CheckCircle,
  Clock,
  Award,
  Globe,
  Briefcase,
  Mail,
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
      <section className="py-20 bg-white">
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
                  className="flex gap-4 items-start bg-[#F8FAFD] p-4 rounded-xl border border-[#E6F2FF]"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00A7FF] to-[#0071FF] flex items-center justify-center text-white shadow">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#062033]">{v.title}</div>
                    <div className="text-sm text-slate-600">{v.text}</div>
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
                className="rounded-2xl p-5 bg-white/6 backdrop-blur-md border border-white/10 shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#007BFF] to-[#00C6FF] text-white">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#062033]">
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

      {/* TIMELINE / APPROACH */}
      <section className="py-20 bg-[#F5FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-[#062033] text-center"
          >
            How we work — Simple, Secure, Measurable
          </motion.h3>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Assess", text: "Process study, compliance checklist", icon: <Clock /> },
              { title: "Onboard", text: "Dedicated team & secure access", icon: <Users /> },
              { title: "Operate", text: "Daily ops with SLAs & automation", icon: <Briefcase /> },
              { title: "Scale", text: "Continuous improvement & reporting", icon: <Award /> },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-[#E6F3FF]"
              >
                <div className="inline-flex items-center justify-center gap-3 rounded-md bg-[#ECF9FF] p-3">
                  <div className="text-[#0079E6]">{s.icon}</div>
                </div>
                <h4 className="mt-4 font-semibold text-[#062033]">{s.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#062033]"
          >
            Leadership & Key Specialists
          </motion.h3>

          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Experienced professionals across finance operations, accounting, tax and software engineering.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* placeholders */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="bg-white rounded-2xl p-4 border border-[#E6F3FF] shadow-sm"
              >
                <div className="w-full aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gradient-to-br from-[#E6F9FF] to-[#DDEEFF]">
                  {/* placeholder image box */}
                  <div className="w-full h-44 flex items-center justify-center text-slate-400">
                    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" className="opacity-50">
                      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-6 0-8 3-8 6v1h16v-1c0-3-2-6-8-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-3 text-left">
                  <div className="font-semibold text-[#062033]">Name Surname</div>
                  <div className="text-sm text-slate-500">Role / Specialist</div>
                  <div className="mt-3 text-sm text-slate-600">
                    10+ years in finance operations and outsourcing, working with enterprise clients.
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY + PARTNERS (LOGOS) */}
      <section className="py-12 bg-[#F5FBFF]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-slate-600">Trusted by</div>
          <div className="mt-6 flex gap-8 items-center justify-center flex-wrap">
            {["Client 1","Client 2","Client 3","Client 4","Client 5"].map((n,i)=>(
              <div key={i} className="w-28 h-12 bg-white/90 rounded-md flex items-center justify-center border border-[#E8F4FF] shadow-sm">
                <span className="text-sm text-slate-500">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0078E6] to-[#00C6FF] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Ready to modernize your finance functions?</h3>
          <p className="mt-3 text-slate-100 max-w-2xl mx-auto">Talk to our experts and get a tailored engagement plan.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/contact" className="bg-white text-[#0078E6] font-semibold px-6 py-3 rounded-full shadow">Get in touch</a>
            <a href="/services" className="border border-white/30 px-6 py-3 rounded-full">View services</a>
          </div>
        </div>
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
