import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Navbar from './nav/nav';
import DownBar from './root/bottom_bar';


class App extends Component {
  render() {
    return (
       <>
       
        <Navbar />
        <Body></Body>
        <DownBar></DownBar>
       </>
    );
  }
}

export default App;
