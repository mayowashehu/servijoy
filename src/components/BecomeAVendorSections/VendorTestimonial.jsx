import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "../OptimizedImage";
import sampleImg from "../../assets/imgs/electrical.webp";
import FrameCorners from "../ui/FrameCorners";

const VendorTestimonial = () => (
  <section className="py-12 md:py-20 bg-sj-surface px-4 sm:px-6">
    <motion.div
      className="relative max-w-4xl mx-auto bg-sj-card border border-sj-line rounded-2xl p-8 md:p-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <FrameCorners />
      <blockquote className="font-display text-lg md:text-2xl lg:text-3xl font-medium text-sj-ink leading-relaxed mb-8">
        ServiJoy didn't just give me more work — it gave me my time back. Scheduling and
        billing run themselves now, so I focus on{" "}
        <span className="text-sj-brass">the work I'm actually good at.</span>
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sj-brass/30 flex-shrink-0">
          <OptimizedImage alt="Marcus Elian" className="w-full h-full object-cover" src={sampleImg} />
        </div>
        <div>
          <p className="text-sj-ink font-semibold">Marcus Elian</p>
          <p className="text-sj-muted text-sm">Master Electrician &middot; Vendor since 2021</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default VendorTestimonial;