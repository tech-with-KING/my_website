import React, { useState, useEffect } from 'react';
import './body.css'; // Import your CSS file for styling
import Hamburger from 'hamburger-react';
import { Height } from '@mui/icons-material';
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

const Luminar = () => {
  const colors = ['rgb(12,28,37)', '#268BD2', '#2AA198', '#3490A7', '#BED9E0'];
  const text_colors = ['rgb(134,255,175)', '#0A1C2A', '#052D2A', '', '#377788'];
  const texts = [
    'Hi I am Kingsley',
    'i am a software engineer',
    'I love collaborating to build innovative designs',
    "do you have great ideas ?",
    'let\'s connect'
  ];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [navbarActive, setNavbarActive] = useState(false);
  const [resetKey, setResetKey] = useState(0); 

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setResetKey(resetKey + 1); // Reset RevealingText component when background changes
    }, 5000);

    return () => clearInterval(colorInterval);
  }, [resetKey]);
  const [isOpen, setOpen] = useState(false)



  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <div className="color-changing-container" style={{ backgroundColor: colors[currentColorIndex] }}>
      <div className={`animation-circle`}>
        <div className="animated-text-container">
          <RevealingText
            text={texts[currentColorIndex]} // Initial text
            delayBetweenLetters={100}
            resetKey={resetKey}
            backgroundColor={text_colors[currentColorIndex]}
          />
        </div>
      </div>
      <div className='navbar' style={{ backgroundColor:navbarActive ? text_colors[currentColorIndex] :'transparent', color:navbarActive? colors[currentColorIndex]: text_colors[currentColorIndex] }}>
         <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
         <div onClick={toggleNavbar} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Hamburger toggled={isOpen} toggle={setOpen}  />
          </div>
          <div className="nav-logo" style={{textAlign:'center'}}>Kingsley Okpo</div>

          </div>
        <ul className='nav-menu' style={{display : navbarActive?"flex":'none' }}>
          <li><a href="#" style={{ color:colors[currentColorIndex] }}>Home</a></li>
          <li><a href="#" style={{ color:colors[currentColorIndex] }}>About</a></li>
          <li><a href="#" style={{ color:colors[currentColorIndex] }}>Services</a></li>
          <li><a href="#" style={{ color:colors[currentColorIndex] }}>Portfolio</a></li>
          <li><a href="#" style={{ color:colors[currentColorIndex] }}>Contact</a></li>
        </ul>
      </div>
      <div className='navbar_alt' style={{ backgroundColor:colors[currentColorIndex], color:text_colors[currentColorIndex] }}>
          <div className="nav_logo" style={{textAlign:'center'}}>Kingsley Okpo</div>
        <ul className='nav-menu_alt' >
          <li><a href="#" style={{ color:text_colors[currentColorIndex] }}>Home</a></li>
          <li><a href="#" style={{ color:text_colors[currentColorIndex] }}>About</a></li>
          <li><a href="#" style={{ color:text_colors[currentColorIndex] }}>Services</a></li>
          <li><a href="#" style={{ color:text_colors[currentColorIndex] }}>Portfolio</a></li>
          <li><a href="#" style={{ color:text_colors[currentColorIndex] }}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Luminar;
