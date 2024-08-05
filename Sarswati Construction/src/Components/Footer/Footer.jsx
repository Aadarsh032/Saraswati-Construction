import React from 'react'
import footerbackground from '../../assets/Sarswati Backdrop 1.png'
import footerbuilderlogo from '../../assets/Builder Logo Black 1.png'

import facebook from '../../assets/facebook.png'
import caretright from '../../assets/caret-right.png'
import blackphonelogo from '../../assets/phone-square.png'
import envelope from '../../assets/envelope.png'


import facebookwhite from '../../assets/facebook-white.png'
import caretwhiteright from '../../assets/caret-right-white.png'
import instagramwhite from '../../assets/instagram-white.png'
import phonewhite from '../../assets/phone-white.png'
import whitelogo from '../../assets/Logo White.png'
import mailwhite from '../../assets/mail-white.png'



import instagram from '../../assets/instagram.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Footer = () => {
  return (
    <>

      <div className='footer-main relative  h-[602px] max-md:h-full max-md:bg-[#DF7F8E]  '>
        <img src={footerbackground} className='h-[602px] max-md:hidden' alt="" />
        <div className='footer-overlay flex flex-col  text-white absolute top-0 mt-[130px] max-md:mt-0 max-md:pt-4 w-[100%] max-md:realtive max-md:static  max-md:justify-self-center '>
          <div className='footer-overlay-top grid grid-cols-4  gap-4 w-[90%] m-auto max-lg:w-[98%]  px-6 max-xl:gap-0 max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:gap-7 max-md:mb-6 '>

            <div className='footer-overlay-top1  flex flex-col gap-[25px]   '>
              <img src={whitelogo} alt="" className='footerlogo-img w-[287px] h-[129px] max-xl:w-60 max-xl:h-32 max-md:m-auto' />
              <p className='slogan text-[17px] max-xl:text-[15px] '>Saraswati Constructions is dedicated to building a brighter future</p>
              <p className='email text-[17px] max-xl:text-[15px] flex gap-[15px] items-center max-md:justify-center ' ><img src={mailwhite} alt="" className='h-[19px] w-5' /> <p>Hello@Email.com</p> </p>
              <p className='phonenumber text-[17px] max-xl:text-[15px] flex gap-[15px] items-center max-md:justify-center'><img src={phonewhite} alt="" className='w-[18px] h-5' /> <p>+62 123 456 789</p></p>
            </div>

            <div className='footer-overlay-top2  list-none flex flex-col gap-[25px] max-xl:gap-[15px] items-center '>
              <h1 className='heading font-bold text-[25px]'>Quick Links</h1>
              <ul className='flex flex-col gap-[15px]'>
                <li className='flex gap-2 items-center ' ><img src={caretwhiteright} className='w-[20px] h-[20px]' alt="" /><AnchorLink href='#Home' className='anchorlink'>Home</AnchorLink></li>
                <li className='flex gap-2 items-center '><img src={caretwhiteright} className='w-[20px] h-[20px]' alt="" /><AnchorLink href='#AboutUs' className='anchorlink'>About Us</AnchorLink>  </li>
                <li className='flex gap-2 items-center '><img src={caretwhiteright} className='w-[20px] h-[20px]' alt="" /> <AnchorLink href='#RoseAvenue' className='anchorlink'>Our Service</AnchorLink> </li>
                <li className='flex gap-2 items-center'><img src={caretwhiteright} className='w-[20px] h-[20px]' alt="" /> <AnchorLink href='#Amenities' className='anchorlink'>Amenities</AnchorLink>  </li>
              </ul>
            </div>

            <div className='footer-overlay-top3  list-none flex flex-col gap-[25px] items-center '>
              <h1 className='heading font-bold text-[25px]'>Useful Links</h1>
              <ul className='flex flex-col gap-[15px] '>
                <li className='flex gap-2 items-center ' ><img src={caretwhiteright} className='w-[20px] h-[20px]' alt="" /> Privacy Policy</li>
                <li className='flex gap-2 items-center' ><img src={caretwhiteright} className='w-[20px] h-[20px]' alt="" />Disclaimer </li>
                <li className='flex gap-2 items-center ' ><img src={caretwhiteright} className='w-[20px] h-[20px]'  alt="" /> Terms & Condition </li>
                <li className='flex gap-2 items-center' ><img src={caretwhiteright} className='w-[20px] h-[20px]'  alt="" /> GDPR </li>
              </ul>
            </div>

            <div className='footer-overlay-top4  flex flex-col gap-[25px] '>
              <h1 className='heading font-bold text-[25px] '>Follow Us</h1>
              <p className='slogan text-[17px]'>Reach out to us anytime, we're here at:</p>
              <div className='socialmedia-logo flex gap-3 max-md:justify-center items-center '>
                <a href="https://www.facebook.com/sarswatibuilders/?_rdr" target='_blank' ><img src={facebookwhite} alt="" /></a>
                <a href="https://www.instagram.com/sarswati_builders/" target='_blank' ><img src={instagramwhite} alt="" /></a>
              </div>

            </div>

          </div>



        </div>
        <div className='footer-overlay-bottom absolute bottom-0 w-[100%] bg-[#000000] bg-opacity-50 text-[#FFFFFF] flex justify-center h-[89px] items-center  max-md:relative '>
          <h1>All right Reserved - <a href="https://theroguepixxel.com/" target='_blank' className='footer_links hover:text-[#36b16d]'>The Rogue Pixxel</a></h1>
        </div>
      </div>





    </>
  )
}

export default Footer
