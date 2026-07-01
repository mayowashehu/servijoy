import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Target, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Define Your Goal",
    desc: "Tell us exactly what you need. Our intelligent system captures your requirements and prepares the perfect match.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Unleash Potential",
    desc: "Connect with top-tier professionals who are vetted, skilled, and ready to deliver beyond your expectations.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-time Data",
    desc: "Monitor progress, track milestones, and manage payments through a seamless, transparent dashboard.",
  },
];

const HowItWorks = () => (
  <section className="py-24 bg-elite-black relative overflow-hidden">
    <div className="absolute inset-0 elite-glow pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold font-header text-white">
          Efficiency in <span className="text-elite-cyan">Every Step.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="elite-card p-8 hover:border-elite-cyan/30 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="w-12 h-12 rounded-xl bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-elite-muted text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
