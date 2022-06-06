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
      class="skills"
    >
      <h2>Coding</h2>
      <div class="html skill-slide">
        <div class="htmlBar"></div>
        <h3>HTML</h3>
      </div>
      <div class="php skill-slide">
        <div class="phpBar"></div>
        <h3>PHP</h3>
      </div>
      <div class="laravel skill-slide">
        <div class="laravelBar"></div>
        <h3>Laravel</h3>
      </div>
      <div class="css skill-slide">
        <div class="cssBar"></div>
        <h3>CSS</h3>
      </div>
      <div class="javascript skill-slide">
        <div class="javascriptBar"></div>
        <h3>JavaScript</h3>
      </div>
      <div class="react skill-slide">
        <div class="reactBar"></div>
        <h3>React</h3>
      </div>
      <h2>Language</h2>
      <div class="hungarian skill-slide">
        <div class="hungarianBar"></div>
        <h3>Hungarian</h3>
      </div>
      <div class="english skill-slide">
        <div class="englishBar"></div>
        <h3>English</h3>
      </div>
    </motion.div>
  )
}

export default Skills;