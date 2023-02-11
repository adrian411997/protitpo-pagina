import React from "react";
import Header from "../../../header/Header";
import "./Portada2.css";

const Portada2 = () => {
  return (
    <div className="welcomePart">
      <video muted loop autoPlay playsInline className="back-video">
        <source src="https://res.cloudinary.com/dni5cjwpu/video/upload/v1676142026/metrica/04_sswnhg.mov" />
      </video>
      <Header />
      <div className="content">
        <div className="portada">
          <div className="writing">
            <div className="title-writing">
              <h1> VINIMOS PARA LLEVARTE A LO MAS ALTO ¡SOMOS METRICA!</h1>
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
    </div>
  );
};

export default Portada2;
