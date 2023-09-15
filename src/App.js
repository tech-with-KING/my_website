import React, { Component } from 'react';
import './App.css';
import Body from './body/body';

import Articles from "./article_page/index"
import Article from "./article_page/article_list"
import Slide_Bar from './components/slidder/slidebar'
import Top_Bar from './nav/topbar'
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"
import Menue_Bar from './nav/menu'
import PortfolioPage from './components/porfolio/portfolio';
import { BrowserRouter as Router, Routes, Route, Location} from "react-router-dom"
import Luminar from './body_new/body';
import Message from './components/chatpage/message';
import Elevator from './components/ElevatorPitch/elavator';
import Services from './services/services';
import { AnimatePresence } from 'framer-motion';
import Transitioner from './transition';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  sharedValue: 0,
		};
	  }
	
	
	componentDidMount() {
		this.interval = setInterval(this.updateSharedValue, 5000); // Update every second
	  }
	
	  componentWillUnmount() {
		clearInterval(this.interval);
	  }
	
	  updateSharedValue = () => {
		this.state.sharedValue < 1?
		this.setState((prevState) => ({ sharedValue: prevState.sharedValue + 1 })):
		this.setState(() => ({ sharedValue:0}))
	  };


    render() {
	const { toggle } = this.state
	const set_toggle = () => { toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true }) }
	const place = this.props
	const home = () => {
	    return (
		    <>
		    </>
	    )
	}
	return (
			<>
				<Router>
				<transition />
				<Menue_Bar toggle={toggle} set_toggle={set_toggle} />
					<AnimatePresence mode='wait'>
						<Routes location={location} key={location.pathname} >
						<Route path="/" element={<><Luminar value={this.state.sharedValue}  /><Body /></>} />
						<Route path="/Blog" element={<><Transitioner /></>} />
						<Route path='/services' element={< Services />}></Route>
						<Route path="/articles" element={<><Articles /></>} />
						<Route path='/portfolio' element={<PortfolioPage />}></Route>
					</Routes>
					</AnimatePresence>
					{/* <Message /> */}
					<DownBar value={this.state.sharedValue} />
				</Router>

			</>
		);
	}
}

export default App;
