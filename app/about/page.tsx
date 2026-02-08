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
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/50" />

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
        <motion.div style={{ y: ySlow }} className="absolute -left-40 -top-24 w-[420px] h-[420px] rounded-full blur-[80px] bg-linear-to-br from-[#4FC3F7]/30 to-[#7ED8FB]/6 mix-blend-screen" />
        <motion.div style={{ y: yFast }} className="absolute right-[-120px] top-10 w-[360px] h-[360px] rounded-full blur-3xl bg-linear-to-br from-[#9EEBFF]/12 to-[#4FC3F7]/6 mix-blend-overlay" />

        {/* hero content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-12 py-20 md:py-32 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-[#021827]/60 border border-[#4FC3F7]/20 text-sm text-[#CFF9FF] font-semibold">
              ITSASOO SOLUTIONS — Enterprise Finance & Technology
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#9EEBFF] via-[#4FC3F7] to-[#D8F8FF]">
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
                <motion.button whileHover={{ scale: 1.03 }} className="rounded-full px-6 py-3 bg-linear-to-r from-[#4FC3F7] to-[#8BE7FF] text-[#021824] font-semibold shadow-2xl">
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
      <section className="py-14 bg-linear-to-b from-white to-[#F6FBFF] text-[#031A2F]">
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
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br from-[#4FC3F7] to-[#7ED8FB] text-white">
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
                    <div className="rounded-lg p-3 bg-linear-to-br from-[#00A7FF] to-[#0071FF] text-white">
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
      <section className="py-16 bg-linear-to-r from-[#E8F9FF] to-[#F5FDFF]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h3 className="text-3xl font-bold text-[#031A2F]">Ready to Modernize your finance & IT operations?</h3>
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
