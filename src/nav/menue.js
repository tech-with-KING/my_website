import React from 'react';
import './menue.css'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import cosmic from "../img/tile.svg"
import Slide_Bar from '../components/slidder/slidebar';

const Menue_Bar=(props)=>{
    const [toggle,settoggle]=useState(false)   
    const [dark,setdark]=useState(false)   
    const darkmode = () =>{
        if (dark) {
            setdark(false)
        } else {
            setdark(true)
        }
    }
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
      lightbd:''
  }
  

    return(
        <div className='header'>
                <div className='menuebar' style={ toggle?{width:'60%'}:{width:'0',paddingLeft:'0'}}  >
                          <div onClick={()=>{toggle ?settoggle(false) :settoggle(true)}}><ClearTwoToneIcon  style={{position:'absolute',top:'0',margin:'5px', fontSize:'30px', fontWeight:'bold'}}/></div>
                            <a className='li' to={'/'}> <HomeIcon style={{marginRight:'5px'}}/>Home</a>   
                            <a className='li' href='https://drive.google.com/drive/folders/1q9ahRAe-SFAogpu43f0JeCTfNumFIcnN?usp=sharing' ><MenuBookTwoToneIcon style={{marginRight:'5px'}}/> Materials</a>
                            <a className='li' to={'/solutions'}> <CreditScoreIcon style={{marginRight:'5px'}}/> My Scores</a>
                            <a className='li' href='' ><LibraryBooksIcon style={{marginRight:'5px'}}/>Course Outline</a>
                            <a to={""} className='li' ><InfoTwoToneIcon style={{marginRight:'5px'}} />About</a>   
                </div>
        {
            props.position<=0? 
                    <div className='storymode' >
                        {/* <img src={cosmic} alt='logo'/> */}
                        {/* <div className='about'>
                            <div></div>
                            <div className='circle'>{'>'}</div>
                            <div className='circle1'>{'<'}</div>
                        </div> */}
                        <Slide_Bar />
                        <div className='top_bar' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}} >
                            <div onClick={()=>{toggle ?settoggle(false) :settoggle(true)}} className='ico' style={toggle ?{backgroundColor:'transparent'}:{backgroundColor:'transparent'}}><MenuIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} /> </div>
                            <div onClick={()=>{darkmode()}} className='light' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl} : {backgroundColor:coloring.lightbg , color:coloring.darkcl}}>{dark?<LightModeIcon style={{fontSize:'30px',color:'white',backgroundColor:'black',fontWeight:'bold'}}/>:<DarkModeIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} />}</div>
                        </div>
                    </div>
            :
            <div className='top_bar' style={dark?{backgroundColor:coloring.darkbg,transition:'1s ease', color:coloring.lightcl,position:'fixed'}:{backgroundColor:coloring.lightbg , color:coloring.darkcl,position:'fixed'}} >
                <div onClick={()=>{toggle ?settoggle(false) :settoggle(true)}} className='ico' style={toggle ?{backgroundColor:'transparent'}:{backgroundColor:'transparent'}}><MenuIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} /> </div>
                <div onClick={()=>{darkmode()}} className='light' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl} : {backgroundColor:coloring.lightbg , color:coloring.darkcl}}>{dark?<LightModeIcon style={{fontSize:'30px',color:'white',backgroundColor:'black',fontWeight:'bold'}}/>:<DarkModeIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} />}</div>
            </div>
        }
              
        </div>    
    )
}
export default Menue_Bar;