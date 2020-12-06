import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Introduction />
        <Skills />
        <Experience />
      </main>
    </div>
  );
}

export default App;
