import React, { useState, useEffect } from 'react';
import './body.css'; // Import your CSS file for styling
import Hamburger from 'hamburger-react';
import { Height } from '@mui/icons-material';
import GlassyProfile from './glassy';
import { Link } from 'react-router-dom';
const RevealingText = ({ text, delayBetweenLetters, resetKey, backgroundColor }) => {
  const [revealedText, setRevealedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    setRevealedText('');

    const interval = setInterval(() => {
      if (currentIndex >= 0 && currentIndex < text.length) {
        setRevealedText((prevText) => prevText + text[currentIndex]);
        currentIndex += 1;

        if (currentIndex === text.length) {
          clearInterval(interval);
        }
      }
    }, delayBetweenLetters);

    return () => clearInterval(interval);
  }, [text, delayBetweenLetters]);

  useEffect(() => {
    setRevealedText(''); // Reset revealed text when resetKey changes
  }, [resetKey]);

  return (
    <div className="revealing-text" style={{ color: backgroundColor }}>
      {revealedText}
      <div className="blinking-cursor" ></div>
    </div>
  );
};

const Luminar = ({value}) => {
  const colors = ['rgb(12,28,37)', '#268BD2', '#2AA198'];
  const text_colors = ['rgb(134,255,175)', '#0A1C2A', '#052D2A'];

  // const colors = ['rgb(12,28,37)', '#268BD2', '#2AA198', '#3490A7', '#BED9E0'];
  // const text_colors = ['rgb(134,255,175)', '#0A1C2A', '#052D2A','#377788'];
  const [navbarActive, setNavbarActive] = useState(false);
  const [isOpen, setOpen] = useState(false)



  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <div className="color-changing-container" style={{ backgroundColor: colors[value] }}>
      <div className={`animation-circle`}>
        <GlassyProfile />
      </div>
      <div className='navbar' style={{ backgroundColor:navbarActive ? text_colors[value] :colors[value], color:navbarActive? colors[value]: text_colors[value] }}>
         <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:'transparent'}}>
         <div onClick={toggleNavbar} style={{display:'flex', alignItems:'center', justifyContent:'center', background:'transparent'}}>
            <Hamburger toggled={isOpen} toggle={setOpen}  />
          </div>
          <div className="nav-logo" style={{textAlign:'center'}}>Kingsley Okpo</div>

          </div>
        <ul className='nav-menu' style={{display : navbarActive?"flex":'none' }}>
          <li><a href="#" style={{ color:colors[value] }}>Home</a></li>
          <li><Link to={'/elevator-pitch'} style={{ color:colors[value] }}>Elevator Pitch</Link></li>
          <li><a href="#" style={{ color:colors[value] }}>Portfolio</a></li>
          <li><a href="#" style={{ color:colors[value] }}>About</a></li>
        </ul>
      </div>
      <div className='navbar_alt' style={{ backgroundColor:colors[value], color:text_colors[value] }}>
          <div className="nav_logo" style={{textAlign:'center'}}>Kingsley Okpo</div>
        <ul className='nav-menu_alt' >
          <li><a href="#" style={{ color:text_colors[value] }}>Home</a></li>
          <li><Link to={'/elevator-pitch'} style={{ color:text_colors[value] }}>Elevator Pitch</Link></li>
          
        </ul>
      </div>
    </div>
  );
};

export default Luminar;
