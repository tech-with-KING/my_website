import React from 'react';
import './portfolio.css'
import transition from '../../transition';
import Navbar_Alt from '../../body_new/men';
const PortfolioPage = () => {
  const text = `This text is just a sample text format for react`
  return (
    <transition>
    
    <div  id='my_portfolio_main'>
    <Navbar_Alt />
    <div className='my_portfolio'>
       <div className="my_text-side">
        <h3 className='my_glassytitle'>Hello There </h3>
        <h1 className='my_glassy-header'>Frontend Developer <br></br>and UI Researcher</h1>
        <p>{text}</p>
        <p>-Linus Trovald</p>
      </div>
      <div className="my_image-side">
        <div id='my_portfolio_img' ></div>
      </div>
     <Projects />
    </div>
    <ul className='stacks'>
      <li>React</li>
      <li>Javasript</li>
      <li>C/C++</li>
      <li>Python</li>
    </ul>
    <YourComponent />
    </div>
  </transition>
  );
};




export default PortfolioPage;

const sampleData = [
  {
    id: 1,
    name: 'Project 1',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 2,
    name: 'Project 2',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 3,
    name: 'Project 3',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 4,
    name: 'Project 4',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 5,
    name: 'Project 5',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 6,
    name: 'Project 6',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 7,
    name: 'Project 7',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 8,
    name: 'Project 8',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 9,
    name: 'Project 9',
    color: 'rgba(250, 250, 250, 0.2)',
  },
  {
    id: 10,
    name: 'Project 10',
    color: 'rgba(250, 250, 250, 0.2)',
  },
];

const YourComponent = () => {
  return (
    <div>
      <h1 className='my'>Projects</h1>
      <div className="image-list">
        {sampleData.map((item) => (
          <div
            className="image-item"
            key={item.id}
            style={{
              backgroundColor:item.color,
              height: '300px',
              borderRadius: '5px',
            }}
          >
            <button className="glassy-button">{item.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};


const data = [
  { name: 'Item 1', number: 10 },
  { name: 'Item 2', number: 20 },
  { name: 'Item 3', number: 30 },
];

function Projects() {
  return (
    <div className="my_container_exp">
      {data.map((item, index) => (
        <div key={index} className="my_container_item">
          <span className="my_name">{item.name}</span>
          <span className="my_number">+{item.number}</span>
        </div>
      ))}
    </div>
  );
}
