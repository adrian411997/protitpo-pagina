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
          <h2>¿Que quieres mi bro?</h2>
          <h3>Pase nomas al fondo a la derecha</h3>
        </div>
      </div>
      <div className="Servicio-cards">
        <div className="list-cards-servicios2">
          <div className="servicio-card">
            <div className="add facebook-photo"></div>
            <div className="add instagram-photo"></div>
            <div className="add twitter-photo"></div>
            <div className="adorno likeit"></div>
            <div className="adorno likeit2"></div>
            <div className="adorno likeit3"></div>
            <div className="marketing">
              <div className="card-service-content">
                <p>¿Necesitas potenciar su presencia en sus redes sociales?</p>
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
          <div className="servicio-card web-desing">
            <div className="card-service-content">
              <p>¿Quieres tener tu propio sitio web profesional?</p>
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
              <p>¿Buscas una marca que</p>
              <p> te identifique pero no sabes</p>
              <p> por donde comenzar?</p>
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
