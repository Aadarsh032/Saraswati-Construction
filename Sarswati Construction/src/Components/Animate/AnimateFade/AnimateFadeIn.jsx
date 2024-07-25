import React, { useEffect } from 'react'

import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateFadeIn = ({children , ...rest }) => {

    const controls = useAnimation();
    const {ref,inView} = useInView({
        threshold: 0.2,
        triggerOnce:true,
    });
    useEffect(()=>{
        if(inView)
        {
            controls.start({
                 opacity: 1,
                 transition : { duration: 3},          
            });
        }
        else{
            controls.start({
                opacity: 0,
            });
        }
    },[controls, inView]);

  return (
   
     <motion.div ref={ref} animate={controls} initial={{ opacity: 0}} {...rest} >
        {children}
     </motion.div>
  )
}

export default AnimateFadeIn;
