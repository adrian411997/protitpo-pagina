import { useRouteError } from "react-router-dom";
import Header from "../../header/Header";
import notFound from "../../images/notfound.jpg";
import "./notFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Header />
      <div className="notfound-container">
        <div className="notfound-content">
          <img src={notFound} alt="notfound" width={700} height={500} />
          <h2>Upss, camino equivocado, retome su recorrido desde el inicio!</h2>
          <Link to="/">
            <button className="button-back">Regresar</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFound;
