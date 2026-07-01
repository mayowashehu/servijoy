import { motion } from "framer-motion";
import { Check, Shield, FileCheck, AlertTriangle } from "lucide-react";

const points = [
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Rigorous Verification",
    desc: "Every professional undergoes comprehensive background checks, identity verification, and skill assessments before joining the platform.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "The ServiJoy Guarantee",
    desc: "Our 24/7 resolution team and $10,000 insurance coverage ensure you're protected on every single booking.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Fraud Prevention",
    desc: "Advanced behavioral analysis and automated fraud detection keep the platform safe for everyone.",
  },
];

const VettedSection = () => (
  <section className="py-16 md:py-24 bg-elite-surface relative overflow-hidden">
    <div className="absolute inset-0 elite-glow pointer-events-none" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — glowing document illustration */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-elite-cyan/10 blur-3xl rounded-full" />
            <div className="relative elite-card p-8 border-elite-cyan/20">
              <div className="w-full aspect-[3/4] rounded-xl bg-elite-black border border-elite-border flex flex-col items-center justify-center gap-4 p-6">
                <div className="w-20 h-20 rounded-full bg-elite-cyan/10 border-2 border-elite-cyan/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-elite-cyan/20" />
                </div>
                <div className="w-full space-y-2">
                  <div className="h-2 bg-elite-border rounded w-3/4 mx-auto" />
                  <div className="h-2 bg-elite-border rounded w-1/2 mx-auto" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Check className="w-4 h-4 text-elite-cyan" />
                  <span className="text-elite-cyan text-xs font-semibold">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold font-header text-white mb-8 leading-tight">
            Vetted for Excellence.{" "}
            <span className="text-elite-cyan">Guaranteed for Peace.</span>
          </h2>
          <ul className="space-y-6">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{point.title}</h3>
                  <p className="text-elite-muted text-sm leading-relaxed">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default VettedSection;
