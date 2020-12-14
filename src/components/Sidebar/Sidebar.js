import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside>
      <ul>
        <li><Link to="/portfolio"><button>Introduction</button></Link></li>
        <li><Link to="/portfolio/skills"><button>Skills</button></Link></li>
        <li><Link to="/portfolio/experience"><button>Education and<br />
        Experience</button></Link></li>
        <li><Link to="/portfolio/projects"><button>Projects</button></Link></li>
        <li><Link to="/portfolio/contact"><button>Contact</button></Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar;