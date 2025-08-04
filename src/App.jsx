import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="section">
        <Header />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <hr />
      <div id="projects" className="section">
        <Projects />
      </div>
      <hr />
      <div id="contact" className="section">
        <Contact />
      </div>
    </>

  )
}

export default App