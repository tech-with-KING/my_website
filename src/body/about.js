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
  const text =` Kingsley Francis Okpo a passionate Undergraduate who is currently studying for a bsc in Mathematics
he is a student by day and software developer by night. He spends most of his free time working on web base projects
and also application of mathematics to cryptography. He is very productive versatile and efficient and will be very effective 
in any capacity he is tasked with `
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



