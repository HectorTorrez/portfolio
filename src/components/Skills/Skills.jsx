import { skills } from '../../data/data.js'
import './Skills.css'
export const Skills = () => {



  return (
    <div className='skills-container'>
      {
        skills.map((skill) => (
          <div className='skills-card' key={skill.icon} style={{ color: skill.color }}>
            {<skill.icon />}
          </div>
        ))
      }
    </div>
  )
}