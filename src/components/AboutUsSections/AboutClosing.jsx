import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight, Star, Users, CheckCircle } from "lucide-react";
import Confetti from "react-confetti";

const AboutClosing = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [hoverButton, setHoverButton] = useState(null);

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "10,000+", label: "Tasks Completed" },
    { icon: <Star className="w-5 h-5" />, value: "5,000+", label: "Happy Clients" },
    { icon: <CheckCircle className="w-5 h-5" />, value: "98%", label: "Satisfaction Rate" },
  ];

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const handleGetStarted = () => {
    setShowConfetti(true);
    setTimeout(() => navigate("/login-signup"), 800);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
      className="w-full py-24 relative overflow-hidden bg-elite-surface"
    >
      <div className="absolute inset-0 elite-glow pointer-events-none"></div>

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.15}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}

      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="elite-card p-10 md:p-16 text-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
            >
              <p className="text-elite-cyan text-sm font-semibold uppercase tracking-widest mb-4">
                Join the Movement
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-header text-white leading-tight">
                Transforming Services,{" "}
                <span className="text-elite-cyan">Empowering Lives</span>
              </h2>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } },
              }}
              className="text-base md:text-lg text-elite-muted mt-6 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of satisfied users and professional vendors on ServiJoy.
              Quality, trust, and convenience — this is the future of service booking.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.6 } },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="bg-elite-black/50 border border-elite-border rounded-xl p-5 flex flex-col items-center"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-elite-cyan/10 p-2.5 rounded-full mb-3 text-elite-cyan">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                  <p className="text-elite-muted text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.7 } },
              }}
              className="flex items-center flex-wrap justify-center gap-4 mt-10"
            >
              <motion.button
                onClick={handleGetStarted}
                onMouseEnter={() => setHoverButton("start")}
                onMouseLeave={() => setHoverButton(null)}
                className="relative px-8 py-3.5 bg-elite-cyan text-black font-bold rounded-full overflow-hidden"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <motion.div animate={hoverButton === "start" ? { x: [0, 4, 0] } : {}} transition={{ repeat: Infinity, duration: 1 }}>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                onClick={() => navigate("/become-a-vendor")}
                onMouseEnter={() => setHoverButton("vendor")}
                onMouseLeave={() => setHoverButton(null)}
                className="relative px-8 py-3.5 bg-white text-black font-bold rounded-full"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="relative z-10 flex items-center">
                  Become a Vendor
                  <motion.div animate={hoverButton === "vendor" ? { x: [0, 4, 0] } : {}} transition={{ repeat: Infinity, duration: 1 }}>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: 1.3, duration: 0.7 } },
              }}
              className="mt-10 bg-elite-black/50 border border-elite-border p-5 rounded-xl max-w-xl mx-auto"
            >
              <div className="flex items-center gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-elite-cyan text-elite-cyan" />
                ))}
              </div>
              <p className="italic text-elite-muted text-sm">
                "ServiJoy completely transformed how I manage home services. The quality of professionals and ease of booking is unmatched!"
              </p>
              <div className="mt-3 font-medium text-white text-sm">Sarah K. — Happy Customer</div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutClosing;
