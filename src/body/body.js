import React from 'react';
import './body.css'
import { useState,useEffect } from 'react';
import Carded from '../components/blogcard/bob';
import { motion } from 'framer-motion'
import Carded_Two from '../components/blogcard/bob2';
import img from "./sc/img-removebg-preview.png"
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
import About from "./about"
import Projects from "../projects_page/pro"
import Services from "../services/services"
import data from '../projects_page/data'
import PortfolioPage from '../components/porfolio/portfolio';
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
          img:'/img/pythondev1.jpeg',
	  name:'python',
	  word:data[0]
	  
      },
      {
        id:2,
        text:"this is going to be some of the best articles yuo will ever get to read",
          img:'/img/bn.png',
	  name:'Reac/js',
	  word:data[1]
	  
    },
    {
        id:3,
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'/img/cforme.jpeg',
	name:'C',
	word:data[2]
    },
      {
          id:4,
	  heading:"Making The GNU Emacs into an IDE",
          text:"Emacs if properly configured could become a very produtive tool in the right hands ",
	  
        img:'/img/prettyemacs.png',
	  name:'git',
	  word:data[3]
    }
  ]

    return(
	<>            
         <div className='body'>
	    {/* <Projects /> */}
            <About />
            <PortfolioPage />
            {/* <div className='line'></div> */}
            {/* <motion.div  className='hots' >
            <h1 className="section-tile">ART<span>I</span>CL<span>E</span>S</h1>
            </motion.div> */}
            {/* <div ref={article_ref}>
                {
                    datas.map((data,i)=>{
                        return(
			    <motion.div
                                key={data.id}
			         initial={{opacity:0, translateX:-100}}
				animate={article_view?{opacity:1, translateX: 0}:{}}
				transition={{duration:1,delay:i*1}} >
                                <Carded_Two img={data.img} t={data.word}/>
                            </motion.div>
                        )
                    })
                }
        	</div> */}
            {/* <Services /> */}
            </div>
	        </>
     )
}
export default Body;
