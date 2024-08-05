import React from 'react'
import amenity from '../../assets/amenity'
import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight';
import IndividualAmenity from './IndividualAmenity/IndividualAmenity';
import locationmap from '../../assets/loaction map-.png'


const Amenities = () => {

  let delayed = 0;

  return (
    <div className='amenities-mainbox bg-[#F5F5F5] flex pb-20 max-lg:flex-col-reverse max-lg:gap-5' id='Amenities'>
      <div className='amenities-left flex flex-wrap  w-3/5 gap-12 justify-evenly m-auto  px-8 max-2xl:gap-10 max-lg:w-full    '>

        {
          amenity.map((element, index) => {

            delayed += 0.2;

            return (

              <AnimateLeftRight direction='left' delay={delayed} key={index}>
                <IndividualAmenity title={element.title} image={element.image} description={element.description} />
              </AnimateLeftRight>
            )
          })
        }

      </div>

      <div className='amenities-right w-2/5 flex flex-col  justify-center max-lg:w-full ' >
        <div className='flex flex-col-reverse gap-4'>
          <img src={locationmap} alt="" />
          <h1 className='text-center font-bold text-4xl'> <u className='text-pink-500' > <span className='text-black ' >LOCATION MAP</span> </u></h1>
        </div>
      </div>
    </div>
  )
}

export default Amenities
