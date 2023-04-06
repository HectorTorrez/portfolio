import { skills } from '../../data/data.js'
import './Skills.css'
export const Skills = () => {



  return (
    <div className='skills-container'>
      <h2>Skills</h2>
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