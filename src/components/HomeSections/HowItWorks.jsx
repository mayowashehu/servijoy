import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Gauge } from "lucide-react";

const steps = [
  {
    code: "STEP / 01",
    icon: <ClipboardList className="w-5 h-5" />,
    title: "State the job",
    desc: "Tell us the trade and the problem — a leak, a socket, a full repaint. Takes under a minute.",
  },
  {
    code: "STEP / 02",
    icon: <UserCheck className="w-5 h-5" />,
    title: "Get matched",
    desc: "We dispatch a vetted artisan near you — background-checked, rated, and available today.",
  },
  {
    code: "STEP / 03",
    icon: <Gauge className="w-5 h-5" />,
    title: "Track the job",
    desc: "Watch status in real time and release payment only once the work is signed off.",
  },
];

const HowItWorks = () => (
  <section className="py-24 bg-sj-bg relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="sj-tag text-[11px] text-sj-brass">THE PROCESS</span>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-sj-ink">
          Three steps to a<br className="hidden md:block" /> job well done.
        </h2>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
        {/* dashed connector, desktop only */}
        <div className="hidden md:block absolute top-[52px] left-[16.6%] right-[16.6%] sj-connector" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="relative bg-sj-bg md:px-6 md:first:pl-0 md:last:pr-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="w-12 h-12 rounded-full bg-sj-card border border-sj-line flex items-center justify-center text-sj-brass mb-6 relative z-10">
              {step.icon}
            </div>
            <span className="sj-tag text-[10px] text-sj-muted">{step.code}</span>
            <h3 className="mt-2 text-lg font-semibold text-sj-ink font-display">{step.title}</h3>
            <p className="mt-2 text-sj-muted text-sm leading-relaxed max-w-xs">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;