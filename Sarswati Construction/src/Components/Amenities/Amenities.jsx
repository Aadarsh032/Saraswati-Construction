import React from 'react'
import projects from '../../assets/projects'
import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight';
import IndividualAmenity from './IndividualAmenity/IndividualAmenity';


const Amenities = () => {

  let delayed=0;

  return (
    <div className='projects-mainbox bg-[#F5F5F5]' id='Amenities'>
      <div className='project-insidebox flex flex-wrap  w-full gap-24 justify-evenly m-auto pb-20 px-8 max-2xl:gap-10    '>

        {
          projects.map((element, index) => {

            delayed+=0.2;

            return (

              <AnimateLeftRight direction='left' delay={delayed} key={index}>
                <IndividualAmenity title={element.title} image={element.image} description={element.description} />
            </AnimateLeftRight>
            )
          })
        }

      </div>
    </div>
  )
}

export default Amenities
