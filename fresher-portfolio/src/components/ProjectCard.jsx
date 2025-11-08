// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

/**
 * project = {
 *   id, title, desc, img, tech: [..], live, repo
 * }
 */
export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative group"
      aria-labelledby={`proj-${project.id}-title`}
    >
      {/* Card wrapper with subtle border + backdrop */}
      <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/50 to-slate-900/40 border border-slate-700/30 shadow-sm">
        {/* Image + overlay */}
        <div className="relative">
          <div className="absolute inset-0 rounded-t-2xl pointer-events-none"
               aria-hidden
               style={{ background: "linear-gradient(180deg, rgba(99,102,241,0.04), transparent)" }} />
          <div className="p-3">
            <div className="rounded-xl overflow-hidden bg-slate-700/60 border border-slate-700">
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-44 sm:h-52 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-44 sm:h-52 flex items-center justify-center text-slate-400">
                  No preview
                </div>
              )}
            </div>
          </div>

          {/* floating gradient badge top-left */}
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-black text-xs font-semibold shadow-sm">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2l2.9 6.2L21 9.1l-5 4.1L17.8 21 12 17.8 6.2 21 7 13.2 2 9.1l6.1-.9L12 2z" fill="currentColor" />
              </svg>
              Featured
            </span>
          </div>

          {/* action rail - appears on hover */}
          <div className="absolute right-4 bottom-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 text-black text-xs font-medium shadow-sm hover:brightness-95"
                aria-label={`Open live demo of ${project.title}`}
              >
                <ExternalLink size={14} /> Live
              </a>
            )}

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/80 text-slate-100 text-xs font-medium border border-slate-700 hover:bg-slate-800/95"
                aria-label={`View source code of ${project.title}`}
              >
                <Github size={14} /> Code
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 id={`proj-${project.id}-title`} className="text-sm sm:text-base font-semibold text-slate-100">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl line-clamp-3">
                {project.desc}
              </p>
            </div>
            {/* small preview eye icon on desktop */}
            <div className="hidden sm:flex items-center">
              <button
                onClick={(e) => { e.stopPropagation(); if (project.live) window.open(project.live, "_blank"); }}
                className="p-2 rounded-full bg-slate-800/60 border border-slate-700 hover:bg-slate-800/80 transition"
                aria-label={`Preview ${project.title}`}
              >
                <Eye size={16} />
              </button>
            </div>
          </div>

          {/* tech chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {(project.tech || []).map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-slate-700/40 text-slate-200 border border-slate-700/20">
                {t}
              </span>
            ))}
          </div>

          {/* footer row: subtle stats / links */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              {project.year ? project.year : ""}
            </div>
            <div className="flex items-center gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-medium hover:brightness-95 transition"
                >
                  Open Demo
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs inline-flex items-center gap-1 px-3 py-1 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800/60 transition"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
