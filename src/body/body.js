import React from 'react';
import './body.css'
import { useState } from 'react';
import Carded from '../components/blogcard/bob';


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
            <h1>Articles</h1>
            <div className='my_projects'>
                {
                    data.map((data)=>{
                        return(
                            <Carded /> 
                        )
                    })
                }
            </div>
            <div className='tech_articles'>
                <h1>Articles</h1>
                {
                    data.map((data)=>{
                        return(
                            <Carded /> 
                        
                        )
                    })
                }
            </div>
               
        </div>    
    )
}
export default Body;