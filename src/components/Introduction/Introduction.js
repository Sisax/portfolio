import React from 'react';
import portfolio from '../../assets/portfolio.jpg'

function Introduction() {
  return (
    <div class="introduction">
      <header>
        <img src={portfolio} alt=""/>
        <h1>Hi, my name is Sisa Tamás!</h1>
      </header>
      <p class="headerText">I am a junior full stack developer who finds his passion in 
      both creative work and solving logical problems.</p>
      <hr></hr>
      <p class="introText">I love wandering in the nature and doing activities outdoors so I started learning agriculture, while doing so my favorite topics were always the ones that involved applying the latest technologies. I worked at an agronomic chemical research institute and after a while I realized that my favirote part  was working on the technical side so I started to learn programming in my freetime. I enjoyed the process of it so much that I decided to take a leap of faith and join a boot camp.</p>
    </div>
  )
}

export default Introduction;