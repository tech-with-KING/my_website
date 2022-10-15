import React, { Component } from 'react';
import './bob2.css'
import bob from './img.JPG'
class Carded_Two extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
     }
    render() { 
        return ( 
        <>
            <div class="contained">
                <div class="card">
                 <div class="card__header">
                <div className='article_img' style={{background:`url(${this.props.img})`}}></div>
                </div>
                <div class="card__body">
                    <span class="tag tag-red">react</span>
                    <h4>Article Name</h4>

                    <div class="card__footer">
                    <div class="user">
                        <img src={bob}  alt="user__image" class="user__image"/>
                        <div class="user__info">
                        <h5>kingsley2018</h5>
                        <small>2d ago</small>
                        </div>
                    </div>
                  </div>

                </div>
                 
                </div>
            </div>
        </>
         );
    }
}
 
export default Carded_Two;
