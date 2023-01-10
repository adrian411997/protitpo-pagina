import React from "react";
import "./Footer.css";
import logo from "../images/l.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-content-container">
        <div className="footer-content">
          <div className="column">
            <div className="footer-id">
              <img src={logo} alt="logo" width={100} />
              <h3>METRICA</h3>
            </div>
            <div className="footer-id-content">
              Somos una empresa destinada a dar soluciones de software junto a
              un equipo profesional con diversas habilidades para dar excelentes
              resultados con vistas a expandir nuestras filas{" "}
              <b>¡Pronto incorporaremos mas gente!</b>
            </div>
          </div>
          <div className="column">
            <div className="contact">
              <h3>
                <b>CONTACTO:</b>
              </h3>
              <div className="email-contact">
                <a href="mailto:metrica.agenciamkt@gmail.com">
                  metrica.agenciamkt@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="contact">
              <h3>
                <b>NUESTRAS REDES SOCIALES:</b>
              </h3>
              <div className="social-buttons">
                <button className="btn">
                  <a
                    href="https://www.instagram.com/metrica.agenciamkt/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img src={insta} width={30} alt="instagram" />
                  </a>
                </button>
                <button className="btn-link">
                  <a
                    href="https://www.linkedin.com/company/metricaagenciamkt/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img src={linkedin} width={20} alt="instagram" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
