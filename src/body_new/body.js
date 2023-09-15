import React, { useState, useEffect } from 'react';
import './body.css'; // Import your CSS file for styling
import Hamburger from 'hamburger-react';
import { Height } from '@mui/icons-material';
import GlassyProfile from './glassy';
import { Link } from 'react-router-dom';
import MyComponent from './downcomp';
import Navbar_Alt from './men';
const Luminar = ({value}) => {
  const colors = ['white', 'black'];
  const text_colors = ['black', 'white'];


  return (
    <div className="color-changing-container"  style={{ backgroundColor:'black' }}>
      <div id='body'> 
          <GlassyProfile />
          <MyComponent />
      </div>

    </div>
  );
};

export default Luminar;