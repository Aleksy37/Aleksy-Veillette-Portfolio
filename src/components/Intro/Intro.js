import React from 'react'
import './intro.css'
import cluepfp from "../../assets/CLUEPFP.jpg"
import briefcase from "../../assets/briefcase.png"
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="introText">I'm <span className="introName">Aleksy</span> <br />Full-Stack Developer</span>
            <p className="introPara">I'm a Montreal based developer proficient in MERN, below are some of my past projects. I'd love to hear from you and disscuss how I can add value to your organization!</p>
            <Link><button className="btn"><img src={briefcase} alt="" className='btnImg' /> Hire Me</button></Link>
        </div> 
        <img src={cluepfp} alt="portrait" className="bg" />
    </section>
  )
}

export default Intro