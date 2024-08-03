import React, { useEffect } from 'react'
import location_icon from '../../assets/location_icon.png'
import AnimateUpDown from '../Animate/AnimateUpDown/AnimateUpDown';


const Contact = () => {



     

    return (
        <div className='contact-maindiv  w-full bg-[#F5F5F5] flex justify-between max-md:flex-col max-md:gap-7 max-md:py-5 ' id='Contact'>
            <div className='contact-left  w-[33%] flex flex-col gap-[15px] justify-center pl-16 max-lg:gap-3  max-lg:w-fit max-md:w-full  max-md:pl-0 '>
                
                <div className='contact-leftinnerdiv w-4/5 flex flex-col gap-7 max-md:m-auto'>
                   

               
                <div className='contact-heading  h-[103px] flex flex-col gap-5 max-lg:gap-2 max-lg:-mb-5  max-md:m-auto max-md:text-center ' >
                    <h3 className='text-[26px] font-bold text-[#B96D79] max-xl:text-[21px] ' >Location</h3>
                    <h1 className=' font-bold text-[40px] max-xl:text-[30px]'>Distance Chart</h1>
                </div>
                <div className='contact-left-details font-medium text-[16px]  max-lg:text-[12px]   max-md:m-auto max-md:text-center '>
                    <ol >
                        <li className='flex justify-between'> <span> 1.Argora Chowk to Rose Avenue</span> <span> 3.3km </span>  </li>
                        <li className='flex justify-between'> <span> 2.Hatia Station to Rose Avenue</span> <span> 8.5 km </span>  </li>
                        <li className='flex justify-between'> <span> 3.Birsa Munda Airport to Rose Avenue</span> <span> 10 km </span>  </li>
                        <li className='flex justify-between'> <span> 4.Ranchi Rly Stn to Rose Avenue</span> <span> 7.6 km </span>  </li>
                        <li className='flex justify-between'> <span> 5.Ring Road to Rose Avenue</span> <span> 3.7 km </span>  </li>
                    </ol>
                </div>
                <AnimateUpDown direction='up'>
                <div className='contact-address p-4 bg-white rounded-3xl flex flex-col justify-center shadow-lg max-xl:px-5 max-xl:h-32  max-xl:pt-3 max-lg:h-fit max-lg:pb-3   '>
                    <div className='  flex flex-col gap-1 max-2xl:w-fit max-lg:h-fit'>
                        <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px] max-xl:w-[12px] max-xl:h-[18px]' />
                        <h1 className=' font-bold text-xl max-xl:text-lg  max-lg:text-base'>Address</h1>
                        <p className='text-[17px] max-xl:text-[13px] max-lg:text-[11px]'>Commitment to the highest standards of construction and design.</p>
                    </div>
                </div>
                </AnimateUpDown>
                <AnimateUpDown direction='up'>
                <div className='contact-phone  p-4 bg-white rounded-3xl  flex flex-col justify-center shadow-lg  max-xl:px-5 max-xl:h-32  max-xl:pt-3 max-lg:h-fit max-lg:pb-3   ' >
                    <div className='  flex flex-col gap-1 max-lg:h-fit'>
                    <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px] max-xl:w-[12px] max-xl:h-[18px]' />
                    <h1 className=' font-bold text-xl max-xl:text-lg'>Phone No</h1>
                    <p className='text-[17px] max-xl:text-[13px]'>+91 99999 99999</p>
                    </div>
            
                </div>
                </AnimateUpDown>
                <AnimateUpDown direction='up'>
                <div className='contact-email p-4 bg-white rounded-3xl  flex flex-col shadow-lg  max-xl:px-5 max-xl:h-32  max-xl:pt-3 max-lg:h-fit max-lg:pb-3   '>
                    <div className='  flex flex-col gap-1 max-lg:h-fit'>
                    <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px] max-xl:w-[12px] max-xl:h-[18px]' />
                    <h1 className=' font-bold text-xl max-xl:text-lg'>Email</h1>
                    <p className='text-[17px] max-xl:text-[13px]'>something@something.com</p>
                    </div>
                </div>
                </AnimateUpDown>
    
                </div>

            </div>
            <div className='contact-imagesection w-[66%] h-[868px] flex justify-end max-xl:h-fit max-md:w-full'>
               
                <iframe className='w-[100%] h-[868px] border-2   max-xl:h-[800px] max-lg:h-[600px]   ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7326.21519380224!2d85.270039!3d23.3481161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4df000e8915df%3A0xf9d2aec92255e69d!2sRose%20Avenue%20-%20project%20by%20Sarswati%20Consultancy%20and%20Construction!5e0!3m2!1sen!2sin!4v1721806130810!5m2!1sen!2sin" ></iframe>
                
            </div>
        </div>
    )
}
export default Contact
