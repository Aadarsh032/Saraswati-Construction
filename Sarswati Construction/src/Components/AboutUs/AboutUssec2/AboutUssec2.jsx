import React from 'react'
import backdrop from '../../../assets/Sarswati Backdrop 1.png'
import quotes from '../../../assets/quote-left.png'

const AboutUssec2 = () => {
  return (
    <div className='aboutussec2-backdrop relative'>
         <img src={backdrop} alt="" />

         <div className='aboutussec2-content absolute top-8'>
                   
                  <div className='aboutussec2-content-leftdiv'>
                         <img src={quotes} alt="" />
                  </div>
                  <div className='aboutussec2-content-rightdiv'>
                    
                   </div> 

         </div>
    </div>
  )
}

export default AboutUssec2
