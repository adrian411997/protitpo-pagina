import React, { useState, useEffect } from "react";
import "./Servicios3.css";
const Servicios3 = () => {
  const [hide, setHide] = useState("hide");
  const hideOrNotHide = () => {
    if (document.documentElement.scrollTop > 200) {
      setHide("service-card");
    } else {
      setHide("hide");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideOrNotHide);
  });
  return (
    <div className="part-service3">
      <div className="intro-servicio">
        <div className="servicio-writing">
          <h3>AGENCIA DE MARKETING DIGITAL</h3>
          <p>
            Somos una agencia enfocada 100% en acompañarte y colaborar con el
            éxito de tu negocio innovando y creativizando en los servicios que
            tenemos para brindarte.
          </p>
        </div>
      </div>
      <div className="servicio-content">
        <div className="servicio-title">
          <h1>¿En que podemos ayudarte?</h1>
        </div>
      </div>
      <div className="card-services-container">
        <div className="card-service-list">
          <div className={`${hide}`}>
            <div className="background marketing"></div>
            <div className="content-card-service">
              <div className="title-card">
                <h2>
                  ¿Necesitas potenciar su presencia en sus redes sociales?
                </h2>
              </div>
              <div className="button-card-service">
                <button>Conoce mas</button>
              </div>
            </div>
          </div>
          <div className={`${hide}`}>
            <div className="background web"></div>
            <div className="content-card-service">
              <div className="title-card">
                <h2>
                  ¿Necesitas potenciar su presencia en sus redes sociales?
                </h2>
              </div>
              <div className="button-card-service">
                <button>Conoce mas</button>
              </div>
            </div>
          </div>
          <div className={`${hide}`}>
            <div className="background graphic"></div>
            <div className="content-card-service">
              <div className="title-card">
                <h2>
                  ¿Necesitas potenciar su presencia en sus redes sociales?
                </h2>
              </div>
              <div className="button-card-service">
                <button>Conoce mas</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios3;
