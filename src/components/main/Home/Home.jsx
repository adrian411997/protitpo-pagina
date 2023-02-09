import React from "react";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Portada from "./Portada/Portada";
import Footer from "../../Footer/Footer";
import Servicios2 from "./Servicios/Servicios2";
import Reunion from "./Reunion/Reunion";

const Home = () => {
  //EN ESTE ARCHIVO JUNTAREMOS TODOS LOS COMPONENTES PARA LA PAGINA INICIAL
  return (
    <div className="homepage-container">
      <Portada />
      <Servicios2 />
      <Caracteristicas />
      <Reunion />
      <Footer />
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
  );
};

export default Home;
