import React from 'react'
import './Navbar.css'

const Navbar = () => {

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='navbar'>
      <ul>
          <li className="glitch" data-text="Home" onClick={() => scrollTo('home')}>Home</li>
          <li className="glitch" data-text="About Me" onClick={() => scrollTo('about')}>About Me</li>
          <li className="glitch" data-text="My Works" onClick={() => scrollTo('projects')}>My Works</li>
          <li className="glitch" data-text="Contact" onClick={() => scrollTo('contact')}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar