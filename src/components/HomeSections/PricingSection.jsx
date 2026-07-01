import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

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
  <section className="py-24 bg-elite-surface relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold font-header text-white text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Find Your <span className="text-elite-cyan">Plan</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`relative elite-card p-8 flex flex-col ${
              plan.highlighted ? "border-elite-cyan shadow-lg shadow-elite-cyan/10 md:-mt-2 md:mb-2" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-elite-cyan text-black text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                MOST POPULAR
              </span>
            )}
            <h3 className="text-white font-bold text-lg mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
              {plan.period && <span className="text-elite-muted text-sm">{plan.period}</span>}
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-elite-muted">
                  <Check className="w-4 h-4 text-elite-cyan flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/login-signup"
              className={`block text-center py-3 rounded-full font-bold text-sm tracking-wide transition-all ${
                plan.highlighted
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-elite-black border border-elite-border text-white hover:border-elite-cyan/30"
              }`}
            >
              CHOOSE PLAN
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
