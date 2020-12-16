import React from 'react';
import { motion } from 'framer-motion';
import portfolio from '../../assets/portfolio.jpg'
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
      class="introduction"
    >
      <motion.header
        exit={{ opacity: 0 }} 
        transition={transition}
      >
        <motion.img 
          whileHover={{ scale: 1.2 }}
          transition={transition}
          src={portfolio} 
          alt=""
        />
        <h1>Hi, my name is Sisa Tamás!</h1>
        <p class="headerText">I am a junior developer who finds his passion in both creative work and solving logical problems.</p>
      </motion.header>
      <hr></hr>
      <p class="introText">I love extreme sports because they are flashy and based on skills. For me programming is the same in it's core, skill is visible and it comes from invested time.</p>
      <p class="introText">I started learning agriculture and got a Master's degree in plant protection because it is close to my family. While doing so my favorite topics were always the ones that involved applying the latest technologies. I worked at an agronomic chemical research institute and after a while I realized that my favorite part  was working on the technical side so I started to learn programming in my free time. I enjoyed the process of it so much that I decided to take a leap of faith and join a boot camp.</p>
    </motion.div>
  )
}

export default Introduction;