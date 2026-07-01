import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Sign Up",
    desc: "Complete a quick profile, select your skills, experience, and service areas in under 5 minutes.",
  },
  {
    num: 2,
    title: "Get Vetted",
    desc: "Our team conducts a standard background and certification check to ensure platform-wide quality.",
  },
  {
    num: 3,
    title: "Start Earning",
    desc: "Accept your first booking and start growing your business with the power of ServiJoy's platform.",
  },
];

const HowItWorksVendor = () => (
  <section className="py-16 md:py-24 bg-elite-black relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-elite-cyan text-xs font-semibold tracking-widest uppercase mb-3">
          THE JOURNEY
        </p>
        <h2 className="text-2xl md:text-4xl font-bold font-header text-white">
          Simple steps to success
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
            <div className="w-10 h-10 rounded-full bg-elite-cyan text-black font-bold flex items-center justify-center mb-5 flex-shrink-0">
              {step.num}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-elite-muted text-sm leading-relaxed max-w-xs">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksVendor;
