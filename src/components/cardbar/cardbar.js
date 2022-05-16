import { FacebookTwoTone, Instagram, InstallDesktopTwoTone, Twitter } from '@mui/icons-material';
import React, { Component } from 'react';
import "./cardbar.css"
import img from './img/img.JPG'
import {motion} from 'framer-motion'
class Card_componnt extends Component {
    state = {  } 
    render() { 
        const animae=[
           <FacebookTwoTone/>,
           <Twitter/>,
           <Instagram/>,
           <FacebookTwoTone/>
        ]
        return (
        <>
            <div class="card_to">
                <img src={img} alt="John" style={{width:'100%'}}/>
                <h1>I am kingsley</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Cosmic School</p>
                {
                    animae.map((anim)=>{
                        return(
                            <motion.a href="#"
                                key={anim}
                                initial={{opacity:0, translateX:-50}}
                                animate={{opacity:1, translateX: 0}}
                                transition={{duration:1}}

                            >{anim}</motion.a>
                        )
                    })
                }
               
                
               
                <p><button>Contact</button></p>
            </div>
       </>
        );
    }
}
 
export default Card_componnt;