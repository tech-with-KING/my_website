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
            <div class="container">
                <div class="card">
                 <div class="card__header">
                    <img src={bob} alt="card__image" class="card__image" width="600"/>
                </div>
                <div class="card__body">
                    <span class="tag tag-red">react</span>
                    <h4>Race to your heart content</h4>
                    <p style={{margin:'5px'}}>!</p>
                    <div class="card__footer">
                    <div class="user">
                        <img src={bob}  alt="user__image" class="user__image"/>
                        <div class="user__info">
                        <h5>John Doe</h5>
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