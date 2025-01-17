import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN_ROUTE } from "../constant/routes";

const PrivateRoute = ({ loggedIn }) => {
  return loggedIn ? <Outlet /> : <Navigate to={LOGIN_ROUTE} replace />;
};

export default PrivateRoute;
