import React from 'react';
import './glassy.css'; // Import your CSS file for styling
import img from './IMG_6608.JPG'

const GlassyProfile = () => {
    const text = `
As a passionate software engineer and mathematician, I thrive on the exhilarating intersection of logic and creativity. With a solid foundation in mathematics, I approach software development as an elegant puzzle that demands both analytical thinking and innovative solutions. My journey into this field began with my fascination for algorithms and patterns, which eventually led me to pursue degrees in both mathematics and computer science.

Throughout my career, I've had the privilege of working on diverse projects that have sharpened my skills in various technologies. From crafting efficient algorithms to developing user-friendly interfaces, I'm committed to creating robust software solutions that marry precision with practicality. The ever-evolving landscape of technology exhilarates me, and I'm constantly driven to learn new languages, frameworks, and paradigms to stay at the forefront of innovation.

In addition to my technical pursuits, I believe in effective communication and collaboration as essential pillars of successful software engineering. My experience collaborating with cross-functional teams has taught me the value of combining technical expertise with clear communication to deliver exceptional results.

When I'm not immersed in code, you'll find me exploring the world of abstract mathematics, finding beauty in elegant theorems and proofs. This love for both software engineering and mathematics fuels my determination to tackle complex challenges and contribute meaningfully to the world of technology.
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
