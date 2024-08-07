import React, { useEffect } from 'react'

import backdrop from '../../assets/homepage-bg.jpg'
import watericon from '../../assets/water_icon.png'
import christmastree from '../../assets/christmas tree_icon.png'
import cityicon from '../../assets/city_icon.png'
import whitearrow from '../../assets/long-arrow-right-white.png'
import roseavenuebrochure from '../../assets/Rose Avenue.pdf'


import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight'

const RoseAvenue = () => {


  // h-[1146px]

  return (
    <>

      <div className='roseavenue-mastercontainer pb-[800px] bg-[#F5F5F5] max-lg:pb-[600px] max-md:pb-[500px]  max-sm:pb-[1500px] '>
        <div id='RoseAvenue' className='roseavenue-maindiv h-[450px] max-2xl:h-[400px] max-xl:h-[300px] max-md:h-[200px] relative max-sm:static  '>

          <div className='roseavenue-bottom flex absolute top-56 justify-evenly max-xl:top-36  max-lg:top-24 max-md:top-14 max-sm:relative max-sm:flex-col' >

            {/* bottom left box */}

            <div className='roseavenue-bottom-left bg-white rounded-3xl w-[25%] px-7 py-5 flex flex-col items-center justify-evenly max-md:w-[30%] max-sm:w-[85%] max-sm:m-auto max-sm:py-5  max-sm:gap-5'>
              <div className='top    ' >
                <AnimateLeftRight direction='left' >
                  <img src={cityicon} alt="" className=' w-[58.56px] h-[58.56px] mb-6 max-2xl:w-[40px] max-2xl:h-[40px] max-2xl:mb-3 max-xl:w-[30px] max-xl:h-[30px] max-xl:mb-1 max-sm:h-12 max-sm:w-12 ' />
                  <h1 className='heading font-bold text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base max-md:text-sm  max-sm:text-2xl  '>Prime Location</h1>
                  <p className='paragraph font-medium text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm max-md:text-xs max-sm:text-xl'>Strategically situated in a prime area of Ranchi, Rose Avenue provides unparalleled convenience and connectivity.</p>
                </AnimateLeftRight>
              </div>
              <div className='middle ' >
                <AnimateLeftRight direction='left' >
                  <img src={christmastree} alt="" className=' w-[58.56px] h-[58.56px] mb-6 max-2xl:w-[40px] max-2xl:h-[40px] max-2xl:mb-3 max-xl:w-[30px] max-xl:h-[30px] max-xl:mb-1 max-sm:h-12 max-sm:w-12 ' />
                  <h1 className='heading font-bold text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base max-md:text-sm max-sm:text-2xl  '>Calm and Greenery Neighbourhood</h1>
                  <p className='paragraph font-medium text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm max-md:text-xs max-sm:text-xl' >Surrounded by lush greenery, this tranquil neighborhood offers a refreshing escape from the city's hustle and bustle.</p>
                </AnimateLeftRight>
              </div>
              <div className='bottom ' >
                <AnimateLeftRight direction='left' >
                  <img src={watericon} alt="" className=' w-[58.56px] h-[58.56px] mb-6 max-2xl:w-[40px] max-2xl:h-[40px] max-2xl:mb-3 max-xl:w-[30px] max-xl:h-[30px] max-xl:mb-1 max-sm:h-12 max-sm:w-12' />
                  <h1 className='heading font-bold text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base max-md:text-sm max-sm:text-2xl  '>Swimming Pool for Your Relaxation</h1>
                  <p className='paragraph font-medium text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm max-md:text-xs max-sm:text-xl'>At Rose Avenue, life extends beyond the walls of your home. Dive into the sparkling infinity pool, a perfect retreat for relaxation and leisure.</p>
                </AnimateLeftRight>
              </div>
            </div>

            {/* bottom right box */}
            {/* max-2xl:w-[1005px]  max-xl:w-[845px] */}
            {/* w-[1220px] */}

            <div className='roseavenue-bottom-right w-[60%] mt-60 max-md:mt-40 max-sm:mt-10 max-sm:w-full '>

              <div className='roseavenue-bottom-right-inside max-sm:px-3  '>
                <h1 className='roseavenue-mainheading font-bold text-5xl text-[#DF7F8E] max-2xl:text-4xl max-xl:text-2xl max-lg:text-xl max-sm:text-center max-sm:text-4xl ' >ROSE AVENUE</h1>
                <h3 className='roseavenue-slogan font-semibold text-[27px] max-2xl:text-2xl max-xl:text-xl max-lg:text-lg max-sm:text-center max-sm:text-2xl '>Where your legacy finds a home</h3>
                <p className='description text-xl max-2xl:text-lg  max-xl:text-base  max-lg:text-sm  max-md:text-xs max-sm:text-center max-sm:text-xl  '>
                  Nestled in the serene suburbs of Pundag, Rose Avenue is your testament to luxury and elegance. The project features spacious apartments, lush green surroundings, and top-notch amenities, providing an ideal living experience. With excellent connectivity to major city hubs, Rose Avenue is the perfect place for your family to grow and thrive.
                  <br />
                  <br />
                  Living designed with a passion towards creating an Experience, every house is created with your lifestyle as a blueprint. A standard of living that entwines itself smoothly with the ways of nature, while working towards a distinctly luxurious way of life.
                  <br />
                  <br />
                  Presenting multi storied building offering 2/3/4 BHK flats.
                  <br />
                  <br />
                  The delightful and open areas create a community atmosphere, the project intends to create a picture perfect home for you.
                  <br /><br />
                  With a strong project management and real estate development experience of its developers, Rose Avenue will witness application of the latest concepts of architecture
                </p>
                <button className='downloadbrochure-btn font-bold text-[16px] bg-black px-9 py-3 flex flex-row items-center gap-2 rounded-3xl max-w-max text-[#FFFFFF] mt-9 max-xl:text-sm max-xl:mt-4 max-xl:px-4 max-xl:py-2 max-lg:px-2 max-lg:py-1 max-lg:mt-2  max-sm:text-xl max-sm:px-4 max-sm:py-2 max-sm:m-auto max-sm:mt-3 ' ><a href={roseavenuebrochure} download="Rose Avenue.pdf">Download Brochure</a><img src={whitearrow} alt="" /></button>
              </div>

            </div>


          </div>
        </div>
      </div>

      <style jsx>{`
             .roseavenue-maindiv {
               background-image: url(${backdrop});            
               background-attachment: fixed;
               background-position: center;
                }

                  @media (max-width: 500px) {
                 .roseavenue-mastercontainer {
                   padding-bottom: 2000px;
                  }
              }
           `}</style>

    </>
  )
}

export default RoseAvenue


// background-position: center;
// background-repeat: no-repeat;
// background-size: cover;
