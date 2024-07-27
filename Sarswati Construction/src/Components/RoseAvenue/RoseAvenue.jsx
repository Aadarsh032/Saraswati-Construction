import React, { useEffect } from 'react'
import backdrop from '../../assets/roseavenue-backdrop.png'
import watericon from '../../assets/water_icon.png'
import christmastree from '../../assets/christmas tree_icon.png'
import cityicon from '../../assets/city_icon.png'
import whitearrow from '../../assets/long-arrow-right-white.png'


import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight'

const RoseAvenue = () => {
       

  // h-[1146px]

  return (
    <div id='RoseAvenue' className='roseavenue-maindiv bg-[#F5F5F5] relative pb-[700px] max-xl:pb-[550px] max-md:pb-[400px] max-sm:pb-[1350px] '>
        <img src={backdrop} alt="" className='backdropimage' />
        <div className='roseavenue-bottom flex flex-row pl-24 absolute top-56 max-xl:top-40 max-xl:pl-32 max-lg:top-28 max-lg:pl-20  max-md:pl-10 max-md:top-20 max-sm:flex-col max-sm:pl-0  ' >
                  
                   {/* bottom left box */}

             <div className='roseavenue-bottom-left bg-white p-5  rounded-3xl w-[491px] h-[815px] flex flex-col items-center gap-5 justify-center max-2xl:w-[350px] max-2xl:h-[740px] max-xl:w-[270px] max-xl:h-[660px] max-lg:w-[260px] max-lg:h-max  max-lg:pt-3 max-lg:pb-3 max-sm:m-auto '>
                  <div className='top w-[411px] max-2xl:w-[300px] max-xl:w-[230px] ' >
                  <AnimateLeftRight direction='left' >
                     <img src={cityicon} alt="" className=' w-[58.56px] h-[58.56px] mb-6 max-2xl:w-[40px] max-2xl:h-[40px] max-2xl:mb-3 max-xl:w-[30px] max-xl:h-[30px] max-xl:mb-1 ' />
                     <h1 className='heading font-bold text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base max-md:text-sm   '>Prime Location</h1>
                     <p className='paragraph font-medium text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm max-md:text-xs'>Strategically situated in a prime area of Ranchi, Rose Avenue provides unparalleled convenience and connectivity.</p>
                     </AnimateLeftRight>
                  </div>
                  <div className='middle w-[411px] max-2xl:w-[300px] max-xl:w-[230px]' >
                  <AnimateLeftRight direction='left' >
                     <img src={christmastree} alt="" className=' w-[58.56px] h-[58.56px] mb-6 max-2xl:w-[40px] max-2xl:h-[40px] max-2xl:mb-3 max-xl:w-[30px] max-xl:h-[30px] max-xl:mb-1' />
                     <h1 className='heading font-bold text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base max-md:text-sm  '>Calm and Greenery Neighbourhood</h1>
                     <p className='paragraph font-medium text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm max-md:text-xs'>Surrounded by lush greenery, this tranquil neighborhood offers a refreshing escape from the city's hustle and bustle.</p>
                     </AnimateLeftRight>
                  </div>
                  <div className='bottom w-[411px] max-2xl:w-[300px] max-xl:w-[230px]' >
                  <AnimateLeftRight direction='left' >
                     <img src={watericon} alt="" className=' w-[58.56px] h-[58.56px] mb-6 max-2xl:w-[40px] max-2xl:h-[40px] max-2xl:mb-3 max-xl:w-[30px] max-xl:h-[30px] max-xl:mb-1' />
                     <h1 className='heading font-bold text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base max-md:text-sm  '>Swimming Pool for Your Relaxation</h1>
                     <p className='paragraph font-medium text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm max-md:text-xs '>At Rose Avenue, life extends beyond the walls of your home. Dive into the sparkling infinity pool, a perfect retreat for relaxation and leisure.</p>
                     </AnimateLeftRight>
                  </div>
             </div>
               
               {/* bottom right box */}
               {/* max-2xl:w-[1005px]  max-xl:w-[845px] */}
               {/* w-[1220px] */}
              
             <div className='roseavenue-bottom-right h-[720px] ml-12 mt-72 max-2xl:mt-56 max-lg:mt-44 max-lg:ml-6 max-md:mt-28  max-sm:mt-10 max-sm:w-[80%] max-sm:flex max-sm:m-auto '>
                    
                    <div className='roseavenue-bottom-right-inside w-fit h-[389px] flex flex-col gap-3 max-2xl:w-[900px] max-2xl:gap-1 max-xl:w-[700px] max-lg:w-fit   '>
                          <h1 className='roseavenue-mainheading font-bold text-5xl text-[#DF7F8E] max-2xl:text-4xl max-xl:text-2xl max-lg:text-xl max-sm:text-center max-sm:text-4xl ' >ROSE AVENUE</h1>
                          <h3 className='roseavenue-slogan font-semibold text-[27px] max-2xl:text-2xl max-xl:text-xl max-lg:text-lg max-sm:text-center max-sm:text-2xl '>Where your legacy finds a home</h3>
                          <p className='description text-xl max-2xl:text-lg  max-xl:text-base  max-lg:text-sm  max-md:text-xs max-sm:text-center max-sm:text-xl  '>Living designed with a passion towards creating an Experience, every house is created with your lifestyle as a blueprint. A standard of living that entwines itself smoothly with the ways of nature, while working towards a distinctly luxurious way of life.
                              <br />
                              <br />
                              Presenting multi storied building offering 2/3/4 BHK flats.
                              <br />
                              <br />
                              The delightful and open areas create a community atmosphere, the project intends to create a picture perfect home for you.
                               <br /><br />
                               With a strong project management and real estate development experience of its developers, Rose Avenue will witness application of the latest concepts of architecture
                          </p>
                          <button className='downloadbrochure-btn font-bold text-[16px] bg-black px-9 py-3 flex flex-row items-center gap-2 rounded-3xl max-w-max text-[#FFFFFF] mt-9 max-xl:text-sm max-xl:mt-4 max-xl:px-4 max-xl:py-2 max-lg:px-2 max-lg:py-1 max-lg:mt-2  max-sm:text-xl max-sm:px-4 max-sm:py-2 max-sm:m-auto max-sm:mt-3 ' >Download Brochure<img src={whitearrow} alt="" /></button>  
                    </div>

             </div>


        </div>
    </div>
  )
}

export default RoseAvenue
