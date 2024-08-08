import React from 'react'
import aboutrightimage1 from '../../assets/Rectangle4.png'
import aboutrightimage2 from '../../assets/Rectangle5.png'
import longarrowwhiteright from '../../assets/long-arrow-right-white.png'
import blackphone from '../../assets/black-phone-icon.png'
import Backdrop from '../Backdrop/Backdrop'

import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight'


const AboutUs = () => {



  return (
    <>
      <div className='aboutus  pt-5 bg-neutral-100 pb-8 max-sm:pb-8 ' id='AboutUs' >

        <div className=' w-[95%] m-auto flex items-center justify-center gap-10 max-2xl:gap-5  max-xl:gap-2 max-lg:gap-2  max-md:flex-col '>

          <div className='w-1/2' >
            <AnimateLeftRight direction='left' >
              <div className='aboutusleft relative m-24 mb-28 max-lg:m-12 max-sm:m-3 '>
                <img src={aboutrightimage1} alt="" className='w-[100%]   '  />
                <img src={aboutrightimage2} alt="" className='absolute  -bottom-24 right-32 max-2xl:right-24 max-2xl:h-[310px] max-2xl:-bottom-20 max-xl:h-[250px] max-xl:right-[70px] max-lg:h-[190px] max-lg:-bottom-12 max-lg:right-12 max-md:h-[130px] max-md:-bottom-9 max-md:right-7 max-sm:hidden ' />
              </div>
            </AnimateLeftRight>
          </div>

          <div className="aboutusright w-1/2 flex flex-col gap-6 max-2xl:gap-4  max-xl:gap-3 max-lg:gap-2 max-lg:-ml-5 max-md:-ml-10 max-md:w-[100%]  max-md:pl-9 max-sm:pl-0    max-sm:items-center max-sm:gap-5 max-sm:m-8   " >
            <div className='w-full flex flex-col gap-6 max-2xl:gap-4 max-xl:w-[65%] max-xl:gap-2  max-md:w-[100%] max-sm:gap-3  max-sm:w-[100%] max-sm:text-center'>
              <h1 className='text-2xl font-bold text-[#B96D79] max-2xl:text-xl  max-lg:text-base max-md:text-3xl max-sm:text-6xl max-md:text-center ' >About Us</h1>
              <h1 className='text-5xl font-extrabold max-2xl:text-4xl max-xl:text-2xl max-lg:text-xl max-md:text-4xl max-sm:text-4xl max-md:text-center  '>Elevating Lifestyles With Innovation And Integrity</h1>
              <p className='text-lg max-2xl:text-base max-xl:text-sm max-lg:text-[10px] max-md:text-xl  max-sm:text-2xl max-md:text-center '>Welcome to Saraswati Consultancy & Constructions, where we blend modern design with traditional values. Our projects are designed to offer unparalleled luxury and convenience, creating a perfect living environment for you and your family.</p>
            </div>
            <div className='  flex items-center gap-7 max-2xl:gap-5 max-lg:gap-2  max-sm:flex-col max-sm:w-full  '>
              <div className='w-1/2 bg-white p-8 h-60  shadow-lg rounded-3xl max-2xl:h-60  max-lg:h-fit max-sm:w-full  '  >
                <h1 className='text-xl font-bold max-2xl:text-lg max-xl:text-[15px] max-lg:text-[12px] max-md:text-xl  max-sm:text-xl'>Steadfast dedication to exceptional quality</h1>
                <p className='text-lg max-2xl:text-base max-xl:text-sm max-lg:text-xs max-md:text-lg max-sm:text-lg '>We use only the finest materials and employ a team of skilled professionals to ensure the highest quality construction.</p>
              </div>
              <div className='w-1/2 bg-white p-8 h-60 rounded-3xl shadow-lg max-2xl:h-60 max-lg:h-fit max-lg:p-7 max-md:p-6 max-sm:w-full '>
                <h1 className='text-xl font-bold max-2xl:text-lg max-xl:text-[15px] max-lg:text-[12px] max-md:text-xl max-sm:text-xl  '>Transparency, Trust and Customer Satisfaction</h1>
                <p className='text-lg max-2xl:text-base max-xl:text-sm max-lg:text-xs max-md:text-lg max-sm:text-lg'>Commitment to top construction and design standards, with a proven track record of on-time project delivery and exceeding client expectations.</p>
              </div>
            </div>
            {/* <div className='flex gap-10  max-sm:flex-col   max-sm:w-[90%]  max-sm:items-center '>
              <button className='flex items-center gap-3 text-xl p-3 px-8 rounded-3xl bg-[#DF7F8E] text-[#FFFFFF] max-2xl:text-base max-2xl:p-2 max-2xl:px-5 max-xl:px-3 max-xl:text-sm max-lg:text-xs max-lg:p-1 max-lg:px-2 max-md:text-xl max-md:p-2 max-md:px-8' >Learn More <img src={longarrowwhiteright} alt="" className='max-lg:w-3' /></button>
              <div className='flex items-center gap-3'><img src={blackphone} alt="" className='max-2xl:h-4  max-xl:h-3  max-md:h-6' /> <p className='font-bold text-xl max-2xl:text-base  max-xl:text-sm max-lg:text-xs  max-md:text-xl'>123 456 789</p></div>
            </div> */}
          </div>
        </div>
      </div>
      <Backdrop />
    </>
  )
}

export default AboutUs
