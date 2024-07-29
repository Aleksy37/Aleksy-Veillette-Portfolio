import React from 'react';
import "./Navbar.css";
import logo from '../../assets/logo.png';
import conversation from '../../assets/conversation.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <img src={logo} alt="logo" className='logo'></img>
        <div className="navMenu">
            <Link className="navMenuListItem">Home</Link>
            <Link className="navMenuListItem">About</Link>
            <Link className="navMenuListItem">Skills</Link>
            <Link className="navMenuListItem">Projects</Link>
        </div>
        <button className="navMenuButton">
            <img src={conversation} alt="contact" className="navMenuImg" /> Contact Me</button>
    </nav>
  )
}

export default Navbar