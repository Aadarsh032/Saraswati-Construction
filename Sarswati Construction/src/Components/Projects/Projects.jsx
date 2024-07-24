import React, { useEffect } from 'react'
import projects from '../../assets/projects'
import IndividualProject from './IndividualProject/IndividualProject'
import 'aos/dist/aos.css'
import AOS from 'aos';


const Projects = () => {

  useEffect(()=>{
     AOS.init({duration:1000})
  },[]);

  return (
    <div className='projects-mainbox bg-[#F5F5F5]' id='Projects'>
      <div className='project-insidebox flex w-11/12 justify-between justify-around m-auto pb-20 pt-8'>

        {
          projects.map((element, index) => {
            return (
              <div data-aos="zoom-in">
                    <IndividualProject  key={index} title={element.title} image={element.image} />
              </div>
              
            )
          })
        }

      </div>


    </div>
  )
}

export default Projects
