import React from 'react';
import './glassy.css'; // Import your CSS file for styling
import img from './IMG_6608.JPG'

const GlassyProfile = () => {
    const text = `
As a passionate software engineer and mathematician, I thrive on the exhilarating intersection of logic and creativity. With a solid foundation in mathematics, I approach software development as an elegant puzzle that demands both analytical thinking and innovative solutito learn new languages, frameworks, and paradigms to stay at the forefront of innovatlly to the world of technology.
`
  return (
    <div className="glassy-profile">
      <div className="text-side">
        <h1>BIO</h1>
        <p>{text}</p>
      </div>
      <div className="image-side">
        <img src={img} alt="Profile" />
      </div>
    </div>
  );
};

export default GlassyProfile;
