import React, { useEffect } from 'react'
import backdrop from '../../assets/Sarswati Backdrop 1.png'
import quotes from '../../assets/quote-left.png'
import backdropimage from '../../assets/Rectangle 1.png'
import AnimateUpDown from '../Animate/AnimateUpDown/AnimateUpDown'



const Backdrop = () => {



  return (
 
    <>

    <div className='aboutussec2-backdrop h-[400px] relative max-2xl:h-[350px] max-lg:h-[300px] max-md:bg-[#DF7F8E] max-md:static max-md:h-fit  '>
      <div className='aboutussec2-content absolute top-0 inset-0  flex items-center  justify-evenly max-md:relative  max-md:flex-col-reverse max-md:gap-9 max-md:py-10 '>
        
        <div className='backdrop-leftbox w-3/5 grid grid-cols-3 gap-7 max-xl:w-3/4 max-xl:gap-4 max-md:w-full max-md:px-7 max-sm:grid-cols-1 '>
        
        <div className='left bg-white shadow-lg rounded-2xl p-7 max-2xl:p-5 max-xl:p-4 max-lg:p-2 max-md:p-4'>
          <h1 className='heading text-center font-bold text-2xl max-lg:text-lg max-sm:text-xl'>Who We Are</h1>
          <p className='content  text-center max-2xl:text-sm  max-lg:text-xs max-sm:text-sm  '>Saraswati Consultancy & Constructions is a top real estate developer committed to high-quality, sustainable living spaces, leveraging expert professionals to deliver innovative, top-standard projects in the real estate market.</p>
        </div>
        <div className='middle bg-white shadow-lg  rounded-2xl p-7 max-2xl:p-5 max-xl:p-4 max-lg:p-2 max-md:p-4'>
        <h1 className='heading  text-center font-bold text-2xl max-lg:text-lg max-sm:text-xl  '>Our Vision</h1>
        <p className='content  text-center max-2xl:text-sm max-lg:text-xs max-sm:text-sm  '>Our vision is to become a leading name in the construction industry, known for our commitment to excellence, innovation, and customer satisfaction. We aim to create communities that enrich lives and foster growth.</p>
        </div>
        <div className='right bg-white shadow-lg  rounded-2xl p-7 max-2xl:p-5 max-xl:p-4 max-lg:p-2 max-md:p-4'>
        <h1 className='heading text-center font-bold text-2xl max-lg:text-lg max-sm:text-xl  '>Our Mission</h1>
        <p className='content  text-center max-2xl:text-sm max-lg:text-xs max-sm:text-sm '>We design and build sustainable, high-quality residential and commercial properties, exceeding clients' expectations. Our focus is on delivering projects on time, within budget, and with exceptional craftsmanship.</p>
        </div>

        </div>

        <div className='backdrop-right-box w-1/4 flex items-center justify-center max-xl:w-1/5 max-md:w-full '>
             <img src={backdropimage} alt="" className='w-[70%] max-2xl:w-[70%] max-xl:w-fit' />
        </div>

      </div>

    </div>

    <style jsx>{`
        .aboutussec2-backdrop {
          background-image: url(${backdrop});
          background-repeat: repeat;
        }
      `}</style>

    </>
  )
}

export default Backdrop




