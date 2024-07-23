import React from 'react'
import whitearrow from '../../assets/long-arrow-right-white.png'
import {amenitiesplaycard } from '../../assets/amenitiesplaycard'
// import whitearrow from '../../assets/long-arrow-right-white.png'


const Amenities = () => {
  return (
    <div className='amenities bg-[#F5F5F5]  pb-28 pt-7 flex flex-col gap-24' >

      <div className='amenities-top flex flex-row w-[95%] m-auto gap-8 text-start ml-24 pt-24 '>
        <div className='w-1/4 text-5xl font-semibold  flex items-center'><p className=''>Our best Amenities</p> </div>
        <p className='w-2/4 text-[22px] font-semibold '>Nestled in the serene outskirts of Ranchi, Rose Avenue is our testament to luxury and design. This prestigious project offers a blend of modern amenities and natural beauty, providing an unparalleled living experience.</p>
        <div className='w-[20%] flex items-center justify-center'> <button className='text-xl font-bold bg-[#DF7F8E] flex flex-row items-center max-w-max gap-4 p-2 px-8 rounded-3xl justify-end' style={{ color: '#FFFFFF' }} >MORE <img src={whitearrow} alt="" /></button></div>
      </div>

      <div className='amenities-bottom flex w-[93%] m-auto justify-evenly'>
        { amenitiesplaycard.map((element, index) => {
             return(
               <div className='amenitiesplaycard relative flex justify-center'>
               <img src={element.image} alt="" />
               <div className='amenitiesplaycard-info absolute -bottom-11  flex items-center gap-1 w-[356px] h-[93px] m-auto bg-white rounded-3xl font-semibold text-2xl '>
                
                <div className='w-[85%] flex justify-evenly m-auto align-middle items-center '>
                <h1 className='amenitiesplaycard-title w-[90%]'>{element.title}</h1>
                  <div className='amenitiesplaycard-icon bg-black rounded-full w-11 h-11 flex items-center justify-center '>
                     <img src={whitearrow} alt="" />
                  </div>
                </div>
                 
                 
               </div>
             </div>
             )
        })}
      </div>
    </div>
  )
}

export default Amenities
