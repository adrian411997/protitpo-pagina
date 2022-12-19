import React from "react";
import Portada from "./Portada/Portada";
import ServiciosHome from "./Servicios/ServiciosHome";
const Home = () => {
  //EN ESTE ARCHIVO JUNTAREMOS TODOS LOS COMPONENTES PARA LA PAGINA INICIAL
  return (
    <>
      <Portada />
      <ServiciosHome />
    </>
  );
};

export default Home;
