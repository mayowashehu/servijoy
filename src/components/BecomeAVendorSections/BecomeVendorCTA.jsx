import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BecomeVendorCTA = () => (
  <section className="py-12 md:py-20 bg-elite-surface px-4 sm:px-6 pb-24 md:pb-20">
    <motion.div
      className="max-w-3xl mx-auto elite-card p-8 md:p-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-4xl font-bold font-header text-white mb-4">
        Ready to scale your craft?
      </h2>
      <p className="text-elite-muted text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
        Join the elite network of service professionals. Your journey to business growth starts
        with a single click.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/login-signup"
          className="inline-flex px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm w-full sm:w-auto justify-center"
        >
          Start Application
        </Link>
        <span className="text-elite-muted text-xs">Takes less than 5 minutes</span>
      </div>
    </motion.div>
  </section>
);

export default BecomeVendorCTA;
