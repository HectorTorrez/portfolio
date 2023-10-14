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
            {/* I'm a Front-end Developer with experience in the creation of web
            applications with front-end technologies. Passionate about designing
            and developing attractive and functional user interfaces, improving
            my skills in this field through various personal and academic
            projects, and acquiring knowledge in HTML, CSS, JavaScript,
            TypeScript, and ReactJs during my training. */}
            I am a Front-end Developer passionate about creating attractive and functional user interfaces. My goal is to solve problems related to user experience and ensure that websites are efficient and effective. My expertise in front-end technologies in JavaScript (React) and back-end (Node) allows me to create solutions that increase user retention and improve customer satisfaction.
          </p>
        ) : (
          <p>
            {/* Soy Desarrollador Front-end con experiencia en la creación de
            aplicaciones web con tecnologías front-end. Apasionado del diseño y
            desarrollo de interfaces de usuario atractivas y funcionales,
            mejorando mis habilidades en este campo a través de diversos
            proyectos personales y académicos y adquiriendo conocimientos en
            HTML, CSS, JavaScript, TypeScript y ReactJs durante mi formación. */}
            Soy un Desarrollador Front-end apasionado por la creación de interfaces de usuario atractivas y funcionales. Mi objetivo es resolver problemas relacionados con la experiencia del usuario y garantizar que los sitios web sean eficientes y eficaces. Mi experiencia en tecnologías front-end en JavaScript (React) y back-end (Node) me permite crear soluciones que aumentan la retención de usuarios y mejoran la satisfacción del cliente.
          </p>
        )}

        <div className="socials">
          <Socials />
        </div>
      </div>
    </div>
  );
};
