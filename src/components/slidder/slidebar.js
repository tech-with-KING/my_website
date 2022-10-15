
import React, { Component } from 'react';
import Card_componnt,{Carded} from '../cardbar/cardbar';
import {motion ,AnimatePresence} from 'framer-motion'
import './slidebar.css'
import { ArrowBack, ArrowForward, ChevronLeft, ChevronRight, GitHub, LinkedIn, MailOutline } from '@mui/icons-material';

class Slide_Bar extends Component {
    constructor(props) {
        super(props);
    }
    state = { index:0 }
    render() {
	        const animae=[
            {
                id:1,
                item:<Card_componnt/>,
            },
           {
               id:2,
               item: <Carded/>,
           },
           {
            id:3,
            item:   <Card_componnt/>
        },
        {
            id:4,
            item:  <Carded/>
        }
		]
	const{index}=this.state
 // setInterval(()=>{
 //     if(this.state.index == 3){
 // 	 this.setState({index:0})
 //     }
 //     else{
 // 	 this.setState({index:this.state.index+1})
 //     }
 //     	console.log(this.state.index)
 // },2000)
	const back_animate= ()=>{
	      if(this.state.index == 3){
	 this.setState({index:0})
   }
    else{
  	 this.setState({index:this.state.index+1})
 }
	}




		const forward_animate= ()=>{
	      if(this.state.index == 3){
	 this.setState({index:0})
   }
    else{
  	 this.setState({index:this.state.index+1})
 }
	}
        return (
	    
		<div class="slideshow-container" style={{backgrounColor:"#0B0C10"}}>

    <section id="hero">
        <div class="hero container">
            <div>
                <h1>Hello, <span></span></h1>
                <h1>My Name is <span></span></h1>
                <h1>Kingsley  Francis Okpo<span></span></h1>
		<p>I am a full stack react developer<span></span></p>
                <a href="#" type="button" class="cta">Download CV</a>
            </div>
        </div>
    </section>

            </div>
        
 );
    }
}
 
export default Slide_Bar;
