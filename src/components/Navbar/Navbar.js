import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/logo.png';
import conversation from '../../assets/conversation.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='Navbar'>
        <img src={logo} alt="logo" className='logo'></img>
        <div className="navMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="navMenuListItem">About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="navMenuListItem">Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="navMenuListItem">Projects</Link>
        </div>
        <button className="navMenuButton" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={conversation} alt="contact" className="navMenuImg" /> Contact Me</button>

        <img src={menu} alt="Menu" className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="mobileNavMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar