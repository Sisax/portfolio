import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import profile from '../../assets/SisaT.png';
import bubble from '../../assets/speech2.png';

function Sidebar() {
  return (
    <aside>
      <img src={profile} alt="" />
      <img src={bubble} alt="" class="bubble" />
      <h3 class="hello">Hi! My name is <br />
      Sisa Tamás</h3>
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