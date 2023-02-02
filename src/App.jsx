import "./App.css";
import Home from "./components/main/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import PlanesMarketing from "./components/main/Home/planes/Marketing/PlanesMarketing";
import NotFound from "./components/main/NotFound/notFound";
import SitiosWeb from "./components/main/Home/planes/SitiosWeb/SitiosWeb";
import DiseñoGrafico from "./components/main/Home/planes/DiseñoGrafico/DiseñoGrafico";
import NuestroEquipo from "./components/main/Home/SobreNosotros/NuestroEquipo/NuestroEquipo";
import Contactanos from "./components/main/Home/Contactanos/Contactanos";

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/marketing",
    element: <PlanesMarketing />,
    errorElement: <NotFound />,
  },
  {
    path: "/sitiosweb",
    element: <SitiosWeb />,
    errorElement: <NotFound />,
  },
  {
    path: "/diseño",
    element: <DiseñoGrafico />,
    errorElement: <NotFound />,
  },
  {
    path: "/equipo",
    element: <NuestroEquipo />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contactanos />,
    errorElement: <NotFound />,
  },
  
]);
