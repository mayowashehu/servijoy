import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import vendorImg from "../../assets/imgs/plumbing (2).webp";
import FrameCorners from "../ui/FrameCorners";

const BecomeVendorHero = () => {
  const [partnerToggle, setPartnerToggle] = useState(true);

  return (
    <section className="relative bg-sj-bg pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 sj-grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sj-tag text-[11px] text-sj-brass inline-block mb-6">
              PARTNER WITH SERVIJOY
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-sj-ink leading-tight mb-5">
              Turn your trade into<br className="hidden sm:block" />
              <span className="text-sj-brass">steady income.</span>
            </h1>

            <p className="text-sj-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Join 10,000+ artisans already earning through ServiJoy. We handle the
              scheduling, payments, and client search — you handle the craft.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                to="/login-signup"
                className="inline-flex justify-center px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm"
              >
                Start as Artisan
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex justify-center px-8 py-3.5 border border-sj-line text-white font-medium rounded-full hover:border-sj-brass/40 transition-all text-sm"
              >
                Learn More
              </Link>
            </div>

            <label className="flex items-center gap-3 cursor-pointer group">
              <button
                type="button"
                role="switch"
                aria-checked={partnerToggle}
                onClick={() => setPartnerToggle(!partnerToggle)}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
                  partnerToggle ? "bg-sj-brass" : "bg-sj-line"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    partnerToggle ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
              <span className="text-sj-muted text-sm group-hover:text-white/80 transition-colors">
                Register as a professional — unlock the full artisan toolkit
              </span>
            </label>
          </motion.div>

          {/* Right visual card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-sj-card border border-sj-line rounded-2xl overflow-hidden">
              <FrameCorners />
              <div className="relative h-64 sm:h-80">
                <OptimizedImage
                  src={vendorImg}
                  alt="Professional artisan at work"
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sj-bg/85 via-sj-bg/15 to-transparent" />
              </div>
              <div className="p-5 flex items-end justify-between gap-4">
                <div>
                  <p className="sj-tag text-[9px] text-sj-muted mb-1">EARNED THIS MONTH</p>
                  <p className="font-display text-sj-ink text-2xl md:text-3xl font-semibold">&#8358;850,000</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-sj-brass/20 border border-sj-brass/30 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-sj-brass" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BecomeVendorHero;