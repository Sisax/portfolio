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
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <main>
          <Switch>
            <Route exact path="/" component={Introduction} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
