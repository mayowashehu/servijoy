import { motion } from "framer-motion";
import { Check, Shield, FileCheck, AlertTriangle } from "lucide-react";
import FrameCorners from "../ui/FrameCorners";

const points = [
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Rigorous Verification",
    desc: "Every artisan undergoes background checks, identity verification, and a skills assessment before joining the platform.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "The ServiJoy Guarantee",
    desc: "A 24/7 resolution team and insurance coverage on every booking, so a bad job doesn't come out of your pocket twice.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Fraud Prevention",
    desc: "Behavioral analysis and automated fraud detection keep the platform safe for clients and artisans alike.",
  },
];

const VettedSection = () => (
  <section className="py-16 md:py-24 bg-sj-surface relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — verification card */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-sj-brass/10 blur-3xl rounded-full" />
            <div className="relative bg-sj-card border border-sj-brass/20 rounded-2xl p-8">
              <FrameCorners color="verdigris" />
              <div className="w-full aspect-[3/4] rounded-xl bg-sj-bg border border-sj-line flex flex-col items-center justify-center gap-4 p-6">
                <div className="w-20 h-20 rounded-full bg-sj-brass/10 border-2 border-sj-brass/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-sj-brass/20" />
                </div>
                <div className="w-full space-y-2">
                  <div className="h-2 bg-sj-line rounded w-3/4 mx-auto" />
                  <div className="h-2 bg-sj-line rounded w-1/2 mx-auto" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Check className="w-4 h-4 text-sj-verdigris" />
                  <span className="sj-tag text-[10px] text-sj-verdigris">VERIFIED</span>
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
          <h2 className="font-display text-2xl md:text-4xl font-semibold text-sj-ink mb-8 leading-tight">
            Vetted for skill.{" "}
            <span className="text-sj-brass">Guaranteed for peace of mind.</span>
          </h2>
          <ul className="space-y-6">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-sj-ink font-semibold mb-1 font-display">{point.title}</h3>
                  <p className="text-sj-muted text-sm leading-relaxed">{point.desc}</p>
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