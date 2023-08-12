import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Modal from './components/modalbox/modalbox'
import Articles from "./article_page/index"
import Article from "./article_page/article_list"
import Slide_Bar from './components/slidder/slidebar'
import Top_Bar from './nav/topbar'
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"
import Menue_Bar from './nav/menue'
import PortfolioPage from './components/porfolio/portfolio';
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom"
import Luminar from './body_new/body';
import ChatPage from './components/chatpage/chatpage';


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
		this.state.sharedValue < 5?
		this.setState((prevState) => ({ sharedValue: prevState.sharedValue + 1 })):
		this.setState((prevState) => ({ sharedValue:0}))
	  };


    render() {
	const { toggle } = this.state
	const set_toggle = () => { toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true }) }
	const home = () => {
	    return (
		    <>
		    </>
	    )
	}
	return (
			<>
				<Router>
		{/* <Menue_Bar toggle={toggle} set_toggle={set_toggle} /> */}
					<Routes>
						<Route path="/" element={<><Luminar value={this.state.sharedValue}  /><Body /></>} />
						<Route path="/articles" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Article /></>} />
		<Route path="/projects" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Projects /></>} />

						<Route path="/articles/one" element={<><Top_Bar toggfle={toggle} set_toggle={set_toggle} /><Articles /></>} />
						<Route path='/portfolio' element={<PortfolioPage />}></Route>
						
					</Routes>
					<ChatPage/>
					<DownBar value={this.state.sharedValue} />
				</Router>

			</>
		);
	}
}

export default App;
