import React from 'react'
import projects from '../../assets/projects'
import IndividualProject from './IndividualProject/IndividualProject'
import AnimateFadeIn from '../Animate/AnimateFade/AnimateFadeIn';


const Projects = () => {


  return (
    <div className='projects-mainbox bg-[#F5F5F5]' id='Amenities'>
      <div className='project-insidebox flex flex-wrap  w-full gap-24 justify-evenly m-auto pb-20 px-8 max-2xl:gap-10    '>

        {
          projects.map((element, index) => {
            return (
              <AnimateFadeIn  key={index} >
                <div className='' >
                <IndividualProject  title={element.title} image={element.image} description={element.description} />
                </div>
                    
            </AnimateFadeIn>
              
            )
          })
        }

      </div>


    </div>
  )
}

export default Projects
