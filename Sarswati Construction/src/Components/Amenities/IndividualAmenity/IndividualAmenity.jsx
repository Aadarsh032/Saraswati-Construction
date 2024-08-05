import React from 'react'



const IndividualAmenity = (props) => {
    return (

        <div className='individual-amenity w-[370px] max-2xl:w-[300px] max-xl:w-[320px] max-lg:w-[250px] '>
            <div className='individual-amenity-image '>
                <img src={props.image} alt="" className=' h-[250px] w-[370px] rounded-t-3xl max-2xl:h-[240px] max-2xl:w-[300px] max-xl:w-[320px] max-xl:h-[240px] max-lg:w-[250px] max-lg:h-[180px] ' />

                <div className='individual-amenity-title bg-[#FFFFFF] w-fit rounded-b-3xl flex flex-col gap-1 max-xl:gap-0 px-4 text-center py-3 '>
                   <p className='title-amenities font-bold text-2xl  max-xl:text-xl max-lg:text-lg '>{props.title}</p> 
                    <p className='description-amenities text-lg max-2xl:text-lg max-xl:text-base max-lg:text-sm ' >{props.description}</p>
                </div>
            </div>

        </div>

    )
}

export default IndividualAmenity 
