import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './components/Sidebar/Sidebar';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import hamburger from './assets/hamburger.png';

const transition = {
  duration: .7,
  ease: [0.43, 0.13, 0.23, 0.96]
};

function App() {
  const [appearHome] = useState(true);
  const buttonState = useSelector((state) => state.button);
  const isDesktop = useMediaQuery({ minWidth: 900 });
  const [sidebarOpen, setSidebarOpen] = useState(
    isDesktop ?
      true :
      false
    );
  const dispatch = useDispatch();

  useEffect(() => {
    !isDesktop && setSidebarOpen(false);
  }, [buttonState.buttonActive, dispatch, isDesktop])

  useEffect(() => {
    setSidebarOpen(
      isDesktop ?
        true :
        false
    )
  }, [isDesktop])

  function handleClick() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <CSSTransition
      in={appearHome}
      appear={true}
      timeout={700}
      classNames="fade"
    >
      <div className="App">
        <Router>
            <img src={hamburger} alt="drop down menu" id="hamburger-menu" onClick={handleClick} />
            {
              sidebarOpen ?
                (<Sidebar />) :
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={transition}
                  class="closed-menu"
                >WELCOME!</motion.div>
            }
            <main>
              <Switch>
                <AnimatePresence initial={false} exitBeforeEnter>
                  <Route exact path="/" render={() => <Introduction />} />
                  <Route exact path="/skills" render={ () => <Skills />} />
                  <Route exact path="/experience" render={ () => <Experience />} />
                  {/*<Route exact path="/projects" render={ () => <Projects />} />*/}
                  <Route exact path="/contact" render={ () => <Contact />} />
                </AnimatePresence>
              </Switch>
            </main>
        </Router>
      </div>
    </CSSTransition>
  );
}

export default App;
