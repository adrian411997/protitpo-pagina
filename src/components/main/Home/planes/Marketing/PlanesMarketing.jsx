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
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1674942500/metrica/metribasico_kx8sut.jpg"
                  width={150}
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
                <a
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola%20bienvenido!&text=Hola,%20quiero%20el%20plan%20Metrica%20Basico!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Me decidí </button>
                </a>
              </div>
            </div>
            <div className="marketing-columns">
              <div className="marketing-column-image">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1674942500/metrica/metripro_c6xikf.jpg"
                  width={150}
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
                <a
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola%20bienvenido!&text=Hola,%20quiero%20el%20plan%20Metrica%20Pro!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Me decidí </button>
                </a>
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
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1674942500/metrica/socialmedia_rdaxe5.jpg"
                  width={150}
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
                <a
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola%20bienvenido!&text=Hola,%20quiero%20el%20plan%20Social%20Media!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Me decidí</button>
                </a>
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
