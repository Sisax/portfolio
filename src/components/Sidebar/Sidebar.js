import React from 'react';
import './Sidebar.css';
import Link from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <ul>
        <li><button>Introduction</button></li>
        <li><button>Skills</button></li>
        <li><button>Education and<br />
        Experience</button></li>
        <li><button>Projects</button></li>
        <li><button>Contact</button></li>
      </ul>
    </aside>
  )
}

export default Sidebar;