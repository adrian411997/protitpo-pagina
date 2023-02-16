import React from "react";
import "./Reunion.css";

const Reunion = () => {
  return (
    <>
      <div className="reunion-content">
        <div className="reunion">
          <div className="reunion-text">
            <h1>Agenda una reunion con nosotros!</h1>
            <p>
              ¿Todavia no te decides? No hay problema! Estamos aqui para
              despejar todas tus dudas y guiarte en todo momento.
            </p>
            <button className="reunion-button">
              <a
                href="https://calendly.com/adrian-mart41197/30min"
                target={"_blank"}
                rel="noreferrer"
              >
                Agendar
              </a>
            </button>
          </div>
          <div className="reunion-icon">
            <img
              src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676507011/metrica/shutterstock_663289072-Convertido_rjr4ly.png"
              alt="reunion"
              width={550}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reunion;
