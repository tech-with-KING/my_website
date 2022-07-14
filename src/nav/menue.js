import React from 'react';
import './menue.css'
import { useState } from 'react';
import Slide_Bar from '../components/slidder/slidebar'
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
    const set_toggle= ()=>{
	toggle ? settoggle(false) : settoggle(true) 
    }

    return(
		<div className='header'>
			<div className='menuebar' style={toggle ? { height: '500px' } : { height: '0', paddingLeft: '0' }}  >
				<div onClick={() => { set_toggle() }}>
					<ClearTwoToneIcon />
				</div>
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

			<div className='storymode' style={{ zIndex: "-1" }}>
				<Slide_Bar />
			</div>
		</div>    
    )
}
export default Menue_Bar;
