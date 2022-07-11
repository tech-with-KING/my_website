import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Menue_Bar from './nav/menue';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"

class App extends Component {
  state={
    toggle:false
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
       <Menue_Bar  toggle={toggle}/>
  
       <div className='top_bar'  >

                <div className='ico' onClick={()=>{settoggle()}}>{!toggle?<MenuIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} /> :<ClearTwoToneIcon  style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}}/>}</div>
                <div  className='light'><DarkModeIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} /></div>
        </div>
        <Projects/>
        <Body></Body>
        <DownBar></DownBar>
       </>
    );
  }
}

export default App;
