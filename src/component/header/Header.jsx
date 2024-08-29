import React from 'react'
import "./Header.css"
import image from "../../assets/sahil_portfolio.jpg"
const Header = () => {
  return (
    <div className="header">
        <div className="left-section">
             <span>Hello,</span>
             <h1>I'm <span>Sahil</span> <br /> Website Developer</h1>
             <p>I am skilled web developer with experience in creating <br />
             appealing and user friendly websites</p>
             <button>Hire Me</button>
        </div>
        <div className="right-section">
               <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Header