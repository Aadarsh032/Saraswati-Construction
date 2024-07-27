import React from 'react'
import houseicon from '../../../assets/house-icon.png'

const Specificfeature = (props) => {
    return (
        <>
            {
                props.title === "STRUCTURE" || props.title === "FLOORS" || props.title === "WALLS" || props.title === "TOILETS" || props.title === "DOORS" || props.title === "ELECTRIFICATION"
                    ? <><div className='specificfeature-maindiv w-[600px] h-[100px] flex gap-8 mt-[10px] max-2xl:w-[450px] max-2xl:h-24   max-xl:w-[350px] max-sm:gap-1 '>
                        <div className='specificfeature-left flex flex-col gap-2 w-[111px] '>
                            <img src={houseicon} alt="" className=' max-w-max max-xl:w-8' />
                            {props.title === "ELECTRIFICATION" ? <h3 className='font-bold text-[13px] max-2xl:text-[10px] max-lg:text-[8px]  '>{props.title}</h3> : <h3 className='font-bold text-[16px] max-2xl:text-[12px] max-lg:text-[10px]'>{props.title}</h3>}
                        </div>
                        <div className='specificfeature-right w-[438px] max-lg:flex '>
                            <p className='font-medium text-[16px] max-2xl:text-[13px] max-xl:text-[10px] max-lg:text-[12px]'>{props.details}</p>
                        </div>
                    </div>
                        <hr className='bg-black w-[600px] max-2xl:w-[450px] max-xl:w-[350px]' />
                        </>
                    : 
                    <>
                    <div className='specificfeature-maindiv w-[600px] h-[80px] flex gap-8 mt-[10px] mb-2 max-2xl:w-[450px] max-2xl:h-20  max-xl:w-[350px] max-sm:gap-1 '>
                        <div className='specificfeature-left flex flex-col gap-2 w-[111px] '>
                            <img src={houseicon} alt="" className=' max-w-max max-xl:w-8' />
                            <h3 className='font-bold text-[15px] max-2xl:text-[12px] max-lg:text-[8px] '>{props.title}</h3>
                        </div>
                        <div className='specificfeature-right w-[438px]'>
                            <p className='font-medium text-[16px] max-2xl:text-[13px] max-xl:text-[10px] max-lg:text-[12px]'>{props.details}</p>
                        </div>
                    </div>
                        <hr className='bg-black w-[600px] max-2xl:w-[450px] max-xl:w-[350px]' />
                    </>
            }
        </>

    )
}

export default Specificfeature
