import React from "react";
import { motion } from "framer-motion";
import sampleImg from "../../assets/imgs/electrical.webp";
import OptimizedImage from "../OptimizedImage";

const TestimonialsSection = () => (
  <section className="py-24 bg-elite-surface relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold font-header text-white text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The <span className="text-elite-cyan">Community Voice</span>
      </motion.h2>

      <motion.div
        className="elite-card p-8 md:p-14 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <blockquote className="text-xl md:text-3xl font-light leading-relaxed text-white mb-10">
          "Joining ServiJoy redefined my career. The platform handles the complexity, allowing me to focus on{" "}
          <span className="text-elite-cyan font-medium">delivering masters</span> to clients who value it."
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-elite-cyan/30 mb-3">
            <OptimizedImage alt="John Doe" className="w-full h-full object-cover" src={sampleImg} />
          </div>
          <p className="text-white font-semibold">John Doe</p>
          <p className="text-elite-muted text-sm">Senior Professional</p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {[
          { value: "5.2k+", label: "Active Users" },
          { value: "4.9/5", label: "Rating" },
          { value: "98%", label: "Satisfaction" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-white">{stat.value}</div>
            <div className="text-elite-muted text-xs mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
