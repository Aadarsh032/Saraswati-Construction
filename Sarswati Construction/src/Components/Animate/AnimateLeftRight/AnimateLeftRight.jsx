import React, { useEffect } from 'react'

import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateLeftRight = ({children, direction= "left" ,delay = 0 , ...rest }) => {

    const controls = useAnimation();
    const {ref,inView} = useInView({
        threshold: 0.2,
        triggerOnce:true,
    });

    useEffect(()=>{

        if(inView)
        {
            controls.start({
                 x: 0,
                 opacity: 1,
                 transition : { duration: 0.5, delay},
                                 
            });
        }
        else{
            controls.start({
                x:  direction === "left" ? -100 : 100,
                opacity: 0,
            });
        }

    },[controls, inView, direction ,delay]);


  return (
   
     <motion.div ref={ref} animate={controls} initial={{  x: direction === "left" ? -100 : 100, opacity: 0}} {...rest} >
        {children}
     </motion.div>
  )
}

export default AnimateLeftRight;
