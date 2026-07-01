import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FrameCorners from "../ui/FrameCorners";

const HowItWorksCTA = () => (
  <section className="py-12 md:py-20 bg-sj-bg px-4 sm:px-6 pb-24 md:pb-20">
    <motion.div
      className="relative max-w-3xl mx-auto bg-sj-card border border-sj-line rounded-2xl p-8 md:p-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <FrameCorners />
      <h2 className="font-display text-2xl md:text-4xl font-semibold text-sj-ink mb-4">
        Ready to get it done?
      </h2>
      <p className="text-sj-muted text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
        Join thousands of clients and artisans already working through ServiJoy's
        verified network.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/login-signup"
          className="inline-flex justify-center px-8 py-3.5 bg-sj-brass text-sj-bg font-semibold rounded-full hover:brightness-110 transition-all text-sm"
        >
          Create Free Account
        </Link>
        <Link
          to="/about"
          className="inline-flex justify-center px-8 py-3.5 border border-sj-line text-white font-medium rounded-full hover:border-sj-brass/40 transition-all text-sm"
        >
          Speak with an Expert
        </Link>
      </div>
    </motion.div>
  </section>
);

export default HowItWorksCTA;