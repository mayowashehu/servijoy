import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const ServicesCTA = () => (
  <>
    <section className="py-12 md:py-16 bg-sj-bg px-4 sm:px-6">
      <motion.div
        className="relative max-w-2xl mx-auto bg-sj-card border border-sj-line rounded-2xl p-8 md:p-10 text-center overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,rgba(217,164,65,0.15),transparent_60%)]" />
        <div className="relative z-10">
          <span className="sj-tag text-[11px] text-sj-brass">JOIN THE NETWORK</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold font-display text-sj-ink mb-3">
            Ready to grow your service?
          </h2>
          <p className="text-sj-muted text-sm md:text-base mb-8 leading-relaxed">
            Join over 10,000+ professionals using ServiJoy to automate their daily tasks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/become-a-vendor"
              className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm"
            >
              Become a Partner
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 border border-sj-line text-white font-medium rounded-full hover:border-sj-brass/40 transition-all text-sm"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Mobile FAB */}
    <Link
      to="/become-a-vendor"
      className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-sj-brass rounded-full flex items-center justify-center shadow-lg shadow-sj-brass/30 hover:brightness-110 transition-all"
      aria-label="Become a partner"
    >
      <Plus className="w-6 h-6 text-black" />
    </Link>
  </>
);

export default ServicesCTA;