import React from 'react'
import pinkarrow from '../../../assets/long-arrow-right-pink.png'


const IndividualProject = (props) => {
    return (
       
        <div className='individual-projects  '>
            <div className='individual-projects-image'><img src={props.image} alt="" className=' w-[554px] h-[380px] rounded-t-3xl max-2xl:h-[300px] max-xl:h-[250px] max-lg:h-[200px] max-md:h-[150px] max-sm:h-[275px] max-sm:w-[340px] max-sm:m-auto ' /></div>
            <div className='individual-projects-title bg-[#FFFFFF] flex flex-col p-9 gap-3  rounded-b-3xl text-2xl font-bold max-2xl:p-6 max-xl:p-2 max-xl:text-xl max-xl:gap-1 max-xl:pl-4 max-md:text-center  max-sm:w-[340px] max-sm:m-auto '>
                {props.title} 
                <p className='text-lg flex flex-row gap-2 items-center text-[#DF7F8E] max-xl:text-base max-md:text-sm max-md:justify-center' >
                    Read more <img src={pinkarrow} className='w-4 h-4 max-xl:w-3 max-xl:h-3' /></p>
                </div>

        </div>
        
    )
}

export default IndividualProject
