import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HowItWorksCTA = () => (
  <section className="py-12 md:py-20 bg-elite-black px-4 sm:px-6 pb-24 md:pb-20">
    <motion.div
      className="max-w-3xl mx-auto elite-card p-8 md:p-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-4xl font-bold font-header text-white mb-4">
        Ready to experience it?
      </h2>
      <p className="text-elite-muted text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
        Join the thousands who have upgraded their lifestyle with ServiJoy's professional
        network.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/login-signup"
          className="inline-flex justify-center px-8 py-3.5 bg-elite-cyan text-black font-bold rounded-full hover:brightness-110 transition-all text-sm"
        >
          Create Free Account
        </Link>
        <Link
          to="/about"
          className="inline-flex justify-center px-8 py-3.5 border border-elite-border text-white font-medium rounded-full hover:border-elite-cyan/40 transition-all text-sm"
        >
          Speak with an Expert
        </Link>
      </div>
    </motion.div>
  </section>
);

export default HowItWorksCTA;
