import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const ServiceHero = ({ searchQuery, onSearchChange, onFilterClick, activeCategory, onCategoryChange }) => {
  const chips = ["All", "Home Care", "Commercial"];

  return (
    <section className="relative w-full bg-elite-black pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 elite-glow-top pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Desktop badge */}
        <motion.span
          className="hidden md:inline-block px-4 py-1.5 rounded-full border border-elite-border bg-elite-card text-elite-muted text-xs font-semibold tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          PREMIUM HOME &amp; OFFICE CARE
        </motion.span>

        {/* Mobile badge */}
        <motion.span
          className="md:hidden inline-block px-3 py-1 rounded-full border border-elite-cyan/30 text-elite-cyan text-xs font-semibold tracking-widest uppercase mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          PREMIUM SERVICES
        </motion.span>

        {/* Desktop heading */}
        <motion.h1
          className="hidden md:block text-4xl lg:text-5xl xl:text-6xl font-bold font-header text-white leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Expert Solutions for Every Need
        </motion.h1>

        {/* Mobile heading */}
        <motion.h1
          className="md:hidden text-3xl sm:text-4xl font-bold font-header text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Service delivery redefined for{" "}
          <span className="italic text-elite-cyan">modern life.</span>
        </motion.h1>

        {/* Desktop subheading */}
        <motion.p
          className="hidden md:block text-elite-muted text-lg max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover professional, vetted service providers tailored to your environment.
          From emergency repairs to scheduled maintenance.
        </motion.p>

        {/* Search bar */}
        <motion.div
          className="flex items-center bg-elite-card border border-elite-border rounded-xl md:rounded-2xl p-1.5 md:p-2 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center flex-1 pl-3 md:pl-4">
            <FaSearch className="text-elite-muted mr-3 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="What service do you need today?"
              className="hidden md:block flex-1 bg-transparent text-white placeholder:text-elite-muted/70 outline-none py-3 text-sm md:text-base"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search services (e.g. 'Cleaning')"
              className="md:hidden flex-1 bg-transparent text-white placeholder:text-elite-muted/70 outline-none py-2.5 text-sm"
            />
          </div>
          <button
            onClick={onFilterClick}
            className="hidden md:block px-6 py-3 bg-elite-cyan text-black font-bold rounded-xl hover:brightness-110 transition-all text-sm flex-shrink-0"
          >
            Filter
          </button>
        </motion.div>

        {/* Mobile filter chips */}
        <motion.div
          className="md:hidden flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {chips.map((chip) => (
            <button
              key={chip}
              onClick={() => onCategoryChange(chip)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                activeCategory === chip
                  ? "bg-white text-black border-white"
                  : "bg-elite-card text-elite-muted border-elite-border hover:border-elite-cyan/30"
              }`}
            >
              {chip}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
