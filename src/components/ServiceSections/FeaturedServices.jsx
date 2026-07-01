import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServiceCard from "../ServiceCard";
import sampleImg from '../../assets/imgs/hero_2.webp';

const featuredServices = [
  {
    id: 1,
    name: "Deep Home Cleaning",
    img: "/images/cleaning.webp",
    description: "Thorough cleaning of all rooms and surfaces, leaving your home spotless.",
    rating: 4.9,
    reviews: 238,
    price: "$120"
  },
  {
    id: 2,
    name: "24/7 Plumbing Support",
    img: "/images/plumbing.webp",
    description: "Emergency plumbing repairs available around the clock, any day of the week.",
    rating: 4.8,
    reviews: 187,
    price: "$85"
  },
  {
    id: 3,
    name: "Emergency Electrical Repairs",
    img: "/images/electrical.webp",
    description: "Fast response electrical fixes for any urgent issues in your home.",
    rating: 4.7,
    reviews: 156,
    price: "$95"
  },
];

const FeaturedServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => setHoveredIndex(index);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-sj-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(217,164,65,0.12),transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sj-tag text-[11px] text-sj-brass inline-block mb-3"
          >
            PREMIUM SERVICES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-semibold font-display text-sj-ink mb-4"
          >
            Services You Can Trust
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-sj-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Our most in-demand services, backed by our satisfaction guarantee and trusted by thousands of happy customers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              className="relative"
            >
              <ServiceCard
                title={service.name}
                img={sampleImg}
                description={service.description}
                rating={service.rating}
                reviews={service.reviews}
                price={service.price}
                gradient={index % 2 === 1}
                isHovered={hoveredIndex === index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          
           <a href="/services"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm"
          >
            View All Services
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;