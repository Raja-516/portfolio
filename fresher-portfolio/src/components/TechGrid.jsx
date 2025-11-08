import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Settings,
  Database,
  Terminal,
  Cpu,
  Cloud,
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <Code2 size={20} /> },
      { name: "Tailwind CSS", icon: <Settings size={20} /> },
      { name: "JavaScript (ES6+)", icon: <Terminal size={20} /> },
      { name: "HTML5 / CSS3", icon: <Cpu size={20} /> },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", icon: <Server size={20} /> },
      { name: "Express.js", icon: <Server size={20} /> },
      { name: "MongoDB", icon: <Database size={20} /> },
      { name: "PostgreSQL", icon: <Database size={20} /> },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git / GitHub", icon: <Cloud size={20} /> },
      { name: "Vite", icon: <Settings size={20} /> },
      { name: "Firebase", icon: <Cloud size={20} /> },
      { name: "VS Code", icon: <Terminal size={20} /> },
    ],
  },
];

export default function TechGrid() {
  return (
<section id="tech" className="pt-24 pb-16 relative">
  {/* Soft blue glow behind header */}
  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-500/10 blur-[100px] rounded-full"></div>

  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-10 text-center tracking-tight"
  ><span>My     </span>
    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 text-transparent bg-clip-text">
      Tech &amp; Tools
    </span>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="origin-center mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.4)]"
    />
  </motion.h2>


      <div className="space-y-10">
        {techCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-lg font-medium text-emerald-400 mb-4 border-b border-slate-700 inline-block pb-1">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.items.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 15px rgba(16,185,129,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex flex-col items-center justify-center gap-3 hover:border-emerald-500/60 hover:bg-slate-800/70 transition-all"
                >
                  <div className="text-emerald-400">{tech.icon}</div>
                  <span className="text-sm text-slate-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
