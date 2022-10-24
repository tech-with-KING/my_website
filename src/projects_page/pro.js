import React from 'react';
import './pro.css'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion'
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
import { Link } from 'react-router-dom';
const Projects=(props)=>{
      const datas =[
      {
            id:1,
          text:"Rewriting the Linux CMD in c",
          img:'/img/pythondev1.jpeg',
	  name:'python',
      link: '',
      link_text:'view on github'
	  
      },
      {
        id:2,
        text:"Streamnet",
          img:'/img/bn.png',
	  name:'Reac/js',
      link: '',
      link_text:'view on github'
    },
    {
        id:3,
        text:"RSA Factoring challenge",
        img:'/img/cforme.jpeg',
	name:'C',
    link: '',
    link_text:'view on github'
    
    },
      {
        id:4,
        text:"Django Rest Api",
        img:'/img/git.png',
        link: '',
        link_text:'view on github'
    
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
			    <h1>{project.text}</h1>
                    <h2>coding is love</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magnam omnis, accusantium itaque nulla at nobis eaque autem saepe dicta
                         nesciunt illum assumenda
                         magni vero quia quibusdam explicabo? Quaerat, illo recusandae.</p>
                         <Link to='/'>{project.link_text}</Link>
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

