'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ExperienceEducation from './components/ExperienceEducation'
import DeepDive from './components/DeepDive'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceEducation />
      <Projects />
      <Skills />
      <DeepDive />
      <Contact />
      <Footer />
    </>
  )
}
