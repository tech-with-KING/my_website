import React from 'react';
import './article_list.css'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion'
import Carded_Two from '../components/blogcard/bob2';
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
import data from '../projects_page/data'
import ArticleCard from './ArticleCard';
import transition from '../transition';
const Articles=(props)=>{    const [toggle,settoggle]=useState(false)
    const {ref:article_ref,inView:article_view}=useInView()
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

const sampleArticles = [
  {
    title: 'Exploring React Hooks',
    author: 'Jane Smith',
    date: 'September 5, 2023',
    image: 'https://example.com/article-image-1.jpg',
    content:
      'In this article, we dive deep into React Hooks and explore how they can simplify state management and side effects in your React applications.',
  },
  {
    title: 'Mastering CSS Grid Layout',
    author: 'John Doe',
    date: 'September 6, 2023',
    image: 'https://example.com/article-image-2.jpg',
    content:
      'CSS Grid Layout is a powerful tool for creating complex layouts in web development. Learn how to master it and create responsive designs effortlessly.',
  },
  {
    title: 'Building RESTful APIs with Node.js',
    author: 'Alice Johnson',
    date: 'September 7, 2023',
    image: 'https://example.com/article-image-3.jpg',
    content:
      'Node.js is a popular runtime for building server-side applications. This article guides you through building RESTful APIs using Node.js and Express.',
  },
];
    return(
            <div className='body'>
             
                <div className='line'></div>
            

            
            <motion.div  className='hots' >

	    <h1 className="section-title">Art<span>i</span>cl<span>e</span>s</h1>
            </motion.div>
            
                <div ref={article_ref}>
                {
                    sampleArticles.map((data,i)=>{
                        return(
			    <motion.div
                                key={data.id}
			         initial={{opacity:0, translateX:-100}}
				animate={article_view?{opacity:1, translateX: 0}:{}}
				transition={{duration:1,delay:i*1}} >
                                <ArticleCard key={i} {...data} />
                            </motion.div>
                        )
                    })
                }
		    </div>
               
        </div>    
     )
}
export default transition(Articles);
