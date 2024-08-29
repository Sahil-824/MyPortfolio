import React from 'react'
import "./Skills.css"
import html from "../../assets/html2.png"
import css from "../../assets/css2.png"
import js from "../../assets/js2.png"
import react from "../../assets/react2.png"
import node from "../../assets/node2.png"
import mongo from "../../assets/mongo2.png"
import express from "../../assets/express3.png"
import github from "../../assets/github.png"

const Skills = () => {
  return (
    <div className='skills'>
        <span id="skill">My-Skills</span>
        <span id="intro">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly <br />
        websites. I have a strong understanding of design . I am proficient in HTML , CSS and Javascript and frameworks like Reactjs .Also i have a basic knowledge of bBackend</span>
        <div className='cards'>
            <div className="card">
                <div className='one'><img src={html} alt="" />
                <div className='outer'>
                  <div className="inner" style={{background:"rgb(255, 100, 48)", width:"95%"}}></div>
                    
                  </div>
                </div>
                <div className='one'><img src={css} alt="" />
                <div className='outer'>
                  <div className="inner" style={{background:"rgb(48, 110, 255)", width:"80%"}}></div>
                    
                  </div>
                </div>
            </div>
            <div className="card">
                <div className='one'><img src={js} alt="" />
                <div className='outer'>
                  <div className="inner" style={{background:"yellow", width:"90%"}}></div>
                    
                  </div>
                </div>
                <div className='one'><img src={react} alt="" />
                <div className='outer'>
                  <div className="inner" style={{background:"rgb(24, 193, 196)", width:"70%"}}></div>
                    
                  </div>
                </div>
            </div>
            <div className="card">
                <div className='one'><img src={express} style={{width:"80px",height:"80px"}} alt="" />
                <div className='outer'>
                  <div className="inner" style={{background:"rgb(229, 210, 5)", width:"60%"}}></div>
                    
                  </div>
                </div>
                <div className='one'><img src={mongo} alt="" />
                <div className='outer'>
                  <div className="inner" style={{background:"rgb(41, 117, 0)", width:"50%"}}></div>
                    
                  </div>
                </div>
            </div>
            
            <div className="card">
                <div className='one'><img src={node} style={{background:"yello"}} alt="" />
                <div className='outer'>
                  <div className="inner" style={{background:"rgb(84, 185, 30)", width:"60%"}}></div>
                    
                  </div>
                </div>
                <div className='one'><img src={github} alt="" />
                <div className='outer'>
                  <div className="inner" style={{background:"rgb(203, 195, 195)", width:"50%"}}></div>
                    
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills