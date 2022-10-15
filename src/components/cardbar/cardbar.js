import {  Instagram, Twitter, YouTube } from '@mui/icons-material';
import { ArrowBack, ArrowForward, ChevronLeft, ChevronRight, GitHub, LinkedIn, MailOutline } from '@mui/icons-material';
import React, { Component } from 'react';
import "./cardbar.css"
import {motion} from 'framer-motion'
import TYPED from 'react-typed'
class Card_componnt extends Component {
    state = {  } 
    render() { 
        const animae=[
	    	


            {
                id:1,
		color:'about_heading',
                item:<GitHub style={{ color: '#ffffff' }} />
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
        return (
        <>
		<div className="card_to" style={{minHeight:'400px'}}>
		<div className='header_s'>
		<h3 className="about_heading"><TYPED className="about_heading" strings={["Hi..."]}  typeSpeed={100} onComplete={(self) => self.cursor.remove()}/><TYPED className="about_heading" showCursor={false} startDelay={2000} strings={['I am  Kingsley ']}  typeSpeed={100} onComplete={(self) => self.cursor.remove()}/></h3>
		<img src='/milo-removebg-preview.png' alt="profileImg" style={{width:'130px',height:'130px',borderRadius:'50%',}}/>
		</div>


                <p className="title">A Full-Stack React/Python Developer</p>
				<p className='about_short_text'>
		I build responsive UIs  for web and mobile with fast and seemless APIs to take the load off the clientside thereby improving speed and efficiency.Some of my strong skills are :ReactJs,NoeJs, Python/Django, Git, Lisp, C, I love collaborating and learning. I am open to opportunities.

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
        }
        ]
	
        return (
        <>
		<div className="card_to_alt" style={{minHeight:'400px'}}>

		<img src={img} alt="John" style={{width:'130px',height:'130px',borderRadius:'0%',}}/>
                <h3 className="about_heading">Hi &#x1F44B;&#x1F600;  I am Kingley</h3>
                <p className="title">A Full-Stack Developer</p>
				<p className='about_short_text'>
		And I’ve spent the last three years learning and building everything  there is to Web and
	    Software Designs – from Great

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
            </div>
       </>
        );
    }
}
 
export default Card_componnt;
export {Carded}
