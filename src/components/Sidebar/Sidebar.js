import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <ul>
        <li><Link to="/"><button>Introduction</button></Link></li>
        <li><Link to="/skills"><button>Skills</button></Link></li>
        <li><Link to="/experience"><button>Education and<br />
        Experience</button></Link></li>
        <li><button>Projects</button></li>
        <li><button>Contact</button></li>
      </ul>
    </aside>
  )
}

export default Sidebar;