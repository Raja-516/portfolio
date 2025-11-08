import React from 'react'
import { motion } from 'framer-motion'

/**
 * ProjectCard
 * Props:
 *  - project: { id, title, desc, tech: [], img, live, repo }
 */
export default function ProjectCard({ project }) {
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      className="group bg-slate-800/50 border border-slate-700 p-0 rounded-xl overflow-hidden shadow-sm"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Image / visual */}
      <div className="relative w-full h-44 sm:h-48 md:h-44 lg:h-40 bg-slate-700">
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500">
            No preview
          </div>
        )}

        {/* gradient overlay and title */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-4 bottom-4 right-4 rounded-md p-3 bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm">
            <h3 id={`project-${project.id}-title`} className="text-lg font-semibold">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
                {project.title}
              </span>
            </h3>
            <p className="mt-1 text-xs text-slate-300 line-clamp-2">{project.desc}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-3">
        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech?.map((t) => (
            <span
              key={t}
              className="text-xs text-slate-200 bg-slate-700/40 border border-slate-700 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-black shadow-neon-sm hover:brightness-95 transition"
                aria-label={`Open live demo of ${project.title}`}
              >
                Live
              </a>
            )}

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-full border border-slate-700 text-slate-100 hover:bg-slate-800/60 transition"
                aria-label={`View code of ${project.title}`}
              >
                Code
              </a>
            )}
          </div>

          {/* optional metadata (placeholder) */}
          <div className="text-xs text-slate-400">{project.tagline || ''}</div>
        </div>
      </div>
    </motion.article>
  )
}
