import React from 'react';
import { Link } from 'react-router-dom'; // You'll need to import Link from react-router-dom if you're using React Router
import img1 from './img1.jpeg'
import img2 from './IMG_6606.JPG'
import img3 from './blog.jpg'
import './dow.css'
import { GitHub, Mail, MailOutline, Twitter } from '@mui/icons-material';
const MyComponent = () => {
  const data = [
    {
      id: 1,
      heading:'About',
      img:img1,
      desc:"My journey, experiences, and inspiration for doing what I love",
      btn:'Read'
    },
    {
      id: 1,
      heading:'Projects',
      img:img2,
      desc:"Completed Projects.",
      btn:"Let's Go"
    },
    {
      id: 1,
      heading:'Blog',
      img:img3,
      desc:"Great articles to aid productivity",
      btn:'Read'
    },
    {
      id: 4,
      heading:'Resume',
      img:img1,
      desc:"Download My Resume",
      btn:'Download'
    },
  ]
  return (
    <div className="container">
      {/* socials */}
      <div id='socials'>
        {/* section 1 */}
        <div id='accounts'>
          <h2>socials</h2>
          <p>kingsleyfrancis42@gmail.com</p>
          <div>
            <GitHub />
            <Twitter />
            <MailOutline />
          </div>
        </div>
        {/* section 2 */}
        <div></div>

      </div>
      <div id='portfolios'>
          {
            data.map((data)=>{
              return(
                <div className="box" style={{backgroundImage:`url(${data.img})`, backgroundColor:"rgb(0,0,225,0.8"}}>
                <Link className='box_link'  to="/page1">
                  <div className="box-content">
                    <div>
                    <h3 id='head'>{data.heading}</h3>
                    <p>{data.desc}</p>
                    </div>
                    <div id='down_btn'>
                      <button id='btn'>{data.btn}</button>
                    </div>
		      
                    
                  </div>
                </Link>
              </div>
              )
            })
            
          }
      </div>
    </div>
  );
};

export default MyComponent;
