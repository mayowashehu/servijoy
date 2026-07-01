import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCheck, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const allReviews = [
    { id: 1, name: "John Smith", position: "Residential Client", image: "/api/placeholder/80/80", date: "2 weeks ago", rating: 5, verified: true, review: "Absolutely amazing service! My house has never been cleaner. The attention to detail was impressive, and they even cleaned areas I hadn't thought to mention.", service: "Deep Cleaning", category: "residential" },
    { id: 2, name: "Sarah Johnson", position: "Business Owner", image: "/api/placeholder/80/80", date: "1 month ago", rating: 4, verified: true, review: "Professional and on time. The team was friendly and accommodating to our office's specific needs. Highly recommend for any business!", service: "Office Cleaning", category: "business" },
    { id: 3, name: "Michael Chen", position: "Homeowner", image: "/api/placeholder/80/80", date: "3 days ago", rating: 5, verified: true, review: "Exceeded all my expectations. The cleaning crew was thorough, efficient, and used eco-friendly products that left my home smelling fresh without harsh chemicals.", service: "Regular Cleaning", category: "residential" },
    { id: 4, name: "Emily Parker", position: "Apartment Resident", image: "/api/placeholder/80/80", date: "1 week ago", rating: 5, verified: true, review: "I've used many cleaning services before, but this one stands out. They transformed my apartment in just a few hours. Worth every penny!", service: "Move-in Cleaning", category: "residential" },
    { id: 5, name: "David Williams", position: "Restaurant Owner", image: "/api/placeholder/80/80", date: "2 months ago", rating: 5, verified: true, review: "Exceptional service for our restaurant. The team understands the unique challenges of keeping a food establishment clean and sanitary. They've become an essential part of our operation.", service: "Commercial Cleaning", category: "business" },
    { id: 6, name: "Sophia Rodriguez", position: "Realtor", image: "/api/placeholder/80/80", date: "3 weeks ago", rating: 4, verified: true, review: "I regularly use this cleaning service for my property listings. They make every home look its absolute best for potential buyers. Reliable and transformative results every time.", service: "Deep Cleaning", category: "business" }
  ];

  const filteredReviews = activeFilter === "all" ? allReviews : allReviews.filter((review) => review.category === activeFilter);
  const reviews = filteredReviews.slice(0, 4);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goToNext();
    if (touchEnd - touchStart > 50) goToPrev();
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, reviews.length]);

  const handleCarouselHover = (isHovering) => setAutoplay(!isHovering);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleVote = (reviewId, isHelpful) => {
    setHelpfulVotes((prev) => ({ ...prev, [reviewId]: isHelpful }));
  };

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-24 bg-sj-bg"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <span className="sj-tag text-[11px] text-sj-brass mb-4 inline-block">CLIENT EXPERIENCES</span>
          <h2 className="text-3xl md:text-5xl font-semibold font-display text-sj-ink tracking-tight mb-4">
            What Our Clients <span className="text-sj-brass">Love</span> About Us
          </h2>
          <p className="text-sj-muted max-w-2xl mx-auto">
            Don't just take our word for it. Here's what customers have to say about our cleaning services.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center mb-10 gap-2 flex-wrap">
          {[
            { key: "all", label: "All Reviews" },
            { key: "residential", label: "Residential" },
            { key: "business", label: "Business" },
          ].map((f) => (
            <motion.button
              key={f.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === f.key
                  ? "bg-sj-brass text-black border-sj-brass"
                  : "bg-sj-card text-sj-muted border-sj-line hover:border-sj-brass/30"
              }`}
              onClick={() => changeFilter(f.key)}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { value: "4.8", label: "Average Rating", stars: true },
            { value: "98%", label: "Satisfied Clients" },
            { value: "27", label: "Total Reviews" },
            { value: "5+", label: "Years of Service" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-sj-card border border-sj-line rounded-2xl p-4 text-center"
            >
              <div className="text-3xl font-semibold font-display text-sj-brass">{stat.value}</div>
              {stat.stars && (
                <div className="flex justify-center gap-1 my-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className={star <= 4 ? "text-sj-brass" : "text-sj-brass/40"} size={12} />
                  ))}
                </div>
              )}
              <div className="text-sm text-sj-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative"
          ref={carouselRef}
          onMouseEnter={() => handleCarouselHover(true)}
          onMouseLeave={() => handleCarouselHover(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full bg-sj-line h-1 rounded-full overflow-hidden mb-6">
            <motion.div
              className="h-full bg-sj-brass"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-sj-card border border-sj-line p-3 rounded-full text-sj-brass hover:border-sj-brass/40 transition-colors duration-300 hidden md:flex"
            onClick={goToPrev}
            aria-label="Previous review"
          >
            <FaChevronLeft />
          </motion.button>

          <div className="mx-auto max-w-4xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-sj-card border border-sj-line rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border border-sj-line">
                        <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} className="w-full h-full object-cover" />
                      </div>
                      {reviews[currentIndex].verified && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute -bottom-2 -right-2 bg-sj-verdigris text-black p-1 rounded-full"
                        >
                          <FaCheck className="h-3 w-3" />
                        </motion.div>
                      )}
                    </div>

                    <h4 className="font-semibold font-display text-sj-ink text-center md:text-left">{reviews[currentIndex].name}</h4>
                    <p className="text-sj-muted text-sm mb-2 text-center md:text-left">{reviews[currentIndex].position}</p>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < reviews[currentIndex].rating ? "text-sj-brass" : "text-sj-line"} size={16} />
                      ))}
                      <span className="text-sj-muted text-sm ml-2">({reviews[currentIndex].rating}.0)</span>
                    </div>

                    <div className="sj-tag text-[10px] text-sj-brass px-3 py-1 rounded-full bg-sj-brass/10 border border-sj-brass/20">
                      {reviews[currentIndex].service}
                    </div>

                    <div className="mt-4 text-xs text-sj-muted">{reviews[currentIndex].date}</div>
                  </div>

                  <div className="md:w-2/3 relative">
                    <FaQuoteLeft className="absolute text-4xl text-sj-brass/20 -left-2 -top-2" />
                    <div className="pl-6 pt-4">
                      <p className="text-sj-muted leading-relaxed mb-6">{reviews[currentIndex].review}</p>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-sj-muted text-sm">{reviews[currentIndex].date}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-sj-muted">Was this helpful?</span>
                          <button
                            onClick={() => handleVote(reviews[currentIndex].id, true)}
                            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${
                              helpfulVotes[reviews[currentIndex].id] === true
                                ? "bg-sj-brass/10 text-sj-brass"
                                : "bg-sj-surface text-sj-muted hover:text-sj-ink"
                            }`}
                          >
                            <FaThumbsUp size={12} />
                            <span>Yes</span>
                          </button>
                          <button
                            onClick={() => handleVote(reviews[currentIndex].id, false)}
                            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${
                              helpfulVotes[reviews[currentIndex].id] === false
                                ? "bg-red-500/10 text-red-400"
                                : "bg-sj-surface text-sj-muted hover:text-sj-ink"
                            }`}
                          >
                            <FaThumbsDown size={12} />
                            <span>No</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-sj-card border border-sj-line p-3 rounded-full text-sj-brass hover:border-sj-brass/40 transition-colors duration-300 hidden md:flex"
            onClick={goToNext}
            aria-label="Next review"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? "bg-sj-brass w-6 h-2" : "bg-sj-line hover:bg-sj-brass/40 w-2 h-2"
              }`}
              onClick={() => goToReview(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile nav */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button className="bg-sj-brass text-black p-3 rounded-full" onClick={goToPrev} aria-label="Previous review">
            <FaChevronLeft />
          </button>
          <button className="bg-sj-brass text-black p-3 rounded-full" onClick={goToNext} aria-label="Next review">
            <FaChevronRight />
          </button>
        </div>

        {/* Expanded reviews */}
        <motion.div
          className="mt-16"
          animate={{ height: isExpanded ? "auto" : "0px", opacity: isExpanded ? 1 : 0 }}
          initial={{ height: "0px", opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          <h3 className="text-2xl font-semibold font-display text-sj-ink mb-6 text-center">All Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-sj-card border border-sj-line rounded-2xl p-6 hover:border-sj-brass/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sj-ink">{review.name}</h4>
                    <p className="text-xs text-sj-muted">{review.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "text-sj-brass" : "text-sj-line"} size={14} />
                  ))}
                  <span className="text-xs text-sj-muted ml-2">{review.date}</span>
                </div>
                <p className="text-sj-muted text-sm mb-3">{review.review}</p>
                <div className="flex justify-between items-center">
                  <span className="sj-tag text-[10px] text-sj-brass px-2 py-1 rounded-full bg-sj-brass/10">
                    {review.service}
                  </span>
                  {review.verified && (
                    <span className="text-xs text-sj-verdigris flex items-center">
                      <FaCheck className="mr-1" size={10} /> Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Toggle */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center justify-center px-6 py-3 bg-sj-card border border-sj-line hover:border-sj-brass/30 text-sj-ink font-medium rounded-full transition-colors duration-300"
          >
            {isExpanded ? "Hide Reviews" : `See All ${filteredReviews.length} Reviews`}
          </motion.button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20 bg-sj-card border border-sj-line rounded-2xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(217,164,65,0.2),transparent_60%)]" />
          <div className="relative z-10">
            <span className="sj-tag text-[11px] text-sj-brass mb-3 inline-block">JOIN THE NETWORK</span>
            <h3 className="text-2xl md:text-3xl font-semibold font-display text-sj-ink mb-4">
              Experience Our Premium Cleaning Services
            </h3>
            <p className="mb-6 max-w-2xl mx-auto text-sj-muted">
              Join our satisfied customers and discover why we're the most trusted cleaning service in the area.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#book-now" className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm">
                Book Now
              </a>
              <a href="#contact" className="px-8 py-3.5 border border-sj-line text-sj-ink font-medium rounded-full hover:border-sj-brass/40 transition-all text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReviewSection;