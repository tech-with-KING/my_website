import React from 'react';
import './pro.css'; // Import your CSS file for styling
import img from './images/IMG_20230826_200332.jpg'
import img1 from './images/IMG_20230826_200350.jpg'
import img2 from './images/IMG_20230826_200410.jpg'
import img3 from './images/IMG_20230826_200431.jpg'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import img4 from './images/IMG_20230826_200453.jpg'
import { Link } from 'react-router-dom';
import { ArrowForward, ArrowForwardIos } from '@mui/icons-material';
const Projects = () => {
  const data = [
    {
      id :1,
      im:img,
    },
    {
      id:2,
      im:img1,
    },
    {
      id:3,
      im:img2,
    },
    {
      id:4,
      im:img3
    },
    {
      id:5,
      im:img4
    }
  ]
  const {ref:project_ref,inView:project_view}=useInView()
  const text2 = ` 
  DAMILOLA PHEBEAN ADENIJI , KINGSLEY FRANCIS OKPO,
  DANIEL OLABISI, OLUWASINA BABAFEMI, NWEKE PRECIOUS OLUCHI
`
    const text = ` 
  studdy buddy is an online content repository that aims to bridge the gap between the quality of education
  provided to childrent in low icome communities as compared to tthose in high income communities
`
  return (
    <div className='pro-animation-circle'>
    <div className="pro-glassy-profile">
      <div className="pro-text-side">
        <h2 className='pro-glassytitle'>Project :</h2>
        <h1 className='pro-glassy-header'> STUDY BUDDY</h1>
        
        <p id='personally'>{text}</p>
        <p  id='contributors'> <button>CONTRIBUTORS : </button> {text2}</p>
        <button id='arrow'><p>View full Project</p><ArrowForward style={{fontSize:'40px'}}/></button>
      </div>
      <div className="pro-image-side" ref={project_ref}>
        {
          data.map((img, i)=>{
            return(
              <motion.div                 key={img.id}
              initial={{opacity:0, translateX:-100}}
       animate={project_view?{opacity:1, translateX: 0}:{}}
       transition={{duration:1,delay:i*1}} >
              <img key={img.id} src={img.im} alt={img.im} /></motion.div>
            )
          })
        }
      </div>
    </div>
    </div>
  );
};

export default Projects;