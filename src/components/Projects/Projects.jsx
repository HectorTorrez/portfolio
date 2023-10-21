import React, { useContext } from 'react'
import { projects } from '../../data/data.js'
import { Technologies } from '../Technologies/Technologies.jsx'
import { UserContext } from '../Context/UseContext.jsx'

export const Projects = () => {

  const { language } = useContext(UserContext)

  return (
    <>
      <h2>{language ? "Projects" : "Proyectos"}</h2>
      <div className='project'>

        {
          projects &&
          projects.map((project) => (

            <div key={project.title} className='project-card' >

              <div className='project-info'>
                <h3>{language ? project.title : project.titleES}</h3>
                <p>{language ? project.description : project.descriptionES}</p>
                <article className='project-info--img'>
                  <img src={project.image} alt="" />
                </article>

              </div>
              <div className='technologies'>
                {
                  project.tags && <Technologies tags={project.tags} />
                }

              </div>
              <div className='project-links'>
                <div className='btn-links'>
                  <a href={project.source} className='btn-small' target='_blank' rel="noreferrer" >{language ? "Source" : "Código Fuente"} {<project.demoIcon />}</a>
                  <a href={project.demo} className='btn-small' target='_blank' rel="noreferrer" >Demo{<project.sourceIcon />}</a>
                </div>
              </div>

            </div>
          ))
        }
      </div >
    </>

  )
}
