import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
    const isLoggedIn = sessionStorage.getItem("loggedIn") === "true";
    return isLoggedIn ? element : <Navigate to="/" />;
  };

  export default PrivateRoute;