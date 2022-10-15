import React from 'react';
import './pro.css'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion'
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
const Projects=(props)=>{
      const datas =[
      {
          id:1,
          text:"this is going to be some of the best articles yuo will ever get to read",
          img:'/img/pythondev1.jpeg',
	  name:'python'
	  
      },
      {
        id:2,
        text:"this is going to be some of the best articles yuo will ever get to read",
          img:'/img/bn.png',
	  name:'Reac/js'
    },
    {
        id:3,
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'/img/cforme.jpeg',
	name:'C'
    },
      {
        id:4,
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'/img/git.png',
	name:'git'
    }
  ]

    const [toggle,settoggle]=useState(false)
    const {ref:article_ref,inView:article_view}=useInView()
    const {ref:projec_ref,inView:project_view}=useInView()
    return(

	    <section  id="projects">

      <div className="projects container">

        <div className="projects-header"> 
            <h1 className = "section-title">Recent <span>Projects</span></h1>
        </div>

        <div className="projects-body">

		    {
		datas.map((project)=>{
		    return(
			            <div key={project.id} className="projects-card">
                <div className="top-projects-card">
                    <h1>Project 1</h1>
                    <h2>coding is love</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magnam omnis, accusantium itaque nulla at nobis eaque autem saepe dicta
                         nesciunt illum assumenda
                         magni vero quia quibusdam explicabo? Quaerat, illo recusandae.</p>
                </div>
                <div className="projects-img">
			    <img src={project.img} alt={project.img}/>
                </div>
            </div>
		    )
		})
	    }

          
            </div>

            

        </div>
    </section>
	    
    )
}
export default Projects;

