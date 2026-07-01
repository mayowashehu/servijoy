import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HowItWorksHero = () => (
  <section className="relative bg-sj-bg pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[85vh] flex flex-col items-center justify-center">
    <div className="absolute inset-0 sj-grid-bg pointer-events-none" />

    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.span
        className="sj-tag text-[11px] text-sj-brass inline-block mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        HOW IT WORKS
      </motion.span>

      <motion.h1
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-sj-ink leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        From request to<br className="hidden sm:block" />
        <span className="text-sj-brass">job done.</span>
      </motion.h1>

      <motion.p
        className="text-sj-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        No cold calls, no guesswork. Here's exactly what happens between posting a job
        and shaking hands with the artisan who finished it.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/services"
          className="inline-flex justify-center px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm"
        >
          Explore Services
        </Link>
        <button
          type="button"
          className="inline-flex justify-center px-8 py-3.5 border border-sj-line text-white font-medium rounded-full hover:border-sj-brass/40 transition-all text-sm"
        >
          Watch Demo
        </button>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <span className="sj-tag text-[9px] text-sj-muted">SCROLL</span>
      <div className="w-px h-8 bg-gradient-to-b from-sj-brass to-transparent" />
    </motion.div>
  </section>
);

export default HowItWorksHero;