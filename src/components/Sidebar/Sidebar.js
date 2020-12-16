import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Sidebar.css';
import { changeActiveButton } from '../../actions/buttonAction';
import store from '../../store';

function Sidebar() {
  const buttonState = useSelector((state) => state.button);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActiveButton('Introduction'))
  }, [dispatch]);

  function handleClick(e) {
    dispatch(changeActiveButton(e.target.innerText))
  };

  return (
    <aside>
      <ul>
        <li><Link to="/portfolio"><button className={
          buttonState.buttonActive === 'Introduction' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Introduction</button></Link></li>
        <li><Link to="/portfolio/skills"><button className={
          buttonState.buttonActive === 'Skills' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Skills</button></Link></li>
        <li><Link to="/portfolio/experience"><button className={
          buttonState.buttonActive === 'Education and\nExperience' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Education and<br />
        Experience</button></Link></li>
        <li><Link to="/portfolio/projects"><button className={
          buttonState.buttonActive === 'Projects' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Projects</button></Link></li>
        <li><Link to="/portfolio/contact"><button className={
          buttonState.buttonActive === 'Contact' ? "activeBtn" : "inactiveBtn"
        } onClick={handleClick}>Contact</button></Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar;