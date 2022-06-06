import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const transition = {
  duration: .7,
  ease: [0.43, 0.13, 0.23, 0.96]
};

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="skills"
    >
      <h2>Coding</h2>
      <div className="html skill-slide">
        <div className="htmlBar"></div>
        <h3>HTML</h3>
      </div>
      <div className="php skill-slide">
        <div className="phpBar"></div>
        <h3>PHP</h3>
      </div>
      <div className="laravel skill-slide">
        <div className="laravelBar"></div>
        <h3>Laravel</h3>
      </div>
      <div className="css skill-slide">
        <div className="cssBar"></div>
        <h3>CSS</h3>
      </div>
      <div className="javascript skill-slide">
        <div className="javascriptBar"></div>
        <h3>JavaScript</h3>
      </div>
      <div className="react skill-slide">
        <div className="reactBar"></div>
        <h3>React</h3>
      </div>
      <h2>Language</h2>
      <div className="hungarian skill-slide">
        <div className="hungarianBar"></div>
        <h3>Hungarian</h3>
      </div>
      <div className="english skill-slide">
        <div className="englishBar"></div>
        <h3>English</h3>
      </div>
    </motion.div>
  )
}

export default Skills;