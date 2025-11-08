import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // show 4 projects initially (2x2 grid)
  const previewCount = 4;
  const visibleProjects = showAll ? projects : projects.slice(0, previewCount);
  const extraCount = Math.max(0, projects.length - previewCount);

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28 } },
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.2 } },
  };

  return (
    <section id="projects" className="pt-24 pb-20 relative">
      {/* Background glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-400/10 blur-[100px] rounded-full"></div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-12 text-center tracking-tight"
      >
        <span>My&nbsp;</span>
        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
          Projects
        </span>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="origin-center mt-3 w-28 h-[3px] mx-auto bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)]"
        />
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto w-full px-4">
        <motion.div
          key={showAll ? "all" : "preview"}
          className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2"
          initial="hidden"
          animate="show"
          variants={listVariants}
        >
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Toggle Button */}
      {extraCount > 0 && (
        <div className="mt-12 flex justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 text-black font-semibold shadow-[0_0_15px_rgba(244,114,182,0.4)] hover:brightness-105 transition"
          >
            {showAll ? "Show fewer projects" : `Show more projects (${extraCount})`}
          </motion.button>
        </div>
      )}
    </section>
  );
}
