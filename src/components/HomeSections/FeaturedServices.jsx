import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import cleaner from "../../assets/imgs/home_repair.webp";
import Plumbing from "../../assets/imgs/plumbing.webp";
import Painting from "../../assets/imgs/painting.webp";

const solutions = [
  { title: "Strategic Planning", img: cleaner },
  { title: "Market Analysis", img: Plumbing },
  { title: "Asset Ranking", img: Painting },
];

const FeaturedServices = () => (
  <section className="py-24 bg-elite-surface relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-header text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Curated <span className="text-elite-cyan">Solutions</span>
        </motion.h2>
        <Link
          to="/services"
          className="text-elite-cyan text-sm font-semibold tracking-wider hover:brightness-110 flex items-center gap-1"
        >
          VIEW MORE <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {solutions.map((item, i) => (
          <motion.div
            key={item.title}
            className="group relative rounded-2xl overflow-hidden border border-elite-border aspect-[4/3] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <OptimizedImage
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <div className="w-8 h-8 rounded-full bg-elite-cyan/20 border border-elite-cyan/30 flex items-center justify-center text-elite-cyan">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedServices;
