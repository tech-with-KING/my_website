import React, { Component } from 'react';
import Card_componnt from '../cardbar/cardbar';
import './slidebar.css'

class Slide_Bar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
          <div class="slideshow-container">   
              
                 <div class="mySlides">
                    <a class="prev" ></a>
                <Card_componnt/>

		
                    <a class="next" ></a>
                 </div>
                <div class="dot-container">
                    <span class="dot" ></span>
                    <span class="dot" ></span>
                    <span class="dot"></span>
                </div>

            </div>
        
 );
    }
}
 
export default Slide_Bar;
