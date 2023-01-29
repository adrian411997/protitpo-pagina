import React from "react";
import Header from "../../../../header/Header";
import Footer from "../../../../Footer/Footer";
import "./DiseñoGrafico.css";

const DiseñoGrafico =() => {
    return(
        <>
        <Header />
        <div className="grafico-content">
        <div className="titulo">
    <div>
    <h1>Diseño grafico y Social Design</h1>
    </div>
    <div >
    Detectamos y solucionamos problemas de comunicación visual.
    </div>
    <div className="tipos">
    Nuestra meta es comunicar satisfactoriamente, para eso acompañamos a la creatividad de un lenguaje comunicacional acorde a los diferentes targets de cada empresa.
    <div className="tipos"> 
    <h2>
        Tipos de desarrollos:
    </h2>
    <div className="lista">
    <li>Logo</li>
    <li>Imagen corporativa</li>
    <li>Ilustración e imagenes digitales</li>
    <li>Grafica publicitaria</li>
    <li>Editorial</li>
    <li>Interiores y señalizacion</li>
    <li>Rebranding</li>
    </div>
    </div>
    </div>
</div>
</div>
<Footer />
</>
    )
}




export default DiseñoGrafico