import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const transition = {
  duration: .7, 
  ease: [0.43, 0.13, 0.23, 0.96]
};

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="experience"
    >
      <div class="education">
        <h2>Education</h2>
        <div class="school">
          <h3>2020</h3>
          <h2>Green Fox Academy</h2>
          <p class="subtext">Junior full-stack developer</p>
          <p>Where I learned:</p>
          <ul>
            <li>Workshop phase (10 weeks): JavaScript, TypeScript, Node.js, Express.js, Git, GitHub, MySQL</li>
            <li>Project phase (6 weeks): React, Redux, JEST</li>
          </ul>
        </div>
        <hr/>
        <div class="school">
          <h3>2019-2017</h3>
          <h2>Szent István University</h2>
          <p class="subtext">Plant Protection Engineer, MSc degree</p>
        </div>
        <hr/>
        <div class="school">
          <h3>2017-2013</h3>
          <h2>University of Szeged</h2>
          <p class="subtext">Agricultural Engineer, BSc degree</p>
        </div>
      </div>
      <div class="experience">
        <h2>Experience</h2>
        <div class="school">
          <h3>2019-2020</h3>
          <h2>Syngenta Kft.</h2>
          <h3>Field Technician</h3>
          <ul>
            <li>Maintaining and evaluating field experiments</li>
            <li>Writing the documentation of the trials</li>
            <li>Exploring possibilities with the latest technologies</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience;