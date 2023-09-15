import React from 'react';
import './glassy.css'; // Import your CSS file for styling
import img from './IMG_6606.jpg'
import { Link } from 'react-router-dom';
const GlassyProfile = () => {
   const text = 'The best software is Free software '
  return (
    <div className="glassy-profile">
      <div className="text-side">
        <h3 className='glassytitle'>Hello There &#x1F44F;</h3>
        <h1 className='glassy-header'>Frontend Developer <br></br>and UI Researcher</h1>
        <p>{text}</p>
        <p>-Linus Trovald</p>
      </div>
      <div className="image-side">
        <div id='img' style={{backgroundImage:`url(${img})`}}></div>
      </div>
    </div>
  );
};

export default GlassyProfile;
