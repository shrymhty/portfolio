import React from 'react'
import './Header.css'
import MyFace from '../MyFace/MyFace'

const Header = () => {
  return (
    <div className='header-div'>
      <div className="left">
        <div className="my-name">
          <span className="glitch-layer" data-text="SHREYA">SHREYA</span>&nbsp;
          <span className="glitch-layer" data-text="MOHANTY">MOHANTY</span>
        </div>
        <p>I am a</p>
        <div className="scramble"></div>
      </div>
      <div className="right">
        <MyFace />
      </div>
    </div>
  )
}

export default Header