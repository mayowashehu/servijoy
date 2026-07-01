import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import FrameCorners from "../ui/FrameCorners";

const checklist = [
  "Get matched with clients near you, no cold-calling",
  "Get paid on completion, held safely in escrow until then",
  "Build a rating that brings you repeat bookings",
];

const BecomeAVendor = () => (
  <section className="py-24 bg-sj-bg relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="sj-tag text-[11px] text-sj-brass">FOR ARTISANS</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-sj-ink mb-6">
            Turn your skill into<br className="hidden md:block" /> steady work.
          </h2>
          <p className="text-sj-muted leading-relaxed mb-8 max-w-md">
            List your trade, set your service area, and start receiving job requests from
            clients who are ready to book — not just browsing.
          </p>
          <ul className="space-y-4 mb-10">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sj-ink text-sm">
                <span className="w-5 h-5 rounded-full bg-sj-brass/15 border border-sj-brass/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-sj-brass" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/login-signup"
              className="inline-flex px-8 py-3.5 bg-sj-brass text-sj-bg font-semibold rounded-full hover:brightness-110 transition-all text-sm"
            >
              Register as an artisan
            </Link>
            <Link to="/about" className="text-sj-muted hover:text-sj-ink text-sm transition-colors">
              How it works &rarr;
            </Link>
          </div>
        </motion.div>

        {/* Earnings panel — what a working artisan actually sees */}
        <motion.div
          className="relative bg-sj-card border border-sj-line rounded-2xl p-8 max-w-sm mx-auto lg:mx-0 lg:ml-auto"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <FrameCorners />
          <p className="sj-tag text-[10px] text-sj-muted mb-4">THIS MONTH &middot; TUNDE A.</p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-display text-4xl font-semibold text-sj-ink">&#8358;480,000</span>
          </div>
          <div className="space-y-3 mb-6">
            {[
              { label: "Jobs completed", value: "18" },
              { label: "Avg. rating", value: "4.9" },
              { label: "Repeat clients", value: "7" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between text-sm">
                <span className="text-sj-muted">{row.label}</span>
                <span className="text-sj-ink font-mono">{row.value}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-sj-line mb-4" />
          <p className="text-sj-muted text-xs">Payout released 24hrs after client sign-off.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BecomeAVendor;