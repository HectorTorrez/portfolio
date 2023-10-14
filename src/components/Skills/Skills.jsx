import { useContext } from 'react'
import { skills } from '../../data/data.js'
import './Skills.css'
import { UserContext } from '../Context/UseContext.jsx'
import { Frontend } from './components/Frontend.jsx'
import { Backend } from './components/Backend.jsx'
import { Testing } from './components/Testing.jsx'
export const Skills = () => {

  const { language } = useContext(UserContext)
  return (
    <div className='skills-container'>
      <h2>{language ? " Technical Skills" : "Habilidades Técnicas"}</h2>
      <div className='skills-card--container '>
        {
          skills.map((skill) => {
            return (
              <section key={skill} className='container-skills'>
                <div className='skills'>
                  <p>Frontend Developer</p>
                  <div className='technologies'>
                    <Frontend key={skill.frontend} skill={skill.frontend}/>
                  </div>
                </div>
                <div className='skills'>
                  <p>Backend Developer</p>
                  <div className='technologies'>
                    <Backend key={skill.backend} skill={skill.backend}/>
                  </div>
                </div>
                <div className='skills'>
                  <p>Testing</p>
                  <div className='technologies'>
                    <Testing key={skill.testing} skill={skill.testing}/>
                  </div>
                </div>
              </section>

            )
})
        }
      </div>
    </div>
  )
}