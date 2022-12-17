import React, { useState, useEffect } from "react";
import "./ServiciosHome.css";
import webpage from "../../../images/webpage1.png";
import trabajo from "../../../images/trabajo.png";
import nerd from "../../../images/nerd.png";
import stonks from "../../../images/stonks.png";
import security from "../../../images/security.png";

const ServiciosHome = () => {
  const [imgContent, setImgContent] = useState("hidden-img-content");
  const [text, setText] = useState("hidden-text");
  const [secur, setSecur] = useState("hidden-img-content");
  const [textSecur, setTextSecur] = useState("hidden-text");
  const handleAnimationWeb = () => {
    if (document.documentElement.scrollTop >= 500) {
      setImgContent("image-content");
      setText("text");
    } else {
      setImgContent("hidden-img-content");
      setText("hidden-text");
    }
  };
  const handleAnimationSecur = () => {
    if (document.documentElement.scrollTop >= 1100) {
      setSecur("img-security-content");
      setTextSecur("text-security-content");
    } else {
      setSecur("hidden-img-content");
      setTextSecur("hidden-text");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleAnimationWeb);
    window.addEventListener("scroll", handleAnimationSecur);
  }, []);
  return (
    <div className="ServiciosPart">
      <div className="container">
        <div className="content-services">
          <div className={imgContent}>
            <img src={webpage} alt="webpage" width={350} height={350} />
            <img
              className="trabajo"
              src={trabajo}
              alt="trabajo"
              width={125}
              height={125}
            />
            <img
              className="nerd"
              src={nerd}
              alt="nerd"
              width={100}
              height={100}
            />
            <img
              className="stonks"
              src={stonks}
              alt="nerd"
              width={90}
              height={90}
            />
          </div>
          <div className={text}>
            <div className="text-title">
              <h1>Creacion de paginas webs y hosting</h1>
            </div>
            <div className="parrafo-title">
              <b>
                ¿Quiere aumentar sus ventas y visibilidad en internet pero le es
                complicado?
              </b>{" "}
              No se preocupe, hacemos el trabajo duro por usted y le
              construiremos su sitio web a su medida para que resalte en
              cualquier sitio. Tambien le proporcionaremos un hosting con el
              dominio a su nombre.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="security-service">
          <div className={textSecur}>
            <div className="text-title">
              <h1>Cibersereguridad</h1>
            </div>
            <div className="parrafo-title">
              <b>
                ¿Preocupado de que su competencia ataque sus servicios web o
                piratas informaticos estropeen la experiencia de sus usuarios?
              </b>{" "}
              Sabemos cuan vulnerable puede ser un sitio web ante ataques de
              entes maliciosos, nosotros le proveeremos de las medidas de
              seguridad para evitar estos contratiempos.
            </div>
          </div>
          <div className={secur}>
            <img src={security} alt="seguridad" width={550} height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosHome;
