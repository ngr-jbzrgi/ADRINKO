import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import GallerySliderSection from "./components/GallerySliderSection";

function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero opacity={opacity} />
      <Products />
      <GallerySliderSection />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
