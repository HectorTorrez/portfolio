import { MdDownload } from "react-icons/md";
import { socials } from "../../data/data";
import "./Socials.css";
import pdf from "../assets/Héctor-Torrez.pdf";
import pdfES from "../assets/Héctor-TorrezES.pdf";
import { useContext } from "react";
import { UserContext } from "../Context/UseContext";

export const Socials = () => {
  const { language } = useContext(UserContext);

  return (
    <div className="socials-container">
      {socials.map((social) => (
        <div key={social.name} className="socials-icons">
          <a href={social.source} target="_blank" rel="noreferrer">
            {<social.icon />}
          </a>
        </div>
      ))}

      <div className="socials-icons">
        <a
          href={language ? pdf : pdfES}
          className="btn-cv"
          rel="noreferrer"
          target="_blank"
        >
          <MdDownload />
          <span className="btn-cv">
            {language ? "Download Resume" : "Descargar CV"}
          </span>
        </a>
      </div>
    </div>
  );
};
