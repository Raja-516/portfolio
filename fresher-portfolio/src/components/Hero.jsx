import React from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { scrollToId } from "../utils/smoothScroll";
import { ArrowRight, DownloadCloud, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  const enter = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
      };

  return (
    <header id="home" className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* left column: main content */}
          <motion.div {...enter} className="md:col-span-2">
            <p className="text-sm text-slate-400 mb-4">Hi, my name is</p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-100">
              <span className="block">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
                  Your Name
                </span>
              </span>

              <span className="block mt-3 text-2xl sm:text-3xl font-medium text-slate-300">
                Frontend Developer
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
              I build clean, fast, and accessible user interfaces with React &
              Tailwind. I enjoy transforming UI ideas into polished,
              interactive experiences using animation and performance-first
              practices.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToId("projects")}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-400 text-black font-semibold shadow-sm hover:brightness-95 transition"
                aria-label="See my work"
              >
                See my work
                <ArrowRight size={16} />
              </button>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800/50 transition"
              >
                <DownloadCloud size={16} /> Resume
              </a>

              {/* subtle inline tech chips */}
              <div className="ml-2 hidden sm:flex items-center gap-2 text-xs text-slate-300">
                <span className="px-3 py-1 rounded-full bg-slate-800/40">React</span>
                <span className="px-3 py-1 rounded-full bg-slate-800/40">Tailwind</span>
                <span className="px-3 py-1 rounded-full bg-slate-800/40">Framer Motion</span>
              </div>
            </div>

            {/* small social links similar to roopesh: inline minimal */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/yourusername"
                className="text-slate-300 hover:text-slate-100"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-slate-300 hover:text-slate-100"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* right column: small clean profile preview */}
          <motion.aside
            {...enter}
            className="flex justify-center md:justify-end"
            aria-hidden="true"
          >
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden bg-slate-800/40 border border-slate-700 border-opacity-0 flex items-center justify-center relative">
              {/* replace with your image or SVG */}
              <img
                src="/assets/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* soft ring accent */}
              <span className="absolute -inset-1 rounded-2xl border border-emerald-400/10 blur-sm pointer-events-none" />
            </div>
          </motion.aside>
        </div>
      </div>
    </header>
  );
}
