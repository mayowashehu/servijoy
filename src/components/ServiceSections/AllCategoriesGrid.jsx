import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LayoutGrid, List, Star, ChevronDown } from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import { ALL_SERVICES } from "./servicesData";

import homeRepair from "../../assets/imgs/home_repair.webp";
import plumbing from "../../assets/imgs/plumbing.webp";
import electrical from "../../assets/imgs/electrical.webp";
import flooring from "../../assets/imgs/flooring.webp";

const imageMap = {
  home_repair: homeRepair,
  plumbing,
  electrical,
  flooring,
};

const AllCategoriesGrid = ({ searchQuery = "", activeCategory = "All" }) => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("grid");
  const [showAll, setShowAll] = useState(false);

  const filtered = ALL_SERVICES.filter((s) => {
    const matchesSearch =
      !searchQuery ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const displayed = showAll ? filtered : filtered;

  const handleBook = (route) => navigate(route);

  return (
    <section className="py-12 md:py-20 bg-sj-bg relative overflow-hidden" id="all-categories">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_0%,rgba(217,164,65,0.12),transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="sj-tag text-[11px] text-sj-brass">BROWSE ALL</span>
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold font-display text-sj-ink mb-2">
              All Categories
            </h2>
            <p className="text-sj-muted text-sm md:text-base">
              Choose from over 50+ specialized service types
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${
                viewMode === "grid"
                  ? "bg-sj-brass text-black border-sj-brass"
                  : "border-sj-line text-sj-muted hover:text-sj-ink"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${
                viewMode === "list"
                  ? "bg-sj-brass text-black border-sj-brass"
                  : "border-sj-line text-sj-muted hover:text-sj-ink"
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop grid / list */}
        <div
          className={`hidden md:grid gap-5 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {displayed.map((service, i) => (
            <motion.div
              key={service.id}
              className={`bg-sj-card border border-sj-line rounded-2xl overflow-hidden hover:border-sj-brass/30 transition-all ${
                viewMode === "list" ? "flex flex-row" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : "h-44"}`}>
                <OptimizedImage
                  src={imageMap[service.image]}
                  alt={service.title}
                  className="w-full h-full object-cover brightness-75 hover:brightness-90 transition-all"
                />
                {service.badge && (
                  <span className="absolute top-3 left-3 bg-sj-brass text-black text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">{service.icon}</span>
                  <h3 className="text-sj-ink font-semibold font-display">{service.title}</h3>
                </div>
                <p className="text-sj-muted text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center justify-between gap-3 mt-auto">
                  <span className="text-xs text-sj-muted">
                    FROM <span className="text-sj-ink font-bold text-sm">{service.price}/{service.unit}</span>
                  </span>
                  <button
                    onClick={() => handleBook(service.route)}
                    className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-100 transition-all whitespace-nowrap"
                  >
                    Book Professional
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical cards */}
        <div className="md:hidden space-y-5">
          {displayed.map((service, i) => (
            <motion.div
              key={service.id}
              className="bg-sj-card border border-sj-line rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="relative h-48">
                <OptimizedImage
                  src={imageMap[service.image]}
                  alt={service.title}
                  className="w-full h-full object-cover brightness-75"
                />
                <span className="absolute bottom-3 left-3 bg-sj-brass text-black text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  {service.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sj-ink font-semibold font-display text-lg">{service.title}</h3>
                  <div className="flex items-center gap-1 text-sj-muted text-sm">
                    <Star className="w-3.5 h-3.5 fill-sj-brass text-sj-brass" />
                    {service.rating}
                  </div>
                </div>
                <p className="text-sj-muted text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="sj-tag text-[9px] text-sj-muted">Starts at</p>
                    <p className="text-sj-ink font-bold text-lg">{service.price}</p>
                  </div>
                  <button
                    onClick={() => handleBook(service.route)}
                    className="px-6 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all"
                  >
                    Book
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full md:w-auto px-8 py-3.5 bg-sj-card border border-sj-line hover:border-sj-brass/30 text-sj-ink font-medium rounded-full text-sm transition-all inline-flex items-center justify-center gap-2"
          >
            VIEW ALL 52 SPECIALIZED SERVICES
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllCategoriesGrid;