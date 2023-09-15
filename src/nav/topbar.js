import React from 'react';
import "./tobar.css"
import MenuIcon from '@mui/icons-material/Menu';
import Menue_Bar from './menu';
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
            </div>
        </div>

    </div>
	    </section>
	    </>
    )
}
export default Top_bar;
