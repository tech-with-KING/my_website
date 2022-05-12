
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
              <Card_componnt/>
              <div class="mySlides">
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>
                    <div class="dot-container">
                    <span class="dot" ></span>
                    <span class="dot" ></span>
                <span class="dot" onclick="currentSlide(3)"></span>
              </div>

           </div>
        
 );
    }
}
 
export default Slide_Bar;