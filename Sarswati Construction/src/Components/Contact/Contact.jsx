import React, { useEffect } from 'react'
import location_icon from '../../assets/location_icon.png'
import AnimateUpDown from '../Animate/AnimateUpDown/AnimateUpDown';


const Contact = () => {



     

    return (
        <div className='contact-maindiv bg-[#F5F5F5] flex' id='Contact'>
            <div className='contact-left w-[553px] flex flex-col gap-[15px] justify-center pl-16'>
                <div className='contact-heading w-[374px] h-[103px] flex flex-col gap-5'>
                    <h3 className='text-[26px] font-bold' style={{ color: '#B96D79' }}>Location</h3>
                    <h1 className=' font-bold text-[40px]'>Distance Chart</h1>
                </div>
                <div className='contact-left-details font-medium text-[16px] w-[426px]'>
                    <ol >
                        <li className='flex justify-between'> <span> 1.Argora Chowk to Rose Avenue</span> <span> 3.3km </span>  </li>
                        <li className='flex justify-between'> <span> 2.Hatia Station to Rose Avenue</span> <span> 8.5 km </span>  </li>
                        <li className='flex justify-between'> <span> 3.Birsa Munda Airport to Rose Avenue</span> <span> 10 km </span>  </li>
                        <li className='flex justify-between'> <span> 4.Ranchi Rly Stn to Rose Avenue</span> <span> 7.6 km </span>  </li>
                        <li className='flex justify-between'> <span> 5.Ring Road to Rose Avenue</span> <span> 3.7 km </span>  </li>
                    </ol>
                </div>
                <AnimateUpDown direction='up'>
                <div className='contact-address w-[426px] h-[166.97px] bg-white rounded-3xl  flex flex-col justify-center shadow-lg'>
                    <div className='w-[356px] h-[128.97px] m-auto flex flex-col gap-1'>
                        <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px]' />
                        <h1 className=' font-bold text-xl '>Address</h1>
                        <p className='text-[17px]'>Commitment to the highest standards of construction and design.</p>
                    </div>
                </div>
                </AnimateUpDown>
                <AnimateUpDown direction='up'>
                <div className='contact-phone w-[426px] h-[140.97px] bg-white rounded-3xl  flex flex-col justify-center shadow-lg' >
                    <div className='w-[356px] h-[102.97px] m-auto flex flex-col gap-1'>
                    <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px]' />
                    <h1 className=' font-bold text-xl'>Phone No</h1>
                    <p className='text-[17px]'>+91 99999 99999</p>
                    </div>
            
                </div>
                </AnimateUpDown>
                <AnimateUpDown direction='up'>
                <div className='contact-email w-[426px] h-[140.97px] bg-white rounded-3xl  flex flex-col justify-center shadow-lg'>

                    <div className='w-[356px] h-[102.97px] m-auto flex flex-col gap-1'>
                    <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px]' />
                    <h1 className=' font-bold text-xl'>Email</h1>
                    <p className='text-[17px]'>something@something.com</p>
                    </div>
                    
                </div>
                </AnimateUpDown>
            </div>
            <div className='contact-imagesection w-[1367px] h-[868px] flex justify-end'>
                <div >
                <iframe className='w-[1300px] h-[868px] border-2' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7326.21519380224!2d85.270039!3d23.3481161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4df000e8915df%3A0xf9d2aec92255e69d!2sRose%20Avenue%20-%20project%20by%20Sarswati%20Consultancy%20and%20Construction!5e0!3m2!1sen!2sin!4v1721806130810!5m2!1sen!2sin" ></iframe>
                </div>
            </div>
        </div>
    )
}
export default Contact
