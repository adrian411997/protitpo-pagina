import React from "react";
import Header2 from "../../../header/Header2";
import "./Portada2.css";

const Portada2 = () => {
  return (
    <div className="welcomePart">
      <Header2 />
      <div className="content">
        <div className="portada">
          <div className="writing">
            <div className="title-writing">
              <h1> VINIMOS PARA LLEVARTE A LO MAS ALTO ¡SOMOS METRICA!</h1>
            </div>
          </div>
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dni5cjwpu/image/upload/v1674244055/metrica/Recurso_2_t8unvy.png"
              }
              width={700}
              alt="emocion"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portada2;
