import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar/Sidebar';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const [appearHome] = useState(true);

  return (
    <CSSTransition
      in={appearHome}
      appear={true}
      timeout={700}
      classNames="fade"
    >
      <div className="App">
        <Router>
            <Sidebar />
            <main>
              <AnimatePresence initial={false}>
                <Switch>
                  <Route exact path="/portfolio" render={() => <Introduction />} />
                  <Route exact path="/portfolio/skills" render={ () => <Skills />} />
                  <Route exact path="/portfolio/experience" render={ () => <Experience />} />
                  <Route exact path="/portfolio/projects" render={ () => <Projects />} />
                  <Route exact path="/portfolio/contact" render={ () => <Contact />} />
                </Switch>
              </AnimatePresence>
            </main>
        </Router>
      </div>
    </CSSTransition>
  );
}

export default App;
