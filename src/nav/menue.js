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
    const {toggle}=props   
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
  }
  

    return(
        <div className='header'>
                <div className='menuebar' style={toggle?{height:'500px'}:{height:'0',paddingLeft:'0'}}  >
                          <div onClick={()=>{toggle ?settoggle(false) :settoggle(true)}}><ClearTwoToneIcon  style={{position:'absolute',top:'0',margin:'5px', fontSize:'30px', fontWeight:'bold'}}/></div>
                            <a className='li' to={'/'}> <HomeIcon style={{marginRight:'5px'}}/>Home</a>   
                            <a className='li' href='https://drive.google.com/drive/folders/1q9ahRAe-SFAogpu43f0JeCTfNumFIcnN?usp=sharing' ><MenuBookTwoToneIcon style={{marginRight:'5px'}}/> Materials</a>
                            <a className='li' to={'/solutions'}> <CreditScoreIcon style={{marginRight:'5px'}}/> My Scores</a>
                            <a className='li' href='' ><LibraryBooksIcon style={{marginRight:'5px'}}/>Course Outline</a>
                            <a to={""} className='li' ><InfoTwoToneIcon style={{marginRight:'5px'}} />About</a>   
                </div>
        
                <div className='storymode' style={{zIndex:"-1"}}>
                        <Slide_Bar />           
                 </div>
        </div>    
    )
}
export default Menue_Bar;