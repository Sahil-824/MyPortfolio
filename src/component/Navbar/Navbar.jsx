import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import contact from "../../assets/contact.png"

const Navbar = () => {
  return (
   <div className="navbar">
    <img src={logo} alt="" />
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Client</li>
    </ul>

    <div className="contact">
        <img src={contact} alt="" />
        <p>Contact-Me</p>
    </div>
   </div>
  )
}

export default Navbar