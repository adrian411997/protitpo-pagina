import React from "react";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Portada from "./Portada/Portada";
import ServiciosHome from "./Servicios/ServiciosHome";
const Home = () => {
  //EN ESTE ARCHIVO JUNTAREMOS TODOS LOS COMPONENTES PARA LA PAGINA INICIAL
  return (
    <>
      <Portada />
      <ServiciosHome />
      <Caracteristicas />
    </>
  );
};

export default Home;
