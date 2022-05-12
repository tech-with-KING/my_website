import React, { useEffect, useState } from 'react';

import Menue_Bar from './menue';
import './nav.css'

function Navbar() {
const [position,setPosition]=useState(0)

 const take_scroll_position=()=>{
    const point =window.scrollY
    setPosition(point)
    console.log(position)
 }

 useEffect(()=>{
    window.addEventListener('scroll',take_scroll_position);
 })


  return (
        <div className='navbar'>
            <Menue_Bar position={position}/>
           
        </div>
    );
}

export default Navbar;