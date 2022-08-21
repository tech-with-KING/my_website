
import React from 'react';
import './body.css'
import { useState,useEffect } from 'react';
import Carded from '../components/blogcard/bob';
import { motion } from 'framer-motion'
import Carded_Two from '../components/blogcard/bob2';
import img from "./sc/img-removebg-preview.png"
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
const Body=(props)=>{
    const [toggle,settoggle]=useState(false)
    const {ref:article_ref,inView:article_view}=useInView()
    const {ref:projec_ref,inView:project_view}=useInView()
    const [dark,setdark]=useState(false)
    const darkmode = () =>{
        if (dark) {
            setdark(false)
        } else {
            setdark(true)
        }
    }
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
      lightbd:''
  }
  const datas =[
      {
          id:1,
          text:"this is going to be some of the best articles yuo will ever get to read",
          img:'../img/react.svg'
      },
      {
        id:2,
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'studio'
    },
    {
        id:3,
        text:"this is going to be some of the best articles yuo will ever get to read",
         img:'studio'
    }
  ]

    return(
            <div className='body'>
	    {	    /* this part is the main home menu of the app */}


		{/* this is the part i dispalay my different tech stacks in that small circle to show all the past projects i have done*/}
	    <div className='tech_stacks'>
	    <h3>TECH-STACKS</h3>
	    <div className='t_s'>
	    <div><div></div><h4>react</h4></div>
	    <div><div></div><h4>react</h4></div>
	    <div><div></div><h4>react</h4></div>
	    <div><div></div><h4>react</h4></div>
	    </div>
	    

	
	    </div>
            <motion.div className='hot'
	      initial={{opacity:1}}
              transition={{duration:1}}
            >
	    
             <h1>Projects</h1>

            </motion.div> 
            <div className='my_projects'>
                <div  className='eop'>
		    <div ref={projec_ref} className="p_div">
			   {
                    datas.map((data,i)=>{
                        return(
                            <motion.div key={data.id}
			         initial={{translateX:"-100vw"}}
				animate={project_view?{opacity:1, translateX: 0}:{}}
					transition= {{duration:1,delay:i*1.5}} > 
                                <Carded /> 
                            </motion.div>
                        )
                    })
                }
			
		    </div>
		 

                </div>

	    <section className='square'>
	    <h1>About Me</h1>
	    	    <img style={{width:'100px'}} src={img} alt="my picture"></img>
	    <p>my name is Kingsley francis Okpo I am an undergraduate of the university of Lagos
	I am currently studying in the field of pure mathematics I hope someday to hold a fields medal
	    in mathematics or if age does not permit me i would love to go for the Alan turing award in computer
	science for my utiliZation of mathematical knowledge to the field of computer science in solving one of the
	biggest problems in the field .The problem of quantum computing and artificial inteligence in the light of thes i want to give my best to study and progress so as to get to the places i want to get to in life ang find the happiness i desire and also to have impact in the lives of my family member ..I was not born with a silver spoon but i have seen golden spoons manufactured in the market and i know the can be bought ..so I plan to buy Golden spoons for my children</p>

	    </section>
	
	    
                <div className='line'></div>
            
	{/*this part of the page is the part i add the remainint part of projec*/}
            
            <motion.div  className='hots' >

	
             <h1>Articles</h1>

            </motion.div>
            
                <div ref={article_ref}>
                {
                    datas.map((data,i)=>{
                        return(
			    <motion.div
                                key={data.id}
			         initial={{opacity:0, translateX:-100}}
				animate={article_view?{opacity:1, translateX: 0}:{}}
				transition={{duration:1,delay:i*1}} >
                                <Carded_Two />
                            </motion.div>
                        
                        )
                    })
                }
		    </div>
            </div>
               
        </div>    
     )
}
export default Body;
