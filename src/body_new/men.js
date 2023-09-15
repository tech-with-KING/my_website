import React ,{useState} from 'react';
import styles from './men.module.css'
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const Navbar_Alt = ({value})=> {
  const [navbarActive, setNavbarActive] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const colors = ['white', 'black'];
 


  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };
   
    return ( 
      // <div id='navbar' >
      //   {/* hambuger */}
      //    
      //     {/* dropdown */}
      //     <div className={`menu ${navbarActive ? 'open' : ''}`} >
      //       <ul >
      //         <li><Link to={'/'} style={{ color:'white'}}>Home</Link></li>
      //         <li><Link to={'/portfolio'} style={{color:'white'}}>Portfolio</Link></li>
      //         <li><Link to={'/Blog'} style={{ color:'white'}}>Blog</Link></li>
      //         <li><Link to={'/services'} style={{ color:'white'}}>Services</Link></li>
      //         <li><Link to={'#about'} style={{ color:'white'}}>About</Link></li>
      //       </ul>
      //     </div>
      // </div>


      <nav className="navbar">
      <h1 className="logo">My Website</h1>
      <div onClick={toggleNavbar} style={{display:'flex', alignItems:'center', justifyContent:'center',color:'rgba(255, 255, 255, 0.3)', background:'transparent'}}>
           <Hamburger toggled={isOpen} toggle={setOpen}  />
      </div>
      <div className={`menu${navbarActive ? ' open' : ''}`}>
        <ul >
            <li><Link to={'/'} style={{ color:'white'}}>Home</Link></li>
            <li><Link to={'/portfolio'} style={{color:'white'}}>Portfolio</Link></li>
            <li><Link to={'/Blog'} style={{ color:'white'}}>Blog</Link></li>
            <li><Link to={'/services'} style={{ color:'white'}}>Services</Link></li>
            <li><Link to={'#about'} style={{ color:'white'}}>About</Link></li>
        </ul>
      </div>
    
    </nav>
  
    );
    
  }
export default Navbar_Alt;


