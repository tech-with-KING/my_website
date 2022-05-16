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
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import DownBar from './root/bottom_bar';


class App extends Component {
  render() {
    return (
       <>
       <Menue_Bar />
       <div className='top_bar'  >
       <div className='ico' ><MenuIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} /> </div>
                <div  className='light'><DarkModeIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} /></div>
        </div>
      
        <Body></Body>
        <DownBar></DownBar>
       </>
    );
  }
}

export default App;
