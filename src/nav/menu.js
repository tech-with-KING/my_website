import React from 'react';
import './menu.css'
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import {Link} from "react-router-dom"
import alx_logo from "./Untitled.png"
import unilag_logo from './uilaglogo.jpeg'
import alx_logo1 from './theroom.png'
const Menue_Bar=(props)=>{
	const [navbarActive, setNavbarActive] = useState(false);
	const [isOpen, setOpen] = useState(false)
	const toggleNavbar = () => {
	  setNavbarActive(!navbarActive);
	};
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
	    link:'/Portfolio',
	    name:'Projects',
	    classname:'li',
	    id:3
	},
	{
	    img:'/milo-removebg-preview.png',
	    link:'/services',
	    name:'Services',
	    classname:'li',
	    id:4
	},
	{
	    img:'/milo-removebg-preview.png',
	    link:'/about',
	    name:'About Me',
	    classname:'li',
	    id:5
	},
    ]
    const menu_size = ()=>{
	return(
	    toggle ?
		{ height: '80vh',position:"fixed",top:'0',width:'100vw',minWidth:"320px" } :
	    { height: '0',position:'fixed',width:'100vw' }
	)
    }
    return(
<>
		<div className='menuebar_alt'  >
		<div>
				<img src={alx_logo} alt={alx_logo}></img>
				<img src={unilag_logo} alt={unilag_logo}></img>

			</div>
			<ul>
			{
			resources.map((rec)=>{
				return(
				<li key={rec.id}><Link className={rec.classname} key={rec.id} to={rec.link}>
					{rec.name}
				</Link></li>
				)
			})
			}
			</ul>

		</div>
			
		<div id='small_menuebar'  >
			
			<div>
				<div onClick={toggleNavbar} style={{display:'flex', alignItems:'center', justifyContent:'center',color:'rgba(255, 255, 255, 0.3)', background:'transparent'}}>
					<Hamburger toggled={isOpen} toggle={setOpen}  />
				</div>
				<div className={`dropdown${navbarActive ? ' open' : ''}`}>
				
				<ul className='dropdown_ul'>
          {
          			resources.map((rec)=>{
				          return(
				            <li key={rec.id}><Link className={rec.classname} key={rec.id} to={rec.link}>
					                {rec.name}
				                </Link></li>
				          )
			})
          }
				</ul>
				<div>
				<img src={alx_logo} alt={alx_logo}></img>
				<img src={unilag_logo} alt={unilag_logo}></img>

			</div>
				  
			</div>
			
			</div>
		</div>

	    </>
    )
}
export default Menue_Bar;
