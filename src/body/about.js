import React from 'react';
import "./about.css"
const About=(props)=>{
    const {toggle}=props
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
  }
    return(
    <section id="know_me">
        <div className="know_me container">
            <div className="col-left">
            <div className="col-img" style={{}}>
	         <div className="imgd"></div>
                </div>
            </div>

            <div id='class-action' className="col-right">
                <h1 className="section-title">About <span>Me</span></h1>
                <h2 >Data Analyst</h2>
                <p  className='class-action'>
                "Adeniji Damilola Phebean, a recent Masters graduate working as an Information Manager
with an Msc degree in Management Information System from Covenant University. Damilola
excels in management skills, project management, operation research, and so on. Currently
learning at ALX, Damilola aims to drive impactful solutions through her managerial skills and
her goal is to build a strong management team where their impact will be felt in various
sectors. Beyond Management, Damilola explores emerging tech trends and fosters
community learning and industry advancement.
                </p>
            </div>
        </div>
    </section>
 
    )
}
export default About;



