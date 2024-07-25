import React from 'react'
import projects from '../../assets/projects'
import IndividualProject from './IndividualProject/IndividualProject'

import AnimateFadeIn from '../Animate/AnimateFade/AnimateFadeIn';


const Projects = () => {


  return (
    <div className='projects-mainbox bg-[#F5F5F5]' id='Projects'>
      <div className='project-insidebox flex w-11/12 justify-between justify-around m-auto pb-20 pt-8'>

        {
          projects.map((element, index) => {
            return (
              <AnimateFadeIn  key={index} >
                    <IndividualProject  title={element.title} image={element.image} />
            </AnimateFadeIn>
              
            )
          })
        }

      </div>


    </div>
  )
}

export default Projects
