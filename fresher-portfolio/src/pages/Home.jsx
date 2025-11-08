import React from 'react'
import Hero from '../components/Hero'
import TechGrid from '../components/TechGrid'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import SkillOverview from '../components/SkillOverview'

import CertificatesReel from '../components/CertificatesReel'
import BackgroundSymbols from '../components/BackgroundSymbols'

export default function Home(){
  return (
    <>
    <BackgroundSymbols />
      <Hero />
      <SkillOverview />
      <Projects />
      <Education />
      <CertificatesReel />
      <Experience />
      <TechGrid />
      <About />
      <Contact />
    </>
  )
}
