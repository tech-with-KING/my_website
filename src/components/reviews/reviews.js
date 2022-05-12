import React, { Component } from 'react';
class Reviews extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <>
            <div class="container">
  <img src="bandmember.jpg" alt="Avatar" style="width:90px"/>
  <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
  <p>John Doe saved us from a web disaster.</p>
</div>
            </>
        );
    }
}
 
export default Reviews;