import React, { useEffect } from 'react'
import whitearrow from '../../assets/long-arrow-right-white.png'
import {amenitiesplaycard } from '../../assets/amenitiesplaycard'

import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight';


const Amenities = () => {



  let delayed=0;

  return (
    <div className='amenities bg-[#F5F5F5]  pb-28 pt-7 flex flex-col gap-24 max-lg:gap-12 max-md:pt-1 max-md:pb-16 '  >

      <div className='amenities-top flex flex-row w-[95%] m-auto gap-8 text-start justify-center pl-[30px] pt-24 max-sm:flex-col max-sm:text-center max-sm:pl-[0px] ' >
        <div className='w-1/4 text-5xl font-semibold  flex items-center max-2xl:text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-lg max-sm:m-auto max-sm:text-4xl max-sm:w-3/4 max-sm:justify-center '>Our Best Amenities </div>
        <p className='w-2/4 text-[22px] font-semibold max-2xl:text-[18px] max-lg:text-[14px] max-md:text-[12px] max-sm:m-auto max-sm:text-2xl max-sm:w-full '>Nestled in the serene outskirts of Ranchi, Rose Avenue is our testament to luxury and design. This prestigious project offers a blend of modern amenities and natural beauty, providing an unparalleled living experience.</p>
        <div className='w-[20%] flex items-center justify-center max-sm:m-auto'> <button className='text-xl font-bold bg-[#DF7F8E] flex flex-row items-center max-w-max gap-4 p-2 px-8 rounded-3xl justify-end text-[#FFFFFF] max-lg:text-lg max-lg:p-1 max-lg:px-6 max-md:text-base max-sm:justify-center max-sm:text-xl max-sm:p-3 max-sm:px-12' >MORE <img src={whitearrow} alt="" /></button></div>
      </div>

      <div className='amenities-bottom flex w-[93%] m-auto justify-evenly max-sm:flex-col max-sm:gap-14'>
        { amenitiesplaycard.map((element, index) => {

              delayed+=0.2;

             return(
              <AnimateLeftRight direction='left' delay={delayed} key={index} >
               <div className='amenitiesplaycard relative flex justify-center'  >
               <img src={element.image} alt="" className='max-2xl:w-[300px] max-xl:w-[240px] max-lg:w-[190px] max-md:w-[150px] max-sm:w-[240px]'   />
               <div className='amenitiesplaycard-info absolute -bottom-11  flex items-center gap-1 w-[356px] h-[93px] m-auto bg-white rounded-3xl font-semibold text-2xl max-2xl:w-[270px] max-2xl:h-[70px] max-2xl:text-lg max-xl:w-[200px] max-xl:h-[60px] max-xl:-bottom-8 max-xl:text-sm max-lg:w-[160px] max-lg:text-[10px] max-lg:h-[45px] max-lg:-bottom-6 max-md:w-[130px]  max-sm:w-[200px] max-sm:h-[60px] max-sm:-bottom-8 max-sm:text-sm '>
                <div className='w-[85%] flex justify-evenly m-auto align-middle items-center  ' >
                <h1 className='amenitiesplaycard-title w-[90%] max-md:w-[75%] '>{element.title}</h1>
                  <div className='amenitiesplaycard-icon bg-black rounded-full w-11 h-11 flex items-center justify-center max-xl:h-6  max-xl:w-6 ' >
                     <img src={whitearrow} alt="" />
                  </div>
                </div>
               </div>
             </div>
             </AnimateLeftRight>
             )
             
        })}
      </div>
    </div>
  )
}

export default Amenities
