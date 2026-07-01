import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Zap, Shield, Headphones } from "lucide-react";

const features = [
  { icon: <Search className="w-5 h-5" />, title: "Advanced Search", desc: "Find the right professional in seconds with smart filters." },
  { icon: <Zap className="w-5 h-5" />, title: "Fastest Delivery", desc: "Get matched and booked faster than any other platform." },
  { icon: <Shield className="w-5 h-5" />, title: "Secure Payments", desc: "Every transaction protected with escrow-backed security." },
  { icon: <Headphones className="w-5 h-5" />, title: "Reliable Support", desc: "24/7 dedicated support whenever you need assistance." },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-elite-black relative overflow-hidden">
    <div className="absolute inset-0 elite-glow-top pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold font-header text-white mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Built To A <span className="text-elite-cyan">Radical Speed.</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="elite-card p-5 hover:border-elite-cyan/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-elite-muted text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <motion.div
          className="elite-card p-6 border-elite-cyan/20"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-elite-muted text-xs uppercase tracking-widest">Dashboard</span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white font-mono text-xs">UP_TIME_99</span>
              <span className="text-elite-cyan font-bold">99.9%</span>
            </div>
            <div className="h-2 bg-elite-border rounded-full overflow-hidden">
              <div className="h-full w-[99%] bg-elite-cyan rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-elite-surface rounded-xl border border-elite-border">
            <div className="w-10 h-10 rounded-full bg-elite-cyan/20 flex items-center justify-center text-elite-cyan text-sm font-bold">JD</div>
            <div>
              <p className="text-white text-sm font-medium">John Doe</p>
              <p className="text-elite-muted text-xs">Verified Professional</p>
            </div>
            <span className="ml-auto text-elite-cyan text-xs font-semibold">Active</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-12">
        <Link
          to="/login-signup"
          className="inline-flex px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm tracking-wide"
        >
          GET STARTED NOW
        </Link>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
