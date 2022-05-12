import { FacebookTwoTone, Instagram, Twitter } from '@mui/icons-material';
import React, { Component } from 'react';
import "./cardbar.css"
import img from './img/img.JPG'

class Card_componnt extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <div class="card">
                <img src={img} alt="John" style={{width:'100%'}}/>
                <h1>John Doe</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Cosmic School</p>
                <a href="#"><FacebookTwoTone/></a>
                <a href="#"><Twitter/></a>
                <a href="#"><Instagram/></a>
                <a href="#"><FacebookTwoTone/></a>
                <p><button>Contact</button></p>
            </div>
       </>
        );
    }
}
 
export default Card_componnt;