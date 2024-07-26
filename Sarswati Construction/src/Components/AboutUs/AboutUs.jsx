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
      <div className='aboutus  pt-5 bg-neutral-100 pb-8 max-sm:pb-8 ' id='AboutUs' >

        <div className=' w-[95%] m-auto flex items-center justify-center gap-10 max-2xl:gap-5  max-xl:gap-2 max-lg:gap-2  max-sm:flex-col '>

          <div className='w-1/2' >
            <AnimateLeftRight direction='left' >
              <div className='aboutusleft relative m-24 mb-28 max-lg:m-12 max-sm:m-3 '>
                <img src={aboutrightimage1} alt="" className='w-[100%]   '  />
                <img src={aboutrightimage2} alt="" className='absolute  -bottom-24 right-32 max-2xl:right-24 max-2xl:h-[310px] max-2xl:-bottom-20 max-xl:h-[250px] max-xl:right-[70px] max-lg:h-[190px] max-lg:-bottom-12 max-lg:right-12 max-md:h-[130px] max-md:-bottom-9 max-md:right-7 ' />
              </div>
            </AnimateLeftRight>
          </div>

          <div className="aboutusright w-1/2 flex flex-col gap-6 max-2xl:gap-4  max-xl:gap-3 max-lg:gap-2 max-lg:-ml-5 max-md:-ml-10  max-sm:items-center max-sm:gap-5 max-sm:m-8  max-sm:w-[100%] " >
            <div className='w-3/4 flex flex-col gap-6 max-2xl:gap-4 max-xl:w-[65%] max-xl:gap-2  max-md:w-[90%] max-sm:gap-3  max-sm:w-[100%] max-sm:text-center'>
              <h1 className='text-2xl font-bold text-[#B96D79] max-2xl:text-xl  max-lg:text-base max-md:text-sm max-sm:text-6xl ' >About Us</h1>
              <h1 className='text-5xl font-extrabold max-2xl:text-4xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-4xl  '>Elevating Lifestyles With Innovation And Integrity</h1>
              <p className='text-lg max-2xl:text-base max-xl:text-sm max-lg:text-[10px] max-md:text-[8px]  max-sm:text-2xl '>At Saraswati Consultancy and Construction, we believe in transforming skylines and crafting the finest living spaces. Based in the heart of Ranchi, we are a team of visionaries dedicated to creating not just homes, but legacies.</p>
            </div>
            <div className='  flex items-center gap-7 max-2xl:gap-5 max-lg:gap-2 max-sm:flex-col max-sm:w-[100%]  '>
              <div className='w-96 bg-white p-8 shadow-lg rounded-3xl max-h-60  max-2xl:w-80 max-2xl:p-6 max-2xl:h-56 max-xl:w-64 max-xl:h-48  max-lg:w-52 max-lg:h-48 max-md:h-40 max-md:w-44 max-sm:w-[90%] max-sm:h-auto '  >
                <h1 className='text-xl font-bold max-2xl:text-lg max-xl:text-[15px] max-lg:text-[12px] max-md:text-[9px]  max-sm:text-xl'>Unwavering Commitment to Quality</h1>
                <p className='text-lg max-2xl:text-base max-xl:text-sm max-lg:text-xs max-md:text-[7px] max-sm:text-lg '>We use only the finest materials and employ a team of skilled professionals to ensure the highest quality construction.</p>
              </div>
              <div className='w-96 bg-white p-8 max-h-60 rounded-3xl shadow-lg max-2xl:w-80 max-2xl:p-6 max-2xl:max-h-56 max-xl:w-64 max-xl:h-48 max-lg:h-48 max-lg:w-52 max-md:h-40 max-md:w-44 max-sm:w-[90%] max-sm:h-auto'>
                <h1 className='text-xl font-bold max-2xl:text-lg max-xl:text-[15px] max-lg:text-[12px] max-md:text-[9px] max-sm:text-xl  '>Transparency, Trust and Customer Satisfaction</h1>
                <p className='text-lg max-2xl:text-base max-xl:text-sm max-lg:text-xs max-md:text-[7px] max-sm:text-lg'>Commitment to the highest standards of construction and design. and a track record of delivering projects on time and exceeding client expectations.</p>
              </div>
            </div>
            <div className='flex gap-10  max-sm:flex-col   max-sm:w-[90%]  max-sm:items-center'>
              <button className='flex items-center gap-3 text-xl p-3 px-8 rounded-3xl bg-[#DF7F8E] text-[#FFFFFF] max-2xl:text-base max-2xl:p-2 max-2xl:px-5 max-xl:px-3 max-xl:text-sm max-lg:text-xs max-lg:p-1 max-lg:px-2 max-sm:text-xl max-sm:p-2 max-sm:px-8' >Learn More <img src={longarrowwhiteright} alt="" className='max-lg:w-3' /></button>
              <div className='flex items-center gap-3'><img src={blackphone} alt="" className='max-2xl:h-4  max-xl:h-3  max-sm:h-6' /> <p className='font-bold text-xl max-2xl:text-base  max-xl:text-sm max-lg:text-xs  max-sm:text-xl'>123 456 789</p></div>
            </div>
          </div>
        </div>
      </div>
      <Backdrop />
    </>
  )
}

export default AboutUs
