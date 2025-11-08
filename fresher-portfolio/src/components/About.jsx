import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="pt-24 pb-20 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-pink-500/10 blur-[120px] rounded-full"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-10 text-center tracking-tight"
      >
        <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 text-transparent bg-clip-text">
          About Me
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="origin-center mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.4)]"
        />
      </motion.h2>

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-6">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            I’m a passionate <span className="text-emerald-400 font-semibold">Frontend Developer</span> 
            with a deep interest in crafting responsive, accessible, and visually beautiful user experiences.
            I love turning ideas into reality through clean code and smooth interactions.
          </p>

          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Currently pursuing my <span className="text-cyan-400">B.Tech in Computer Science</span>, 
            I focus on mastering modern web tools like React, Tailwind, and Framer Motion while continuously exploring 
            UI/UX trends and performance optimization.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div>
              <h4 className="font-semibold text-emerald-400 mb-1">Core Skills</h4>
              <ul className="space-y-1">
                <li>React.js & Hooks</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-1">Interests</h4>
              <ul className="space-y-1">
                <li>UI Animation</li>
                <li>Open Source</li>
                <li>Web Performance</li>
                <li>Creative Design</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Optional Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-slate-700 shadow-[0_0_25px_rgba(147,197,253,0.1)]">
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
