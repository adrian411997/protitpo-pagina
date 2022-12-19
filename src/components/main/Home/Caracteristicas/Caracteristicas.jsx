import React, { useState, useEffect } from "react";
import "./Caracteristicas.css";
import eficiencia from "../../../images/eficiencia.png";
import mas from "../../../images/mas.png";
import seg from "../../../images/seg.png";
import responsabilidad from "../../../images/responsabilidad.png";
import compromiso from "../../../images/compromiso.png";
import Servicio from "../../../images/service.png";
import like from "../../../images/megusta.png";

const Caracteristicas = () => {
  const [flip, setFlip] = useState("");
  const handleFlip = () => {
    if (document.documentElement.scrollTop >= 2300) {
      setFlip("flip");
    } else {
      setFlip("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleFlip);
  }, []);
  return (
    <>
      <div className="caract-space">
        <div className="entryTitulo">
          <h1>¿Como trabajamos?</h1>
        </div>
        <div className="char-content">
          <div className="char-pamodificar">
            <div className={`char ${flip}`}>
              <div className="char-image">
                <img src={eficiencia} alt="eficiencia" width={150} />
                <img src={mas} alt="" width={50} />
                <img src={seg} alt="" width={150} />
              </div>
              <div className="char-writing">
                <div className="char-title">
                  <h1>Eficiencia y seguridad</h1>
                </div>
                <div className="char-text">
                  Tomamos en serio nuestro trabajo para entregar un servicio
                  impecable a nuestros clientes otorgandoles una muy buena
                  experiencia en su travesía de buscar un crecimiento notable en
                  sus emprendimientos y negocios
                </div>
              </div>
            </div>
            <div className={`char ${flip}`}>
              <div className="char-image">
                <img src={responsabilidad} alt="eficiencia" width={150} />
                <img src={mas} alt="" width={50} />
                <img src={compromiso} alt="" width={150} />
              </div>
              <div className="char-writing">
                <div className="char-title">
                  <h1>Compromiso y Responsabilidad</h1>
                </div>
                <div className="char-text">
                  Tomamos en serio nuestro trabajo para entregar un servicio
                  impecable a nuestros clientes otorgandoles una muy buena
                  experiencia en su travesía de buscar un crecimiento notable en
                  sus emprendimientos y negocios
                </div>
              </div>
            </div>
            <div className={`char ${flip}`}>
              <div className="char-image">
                <img src={Servicio} alt="eficiencia" width={200} />
                <img src={like} alt="" width={100} />
              </div>
              <div className="char-writing">
                <div className="char-title">
                  <h1>Eficiencia y seguridad</h1>
                </div>
                <div className="char-text">
                  Tomamos en serio nuestro trabajo para entregar un servicio
                  impecable a nuestros clientes otorgandoles una muy buena
                  experiencia en su travesía de buscar un crecimiento notable en
                  sus emprendimientos y negocios
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Caracteristicas;
