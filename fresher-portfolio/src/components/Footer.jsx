import React from 'react'
import { socials } from '../data/socials'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-sm text-white-900 flex items-center justify-between">
        <div>©Copyrights {new Date().getFullYear()} A RAJA</div>
        <div className="space-x-4 text-l text-white " >
          {socials.map(s => <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">{s.name}</a>)}
        </div>
      </div>
    </footer>
  )
}
