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
                <h2 >Front End developer</h2>
                <p  className='class-action'>
                Kingsley Okpo is a driven and accomplished software
     engineer who is both a dedicated student and a forward-thinking software 
     engineering intern. He is passionate about the role of educational technology in shaping 
     modern learning environments and aims to develop innovative solutions for more accessible 
     and effective education. His track record includes significant contributions to cutting-edge software 
     applications, demonstrating leadership, overcoming challenges, and delivering outstanding 
     results. Kingsley's commitment to positive impact and growth sets him apart as a risin
     g star in the field, inspiring fellow students and aspiring engineers. He continues to push boundaries 
     and contribute to the educational tech landscape, with 
    a focus on building groundbreaking innovations for future generations.
                </p>
            </div>
        </div>
    </section>
 
    )
}
export default About;



