import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'
import { scrollToId } from '../utils/smoothScroll'

export default function Header(){
  const [open, setOpen] = useState(false)
  const nav = useNavigate()

  const navItems = [
    { id: 'projects', label: 'Projects', href: '/#projects' },
    { id: 'experience', label: 'Experience', href: '/#experience' },
      { id: 'education', label: 'Education', href: '/#education' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'contact', label: 'Contact', href: '/#contact' }
  ]

  function handleClick(href, id){
    setOpen(false)
    // if currently at root, smooth scroll to section
    if (window.location.pathname === '/') {
      setTimeout(() => scrollToId(id), 80)
    } else {
      // navigate to home then scroll
      nav('/')
      setTimeout(() => scrollToId(id), 350)
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed w-full z-50 top-0 backdrop-blur bg-slate-900/60 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a className="font-semibold text-lg" href="/" onClick={(e)=>{ e.preventDefault(); nav('/')}}>YourName</a>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {navItems.map(item => (
            <button key={item.id} onClick={() => handleClick(item.href, item.id)} className="hover:text-white">{item.label}</button>
          ))}
          <Link to="/projects" className="hover:text-white">All Projects</Link>
          <a href="/resume.pdf" download className="px-3 py-1 rounded-md border border-slate-700 text-sm hover:bg-slate-800/40">Resume</a>
          <ThemeToggle />
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="p-2 rounded-md border border-slate-700">
            {open ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden">
          <motion.div initial={{height:0}} animate={{height:'auto'}} className="bg-slate-900/95 border-t border-slate-800">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map(item => (
                <button key={item.id} onClick={() => handleClick(item.href, item.id)} className="text-left py-2">{item.label}</button>
              ))}
              <Link to="/projects" onClick={() => setOpen(false)} className="py-2">All Projects</Link>
              <a href="/resume.pdf" download className="py-2">Download Resume</a>
            </div>
          </motion.div>
        </div>
      )}
    </motion.header>
  )
}
