import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [addClass, setAddClass] = useState("");
  const [submenuIndicator, setSubmenuIndicator] = useState("haveSubmenu");
  const [submenuShowPlans, setSubmenuShow] = useState("");
  const [submenuShowUs, setSubmenuShowUs] = useState("");
  const [isDesplegado, setIsDesplegado] = useState(false);
  const classModified = () => {
    if (!isDesplegado) {
      setAddClass("responsive-action");
      setIsDesplegado(true);
      setSubmenuIndicator("");
    } else {
      setAddClass("");
      setIsDesplegado(false);
      setSubmenuIndicator("haveSubmenu");
      setSubmenuShow("");
      setSubmenuShowUs("");
    }
  };
  const submenuShow = () => {
    if (submenuShowPlans === "") {
      setSubmenuShow("show-submenu");
    } else {
      setSubmenuShow("");
    }
    console.log(submenuShowPlans);
  };
  const changeShowUs = () => {
    if (submenuShowUs === "") {
      setSubmenuShowUs("show-submenu");
    } else {
      setSubmenuShowUs("");
    }
  };
  return (
    <div className={`header `}>
      <div className="icon">
        <Link to="/">
          <img
            className="icon-big"
            src={
              "https://res.cloudinary.com/dni5cjwpu/image/upload/v1674782319/metrica/Recurso_7_vkj4ei.png"
            }
            alt="instagram"
            width={150}
            height={50}
          />
        </Link>
        <Link to="/">
          <img
            className="icon-responsive"
            src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1674782319/metrica/Recurso_7_vkj4ei.png"
            //src={"https://res.cloudinary.com/dni5cjwpu/image/upload/v1674247302/metrica/Recurso_4_aopmkj.png"}
            alt="instagram"
            width={150}
            height={50}
          />
        </Link>
      </div>
      <div className="responseive-icon">
        {isDesplegado ? (
          <button onClick={classModified}>
            <img
              src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1675117049/metrica/298889_x_icon_trfhg7.png"
              width={25}
              height={25}
              alt="responsive"
            />
          </button>
        ) : (
          <button onClick={classModified}>
            <img
              src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1675116509/metrica/menu_bi7ptb.png"
              width={25}
              height={25}
              alt="responsive"
            />
          </button>
        )}
      </div>
      <div className={`pest ${addClass}`}>
        <div className="enlaces">
          <ul className="navbar">
            <Link to="/" ><li>Inicio</li></Link>
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
            <li className={`plans ${submenuIndicator}`}>
              {isDesplegado ? (
                <>
                  <div className="responsive-div">
                    Planes
                    <button onClick={submenuShow}>
                      <svg width={20} height={20} viewBox="0 0 24 24">
                        <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  Planes
                  <svg width={25} height={25} viewBox="0 0 24 24">
                    <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
                  </svg>
                </>
              )}
              <ul className={`submenu ${submenuShowPlans}`}>
                <li>
                  <Link to="/marketing">
                    <div>Marketing</div>
                  </Link>
                </li>
                <li>
                  <Link to="/SitiosWeb">
                    <div>Sitios Web</div>
                  </Link>
                </li>
                <li>
                  <Link to="/diseño">
                    <div>Diseño Grafico</div>
                  </Link>
                </li>
              </ul>
            </li>
            {/*
            <li>Recursos gratis</li>
            */}
            <li className="blogs">Blogs</li>
            <li className={`team ${submenuIndicator}`}>
              {isDesplegado ? (
                <>
                  <div className="responsive-div">
                    Sobre Nosotros
                    <button onClick={changeShowUs}>
                      <svg width={20} height={20} viewBox="0 0 24 24">
                        <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  Sobre Nosotros
                  <svg width={25} height={25} viewBox="0 0 24 24">
                    <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z" />
                  </svg>
                </>
              )}
              <ul className={`submenu ${submenuShowUs}`}>
                <li>Método de Trabajo</li>
                <li>
                  <Link to="/equipo">
                    <div>Nuestro Equipo</div>
                  </Link>
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
