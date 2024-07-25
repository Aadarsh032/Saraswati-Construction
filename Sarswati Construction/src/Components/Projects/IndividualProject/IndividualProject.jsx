import React from 'react'
import pinkarrow from '../../../assets/long-arrow-right-pink.png'


const IndividualProject = (props) => {
    return (
       
        <div className='individual-projects  '>
            <div className='individual-projects-image'><img src={props.image} alt="" className=' w-[554px] h-[380px] rounded-t-3xl' /></div>
            <div className='individual-projects-title bg-[#FFFFFF] flex flex-col p-9 gap-3  rounded-b-3xl text-2xl font-bold'>
                {props.title} 
                <p className='text-lg flex flex-row gap-2 items-center' style={{ color: '#DF7F8E' }}>
                    Read more <img src={pinkarrow} className='w-4 h-4' /></p>
                </div>

        </div>
        
    )
}

export default IndividualProject
