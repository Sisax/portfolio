import React from 'react';
import './Contact.css';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import tel from '../../assets/tel.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <div class="contact">
        <img src={email} alt=""/>
        <p>tamas.sisa@gmail.com</p>
      </div>
      <div class="contact">
        <img src={tel} alt=""/>
        <p>+3620/514-7449</p>
      </div>
      <p id="social-title">Social links:</p>
      <div>
        <a href="https://www.facebook.com/tamas.sisa.7/" class="contact">
          <img src={facebook} alt="facebook link"/>
          <p>Facebook - Tamás Sisa</p>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/sisa-tam%C3%A1s-8750a7167/" class="contact">
          <img src={linkedin} alt="linkedin link"/>
          <p>LinkedIn - Sisa Tamás</p>
        </a>
      </div>
      <div>
        <a href="https://github.com/sisax" class="contact">
          <img src={github} alt="github link"/>
          <p>Github - Sisax</p>
        </a>
      </div>
    </div>
  )
}

export default Contact;