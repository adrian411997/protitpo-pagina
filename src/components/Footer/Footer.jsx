import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-content-container">
        <div className="footer-content">
          <div className="column">
            <div className="footer-id">
              <img
                src={
                  "https://res.cloudinary.com/dni5cjwpu/image/upload/v1674247302/metrica/Recurso_4_aopmkj.png"
                }
                alt="logo"
                width={100}
              />
            </div>
          </div>

          <div className="column contact-column">
            <div className="contact">
              <div className="place">
                <span> Estamos en: Argentina, Salta</span>
              </div>
              <div className="info-tel">
                <span>Telefono:+5493874149600</span>
              </div>
              <div className="footer-info-contact">
                <span>Contactanos: metrica.agenciamkt@gmail.com</span>
              </div>

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
                    <img
                      src={
                        "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/insta_qx22sj.png"
                      }
                      width={30}
                      alt="instagram"
                    />
                  </a>
                </button>
                <button className="btn-link">
                  <a
                    href="https://www.linkedin.com/company/metricaagenciamkt/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/linkedin_ijjxfn.png"
                      }
                      width={20}
                      alt="instagram"
                    />
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
