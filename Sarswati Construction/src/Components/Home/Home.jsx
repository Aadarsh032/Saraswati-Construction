import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
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
        <img src={homebackground} alt="" className=' w-[100%] h-[100vh] object-cover ' />
        <div className=' absolute top-0 w-full my-4 '>
          <Headroom >
          <Navbar />
          </Headroom>
          
        </div>
        <div className='homecontent-center absolute top-80 left-28 flex gap-7 flex-col max-sm:left-6 max-sm:top-96 max-md:left-10'>
         <AnimateLeftRight direction='left' delay={0.2}  >
          <h1 className='homecontent-center-line1 font-bold text-8xl text-white max-sm:text-6xl ' > SARASWATI</h1>
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.4} >
          <h3 className='homecontent-center-line2 font-bold text-4xl text-white max-sm:text-3xl '  >Consultancy & Constructions</h3>
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.6} >
          <p className='homecontent-center-line3 text-4xl text-white max-sm:text-3xl  ' >Building a Better Tomorrow</p>
          </AnimateLeftRight>
          <AnimateLeftRight direction='left' delay={0.8} >
          <AnchorLink href='#RoseAvenue' className='anchorlink flex items-center gap-4'> <button className='ourservices-button flex items-center gap-4 font-bold text-2xl bg-[#FFFFFF] max-w-max p-6 px-16 rounded-3xl max-sm:p-4 max-sm:px-8   '>Our Service <img src={homearrow} alt="" className='max-md:h-2' /></button> </AnchorLink>
          </AnimateLeftRight>
        </div>

   

        <div className='homecontent-base absolute bottom-0  w-full
         flex justify-center gap-4 bg-black text-white px-20 py-6  rounded-t-3xl    max-xl:h-fit  max-xl:gap-20  max-lg:right-0 max-lg:w-full max-lg:px-2 max-lg:gap-7   max-md:px-1   max-sm:relative max-sm:rounded-none max-sm:right-0 max-sm:gap-6 max-sm:flex-col max-sm:h-auto max-sm:px-0' >
          
          <div className='homecontent-base-individual flex gap-3 items-center max-sm:flex-col ' >
            <img src={compassdrafting} alt="" className=' w-12 h-12 max-xl:h-10 max-xl:w-10  max-sm:w-12 max-sm:h-12' />
            <div className='max-sm:text-center'>
              <h1 className=' text-3xl font-bold max-2xl:text-2xl max-md:text-xl max-sm:text-4xl '>Construction</h1>
              <p className=' text-2xl max-2xl:text-xl  max-md:text-base max-lg:text-lg max-sm:text-xl '>Delivering projects with precision and excellence</p>
            </div>
          </div>

          <div className='homecontent-base-individual flex  gap-3 items-center max-sm:flex-col ' >
            <img src={penruler} alt="" className=' w-12 h-12  max-xl:h-10 max-xl:w-10  max-sm:w-12 max-sm:h-12' />
            <div className='max-sm:text-center'>
              <h1 className=' text-3xl font-bold max-2xl:text-2xl  max-md:text-xl max-sm:text-4xl max-sm:text-center '>Consultancy</h1>
              <p className=' text-2xl max-2xl:text-xl  max-md:text-base max-sm:text-xl  '>Expert guidance for your construction needs</p>
            </div>
          </div>

          <div className='homecontent-base-individual flex  gap-3 items-center max-sm:flex-col  ' >
            <img src={persondigging} alt="" className=' w-12 h-12 max-xl:h-10 max-xl:w-10   max-sm:w-12 max-sm:h-12' />
            <div className='max-sm:text-center'>
              <h1 className=' text-3xl font-bold max-2xl:text-2xl max-md:text-xl  max-sm:text-4xl  max-sm:text-center'>Architecture</h1>
              <p className=' text-2xl max-2xl:text-xl  max-md:text-base max-sm:text-xl   '>Crafting unique and functional designs</p>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Home
