import { Socials } from '../Socials'
import './'

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <p>Hello,</p>
        <h1>I'm <span>Héctor</span></h1>
        {/* <p>I consider myself to be hard working, willing to adapt in general with a great passion for learning, and keep improving as a Software Developer.</p> */}
        <p>I am a Computer Engineering student with experience in the creation of web applications with front-end technologies. Passionate about the design and development of attractive and functional user interfaces, I improve my skills in this field through various personal and academic projects, during my training, I acquired knowledge in HTML, CSS, and JavaScript, as well as in the use of frameworks such as ReactJs.</p>
        <div className='socials'>
          <Socials />

        </div>
      </div>
    </div>
  )
}