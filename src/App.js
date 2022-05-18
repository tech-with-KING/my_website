import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Menue_Bar from './nav/menue';
import Navbar from './nav/nav';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import DownBar from './root/bottom_bar';


class App extends Component {
  state={
    toggle:true
  }
  
  render() {
    const {toggle}=this.state
    const settoggle=()=>{
      if (toggle) {
        this.setState({toggle:false})
      } else {
        this.setState({toggle:true})
      }
    }
   
    return (
       <>
       <Menue_Bar />
       <div className='top_bar'  >
       <div className='ico' onClick={()=>{settoggle()}}>{!toggle?<MenuIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} /> :<ClearTwoToneIcon  style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}}/>}</div>
                <div  className='light'><DarkModeIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} /></div>
        </div>
        <div className='menuebar' style={ toggle?{height:'70vh'}:{height:'0',paddingLeft:'0'}}  >
                          <div className='op' ></div>
                            <a className='li' to={'/'}> <HomeIcon style={{marginRight:'5px'}}/>Home</a>   
                            <a className='li' href='https://drive.google.com/drive/folders/1q9ahRAe-SFAogpu43f0JeCTfNumFIcnN?usp=sharing' ><MenuBookTwoToneIcon style={{marginRight:'5px'}}/> Materials</a>
                            <a className='li' to={'/solutions'}> <CreditScoreIcon style={{marginRight:'5px'}}/> My Scores</a>
                            <a className='li' href='' ><LibraryBooksIcon style={{marginRight:'5px'}}/>Course Outline</a>
                            <a to={""} className='li' ><InfoTwoToneIcon style={{marginRight:'5px'}} />About</a>   
                            <div className='op' ></div>
                </div>
        <Body></Body>
        <DownBar></DownBar>
       </>
    );
  }
}

export default App;
