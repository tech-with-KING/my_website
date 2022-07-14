import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Articles from "./article_page/index"
import Menue_Bar from './nav/menue';
import Top_Bar from './nav/topbar'
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
class App extends Component {
	state = {
		toggle: true
	}

	render() {
		const { toggle } = this.state
		return (
			<>
			
			<Router>
			<Menue_Bar toggle={toggle}/>

		    <Top_Bar/>
			<Routes>
			<Route path="/" element={<Body />} />
			<Route path="/articles" element={<Articles />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/topbar" element={<Top_Bar toggle={toggle} />} />
		    </Routes>
		    <DownBar />
		 </Router>

			</>
		);
	}
}

export default App;
