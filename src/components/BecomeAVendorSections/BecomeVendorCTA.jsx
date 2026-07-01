import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FrameCorners from "../ui/FrameCorners";

const BecomeVendorCTA = () => (
  <section className="py-12 md:py-20 bg-sj-surface px-4 sm:px-6 pb-24 md:pb-20">
    <motion.div
      className="relative max-w-3xl mx-auto bg-sj-card border border-sj-line rounded-2xl p-8 md:p-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <FrameCorners />
      <h2 className="font-display text-2xl md:text-4xl font-semibold text-sj-ink mb-4">
        Ready to scale your craft?
      </h2>
      <p className="text-sj-muted text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
        Join the verified network of service professionals. Your first booking is a
        single click away.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/login-signup"
          className="inline-flex px-8 py-3.5 bg-sj-brass text-sj-bg font-semibold rounded-full hover:brightness-110 transition-all text-sm w-full sm:w-auto justify-center"
        >
          Start Application
        </Link>
        <span className="sj-tag text-[10px] text-sj-muted">UNDER 5 MIN</span>
      </div>
    </motion.div>
  </section>
);

export default BecomeVendorCTA;