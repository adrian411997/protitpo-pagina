import React from "react";
import "./GestionMarketin.css";

const GestionMarketin = () => {
  return (
    <div className="gestion-content">
      <div className="gestion-container">
        <div className="gestion-title">
          <h1>
            Gestión de <b>Marketing Digital</b>
          </h1>
        </div>
        <div className="gestion-list">
          <div className="facebook">
            <div className="icon-fb">
              <svg width={80} viewBox="0 0 24 24" fill="#ffff">
                <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
              </svg>
            </div>
            <div className="content-fb">
              <h2 className="title-content-fb"> Vender por Facebook </h2>
              <p className="paragraph-content-fb">
                Facebook se convirtió en una de las mejores herramientas de
                marketing digital para lograr ventas y posicionar tu marca. Cada
                día ingresan más de 1.200 millones de personas y 23 milllones lo
                hacen desde Argentina. Por lo tanto, es algo indispensable
                contar con un excelente diseño y una estrategia que acompañe,
                para llegar así al objetivo.
              </p>
            </div>
          </div>
          <div className="instagram">
            <div className="icon-ig">
              <svg width={80} viewBox="0 0 24 24" fill="#ffff">
                <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
              </svg>
            </div>
            <div className="content-ig">
              <h2 className="title-content-ig">Vender por Instagram</h2>
              <p className="paragraph-content-ig">
                Instagram es una de las redes sociales más portables y visuales
                que existen en la actualidad. En ella podemos encontrar usuarios
                de todas las edades e intereses. Gracias a ésto, podemos
                implementar diferentes estrategias utilizando las variadas
                formas de publicaciones (Stories, Fotos, Videos) y llegar así a
                las personas con intereses que se acoplen con los de tu marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionMarketin;
