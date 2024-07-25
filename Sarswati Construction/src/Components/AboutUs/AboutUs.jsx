import React from 'react'
import aboutrightimage1 from '../../assets/Rectangle4.png'
import aboutrightimage2 from '../../assets/playutt.png'
import longarrowwhiteright from '../../assets/long-arrow-right-white.png'
import blackphone from '../../assets/black-phone-icon.png'
import Backdrop from '../Backdrop/Backdrop'

import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight'


const AboutUs = () => {



  return (
    <>
      <div className='aboutus bg-neutral-100 ' id='AboutUs' >

        <div className='flex items-center justify-center gap-10'>

          <div className='w-1/2' >
            <AnimateLeftRight direction='left' >
              <div className='aboutusleft relative m-24 mb-28'>
                <img src={aboutrightimage1} alt="" />
                <img src={aboutrightimage2} alt="" className='absolute -bottom-24 right-32' />
              </div>
            </AnimateLeftRight>
          </div>

          <div className="aboutusright w-1/2 flex flex-col gap-6" >
            <div className='w-3/4 flex flex-col gap-6'>
              <h1 className='text-2xl font-bold ' style={{ color: '#B96D79' }}>About Us</h1>
              <h1 className='text-5xl font-extrabold'>Elevating Lifestyles With Innovation And Integrity</h1>
              <p className='text-lg'>At Saraswati Consultancy and Construction, we believe in transforming skylines and crafting the finest living spaces. Based in the heart of Ranchi, we are a team of visionaries dedicated to creating not just homes, but legacies.</p>
            </div>
            <div className='flex items-center gap-7'>
              <div className='w-96 bg-white p-8 shadow-lg rounded-3xl h-60' >
                <h1 className='text-xl font-bold'>Unwavering Commitment to Quality</h1>
                <p className='text-lg'>We use only the finest materials and employ a team of skilled professionals to ensure the highest quality construction.</p>
              </div>
              <div className='w-96 bg-white p-8 h-60 rounded-3xl shadow-lg'>
                <h1 className='text-xl font-bold'>Transparency, Trust and Customer Satisfaction</h1>
                <p className='text-lg'>Commitment to the highest standards of construction and design. and a track record of delivering projects on time and exceeding client expectations.</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <button className='flex items-center gap-3 text-xl p-3 px-8 rounded-3xl ' style={{ backgroundColor: '#DF7F8E', color: 'white' }}>Learn More <img src={longarrowwhiteright} alt="" /></button>
              <div className='flex items-center gap-3'><img src={blackphone} alt="" /> <p className='font-bold text-xl'>123 456 789</p></div>
            </div>
          </div>
        </div>
      </div>
      <Backdrop />
    </>
  )
}

export default AboutUs
