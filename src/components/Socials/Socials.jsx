import { MdDownload } from "react-icons/md"
import { socials } from "../../data/data"
import './Socials.css'

export const Socials = () => {
  return (
    <div className="socials-container">
      <div className="socials-icons">
        {
          socials.map(social => (

            <a key={social.name} href={social.source} target="_blank" rel="noreferrer">{<social.icon />}</a>

          ))
        }

      </div>

      <a href="#" className="btn-cv" target="_blank" rel="noreferrer" download >
        <MdDownload />
        <span className="btn-cv">
          Download CV
        </span>

      </a>

    </div >
  )
}
