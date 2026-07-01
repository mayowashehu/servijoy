import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaExclamationTriangle, FaArrowLeft, FaHome, FaWrench, FaQuestion, FaMap, FaSearch, FaRocket, FaSatellite } from "react-icons/fa";

function NotFoundPage() {
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isExploring, setIsExploring] = useState(false);
  const controls = useAnimation();
  const searchRef = useRef(null);

  useEffect(() => {
    document.title = "404 - Page Not Found";

    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsSearchFocused(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [controls]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsExploring(true);
      setTimeout(() => {
        navigate("/search?q=" + encodeURIComponent(searchQuery));
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-sj-bg text-sj-ink relative overflow-hidden">
      <div className="absolute inset-0 sj-grid-bg pointer-events-none" />
      <div className="w-full max-w-3xl px-6 py-12 flex flex-col items-center text-center relative z-10">
        {/* Ambient particles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${i % 4 === 0 ? "bg-sj-brass" : "bg-sj-muted"}`}
              style={{
                width: `${(i % 4) + 1}px`,
                height: `${(i % 4) + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: `blur(${i % 3 === 0 ? "1px" : "0px"})`,
              }}
              animate={{
                opacity: [0.15, 0.6, 0.15],
                scale: [1, i % 5 === 0 ? 2 : 1.4, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Shooting accents */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shooting-star-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-sj-brass to-transparent"
            style={{
              width: `${50 + Math.random() * 100}px`,
              top: `${Math.random() * 70}%`,
              left: `-100px`,
              rotate: `${20 + Math.random() * 20}deg`,
              opacity: 0,
            }}
            animate={{
              left: ["-100px", "120%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 5 + i * 7 + Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={controls}
          whileHover={{ scale: 1.1, rotate: 0 }}
          transition={{ scale: { duration: 0.5 } }}
          className="relative mb-8 group cursor-pointer"
          onClick={() => setIsSearchFocused(true)}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-sj-brass rounded-full opacity-20 filter blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center">
              <FaExclamationTriangle className="text-5xl md:text-6xl text-sj-brass" />
            </div>

            {/* Orbiting satellite */}
            <motion.div
              className="absolute w-6 h-6 z-20"
              style={{ top: "10%", left: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative h-full">
                <motion.div className="absolute" style={{ left: "50px" }} whileHover={{ scale: 1.5 }}>
                  <FaSatellite className="text-sj-muted hover:text-sj-ink transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Hover tooltip */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-sj-card border border-sj-line px-3 py-1 rounded-full text-xs font-medium text-sj-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 0], y: [10, 0, 10] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          >
            Click to search
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 relative z-10"
        >
          <span className="sj-tag text-[11px] text-sj-brass mb-3 inline-block">ERROR 404</span>
          <motion.h1
            className="text-5xl md:text-7xl font-semibold font-display mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sj-brass via-[#e8c477] to-sj-brass relative"
            animate={{
              textShadow: [
                "0 0 5px rgba(217,164,65,0.1)",
                "0 0 20px rgba(217,164,65,0.35)",
                "0 0 5px rgba(217,164,65,0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            404
          </motion.h1>
          <div className="text-2xl md:text-3xl font-semibold font-display mb-4 text-sj-ink">
            <span className="border-r-2 border-sj-line pr-2 mr-1">Page</span> Not Found
          </div>
          <motion.p
            className="text-base md:text-lg text-sj-muted max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-sj-brass font-semibold">Oops!</span> It seems you've ventured
            into uncharted territory. Don't worry, we can help you find your way back.
          </motion.p>

          {/* Search bar */}
          <motion.div
            className={`mt-6 max-w-md mx-auto relative ${isSearchFocused ? "scale-105" : ""} transition-transform duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            ref={searchRef}
          >
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full px-5 py-3 pr-12 bg-sj-card border border-sj-line rounded-full text-sj-ink placeholder:text-sj-muted/70 focus:outline-none focus:ring-2 focus:ring-sj-brass/40 focus:border-sj-brass/40 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sj-muted hover:text-sj-brass transition-colors"
                aria-label="Search"
              >
                <FaSearch />
              </button>
            </form>

            <AnimatePresence>
              {isSearchFocused && (
                <motion.div
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsSearchFocused(false)}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(-1)}
              className="col-span-2 md:col-span-1 px-6 py-4 bg-sj-card border border-sj-line rounded-xl hover:border-sj-brass/30 transition-all flex items-center justify-center space-x-3 group"
              aria-label="Go back to previous page"
            >
              <motion.div animate={{ x: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
                <FaArrowLeft className="text-sj-brass" />
              </motion.div>
              <span className="font-medium text-sj-ink">Go Back</span>
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="col-span-2 md:col-span-1 overflow-hidden rounded-xl"
            >
              <Link
                to="/"
                className="w-full h-full px-6 py-4 bg-sj-brass text-black font-bold rounded-xl hover:brightness-110 transition-all flex items-center justify-center space-x-3 relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
                <FaHome />
                <span>Return Home</span>
              </Link>
            </motion.div>
          </div>

          {/* Expandable help */}
          <motion.div className="flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <motion.button
              onClick={() => setShowHelp(!showHelp)}
              className="text-sm flex items-center space-x-2 text-sj-muted hover:text-sj-ink transition-colors relative px-4 py-2 rounded-full group"
              animate={showHelp ? { y: [0, -3, 0] } : {}}
              transition={{ duration: 1, repeat: showHelp ? 0 : Infinity, repeatDelay: 3 }}
            >
              <motion.div animate={showHelp ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
                <FaMap className="text-sj-brass" />
              </motion.div>
              <span>{showHelp ? "Hide navigation options" : "Need help finding something?"}</span>
              {!showHelp && (
                <motion.div
                  className="absolute -right-1 -top-1 w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>

            <AnimatePresence>
              {showHelp && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-6 w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Link
                      to="/services"
                      className="p-4 bg-sj-card border border-sj-line rounded-lg hover:border-sj-brass/30 transition-all flex items-center space-x-3 group"
                    >
                      <FaWrench className="text-sj-brass" />
                      <span className="text-sj-ink">Services</span>
                    </Link>
                    <Link
                      to="/faq"
                      className="p-4 bg-sj-card border border-sj-line rounded-lg hover:border-sj-brass/30 transition-all flex items-center space-x-3 group"
                    >
                      <FaQuestion className="text-sj-brass" />
                      <span className="text-sj-ink">FAQ</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="p-4 bg-sj-card border border-sj-line rounded-lg hover:border-sj-brass/30 transition-all flex items-center space-x-3 group"
                    >
                      <FaRocket className="text-sj-brass" />
                      <span className="text-sj-ink">Contact Us</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Exploring overlay */}
      <AnimatePresence>
        {isExploring && (
          <motion.div
            className="fixed inset-0 bg-sj-bg/95 backdrop-blur-md z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <motion.div className="w-20 h-20 mx-auto mb-6" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                <FaRocket className="text-6xl text-sj-brass" />
              </motion.div>
              <h2 className="text-2xl font-semibold font-display text-sj-ink mb-2">Launching Search</h2>
              <p className="text-sj-muted">Preparing your results...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NotFoundPage;