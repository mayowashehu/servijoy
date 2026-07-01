import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Wrench, PaintBucket, Truck, Hammer } from "lucide-react";

const servicesList = [
  { id: 1, name: "House Cleaning", icon: <Sparkles className="w-5 h-5" />, desc: "Professional cleaning for homes & offices." },
  { id: 2, name: "Electrical Repairs", icon: <Zap className="w-5 h-5" />, desc: "Certified electricians for all power issues." },
  { id: 3, name: "Plumbing Services", icon: <Wrench className="w-5 h-5" />, desc: "Reliable plumbing solutions, anytime." },
  { id: 4, name: "Painting & Decoration", icon: <PaintBucket className="w-5 h-5" />, desc: "High-quality painting & home styling." },
  { id: 5, name: "Moving Services", icon: <Truck className="w-5 h-5" />, desc: "Fast & safe home and office relocations." },
  { id: 6, name: "Handyman Services", icon: <Hammer className="w-5 h-5" />, desc: "Skilled experts for all household fixes." },
];

const ServicesList = () => {
  return (
    <section className="py-16 md:py-24 bg-sj-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="sj-tag text-[11px] text-sj-brass">FULL CATALOG</span>
          <h2 className="mt-4 text-2xl md:text-4xl font-semibold font-display text-sj-ink mb-4">
            All Services We Offer
          </h2>
          <p className="text-sj-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Top-quality services from vetted professionals, backed by our satisfaction guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.id}
              className="bg-sj-card border border-sj-line rounded-2xl p-6 md:p-8 hover:border-sj-brass/30 transition-colors"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="w-10 h-10 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass mb-4">
                {service.icon}
              </div>
              <h3 className="text-sj-ink font-semibold text-lg mb-2 font-display">
                {service.name}
              </h3>
              <p className="text-sj-muted text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;