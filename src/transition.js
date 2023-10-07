import React from 'react'
import {motion} from 'framer-motion'
import './transition.css'
const AnimatePage = (MainComponent) =>{
    return () =>{
        <>

        <motion.div 
            className='slie_in'
            initial={{scaleY:0}}
            animate={{scaleY:0}}
            exit={{scaleY:1}}
            transition={{duration:1, ease:[0.22, 1, 0.36, 1]}}
        />
          <motion.div 
            className='slie_out'
            initial={{scaleY:0}}
            animate={{scaleY:0}}
            exit={{scaleY:1}}
            transition={{duration:1, ease:[0.22, 1, 0.36, 1]}}
          />
                  <MainComponent />
        
        </>
        

    }
}

export default AnimatePage;
