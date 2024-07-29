import React from 'react'
import "./Skills.css"
import expresslogo from "../../assets/expressjs.png"
import mongologo from "../../assets/MongoDBLogo.png"
import nodelogo from "../../assets/nodejslogo.svg"
import reactlogo from "../../assets/reactlogo.svg"
import jslogo from "../../assets/JavaScript-logo.png"
import htmllogo from "../../assets/html5badge.svg"
import csslogo from "../../assets/CSS-Logo.png"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">Technical Skills</span>
        <div className="skillChips">
            <div className="skillChip">
                <img src={mongologo} alt="MongoDB Logo" className="skillChipImg" />
                <div className="skillChipText">
                    <h2>MongoDB</h2>
                    <p>MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License.</p>
                </div>
            </div>
            <div className="skillChip">
                <img src={expresslogo} alt="Express Logo" className="skillChipImg" />
                <div className="skillChipText">
                    <h2>ExpressJS</h2>
                    <p>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>
                </div>
            </div>
            <div className="skillChip">
                <img src={reactlogo} alt="React Logo" className="skillChipImg" />
                <div className="skillChipText">
                    <h2>React</h2>
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
                </div>
            </div>
            <div className="skillChip">
                <img src={nodelogo} alt="NodeJS Logo" className="skillChipImg" />
                <div className="skillChipText">
                    <h2>NodeJS</h2>
                    <p>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.</p>
                </div>
            </div>
            <div className="skillChip">
                <img src={htmllogo} alt="HTML Logo" className="skillChipImg" />
                <div className="skillChipText">
                    <h2>HTML</h2>
                    <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                </div>
            </div>
            <div className="skillChip">
                <img src={csslogo} alt="CSS Logo" className="skillChipImg" />
                <div className="skillChipText">
                    <h2>CSS</h2>
                    <p>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
            </div>
            <div className="skillChip">
                <img src={jslogo} alt="JavaScript Logo" className="skillChipImg" />
                <div className="skillChipText">
                    <h2>JavaScript</h2>
                    <p>JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills