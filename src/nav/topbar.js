import React from 'react';
import "./tobar.css"
import MenuIcon from '@mui/icons-material/Menu';
import Menue_Bar from './menue';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
const Top_bar=(props)=>{
    const {toggle,set_toggle}=props
    const make_menue_toggle=()=>{
	set_toggle()
    }
    const set_style = ()=>
       {
	   if(toggle){
	       return('activity')
	   }else null;
       	}
    return(
	<>
	    <section id="header">
    <div className="header container">

        <div className="nav-bar">
            <div className="brand">
                <a href="#hero"><h1><span>K</span>ingsley <span>F</span>rancis</h1></a>
            </div>
            <div className="nav-list">
            <div className={`hamburger ${set_style()}`} onClick={()=>{make_menue_toggle()}}>
                    <div className="bar"></div>
                </div>
                <ul>
               <li><a href="#hero" data-myafter="Home">Home</a></li>
               <li><a href="#services" data-myafter="Services">Services</a></li>
               <li><a href="#projects" data-myafter="Project">Project</a></li>
               <li><a href="#about" data-myafter="About">About</a></li>
               <li><a href="#contact" data-myafter="Contact">Contact</a></li>
                </ul>
            </div>
        </div>

    </div>
	    </section>
	    </>
    )
}
export default Top_bar;
