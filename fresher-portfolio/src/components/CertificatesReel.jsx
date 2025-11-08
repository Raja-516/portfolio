// src/pages/CertificatesReel.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

/**
 * Certificates sample data — replace img/file paths with files from /public/certs/
 */
const CERTS = [
  { id: "c1", title: "Frontend Web Development", issuer: "IBM", date: "Apr 2024", img: "/certs/cert1.jpg", file: "/certs/cert1.pdf" },
  { id: "c2", title: "React - Complete Guide", issuer: "GeeksforGeeks", date: "Dec 2023", img: "/certs/cert2.jpg", file: "/certs/cert2.pdf" },
  { id: "c3", title: "DSA Basics", issuer: "HackerRank", date: "Jan 2024", img: "/certs/cert3.jpg", file: "/certs/cert3.pdf" },
  { id: "c4", title: "Responsive Design", issuer: "freeCodeCamp", date: "Jun 2023", img: "/certs/cert4.jpg", file: "/certs/cert4.pdf" },
  { id: "c5", title: "AWS AI-ML", issuer: "Amazon", date: "Jun 2023", img: "/certs/cert4.jpg", file: "/certs/cert4.pdf" },
  { id: "c6", title: "Python", issuer: "HackerRank", date: "Jun 2023", img: "/certs/cert4.jpg", file: "/certs/cert4.pdf" },
  // add more items as needed
];

export default function CertificatesReel() {
  const [selected, setSelected] = useState(null);
  const itemsTop = [...CERTS, ...CERTS];
  const itemsBottom = [...CERTS.slice().reverse(), ...CERTS.slice().reverse()];

  return (
    <section id="certificates-reel" className="pt-20 pb-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold">
            <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 text-transparent bg-clip-text">
              Certificates Reel
            </span>
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
            Auto-scrolling certificate reel — hover to pause, click any card to preview or download.
          </p>
        </header>

        {/* Reel container */}
        <div className="space-y-6">
          {/* Top marquee: scrolls left */}
          <div className="overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-800/40 p-2">
            <div
              className="marquee flex gap-4 items-center"
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
            >
              {itemsTop.map((c, idx) => (
                <CertificateCard key={`top-${c.id}-${idx}`} cert={c} onOpen={() => setSelected(c)} />
              ))}
            </div>
          </div>

          {/* Bottom marquee: scrolls right (reverse) */}
          <div className="overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-800/40 p-2">
            <div
              className="marquee marquee-reverse flex gap-4 items-center"
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
            >
              {itemsBottom.map((c, idx) => (
                <CertificateCard key={`bot-${c.id}-${idx}`} cert={c} onOpen={() => setSelected(c)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal preview */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="relative z-10 w-full max-w-3xl bg-slate-900 rounded-2xl p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">{selected.title}</h3>
                  <div className="text-sm text-slate-400 mt-1">
                    {selected.issuer} • {selected.date}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selected.file}
                    download
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-400 text-black text-sm font-medium"
                  >
                    <Download size={14} /> Download
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 rounded-full bg-slate-800/40 border border-slate-700"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-4">
                {selected.img ? (
                  <img src={selected.img} alt={selected.title} className="w-full rounded-lg object-contain" />
                ) : (
                  <div className="w-full h-72 flex items-center justify-center text-slate-500">
                    No preview available
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* inline CSS: marquee animations */}
      <style>{`
        .marquee {
          display: flex;
          align-items: center;
          gap: 1rem;
          animation: scroll-left 16s linear infinite;
        }
        .marquee-reverse {
          animation: scroll-right 20s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee > * {
          min-width: 180px;
          flex: 0 0 auto;
        }
      `}</style>
    </section>
  );
}

/** Compact certificate card used inside the marquee */
function CertificateCard({ cert, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group flex items-stretch gap-3 min-w-[180px] sm:min-w-[200px] md:min-w-[220px]
                 rounded-lg p-2 bg-slate-800/60 hover:bg-slate-800/70 transition"
      title={`${cert.title} — ${cert.issuer}`}
    >
      <div className="flex-shrink-0 w-16 h-20 overflow-hidden rounded-md bg-slate-700">
        {cert.img ? (
          <img src={cert.img} alt={cert.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 text-[10px]">
            No preview
          </div>
        )}
      </div>

      <div className="text-left">
        <div className="font-semibold text-xs text-slate-100 line-clamp-2">{cert.title}</div>
        <div className="mt-1 text-[11px] text-slate-400 truncate">{cert.issuer}</div>
        <div className="mt-1 text-[10px] text-slate-500">{cert.date}</div>
      </div>
    </button>
  );
}
