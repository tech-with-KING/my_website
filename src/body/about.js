import React from 'react';
import "./about.css"
import im from './img.JPG'
import { ArrowForward, Forward } from '@mui/icons-material';
const About=(props)=>{
    const {toggle}=props
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
  }
  const text =`
  Adeniji Damilola Phebean, a recent Masters graduate working as an Information Manager
  with an Msc degree in Management Information System from Covenant University. Damilola
  excels in management skills, project management, operation research, and so on. Currently
  learning at ALX, Damilola aims to drive impactful solutions through her managerial skills and
  her goal is to build a strong management team where their impact will be felt in various
  sectors. Beyond Management, Damilola explores emerging tech trends and fosters
  community learning and industry advancement.`
    return(
    <section id="about_me">
      <div id='glassy-profile'>
        <div id='about_section'>
          <img id='image-side' src={im} alt={im} />
          <div>
            <h1 >ABOUT</h1>
            <p className='textside'>{text}</p>
          </div>
        </div>   
        {/* ----elevator/--- */}
        <div id='elevatorsection'>
          <div className='header-side'>
            <h1 >Watch my Staircase(Elevator) Pitch Video</h1>
            <ArrowForward  />
          </div>
          <div className='video-section'>
            <iframe src="https://www.youtube.com/embed/dvltElp4iq8" 
              title="18 July 2023" frameborder="0" allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; gyroscope; 
              picture-in-picture; web-share" allowfullscreen>
            </iframe>
         </div>
        </div>   
        {/* ----/end- */}
      </div>
    </section>
 
    )
}
export default About;



