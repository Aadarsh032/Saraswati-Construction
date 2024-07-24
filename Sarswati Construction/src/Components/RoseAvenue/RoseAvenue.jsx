import React from 'react'
import backdrop from '../../assets/roseavenue-backdrop.png'
import watericon from '../../assets/water_icon.png'
import christmastree from '../../assets/christmas tree_icon.png'
import cityicon from '../../assets/city_icon.png'
import whitearrow from '../../assets/long-arrow-right-white.png'

const RoseAvenue = () => {
  return (
    <div id='RoseAvenue' className='roseavenue-maindiv bg-[#F5F5F5] relative h-[1146px]'>
        <img src={backdrop} alt="" className='backdropimage' />
        <div className='roseavenue-bottom flex flex-row pl-24 absolute top-56 ' >
                  
                   {/* bottom left box */}

             <div className='roseavenue-bottom-left bg-white rounded-3xl w-[491px] h-[815px] flex flex-col items-center gap-5 justify-center'>
                  <div className='top w-[411px]'>
                     <img src={cityicon} alt="" className=' w-[58.56px] h-[58.56px] mb-6' />
                     <h1 className='heading font-bold text-2xl'>Prime Location</h1>
                     <p className='paragraph font-medium text-xl'>Strategically situated in a prime area of Ranchi, Rose Avenue provides unparalleled convenience and connectivity.</p>
                  </div>
                  <div className='middle w-[411px]'>
                  <img src={christmastree} alt="" className=' w-[58.56px] h-[58.56px] mb-6' />
                     <h1 className='heading font-bold text-2xl'>Calm and Greenery Neighbourhood</h1>
                     <p className='paragraph font-medium text-xl'>Surrounded by lush greenery, this tranquil neighborhood offers a refreshing escape from the city's hustle and bustle.</p>
                  </div>
                  <div className='bottom w-[411px]'>
                  <img src={watericon} alt="" className=' w-[58.56px] h-[58.56px] mb-6' />
                     <h1 className='heading font-bold text-2xl'>Swimming Pool for Your Relaxation</h1>
                     <p className='paragraph font-medium text-xl'>At Rose Avenue, life extends beyond the walls of your home. Dive into the sparkling infinity pool, a perfect retreat for relaxation and leisure.</p>
                  </div>
             </div>
               
               {/* bottom right box */}
              
             <div className='roseavenue-bottom-right w-[1260px] h-[720px] ml-12 mt-72'>
                    
                    <div className='roseavenue-bottom-right-inside w-[1260px] h-[389px] flex flex-col gap-3'>
                          <h1 className='roseavenue-mainheading font-bold text-5xl text-[#DF7F8E]' >ROSE AVENUE</h1>
                          <h3 className='roseavenue-slogan font-semibold text-[27px]'>Where your legacy finds a home</h3>
                          <p className='description text-xl'>Living designed with a passion towards creating an Experience, every house is created with your lifestyle as a blueprint. A standard of living that entwines itself smoothly with the ways of nature, while working towards a distinctly luxurious way of life.
                              <br />
                              <br />
                              Presenting multi storied building offering 2/3/4 BHK flats.
                              <br />
                              <br />
                              The delightful and open areas create a community atmosphere, the project intends to create a picture perfect home for you.
                               <br /><br />
                               With a strong project management and real estate development experience of its developers, Rose Avenue will witness application of the latest concepts of architecture
                          </p>
                          <button className='downloadbrochure-btn font-bold text-[16px] bg-black px-9 py-3 flex flex-row items-center gap-2 rounded-3xl max-w-max text-[#FFFFFF] mt-9' >Download Button<img src={whitearrow} alt="" /></button>
                            
                    </div>

             </div>


        </div>
    </div>
  )
}

export default RoseAvenue
