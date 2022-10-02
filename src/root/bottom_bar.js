import {MailOutline,Message } from '@mui/icons-material';
import {motion} from 'framer-motion'
import React from 'react';
import './bottom_bar.css'
import {GitHub, Twitter, LinkedIn, ViewCarousel, ArrowDropUp, Email, YouTube} from '@mui/icons-material';

const DownBar=()=>{
            const animae=[
	    	


            {
                id:1,
		color:'about_heading',
                item:<GitHub />
            },
           {
               id:2,
	       color:'about_heading',
               item: <Twitter style={{color:'#00ACEE'}}/>,
           },
           {
               id:3,
	       color:'about_heading',
               item:<MailOutline style={{color:'#DB4437'}}/>
		   
           },
	    
        {
            id:4,
	    color:'about_heading',
            item:<LinkedIn style={{color:'#0072b1'}} />
        },
	    {
		id:5,
		color:'about_heading',
		item:  <YouTube style={{color:'#FF0000'}}/>
            }
        ]
    return(
        <div className='downcomponent'>
            <div className='extra_contents'>
	    <button>Read Our Weekly News Letter</button>
	    </div>
            <div className='menue_bottom'>
                <ul className='menue_options' >
                    <li>home</li>
                    <li> Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <img className='logo' src='/img/mormon.png' alt='logo'/>
            </div>
            <div className='our_socials'>
              <>
              <button>Contact Us :</button>
            <ul>
	                    {
                    animae.map((anim,i)=>{
                        return(
                            <motion.div href="#" className='div'
                                key={anim.id}
                                initial={{opacity:0, translateX:-40}}
                                animate={{opacity:1, translateX: 0}}
                                transition={{duration:0.5,delay:i*0.5}}
                            >{anim.item }</motion.div>
                        )
                    })
                }
	    </ul>
            </>
	    <div  className='modals'>
            <div className='goto_top'>
            <ArrowDropUp style={{color:'#000020',fontSize:'60px',margin:"5px"}}/>
        </div>
	    <div className='message'>
	    <Message  style={{fontSize:'30px',color:"rgb(15, 207, 159)"}}/>
        </div>
	    </div>
            </div>
            <div className='text'>
            <p>copyright: Algophile.com 2021</p>
	    <p>Email: kingsley@algophile.com
	    </p>
                <p>This website was made responsively  with love
                </p>
            </div>
            <div className='disclaimer'>
            <p>Client data protection is a core value.
	
	</p>
            </div>
                
        </div>
    )
       
}
export default DownBar;
