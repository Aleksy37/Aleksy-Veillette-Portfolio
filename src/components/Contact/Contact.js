import React, { useRef } from 'react'
import "./Contact.css"
import github from "../../assets/GitHub_Logo.png"
import linkedin from "../../assets/LI-In-Bug.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_325bket', 'template_9xswahi', form.current, {
            publicKey: 'YfXbTdcgOzhJpQTaX',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert('Email Sent!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDescription">Please fill out the form below and I'll get back to you at my soonest convenience!</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name' />
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
            </form>
            <div className="socials">
                <a href='https://github.com/Aleksy37' target='blank'>
                    <img src={github} alt="github" className="social" />
                </a>
                <a href='https://www.linkedin.com/in/aleksyveillette/' target='blank'>
                <img src={linkedin} alt="linkedin" className="social" />
                </a>

            </div>
        </div>
    </section>
  )
}

export default Contact