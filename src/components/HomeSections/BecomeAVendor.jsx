import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const checklist = [
  "Access a global network of elite professionals",
  "Streamlined booking and payment management",
  "Grow your business with data-driven insights",
];

const BecomeAVendor = () => (
  <section className="py-24 bg-elite-black relative overflow-hidden">
    <div className="absolute inset-0 elite-glow pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-header text-white mb-6">
            Scale Your <span className="text-elite-cyan">Craft.</span>
          </h2>
          <p className="text-elite-muted leading-relaxed mb-8 max-w-md">
            Whether you're a seasoned expert or just starting out, our platform gives you the tools
            to reach more clients, manage your workflow, and elevate your craft to new heights.
          </p>
          <ul className="space-y-4 mb-10">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white text-sm">
                <span className="w-5 h-5 rounded-full bg-elite-cyan/20 border border-elite-cyan/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-elite-cyan" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/login-signup"
              className="inline-flex px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm tracking-wide"
            >
              GET STARTED NOW
            </Link>
            <Link to="/about" className="text-elite-muted hover:text-white text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="elite-card p-8 border-elite-cyan/20 max-w-sm mx-auto lg:mx-0 lg:ml-auto"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-elite-muted text-xs uppercase tracking-widest mb-4">Pro Plan</p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold text-white">$3,000</span>
            <span className="text-elite-muted text-sm">/ month</span>
          </div>
          <div className="space-y-3 mb-6">
            {["Unlimited bookings", "Priority support", "Analytics dashboard"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-elite-muted">
                <Check className="w-4 h-4 text-elite-cyan" />
                {f}
              </div>
            ))}
          </div>
          <div className="h-px bg-elite-border mb-4" />
          <p className="text-elite-muted text-xs">Billed monthly. Cancel anytime.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BecomeAVendor;
