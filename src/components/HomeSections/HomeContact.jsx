import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const HomeContact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const contactItems = [
    { icon: <Mail className="w-5 h-5" />, title: "Email", value: "support@servijoy.com", href: "mailto:support@servijoy.com" },
    { icon: <Phone className="w-5 h-5" />, title: "Phone", value: "+234 123 456 7890", href: "tel:+2341234567890" },
    { icon: <MapPin className="w-5 h-5" />, title: "Location", value: "Ilorin, Nigeria", href: "#" },
  ];

  return (
    <section className="py-24 bg-sj-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="sj-tag text-[11px] text-sj-brass">GET IN TOUCH</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-sj-ink">
            We're here for you
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="bg-sj-card border border-sj-line rounded-2xl p-5 flex items-center gap-4 hover:border-sj-brass/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center text-sj-brass group-hover:bg-sj-brass/20 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="sj-tag text-[9px] text-sj-muted">{item.title.toUpperCase()}</p>
                  <p className="text-sj-ink font-medium mt-0.5">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-sj-card border border-sj-line rounded-2xl p-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3.5 bg-sj-bg border border-sj-line rounded-xl text-sj-ink placeholder:text-sj-muted/60 focus:outline-none focus:ring-1 focus:ring-sj-brass/50 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3.5 bg-sj-bg border border-sj-line rounded-xl text-sj-ink placeholder:text-sj-muted/60 focus:outline-none focus:ring-1 focus:ring-sj-brass/50 text-sm"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3.5 bg-sj-bg border border-sj-line rounded-xl text-sj-ink placeholder:text-sj-muted/60 focus:outline-none focus:ring-1 focus:ring-sj-brass/50 text-sm"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3.5 bg-sj-bg border border-sj-line rounded-xl text-sj-ink placeholder:text-sj-muted/60 focus:outline-none focus:ring-1 focus:ring-sj-brass/50 resize-none text-sm"
            />
            <button
              type="submit"
              className="w-full py-3.5 bg-sj-brass text-sj-bg font-semibold rounded-full hover:brightness-110 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;