import { motion } from "framer-motion";
import { Search, GitBranch, Calendar, ShieldCheck, ArrowUpRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <Search className="w-5 h-5" />,
    title: "Search",
    desc: "Tell us your needs. Our intelligent search filters through thousands of vetted specialists in milliseconds.",
  },
  {
    num: "02",
    icon: <GitBranch className="w-5 h-5" />,
    title: "Match",
    desc: "Our AI engine matches you with the perfect professional based on skills, location, and verified ratings.",
  },
  {
    num: "03",
    icon: <Calendar className="w-5 h-5" />,
    title: "Book",
    desc: "Instant confirmation and secure scheduling. Everything is handled within our encrypted communication hub.",
  },
  {
    num: "04",
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Relax",
    desc: "Experience quality service guaranteed by ServiJoy. Release payment only when you're 100% satisfied.",
  },
];

const HowItWorkSteps = () => (
  <section className="py-16 md:py-24 bg-elite-surface relative overflow-hidden" id="the-process">
    <div className="absolute inset-0 elite-glow pointer-events-none" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold font-header text-white mb-3">The Process</h2>
          <p className="text-elite-muted text-sm md:text-base max-w-xl leading-relaxed">
            Four intuitive steps to transform how you access premium services. Built for speed,
            designed for clarity.
          </p>
        </div>
        <a
          href="#the-process"
          className="inline-flex items-center gap-1 text-elite-cyan text-sm font-semibold hover:brightness-110 transition-all flex-shrink-0"
        >
          VIEW TIMELINE <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="elite-card p-6 relative overflow-hidden hover:border-elite-cyan/30 transition-colors min-h-[220px]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="absolute top-4 right-4 text-5xl font-bold text-white/[0.04] select-none">
              {step.num}
            </span>
            <div className="w-10 h-10 rounded-xl bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan mb-5 relative z-10">
              {step.icon}
            </div>
            <h3 className="text-white font-bold text-lg mb-2 relative z-10">{step.title}</h3>
            <p className="text-elite-muted text-sm leading-relaxed relative z-10">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorkSteps;
