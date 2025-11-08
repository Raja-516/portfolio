import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ScrollToTop from './utils/ScrollToTop'
import ThemeProvider from './context/ThemeContext'
import BackgroundSymbols from './components/BackgroundSymbols'

export default function App(){
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Header />
        <BackgroundSymbols />
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
