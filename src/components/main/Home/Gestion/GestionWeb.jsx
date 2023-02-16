import React from "react";
import "./GestionWeb.css";

const GestionWeb = () => {
  return (
    <div className="gestion-web-content">
      <div className="gestion-web-container">
        <div className="gestion-web-title">
          <h1>
            Potencia tu negocio con un <b>Sitio Web</b> a la medida
          </h1>
          <div className="gestion-web-list">
            <div>
              <div className="list-web-icon">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676488696/metrica/senal_1_yhueaz.png"
                  alt=""
                  width={80}
                />
              </div>
              <div>
                <div className="web-title">Diseño de Página Web simple</div>
                <div className="web-content">
                  Si recién comenzas, y contás con un presupuesto acotado o
                  simplemente querés un página simple pero efectiva para un
                  posicionamiento en Google, debido a la gran demanda de
                  búsquedas online que se realizan diarias, por lo tanto éste
                  sitio web es justo lo que necesitás. Incluye un diseño
                  responsive, y contenido de hasta 3 secciones.
                </div>
              </div>
            </div>
            <div>
              <div className="list-web-icon">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676488696/metrica/senal_2_png_we2kuc.png"
                  alt=""
                  width={80}
                />
              </div>
              <div>
                <div className="web-title">Desarollo de Página Profesional</div>
                <div className="web-content">
                  Página Web para pymes, empresas, marcas constituídas, las
                  cuales requieren un diseño profesional. Te servirá para
                  destacarte del resto de tu competencia, posicionarte en los
                  buscadores y brindar una imagen profesional a través de un
                  diseño web atractivo. Incluye un diseño responsive, contenido
                  de hasta 5 secciones, diseño avanzado y contenido auto
                  administrable.
                </div>
              </div>
            </div>
            <div>
              <div className="list-web-icon">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676488697/metrica/senal_3t_woied6.png"
                  alt=""
                  width={80}
                />
              </div>
              <div>
                <div className="web-title">Página Web con catálogo</div>
                <div className="web-content">
                  ¿Tenes variedad de productos y te interesa que tus clientes
                  puedan verlos? ¿Queres mostrar fotos de tus productos y una
                  descripción de los mismos para así generar mas consultas?
                  Entonces, éste tipo de página es ideal. Incluye un diseño
                  responsive, contenido de hasta 7 secciones, catálogo de
                  productos dividido por categorías, contenido autogestionable.
                </div>
              </div>
            </div>
            <div>
              <div className="list-web-icon">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676488696/metrica/senal_4_dvnvuj.png"
                  alt=""
                  width={80}
                />
              </div>
              <div>
                <div className="web-title">Página web eCommerce </div>
                <div className="web-content">
                  Si tu objetivo es un sitio profesional, que inspire confianza
                  y seguridad, mediante la cual permita a tus clientes no sólo
                  ver tus productos, sino poder comprarlos, mediante plataformas
                  de pago online. Te aconsejamos apostar a una tienda online con
                  carrito de compras. Incluye un diseño responsive, contenido
                  auto administrable, diseño personalizado, plataformas de pago
                  y envío.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionWeb;
