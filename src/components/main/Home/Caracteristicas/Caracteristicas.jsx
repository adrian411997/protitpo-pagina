import React, { useState, useEffect } from "react";
import "./Caracteristicas.css";

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
                <img
                  src={
                    "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546468/metrica/eficiencia_pelkct.png"
                  }
                  alt="eficiencia"
                  width={150}
                />
                <img
                  src={
                    "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546464/metrica/mas_gx7anw.png"
                  }
                  alt=""
                  width={50}
                />
                <img
                  src={
                    "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546466/metrica/seg_kxzctj.png"
                  }
                  alt=""
                  width={150}
                />
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
                <img
                  src={
                    "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546465/metrica/responsabilidad_dvhz5r.png"
                  }
                  alt="eficiencia"
                  width={150}
                />
                <img
                  src={
                    "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546464/metrica/mas_gx7anw.png"
                  }
                  alt=""
                  width={50}
                />
                <img
                  src={
                    "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546467/metrica/compromiso_myou0n.png"
                  }
                  alt=""
                  width={150}
                />
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
                <img
                  src={
                    "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546469/metrica/service_zejnq8.png"
                  }
                  alt="eficiencia"
                  width={200}
                />
                <img
                  src={
                    "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546465/metrica/megusta_xrc627.png"
                  }
                  alt=""
                  width={100}
                />
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
