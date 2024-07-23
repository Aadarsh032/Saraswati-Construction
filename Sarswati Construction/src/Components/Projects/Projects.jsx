import React from 'react'
import projects from '../../assets/projects'
import IndividualProject from './IndividualProject/IndividualProject'


const Projects = () => {
  return (
    <div className='projects-mainbox bg-[#F5F5F5]'>
      <div className='project-insidebox flex w-11/12 justify-between justify-around m-auto pb-20 pt-8'>

        {
          projects.map((element, index) => {
            return (
              <IndividualProject key={index} title={element.title} image={element.image} />
            )
          })
        }

      </div>


    </div>
  )
}

export default Projects
