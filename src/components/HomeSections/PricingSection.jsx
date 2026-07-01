import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import FrameCorners from "../ui/FrameCorners";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    features: ["Up to 10 bookings", "Basic support", "Standard matching", "Email notifications"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    features: ["Unlimited bookings", "Priority support", "Advanced matching", "Analytics dashboard", "Featured profile"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Dedicated account manager", "Custom integrations", "SLA guarantee", "Team management", "API access"],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section className="py-24 bg-sj-surface relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="sj-tag text-[11px] text-sj-brass">PLANS</span>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-sj-ink">
          Find your plan
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`relative bg-sj-card border rounded-2xl p-8 flex flex-col ${
              plan.highlighted ? "border-sj-brass/50 md:-mt-2 md:mb-2" : "border-sj-line"
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {plan.highlighted && <FrameCorners />}
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sj-brass text-sj-bg sj-tag text-[9px] font-semibold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            )}
            <h3 className="text-sj-ink font-semibold text-lg mb-2 font-display">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-3xl font-semibold text-sj-ink">{plan.price}</span>
              {plan.period && <span className="text-sj-muted text-sm font-mono">{plan.period}</span>}
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-sj-muted">
                  <Check className="w-4 h-4 text-sj-brass flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/login-signup"
              className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                plan.highlighted
                  ? "bg-sj-brass text-sj-bg hover:brightness-110"
                  : "bg-sj-bg border border-sj-line text-sj-ink hover:border-sj-brass/30"
              }`}
            >
              Choose plan
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;