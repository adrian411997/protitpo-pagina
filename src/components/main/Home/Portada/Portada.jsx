import React from "react";
import Header from "../../../header/Header";
import emocion from "../../../images/emocion.png";
import "./Portada.css";
const Portada = () => {
  return (
    <div className="welcomePart">
      <Header />
      <div className="content">
        <div className="portada">
          <div className="writing">
            <div className="title-writing">
              <h1> La solucion a todos tus problemas ha llegado</h1>
            </div>
            <div className="body-writing">
              Buscamos, adaptamos y mejoramos su negocio en internet y asi sacar
              ventaja sobre su competencia
            </div>
          </div>
          <div className="image">
            <img src={emocion} alt="emocion" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portada;
