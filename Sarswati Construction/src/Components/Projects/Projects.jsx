import React from 'react'
import projects from '../../assets/projects'
import IndividualProject from './IndividualProject/IndividualProject'
import AnimateFadeIn from '../Animate/AnimateFade/AnimateFadeIn';


const Projects = () => {


  return (
    <div className='projects-mainbox bg-[#F5F5F5]' id='Projects'>
      <div className='project-insidebox flex w-11/12 justify-evenly m-auto pb-20 pt-8 max-2xl:gap-20 max-sm:flex-col  max-sm:m-auto '>

        {
          projects.map((element, index) => {
            return (
              <AnimateFadeIn  key={index} >
                <div className='' >
                <IndividualProject  title={element.title} image={element.image} />
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
