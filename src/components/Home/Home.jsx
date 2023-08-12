import { useContext } from "react";
import { Socials } from "../Socials";
import "./Home.css";
import { UserContext } from "../Context/UseContext";

export const Home = () => {
  const { language } = useContext(UserContext);

  return (
    <div className="home">
      <div className="home__container">
        <p>{language ? "Hello" : "Hola"}</p>
        <h1>
          {language ? "I'm" : "Soy"} <span>Héctor</span>
        </h1>
        {language ? (
          <p>
            I'm a Front-end Developer with experience in the creation of web
            applications with front-end technologies. Passionate about designing
            and developing attractive and functional user interfaces, improving
            my skills in this field through various personal and academic
            projects, and acquiring knowledge in HTML, CSS, JavaScript,
            TypeScript, and ReactJs during my training.
          </p>
        ) : (
          <p>
            Soy Desarrollador Front-end con experiencia en la creación de
            aplicaciones web con tecnologías front-end. Apasionado del diseño y
            desarrollo de interfaces de usuario atractivas y funcionales,
            mejorando mis habilidades en este campo a través de diversos
            proyectos personales y académicos y adquiriendo conocimientos en
            HTML, CSS, JavaScript, TypeScript y ReactJs durante mi formación.
          </p>
        )}

        <div className="socials">
          <Socials />
        </div>
      </div>
    </div>
  );
};
