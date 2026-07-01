import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaArrowRight, FaCheck, FaClock, FaLeaf, FaShieldAlt, FaMedal } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  const [activeBackground, setActiveBackground] = useState(0);
  const backgrounds = ["living-room-cleaning", "kitchen-deep-clean", "bathroom-sanitization"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-sj-bg">
      {/* Background crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBackground}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/api/placeholder/1920/1080)`, backgroundSize: "cover" }}
        />
      </AnimatePresence>

      {/* Overlay tuned to sj palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-sj-bg/70 via-sj-bg/80 to-sj-bg/95" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(217,164,65,0.2),transparent_60%)]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sj-brass/10 blur-3xl" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sj-brass/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <span className="sj-tag text-[11px] text-sj-brass px-4 py-1.5 rounded-full border border-sj-line bg-sj-card">
                TOP-RATED SERVICE
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-display mb-6 text-sj-ink leading-tight"
            >
              Premium Home Cleaning
              <span className="block text-sj-brass">Redefined</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-sj-muted mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the ultimate in home cleaning with our meticulous attention to detail,
              eco-friendly products, and expertly trained professionals who treat your home like their own.
            </motion.p>

            <motion.div variants={fadeInScale} className="flex justify-center items-center gap-1 mb-8">
              <div className="flex">
                {Array(5).fill().map((_, index) => (
                  <FaStar key={index} className="text-sj-brass text-xl md:text-2xl" />
                ))}
              </div>
              <span className="text-sj-ink text-lg ml-2 font-medium">4.9</span>
              <span className="text-sj-muted text-base">(500+ reviews)</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/book-now"
                className="bg-sj-brass px-8 py-4 rounded-full text-black font-bold text-lg flex items-center justify-center transform transition-all duration-300 hover:brightness-110 hover:-translate-y-1"
              >
                Book Now
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-sj-line hover:border-sj-brass/40 px-8 py-4 rounded-full text-sj-ink font-medium text-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;