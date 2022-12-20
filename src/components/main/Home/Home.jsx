import React from "react";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Portada from "./Portada/Portada";
import ServiciosHome from "./Servicios/ServiciosHome";
import Footer from "../../Footer/Footer";
const Home = () => {
  //EN ESTE ARCHIVO JUNTAREMOS TODOS LOS COMPONENTES PARA LA PAGINA INICIAL
  return (
    <>
      <Portada />
      <ServiciosHome />
      <Caracteristicas />
      <Footer />
    </>
  );
};

export default Home;
