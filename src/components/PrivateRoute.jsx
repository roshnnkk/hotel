import React from "react";
import { Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../constant/routes";

const PrivateRoute = ({ element, loggedIn }) => {
  return loggedIn ? element : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;
