import { motion } from "framer-motion";
import { Wallet, Calendar, Wrench, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Wallet className="w-5 h-5" />,
    title: "Higher Earnings",
    desc: "Take home more from every job, with industry-low commission rates and transparent pricing.",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Flexible Schedule",
    desc: "You're the boss. Choose exactly when and where you want to work.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Business Tools",
    desc: "Manage invoices, client messages, and job history all from one dashboard.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Fast Payouts",
    desc: "Don't wait weeks for your money. Get paid within minutes of a job being signed off.",
  },
];

const WhyBecomeVendor = () => (
  <section className="py-16 md:py-24 bg-sj-surface relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="sj-tag text-[11px] text-sj-brass">WHY PARTNER</span>
        <h2 className="mt-4 font-display text-2xl md:text-4xl font-semibold text-sj-ink mb-3">
          Built by tradespeople, for tradespeople
        </h2>
        <p className="text-sj-muted">Every feature here started as a complaint from a real artisan.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="bg-sj-card border border-sj-line rounded-2xl p-6 hover:border-sj-brass/30 transition-colors"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass mb-5">
              {b.icon}
            </div>
            <h3 className="text-sj-ink font-semibold mb-2 font-display">{b.title}</h3>
            <p className="text-sj-muted text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBecomeVendor;