import React from 'react'
import pinkarrow from '../../../assets/long-arrow-right-pink.png'


const IndividualProject = (props) => {
    return (

        <div className='individual-projects w-[370px] max-2xl:w-[300px] max-xl:w-[320px] max-lg:w-[250px] '>
            <div className='individual-projects-image '>
                <img src={props.image} alt="" className=' h-[250px] w-[370px] rounded-t-3xl max-2xl:h-[240px] max-2xl:w-[300px] max-xl:w-[320px] max-xl:h-[240px] max-lg:w-[250px] max-lg:h-[180px] ' />

                <div className='individual-projects-title bg-[#FFFFFF] w-fit rounded-b-3xl flex flex-col gap-3 max-xl:gap-2 px-4 text-center py-3 '>
                   <p className='title-amenities font-bold text-3xl max-2xl:text-2xl max-xl:text-xl max-lg:text-lg '>{props.title}</p> 
                    <p className='title-amenities text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm ' >{props.description}</p>
                </div>
            </div>

        </div>

    )
}

export default IndividualProject
