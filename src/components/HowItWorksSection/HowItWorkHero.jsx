import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HowItWorksHero = () => (
  <section className="relative bg-elite-black pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[85vh] flex flex-col items-center justify-center">
    <div className="absolute inset-0 elite-glow-top pointer-events-none" />

    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.p
        className="text-elite-cyan text-xs font-semibold tracking-[0.25em] uppercase mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        EFFORTLESS EXECUTION
      </motion.p>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-header text-white leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Seamless Service,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-elite-cyan to-teal-400">
          Start to Finish
        </span>
      </motion.h1>

      <motion.p
        className="text-elite-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Discover a new standard in the service economy. We've distilled professional matching
        into a frictionless journey powered by intelligent technology.
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
          Explore Platform
        </Link>
        <button
          type="button"
          className="inline-flex justify-center px-8 py-3.5 border border-elite-border text-white font-medium rounded-full hover:border-elite-cyan/40 transition-all text-sm"
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
      <span className="text-elite-muted text-[10px] tracking-widest uppercase">Scroll</span>
      <div className="w-px h-8 bg-gradient-to-b from-elite-cyan to-transparent" />
    </motion.div>
  </section>
);

export default HowItWorksHero;
