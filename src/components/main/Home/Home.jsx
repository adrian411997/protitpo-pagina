import React from "react";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Portada from "./Portada/Portada";
import ServiciosHome from "./Servicios/ServiciosHome";
import Footer from "../../Footer/Footer";
import Contactanos from "./Contactanos/Contactanos";
const Home = () => {
  //EN ESTE ARCHIVO JUNTAREMOS TODOS LOS COMPONENTES PARA LA PAGINA INICIAL
  return (
    <>
      <Portada />
      <ServiciosHome />
      <Caracteristicas />
      <Contactanos />
      <Footer />
    </>
  );
};

export default Home;
