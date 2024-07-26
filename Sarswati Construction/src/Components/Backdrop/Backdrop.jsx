import React, { useEffect } from 'react'
import backdrop from '../../assets/Sarswati Backdrop 1.png'
import quotes from '../../assets/quote-left.png'
import backdropimage from '../../assets/Rectangle 1.png'
import AnimateUpDown from '../Animate/AnimateUpDown/AnimateUpDown'



const Backdrop = () => {



  return (
    <div className='aboutussec2-backdrop relative '>
      <img src={backdrop} alt="" />

      <div className='aboutussec2-content absolute top-0 bottom-0 right-0 left-0 m-auto w-[87%] flex items-center flex-row gap-4  p-5   max-sm:w-[100%] '>

        <div className='aboutussec2-content-leftdiv text-white flex flex-col gap-7 max-lg:gap-4 max-md:gap-2  max-sm:gap-1'  >
          <AnimateUpDown direction='up'>
            <div> <img src={quotes} alt="" className='max-md:h-6' /></div>
          </AnimateUpDown>
          <h1 className='text-5xl font-bold max-2xl:text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl'  >This involves designing a building or structure that is Functional</h1>
          <p className='text-lg max-xl:text-base max-lg:text-sm max-md:text-xs  max-sm:hidden' >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='aboutussec2-content-rightdiv'>
          <AnimateUpDown direction='down'>
            <img src={backdropimage} alt="" className=' w-96 max-sm:hidden'  />
          </AnimateUpDown>
        </div>


      </div>

    </div>
  )
}

export default Backdrop
