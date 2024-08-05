import React, { useEffect } from 'react'
import left_building_image from '../../assets/Left-building-image.png'
import floormapground from '../../assets/Ground Floor Plan-.jpg'
import floormap1 from '../../assets/1st floor plan-.jpg'
import floormap2 from '../../assets/2nd floor plan-.jpg'
import floormapeven from '../../assets/4,6,8,10,12,14 floor plan-.jpg'
import floormapodd from '../../assets/3,5,7,9,11,13 floor plan-.jpg'
import FloorLayout from './FloorLayout/FloorLayout';
import { useState } from 'react';
import AnimateUpDown from '../Animate/AnimateUpDown/AnimateUpDown'

const FloorPlans = () => {

  
  const [floor, setFloor] = useState("GROUND FLOOR");

  const [image, setimage] = useState(floormapground);


  function groundfloor() {
    setFloor("GROUND FLOOR");
    setimage(floormapground);
  }
  function firstfloor() {
    setFloor("FIRST FLOOR");
    setimage(floormap1);
  }
  function secondfloor() {
    setFloor("SECOND FLOOR");
    setimage(floormap2);
  }
  function oddfloor() {
    setFloor("ODD FLOOR");
    setimage(floormapodd);
  }
  function evenfloor() {
    setFloor("EVEN FLOOR");
    setimage(floormapeven);
  }


  return (
    <div className='floorplans flex flex-row w-[95%] m-auto justify-evenly mt-12 mb-24 gap-8 max-md:mt-6 max-md:mb-12'>

      <div className='floorplans-left max-md:hidden'>
        <img src={left_building_image} alt="" />
      </div>

      <div className='floorplans-right flex flex-col w-[75%] justify-center gap-4  max-xl:mt-3 max-xl:gap-4 max-md:mt-0'>
        <AnimateUpDown direction='up'>
        <div className='floorplans-right-top flex flex-col gap-4 max-xl:gap-2' >
          <h1 className='text-4xl font-extrabold text-[#DF7F8E] max-xl:text-3xl max-sm:text-5xl ' >Floor Plans</h1>
          <p className='text-[17px] font-thin max-xl:text-[15px]  max-sm:text-xl'>Discover the thoughtfully designed floor plans of Rose Avenue, crafted to maximize space, comfort, and convenience. Each layout is tailored to meet the diverse needs of our residents, ensuring an ideal living experience for every family.</p>
        </div>
        </AnimateUpDown>
        <div className='floorplans-right-bottom flex flex-row gap-4 max-lg:flex-col  max-md:flex-col-reverse  max-sm:text-center '>
          <div className='floorplans-right-bottom-left list-none text-xl flex flex-col gap-4 font-semibold  max-xl:text-xs max-lg:flex-row max-md:flex-col max-lg:text-[10px] max-sm:text-xl ' >
            <li className={`p-2 cursor-pointer ${floor === "GROUND FLOOR" ? 'bg-[#D9D9D9]  animate-fadeIn ' : 'bg-white'} `} onClick={groundfloor} >GROUND FLOOR</li>
            <li className={`p-2 cursor-pointer ${floor === "FIRST FLOOR" ? ' bg-[#D9D9D9]  animate-fadeIn ' : 'bg-white'} `} onClick={firstfloor} >FIRST FLOOR</li>
            <li className={`p-2 cursor-pointer ${floor === "SECOND FLOOR" ? ' bg-[#D9D9D9]  animate-fadeIn ' : 'bg-white'} `} onClick={secondfloor} >SECOND FLOOR</li>
            <li className={`p-2 cursor-pointer ${floor === "ODD FLOOR" ? ' bg-[#D9D9D9]  animate-fadeIn ' : 'bg-white'} `} onClick={oddfloor} >3,5,7,9,11,13 FLOORS</li>
            <li className={`p-2 cursor-pointer ${floor === "EVEN FLOOR" ? ' bg-[#D9D9D9]  animate-fadeIn ' : 'bg-white'} `} onClick={evenfloor} >4,6,8,10,12,14 FLOORS</li>
          </div>
          <div className='floorplans-right-bottom-left border-[1px] cursor-move '>
            <FloorLayout image={image} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default FloorPlans
