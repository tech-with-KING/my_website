import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './body/body';
import Articles from './article_page/index';
import PortfolioPage from './components/porfolio/portfolio';
import { Routes, Route, useLocation } from 'react-router-dom';
import Luminar from './body_new/body';
import Services from './services/services';
import MainArticle from './article_page/article_list.js'
import { AnimatePresence } from 'framer-motion';

function AnimatedTransittion() {

const location = useLocation()
    return (  
      <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Body />} />
          <Route path="/" element={<Body />} />
      <Route path="/Blog" element={<Articles />} />
      <Route path="/services" element={< Services />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </AnimatePresence>
    );
}

export default AnimatedTransittion;
