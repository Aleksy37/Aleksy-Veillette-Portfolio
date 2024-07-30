import React from "react";
import "./Projects.css";
import booking from "../../assets/seatbookingapp.png"
import nyan from "../../assets/nyancatgame.png"

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectsTitle">My Past Projects</h2>
        <p className="projectsPara">Here are a collection of my past projects</p>
        <div className="projectsGallery">
            <div className="projectDiv">
                <img src={booking} alt="" className="projectImg" />
                <p className="projectDescription">A seat booking app written in React with a MongoDB database using RESTful principles</p>
            </div> 
            <div className="projectDiv">
                <img src={nyan} alt="" className="projectImg" />
                <p className="projectDescription">A browser game written in Javascript to practice Object Oriented Programming</p>
            </div> 
        </div>
    </section>
  )
}

export default Projects