
import React from 'react';
import './body.css'
import { useState,useEffect } from 'react';
import Carded from '../components/blogcard/bob';
import { motion } from 'framer-motion'
import Carded_Two from '../components/blogcard/bob2';
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
          img:'studio'
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
            <motion.div className='hot'
	      initial={{opacity:0, translateX:-200}}
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
					transition= {{duration:1.5,delay:i*1.5}} > 
                                <Carded /> 
                            </motion.div>
                        )
                    })
                }
			
		    </div>
		 

                </div>
             
                <div className='line'></div>
            
           
            
            <motion.div  className='hots'
			            >
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
