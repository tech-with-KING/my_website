import React, { Component } from 'react';
import Card_componnt,{Carded} from '../cardbar/cardbar';
import {motion} from 'framer-motion'
import './slidebar.css'

class Slide_Bar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
	        const animae=[
            {
                id:1,
                item:<Card_componnt/>,
            },
           {
               id:2,
               item: <Carded/>,
           },
           {
            id:3,
            item:   <Card_componnt/>
        },
        {
            id:4,
            item:  <Carded/>
        }
        ]
        return (  
          <div class="slideshow-container">   
              
                 <div class="mySlides">

		        {
                    animae.map((anim,i)=>{
                        return(
                            <motion.div href="#" 
                                key={anim.id}
                            initial={{opacity:0, translateX:-100}}
                            animate={{opacity:1, translateX: 0}}
                            transition={{duration:0.5,delay:i*0.5}}
			    exitBeforeEnter={true}
			    exit={{opacity:0, translateY:-100}}
                            >{anim.item }</motion.div>
                        )
                    })
                }
		
                
                 </div>
                <div class="dot-container">
		<a  ></a>
                    <span class="dot" ></span>
                    <span class="dot" ></span>
                    <span class="dot"></span>
		
                </div>

            </div>
        
 );
    }
}
 
export default Slide_Bar;
