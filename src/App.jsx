import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Background from './components/Background.jsx'
import Hero from './components/Hero.jsx'
import Pillars from './components/Pillars.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Achievements from './components/Achievements.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  // daisyUI theme, applied via data-theme on <html> (persisted in localStorage)
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* private mode — ignore */
    }
  }, [theme])

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-content"
      >
        Skip to content
      </a>
      <Background />
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Pillars />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </>
  )
}
