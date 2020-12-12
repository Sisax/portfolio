import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div class="skills">
      <h2>Coding</h2>
      <div class="html skill-slide">
        <div class="htmlBar">95%</div>
        <h3>HTML</h3>
      </div>
      <div class="css skill-slide">
        <div class="cssBar">95%</div>
        <h3>CSS</h3>
      </div>
      <div class="javascript skill-slide">
        <div class="javascriptBar">80%</div>
        <h3>JavaScript</h3>
      </div>
      <div class="react skill-slide">
        <div class="reactBar">75%</div>
        <h3>React</h3>
      </div>
      <div class="nodejs skill-slide">
        <div class="nodejsBar">55%</div>
        <h3>Node.js</h3>
      </div>
      <h2>Language</h2>
      <div class="hungarian skill-slide">
        <div class="hungarianBar">100%</div>
        <h3>Hungarian</h3>
      </div>
      <div class="english skill-slide">
        <div class="englishBar">85%</div>
        <h3>English</h3>
      </div>
      <div class="german skill-slide">
        <div class="germanBar">20%</div>
        <h3>German</h3>
      </div> 
    </div>
  )
}

export default Skills;