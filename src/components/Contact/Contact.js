import React from 'react';
import './Contact.css';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import tel from '../../assets/tel.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import { motion } from 'framer-motion';

const transition = {
  duration: .7,
  ease: [0.43, 0.13, 0.23, 0.96]
};

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      id="contact"
    >
      <h2>Contact</h2>
      <div className="contact">
        <img src={email} alt=""/>
        <p>tamas.sisa@gmail.com</p>
      </div>
      <div className="contact">
        <img src={tel} alt=""/>
        <p>+3620/514-7449</p>
      </div>
      <p id="social-title">Social links:</p>
      <div>
        <a href="https://www.facebook.com/tamas.sisa.7/" className="contact">
          <img src={facebook} alt="facebook link"/>
          <p>Facebook - Tamás Sisa</p>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/sisa-tam%C3%A1s-8750a7167/" className="contact">
          <img src={linkedin} alt="linkedin link"/>
          <p>LinkedIn - Sisa Tamás</p>
        </a>
      </div>
      <div>
        <a href="https://github.com/sisax" className="contact">
          <img src={github} alt="github link"/>
          <p>Github - Sisax</p>
        </a>
      </div>
    </motion.div>
  )
}

export default Contact;