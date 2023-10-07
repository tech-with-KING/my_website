import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './body/body';
import Articles from './article_page/index';
import DownBar from './root/bottom_bar';
import Menue_Bar from './nav/menu';
import PortfolioPage from './components/porfolio/portfolio';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Luminar from './body_new/body';
import Services from './services/services';
import Transitioner from './transition';
import AnimatedTransittion from './animatedroutes';

function App() {
  const [sharedValue, setSharedValue] = useState(0);
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    const interval = setInterval(updateSharedValue, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateSharedValue = () => {
    setSharedValue((prevValue) => (prevValue < 1 ? prevValue + 1 : 0));
  };

  const home = () => {
    return <></>;
  };

  return (
    <>
      <Router>
        <Menue_Bar toggle={toggle} set_toggle={() => setToggle(!toggle)} />
          <AnimatedTransittion />
        {/* <Message /> */}
        <DownBar value={sharedValue} />
      </Router>
    </>
  );
}

export default App;

