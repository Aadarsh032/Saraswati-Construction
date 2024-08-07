import React from 'react'
import houseicon from '../../../assets/house-icon.png'
import './Specificfeature.css'

const Specificfeature = (props) => {
    return (
        <>
        <div className='specificfeature-maindiv1 w-[520px] h-[100px] flex gap-2 mt-[10px] max-2xl:w-[450px] max-2xl:h-24 max-2xl:gap-1  max-xl:w-[350px] max-sm:gap-0 '>
            <div className='specificfeature-left flex flex-col gap-2 w-[111px] '>
                <img src={houseicon} alt="" className='homeicon max-w-max max-xl:w-8' />
                <h3 className='font-bold text-[16px] max-2xl:text-[12px] max-lg:text-[11px]'>{props.title}</h3>
            </div>
            <div className='specificfeature-right w-[438px] max-lg:flex '>
                <p className='font-medium text-[16px] max-2xl:text-[13px]  max-lg:text-[13px]'>{props.details}</p>
            </div>
        </div>
            <hr className='bg-black w-[520px] max-2xl:w-[450px] max-xl:w-[350px] ' />
            </>
 
    )
}

export default Specificfeature;

