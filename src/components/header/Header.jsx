import React from "react";
import "./Header.css";
import logo from "../images/l.png";

const Header = () => {
  return (
    <div className="header">
      <div className="icon">
        <img src={logo} alt="instagram" width={60} height={60} />
        <p className="titulo">Métrica</p>
      </div>
      <div className="pest">
        <div className="enlaces">
          <ul className="navbar">
            <li>Soluciones</li>
            <li className="cursos">
              Cursos
              <svg width={25} height={25} viewBox="0 0 24 24">
                <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
              </svg>
              <ul className="submenu">
                <li>Marketing</li>
                <li>Programacion</li>
                <li>Analista de datos</li>
                <li>UX/UI</li>
                <li>Videojuegos</li>
              </ul>
            </li>
            <li className="plans">
              Planes
              <svg width={25} height={25} viewBox="0 0 24 24">
                <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
              </svg>
              <ul className="submenu">
                <li>Marketing</li>
                <li>Sitios Web</li>
              </ul>
            </li>

            <li>Recursos gratis</li>
            <li className="team">
              Sobre nosotros
              <svg width={25} height={25} viewBox="0 0 24 24">
                <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
              </svg>
              <ul className="submenu">
                <li>Método de Trabajo</li>
                <li>Nuestro Equipo</li>
              </ul>
            </li>
            <li>Contactanos</li>
          </ul>
        </div>
      </div>
      <div className="buttons">
        <button className="login">Iniciar Sesion</button>
      </div>
    </div>
  );
};

export default Header;
