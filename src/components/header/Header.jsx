import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={`header `}>
      <div className="icon">
        <Link to="/">
          <img
            src={
              "https://res.cloudinary.com/dni5cjwpu/image/upload/v1674244055/metrica/Recurso_2_t8unvy.png"
            }
            alt="instagram"
            width={150}
            height={50}
          />
        </Link>
      </div>
      <div className="pest">
        <div className="enlaces">
          <ul className="navbar">
            <li>Soluciones</li>
            {/*
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
            */}
            <li className="plans">
              Planes
              <svg width={25} height={25} viewBox="0 0 24 24">
                <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
              </svg>
              <ul className="submenu">
                <li>
                  <Link to="/marketing">Marketing</Link>
                </li>
                <li>
                  <Link to="/SitiosWeb">Sitios Web</Link>
                </li>
                <li>
                  <Link to="/diseño">Diseño Grafico</Link>
                </li>
              </ul>
            </li>
            {/*
            <li>Recursos gratis</li>
            */}
            <li className="blogs">Blogs</li>
            <li className="team">
              Sobre nosotros
              <svg width={25} height={25} viewBox="0 0 24 24">
                <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
              </svg>
              <ul className="submenu">
                <li>Método de Trabajo</li>
                <li>
                  <Link to="/equipo">Nuestro Equipo</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
