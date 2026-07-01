import { motion } from "framer-motion";
import { Monitor, Calendar, Wrench, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "Higher Earnings",
    desc: "Take home more from every job, with our industry-low commission rates and transparent pricing.",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Flexible Schedule",
    desc: "You're the boss. Choose exactly when and where you want to work with our intuitive scheduling tools.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Business Tools",
    desc: "Manage invoices, client communications and analytics all from one powerful, unified dashboard.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Instant Payouts",
    desc: "Don't wait weeks for your money. Get paid within minutes of completing a job directly to your account.",
  },
];

const WhyBecomeVendor = () => (
  <section className="py-16 md:py-24 bg-elite-surface relative overflow-hidden">
    <div className="absolute inset-0 elite-glow pointer-events-none" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold font-header text-white mb-3">
          Why partner with ServiJoy?
        </h2>
        <p className="text-elite-muted">Built by experts, for experts.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="elite-card p-6 hover:border-elite-cyan/30 transition-colors"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan mb-5">
              {b.icon}
            </div>
            <h3 className="text-white font-bold mb-2">{b.title}</h3>
            <p className="text-elite-muted text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBecomeVendor;
