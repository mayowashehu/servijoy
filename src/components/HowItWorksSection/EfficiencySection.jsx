import { motion } from "framer-motion";
import { MapPin, Lock } from "lucide-react";

const tags = ["SMART FILTERS", "INSTANT MATCH", "PREDICTIVE PRICING"];

const EfficiencySection = () => (
  <section className="py-16 md:py-24 bg-sj-bg relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="sj-tag text-[11px] text-sj-brass">ENGINEERED FOR SPEED</span>
        <h2 className="mt-4 text-2xl md:text-4xl font-semibold font-display text-sj-ink mb-4">
          No more guessing who'll show up
        </h2>
        <p className="text-sj-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Word-of-mouth and manual searches are unreliable. ServiJoy replaces both with a
          system built for accountability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Smart Matching — large top-left */}
        <motion.div
          className="bg-sj-card border border-sj-line rounded-2xl p-6 md:p-8 hover:border-sj-brass/30 transition-colors"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="sj-tag text-[9px] text-sj-brass inline-block mb-4">MATCHING</span>
          <h3 className="text-sj-ink font-semibold text-xl mb-3 font-display">Smart Matching</h3>
          <p className="text-sj-muted text-sm leading-relaxed mb-6">
            We weigh trade, location, rating, and availability to connect you with the right
            artisan on the first try — not the third.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-sj-surface border border-sj-line text-sj-muted text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Secure Escrow — top-right */}
        <motion.div
          className="relative bg-sj-card border border-sj-line rounded-2xl p-6 md:p-8 overflow-hidden hover:border-sj-brass/30 transition-colors min-h-[200px]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,rgba(217,164,65,0.15),transparent_60%)]" />
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-sj-ink font-semibold text-lg mb-2 font-display">Secure Escrow</h3>
            <p className="text-sj-muted text-sm leading-relaxed">
              Payment is held until you confirm the job is done — the artisan gets paid, you
              get the work you paid for.
            </p>
          </div>
        </motion.div>

        {/* Real-time Tracking — bottom-left */}
        <motion.div
          className="bg-sj-card border border-sj-line rounded-2xl p-6 md:p-8 hover:border-sj-brass/30 transition-colors"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="w-10 h-10 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass mb-4">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="text-sj-ink font-semibold text-lg mb-2 font-display">Real-time Tracking</h3>
          <p className="text-sj-muted text-sm leading-relaxed">
            Live status updates on your job, so you know exactly when to expect your artisan
            at the door.
          </p>
        </motion.div>

        {/* Unified Communication — large bottom-right */}
        <motion.div
          className="bg-sj-card border border-sj-line rounded-2xl p-6 md:p-8 hover:border-sj-brass/30 transition-colors"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-sj-ink font-semibold text-xl mb-3 font-display">One Thread, Start to Finish</h3>
          <p className="text-sj-muted text-sm leading-relaxed mb-5">
            Chat, photos, and scheduling all live in one place, so nothing gets lost across
            calls and texts.
          </p>
          <div className="bg-sj-surface border border-sj-line rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-sj-brass/20 flex items-center justify-center text-sj-brass text-xs font-semibold font-display">
                T
              </div>
              <span className="text-sj-ink text-sm font-medium">Tunde &middot; Plumbing</span>
              <span className="ml-auto text-sj-verdigris text-xs sj-tag !tracking-normal">ONLINE</span>
            </div>
            <div className="space-y-2">
              <div className="bg-sj-bg rounded-lg px-3 py-2 text-sj-muted text-xs max-w-[80%]">
                On my way! ETA 15 mins.
              </div>
              <div className="bg-sj-brass/10 rounded-lg px-3 py-2 text-sj-ink text-xs max-w-[80%] ml-auto">
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