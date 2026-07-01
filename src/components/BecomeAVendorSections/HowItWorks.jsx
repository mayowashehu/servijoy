import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Sign Up",
    desc: "Complete a quick profile — your trade, experience, and service area — in under 5 minutes.",
  },
  {
    num: "02",
    title: "Get Vetted",
    desc: "We run a standard background and certification check to keep quality consistent platform-wide.",
  },
  {
    num: "03",
    title: "Start Earning",
    desc: "Accept your first booking and start building a rating that brings you repeat clients.",
  },
];

const HowItWorksVendor = () => (
  <section className="py-16 md:py-24 bg-sj-bg relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="sj-tag text-[11px] text-sj-brass">THE JOURNEY</span>
        <h2 className="mt-4 font-display text-2xl md:text-4xl font-semibold text-sj-ink">
          Three steps to your first booking
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="w-10 h-10 rounded-full bg-sj-brass text-sj-bg font-display font-semibold flex items-center justify-center mb-5 flex-shrink-0">
              {step.num}
            </div>
            <h3 className="text-sj-ink font-semibold text-lg mb-2 font-display">{step.title}</h3>
            <p className="text-sj-muted text-sm leading-relaxed max-w-xs">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksVendor;