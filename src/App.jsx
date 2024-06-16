import { useState } from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Grid } from './components/Grid'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import ScrollToTop from 'react-scroll-to-top'

function App() {

  return (
    <>
      <Hero />
      <ScrollToTop smooth  width='40' top={1750}/>
      <Experience />
      <Skills />
      <Projects/>
      <Grid />
      <Footer/>
    </>
  )
}

export default App
