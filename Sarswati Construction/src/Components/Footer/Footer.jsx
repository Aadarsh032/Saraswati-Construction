import React from 'react'
import footerbackground from '../../assets/Sarswati Backdrop 1.png'
import footerbuilderlogo from '../../assets/Builder Logo Black 1.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import caretright from '../../assets/caret-right.png'
import blackphonelogo from '../../assets/phone-square.png'
import envelope from '../../assets/envelope.png'
import pinterest from '../../assets/pinterest.png'
import instagram from '../../assets/instagram.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Footer = () => {
  return (
    <>
    
    <div className='footer-main relative  h-[602px] max-md:h-full max-md:bg-[#DF7F8E]  '>
      <img src={footerbackground} className='h-[602px] max-md:hidden' alt="" />
      <div className='footer-overlay flex flex-col absolute top-0 mt-[130px] max-md:mt-0 max-md:pt-4 w-[100%] max-md:realtive max-md:static  max-md:justify-self-center '>
        <div className='footer-overlay-top grid grid-cols-4  m-auto gap-4  px-6 max-xl:gap-0 max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:gap-7 max-md:mb-6 '>

          <div className='footer-overlay-top1  flex flex-col gap-[25px] '>
            <img src={footerbuilderlogo} alt="" className='footerlogo-img w-[287px] h-[129px] max-xl:w-60 max-xl:h-32 max-md:m-auto' />
            <p className='slogan text-[17px] max-xl:text-[15px] '>Saraswati Constructions is dedicated to building a brighter future</p>
            <p className='email text-[17px] max-xl:text-[15px] flex gap-[15px] items-center max-md:justify-center ' ><img src={envelope} alt="" className='h-[19px] w-5' /> <p>Hello@Email.com</p> </p>
            <p className='phonenumber text-[17px] max-xl:text-[15px] flex gap-[15px] items-center max-md:justify-center'><img src={blackphonelogo} alt="" className='w-[18px] h-5' /> <p>+62 123 456 789</p></p>
          </div>

          <div className='footer-overlay-top2  list-none flex flex-col gap-[25px] max-xl:gap-[15px] items-center '>
            <h1 className='heading font-bold text-[25px]'>Quick Links</h1>
            <ul className='flex flex-col gap-[15px]'>
              <li className='flex gap-2 items-center max-md:justify-center' ><img src={caretright} className='w-[10px] h-[13px]' alt="" /><AnchorLink href='#Home' className='anchorlink'>Home</AnchorLink></li>
              <li className='flex gap-2 items-center max-md:justify-center'><img src={caretright} className='w-[10px] h-[13px]' alt="" /><AnchorLink href='#AboutUs' className='anchorlink'>About Us</AnchorLink>  </li>
              <li className='flex gap-2 items-center max-md:justify-center'><img src={caretright} className='w-[10px] h-[13px]' alt="" /> <AnchorLink href='#RoseAvenue' className='anchorlink'>Our Service</AnchorLink> </li>
              <li className='flex gap-2 items-center max-md:justify-center'><img src={caretright} className='w-[10px] h-[13px]' alt="" /> <AnchorLink href='#Projects' className='anchorlink'>Project</AnchorLink>  </li>
            </ul>
          </div>

          <div className='footer-overlay-top3  list-none flex flex-col gap-[25px] items-center '>
            <h1 className='heading font-bold text-[25px]'>Useful Links</h1>
            <ul className='flex flex-col gap-[15px] '>
              <li className='flex gap-2 items-center max-md:justify-center' ><img src={caretright} className='w-[10px] h-[13px]' alt="" /> Privacy Policy</li>
              <li className='flex gap-2 items-center max-md:justify-center' ><img src={caretright} className='w-[10px] h-[13px]' alt="" />Disclaimer </li>
              <li className='flex gap-2 items-center max-md:justify-center' ><img src={caretright} className='w-[10px] h-[13px]' alt="" /> Terms & Condition </li>
              <li className='flex gap-2 items-center max-md:justify-center' ><img src={caretright} className='w-[10px] h-[13px]' alt="" /> GDPR </li>
            </ul>
          </div>

          <div className='footer-overlay-top4  flex flex-col gap-[25px] '>
            <h1 className='heading font-bold text-[25px] '>Follow Us</h1>
            <p className='slogan text-[17px]'>Reach out to us anytime, we're here at:</p>
            <div className='socialmedia-logo flex gap-3 max-md:justify-center '> <img src={facebook} alt="" /><img src={twitter} alt="" /><img src={instagram} alt="" /><img src={pinterest} alt="" /> </div>
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
