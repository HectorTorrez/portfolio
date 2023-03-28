import { Socials } from '../Socials'
import './'

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <p>Hello,</p>
        <h1>I'm <span>Héctor</span></h1>
        <p>I consider myself to be hard working, willing to adaptand in general with a great passion for learning and keep improving as a Software Developer.</p>
        <div className='socials'>
          <Socials />

        </div>
      </div>
    </div>
  )
}