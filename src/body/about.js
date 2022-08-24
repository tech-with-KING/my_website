import React from 'react';
import imgr from "./sc/mo_prev_ui.png"
import './about.css'
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
	   
<div className="content">
            <img className="left-side" src={imgr} alt="Any Image"></img>
            <h1 style={{color:"whiteo"}}> About me</h1>
  <p>In web design, page elements with the CSS float property applied to them are just like the images in the print layout where the text flows around them. Floated elements remain a part of the flow of the web page. This is distinctly different than page
    elements that use absolute positioning. Absolutely positioned page elements are removed from the flow of the webpage, like when the text box in the print layout was told to ignore the page wrap. Absolutely positioned page elements will not affect
    the position of other elements and other elements will not affect them, whether they touch each other or not.
  In web design, page elements with the CSS float property applied to them are just like the images in the print layout where the text flows around them. Floated elements remain a part of the flow of the web page. This is distinctly different than page
    elements that use absolute positioning. Absolutely positioned page elements are removed from the flow of the webpage, like when the text box in the print layout was told to ignore the page wrap. Absolutely positioned page elements will not affect
    the position of other elements and other elements will not affect them, whether they touch each other or not.</p>
 

</div>
 
    )
}
export default About;



