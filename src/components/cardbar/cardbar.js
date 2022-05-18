import { FacebookTwoTone, Instagram, InstallDesktopTwoTone, Twitter } from '@mui/icons-material';
import React, { Component } from 'react';
import "./cardbar.css"
import img from './img/img.JPG'
import {motion} from 'framer-motion'
class Card_componnt extends Component {
    state = {  } 
    render() { 
        const animae=[
            {
                id:1,
                item:<FacebookTwoTone/>,
            },
           {
               id:2,
               item: <Twitter/>,
           },
           {
            id:3,
            item:   <Instagram/>
        },
        {
            id:4,
            item:  <FacebookTwoTone/>
        }
        
          
        ]
        return (
        <>
            <div class="card_to">
                <img src={img} alt="John" style={{width:'100%'}}/>
                <h1>I am kingsley</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Cosmic School</p>
                <div  className='ba'>
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

                </div>
             
               
                
               
                <p><button>Contact</button></p>
            </div>
       </>
        );
    }
}
 
export default Card_componnt;