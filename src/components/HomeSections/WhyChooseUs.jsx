import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Zap, ShieldCheck, Headphones } from "lucide-react";
import FrameCorners from "../ui/FrameCorners";

const features = [
  { icon: <Search className="w-5 h-5" />, title: "Smart matching", desc: "Filter by trade, rating, and availability to find the right artisan in seconds." },
  { icon: <Zap className="w-5 h-5" />, title: "Same-day dispatch", desc: "Most jobs get an assigned artisan within the hour, not the week." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Escrow payments", desc: "Funds release only when you confirm the job is done right." },
  { icon: <Headphones className="w-5 h-5" />, title: "Human support", desc: "A real person on call if a job needs mediation or a redo." },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-sj-bg relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="sj-tag text-[11px] text-sj-brass">WHY SERVIJOY</span>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-sj-ink">
          Built for jobs that<br className="hidden md:block" /> actually get finished.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-sj-card border border-sj-line rounded-2xl p-5 hover:border-sj-brass/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass mb-4">
                {f.icon}
              </div>
              <h3 className="text-sj-ink font-semibold mb-1 font-display">{f.title}</h3>
              <p className="text-sj-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Live job-tracking panel mockup */}
        <motion.div
          className="relative bg-sj-card border border-sj-line rounded-2xl p-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <FrameCorners color="verdigris" />

          <div className="flex items-center justify-between mb-6">
            <span className="sj-tag text-[10px] text-sj-muted">JOB #4471</span>
            <span className="flex items-center gap-2 text-xs text-sj-verdigris font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-sj-verdigris animate-pulseBrass" />
              EN ROUTE
            </span>
          </div>

          <div className="mb-5">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-sj-ink font-medium">Arrival ETA</span>
              <span className="text-sj-brass font-mono text-xs">14 MIN</span>
            </div>
            <div className="h-1.5 bg-sj-line rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-sj-brass rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-sj-surface rounded-xl border border-sj-line">
            <div className="w-10 h-10 rounded-full bg-sj-brass/15 border border-sj-brass/30 flex items-center justify-center text-sj-brass text-sm font-semibold font-display">
              TA
            </div>
            <div>
              <p className="text-sj-ink text-sm font-medium">Tunde A. — Plumbing</p>
              <p className="text-sj-muted text-xs">4.9 rating &middot; 212 jobs</p>
            </div>
            <span className="ml-auto sj-tag text-[9px] text-sj-verdigris">VERIFIED</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-14">
        <Link
          to="/login-signup"
          className="inline-flex px-8 py-3.5 bg-sj-brass text-sj-bg font-semibold rounded-full hover:brightness-110 transition-all text-sm"
        >
          Get started now
        </Link>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;