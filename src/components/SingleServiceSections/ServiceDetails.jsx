import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaLeaf,
  FaClock,
  FaWallet,
  FaPhoneAlt,
  FaShieldAlt,
  FaArrowRight
} from "react-icons/fa";

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState("features");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const benefits = [
    { id: 1, icon: <FaUsers />, title: "Skilled Professionals", description: "Background-checked and trained cleaning experts with 5+ years experience", highlight: "Top 1% Cleaners" },
    { id: 2, icon: <FaLeaf />, title: "Eco-Friendly Products", description: "Non-toxic, sustainable cleaning solutions safe for kids and pets", highlight: "100% Safe" },
    { id: 3, icon: <FaClock />, title: "Flexible Scheduling", description: "Book same-day or in advance with 24/7 online scheduling system", highlight: "Same-Day Available" },
    { id: 4, icon: <FaWallet />, title: "Transparent Pricing", description: "No hidden fees with customizable cleaning packages for every budget", highlight: "Best Value" },
  ];

  const features = [
    "Deep cleaning of all rooms and surfaces",
    "Special attention to kitchens and bathrooms",
    "Window cleaning and blind dusting",
    "Carpet and upholstery treatment",
    "Disinfection of high-touch surfaces",
    "Customizable cleaning checklist",
  ];

  const reviews = [
    { name: "Sarah Johnson", rating: 5, comment: "The cleaning team was professional and thorough. My house hasn't been this clean in years!", date: "2 days ago" },
    { name: "Michael Thomas", rating: 5, comment: "Punctual, efficient, and went beyond my expectations. Will definitely book again.", date: "1 week ago" },
    { name: "Aisha Peterson", rating: 4, comment: "Great service overall. The eco-friendly products left my home smelling fresh without harsh chemicals.", date: "3 weeks ago" },
  ];

  return (
    <section className="py-20 bg-sj-bg relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-sj-brass/10 rounded-full opacity-60 blur-3xl" />
      <div className="absolute bottom-12 -left-24 w-80 h-80 bg-sj-brass/10 rounded-full opacity-40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="sj-tag text-[11px] text-sj-brass mb-4 inline-block">PREMIUM SERVICE</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-sj-ink leading-tight">
              Experience the Best in{" "}
              <span className="text-sj-brass">Premium Cleaning</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-px w-24 bg-sj-brass mx-auto my-6"
              style={{ transformOrigin: "left" }}
            />

            <p className="text-sj-muted text-lg max-w-3xl mx-auto leading-relaxed">
              Our expert cleaners provide deep, thorough, and reliable cleaning services
              tailored to your exact specifications. Using only premium eco-friendly products
              and advanced techniques, we ensure your space is not just clean, but truly healthy.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left: Tabs */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:w-7/12">
            <div className="flex border-b border-sj-line mb-8">
              {["features", "process", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium text-base transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-sj-brass border-b-2 border-sj-brass"
                      : "text-sj-muted hover:text-sj-ink"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-sj-card border border-sj-line p-8 rounded-2xl">
              {/* Features */}
              {activeTab === "features" && (
                <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                  <h3 className="text-2xl font-semibold font-display text-sj-ink mb-6">Service Features</h3>
                  <div className="grid gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-sj-surface transition-colors"
                      >
                        <FaCheckCircle className="text-sj-brass flex-shrink-0" />
                        <p className="text-sj-muted">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div variants={itemVariants} className="mt-8 bg-sj-surface p-6 rounded-xl border-l-2 border-sj-brass">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass flex-shrink-0">
                        <FaShieldAlt />
                      </div>
                      <div>
                        <h4 className="font-semibold font-display text-sj-ink">Satisfaction Guarantee</h4>
                        <p className="text-sj-muted text-sm">
                          Not happy with the results? We'll come back and reclean at no additional cost.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Process */}
              {activeTab === "process" && (
                <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                  <h3 className="text-2xl font-semibold font-display text-sj-ink mb-6">Our Cleaning Process</h3>
                  <div className="space-y-6">
                    {[
                      { step: 1, title: "Initial Assessment", desc: "We evaluate your space and identify specific areas that need attention" },
                      { step: 2, title: "Customized Plan", desc: "We create a cleaning plan tailored to your specific needs and preferences" },
                      { step: 3, title: "Deep Cleaning", desc: "Our experts clean thoroughly using our proven systematic approach" },
                      { step: 4, title: "Final Inspection", desc: "We conduct a final walkthrough to ensure everything meets our standards" }
                    ].map((process) => (
                      <motion.div key={process.step} variants={itemVariants} className="flex gap-4">
                        <div className="h-9 w-9 rounded-xl bg-sj-brass/10 border border-sj-brass/20 text-sj-brass flex items-center justify-center font-semibold font-display flex-shrink-0">
                          {process.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sj-ink">{process.title}</h4>
                          <p className="text-sj-muted text-sm">{process.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Reviews */}
              {activeTab === "reviews" && (
                <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold font-display text-sj-ink">Customer Reviews</h3>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-sj-ink">4.8</span>
                      <div className="flex text-sj-brass">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i === 4 ? "text-sj-line" : ""} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-4 bg-sj-surface border border-sj-line rounded-lg hover:border-sj-brass/30 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-sj-ink">{review.name}</h4>
                          <span className="text-sm text-sj-muted">{review.date}</span>
                        </div>
                        <div className="flex text-sj-brass mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i >= review.rating ? "text-sj-line" : ""} />
                          ))}
                        </div>
                        <p className="text-sj-muted text-sm">{review.comment}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <a href="#all-reviews" className="text-sj-brass font-medium inline-flex items-center hover:brightness-110 text-sm">
                      View all 48 reviews <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-8 flex flex-wrap gap-3">
              <button className="px-8 py-3 bg-sj-brass hover:brightness-110 text-black font-bold rounded-full transition-all flex items-center text-sm">
                Book Now <FaArrowRight className="ml-2" />
              </button>
              <button className="px-8 py-3 bg-transparent border border-sj-line hover:border-sj-brass/40 text-sj-ink font-medium rounded-full transition-all flex items-center text-sm">
                <FaPhoneAlt className="mr-2" /> Get a Quote
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:w-5/12">
            <div className="grid gap-5">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="bg-sj-card border border-sj-line hover:border-sj-brass/30 p-6 rounded-2xl transition-all relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 px-2 py-1 bg-sj-brass/10 text-sj-brass text-xs font-medium rounded-full">
                    {benefit.highlight}
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-display text-sj-ink mb-2">{benefit.title}</h3>
                      <p className="text-sj-muted text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              variants={itemVariants}
              className="mt-6 bg-sj-card border border-sj-line rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_100%,rgba(217,164,65,0.3),transparent_60%)]" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="text-sj-brass text-4xl leading-none font-display">"</div>
                <div>
                  <p className="text-sj-muted italic mb-4 leading-relaxed">
                    I've tried several cleaning services in the city, but this team is by far the
                    most professional and detail-oriented. My home feels completely transformed
                    after each visit!
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 bg-sj-brass/10 border border-sj-brass/20 rounded-full flex items-center justify-center">
                      <span className="font-semibold font-display text-sj-brass">JD</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sj-ink">Jessica Davis</h4>
                      <p className="text-sm text-sj-muted">Loyal Customer • 2+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;