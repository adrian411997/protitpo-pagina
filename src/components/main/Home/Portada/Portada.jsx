import React from "react";
import Header from "../../../header/Header";

import "./Portada.css";
const Portada = () => {
  return (
    <div className="welcomePart">
      <Header />
      <div className="content">
        <div className="portada">
          <div className="writing">
            <div className="title-writing">
              <h1> HOLA, SOMOS METRICA!</h1>
            </div>
            <div className="body-writing">
              Una agencia de marketing digital enfocado 100% en los servicios
              que brindamos con el fin de potenciar tu negocio al maximo.
            </div>
          </div>
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546471/metrica/emocion_mb55ev.png"
              }
              alt="emocion"
            />
            
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Portada;
