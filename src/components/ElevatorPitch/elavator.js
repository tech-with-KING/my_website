import React, { useState, useEffect } from 'react';
import './elevator.css'; // Import your CSS file for styling
import Hamburger from 'hamburger-react';
import { Height } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import NavManu from '../../body_new/navbar';
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

const Elevator= ({value}) => {
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
    <>
    <NavManu value={value} />
      <div className='elevator'>
            <h1 className='section-title'>Elevator Pitch</h1>
          <iframe src="https://www.youtube.com/embed/Nm-u-6bPDpY" 
            title="18 July 2023" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" allowfullscreen>
            </iframe>
      </div>
    </>
  );
};

export default Elevator;