import React from 'react'
import houseicon from '../../../assets/house-icon.png'

const Specificfeature = (props) => {
    return (
        <>
            {
                props.title === "STRUCTURE" || props.title === "FLOORS" || props.title === "WALLS" || props.title === "TOILETS" || props.title === "DOORS" || props.title === "ELECTRIFICATION"
                    ? <><div className='specificfeature-maindiv w-[600px] h-[100px] flex gap-8 mt-[10px]  '>
                        <div className='specificfeature-left flex flex-col gap-2 w-[111px] '>
                            <img src={houseicon} alt="" className=' max-w-max' />
                            {props.title === "ELECTRIFICATION" ? <h3 className='font-bold text-[13px]'>{props.title}</h3> : <h3 className='font-bold text-[16px]'>{props.title}</h3>}
                        </div>
                        <div className='specificfeature-right w-[438px]'>
                            <p className='font-medium text-[16px]'>{props.details}</p>
                        </div>
                    </div>
                        <hr className='bg-black w-[600px]' /></>
                    : 
                    <>
                    <div className='specificfeature-maindiv w-[600px] h-[80px] flex gap-8 mt-[10px] mb-2 '>
                        <div className='specificfeature-left flex flex-col gap-2 w-[111px] '>
                            <img src={houseicon} alt="" className=' max-w-max' />
                            <h3 className='font-bold text-[15px]'>{props.title}</h3>
                        </div>
                        <div className='specificfeature-right w-[438px]'>
                            <p className='font-medium text-[16px]'>{props.details}</p>
                        </div>
                    </div>
                        <hr className='bg-black w-[600px]' />
                    </>
            }
        </>

    )
}

export default Specificfeature
