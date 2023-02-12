import React from "react";
import "./Servicios3.css";
const Servicios3 = () => {
  return (
    <div className="part-service3">
      <div className="intro-servicio">
        <div className="servicio-writing">
          <p>
            "La meta del marketing es conocer y entender al cliente tan bien que
            el producto o servicio se venda solo"
          </p>
        </div>
      </div>
      <div className="servicio-content">
        <div className="servicio-title">
          <h2>Para te que podamos ayudar, debes identificar tu problema:</h2>
        </div>
      </div>
      <div className="Servicio-cards">
        <div className="list-cards-servicios2">
          <div className="servicio-card marketing">
            <div className="add facebook-photo"></div>
            <div className="add instagram-photo"></div>
            <div className="add twitter-photo"></div>
            <div className="card-service-content">
              <p>¿Tu marca necesita un empujon para imponer presencia?</p>
            </div>
            <div className="card-service-button">
              <p>Vea nuestra solucion</p>
              <a href="/kiko">
                <button>
                  <svg
                    fill="#ffff"
                    viewBox="0 0 1024 1024"
                    width={10}
                    height={10}
                  >
                    <path d="M256 102.4v819.2l512-409.6L256 102.4z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="servicio-card web-desing">
            <div className="card-service-content">
              <p>
                ¿Quiere una pagina web para expandir su negocio pero no tiene
                los conocimientos?
              </p>
            </div>
            <div className="card-service-button">
              <p>Vea nuestra solucion</p>
              <a href="/kiko">
                <button>
                  <svg
                    fill="#ffff"
                    viewBox="0 0 1024 1024"
                    width={10}
                    height={10}
                  >
                    <path d="M256 102.4v819.2l512-409.6L256 102.4z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>{" "}
          <div className="servicio-card graphic-design">
            <div className="card-service-content">
              <p>
                ¿Buscas una marca que te identifique pero no sabes por donde
                comenzar?
              </p>
            </div>
            <div className="card-service-button">
              <p>Vea nuestra solucion</p>
              <a href="/kiko">
                <button>
                  <svg
                    fill="#ffff"
                    viewBox="0 0 1024 1024"
                    width={10}
                    height={10}
                  >
                    <path d="M256 102.4v819.2l512-409.6L256 102.4z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios3;
