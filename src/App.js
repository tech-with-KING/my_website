import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Articles from "./article_page/index"
import Slide_Bar from './components/slidder/slidebar'
import Top_Bar from './nav/topbar'
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"
import Menue_Bar from './nav/menue'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
class App extends Component {
	state = {
		toggle:false
	}

	render() {
	    const { toggle } = this.state
	    const set_toggle =()=>{toggle?this.setState({toggle:false}):this.setState({toggle:true})}
		return (
			<>
			<Menue_Bar toggle={toggle}/>
			<Router>
			<Slide_Bar/>
			<Top_Bar toggle={toggle} set_toggle={set_toggle}/>
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
