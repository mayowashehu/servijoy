import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import cleaner from "../../assets/imgs/home_repair.webp";
import Plumbing from "../../assets/imgs/plumbing.webp";
import Painting from "../../assets/imgs/painting.webp";

const solutions = [
  { code: "CLN", title: "Deep Cleaning", detail: "Full home & office turnaround", img: cleaner },
  { code: "PLM", title: "Plumbing Repair", detail: "Leaks, fittings, installations", img: Plumbing },
  { code: "PNT", title: "Interior Painting", detail: "Prep, coat, and finish work", img: Painting },
];

const FeaturedServices = () => (
  <section className="py-24 bg-sj-surface relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="sj-tag text-[11px] text-sj-brass">IN DEMAND THIS WEEK</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-sj-ink">
            Most-booked trades
          </h2>
        </motion.div>
        <Link
          to="/services"
          className="text-sj-brass text-sm font-medium hover:brightness-110 flex items-center gap-1 shrink-0"
        >
          View all services <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {solutions.map((item, i) => (
          <motion.div
            key={item.title}
            className="group relative rounded-2xl overflow-hidden border border-sj-line aspect-[4/3] cursor-pointer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <OptimizedImage
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.55] group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sj-bg/95 via-sj-bg/20 to-transparent" />

            <span className="absolute top-4 left-4 sj-tag text-[10px] text-sj-brass">{item.code}</span>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-sj-ink font-display">{item.title}</h3>
                  <p className="text-xs text-sj-muted mt-1">{item.detail}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-sj-brass/15 border border-sj-brass/30 flex items-center justify-center text-sj-brass shrink-0 group-hover:bg-sj-brass group-hover:text-sj-bg transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedServices;