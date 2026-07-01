import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import vendorImg from "../../assets/imgs/plumbing (2).webp";

const BecomeVendorHero = () => {
  const [partnerToggle, setPartnerToggle] = useState(true);

  return (
    <section className="relative bg-elite-black pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 elite-glow-top pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded border border-elite-cyan/40 text-elite-cyan text-xs font-semibold tracking-widest uppercase mb-6">
              PARTNER WITH THE BEST
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-header text-white leading-tight mb-5">
              Turn Your Skills into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-elite-cyan to-teal-400">
                Thriving Business
              </span>
            </h1>

            <p className="text-elite-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Join 10,000+ top-tier professionals earning more with ServiJoy.
              We provide the tools, you provide the talent.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                to="/login-signup"
                className="inline-flex justify-center px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm"
              >
                Start as Vendor
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex justify-center px-8 py-3.5 border border-elite-border text-white font-medium rounded-full hover:border-elite-cyan/40 transition-all text-sm"
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
                  partnerToggle ? "bg-elite-cyan" : "bg-elite-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    partnerToggle ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
              <span className="text-elite-muted text-sm group-hover:text-white/80 transition-colors">
                Partner as professional — unlock the service ecosystem
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
            <div className="elite-card overflow-hidden border-elite-border">
              <div className="relative h-64 sm:h-80">
                <OptimizedImage
                  src={vendorImg}
                  alt="Professional vendor"
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-elite-muted text-xs mb-1">Creativity, Knowledge, Tools</p>
                  <p className="text-white text-2xl md:text-3xl font-bold">$10,500.00</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-elite-cyan/20 border border-elite-cyan/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-elite-cyan" />
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
