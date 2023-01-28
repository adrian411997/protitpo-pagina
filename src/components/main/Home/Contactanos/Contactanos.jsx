import React, { useState } from "react";
import Header from "../../../header/Header";
import Footer from "../../../Footer/Footer";
import "./Contactanos.css";

const Contactanos = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    web: "",
    pais: "",
    text: "",
    numero: "",
  });
  const [hideInput, setHideInput] = useState(false);
  const showInput = () => {
    if (!hideInput) {
      setHideInput(true);
    } else {
      setHideInput(false);
    }
  };
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-content">
          <div className="title-contact-form">
            <h1>¿Te ayudamos?</h1>
            <br />
            <p>Queremos saber que podemos hacer por ti y ayudarte a crecer</p>
            <br />
          </div>
          <div className="form">
            <form
              action="mailto:metrica.agenciamkt@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <input
                onChange={handleOnChange}
                name="nombre"
                className="input"
                placeholder="Tu nombre"
                type={"text"}
              />
              <input
                onChange={handleOnChange}
                className="input"
                name="email"
                placeholder="Tu email"
                type={"email"}
              />
              <input
                onChange={handleOnChange}
                className="input"
                name="numero"
                placeholder="Tu numero"
                type={"number"}
              />
              <input
                onChange={handleOnChange}
                className="input"
                name="web"
                placeholder="Tu Web"
                type={"url"}
              />
              <select onChange={handleOnChange} name="pais">
                <option value="Argentina">Argentina</option>
                <option value="España">España</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Chile">Chile</option>
              </select>
              <textarea onChange={handleOnChange} name="text" />
              <div className="div-button">
                <button
               
                  className="button-form-contact"
                  type="submit"
                  value={"submit"}
                  disabled={
                    form.nombre === "" ||
                    form.email === "" ||
                    form.web === "" ||
                    form.pais === "" ||
                    form.text === "" ||
                    form.numero === ""
                  }
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactanos;
