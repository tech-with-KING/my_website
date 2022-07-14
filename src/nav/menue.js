import React from 'react';
import './menue.css'
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
const Menue_Bar=(props)=>{
    const {toggle}=props
    const material_link ='https://drive.google.com/drive/folders/1q9ahRAe-SFAogpu43f0JeCTfNumFIcnN?usp=sharing'
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

	    <div className='menuebar' style={toggle ? { height: '500px',position:"fixed",top:'0',width:'50vw' } : { height: '0',position:'fixed',width:'0' }}  >
	                        <a className='li' to={'/'}> <HomeIcon style={{ marginRight: '5px' }} />Home</a>
				<a className='li' href={material_link} >
					<MenuBookTwoToneIcon style={{ marginRight: '5px' }} /> Materialfs
				</a>
				<a className='li' to={'/solutions'}> <CreditScoreIcon style={{ marginRight: '5px' }} /> My Scores</a>
				<a className='li' href='' ><LibraryBooksIcon style={{ marginRight: '5px' }} />Course Outline</a>
				<a to={""} className='li' ><InfoTwoToneIcon style={{ marginRight: '5px' }} />About</a>
				<div className='tol'>currently studying at </div>
				<div className='tol'>we can do whatever we believe we can <div className='circ'></div></div>
	    </div>
	    
    )
}
export default Menue_Bar;
