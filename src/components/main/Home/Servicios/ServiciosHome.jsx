import React, { useState, useEffect } from "react";
import "./ServiciosHome.css";

const ServiciosHome = () => {
  const [imgContent, setImgContent] = useState("hidden-img-content");
  const [text, setText] = useState("hidden-text");
  const [secur, setSecur] = useState("hidden-img-content");
  const [textSecur, setTextSecur] = useState("hidden-text");
  const [infraImage, setInfraImage] = useState("hiddent-img-content");
  const [infraText, setInfraText] = useState("hidden-text");
  const handleAnimationWeb = () => {
    if (document.documentElement.scrollTop >= 500) {
      setImgContent("image-content");
      setText("text");
    } else {
      setImgContent("hidden-img-content");
      setText("hidden-text");
    }
  };
  const handleAnimationSecur = () => {
    if (document.documentElement.scrollTop >= 1100) {
      setSecur("img-security-content");
      setTextSecur("text-security-content");
    } else {
      setSecur("hidden-img-content");
      setTextSecur("hidden-text");
    }
  };
  const handleAnimationInfra = () => {
    if (document.documentElement.scrollTop >= 1700) {
      setInfraImage("image-infra-content");
      setInfraText("text-infra-content");
    } else {
      setInfraImage("hidden-img-content");
      setInfraText("hidden-text");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleAnimationWeb);
    window.addEventListener("scroll", handleAnimationSecur);
    window.addEventListener("scroll", handleAnimationInfra);
  }, []);
  return (
    <div className="ServiciosPart">
      <div className="content-pamodificar">
        <div className="entryTitulo">
          <h1>¿Que servicios ofrecemos?</h1>
        </div>
        <div className="container">
          <div className="content-services">
            <div className={imgContent}>
              <img
                src={
                  "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546467/metrica/webpage1_dp70bu.png"
                }
                alt="webpage"
                width={350}
                height={350}
              />
              <img
                className="trabajo"
                src={
                  "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546467/metrica/trabajo_ag0kon.png"
                }
                alt="trabajo"
                width={125}
                height={125}
              />
              <img
                className="nerd"
                src={
                  "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546464/metrica/nerd_aepetx.png"
                }
                alt="nerd"
                width={100}
                height={100}
              />
              <img
                className="stonks"
                src={
                  "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546467/metrica/stonks_yqmkqj.png"
                }
                alt="nerd"
                width={90}
                height={90}
              />
            </div>
            <div className={text}>
              <div className="text-title">
                <h1>Creacion de paginas webs y hosting</h1>
              </div>
              <div className="parrafo-title">
                <b>
                  ¿Quiere aumentar sus ventas y visibilidad en internet pero le
                  es complicado?
                </b>{" "}
                No se preocupe, hacemos el trabajo duro por usted y le
                construiremos su sitio web a su medida para que resalte en
                cualquier sitio. Tambien le proporcionaremos un hosting con el
                dominio a su nombre.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="security-service">
            <div className={textSecur}>
              <div className="text-title">
                <h1>Cibersereguridad</h1>
              </div>
              <div className="parrafo-title">
                <b>
                  ¿Preocupado de que su competencia ataque sus servicios web o
                  piratas informaticos estropeen la experiencia de sus usuarios?
                </b>{" "}
                Sabemos cuan vulnerable puede ser un sitio web ante ataques de
                entes maliciosos, nosotros le proveeremos de las medidas de
                seguridad para evitar estos contratiempos.
              </div>
            </div>
            <div className={secur}>
              <img
                src={
                  "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546465/metrica/security_hxst2s.png"
                }
                alt="seguridad"
                width={550}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="infra-content">
            <div className={infraImage}>
              <img
                src={
                  "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546462/metrica/infraestructura_s5b2mr.png"
                }
                alt="webpage"
                width={350}
                height={350}
              />
            </div>
            <div className={infraText}>
              <div className="text-title">
                <h1>Instalacion de infraestructura</h1>
              </div>
              <div className="parrafo-title">
                <b>
                  ¿Desea colocar un servicio de red para su equipo de trabajo o
                  negocio?
                </b>{" "}
                Tenemos profesionales que lo asesorarán y le proporcionaran de
                materiales tecnologicos eficientes para un trabajo fluido y sin
                problemas para sus propositos además de mantenimiento y
                asistencia técnica.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosHome;
