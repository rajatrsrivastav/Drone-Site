import React from 'react'
import { Navbar } from './components/Navbar'
import { Overview } from './components/Overview'
import { Setup } from './components/Setup'
import { Controls } from './components/controls'
import { Safety } from './components/safety'
import {Footer} from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Overview/>
        <Setup/>
        <Controls/>
        <Safety/>
      </main>
      <Footer/>
    </div>
  )
}

export default App