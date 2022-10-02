import { FacebookTwoTone, Instagram, Twitter, YouTube } from '@mui/icons-material';
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
        },
	            {
            id:5,
            item:  <YouTube/>
        }
        ]
        return (
        <>
		<div className="card_to" style={{minHeight:'400px'}}>
                <img src={img} alt="John" style={{width:'130px',height:'130px',borderRadius:'50%',}}/>
                <h2>I am kingsley</h2>
                <p className="title">CEO & co-Founer, Algophile.com</p>
				<p className='about_short_text'>
		 And I’ve spent the last three years learning everything there is to know about the Tech industry – from basic UI designs with Reactjs to To building Restful Apis with Django and Nodejs. I’m currently applying this knowledge in my role as a full-stack Developer at Algophile.com a coming of Age AI tak automation systems
        I’m a solution-oriented Full-Stack Web Developer  with a liking for Building web interfaces ,Solving mathematical problems ,Technical Writing, Music, Basket-ball  and Learning.. See some of my very interesting project ideas and article below 

		</p>
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
                <p></p>
            </div>
       </>
        );
    }
}



class Carded extends Component {
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
		<div className="card_to" style={{minHeight:'400px'}}>
                <img src={img} alt="John" style={{width:'130px',height:'130px',borderRadius:'50%',}}/>
                <h2>React/React-Native</h2>
                <p className="title">CEO & co-Founer, Algophile.com</p>
				<p>
		I am a react front end developer with three years of working experience
	         I have collaborated on many team projects and have enjoyed working on all these projects
		</p>
                <div  className='ba'>

                </div>
                <p></p>
            </div>
       </>
        );
    }
}
 
export default Card_componnt;
export {Carded}
