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
          title:"React Front End Developer",
          text:`Ui designs for Web in react. Responsive and fast user experience and also lets 
          the client see great products and services without worrying about speed.`,
          img:'/img/pythondev1.jpeg',
	  name:'python'
	  
      },
      {
        id:2,
        title:'Api design with node js',
        text:`Api with designs with mongo db directly brings data to the clientside int json formats and 
        this data can be used in building projects .
        `,
          img:'/img/bn.png',
	  name:'Reac/js'
    },
    {
        id:3,
        title:'Data base designs with python/postgresql',
        text:`Data base with  python , Postgress or mySql involves the ability to implement great design and 
         that come to be very interesting aspect of code makes and pass we want to be able to let the datas 
         `,
        img:'/img/cforme.jpeg',
	name:'C'
    },
      {
        id:4,
        title:'System Design',
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'/img/git.png',
	name:'git'
    },
    {
        id:5,
        title:'Mathematics ',
        text:`I love solving real world problems using analytical maths , number theory and computational maths 
         an early attempt was writting the rsa factoring challenges which uses skill in finding lcms of large numbers .
         I was able to optimize well because i applied concepts from abstract algebra such fermat's little theorem and eulers 
         theorem for factoring large numbes .I also wrote an algorithm matrixes as the bases for finding the lcm of large numbers the 
         algrithm worked so well`,
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
            <p>I specialize in Building fast responsive uI with ReactJs couple with my skill in NodeJs and Django. I occassionaly have to build Apis also to provide data for my clientside
	interfaces I am a computer enthusiast with great interest in system designs network protocols and
	Linux Os i have read a lot on the build up of the linux Kernel and so many system protocols such as telnet,ftp,ssh,sftp and how their security features enable secure remote access to informations and resources .I hope someday to be lead developer on building an operating system that can initiate interactions  with it's  end users thereby making the it possible to automate so many proccesses .
	</p>
            </div>
            <div className="service-bottom" >
            {
                datas.map((data)=>{
                    return(
                        <div className="service-card" style={{backgroundImage:`url(${data.img})`}}>
                    <div className="service-icon">

                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                        </div>
            
                    )
                })
            }
                
                   
            </div>
        </div>
    </section>

	    
    )
}
export default Services;
