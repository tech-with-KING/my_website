import React from 'react';
import './body.css'
import { useState } from 'react';
import Carded from '../components/blogcard/bob';
import { motion } from 'framer-motion';
import Carded_Two from '../components/blogcard/bob2';
import bgi from './sc/undraw_programmer_re_owql.svg'


const Body=(props)=>{
    const [toggle,settoggle]=useState(false)   
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
  const data =[
      {
          text:"this is going to be some of the best articles yuo will ever get to read",
          img:'studio'
      },
      {
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'studio'
    },
    {
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'studio'
    }
  ]

    return(
        
        <div className='body'>
            <motion.div className='hot'
              initial={{opacity:0, translateX:-200}}
              animate={{opacity:1, translateX: 0}}
              transition={{duration:1.5}}
             >
             <h1>Projects</h1>

            </motion.div>
            
            <div className='my_projects'>
                {
                    data.map((data)=>{
                        return(
                            <Carded 
                          
                            /> 
                        )
                    })
                }
                <div className='line'></div>
            
           
            
            <motion.div className='hot'
              initial={{opacity:0, translateX:200}}
              animate={{opacity:1, translateX: 0}}
              transition={{duration:1}}
             >
             <h1>Articles</h1>

            </motion.div>
            
                
                {
                    data.map((data)=>{
                        return(
                            <Carded_Two />
                        
                        )
                    })
                }
            </div>
               
        </div>    
    )
}
export default Body;