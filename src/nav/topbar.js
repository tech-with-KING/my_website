import React from 'react';
import "./tobar.css"
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
const Top_bar=(props)=>{
    const {toggle}=props
    const set_toggle = ()=>
       {
	   const style = { fontSize: '30px', fontWeight: 'bold', transition: "0.5s ease-in" }
	   if(!toggle){return(<MenuIcon style = {style} />)}else{return( <ClearTwoToneIcon style = {style} />)}
       	}
    return(
	<div className='top_bar'>
	    <div className='ico' >
	       {set_toggle()}
        </div>
	    <h3>cosmic_shool</h3>
	    <div className='light'>
	        <DarkModeIcon />
	    </div>
	</div>     
    )
}
export default Top_bar;
