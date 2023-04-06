import { useContext } from 'react'
import { Socials } from '../Socials'
import './'
import { UserContext } from '../Context/UseContext'

export const Home = () => {


  const { language } = useContext(UserContext)

  return (
    <div className="home">
      <div className="home__container">
        <p>{language ? "Hello" : "Hola"}</p>
        <h1>{language ? "I'm" : "Soy"} <span>Héctor</span></h1>
        {/* <p>I consider myself to be hard working, willing to adapt in general with a great passion for learning, and keep improving as a Software Developer.</p> */}
        {
          language ? (
            <p>I'm a Systems Engineer student with experience in the creation of web applications with front-end technologies. Passionate about the design and development of attractive and functional user interfaces, improving my skills in this field through various personal and academic projects, during my training, acquiring knowledge in HTML, CSS, and JavaScript, as well as in the use of frameworks such as ReactJs.</p>
          ) : (
            <p>Soy estudiante de Ingeniería en Sistemas con experiencia en la creación de aplicaciones web con tecnologías front-end. Me apasiona el diseño y desarrollo de interfaces de usuario atractivas y funcionales, mejorando mis habilidades en este campo a través de diversos proyectos personales y académicos, durante mi formación, adquiriendo conocimientos en HTML, CSS y JavaScript, así como en el uso de frameworks como ReactJs.</p>
          )
        }

        <div className='socials'>
          <Socials />

        </div>
      </div>
    </div>
  )
}