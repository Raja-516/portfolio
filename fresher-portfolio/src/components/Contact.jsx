import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, MessageSquare, ChevronRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [active, setActive] = useState(null);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("contacts") || "[]");
    list.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem("contacts", JSON.stringify(list));
    alert("Saved locally — wire up email backend later.");
    setForm({ name: "", email: "", message: "" });
  };

  const questions = [
    {
      id: 1,
      q: "Why should you hire me?",
      a: "I'm passionate about clean, efficient code and crafting user experiences that delight. I bring creativity, adaptability, and consistent learning into every project I work on.",
    },
    {
      id: 2,
      q: "My Important Skills",
      a: "Frontend Development (React, Tailwind, Framer Motion), Responsive UI Design, JavaScript ES6+, Node.js Basics, Git & GitHub, and UI Animation.",
    },
    {
      id: 3,
      q: "What kind of projects do I enjoy?",
      a: "I love building interactive, modern web apps that blend design and logic — portfolios, dashboards, and creative animations are my favorite!",
    },
  ];

  return (
    <section
      id="contact"
      className="pt-24 pb-20 relative overflow-hidden"
    >
      {/* soft background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full"></div>

      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight"
      >
        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
          Get In Touch
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="origin-center mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.4)]"
        />
      </motion.h2>

      {/* Content Layout */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {/* Left: Contact Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/40 backdrop-blur-md border border-slate-700 border-opacity-0 rounded-2xl p-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
        >
          <div className="space-y-4">
            <label className="block">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <User size={16} /> Name
              </span>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full mt-2 p-2 rounded-md bg-slate-900 border border-slate-700 focus:border-emerald-400 focus:outline-none transition"
              />
            </label>

            <label className="block">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <Mail size={16} /> Email
              </span>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                type="email"
                required
                className="w-full mt-2 p-2 rounded-md bg-slate-900 border border-slate-700 focus:border-emerald-400 focus:outline-none transition"
              />
            </label>

            <label className="block">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <MessageSquare size={16} /> Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows="5"
                className="w-full mt-2 p-2 rounded-md bg-slate-900 border border-slate-700 focus:border-emerald-400 focus:outline-none transition"
              />
            </label>

            <button
              type="submit"
              className="mt-4 flex items-center gap-2 justify-center px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 font-semibold hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <Send size={16} />
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Right: Interactive Q&A / Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {questions.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActive(active === item.id ? null : item.id)}
              className="cursor-pointer bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 border-opacity-0 rounded-xl p-4 transition-all duration-300 shadow-[0_0_10px_rgba(52,211,153,0.05)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-slate-100">{item.q}</h3>
                <ChevronRight
                  size={18}
                  className={`text-emerald-400 transition-transform duration-300 ${
                    active === item.id ? "rotate-90" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {active === item.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-3 text-sm text-slate-300 leading-relaxed"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
