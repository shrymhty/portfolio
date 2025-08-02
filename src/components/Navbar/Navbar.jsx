import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
          <li className="glitch" data-text="Home">Home</li>
          <li className="glitch" data-text="About Me">About Me</li>
          <li className="glitch" data-text="My Works">My Works</li>
          <li className="glitch" data-text="Contact">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar