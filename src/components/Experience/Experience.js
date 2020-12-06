import React from 'react';

function Experience() {
  return (
    <div>
      <div class="education">
        <h2>Education</h2>
        <div class="school">
          <h3>2020</h3>
          <h3>Green Fox Academy</h3>
          <p class="subtext">Junior full-stack developer</p>
          <p>Where I learned:</p>
          <ul>
            <li>Workshop phase (10 weeks): JavaScript, TypeScript, Node.js, Express.js, Git, GitHub, MySQL</li>
            <li>Project phase (6 weeks): React, Redux, JEST</li>
          </ul>
        </div>
        <div class="school">
          <h3>2019-2017</h3>
          <h3>Szent István University</h3>
          <p class="subtext">Plant Protection Engineer, MSc degree</p>

        </div>
        <div class="school">
          <h3>2017-2013</h3>
          <h3>University of Szeged</h3>
          <p class="subtext">Agricultural Engineer, BSc degree</p>
        </div>
      </div>
      <div class="experience">
        <h2>Experience</h2>
        <div class="school">
          <h3>2019-2020</h3>
          <h3>Syngenta Kft.</h3>
          <h3>Field Technician</h3>
          <ul>
            <li>Maintaining and evaluating field experiments</li>
            <li>Writing the documentation of the trials</li>
            <li>Exploring possibilities with the latest technologies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience;