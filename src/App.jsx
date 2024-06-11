import { useState } from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Grid } from './components/Grid'
import { Experience } from './components/Experience'

function App() {

  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Grid />
    </>
  )
}

export default App
