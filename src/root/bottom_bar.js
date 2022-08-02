import React from 'react';
import './bottom_bar.css'
import cosmic from '../img/s_tile.svg'
import {FacebookSharp,GitHub, Twitter, LinkedIn, Instagram, ArrowDownward, ViewCarousel, ArrowDropUp, Email, YouTube} from '@mui/icons-material';

const DownBar=()=>{
    return(
        <div className='downcomponent'>
            <div className='extra_contents'>
	    <Email style={{fontSize:'70px',width:'30px', height:'30px',color:'white',backgroundColor:'#000020'}}/>
	    <button>Read Our Weekly News Letter</button>
	    </div>
            <div className='menue_bottom'>
                <ul className='menue_options' >
                    <li>home</li>
                    <li> Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <img className='logo' src={cosmic} alt='logo'/>
            </div>
            <div className='our_socials'>
              <>
              <button>Contact Us :</button>
            <ul>
            <li><YouTube style={{fontSize:'70px',width:'30px', height:'300px',color:'white',backgroundColor:'#000020'}}/></li>
	    <li><Email style={{fontSize:'70px',width:'30px', height:'30px',color:'white',backgroundColor:'#000020'}}/></li>
            <li><LinkedIn style={{fontSize:'70px',width:'30px', height:'30px',color:'white',backgroundColor:'#000020'}}/></li>
	    <li><GitHub style={{fontSize:'70px',width:'30px', height:'30px',color:'white',backgroundColor:'#000020'}}/></li>
            <li><Twitter style={{fontSize:'70px',width:'30px', height:'300px',color:'white',backgroundColor:'#000020'}}/></li>
                </ul>
              </>
                <div className='goto_top'>
                    <ArrowDropUp style={{color:'#000020',fontSize:'60px'}}/>
                </div>
            </div>
            <div className='text'>
                <p>copyright: tech_with_KING 2021</p>
                <p>if you desire anything in life please learn to avoid toxic people because they
                </p>
            </div>
            <div className='disclaimer'>
                <p>I Do Not Sell Your Information For Money</p>
            </div>
                
        </div>
    )
       
}
export default DownBar;
