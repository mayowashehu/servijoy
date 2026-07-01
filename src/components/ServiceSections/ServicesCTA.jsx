import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const ServicesCTA = () => (
  <>
    <section className="py-12 md:py-16 bg-elite-black px-4 sm:px-6">
      <motion.div
        className="max-w-2xl mx-auto elite-card p-8 md:p-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-header text-white mb-3">
          Ready to joy your service?
        </h2>
        <p className="text-elite-muted text-sm md:text-base mb-8 leading-relaxed">
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
            className="px-8 py-3.5 border border-elite-border text-white font-medium rounded-full hover:border-elite-cyan/30 transition-all text-sm"
          >
            Contact Sales
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Mobile FAB */}
    <Link
      to="/become-a-vendor"
      className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-elite-cyan rounded-full flex items-center justify-center shadow-lg shadow-elite-cyan/30 hover:brightness-110 transition-all"
      aria-label="Become a partner"
    >
      <Plus className="w-6 h-6 text-black" />
    </Link>
  </>
);

export default ServicesCTA;
