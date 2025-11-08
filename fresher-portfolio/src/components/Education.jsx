import React from "react";
import { motion } from "framer-motion";

const educationList = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    university: "Pragati Engineering College,Surempalem",
    year: "2023 – 2026",
    desc: "Currently pursuing my undergraduate degree with a strong foundation in web FrameWorks, programming, and software development.",
  },
  {
    id: 2,
    degree: "Technical Diploma ",
    branch: "Computer Science & Engineering",
    university: "Andhra Polytechnic College,Kakinada",
    year: "2020 – 2023",
    desc: "Completed my higher secondary education focusing on Computer Science,web technologies , Mathematics, and Physics.",
  },
  {
    id: 3,
    degree: "Secondary School (SSC)",
    branch: "General Curriculum",
    university: "Little Soldiers",
    year: "2019 – 2020",
    desc: "Built foundational academic skills with focus on mathematics and logical reasoning.",
  },
];

export default function Education() {
  return (
    <section id="education" className="pt-24 pb-20 relative">
      {/* Glow effect background */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-violet-500/10 blur-[120px] rounded-full"></div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight"
      >
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 text-transparent bg-clip-text">
          Education
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="origin-center mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 rounded-full shadow-[0_0_10px_rgba(167,139,250,0.4)]"
        />
      </motion.h2>

      {/* Education Grid */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {educationList.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 0 25px rgba(139,92,246,0.25)",
            }}
            className="relative bg-slate-800/40 border border-slate-700 border-opacity-0 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300"
          >
            {/* Top Ribbon */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 rounded-t-2xl"></div>

            {/* Year Tag */}
            <div className="text-xs text-slate-400 mb-2">{edu.year}</div>

            {/* Degree */}
            <h3 className="font-semibold text-lg bg-gradient-to-r text-green-400  text-transparent bg-clip-text">
              {edu.degree}
            </h3>

            {/* Branch */}
            <p className="text-slate-300 text-sm mt-1">{edu.branch}</p>

            {/* University */}
            <p className="text-slate-400 text-sm mt-1">{edu.university}</p>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {edu.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
