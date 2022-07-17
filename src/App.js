import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Articles from "./article_page/index"
import Slide_Bar from './components/slidder/slidebar'
import Top_Bar from './nav/topbar'
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"
import Menue_Bar from './nav/menue'
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom"
class App extends Component {
	state = {
		toggle:false
	}

	render() {
	    const { toggle } = this.state
	    const set_toggle =()=>{toggle?this.setState({toggle:false}):this.setState({toggle:true})}
	    const home =()=>{
		return(
			<>
			</>
		)
	    }
		return (
			<>
			<Router>
			<Menue_Bar toggle={toggle}/>
			<Routes>
			<Route path="/" element={<><Slide_Bar/><Top_Bar toggle={toggle} set_toggle={set_toggle}/><Body /></>} />
			<Route path="/articles" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle}/><Articles /></>} />
			<Route path="/projects" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle}/><Projects /></>} />
		    </Routes>
		    <DownBar />
		 </Router>

			</>
		);
	}
}

export default App;
