import React from 'react';
import { motion } from 'framer-motion';
import portfolio from '../../assets/its-a-me-sisa.png';
import './Introduction.css';

const transition = {
  duration: .7,
  ease: [0.43, 0.13, 0.23, 0.96]
};

function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="introduction"
    >
      <motion.header
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <img
          src={portfolio}
          alt=""
        />
        <div classNameName="imgBackground"></div>
        <h1>Hi, my name is Sisa Tamás!</h1>
        <p className="headerText">I am a software developer who finds his passion in both creative work and solving logical problems.</p>
      </motion.header>
      <hr></hr>
      <p className="introText">I love extreme sports because they are flashy and based on skills. For me programming is the same in it's core, skill is visible and it comes from invested time.</p>
      <p className="introText">I started my programming journey learning after work, after a year I realized that this is what I want to do to and joined a bootcamp to speed up the process. For now I am professionally a developer for over a year, mainly focusing on backend work with PHP. What haven't changed is that I still learn consistently after work either about more theoretical CS topics or game development.</p>
      <p className="introText">In work my mentality is that my main job is to produce the highest quality software compared to my abilities.</p>
    </motion.div>
  )
}

export default Introduction;