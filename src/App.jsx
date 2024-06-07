import { useState } from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Grid } from './components/Grid'

function App() {

  return (
    <>
      <Hero />
      <Skills />
      <Grid />
    </>
  )
}

export default App
