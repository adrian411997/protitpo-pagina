import React from "react";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Portada from "./Portada/Portada";
import Footer from "../../Footer/Footer";
import Servicios2 from "./Servicios/Servicios2";
const Home = () => {
  //EN ESTE ARCHIVO JUNTAREMOS TODOS LOS COMPONENTES PARA LA PAGINA INICIAL
  return (
    <>
      <Portada />
      <Servicios2 />
      <Caracteristicas />

      <Footer />
    </>
  );
};

export default Home;
