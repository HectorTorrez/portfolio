import { useContext } from 'react'
import { skills } from '../../data/data.js'
import './Skills.css'
import { UserContext } from '../Context/UseContext.jsx'
export const Skills = () => {

  const { language } = useContext(UserContext)

  return (
    <div className='skills-container'>
      <h2>{language ? " Technical Skills" : "Habilidades Técnicas"}</h2>
      <div className='skills-card--container'>
        {
          skills.map((skill) => (
            <div className='skills-card' key={skill.icon} style={{ color: skill.color }}>
              {<skill.icon />}
            </div>
          ))
        }
      </div>
    </div>
  )
}