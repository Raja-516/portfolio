import React from 'react'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const timeline = [
  {
    id: 1,
    role: 'Frontend Intern',
    org: 'Edubot Technologies',
    date: 'Jan 2025 — Aug 2025',
    desc: 'Built reusable UI components, improved accessibility, and optimized bundle size. Collaborated with designers and backend to ship features weekly.'
  },
  {
    id: 2,
    role: 'Open Source Contributor',
    org: 'OpenLib',
    date: 'Jan 2024 — Present',
    desc: 'Contributed bug fixes and documentation, improved DX for new contributors, and added unit tests to multiple packages.'
  },
  {
    id: 3,
    role: 'Campus Web Lead',
    org: 'University Club',
    date: 'Aug 2023 — Dec 2023',
    desc: 'Led a small team to design and deliver the club website, added event registration, and handled deployment and CI.'
  },
  {
    id: 4,
    role: 'Campus Course Work',
    org: 'Pragati Engineering college',
    date: 'Aug 2023 — Present',
    desc: 'Learnig new things Day-By-Day which led me here ,my course work includes C language, DBMS , OS, Advanced DSA,'
  }
]

export default function Experience(){
  const reduced = usePrefersReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  }

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="experience" className="pt-12 pb-16">
      <motion.h2
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-10 text-center tracking-tight"
>
  <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-400 text-transparent bg-clip-text">
    Experience
  </span>
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    className="origin-center mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.4)]"
  />
</motion.h2>


      {/* Timeline wrapper */}
      <div className="mt-8 relative">
        {/* vertical line center (desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700" aria-hidden="true" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={reduced ? {} : container}
          className="space-y-8 md:space-y-0"
        >
          {timeline.map((t, idx) => {
            const isLeft = idx % 2 === 0 // even => left on desktop
            return (
              <motion.article
                key={t.id}
                variants={reduced ? {} : item}
                className="relative md:flex md:items-center"
              >
                {/* Mobile marker (left) */}
                <div className="md:hidden flex items-start">
                  <div className="mr-4 mt-1">
                    <span className="inline-block w-3 h-3 rounded-full bg-brand ring-4 ring-slate-800"></span>
                  </div>
                  <div className="flex-1 bg-slate-800/40 p-4 rounded-xl border border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{t.role}</h3>
                      <span className="text-xs text-slate-400">{t.date}</span>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">{t.org}</p>
                    <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
                  </div>
                </div>

                {/* Desktop layout: alternate sides */}
                <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-6 w-full">
                  {/* Left column (content when isLeft) */}
                  <div className={`px-4 md:px-0 ${isLeft ? 'md:text-right' : 'md:order-2'}`}>
                    {isLeft && (
                      <div className="inline-block bg-slate-800/40 p-4 rounded-xl border border-slate-700 w-full">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{t.role}</h3>
                          <span className="text-xs text-slate-400 ml-4">{t.date}</span>
                        </div>
                        <p className="text-slate-300 text-sm mt-2">{t.org}</p>
                        <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center marker */}
                  <div className="relative flex items-start justify-center">
                    <div className="w-6 h-6 -mt-1 flex items-center justify-center">
                      <span className="block w-3 h-3 rounded-full bg-brand ring-4 ring-slate-900"></span>
                    </div>
                  </div>

                  {/* Right column (content when !isLeft) */}
                  <div className={`px-4 md:px-0 ${isLeft ? 'md:order-3' : ''}`}>
                    {!isLeft && (
                      <div className="inline-block bg-slate-800/40 p-4 rounded-xl border border-slate-700 w-full">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{t.role}</h3>
                          <span className="text-xs text-slate-400 ml-4">{t.date}</span>
                        </div>
                        <p className="text-slate-300 text-sm mt-2">{t.org}</p>
                        <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
