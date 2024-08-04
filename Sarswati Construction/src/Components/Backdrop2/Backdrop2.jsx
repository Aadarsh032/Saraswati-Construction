import React, { useEffect } from 'react'
import backdrop2 from '../../assets/backdrop2.png'
import whitearrow from '../../assets/long-arrow-right-white.png'
import whitephone from '../../assets/long-arrow-right.png'
import './Backdrop2.css'

import AnimateUpDown from '../Animate/AnimateUpDown/AnimateUpDown';

const Backdrop2 = () => {

 

  return (
    <div className='backdrop2-maindiv relative'>
      <img src={backdrop2} alt="" className='backdrop2-image   ' />
      <div className=' backdrop2-overlap absolute top-0  inset-0  bg-custom-gradient'>
        <div className='backdrop2-overlap-left m-[100px] my-[100px]   text-white max-xl:my-[85px] max-xl:flex max-xl:flex-col max-lg:my-[45px] max-lg:m-10 max-md:m-[50px] max-md:my-[35px] max-sm:my-[29px] max-sm:m-[17px] '>
          <AnimateUpDown direction='down'>
          <div className='backdrop2-overlap-left-top   flex flex-col gap-2 max-xl:gap-3 max-lg:gap-1 max-sm:gap-0 '  >
            <h3 className='heading font-bold text-[22px] text-[#DF7F8E] max-lg:text-[18px] max-md:text-base max-sm:text-sm  '>Nothing but the best</h3>
            <h1 className='slogan font-bold text-6xl  max-xl:text-4xl max-lg:text-3xl max-md:text-xl max-sm:text-lg '>Sculpted for the pioneers of tomorrow</h1>
            <p className='detail text-[17px] max-xl:text-[15px] max-lg:text-[13px] max-md:text-[11px] max-sm:text-[9px]  max-sm:hidden '>Dedicated to creating innovative and enduring structures, we shape the future for the visionaries and leaders of tomorrow. </p>
          </div>
          </AnimateUpDown>
          <AnimateUpDown direction='down'>
          <div className='backdrop2-overlap-left-bottom flex flex-row gap-[30px] text-[16px] font-bold items-center text-white mt-6 max-xl:mt-5 max-lg:mt-2 max-sm:mt-1'>
            <button className='learnmore-btn rounded-3xl flex flex-row items-center gap-[10px] bg-[#DF7F8E] text-[#FFFFF] px-[38px] py-[14px] max-xl:px-[25px] max-xl:py-[10px] max-lg:py-[7px] max-lg:px-[18px] max-lg:text-[15px] max-md:text-[11px] max-sm:py-[4px] max-sm:px-[12px] '>Learn More <img src={whitearrow} alt="" /></button>
            <p className='paragraph flex gap-[10px] items-center  max-lg:text-[15px] max-md:text-[11px]  '><img src={whitephone} alt="" className='w-4 h-4 max-md:w-3 max-md:h-3  ' /> 123 456 789</p>
          </div>
          </AnimateUpDown>
        </div>
      </div>
    </div>
  )
}

export default Backdrop2
