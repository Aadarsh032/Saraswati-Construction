import React from 'react'
import backdrop from '../../assets/Sarswati Backdrop 1.png'
import quotes from '../../assets/quote-left.png'
import backdropimage from '../../assets/Rectangle 1.png'


const Backdrop = () => {
  return (
    <div className='aboutussec2-backdrop relative'>
         <img src={backdrop} alt="" />

         <div className='aboutussec2-content absolute top-0 bottom-0 right-0 left-0 m-auto w-[87%] flex items-center flex-row gap-4 '>
                   
                  <div className='aboutussec2-content-leftdiv text-white flex flex-col gap-7 ' >
                    <div> <img src={quotes} alt="" /></div>
                        
                         <h1 className='text-5xl font-bold'>This involves designing a building or structure that is Functional</h1>
                         <p className='text-lg'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className='aboutussec2-content-rightdiv'>
                       <img src={backdropimage} alt="" className=' w-96  ' />
                   </div> 
         </div>
    </div>
  )
}

export default Backdrop
