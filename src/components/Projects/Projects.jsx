import React from 'react'
import { projects } from '../../data/data.js'
import { Technologies } from '../Technologies/Technologies.jsx'
export const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className='project'>

        {
          projects &&
          projects.map((project) => (

            <a href={project.demo} target='_blank' className='project-card' key={project.title}>

              <div className='project-info'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

              </div>
              <div className='technologies'>
                {
                  project.tags && <Technologies tags={project.tags} />
                }

              </div>
              <div className='project-links'>
                <div className='btn-links'>
                  <a href={project.source} className='btn-small' target='_blank' rel="noreferrer" >Source {<project.demoIcon />}</a>
                  <a href={project.demo} className='btn-small' target='_blank' rel="noreferrer" >Demo{<project.sourceIcon />}</a>
                </div>
              </div>
            </a>

          ))
        }
      </div >
    </>

  )
}
