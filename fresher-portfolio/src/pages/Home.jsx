import React from 'react'
import Hero from '../components/Hero'
import TechGrid from '../components/TechGrid'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import SkillOverview from '../components/SkillOverview'

export default function Home(){
  return (
    <>
      <Hero />
      <SkillOverview />
      <Projects />
      <Education />
      <Experience />
      <TechGrid />
      <About />
      <Contact />
    </>
  )
}
