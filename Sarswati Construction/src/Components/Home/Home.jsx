import React from 'react'
import Navbar from '../Navbar/Navbar'
import homebackground from '../../assets/homepage-bg.png'
import homearrow from '../../assets/long-arrow-right-home.png'
import compassdrafting from '../../assets/compass-drafting.png'
import penruler from '../../assets/pen-ruler.png'
import persondigging from '../../assets/person-digging.png'

import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight'


import AnchorLink from 'react-anchor-link-smooth-scroll'
import Headroom from 'react-headroom'


const Home = () => {

  return (
    <>
      <div className=' relative animate-fadeIn' id='Home' >
        <img src={homebackground} alt="" className=' w-[100%]' />
        <div className=' absolute top-0 w-full my-4'>
          <Headroom >
          <Navbar />
          </Headroom>
          
        </div>
        <div className='homecontent-center absolute top-80 left-28 flex gap-7 flex-col max-2xl:top-52  max-xl:top-44 max-xl:gap-4  max-lg:gap-2 max-md:top-32 max-md:left-20 max-sm:top-24'>
         <AnimateLeftRight direction='left' delay={0.2}  >
          <h1 className='homecontent-center-line font-bold text-8xl text-white max-2xl:text-8xl max-xl:text-6xl max-lg:text-4xl max-md:text-2xl max-sm:hidden' > SARASWATI</h1>
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.4} >
          <h3 className='homecontent-center-line font-bold text-4xl text-white max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:hidden'  >Consultancy & Constructions</h3>
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.6} >
          <p className='homecontent-center-line text-4xl text-white max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:hidden' >Building a Better Tomorrow</p>
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.8} >
          <AnchorLink href='#RoseAvenue' className='anchorlink flex items-center gap-4'> <button className='ourservices-button flex items-center gap-4 font-bold text-2xl bg-[#FFFFFF] max-w-max p-6 px-16 rounded-3xl max-2xl:p-3 max-2xl:px-9 max-lg:text-[15px] max-lg:p-[2px] max-lg:px-5 max-md:text-[12px] max-md:p-[1px] max-md:px-2 max-sm:hidden'>Our Service <img src={homearrow} alt="" className='max-md:h-2' /></button> </AnchorLink>
          </AnimateLeftRight>
        </div>

   

        <div className='homecontent-base absolute bottom-0  right-32 flex justify-center items-center gap-40 bg-black text-white px-20 py-4  rounded-t-3xl max-2xl:right-6   max-xl:h-24 max-xl:right-6 max-xl:gap-20 max-lg:h-[55px] max-md:h-[48px] max-md:gap-11 max-sm:relative max-sm:rounded-none max-sm:right-0 max-sm:gap-6 max-sm:flex-col max-sm:h-auto max-sm:px-0' >
          
          <div className='homecontent-base-individual flex gap-3 items-center  ' >
            <img src={compassdrafting} alt="" className=' w-12 h-12 max-xl:h-10 max-xl:w-10 max-lg:h-8 max-lg:w-8 max-md:w-6 max-md:h-6 max-sm:w-12 max-sm:h-12' />
            <div>
              <h1 className=' text-3xl font-bold max-2xl:text-2xl max-lg:text-xl max-md:text-[15px] max-sm:text-4xl '>Construction</h1>
              <p className=' text-2xl max-2xl:text-xl max-lg:text-xs max-md:text-[10px] max-sm:text-xl '>Lorem ipsum dolor</p>
            </div>
          </div>

          <div className='homecontent-base-individual flex  gap-3 items-center' >
            <img src={penruler} alt="" className=' w-12 h-12  max-xl:h-10 max-xl:w-10 max-lg:h-8 max-lg:w-8 max-md:w-6 max-md:h-6 max-sm:w-12 max-sm:h-12' />
            <div>
              <h1 className=' text-3xl font-bold max-2xl:text-2xl max-lg:text-xl max-md:text-[15px] max-sm:text-4xl '>Consultancy</h1>
              <p className=' text-2xl max-2xl:text-xl max-lg:text-xs max-md:text-[10px] max-sm:text-xl  '>Lorem ipsum dolor</p>
            </div>
          </div>

          <div className='homecontent-base-individual flex  gap-3 items-center  ' >
            <img src={persondigging} alt="" className=' w-12 h-12 max-xl:h-10 max-xl:w-10 max-lg:h-8 max-lg:w-8 max-md:w-6 max-md:h-6 max-sm:w-12 max-sm:h-12' />
            <div>
              <h1 className=' text-3xl font-bold max-2xl:text-2xl max-lg:text-xl max-md:text-[15px] max-sm:text-4xl '>Contractor</h1>
              <p className=' text-2xl max-2xl:text-xl max-lg:text-xs max-md:text-[10px] max-sm:text-xl   '>Lorem ipsum dolor</p>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Home
