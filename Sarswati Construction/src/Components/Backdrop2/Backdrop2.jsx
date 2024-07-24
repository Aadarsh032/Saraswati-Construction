import React, { useEffect } from 'react'
import backdrop2 from '../../assets/backdrop2.png'
import whitearrow from '../../assets/long-arrow-right-white.png'
import whitephone from '../../assets/long-arrow-right.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Backdrop2 = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  })

  return (
    <div className='backdrop2-maindiv relative'>
      <img src={backdrop2} alt="" className='backdrop2-image w-[1897px] h-[585px] ' />
      <div className=' backdrop2-overlap absolute top-0 p-[100px] py-[130px]  w-[1897px] h-[585px] bg-custom-gradient'>
        <div className='backdrop2-overlap-left w-[1000px] text-white '>
          <div className='backdrop2-overlap-left-top  w-[1000px] flex flex-col gap-5 ' data-aos="slide-up" >
            <h3 className='heading font-bold text-[22px] text-[#DF7F8E]'>Nothing but the best</h3>
            <h1 className='slogan font-bold text-6xl '>Sculpted for the pioneers of tomorrow</h1>
            <p className='detail text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='backdrop2-overlap-left-bottom flex flex-row gap-[30px] text-[16px] font-bold items-center text-white mt-9' data-aos="slide-up">
            <button className='learnmore-btn rounded-3xl flex flex-row items-center gap-[10px] bg-[#DF7F8E] text-[#FFFFF] px-[38px] py-[14px]'>Learn More <img src={whitearrow} alt="" /></button>
            <p className='paragraph flex gap-[10px] items-center '><img src={whitephone} alt="" className='w-4 h-4' /> 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backdrop2
