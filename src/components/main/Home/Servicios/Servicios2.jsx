import React from "react";
import "./Servicios.css";

const Servicios2 = () => {
  return (
    <div className="content-service2">
      <div className="title-service2">
        <h1>SERVICIOS</h1>
      </div>
      <div className="images-service2">
        <div className="webpage2">
          <img
            src={
              "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546467/metrica/webpage1_dp70bu.png"
            }
            alt="webpage"
            width={150}
            height={150}
          />
          <div className="text-title2">
            <h1>Creacion de paginas webs </h1>
          </div>
          <div>
            <button className="button-service2">CLICK PARA MAS INFO</button>
          </div>
        </div>
        <div className="seguridad2">
          <img
            src={
              "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546465/metrica/security_hxst2s.png"
            }
            alt="seguridad"
            width={250}
            height={150}
          />
          <div className="text-title2">
            <h1>Cibersereguridad y proteccion</h1>
          </div>
          <div>
            <button className="button-service2">CLICK PARA MAS INFO</button>
          </div>
        </div>
        <div className="infra2">
          <img
            src={
              "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546462/metrica/infraestructura_s5b2mr.png"
            }
            alt="webpage"
            width={150}
            height={150}
          />
          <div className="text-title2">
            <h1>Instalacion de infraestructura</h1>
          </div>
          <div>
            <button className="button-service2">CLICK PARA MAS INFO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios2;
