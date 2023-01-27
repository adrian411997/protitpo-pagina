import React from "react";
import Footer from "../../../../Footer/Footer";
import Header from "../../../../header/Header";
import "./Marketing.css";

const PlanesMarketing = () => {
  return (
    <>
      <Header />
      <div className="planes-container">
        <div className="marketing-content">
          <div className="planes-container-title">
            <h1> Marketing Digital y Social Media</h1>
          </div>
          <div className="planes-marketing-columns">
            <div className="marketing-columns">
              <div className="marketing-column-image">
                <img
                  src="https://anunzi.net/wp-content/uploads/2020/12/planes.png"
                  width={250}
                  height={150}
                  alt="socialMedia"
                />
              </div>
              <div className="marketing-column-title">
                <h3>Metrica Basic</h3>
                <p>Estrategia de Contenidoy Social Media</p>
              </div>
              <div className="marketing-column-price">
                <h2>60000</h2>
                <p>ARS</p>
              </div>{" "}
              <div className="marketing-column-services-container">
                <div className="marketin-column-services">
                  <ul>
                    <li>
                      <b>2 publicaciones semanales</b>
                    </li>
                    <li>2 Historias por post</li>
                    <li>Diseño incluido</li>
                    <li>Produccion fotografica</li>
                    <li>Edicion de Video</li>
                    <li>Estrategias de Crecimiento</li>
                    <li>Programacion Mensal</li>
                    <li>Reunion con tu manager</li>
                  </ul>
                </div>
              </div>
              <div className="marketin-column-button">
                <button>Me decidí</button>
              </div>
            </div>
            <div className="marketing-columns">
              <div className="marketing-column-image">
                <img
                  src="https://anunzi.net/wp-content/uploads/2020/12/planes-1.png"
                  width={250}
                  height={150}
                  alt="socialMedia"
                />
              </div>
              <div className="marketing-column-title">
                <h3>Metrica PRO</h3>
                <p>COMUNITY METRICA PRO</p>
              </div>
              <div className="marketing-column-price">
                <h2>85000</h2>
                <p>ARS</p>
              </div>
              <div className="marketing-column-services-container">
                <div className="marketin-column-services">
                  <ul>
                    <li>
                      <b>3 publicaciones semanales</b>
                    </li>
                    <li>3 Historias por post</li>
                    <li>
                      Publicidad en Redes – Lanzamiento de campañas pagas y
                      posicionamiento
                    </li>
                    <li>
                      Diseño incluido/Produccion fotografica/Edicion de Video
                    </li>
                    <li>Pautas no incluídas</li>
                    <li>Estrategias de Crecimiento</li>
                    <li>Programacion Mensal</li>
                    <li>Reunion con tu manager</li>
                    <li>Reportes mensuales</li>
                  </ul>
                </div>
              </div>
              <div className="marketin-column-button">
                <button>Me decidí</button>
              </div>
            </div>
          </div>
        </div>
        <div className="socialmedia-planes">
          <div className="socialmedia-container-title">
            <h1>Publicidad en Social Media</h1>
          </div>
          <div className="planes-marketing-columns">
            <div className="socialmedia-columns">
              <div className="marketing-column-image">
                <img
                  src="https://anunzi.net/wp-content/uploads/2020/12/planes-3.png"
                  width={250}
                  height={150}
                  alt="socialMedia"
                />
              </div>
              <div className="marketing-column-title">
                <h3>Metrica Basic</h3>
                <p>Estrategia de Contenidoy Social Media</p>
              </div>
              <div className="marketing-column-price">
                <h2>35000</h2>
                <p>ARS</p>
              </div>{" "}
              <div className="marketing-column-services-container">
                <div className="marketin-column-services">
                  <ul>
                    <li>
                      <b>Facebook e Instagram ADS</b>
                    </li>
                    <li>Estrategias de campaña</li>
                    <li>Reportes mensuales o semanales</li>

                    <li>Pauta no incluida</li>
                  </ul>
                </div>
              </div>
              <div className="marketin-column-button">
                <button>Me decidí</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PlanesMarketing;
