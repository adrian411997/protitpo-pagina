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
                <p>Estrategia ideal para potenciar tu marca</p>
              </div>
              <div className="marketing-column-price">
                <h2>$60.000</h2>
                <p>/ + IVA x mes</p>
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
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20quiero%20el%20plan%20Metrica%20Basico!"
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
              <div className="marketing-column-title2">
                <h3>Metrica PRO</h3>
                <p>
                  Contenido estrategico para llevar al siguiente nivel tu
                  empresa
                </p>
              </div>
              <div className="marketing-column-price">
                <h2>$85.000</h2>
                <p>/ + IVA x mes</p>
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
                    <li>Reportes mensuales</li>
                    <li>Reunion con tu manager</li>
                  </ul>
                </div>
              </div>
              <div className="marketin-column-button">
                <a
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20quiero%20el%20plan%20Metrica%20Pro!"
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
            <h1>Publicidad en Redes Sociales</h1>
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
                <h3>Meta Business</h3>
                <p>Estrategia Digital Publicitaria</p>
              </div>
              <div className="marketing-column-price">
                <h2>$35.000</h2>
                <p>/ + IVA x mes</p>
              </div>{" "}
              <div className="marketing-column-services-container">
                <div className="marketin-column-services">
                  <ul>
                    <li>
                      <b>Facebook e Instagram ADS</b>
                    </li>
                    <li>Estrategias de campaña</li>
                    <li>Reportes mensuales o semanales</li>
                    <li>Diseño Grafico y Social Design</li>
                    <li>Pauta no incluida</li>
                  </ul>
                </div>
              </div>
              <div className="marketin-column-button">
                <a
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20quiero%20el%20plan%20Social%20Media!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Me decidí</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-whatsapp">
          <div className="images-icon-wpp">
            <a
              href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20tengo%20una%20consulta!"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1674868793/metrica/wpp_xmmgba.png"
                alt="whatsapp"
                width={50}
                height={50}
              />
            </a>
          </div>

          <div className="action">
            <a
              href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20tengo%20una%20consulta!"
              target="_blank"
              rel="noreferrer"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PlanesMarketing;
