import React from 'react';
import './Projects.css';
import foxticket from '../../assets/foxticket.jpg';
import noimage from '../../assets/no-image-available.png';

function Projects() {
  return (
    <div>
      <h2 id="projects-title">My Projects</h2>
      <div id="projects">
        <img src={foxticket} alt="" />
        <img src={noimage} alt="" />
        <div class="project">
          <h3>Foxticket app</h3>
          <p>An app that manages public transport tickets, it takes orders and giving back QR codes via email or in app</p>
          <ul>
            <li>Frontend: ES6, React, Redux, HTML, CSS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MySQL</li>
            <li>Others: Jest, JWT</li>
          </ul>
        </div>
        <div class="project">
          <h3>Budget tracker</h3>
          <p>Work In Progress</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;