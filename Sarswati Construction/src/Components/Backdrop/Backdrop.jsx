import React, { useEffect } from 'react'
import backdrop from '../../assets/Sarswati Backdrop 1.png'
import quotes from '../../assets/quote-left.png'
import backdropimage from '../../assets/Rectangle 1.png'
import AnimateUpDown from '../Animate/AnimateUpDown/AnimateUpDown'



const Backdrop = () => {



  return (
    <div className='aboutussec2-backdrop relative max-md:bg-[#DF7F8E] max-md:py-5  '>
      <img src={backdrop} alt="" className='max-md:hidden' />

      <div className='aboutussec2-content absolute top-0 inset-0 grid grid-cols-3 gap-4  w-fit items-center mx-8  max-lg:gap-2 max-md:relative max-md:flex max-md:flex-col max-md:gap-5 '>
        
        <div className='left bg-white shadow-lg h-3/4 rounded-3xl flex flex-col justify-center gap-4 px-5 max-xl:gap-1 max-xl:px-2 max-lg:h-5/6 max-lg:gap-0 max-md:h-fit  max-md:w-[85%] max-md:p-6 '>
          <h1 className='heading text-4xl text-center font-bold max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-3xl '>Who We Are</h1>
          <p className='content text-2xl text-center max-2xl:text-lg max-xl:text-base max-lg:text-xs max-md:text-lg '>Saraswati Consultancy & Constructions is a premier real estate development company dedicated to crafting high-quality living spaces. With a team of seasoned professionals, we bring innovative solutions to the real estate market, ensuring our projects meet the highest standards of quality and sustainability.</p>
        </div>
        <div className='middle bg-white shadow-lg h-3/4 rounded-3xl flex flex-col justify-center gap-4 px-5 max-xl:gap-1 max-xl:px-2 max-lg:h-5/6 max-lg:gap-0  max-md:h-fit  max-md:w-[85%] max-md:p-6   '>
        <h1 className='heading text-4xl text-center font-bold max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-3xl '>Our Vision</h1>
        <p className='content text-2xl text-center max-2xl:text-lg max-xl:text-base max-lg:text-xs  max-md:text-lg '>Our vision is to become a leading name in the construction industry, known for our commitment to excellence, innovation, and customer satisfaction. We aim to create communities that enrich lives and foster growth.</p>
        </div>
        <div className='right bg-white shadow-lg h-3/4 rounded-3xl flex flex-col justify-center gap-4 px-5 max-xl:gap-1 max-xl:px-2 max-lg:h-5/6 max-lg:gap-0  max-md:h-fit  max-md:w-[85%] max-md:p-6  '>
        <h1 className='heading text-4xl text-center font-bold max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-3xl'>Our Mission</h1>
        <p className='content text-2xl text-center max-2xl:text-lg max-xl:text-base max-lg:text-xs  max-md:text-lg '>Our mission is to design and build sustainable, high-quality residential and commercial properties that exceed our clients' expectations. We focus on delivering projects on time, within budget, and with the highest level of craftsmanship.</p>
        </div>

      </div>

    </div>
  )
}

export default Backdrop
