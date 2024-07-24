import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import homebackground from '../../assets/homepage-bg.png'
import homearrow from '../../assets/long-arrow-right-home.png'
import compassdrafting from '../../assets/compass-drafting.png'
import penruler from '../../assets/pen-ruler.png'
import persondigging from '../../assets/person-digging.png'


import 'aos/dist/aos.css'
import AOS from 'aos';

const Home = () => {
  
  useEffect(()=>{
    AOS.init({duration:2000})
 },[]);


  return (
    <>
      <div className=' relative animate-fadeIn' id='Home' >
        <img src={homebackground} alt="" />
        <div className=' absolute top-0 w-full my-4'>
          <Navbar />
        </div>

         <div className='homecontent-center absolute top-80 left-28 flex gap-7 flex-col '>
           <h1 className='homecontent-center-line font-bold text-8xl text-white' data-aos="fade">SARASWATI</h1>
           <h3  className='homecontent-center-line font-bold text-4xl text-white' data-aos="fade" >Consultancy & Constructions</h3>
           <p className='homecontent-center-line text-4xl text-white' data-aos="fade">Building a Better Tomorrow</p>
           <button className='ourservices-button flex items-center gap-4 font-bold text-2xl bg-[#FFFFFF] max-w-max p-6 px-16 rounded-3xl ' data-aos="slide-right">Our Services <img src={homearrow} alt="" /></button>
         </div>

         <div className='homecontent-base absolute bottom-0 right-32 flex justify-center items-center gap-40 bg-black text-white px-20 h-40 rounded-t-3xl ' >    
            <div className='homecontent-base-individual flex gap-3 items-center' data-aos="slide-up"> 
              <img src={compassdrafting} alt="" className=' w-12 h-12 ' />
              <div>
                 <h1 className=' text-3xl font-bold'>Construction</h1>
                  <p className=' text-2xl'>Lorem ipsum dolor</p>
              </div>  
            </div>
            <div className='homecontent-base-individual flex  gap-3 items-center' data-aos="slide-up"> 
              <img src={penruler} alt="" className=' w-12 h-12 ' />
              <div>
                 <h1 className=' text-3xl font-bold'>Consultancy</h1>
                  <p className=' text-2xl'>Lorem ipsum dolor</p>
              </div>  
            </div>
            <div className='homecontent-base-individual flex  gap-3 items-center' data-aos="slide-up"> 
              <img src={persondigging} alt="" className=' w-12 h-12 ' />
              <div>
                 <h1 className=' text-3xl font-bold'>Contractor</h1>
                  <p className=' text-2xl'>Lorem ipsum dolor</p>
              </div>  
            </div>
         </div>
      </div>
    </>

  )
}

export default Home
