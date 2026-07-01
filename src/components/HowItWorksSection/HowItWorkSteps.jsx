import { motion } from "framer-motion";
import { Search, GitBranch, Calendar, ShieldCheck, ArrowUpRight } from "lucide-react";

const steps = [
  {
    num: "STEP / 01",
    icon: <Search className="w-5 h-5" />,
    title: "Search",
    desc: "Tell us your needs. We filter through thousands of vetted specialists in milliseconds.",
  },
  {
    num: "STEP / 02",
    icon: <GitBranch className="w-5 h-5" />,
    title: "Match",
    desc: "You're matched with the right professional based on skills, location, and verified ratings.",
  },
  {
    num: "STEP / 03",
    icon: <Calendar className="w-5 h-5" />,
    title: "Book",
    desc: "Instant confirmation and secure scheduling, handled inside one messaging thread.",
  },
  {
    num: "STEP / 04",
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Relax",
    desc: "Quality guaranteed by ServiJoy. Payment releases only when you're satisfied.",
  },
];

const HowItWorkSteps = () => (
  <section className="py-16 md:py-24 bg-sj-surface relative overflow-hidden" id="the-process">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
        <div>
          <span className="sj-tag text-[11px] text-sj-brass">THE PROCESS</span>
          <h2 className="mt-4 font-display text-2xl md:text-4xl font-semibold text-sj-ink">
            Four steps, start to finish
          </h2>
        </div>
        <a
          href="#the-process"
          className="inline-flex items-center gap-1 text-sj-brass text-sm font-medium hover:brightness-110 transition-all flex-shrink-0"
        >
          View timeline <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="hidden lg:block absolute top-[38px] left-[13%] right-[13%] sj-connector" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="relative bg-sj-card border border-sj-line rounded-2xl p-6 hover:border-sj-brass/30 transition-colors min-h-[220px]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass mb-5 relative z-10">
              {step.icon}
            </div>
            <span className="sj-tag text-[9px] text-sj-muted">{step.num}</span>
            <h3 className="text-sj-ink font-semibold text-lg mt-2 mb-2 font-display">{step.title}</h3>
            <p className="text-sj-muted text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorkSteps;