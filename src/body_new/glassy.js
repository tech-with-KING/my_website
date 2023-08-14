import React from 'react';
import './glassy.css'; // Import your CSS file for styling
import img from './IMG_6608.JPG'
import { Link } from 'react-router-dom';
const GlassyProfile = () => {
    const text = `Kingsley Okpo is a driven and accomplished software
     engineer who is both a dedicated student and a forward-thinking software 
     engineering intern. He is passionate about the role of educational technology in shaping.
`
  return (
    <div className="glassy-profile">
      <div className="text-side">
        <h2 className='glassytitle'>BIO :</h2>
        <h1 className='glassy-header'>Innovating Education through Software Engineering Excellence</h1>
        <p>{text}</p>
        <a className='personally' href='#class-action'> Continue Reading</a>
      </div>
      <div className="image-side">
        <img src={img} alt="Profile" />
      </div>
    </div>
  );
};

export default GlassyProfile;
