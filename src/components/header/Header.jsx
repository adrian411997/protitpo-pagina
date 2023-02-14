import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [addClass, setAddClass] = useState("");
  const [submenuIndicator, setSubmenuIndicator] = useState("haveSubmenu");
  const [submenuShowPlans, setSubmenuShow] = useState("");
  const [submenuShowUs, setSubmenuShowUs] = useState("");
  const [isDesplegado, setIsDesplegado] = useState(false);
  const [changeBackGround, setChangeBackground] = useState("");
  const [color, setColor] = useState("#000");
  const changeColor = () => {
    if (document.documentElement.scrollTop > 0) {
      setChangeBackground("sticky");
      setColor("#ffff");
    } else {
      setChangeBackground("");
      setColor("#000");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);
  const classModified = () => {
    if (!isDesplegado) {
      setAddClass("responsive-action");
      setIsDesplegado(true);
      setSubmenuIndicator("");
      console.log(isDesplegado);
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
  };
  const changeShowUs = () => {
    if (submenuShowUs === "") {
      setSubmenuShowUs("show-submenu");
    } else {
      setSubmenuShowUs("");
    }
  };
  return (
    <div className={`header ${changeBackGround} `}>
      <div className="pacentrar">
        <div className="icon">
          <Link to="/"></Link>
          <Link to="/">
            <img
              className="icon-responsive"
              src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676164851/metrica/logofluor_nyajnu.png"
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
              <svg
                viewBox="0 0 52.001 52.001"
                width={20}
                height={20}
                fill={color}
              >
                <g>
                  <g>
                    <path
                      d="M47.743,41.758L33.955,26.001l13.788-15.758c2.343-2.344,2.343-6.143,0-8.486
			c-2.345-2.343-6.144-2.342-8.486,0.001L26,16.91L12.743,1.758C10.4-0.584,6.602-0.585,4.257,1.757
			c-2.343,2.344-2.343,6.143,0,8.486l13.788,15.758L4.257,41.758c-2.343,2.343-2.343,6.142-0.001,8.485
			c2.344,2.344,6.143,2.344,8.487,0L26,35.091l13.257,15.152c2.345,2.344,6.144,2.344,8.487,0
			C50.086,47.9,50.086,44.101,47.743,41.758z"
                    />
                  </g>
                </g>
              </svg>
            </button>
          ) : (
            <button onClick={classModified}>
              <svg width="25" height="25" viewBox="0 0 12 16">
                <path
                  fill={color}
                  d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
                />
              </svg>
            </button>
          )}
        </div>
        <div className={`pest ${addClass}`}>
          <div className="enlaces">
            <ul className="navbar">
              <Link to="/">
                <li>Inicio</li>
              </Link>
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
                  <>Servicios</>
                )}
                <ul className={`submenu ${submenuShowPlans}`}>
                  <button onClick={submenuShow} className="back">
                    <img
                      src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676340396/metrica/pngwing.com_5_kmm4xm.png"
                      alt=""
                      width={25}
                    />
                  </button>
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
                  <>Sobre Nosotros</>
                )}
                <ul className={`submenu ${submenuShowUs}`}>
                  <button onClick={changeShowUs} className="back">
                    <img
                      src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676340396/metrica/pngwing.com_5_kmm4xm.png"
                      alt=""
                      width={25}
                    />
                  </button>
                  <li>Método de Trabajo</li>
                  <li>
                    <Link to="/equipo">
                      <div>Nuestro Equipo</div>
                    </Link>
                  </li>
                </ul>
              </li>
              <Link to="/contact">
                <button className="contact-button-header">Contactanos</button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
