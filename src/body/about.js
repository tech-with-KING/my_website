import React from 'react';
import imgr from "./sc/mo_prev_ui.png"
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
            <div className="col-img" style={{backgroundImage:'url(/img/IMG_20220317_162022.jpg)'}}>
	         <div className="imgd"></div>
                </div>
            </div>

            <div className="col-right">
                <h1 className="section-title">About <span>Me</span></h1>
                <h2>Front End developer</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Veritatis sit tenetur doloribus totam reiciendis incidunt assumenda,
                     fugit iure a optio quas quaerat expedita. 
                    Reiciendis voluptates sit dolor ipsam fugiat! Blanditiis!</p>
                    <a href="#" className="cta">Download resume</a>
            </div>
        </div>
    </section>
 
    )
}
export default About;



