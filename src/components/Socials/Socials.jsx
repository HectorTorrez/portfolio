import { MdDownload } from "react-icons/md"
import { socials } from "../../data/data"
import './Socials.css'
import pdf from '../assets/CVHector-Antonio-Torrez-Buruca.pdf'

export const Socials = () => {
  return (
    <div className="socials-container">
      {
        socials.map(social => (
          <div key={social.name} className="socials-icons">
            <a href={social.source} target="_blank" rel="noreferrer">{<social.icon />}</a>
          </div >

        ))
      }

      <div className="socials-icons">
        <a href={pdf} className="btn-cv" rel="noreferrer" target="_blank"   >
          <MdDownload />
          <span className="btn-cv">
            Download CV
          </span>

        </a>
      </div >
    </div >
  )
}
