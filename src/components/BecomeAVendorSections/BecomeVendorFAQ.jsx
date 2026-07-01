import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who is the platform for?",
    answer:
      "ServiJoy is for any tradesperson — from someone just starting out to a seasoned pro. We provide the tools, payment processing, and support so you can focus on the work.",
  },
  {
    question: "Is there a monthly fee?",
    answer:
      "No monthly subscription required. ServiJoy runs on a transparent commission model — you only pay when you earn.",
  },
  {
    question: "Can I use my own equipment?",
    answer:
      "Yes. You bring your own tools and equipment. ServiJoy connects you with clients; you deliver the service your way.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Payments release within minutes of job completion, through our secure escrow system, directly to your linked account.",
  },
];

const BecomeVendorFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-sj-bg px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="sj-tag text-[11px] text-sj-brass">FAQ</span>
          <h2 className="mt-4 font-display text-2xl md:text-4xl font-semibold text-sj-ink">
            Common questions
          </h2>
        </motion.div>

        <div className="divide-y divide-sj-line border-t border-b border-sj-line">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sj-ink font-medium pr-4 group-hover:text-sj-brass transition-colors">
                  {faq.question}
                </span>
                <span className="text-sj-brass flex-shrink-0">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sj-muted text-sm leading-relaxed pb-5 pr-10">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BecomeVendorFAQ;