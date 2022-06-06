import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Sidebar.css';
import { changeActiveButton } from '../../actions/buttonAction';
import { motion } from 'framer-motion';

const transition = {
  duration: .7,
  ease: [0.43, 0.13, 0.23, 0.96]
};

function Sidebar() {
  const buttonState = useSelector((state) => state.button);

  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(changeActiveButton(e.target.innerText))
  };

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1.2 }}
      exit={{ opacity: 0, scale: 1 }}
      transition={transition}
      id="contact"
    >
      <ul>
        <li><Link to="/"><button className={
          buttonState.buttonActive === 'Introduction' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Introduction</button></Link></li>
        <li><Link to="/skills"><button className={
          buttonState.buttonActive === 'Skills' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Skills</button></Link></li>
        <li><Link to="/experience"><button className={
          buttonState.buttonActive === 'Education and\nExperience' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Education and<br />
        Experience</button></Link></li>
        {/*<li><Link to="/projects"><button className={
          buttonState.buttonActive === 'Projects' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Projects</button></Link></li>*/}
        <li><Link to="/contact"><button className={
          buttonState.buttonActive === 'Contact' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Contact</button></Link></li>
      </ul>
    </motion.aside>
  )
}

export default Sidebar;