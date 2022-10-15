import React from 'react';
import './services.css'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion'
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
const Services=(props)=>{
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

	    <section id="services">
        <div className="services container">
            <div className="service-top">
                <h1 className="section-title">Serv<span>i</span>ces</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in exercitationem 
                    velit nihil labore incidunt molestiae sed, commodi architecto maiores? Illum, 
                    nihil consequatur! Aut quod
                     accusamus molestiae, adipisci pariatur sapiente!</p>
            </div>
            <div className="service-bottom">

                <div className="service-card">
                    <div className="service-icon">

                    </div>
                    <h2>Web Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Od
                        io voluptates, ducimus eius placeat natus ipsa eum repe
                        llat iusto modi, nulla fugiat consequatur, rem enim con
                        sectetur ipsum dignissimos nihil. Aspernatur, blanditiis.</p>
                        </div>
            
                   <div className="service-card">
                    <div className="service-icon">

                    </div>
                    <h2>Web Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Od
                        io voluptates, ducimus eius placeat natus ipsa eum repe
                        llat iusto modi, nulla fugiat consequatur, rem enim con
                        sectetur ipsum dignissimos nihil. Aspernatur, blanditiis.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">

                    </div>
                    <h2>Web Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Od
                        io voluptates, ducimus eius placeat natus ipsa eum repe
                        llat iusto modi, nulla fugiat consequatur, rem enim con
                        sectetur ipsum dignissimos nihil. Aspernatur, blanditiis.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">

                    </div>
                    <h2>Web Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Od
                        io voluptates, ducimus eius placeat natus ipsa eum repe
                        llat iusto modi, nulla fugiat consequatur, rem enim con
                        sectetur ipsum dignissimos nihil. Aspernatur, blanditiis.</p>
                </div>

            </div>
        </div>
    </section>

	    
    )
}
export default Services;
