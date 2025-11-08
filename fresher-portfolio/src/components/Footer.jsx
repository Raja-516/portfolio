import React from 'react'
import { socials } from '../data/socials'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Your Name</div>
        <div className="space-x-4">
          {socials.map(s => <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{s.name}</a>)}
        </div>
      </div>
    </footer>
  )
}
