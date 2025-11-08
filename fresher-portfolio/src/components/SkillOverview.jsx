import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";

const skillOverview = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Code2 size={28} />,
    desc: "I build responsive, accessible, and high-performing UIs using React.js, Tailwind CSS, and Framer Motion — focusing on smooth user experiences and clean interfaces.",
    gradient: "from-emerald-400 via-green-400 to-lime-400",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server size={28} />,
    desc: "I design and maintain scalable backend systems using Node.js, Express.js, and databases like MongoDB or PostgreSQL to ensure robust and secure APIs.",
    gradient: "from-purple-400 via-violet-400 to-indigo-400",
  },
  {
    id: 3,
    title: "Tools & Workflow",
    icon: <Wrench size={28} />,
    desc: "I use Git/GitHub for version control, VS Code for development, and tools like Firebase, Vite, and Postman to streamline productivity and testing.",
    gradient: "from-cyan-400 via-sky-400 to-blue-400",
  },
];

export default function SkillOverview() {
  return (
    <section id="skills" className="pt-24 pb-20 relative">
      {/* Soft background glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-60 h-60 bg-emerald-500/10 blur-[120px] rounded-full"></div>

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight"
      >
        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">
          My Development Stack
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="origin-center mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.4)]"
        />
      </motion.h2>

      {/* Skill Cards Grid */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {skillOverview.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 0 25px rgba(16,185,129,0.15)",
            }}
            className="relative bg-slate-800/40 border border-slate-700 border-opacity-0 rounded-2xl p-6 text-center backdrop-blur-sm transition-all duration-300"
          >
            {/* Icon */}
            <div
              className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r ${skill.gradient} shadow-[0_0_20px_rgba(16,185,129,0.2)]`}
            >
              <div className="text-slate-900">{skill.icon}</div>
            </div>

            {/* Title */}
            <h3
              className={`font-semibold text-lg bg-gradient-to-r ${skill.gradient} text-transparent bg-clip-text`}
            >
              {skill.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
