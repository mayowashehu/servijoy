import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: <Home className="w-5 h-5" />,
    title: "Residential Services",
    desc: "Customized care for your living space. Cleaning, landscaping, and specialized repair designed for homeowners and tenants.",
    link: "EXPLORE HOME CARE",
    href: "/service/cleaning",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Commercial Solutions",
    desc: "High-efficiency maintenance for workspaces. Facility management, electrical overhauls, and deep sanitation for businesses.",
    link: "B2B SOLUTIONS",
    href: "/become-a-vendor",
  },
];

const ServiceCategories = () => (
  <section className="py-10 md:py-16 bg-elite-black">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="elite-card p-8 hover:border-elite-cyan/30 transition-all group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="absolute inset-0 elite-glow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan mb-5">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
              <p className="text-elite-muted text-sm leading-relaxed mb-6">{cat.desc}</p>
              <Link
                to={cat.href}
                className="inline-flex items-center gap-2 text-elite-cyan text-xs font-mono font-semibold tracking-wider hover:brightness-110 transition-all"
              >
                {cat.link} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceCategories;
