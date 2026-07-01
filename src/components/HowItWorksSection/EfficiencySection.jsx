import { motion } from "framer-motion";
import { MapPin, Lock } from "lucide-react";

const tags = ["SMART FILTERS", "INSTANT MATCH", "PREDICTIVE PRICING"];

const EfficiencySection = () => (
  <section className="py-16 md:py-24 bg-elite-black relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold font-header text-white mb-4">
          Engineered for Efficiency
        </h2>
        <p className="text-elite-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Traditional approaches are slow. Manual searches are unreliable. ServiJoy is the
          tech-driven alternative.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* AI-Driven Matching — large top-left */}
        <motion.div
          className="elite-card p-6 md:p-8 md:row-span-1 hover:border-elite-cyan/30 transition-colors"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 bg-elite-cyan/10 border border-elite-cyan/20 text-elite-cyan text-xs font-semibold rounded-full mb-4">
            INTELLIGENCE
          </span>
          <h3 className="text-white font-bold text-xl mb-3">AI-Driven Matching</h3>
          <p className="text-elite-muted text-sm leading-relaxed mb-6">
            Our neural network analyzes thousands of data points to connect you with the ideal
            professional — reducing mismatches by 85%.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-elite-surface border border-elite-border text-elite-muted text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Secure Escrow — top-right */}
        <motion.div
          className="elite-card p-6 md:p-8 relative overflow-hidden hover:border-elite-cyan/30 transition-colors min-h-[200px]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,rgba(0,229,255,0.15),transparent_60%)]" />
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-xl bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Secure Escrow</h3>
            <p className="text-elite-muted text-sm leading-relaxed">
              Payments are held securely in the cloud and only released upon your digital
              signature of satisfaction.
            </p>
          </div>
        </motion.div>

        {/* Real-time Tracking — bottom-left */}
        <motion.div
          className="elite-card p-6 md:p-8 hover:border-elite-cyan/30 transition-colors"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="w-10 h-10 rounded-xl bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan mb-4">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Real-time Tracking</h3>
          <p className="text-elite-muted text-sm leading-relaxed">
            Live updates on service status and provider location. Know exactly when to expect
            your pro.
          </p>
        </motion.div>

        {/* Unified Communication — large bottom-right */}
        <motion.div
          className="elite-card p-6 md:p-8 hover:border-elite-cyan/30 transition-colors"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-white font-bold text-xl mb-3">Unified Communication</h3>
          <p className="text-elite-muted text-sm leading-relaxed mb-5">
            Everything happens in one place. Chat, file sharing, and video calls are integrated
            directly into the ServiJoy dashboard.
          </p>
          <div className="elite-card bg-elite-surface p-4 border-elite-border">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-elite-cyan/20 flex items-center justify-center text-elite-cyan text-xs font-bold">
                P
              </div>
              <span className="text-white text-sm font-medium">Your Pro</span>
              <span className="ml-auto text-elite-cyan text-xs">Online</span>
            </div>
            <div className="space-y-2">
              <div className="bg-elite-black rounded-lg px-3 py-2 text-elite-muted text-xs max-w-[80%]">
                On my way! ETA 15 mins.
              </div>
              <div className="bg-elite-cyan/10 rounded-lg px-3 py-2 text-white text-xs max-w-[80%] ml-auto">
                Great, see you soon!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EfficiencySection;
