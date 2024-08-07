
import React  from 'react'

  

const IndividualAmenity = (props) => {
    return (

        <div className='individual-amenity w-[300px]  max-2xl:w-[200px]'>
            <div className='individual-amenity-image '>
                <img src={props.image} alt="" className=' h-[200px] w-[300px] rounded-t-3xl  max-2xl:w-[200px] max-2xl:h-[140px] ' />

                <div className='individual-amenity-title bg-[#FFFFFF] w-fit rounded-b-3xl flex flex-col gap-1   max-2xl:w-full max-xl:gap-0 px-4 text-center py-3 '>
                   <p className='title-amenities font-bold text-xl max-2xl:text-center max-xl:text-xl max-lg:text-lg '>{props.title}</p> 
                    <p className='description-amenities text-base max-2xl:hidden max-lg:block max-xl:text-base max-lg:text-sm ' >{props.description}</p>
                </div>
            </div>

        </div>

    )
}

export default IndividualAmenity 
