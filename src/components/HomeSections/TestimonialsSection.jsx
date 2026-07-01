import React from "react";
import { motion } from "framer-motion";
import sampleImg from "../../assets/imgs/electrical.webp";
import OptimizedImage from "../OptimizedImage";
import FrameCorners from "../ui/FrameCorners";

const TestimonialsSection = () => (
  <section className="py-24 bg-sj-surface relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="sj-tag text-[11px] text-sj-brass">FROM THE FIELD</span>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-sj-ink">
          What artisans say
        </h2>
      </motion.div>

      <motion.div
        className="relative bg-sj-card border border-sj-line rounded-2xl p-8 md:p-14 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <FrameCorners />
        <blockquote className="text-xl md:text-2xl font-display font-medium leading-relaxed text-sj-ink mb-10">
          ServiJoy handles the scheduling and the payment headaches, so I just show up and
          <span className="text-sj-brass"> do the work</span> — that's the whole reason I stayed.
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sj-brass/30 mb-3">
            <OptimizedImage alt="Chidi O., electrician" className="w-full h-full object-cover" src={sampleImg} />
          </div>
          <p className="text-sj-ink font-semibold">Chidi O.</p>
          <p className="text-sj-muted text-sm">Electrician &middot; Lagos</p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {[
          { value: "5,200+", label: "ACTIVE USERS" },
          { value: "4.9/5", label: "AVG RATING" },
          { value: "98%", label: "SATISFACTION" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-2xl md:text-3xl font-semibold text-sj-ink">{stat.value}</div>
            <div className="sj-tag text-[9px] text-sj-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;