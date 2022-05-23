import React, { Component } from 'react';
import './bob.css'
import bob from './img.JPG'
class Carded extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
     }
    render() { 
        return ( 
        <>
            <div class="container_" style={{width:'400px'}}>
                <div class="card_">
                    <div class="card__header">
                    <img src={bob} alt="card__image" class="card__image" width="600"/>
                    </div>
                    <div class="card__body_">
                    <span class="tag tag-red">react</span>
                    <h4>Race to your heart content</h4>
                    <p style={{margin:'5px'}}>Loestiae ihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                    <div class="user">
                        <img src={bob}  alt="user__image" class="user__image"/>
                        <div class="user__info">
                        <h5>@Kingsley</h5>
                        <small>2d weeks ago</small>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
         );
    }
}
 
export default Carded;