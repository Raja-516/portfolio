import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects(){
  const [showAll, setShowAll] = useState(false)

  // number of preview cards (change as needed)
  const previewCount = 2
  const preview = projects.slice(0, previewCount)
  const extra = projects.slice(previewCount)

  // which projects are currently visible
  const visible = showAll ? projects : preview
  const extraCount = Math.max(0, projects.length - previewCount)

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28 } },
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.2 } }
  }

  return (
    <section id="projects" className="pt-24 pb-16 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-10 text-center tracking-tight"
      >
        <span>My&nbsp;</span>
        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
          Projects
        </span>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="origin-center mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.4)]"
        />
      </motion.h2>

      {/* grid: use key so Framer re-initializes when showAll toggles */}
      <motion.div
        key={showAll ? 'all' : 'preview'}
        className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={listVariants}
      >
        <AnimatePresence>
          {visible.map(p => (
            <motion.div key={p.id} variants={itemVariants} initial="hidden" animate="show" exit="exit" layout>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* toggle button */}
      {extraCount > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              console.log('ShowAll toggled ->', !showAll)
              setShowAll(v => !v)
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-black font-medium shadow-neon-sm hover:brightness-95 transition"
            aria-expanded={showAll}
          >
            {showAll ? 'Show fewer projects' : `Show more projects (${extraCount})`}
          </button>
        </div>
      )}
    </section>
  )
}
