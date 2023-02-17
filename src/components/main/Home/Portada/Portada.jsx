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
              <h1> ¡HOLA, SOMOS METRICA!</h1>
            </div>
            <div className="body-writing">
              Una agencia de marketing digital enfocada 100% en acompañarte y
              colaborar con el éxito de tu negocio innovando y creativizando en
              los servicios que tenemos para brindarte.
            </div>
          </div>
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dni5cjwpu/image/upload/v1675367133/metrica/Recurso_6_h6o3dm.png"
              }
              alt="emocion"
            />
          </div>
        </div>
      </div>
      <div className="burbujas">
        <div className="burbuja"></div> <div className="burbuja prim"></div>
        <div className="burbuja"></div> <div className="burbuja seg"></div>
        <div className="burbuja"></div> <div className="burbuja ter"></div>
        <div className="burbuja"></div> <div className="burbuja cuart"></div>
        <div className="burbuja"></div> <div className="burbuja quin"></div>
      </div>
    </div>
  );
};

export default Portada;
