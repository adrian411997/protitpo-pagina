import { useRouteError } from "react-router-dom";

const NotFound =() => {
    const error = useRouteError();
    console.log(error)

    return "notFound"
};
export default NotFound