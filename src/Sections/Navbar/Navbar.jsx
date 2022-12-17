import React from 'react'
import './Navbar.css'
import { Logo, /* MenuOpener */ } from '../../Assets'
import { IoIosMenu } from 'react-icons/io'
function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar_logo" />
      <button
        className="navbar_menu_opener"
        onClick={() => {
          document.querySelector('.navbar_menu').classList.toggle('hidden')
        }}
      >
        <IoIosMenu color="#FFA500" size={35} />
      </button>
      <div className="navbar_menu hidden">
        <a href="#about" className="navbar_menu_item">
          Home
        </a>
        <a href="#about" className="navbar_menu_item">
          About
        </a>
        <a href="#contact" className="navbar_menu_item">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
