import React from 'react'
import logo from '../img/troll-face.png'

const Header = () => {
  return (
    <div className="Header">
      <div className="name">
        <img src={logo} />
        <h3>Meme Generator</h3>
      </div>
      <p>React Course - Project 3</p>
    </div>
  )
}

export default Header
