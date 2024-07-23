import React from 'react'
import map from '../../assets/map.png'
import location_icon from '../../assets/location_icon.png'


const Contact = () => {
    return (
        <div className='contact-maindiv bg-[#F5F5F5] flex  '>
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
                <div className='contact-address w-[426px] h-[166.97px] bg-white rounded-3xl  flex flex-col justify-center shadow-lg'>
                    <div className='w-[356px] h-[128.97px] m-auto flex flex-col gap-1'>
                        <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px]' />
                        <h1 className=' font-bold text-xl '>Address</h1>
                        <p className='text-[17px]'>Commitment to the highest standards of construction and design.</p>
                    </div>
                </div>
                <div className='contact-phone w-[426px] h-[140.97px] bg-white rounded-3xl  flex flex-col justify-center shadow-lg'>
                    <div className='w-[356px] h-[102.97px] m-auto flex flex-col gap-1'>
                    <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px]' />
                    <h1 className=' font-bold text-xl'>Phone No</h1>
                    <p className='text-[17px]'>+91 99999 99999</p>
                    </div>
            
                </div>
                <div className='contact-email w-[426px] h-[140.97px] bg-white rounded-3xl  flex flex-col justify-center shadow-lg'>

                    <div className='w-[356px] h-[102.97px] m-auto flex flex-col gap-1'>
                    <img src={location_icon} alt="" className='w-[25.48px] h-[33.97px]' />
                    <h1 className=' font-bold text-xl'>Email</h1>
                    <p className='text-[17px]'>something@something.com</p>
                    </div>
                    
                </div>
            </div>
            <div className='contact-imagesection'>
                <img src={map} alt="" className='w-[1367px] h-[868px]' />
            </div>
        </div>
    )
}

export default Contact
