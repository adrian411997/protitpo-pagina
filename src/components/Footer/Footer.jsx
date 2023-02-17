import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-content-container">
        <div className="footer-content">
          <div className="column image-column">
            <img
              src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676643397/metrica/LOGO_CON_ESTRELLA_g9wykb.png"
              alt=""
              width={200}
            />
          </div>
          <div className="column contact-column">
            <div className="contact">
              <div className="place">
                <span> Estamos en: Argentina, Salta</span>
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
                <button className="btn">
                  <a
                    href="https://www.facebook.com/metrica.agenciamkt/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/dni5cjwpu/image/upload/v1674965372/metrica/pngegg_5_o9pv9l.png"
                      }
                      width={30}
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
