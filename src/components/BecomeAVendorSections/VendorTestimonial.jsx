import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "../OptimizedImage";
import sampleImg from "../../assets/imgs/electrical.webp";

const VendorTestimonial = () => (
  <section className="py-12 md:py-20 bg-elite-surface px-4 sm:px-6">
    <motion.div
      className="max-w-4xl mx-auto elite-card p-8 md:p-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <blockquote className="text-lg md:text-2xl lg:text-3xl font-light italic text-white leading-relaxed mb-8">
        "ServiJoy didn't just give me more work — it gave me my freedom back. The automated tools
        handle my scheduling and billing, allowing me to focus on what I actually love doing."
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-elite-cyan/30 flex-shrink-0">
          <OptimizedImage alt="Marcus Elian" className="w-full h-full object-cover" src={sampleImg} />
        </div>
        <div>
          <p className="text-white font-semibold">Marcus Elian</p>
          <p className="text-elite-muted text-sm">Master Electrician &amp; Vendor since 2021</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default VendorTestimonial;
