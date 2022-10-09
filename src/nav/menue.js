import React from 'react';
import './menue.css'
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import {Link} from "react-router-dom"
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Cancel } from '@mui/icons-material';
const Menue_Bar=(props)=>{
        const {toggle,set_toggle}=props
    const make_menue_toggle=()=>{
	set_toggle()
    }
    const set_style = ()=>
       {
	   const style = { fontSize: '30px', fontWeight: 'bold', transition: "0.5s ease-in",color:'grey' }
	   if(toggle){return(<ClearTwoToneIcon style={style} />)}else{null}
       	}
    const image_style={
	width:'50px',
	height:'40px',
	objectFit:'contain'
    }
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
    }
    const resources =[
	{
	    img:null,
	    link:'/',
	    name:'Home',
	    classname:'li',
	    id:1
	},
	{
	    img:'/img/Screenshot_from_2022-10-09_12-35-09-removebg-preview.png',
	    link:'/articles',
	    name:'Articles',
	    classname:'li',
	    id:2
	},
	{
	    img:'/img/doge-removebg-preview.png',
	    link:'/Projects',
	    name:'Projects',
	    classname:'li',
	    id:3
	},
	{
	    img:'/milo-removebg-preview.png',
	    link:'/about',
	    name:'About Me',
	    classname:'li',
	    id:4
	},
    ]
    const menu_size = ()=>{
	return(
	    toggle ?
		{ height: '60vh',position:"fixed",top:'0',width:'100vw',minWidth:"320px" } :
	    { height: '0',position:'fixed',width:'100vw' }
	)
    }
    return(
<>
	   <div className='menuebar_alt'  >
	    {
		resources.map((rec)=>{
		    return(
			<Link className={rec.classname} key={rec.id} to={rec.link}>
			    {rec.img ? <img src={rec.img} alt={rec.img} style={image_style}/>:null}{rec.name}
			</Link>
		    )
		})
	    }

	</div>
	    
	   <div className='menuebar' style={menu_size()}  >
	    <div className='menu_cancel_icon_container' onClick={()=>{make_menue_toggle()}}> {set_style()} </div>
	    {
		resources.map((rec)=>{
		    return(
			<Link className={rec.classname} key={rec.id} to={rec.link}>
			    {rec.img ? <img src={rec.img} alt={rec.img} style={image_style}/>:null}{rec.name}
			</Link>
		    )
		})
	    }

	    </div>
	    </>
    )
}
export default Menue_Bar;
