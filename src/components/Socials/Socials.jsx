import { MdDownload } from "react-icons/md"
import { socials } from "../../data/data"
import './Socials.css'
import pdf from '../assets/CVHector-Antonio-Torrez-Buruca.pdf'

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

      <a href={pdf} className="btn-cv" rel="noreferrer" target="_blank"   >
        <MdDownload />
        <span className="btn-cv">
          Download CV
        </span>

      </a>

    </div >
  )
}
