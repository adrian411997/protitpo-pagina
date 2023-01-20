import React from "react";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <div className="contact-container">
      <div className="image-form">
        <img
          src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1674246386/metrica/contacto_dchbji.png"
          alt="contactanos"
          width={500}
          height={200}
        />{" "}
      </div>
      <div className="form">
        <form>
          <div className="nombre form-container">
            <h3>Nombre completo</h3>
            <input className="input" id="name" type="text" />
          </div>
          <div className="empresa form-container">
            <h3>Empresa</h3>
            <input className="input" id="name" type="text" />
          </div>
          <div className="email form-container">
            <h3> E-mail</h3>
            <input className="input" id="name" type="text" />
          </div>
          <div className="telefono form-container">
            <h3>Telefono</h3>
            <input className="input" id="name" type="text" />
          </div>
          <div className="mensaje form-container">
            <h3>Mensaje</h3>
            <input className="input" id="name" type="text" />
          </div>
          <div className="button send-form">
            <button className="button-send">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactanos;
