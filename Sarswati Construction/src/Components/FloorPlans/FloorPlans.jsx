import React from 'react'
import left_building_image from '../../assets/Left-building-image.png'
import floormap from '../../assets/floor-map.png'

const FloorPlans = () => {
  return (
    <div className='floorplans flex flex-row w-[95%] m-auto justify-evenly mt-12 mb-24'>

      <div className='floorplans-left'>
            <img src={left_building_image} alt="" />
      </div>

      <div className='floorplans-right flex flex-col justify-center gap-5'>
            <div className='floorplans-right-top flex flex-col gap-3'>
                  <h1 className='text-4xl font-extrabold' style={{color:'#DF7F8E'}}>Floor Plans</h1>
                  <p className='text-[17px] font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div> 
            <div className='floorplans-right-bottom flex flex-row'>
                 <div className='floorplans-right-bottom-left list-none text-xl flex flex-col gap-4 font-semibold '>
                  <li className=' bg-[#D9D9D9] p-2' >GROUND FLOOR</li>
                  <li className='ml-2'>FIRST FLOOR</li>
                  <li className='ml-2'>SECOND FLOOR</li>
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
