import React, { useEffect } from 'react'
import left_building_image from '../../assets/Left-building-image.png'
import floormap from '../../assets/floor-map.png'
import 'aos/dist/aos.css'
import AOS from 'aos';

const FloorPlans = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
 },[]); 
 

  return (
    <div className='floorplans flex flex-row w-[95%] m-auto justify-evenly mt-12 mb-24 gap-8'>

      <div className='floorplans-left'>
            <img src={left_building_image} alt="" />
      </div>

      <div className='floorplans-right flex flex-col justify-center gap-9 mt-7'>
            <div className='floorplans-right-top flex flex-col gap-4' data-aos="fade">
                  <h1 className='text-4xl font-extrabold' style={{color:'#DF7F8E'}}>Floor Plans</h1>
                  <p className='text-[17px] font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div> 
            <div className='floorplans-right-bottom flex flex-row gap-4'>
                 <div className='floorplans-right-bottom-left list-none text-xl flex flex-col gap-4 font-semibold ' >
                  <li className=' bg-[#D9D9D9] p-2' data-aos="flip-up" >GROUND FLOOR</li>
                  <li className='ml-2' data-aos="flip-up">FIRST FLOOR</li>
                  <li className='ml-2' data-aos="flip-up">SECOND FLOOR</li>
                 </div>
                  <div className='floorplans-right-bottom-left'>
                    <img src={floormap} alt="" />
                  </div>
              </div> 
      </div>
      
    </div>
  )
}

export default FloorPlans
