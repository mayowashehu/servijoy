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
    <section className="py-24 bg-elite-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-header text-white text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We're Here for <span className="text-elite-cyan">You.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="elite-card p-5 flex items-center gap-4 hover:border-elite-cyan/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-elite-cyan/10 border border-elite-cyan/20 flex items-center justify-center text-elite-cyan group-hover:bg-elite-cyan/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-elite-muted text-xs uppercase tracking-wider">{item.title}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="elite-card p-8 space-y-4"
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
              className="w-full p-3.5 bg-elite-black border border-elite-border rounded-xl text-white placeholder:text-elite-muted/60 focus:outline-none focus:ring-1 focus:ring-elite-cyan/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3.5 bg-elite-black border border-elite-border rounded-xl text-white placeholder:text-elite-muted/60 focus:outline-none focus:ring-1 focus:ring-elite-cyan/50"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3.5 bg-elite-black border border-elite-border rounded-xl text-white placeholder:text-elite-muted/60 focus:outline-none focus:ring-1 focus:ring-elite-cyan/50"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3.5 bg-elite-black border border-elite-border rounded-xl text-white placeholder:text-elite-muted/60 focus:outline-none focus:ring-1 focus:ring-elite-cyan/50 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
